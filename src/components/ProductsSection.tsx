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
    <section id="products" className="py-24 relative bg-navy-950">
      {/* Glow effect */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-purple-700/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-indigo-700/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Softstreak Software Catalog</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Ready-to-Use Business Software{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              Built for SMB Growth
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Every business system below is pre-architected, enterprise-tested, and ready for fast deployment. 
            No endless scoping meetings or custom coding delays.
          </p>
        </div>

        {/* Filter Tabs & Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 border ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white border-purple-500 shadow-glow-sm'
                    : 'bg-navy-900/80 text-slate-300 border-white/10 hover:bg-navy-800 hover:text-white'
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
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl glass-input placeholder-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-navy-900/50 rounded-2xl border border-white/5">
            <p className="text-slate-400 text-base">No software products match your search filter.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-3 text-xs text-purple-400 hover:text-purple-300 underline font-medium"
            >
              Reset filters to show all 6 products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col justify-between bg-navy-900/80 hover:bg-navy-850/90 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-lg hover:shadow-card-hover hover:-translate-y-1 overflow-hidden"
              >
                {/* Subtle top glow bar */}
                <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-700 opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  {/* Card Header: Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/25">
                      {product.category}
                    </span>
                    <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      {product.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/30 to-indigo-600/30 border border-purple-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-purple-400 transition-all">
                      <ProductIcon name={product.iconName} className="w-6 h-6 text-purple-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs font-medium text-purple-300/90 mt-0.5 line-clamp-1">
                        {product.shortTagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-5 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Target Audience Pill */}
                  <div className="mb-5 p-2.5 rounded-lg bg-navy-950/70 border border-white/5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Target Users:
                    </span>
                    <span className="text-xs font-medium text-slate-200">
                      {product.targetAudience}
                    </span>
                  </div>

                  {/* Highlighted Capabilities */}
                  <div className="space-y-2 mb-6 flex-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Included Capabilities:
                    </span>
                    <ul className="space-y-1.5">
                      {product.capabilities.slice(0, 3).map((cap, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom CTA Actions */}
                  <div className="pt-4 border-t border-white/10 space-y-2.5">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onBookDemo(product.name)}
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-xl transition duration-200 shadow-glow-sm"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book Demo</span>
                      </button>

                      <a
                        href={buildWhatsAppUrl(`Hello Softstreak, I would like to enquire about your ${product.name}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl transition duration-200"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>

                    <button
                      onClick={() => onSelectProduct(product)}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition"
                    >
                      <Info className="w-3.5 h-3.5 text-purple-400" />
                      <span>View Specifications & Features</span>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Banner within catalog */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Need a multi-product bundle or custom workflow setup?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Softstreak can integrate your CRM, WhatsApp automation, and HR systems into a unified operational stack.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onBookDemo('Integrated Business Software Suite')}
              className="px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-xl shadow-glow-sm transition"
            >
              Book an Ecosystem Consultation
            </button>
            <a
              href={buildWhatsAppUrl("Hello Softstreak, I need advice on combining multiple business software solutions for our company.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-xs sm:text-sm font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 rounded-xl transition"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
