import React, { useEffect } from 'react';
import { X, CheckCircle, Calendar, MessageSquare, Shield, Users, ArrowRight } from 'lucide-react';
import type { ProductItem } from '../types';
import { ProductIcon } from './ProductIcon';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onBookDemo: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onBookDemo
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl z-10 overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        
        {/* Header bar */}
        <div className="relative bg-[#F7F8FA] p-6 sm:p-8 border-b border-slate-200">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white text-slate-500 hover:text-[#171923] border border-slate-200 hover:border-slate-300 transition-colors shadow-soft-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-[#E52430] shadow-soft-sm shrink-0">
              <ProductIcon name={product.iconName} className="w-7 h-7" />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white text-[#E52430] border border-red-200">
                  {product.category}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-200/70 text-[#171923]">
                  {product.deploymentTime}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Offered under {siteConfig.parentCompany}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171923]">
                {product.name}
              </h3>
              <p className="text-sm font-semibold text-[#E52430] mt-0.5">
                {product.shortTagline}
              </p>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Product Overview
            </h4>
            <p className="text-sm sm:text-base text-[#252832] leading-relaxed bg-[#F7F8FA] p-4 rounded-xl border border-slate-200/80">
              {product.description}
            </p>
          </div>

          {/* Target Audience & Governance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#F7F8FA] p-4 rounded-xl border border-slate-200/80">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E52430] mb-1">
                <Users className="w-4 h-4" />
                <span>Primary Target Users</span>
              </div>
              <p className="text-sm text-[#171923] font-bold">
                {product.targetAudience}
              </p>
            </div>

            <div className="bg-[#F7F8FA] p-4 rounded-xl border border-slate-200/80">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
                <Shield className="w-4 h-4" />
                <span>Deployment & Governance</span>
              </div>
              <p className="text-sm text-[#171923] font-bold">
                Turnkey Ready • Supported under {siteConfig.parentCompany}
              </p>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Core Capabilities & Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-soft-sm">
                  <CheckCircle className="w-4 h-4 text-[#E52430] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#252832] font-medium">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Tangible Business Benefits for SMBs
            </h4>
            <ul className="space-y-2">
              {product.keyBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#252832]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E52430] mt-2 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal For */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Best Fit For
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.idealFor.map((item, i) => (
                <span
                  key={i}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#EEF0F3] text-[#171923] border border-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#F7F8FA] p-5 sm:p-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-600 text-center sm:text-left">
            Have custom requirements? Talk directly with our team.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={buildWhatsAppUrl(`Hello SoftStreak, I have questions regarding your ${product.name}. Can we discuss details?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-[#171923] bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition shadow-soft-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onBookDemo(product.name);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#E52430] hover:bg-[#CF1B27] rounded-xl shadow-soft-sm hover:shadow-red-sm transition"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Demo for {product.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
