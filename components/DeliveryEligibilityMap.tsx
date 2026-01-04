'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ComposableMap, Geographies, Geography, Marker, Line, ZoomableGroup } from 'react-simple-maps';
import { geoCentroid } from 'd3-geo';

const geoUrl = "/maps/countries-110m.json";

// Legal export destinations
const LEGAL: Record<string, { name: string; delivery: string; region: string }> = {
  '840': { name: 'United States', delivery: 'Origin', region: 'North America' },
  '076': { name: 'Brazil', delivery: '1-2 weeks', region: 'South America' },
  '032': { name: 'Argentina', delivery: '1-2 weeks', region: 'South America' },
  '152': { name: 'Chile', delivery: '1-2 weeks', region: 'South America' },
  '170': { name: 'Colombia', delivery: '1-2 weeks', region: 'South America' },
  '604': { name: 'Peru', delivery: '1-2 weeks', region: 'South America' },
  '218': { name: 'Ecuador', delivery: '1-2 weeks', region: 'South America' },
  '600': { name: 'Paraguay', delivery: '1-2 weeks', region: 'South America' },
  '068': { name: 'Bolivia', delivery: '1-2 weeks', region: 'South America' },
  '591': { name: 'Panama', delivery: '1-2 weeks', region: 'Central America' },
  '188': { name: 'Costa Rica', delivery: '1-2 weeks', region: 'Central America' },
  '484': { name: 'Mexico', delivery: '1 week', region: 'North America' },
  '826': { name: 'United Kingdom', delivery: '2-3 weeks', region: 'Europe' },
  '250': { name: 'France', delivery: '2-3 weeks', region: 'Europe' },
  '276': { name: 'Germany', delivery: '2-3 weeks', region: 'Europe' },
  '724': { name: 'Spain', delivery: '2-3 weeks', region: 'Europe' },
  '380': { name: 'Italy', delivery: '2-3 weeks', region: 'Europe' },
  '528': { name: 'Netherlands', delivery: '2-3 weeks', region: 'Europe' },
  '056': { name: 'Belgium', delivery: '2-3 weeks', region: 'Europe' },
  '756': { name: 'Switzerland', delivery: '2-3 weeks', region: 'Europe' },
  '040': { name: 'Austria', delivery: '2-3 weeks', region: 'Europe' },
  '620': { name: 'Portugal', delivery: '2-3 weeks', region: 'Europe' },
  '300': { name: 'Greece', delivery: '2-3 weeks', region: 'Europe' },
  '578': { name: 'Norway', delivery: '2-3 weeks', region: 'Europe' },
  '752': { name: 'Sweden', delivery: '2-3 weeks', region: 'Europe' },
  '208': { name: 'Denmark', delivery: '2-3 weeks', region: 'Europe' },
  '246': { name: 'Finland', delivery: '2-3 weeks', region: 'Europe' },
  '784': { name: 'UAE', delivery: '2-3 weeks', region: 'Middle East' },
  '682': { name: 'Saudi Arabia', delivery: '2-3 weeks', region: 'Middle East' },
  '634': { name: 'Qatar', delivery: '2-3 weeks', region: 'Middle East' },
  '414': { name: 'Kuwait', delivery: '2-3 weeks', region: 'Middle East' },
  '512': { name: 'Oman', delivery: '2-3 weeks', region: 'Middle East' },
  '048': { name: 'Bahrain', delivery: '2-3 weeks', region: 'Middle East' },
  '376': { name: 'Israel', delivery: '2-3 weeks', region: 'Middle East' },
  '400': { name: 'Jordan', delivery: '2-3 weeks', region: 'Middle East' },
  '792': { name: 'Turkey', delivery: '2-3 weeks', region: 'Middle East' },
  '392': { name: 'Japan', delivery: '3-4 weeks', region: 'Asia-Pacific' },
  '410': { name: 'South Korea', delivery: '3-4 weeks', region: 'Asia-Pacific' },
  '036': { name: 'Australia', delivery: '3-4 weeks', region: 'Asia-Pacific' },
  '554': { name: 'New Zealand', delivery: '3-4 weeks', region: 'Asia-Pacific' },
  '702': { name: 'Singapore', delivery: '3-4 weeks', region: 'Asia-Pacific' },
  '458': { name: 'Malaysia', delivery: '3-4 weeks', region: 'Asia-Pacific' },
  '764': { name: 'Thailand', delivery: '3-4 weeks', region: 'Asia-Pacific' },
  '608': { name: 'Philippines', delivery: '3-4 weeks', region: 'Asia-Pacific' },
  '360': { name: 'Indonesia', delivery: '3-4 weeks', region: 'Asia-Pacific' },
  '356': { name: 'India', delivery: '3-4 weeks', region: 'Asia-Pacific' },
  '710': { name: 'South Africa', delivery: '2-4 weeks', region: 'Africa' },
  '404': { name: 'Kenya', delivery: '3-4 weeks', region: 'Africa' },
  '818': { name: 'Egypt', delivery: '2-3 weeks', region: 'Africa' },
  '504': { name: 'Morocco', delivery: '2-3 weeks', region: 'Africa' },
  '566': { name: 'Nigeria', delivery: '3-4 weeks', region: 'Africa' },
};

