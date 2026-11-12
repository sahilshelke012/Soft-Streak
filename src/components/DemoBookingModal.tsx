import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { DemoBookingSection } from './DemoBookingSection';

interface DemoBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

export const DemoBookingModal: React.FC<DemoBookingModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-navy-900 border border-purple-500/40 rounded-2xl shadow-2xl z-10 overflow-hidden my-6 animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-xl bg-navy-950/80 text-slate-400 hover:text-white border border-white/10 hover:border-purple-500/50 transition-colors"
          aria-label="Close demo booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        <DemoBookingSection
          preselectedProduct={preselectedProduct}
          isModal={true}
          onSuccess={() => {}}
        />
      </div>
    </div>
  );
};

