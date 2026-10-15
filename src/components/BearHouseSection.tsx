import React, { useState, useEffect, useCallback } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight, Store, Sparkles, Layers, Eye, Palette } from 'lucide-react';

interface EditorialPlate {
  id: string;
  src: string;
  plateNo: string;
  title: string;
  subtitle: string;
  category: 'ARCHITECTURAL WALLS' | 'FOCAL INSTALLATIONS' | 'ATMOSPHERE & FLOW';
  aspectRatio: string;
  description: string;
  tag: string;
  specs: string;
}

const BEAR_HOUSE_PLATES: EditorialPlate[] = [
  {
    id: 'bay-color-flow',
    src: '/images/projects/bear-house/bear-house-eb0266-slide.png',
    plateNo: '01',
    title: 'Architectural Merchandising Bay',
    subtitle: 'Color Story & Balanced Density Planning',
    category: 'ARCHITECTURAL WALLS',
    aspectRatio: 'aspect-[16/10]',
    description: 'A wide-angle perspective of the flagship arched perimeter bay. Men’s casualwear and shirting are organized in a rhythmic pastel gradient (mint sage, blush pink, natural ecru, and desert sand) with color-blocked folded knits positioned above to achieve volumetric visual balance.',
    tag: 'COLOR FLOW & DENSITY',
    specs: 'Arch Elevation · Hanging & Shelving Integration'
  },
  {
    id: 'bear-focal-island',
    src: '/images/projects/bear-house/bear-house-img_7413.jpg',
    plateNo: '02',
    title: 'Signature Bear Focal Installation',
    subtitle: 'Central Cross-Category Styling',
    category: 'FOCAL INSTALLATIONS',
    aspectRatio: 'aspect-[1/1.06]',
    description: 'Central circular floor display utilizing The Bear House signature bear-head mannequin dressed in windowpane check woven shirt and raw denim. Tiered nested tables showcase folded coordinates, branded lifestyle accents, and warm perimeter lighting to draw shoppers deeper into the store.',
    tag: 'HERO FOCAL POINT',
    specs: 'Center Court Island · Multi-Tier Circular Staging'
  },
  {
    id: 'entrance-welcome',
    src: '/images/projects/bear-house/bear-house-img_7292.jpg',
    plateNo: '03',
    title: 'Entrance Threshold & "The Bear\'s Choice"',
    subtitle: 'First-Touch Customer Journey',
    category: 'FOCAL INSTALLATIONS',
    aspectRatio: 'aspect-[1.1/1]',
    description: 'Strategic threshold display greeting entrance footfall. Features the iconic bear figure in a dusty-rose pique polo alongside branded luggage props, curated folded denim stacks, and "The Bear’s Choice" merchandising plaque that immediately establishes brand identity.',
    tag: 'ENTRANCE SIGHTLINE',
    specs: 'Threshold Staging · Prop & Accessory Layering'
  },
  {
    id: 'grand-arch-fixture',
    src: '/images/projects/bear-house/bear-house-img_0508.jpg',
    plateNo: '04',
    title: 'Full Architectural Wall Fixture',
    subtitle: 'Lighting Integration & Tiered Capacity',
    category: 'ARCHITECTURAL WALLS',
    aspectRatio: 'aspect-[4/3]',
    description: 'In-situ execution of the warm cove-lit architectural arch. Demonstrates the strict geometric alignment of face-out hero shirts, side-hang secondary rails, and upper shelving tiers that maintain an uncluttered luxury feel despite high unit capacity.',
    tag: 'ARCHITECTURAL ELEVATION',
    specs: 'Cove Illumination · Capacity & Rhythm Balance'
  },
  {
    id: 'cash-desk-atmosphere',
    src: '/images/projects/bear-house/bear-house-img_6923.jpg',
    plateNo: '05',
    title: 'Store Atmosphere & Branded Cash Wrap',
    subtitle: 'Customer Circulation & Point-of-Sale Ambiance',
    category: 'ATMOSPHERE & FLOW',
    aspectRatio: 'aspect-[3/4]',
    description: 'Real-world retail perspective showcasing ambient recessed ceiling illumination, backlit "THE BEAR HOUSE" typography over the checkout counter, comfortable lounge seating, and disciplined customer circulation pathways.',
    tag: 'RETAIL CIRCULATION',
    specs: 'Cash Wrap Visuals · Environmental Branding'
  },
  {
    id: 'industrial-ceiling-bay',
    src: '/images/projects/bear-house/bear-house-img_6965.jpg',
    plateNo: '06',
    title: 'High-Contrast Floor Presentation',
    subtitle: 'Industrial Ceiling & Spotlight Directing',
    category: 'ATMOSPHERE & FLOW',
    aspectRatio: 'aspect-[3/4]',
    description: 'High-contrast merchandising zone beneath exposed industrial ceilings. Focused warm track spotlights accentuate crisp white shirting, folded polo color ranges, and a sharply tailored lavender linen ensemble.',
    tag: 'LIGHTING & CONTRAST',
    specs: 'Industrial Bay · Color-Blocked Tables'
  },
  {
    id: 'resort-statement-island',
    src: '/images/projects/bear-house/bear-house-img_7301.jpg',
    plateNo: '07',
    title: 'Resort & Casual Statement Island',
    subtitle: 'Dynamic Multi-Height Outfit Story',
    category: 'FOCAL INSTALLATIONS',
    aspectRatio: 'aspect-[1/1.08]',
    description: 'Comprehensive seasonal resort collection presentation. Striated sage-striped linen shirt on an elevated torso stand harmonizes with the standing bear mannequin in resort stripes and tailored sand trousers, anchored by folded pastel coordinates and travel accessories.',
    tag: 'STYLING HARMONY',
    specs: 'Seasonal Feature · Storytelling Island'
  }
];

