Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\ADMIN\Desktop\Softstreak\public\softstreak-logo-transparent.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

# The ribbon mark is located on the left side: roughly x: 0 to 220, y: 0 to 288
$cropRect = New-Object System.Drawing.Rectangle(45, 30, 185, 228)
$iconBmp = New-Object System.Drawing.Bitmap(185, 228, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($iconBmp)
$g.DrawImage($bmp, 0, 0, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$bmp.Dispose()

$iconPath = "c:\Users\ADMIN\Desktop\Softstreak\public\softstreak-icon.png"
$iconBmp.Save($iconPath, [System.Drawing.Imaging.ImageFormat]::Png)
$iconBmp.Dispose()
Write-Host "Saved icon to: $iconPath"

