Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\ADMIN\Desktop\Softstreak\public\softstreak-logo.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

Write-Host "Original dimensions: $($bmp.Width) x $($bmp.Height)"

# Sample background color at top-left corner
$bgSample = $bmp.GetPixel(5, 5)
Write-Host "Background color sample: R=$($bgSample.R), G=$($bgSample.G), B=$($bgSample.B)"

# 1. Create transparent PNG
$transBmp = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# 2. Create dark-mode version (transparent BG, text 'Soft' turned white/light, red parts preserved)
$darkBmp = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($x = 0; $x -lt $bmp.Width; $x++) {
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $p = $bmp.GetPixel($x, $y)
        
        # Calculate distance to background color (approx 245-255)
        $isBg = ($p.R -ge 235 -and $p.G -ge 235 -and $p.B -ge 235)
        
        if ($isBg) {
            # Make transparent
            $transBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
            $darkBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } else {
            # Keep original for transparent PNG
            # Anti-aliasing alpha blending near edge
            $brightness = ($p.R + $p.G + $p.B) / 3.0
            $alpha = 255
            if ($brightness -gt 220) {
                $alpha = [int]([Math]::Max(0, [Math]::Min(255, (255 - $brightness) * 7.5)))
            }
            $transBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $p.R, $p.G, $p.B))
            
            # For dark-mode version:
            # If the pixel is dark gray/black (like the word 'Soft' or the tagline 'Essential Software for Every Business')
            # Red has high R, much lower G and B: ($p.R -gt 150 -and $p.R -gt ($p.G * 1.5))
            $isRed = ($p.R -gt 130 -and ($p.R - $p.G) -gt 40 -and ($p.R - $p.B) -gt 40)
            
            if ($isRed) {
                # Preserve the red ribbon and red 'streak'
                $darkBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $p.R, $p.G, $p.B))
            } else {
                # Turn dark letters into crisp white/light silver (#FFFFFF or #F1F5F9)
                $darkBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, 255, 255, 255))
            }
        }
    }
}

$bmp.Dispose()

$transPath = "c:\Users\ADMIN\Desktop\Softstreak\public\softstreak-logo-transparent.png"
$transBmp.Save($transPath, [System.Drawing.Imaging.ImageFormat]::Png)
$transBmp.Dispose()
Write-Host "Saved: $transPath"

$darkPath = "c:\Users\ADMIN\Desktop\Softstreak\public\softstreak-logo-dark.png"
$darkBmp.Save($darkPath, [System.Drawing.Imaging.ImageFormat]::Png)
$darkBmp.Dispose()
Write-Host "Saved: $darkPath"

