import React, { useState, useMemo } from 'react';
import { 
  Search, 
  MessageSquare, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  Info
} from 'lucide-react';
import { productsData } from '../data/products';
import type { ProductItem } from '../types';
import { ProductIcon } from './ProductIcon';
import { buildWhatsAppUrl } from '../config/siteConfig';

interface ProductsSectionProps {
  onSelectProduct: (product: ProductItem) => void;
  onBookDemo: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProduct,
  onBookDemo,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Operations', 'Growth & Comms', 'AI & Automation', 'Specialized Industry'];

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortTagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.targetAudience.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-20 relative bg-white border-t border-b border-[#EEF0F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#E52430] text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SoftStreak Software Catalog</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171923] tracking-tight">
            Ready-to-Use Business Software{' '}
            <span className="text-[#E52430]">
              Built for SMB Growth
            </span>
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-[#252832]">
            Every business system below is pre-architected, enterprise-tested, and ready for fast deployment. 
            No endless scoping meetings or custom coding delays.
          </p>
        </div>

        {/* Filter Tabs & Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 border ${
                  selectedCategory === cat
                    ? 'bg-[#E52430] text-white border-[#E52430] shadow-soft-sm'
                    : 'bg-[#F7F8FA] text-[#252832] border-slate-200 hover:bg-slate-100 hover:text-[#171923]'
                }`}
              >
                {cat}
                {cat === 'All' && ` (${productsData.length})`}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search software products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl clean-input placeholder-slate-400 shadow-soft-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-[#171923]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#F7F8FA] rounded-2xl border border-slate-200">
            <p className="text-[#252832] text-base font-medium">No software products match your search filter.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-3 text-xs text-[#E52430] hover:underline font-bold"
            >
              Reset filters to show all 6 products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col justify-between bg-white rounded-2xl border border-[#EEF0F3] hover:border-red-300 transition-all duration-300 shadow-soft hover:shadow-card-hover hover:-translate-y-1 overflow-hidden"
              >
                {/* Red top accent strip */}
                <div className="h-1 w-full bg-[#E52430] opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  {/* Card Header: Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-[#252832] border border-slate-200">
                      {product.category}
                    </span>
                    <span className="text-[11px] font-bold text-[#E52430] bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
                      {product.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0 group-hover:bg-[#E52430] text-[#E52430] group-hover:text-white transition-all duration-200">
                      <ProductIcon name={product.iconName} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#171923] group-hover:text-[#E52430] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#E52430] mt-0.5 line-clamp-1">
                        {product.shortTagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#252832] leading-relaxed mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Target Audience Pill */}
                  <div className="mb-4 p-2.5 rounded-xl bg-[#F7F8FA] border border-slate-100">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Target Users:
                    </span>
                    <span className="text-xs font-bold text-[#171923]">
                      {product.targetAudience}
                    </span>
                  </div>

                  {/* Highlighted Capabilities */}
                  <div className="space-y-2 mb-6 flex-1">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Included Capabilities:
                    </span>
                    <ul className="space-y-1.5">
                      {product.capabilities.slice(0, 3).map((cap, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#252832]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E52430] shrink-0 mt-0.5" />
                          <span className="line-clamp-1 font-medium">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom CTA Actions */}
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onBookDemo(product.name)}
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-white bg-[#E52430] hover:bg-[#CF1B27] rounded-xl transition duration-200 shadow-soft-sm"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book Demo</span>
                      </button>

                      <a
                        href={buildWhatsAppUrl(`Hello SoftStreak, I would like to enquire about your ${product.name}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-[#171923] bg-[#EEF0F3] hover:bg-slate-200 border border-slate-200 rounded-xl transition duration-200"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                        <span>WhatsApp</span>
                      </a>
                    </div>

                    <button
                      onClick={() => onSelectProduct(product)}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-slate-600 hover:text-[#E52430] hover:bg-red-50/50 rounded-xl transition"
                    >
                      <Info className="w-3.5 h-3.5 text-[#E52430]" />
                      <span>View Specifications & Features</span>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Banner within catalog */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#F7F8FA] border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft-sm">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-[#171923]">
              Need a multi-product bundle or custom workflow setup?
            </h4>
            <p className="text-xs sm:text-sm text-[#252832]">
              SoftStreak can integrate your CRM, WhatsApp automation, and HR systems into a unified operational stack.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onBookDemo('Integrated Business Software Suite')}
              className="px-5 py-3 text-xs sm:text-sm font-bold text-white bg-[#E52430] hover:bg-[#CF1B27] rounded-xl shadow-soft-sm transition"
            >
              Book an Ecosystem Consultation
            </button>
            <a
              href={buildWhatsAppUrl("Hello SoftStreak, I need advice on combining multiple business software solutions for our company.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-xs sm:text-sm font-bold text-[#171923] bg-white border border-slate-300 hover:bg-slate-50 rounded-xl transition shadow-soft-sm"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