export const BearHouseSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'ARCHITECTURAL WALLS' | 'FOCAL INSTALLATIONS' | 'ATMOSPHERE & FLOW'>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPlates = selectedFilter === 'ALL'
    ? BEAR_HOUSE_PLATES
    : BEAR_HOUSE_PLATES.filter((p) => p.category === selectedFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % BEAR_HOUSE_PLATES.length);
    }
  }, [lightboxIndex]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + BEAR_HOUSE_PLATES.length) % BEAR_HOUSE_PLATES.length);
    }
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <section
      id="bear-house-editorial"
      className="group relative pt-4 pb-20 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] select-none"
    >
      {/* 0. Top Meta Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#262320] pb-3 mb-8 sm:mb-12 font-mono text-xs text-[#8E8278]">
        <div className="flex items-center gap-3">
          <span className="text-[#722F37] font-bold text-sm">04 /</span>
          <span className="text-[#F4F0E8] font-medium tracking-[0.16em] uppercase">
            INDUSTRY EXPERIENCE · VISUAL MERCHANDISING
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 text-[11px]">
          <span className="px-2.5 py-1 rounded bg-[#141211] border border-[#262320] text-[#C8BFB2]">
            HYDERABAD, INDIA
          </span>
          <span className="px-2.5 py-1 rounded bg-[#722F37]/10 border border-[#722F37]/40 text-[#F4F0E8] font-semibold">
            46-DAY RESIDENCY
          </span>
        </div>
      </div>

      {/* 1. Main Title & Editorial Exposition */}
      <div className="space-y-6 mb-12 sm:mb-16">
        <div className="space-y-3">
          <div className="flex items-center gap-2 pt-1 font-mono text-[11px] uppercase tracking-[0.32em] text-[#722F37] font-semibold">
            <span>T H E &nbsp; B E A R &nbsp; H O U S E</span>
            <span className="text-[#38332F]">•</span>
            <span className="text-[#8E8278]">RETAIL OPERATIONS & MERCHANDISING</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F4F0E8] font-normal tracking-tight leading-[1.08]">
            Retail in the Real World
          </h2>
          <p className="font-serif text-lg sm:text-xl text-[#C8BFB2] italic font-light max-w-3xl leading-relaxed">
            Store-level display execution, architectural color flows, and commercial visual direction across flagship environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
          <p className="md:col-span-8 text-[15px] sm:text-base text-[#C8BFB2] font-sans font-light leading-relaxed">
            During a 46-day on-site visual merchandising internship with The Bear House in Hyderabad, I bridged high-level creative
            brand guidelines with hands-on daily retail execution. The scope spanned focal mannequin styling, architectural arched wall
            installations, color-blocking choreography, and high-stakes floor transitions for End-of-Season Sales (EOSS) and new store setups.
          </p>
          <div className="md:col-span-4 p-4 rounded-xl bg-[#141211] border border-[#262320] flex flex-col justify-between space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#722F37] font-semibold">
              FIELD SCOPE
            </span>
            <div className="space-y-1.5 text-xs text-[#8E8278] font-mono">
              <div className="flex justify-between">
                <span>Domain</span>
                <span className="text-[#F4F0E8]">Men’s Contemporary Casualwear</span>
              </div>
              <div className="flex justify-between">
                <span>Touchpoints</span>
                <span className="text-[#F4F0E8]">Focal Islands, Bays & Windows</span>
              </div>
              <div className="flex justify-between">
                <span>Operation</span>
                <span className="text-[#F4F0E8]">Live Store Replenishment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Interactive Curated Gallery Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-3 border-b border-[#262320]">
        <div className="flex items-center gap-2">
          <Store className="w-4 h-4 text-[#722F37]" />
          <span className="text-xs font-mono uppercase tracking-wider text-[#F4F0E8]">
            Curated Photographic Exhibits ({filteredPlates.length} Plates)
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {(['ALL', 'ARCHITECTURAL WALLS', 'FOCAL INSTALLATIONS', 'ATMOSPHERE & FLOW'] as const).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wider uppercase transition-all duration-300 ${
                selectedFilter === category
                  ? 'bg-[#722F37] text-[#F4F0E8] shadow-md border border-[#722F37]'
                  : 'bg-[#141211] text-[#8E8278] hover:text-[#F4F0E8] border border-[#262320] hover:border-[#38332F]'
              }`}
            >
              {category === 'ALL' ? 'All (7)' : category}
            </button>
          ))}
        </div>
      </div>

      {/* 3. HERO MASTERWORK PLATE (Plate 01 - Architectural Bay & Color Flow) */}
      {(selectedFilter === 'ALL' || selectedFilter === 'ARCHITECTURAL WALLS') && (
        <div className="group/hero relative rounded-2xl border border-[#262320] bg-[#141211] p-3.5 sm:p-5 shadow-2xl mb-12 sm:mb-16 transition-all duration-500 hover:border-[#722F37]/60">
          <div
            className="relative aspect-[16/10] sm:aspect-[1.65/1] w-full rounded-xl overflow-hidden bg-[#0A0908] cursor-pointer"
            onClick={() => openLightbox(0)}
          >
            <img
              src={BEAR_HOUSE_PLATES[0].src}
              alt={BEAR_HOUSE_PLATES[0].title}
              className="w-full h-full object-cover object-center filter brightness-[0.98] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/hero:scale-[1.015]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/hero:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141211]/90 border border-[#722F37] text-xs font-mono text-[#F4F0E8] shadow-xl backdrop-blur-sm">
                <ZoomIn className="w-4 h-4 text-[#722F37]" /> Inspect High-Resolution Masterwork
              </span>
            </div>

            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded bg-[#0B0A09]/80 backdrop-blur-md border border-[#262320] text-[10px] font-mono text-[#F4F0E8] uppercase tracking-wider">
                Plate 01 · Hero Architectural Anchor
              </span>
            </div>
          </div>

          <div className="pt-4 px-1 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <span className="text-[#F4F0E8] font-medium tracking-wide">
                01 / {BEAR_HOUSE_PLATES[0].title}
              </span>
              <span className="text-[#722F37] font-semibold tracking-wider">
                {BEAR_HOUSE_PLATES[0].tag}
              </span>
            </div>
            <p className="text-sm text-[#C8BFB2] font-sans font-light leading-relaxed">
              {BEAR_HOUSE_PLATES[0].description}
            </p>
          </div>
        </div>
      )}

      {/* 4. ASYMMETRICAL EDITORIAL SPREAD A: FOCAL MANNEQUIN & ENTRANCE THRESHOLD */}
      {(selectedFilter === 'ALL' || selectedFilter === 'FOCAL INSTALLATIONS') && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-12 sm:mb-16">
          {/* Plate 02: Bear Focal Island */}
          <div className="lg:col-span-6 group/p2 relative rounded-2xl border border-[#262320] bg-[#141211] p-3.5 sm:p-5 shadow-2xl transition-all duration-500 hover:border-[#722F37]/60 flex flex-col justify-between">
            <div
              className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#0A0908] cursor-pointer"
              onClick={() => openLightbox(1)}
            >
              <img
                src={BEAR_HOUSE_PLATES[1].src}
                alt={BEAR_HOUSE_PLATES[1].title}
                className="w-full h-full object-cover object-center filter brightness-[0.98] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/p2:scale-[1.015]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/p2:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#141211]/90 border border-[#722F37] text-xs font-mono text-[#F4F0E8] shadow-xl backdrop-blur-sm">
                  <ZoomIn className="w-3.5 h-3.5 text-[#722F37]" /> Expand Plate 02
                </span>
              </div>
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded bg-[#0B0A09]/80 backdrop-blur-md border border-[#262320] text-[10px] font-mono text-[#F4F0E8]">
                  Plate 02
                </span>
              </div>
            </div>

            <div className="pt-4 px-1 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#F4F0E8] font-medium">02 / {BEAR_HOUSE_PLATES[1].title}</span>
                <span className="text-[#722F37]">{BEAR_HOUSE_PLATES[1].tag}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#C8BFB2] font-sans font-light leading-relaxed">
                {BEAR_HOUSE_PLATES[1].description}
              </p>
            </div>
          </div>

          {/* Plate 03: Entrance Welcome */}
          <div className="lg:col-span-6 group/p3 relative rounded-2xl border border-[#262320] bg-[#141211] p-3.5 sm:p-5 shadow-2xl transition-all duration-500 hover:border-[#722F37]/60 flex flex-col justify-between">
            <div
              className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#0A0908] cursor-pointer"
              onClick={() => openLightbox(2)}
            >
              <img
                src={BEAR_HOUSE_PLATES[2].src}
                alt={BEAR_HOUSE_PLATES[2].title}
                className="w-full h-full object-cover object-center filter brightness-[0.98] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/p3:scale-[1.015]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/p3:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#141211]/90 border border-[#722F37] text-xs font-mono text-[#F4F0E8] shadow-xl backdrop-blur-sm">
                  <ZoomIn className="w-3.5 h-3.5 text-[#722F37]" /> Expand Plate 03
                </span>
              </div>
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded bg-[#0B0A09]/80 backdrop-blur-md border border-[#262320] text-[10px] font-mono text-[#F4F0E8]">
                  Plate 03
                </span>
              </div>
            </div>

            <div className="pt-4 px-1 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#F4F0E8] font-medium">03 / {BEAR_HOUSE_PLATES[2].title}</span>
                <span className="text-[#722F37]">{BEAR_HOUSE_PLATES[2].tag}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#C8BFB2] font-sans font-light leading-relaxed">
                {BEAR_HOUSE_PLATES[2].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 5. STRATEGIC INSIGHT: THE REAL-WORLD VM CHALLENGE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 sm:mb-16 pt-8 pb-8 border-y border-[#262320]">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#722F37] font-semibold">
            THE RETAIL REALITY
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F0E8] font-normal leading-snug">
            The Challenge
          </h3>
          <p className="font-serif text-lg text-[#F4F0E8] italic font-light leading-relaxed">
            "How can visual merchandising and store execution support a consistent, organised and customer-friendly retail environment?"
          </p>
          <p className="text-[14px] sm:text-[15px] text-[#C8BFB2] font-sans font-light leading-relaxed">
            Unlike theoretical collection planning, brick-and-mortar retail is subject to constant kinetic disruption: rapid stock turn,
            sizes breaking out of sets, differing customer browsing speeds, and intense promotional events. Merchandising must stay resilient
            under peak shopping hours without looking messy or depleted.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#722F37] font-semibold">
            OPERATIONAL METHODOLOGY
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F0E8] font-normal leading-snug">
            Tactical Execution & Standards
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="p-4 rounded-xl border border-[#262320] bg-[#141211]/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F4F0E8]">
                <Palette className="w-3.5 h-3.5 text-[#722F37]" />
                <span className="font-semibold">Graduated Color Stories</span>
              </div>
              <p className="text-xs text-[#8E8278] leading-relaxed">
                Organizing hanging units by precise color temperature—from cool mint and soft rose to warm beige—guides the customer eye naturally across full wall elevations.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[#262320] bg-[#141211]/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F4F0E8]">
                <Layers className="w-3.5 h-3.5 text-[#722F37]" />
                <span className="font-semibold">Cross-Category Staging</span>
              </div>
              <p className="text-xs text-[#8E8278] leading-relaxed">
                Pairing seasonal button-downs with coordinated bottom-wear, luggage, and footwear on central islands promotes high basket sizes and immediate full-look inspiration.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[#262320] bg-[#141211]/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F4F0E8]">
                <Eye className="w-3.5 h-3.5 text-[#722F37]" />
                <span className="font-semibold">Primary Sightline Angles</span>
              </div>
              <p className="text-xs text-[#8E8278] leading-relaxed">
                Positioning the signature bear mannequins directly in line with entrance sightlines establishes instant curiosity and pulls traffic into secondary zones.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[#262320] bg-[#141211]/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F4F0E8]">
                <Sparkles className="w-3.5 h-3.5 text-[#722F37]" />
                <span className="font-semibold">EOSS Stock Segregation</span>
              </div>
              <p className="text-xs text-[#8E8278] leading-relaxed">
                Implementing systematic floor transitions during high-velocity End-of-Season Sales to maintain premium brand codes even amidst discount volumes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 6. ASYMMETRICAL SPREAD B: ARCHITECTURAL WALL & CASH WRAP PERSPECTIVE */}
      {(selectedFilter === 'ALL' || selectedFilter === 'ARCHITECTURAL WALLS' || selectedFilter === 'ATMOSPHERE & FLOW') && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-12 sm:mb-16">
          {/* Plate 04: Full Architectural Wall Fixture */}
          <div className="lg:col-span-7 group/p4 relative rounded-2xl border border-[#262320] bg-[#141211] p-3.5 sm:p-5 shadow-2xl transition-all duration-500 hover:border-[#722F37]/60 flex flex-col justify-between">
            <div
              className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#0A0908] cursor-pointer"
              onClick={() => openLightbox(3)}
            >
              <img
                src={BEAR_HOUSE_PLATES[3].src}
                alt={BEAR_HOUSE_PLATES[3].title}
                className="w-full h-full object-cover object-center filter brightness-[0.98] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/p4:scale-[1.015]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/p4:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#141211]/90 border border-[#722F37] text-xs font-mono text-[#F4F0E8] shadow-xl backdrop-blur-sm">
                  <ZoomIn className="w-3.5 h-3.5 text-[#722F37]" /> Expand Plate 04
                </span>
              </div>
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded bg-[#0B0A09]/80 backdrop-blur-md border border-[#262320] text-[10px] font-mono text-[#F4F0E8]">
                  Plate 04 · Architecture
                </span>
              </div>
            </div>

            <div className="pt-4 px-1 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#F4F0E8] font-medium">04 / {BEAR_HOUSE_PLATES[3].title}</span>
                <span className="text-[#722F37]">{BEAR_HOUSE_PLATES[3].tag}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#C8BFB2] font-sans font-light leading-relaxed">
                {BEAR_HOUSE_PLATES[3].description}
              </p>
            </div>
          </div>

          {/* Plate 05: Store Atmosphere & Cash Desk */}
          <div className="lg:col-span-5 group/p5 relative rounded-2xl border border-[#262320] bg-[#141211] p-3.5 sm:p-5 shadow-2xl transition-all duration-500 hover:border-[#722F37]/60 flex flex-col justify-between">
            <div
              className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#0A0908] cursor-pointer"
              onClick={() => openLightbox(4)}
            >
              <img
                src={BEAR_HOUSE_PLATES[4].src}
                alt={BEAR_HOUSE_PLATES[4].title}
                className="w-full h-full object-cover object-center filter brightness-[0.98] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/p5:scale-[1.015]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/p5:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#141211]/90 border border-[#722F37] text-xs font-mono text-[#F4F0E8] shadow-xl backdrop-blur-sm">
                  <ZoomIn className="w-3.5 h-3.5 text-[#722F37]" /> Expand Plate 05
                </span>
              </div>
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded bg-[#0B0A09]/80 backdrop-blur-md border border-[#262320] text-[10px] font-mono text-[#F4F0E8]">
                  Plate 05 · Environment
                </span>
              </div>
            </div>

            <div className="pt-4 px-1 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#F4F0E8] font-medium">05 / {BEAR_HOUSE_PLATES[4].title}</span>
                <span className="text-[#722F37]">{BEAR_HOUSE_PLATES[4].tag}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#C8BFB2] font-sans font-light leading-relaxed">
                {BEAR_HOUSE_PLATES[4].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 7. ASYMMETRICAL SPREAD C: INDUSTRIAL BAY & RESORT ISLAND */}
      {(selectedFilter === 'ALL' || selectedFilter === 'ATMOSPHERE & FLOW' || selectedFilter === 'FOCAL INSTALLATIONS') && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-12 sm:mb-16">
          {/* Plate 06: Industrial Ceiling Bay */}
          <div className="lg:col-span-5 group/p6 relative rounded-2xl border border-[#262320] bg-[#141211] p-3.5 sm:p-5 shadow-2xl transition-all duration-500 hover:border-[#722F37]/60 flex flex-col justify-between">
            <div
              className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#0A0908] cursor-pointer"
              onClick={() => openLightbox(5)}
            >
              <img
                src={BEAR_HOUSE_PLATES[5].src}
                alt={BEAR_HOUSE_PLATES[5].title}
                className="w-full h-full object-cover object-center filter brightness-[0.98] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/p6:scale-[1.015]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/p6:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#141211]/90 border border-[#722F37] text-xs font-mono text-[#F4F0E8] shadow-xl backdrop-blur-sm">
                  <ZoomIn className="w-3.5 h-3.5 text-[#722F37]" /> Expand Plate 06
                </span>
              </div>
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded bg-[#0B0A09]/80 backdrop-blur-md border border-[#262320] text-[10px] font-mono text-[#F4F0E8]">
                  Plate 06 · Zone Contrast
                </span>
              </div>
            </div>

            <div className="pt-4 px-1 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#F4F0E8] font-medium">06 / {BEAR_HOUSE_PLATES[5].title}</span>
                <span className="text-[#722F37]">{BEAR_HOUSE_PLATES[5].tag}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#C8BFB2] font-sans font-light leading-relaxed">
                {BEAR_HOUSE_PLATES[5].description}
              </p>
            </div>
          </div>

          {/* Plate 07: Resort Statement Island */}
          <div className="lg:col-span-7 group/p7 relative rounded-2xl border border-[#262320] bg-[#141211] p-3.5 sm:p-5 shadow-2xl transition-all duration-500 hover:border-[#722F37]/60 flex flex-col justify-between">
            <div
              className="relative aspect-square sm:aspect-[1.15/1] w-full rounded-xl overflow-hidden bg-[#0A0908] cursor-pointer"
              onClick={() => openLightbox(6)}
            >
              <img
                src={BEAR_HOUSE_PLATES[6].src}
                alt={BEAR_HOUSE_PLATES[6].title}
                className="w-full h-full object-cover object-center filter brightness-[0.98] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/p7:scale-[1.015]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/p7:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#141211]/90 border border-[#722F37] text-xs font-mono text-[#F4F0E8] shadow-xl backdrop-blur-sm">
                  <ZoomIn className="w-3.5 h-3.5 text-[#722F37]" /> Expand Plate 07
                </span>
              </div>
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded bg-[#0B0A09]/80 backdrop-blur-md border border-[#262320] text-[10px] font-mono text-[#F4F0E8]">
                  Plate 07 · Seasonal Story
                </span>
              </div>
            </div>

            <div className="pt-4 px-1 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#F4F0E8] font-medium">07 / {BEAR_HOUSE_PLATES[6].title}</span>
                <span className="text-[#722F37]">{BEAR_HOUSE_PLATES[6].tag}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#C8BFB2] font-sans font-light leading-relaxed">
                {BEAR_HOUSE_PLATES[6].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 8. KEY CONTRIBUTIONS (4 Clear Operational Pillars) */}
      <div className="space-y-6 pt-6 border-t border-[#262320]">
        <div className="space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#722F37] font-semibold block">
            CORE DELIVERABLES & LEARNINGS
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F0E8] font-normal leading-tight">
            Key Contributions
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 pt-2">
          {/* Pillar 1 */}
          <div className="p-5 rounded-2xl border border-[#262320] bg-[#141211] space-y-3 transition-all duration-300 hover:border-[#722F37]/50">
            <span className="text-[#722F37] font-mono text-xs font-semibold">01 /</span>
            <h4 className="font-serif text-lg text-[#F4F0E8] font-medium leading-snug">
              Mannequin Styling & Displays
            </h4>
            <p className="text-xs sm:text-[13px] text-[#C8BFB2] font-sans font-light leading-relaxed">
              Executed mannequin styling, displays, colour flows, fixtures and props. Brought cohesive character to signature animal-head mannequins through precise outfit pairing.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-5 rounded-2xl border border-[#262320] bg-[#141211] space-y-3 transition-all duration-300 hover:border-[#722F37]/50">
            <span className="text-[#722F37] font-mono text-xs font-semibold">02 /</span>
            <h4 className="font-serif text-lg text-[#F4F0E8] font-medium leading-snug">
              Colour Flows & Fixture Rhythm
            </h4>
            <p className="text-xs sm:text-[13px] text-[#C8BFB2] font-sans font-light leading-relaxed">
              Curated harmonious gradients from pastel tones to indigo denim across arched wall units, ensuring clear product categorization and visual rhythm.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-5 rounded-2xl border border-[#262320] bg-[#141211] space-y-3 transition-all duration-300 hover:border-[#722F37]/50">
            <span className="text-[#722F37] font-mono text-xs font-semibold">03 /</span>
            <h4 className="font-serif text-lg text-[#F4F0E8] font-medium leading-snug">
              EOSS Floor Transitions
            </h4>
            <p className="text-xs sm:text-[13px] text-[#C8BFB2] font-sans font-light leading-relaxed">
              Supported End-of-Season Sale setups, including stock segregation, density rebalancing, and rapid sales floor transitions while maintaining visual dignity.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-5 rounded-2xl border border-[#262320] bg-[#141211] space-y-3 transition-all duration-300 hover:border-[#722F37]/50">
            <span className="text-[#722F37] font-mono text-xs font-semibold">04 /</span>
            <h4 className="font-serif text-lg text-[#F4F0E8] font-medium leading-snug">
              New Store Setup Exposure
            </h4>
            <p className="text-xs sm:text-[13px] text-[#C8BFB2] font-sans font-light leading-relaxed">
              Gained direct hands-on exposure to new-store setup and retail execution across selected Hyderabad stores, working from brand blueprints to customer-ready presentation.
            </p>
          </div>
        </div>

        {/* Closing Takeaway Banner */}
        <div className="p-6 rounded-2xl border border-[#262320] bg-[#141211]/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#722F37] font-semibold">
              KEY TAKEAWAY
            </span>
            <p className="font-serif text-base sm:text-lg text-[#F4F0E8] italic font-light">
              "Understanding how visual standards, product presentation and stock organisation translate into real-world retail execution."
            </p>
          </div>
          <span className="shrink-0 px-3 py-1.5 rounded-full bg-[#722F37]/15 border border-[#722F37]/40 text-[#F4F0E8] text-xs font-mono font-medium">
            Commercial Architecture in Action
          </span>
        </div>
      </div>

      {/* 9. HIGH-RESOLUTION LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center bg-[#141211] rounded-2xl border border-[#262320] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="w-full flex items-center justify-between px-5 py-3.5 border-b border-[#262320] bg-[#0B0A09]/80 font-mono text-xs text-[#8E8278]">
              <div className="flex items-center gap-3">
                <span className="text-[#722F37] font-semibold">Plate {BEAR_HOUSE_PLATES[lightboxIndex].plateNo}</span>
                <span className="text-[#38332F]">•</span>
                <span className="text-[#F4F0E8] truncate max-w-[200px] sm:max-w-md">
                  {BEAR_HOUSE_PLATES[lightboxIndex].title}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] text-[#C8BFB2]">
                  {lightboxIndex + 1} / {BEAR_HOUSE_PLATES.length}
                </span>
                <button
                  onClick={closeLightbox}
                  className="p-1.5 rounded-full hover:bg-[#262320] text-[#C8BFB2] hover:text-[#F4F0E8] transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Image Display */}
            <div className="relative w-full flex-grow flex items-center justify-center bg-[#070606] p-2 sm:p-4 overflow-hidden min-h-[300px] max-h-[68vh]">
              <img
                src={BEAR_HOUSE_PLATES[lightboxIndex].src}
                alt={BEAR_HOUSE_PLATES[lightboxIndex].title}
                className="max-h-[64vh] max-w-full object-contain rounded-lg shadow-lg select-none"
              />

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-[#141211]/80 hover:bg-[#722F37] border border-[#262320] text-[#F4F0E8] transition-all shadow-xl"
                aria-label="Previous plate"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-[#141211]/80 hover:bg-[#722F37] border border-[#262320] text-[#F4F0E8] transition-all shadow-xl"
                aria-label="Next plate"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Footer Description */}
            <div className="w-full px-5 py-3.5 border-t border-[#262320] bg-[#0E0D0C] space-y-1 text-left">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="text-[#F4F0E8] font-medium">{BEAR_HOUSE_PLATES[lightboxIndex].subtitle}</span>
                <span className="text-[11px] text-[#722F37]">{BEAR_HOUSE_PLATES[lightboxIndex].specs}</span>
              </div>
              <p className="text-xs sm:text-[13px] text-[#C8BFB2] font-sans font-light leading-relaxed">
                {BEAR_HOUSE_PLATES[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BearHouseSection;