const USA_COORDS: [number, number] = [-95.7129, 37.0902];
const DEFAULT_CENTER: [number, number] = [10, 20];
const DEFAULT_ZOOM = 1;
const MIN_ZOOM = 1;
const MAX_ZOOM = 4;

export default function DeliveryEligibilityMap() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const [center] = useState<[number, number]>(DEFAULT_CENTER);
  const [showLocationPrompt, setShowLocationPrompt] = useState(true);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [closestCountry, setClosestCountry] = useState<string | null>(null);
  
  const pointerDownRef = useRef<{ x: number; y: number } | null>(null);
  const isDraggingRef = useRef(false);
  const coordsRef = useRef<Map<string, [number, number]>>(new Map());

  const handleZoomIn = () => setZoom(prev => Math.min(prev * 1.5, MAX_ZOOM));
  const handleZoomOut = () => setZoom(prev => Math.max(prev / 1.5, MIN_ZOOM));
  const handleReset = () => setZoom(DEFAULT_ZOOM);

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerDownRef.current = { x: e.clientX, y: e.clientY };
    isDraggingRef.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (pointerDownRef.current) {
      const dx = e.clientX - pointerDownRef.current.x;
      const dy = e.clientY - pointerDownRef.current.y;
      if (Math.sqrt(dx * dx + dy * dy) > 6) {
        isDraggingRef.current = true;
      }
    }
  };

  const handleCountryClick = (id: string) => {
    if (isDraggingRef.current) return;
    const isActive = selectedId === id;
    setSelectedId(isActive ? null : id);
  };

  const handleUseLocation = () => {
    setShowLocationPrompt(false);
    
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords: [number, number] = [position.coords.longitude, position.coords.latitude];
        setUserLocation(coords);
        
        // Find closest eligible destination
        let minDist = Infinity;
        let closest: string | null = null;
        
        coordsRef.current.forEach((centroid, id) => {
          if (LEGAL[id]) {
            const dx = centroid[0] - coords[0];
            const dy = centroid[1] - coords[1];
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < minDist) {
              minDist = dist;
              closest = id;
            }
          }
        });
        
        if (closest && minDist < 50) {
          setClosestCountry(LEGAL[closest].name);
        }
      },
      () => setShowLocationPrompt(false)
    );
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    if (closestCountry) {
      const timer = setTimeout(() => setClosestCountry(null), 6000);
      return () => clearTimeout(timer);
    }
  }, [closestCountry]);

  const activeId = selectedId || hoveredId;
  const activeCountry = activeId ? LEGAL[activeId] : null;
  const shouldShowRouteLine = activeId && activeId !== '840' && coordsRef.current.has(activeId);

  return (
    <div 
      className="relative w-full h-full glass-panel rounded-2xl overflow-hidden"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onDoubleClickCapture={(e) => { e.preventDefault(); e.stopPropagation(); }}
      onWheelCapture={(e) => e.preventDefault()}
    >
      {/* Title card */}
      <div className="absolute top-4 left-4 z-20 glass-panel px-4 py-3 rounded-lg border border-slate-700/50 pointer-events-none max-w-[280px]">
        <div className="text-sm font-semibold text-white mb-0.5">Delivery Eligibility Map</div>
        <div className="text-xs text-slate-400">Drag to explore • Click your country to confirm eligibility</div>
      </div>

      {/* Zoom controls */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-1 pointer-events-auto">
        <button onClick={handleZoomIn} className="w-9 h-9 glass-panel rounded border border-slate-700/50 hover:border-accent-sky/50 text-white text-lg transition-colors" aria-label="Zoom in">+</button>
        <button onClick={handleZoomOut} className="w-9 h-9 glass-panel rounded border border-slate-700/50 hover:border-accent-sky/50 text-white text-lg transition-colors" aria-label="Zoom out">−</button>
        <button onClick={handleReset} className="w-9 h-9 glass-panel rounded border border-slate-700/50 hover:border-accent-sky/50 text-white text-[9px] font-medium transition-colors" aria-label="Reset">↺</button>
      </div>

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 170 * zoom, center }}
        style={{ width: '100%', height: '100%' }}
      >
        <ZoomableGroup zoom={zoom} center={center}>
          <Geographies geography={geoUrl}>
            {({ geographies }) => {
              return geographies.map((geo: any) => {
                const id = String(geo.id).padStart(3, '0');
                const isLegal = Boolean(LEGAL[id]);
                
                let centroid: [number, number] | null = null;
                try {
                  const c = geoCentroid(geo);
                  if (Array.isArray(c) && c.length === 2 && Number.isFinite(c[0]) && Number.isFinite(c[1])) {
                    centroid = [c[0], c[1]];
                    if (!coordsRef.current.has(id)) {
                      coordsRef.current.set(id, centroid);
                    }
                  }
                } catch (e) {
                  // Skip
                }

                const isActive = activeId === id;

                return (
                  <g key={geo.rsmKey}>
                    <Geography
                      geography={geo}
                      onClick={() => isLegal && handleCountryClick(id)}
                      onMouseEnter={() => isLegal && setHoveredId(id)}
                      onMouseLeave={() => setHoveredId(null)}
                      style={{
                        default: {
                          fill: isLegal ? (isActive ? '#1e3a5f' : '#0f2744') : '#0a1220',
                          stroke: isActive ? '#3b82f6' : '#1e293b',
                          strokeWidth: isActive ? 0.6 : 0.2,
                          outline: 'none',
                          cursor: isLegal ? 'pointer' : 'default',
                        },
                        hover: {
                          fill: isLegal ? '#1e3a5f' : '#0a1220',
                          stroke: isLegal ? '#3b82f6' : '#1e293b',
                          strokeWidth: isLegal ? 0.6 : 0.2,
                          outline: 'none',
                        },
                        pressed: {
                          fill: isLegal ? '#1e3a5f' : '#0a1220',
                          stroke: '#3b82f6',
                          strokeWidth: 0.6,
                          outline: 'none',
                        },
                      }}
                    />

                    {isLegal && centroid && (
                      <Marker coordinates={centroid}>
                        <g
                          onClick={() => handleCountryClick(id)}
                          onMouseEnter={() => setHoveredId(id)}
                          onMouseLeave={() => setHoveredId(null)}
                          style={{ cursor: 'pointer' }}
                        >
                          <circle r={20} fill="transparent" />
                          <circle 
                            r={isActive ? 3 : 2.2} 
                            fill={id === '840' ? '#38BDF8' : (isActive ? '#3b82f6' : '#2563eb')}
                            opacity={0.85}
                            className={!shouldReduceMotion && isActive ? 'animate-pulse' : ''}
                          />
                        </g>
                      </Marker>
                    )}
                  </g>
                );
              });
            }}
          </Geographies>

          {userLocation && (
            <Marker coordinates={userLocation}>
              <g style={{ pointerEvents: 'none' }}>
                <circle r={3.5} fill="#00ff9f" opacity={0.3} />
                <circle r={2} fill="#00ff9f" className="animate-pulse" />
              </g>
            </Marker>
          )}

          {shouldShowRouteLine && (
            <Line
              from={USA_COORDS}
              to={coordsRef.current.get(activeId!)!}
              stroke="#3b82f6"
              strokeWidth={1.2}
              strokeLinecap="round"
              strokeDasharray="4,4"
              opacity={0.4}
              style={{ pointerEvents: 'none' }}
            />
          )}
        </ZoomableGroup>
      </ComposableMap>

      {/* Location prompt */}
      <AnimatePresence>
        {showLocationPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-6 left-6 glass-panel px-4 py-3 rounded-lg border border-accent-sky/20 max-w-[280px] pointer-events-auto z-30"
          >
            <div className="text-sm text-white mb-2 font-medium">Check eligibility automatically</div>
            <div className="flex gap-2">
              <button onClick={handleUseLocation} className="px-3 py-1.5 bg-accent-sky/20 hover:bg-accent-sky/30 text-accent-sky text-xs font-medium rounded transition-colors">
                Use my location
              </button>
              <button onClick={() => setShowLocationPrompt(false)} className="px-3 py-1.5 text-gray-light hover:text-white text-xs transition-colors">
                Not now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Closest country toast */}
      <AnimatePresence>
        {closestCountry && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-1/2 -translate-x-1/2 glass-panel px-4 py-2 rounded-lg border border-green-400/30 pointer-events-none z-30"
          >
            <div className="text-sm text-white">
              <span className="text-green-400">✓</span> Closest eligible destination: <strong>{closestCountry}</strong>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover tooltip */}
      <AnimatePresence>
        {hoveredId && activeCountry && !selectedId && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 glass-panel px-3 py-1.5 rounded-lg pointer-events-none z-30"
          >
            <div className="text-xs text-white font-medium">{activeCountry.name}</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Compact micro-panel */}
      <AnimatePresence>
        {selectedId && activeCountry && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute bottom-6 right-6 glass-panel p-3 rounded-lg border border-accent-sky/30 w-56 pointer-events-auto z-30"
          >
            <div className="mb-2">
              <div className="text-sm font-semibold text-white">{activeCountry.name}</div>
              <div className="text-xs text-green-400 flex items-center gap-1 mt-0.5">
                <span>✓</span> Eligible / Approved
              </div>
              <div className="text-xs text-slate-400 mt-1">Delivery: {activeCountry.delivery}</div>
            </div>
            <div className="space-y-1.5">
              <button onClick={() => { scrollToSection('#packages'); setSelectedId(null); }} className="w-full py-1.5 text-xs font-medium text-white bg-accent-sky/20 hover:bg-accent-sky/30 rounded transition-colors">
                View Packages
              </button>
              <button onClick={() => { scrollToSection('#aircraft-types'); setSelectedId(null); }} className="w-full py-1.5 text-xs font-medium text-white bg-slate-700/50 hover:bg-slate-700 rounded transition-colors">
                Aircraft Types
              </button>
              <button onClick={() => { scrollToSection('#contact'); setSelectedId(null); }} className="w-full text-xs text-accent-sky hover:text-white transition-colors mt-1">
                Schedule Consultation
              </button>
            </div>
            <button onClick={() => setSelectedId(null)} className="absolute top-2 right-2 text-gray-light hover:text-white transition-colors" aria-label="Close">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

