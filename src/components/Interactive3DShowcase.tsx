import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { SceneViewKey, HotspotInfo } from '../types';
import { Layers, Eye, Compass, Sun, Moon, Info, RotateCcw, CheckCircle, Maximize2 } from 'lucide-react';

export const Interactive3DShowcase: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeView, setActiveView] = useState<SceneViewKey>('exterior');
  const [isDuskMode, setIsDuskMode] = useState(false);
  const [showFloorplanOverlay, setShowFloorplanOverlay] = useState(false);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [selectedHotspot, setSelectedHotspot] = useState<HotspotInfo | null>(null);
  const [webGlSupported, setWebGlSupported] = useState(true);

  // References to Three.js instances
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const targetCamPos = useRef<THREE.Vector3>(new THREE.Vector3(14, 10, 16));
  const targetLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 2, 0));
  const currentLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 2, 0));
  const reqIdRef = useRef<number | null>(null);
  const houseGroupRef = useRef<THREE.Group | null>(null);
  const dirLightRef = useRef<THREE.DirectionalLight | null>(null);
  const ambLightRef = useRef<THREE.AmbientLight | null>(null);

  // Camera targets for viewpoints
  const cameraViews: Record<SceneViewKey, { pos: [number, number, number]; look: [number, number, number] }> = {
    exterior: { pos: [14, 10, 16], look: [0, 2.5, 0] },
    floorplan: { pos: [0.1, 24, 0.1], look: [0, 0, 0] },
    living: { pos: [-2, 3, 5], look: [-1, 2, -1] },
    kitchen: { pos: [4.5, 2.8, 3.5], look: [3.5, 2, -1] },
    bedroom: { pos: [-3.5, 6, 2], look: [-2, 5.5, -2] },
  };

  const hotspots: HotspotInfo[] = [
    {
      id: 'hotspot-cantilever',
      title: 'Architectural Cantilever & Louvers',
      description: 'Engineered structural overhang with TIMS signature orange finish and vertical solar-shading fins.',
      position: [4, 5.5, 3],
      specs: 'Steel Reinforced • Thermal Break • RAL 2004 Accent',
    },
    {
      id: 'hotspot-living',
      title: 'Double-Height Living Foyer',
      description: 'Panoramic floor-to-ceiling glass providing seamless natural daylight and garden connection.',
      position: [-1, 2.5, 2],
      specs: 'Acoustic Double Glazing • Statuario Marble Flooring',
    },
    {
      id: 'hotspot-kitchen',
      title: 'Modular Quartz Island Kitchen',
      description: 'German-engineered cabinetry with integrated smart appliances and anti-fingerprint surfaces.',
      position: [3.5, 2, -0.5],
      specs: 'Calacatta Quartz • Blum Tandem Soft-Close • 3000K Strip LED',
    },
    {
      id: 'hotspot-deck',
      title: 'Hardwood Pool Deck & Green Patio',
      description: 'Weatherproof teak deck with biophilic vertical planters and concealed perimeter drainage.',
      position: [1, 0.5, 7],
      specs: 'FSC Certified Wood • Anti-Slip Treatment • Concealed Sump',
    },
  ];

  // Initialize Three.js Scene
  useEffect(() => {
    if (!mountRef.current) return;

    try {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight || 500;

      // 1. Scene
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);
      sceneRef.current = scene;

      // 2. Camera
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(14, 10, 16);
      cameraRef.current = camera;

      // 3. Renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      rendererRef.current = renderer;

      mountRef.current.innerHTML = '';
      mountRef.current.appendChild(renderer.domElement);

      // 4. Lighting
      const ambLight = new THREE.AmbientLight(0xffffff, 0.85);
      scene.add(ambLight);
      ambLightRef.current = ambLight;

      const dirLight = new THREE.DirectionalLight(0xfff7ed, 1.4);
      dirLight.position.set(20, 30, 15);
      dirLight.castShadow = true;
      dirLight.shadow.mapSize.width = 1024;
      dirLight.shadow.mapSize.height = 1024;
      dirLight.shadow.bias = -0.0001;
      scene.add(dirLight);
      dirLightRef.current = dirLight;

      const fillLight = new THREE.DirectionalLight(0xffedd5, 0.4);
      fillLight.position.set(-15, 10, -10);
      scene.add(fillLight);

      // 5. Materials
      const whiteWallMat = new THREE.MeshStandardMaterial({
        color: 0xf9fafb,
        roughness: 0.35,
        metalness: 0.05,
      });

      const warmWoodMat = new THREE.MeshStandardMaterial({
        color: 0xc89666,
        roughness: 0.6,
        metalness: 0.05,
      });

      const concreteMat = new THREE.MeshStandardMaterial({
        color: 0xe5e7eb,
        roughness: 0.8,
        metalness: 0.05,
      });

      const orangeAccentMat = new THREE.MeshStandardMaterial({
        color: 0xf97316,
        roughness: 0.3,
        metalness: 0.2,
      });

      const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0x93c5fd,
        transparent: true,
        opacity: 0.45,
        roughness: 0.1,
        metalness: 0.1,
        transmission: 0.6,
        ior: 1.5,
      });

      const darkMetalMat = new THREE.MeshStandardMaterial({
        color: 0x333333,
        roughness: 0.4,
        metalness: 0.6,
      });

      // 6. Build Architectural House Model
      const houseGroup = new THREE.Group();
      houseGroupRef.current = houseGroup;

      // Foundation / Ground Podium
      const podiumGeo = new THREE.BoxGeometry(22, 0.6, 20);
      const podium = new THREE.Mesh(podiumGeo, concreteMat);
      podium.position.y = -0.3;
      podium.receiveShadow = true;
      houseGroup.add(podium);

      // Lawn / Green Area
      const lawnGeo = new THREE.BoxGeometry(10, 0.62, 8);
      const lawnMat = new THREE.MeshStandardMaterial({ color: 0xdcfce7, roughness: 0.9 });
      const lawn = new THREE.Mesh(lawnGeo, lawnMat);
      lawn.position.set(-5, -0.28, 5);
      houseGroup.add(lawn);

      // Swimming Pool / Reflecting Water
      const poolGeo = new THREE.BoxGeometry(7, 0.5, 4);
      const waterMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        roughness: 0.1,
        metalness: 0.4,
      });
      const pool = new THREE.Mesh(poolGeo, waterMat);
      pool.position.set(6, -0.2, 6);
      houseGroup.add(pool);

      // Ground Floor Main Living Block
      const groundBlockGeo = new THREE.BoxGeometry(12, 3.8, 10);
      const groundBlock = new THREE.Mesh(groundBlockGeo, whiteWallMat);
      groundBlock.position.set(-1, 1.9, -1);
      groundBlock.castShadow = true;
      groundBlock.receiveShadow = true;
      houseGroup.add(groundBlock);

      // Floor 1 Windows / Living Glazing
      const livingGlazingGeo = new THREE.BoxGeometry(6.5, 3.2, 0.2);
      const livingGlazing = new THREE.Mesh(livingGlazingGeo, glassMat);
      livingGlazing.position.set(-1, 1.9, 4.05);
      houseGroup.add(livingGlazing);

      // First Floor Upper Volume (Cantilevered with Orange Accent)
      const upperBlockGeo = new THREE.BoxGeometry(10, 3.4, 11);
      const upperBlock = new THREE.Mesh(upperBlockGeo, whiteWallMat);
      upperBlock.position.set(1.5, 5.5, 0.5);
      upperBlock.castShadow = true;
      upperBlock.receiveShadow = true;
      houseGroup.add(upperBlock);

      // Architectural Orange Cantilever Feature Beam & Frame
      const orangeBeamGeo = new THREE.BoxGeometry(10.2, 0.4, 0.4);
      const orangeBeam = new THREE.Mesh(orangeBeamGeo, orangeAccentMat);
      orangeBeam.position.set(1.5, 7.3, 6.05);
      houseGroup.add(orangeBeam);

      const orangeVerticalFrameGeo = new THREE.BoxGeometry(0.4, 3.6, 0.4);
      const orangeVerticalFrame = new THREE.Mesh(orangeVerticalFrameGeo, orangeAccentMat);
      orangeVerticalFrame.position.set(6.4, 5.4, 6.05);
      houseGroup.add(orangeVerticalFrame);

      // Wooden Louver Screen (Bengaluru Tropical Architecture)
      for (let i = 0; i < 7; i++) {
        const louverGeo = new THREE.BoxGeometry(0.15, 3.2, 0.3);
        const louver = new THREE.Mesh(louverGeo, warmWoodMat);
        louver.position.set(-2.5 + i * 0.45, 5.5, 6.05);
        louver.castShadow = true;
        houseGroup.add(louver);
      }

      // Upper Balcony Glass Railing
      const balconyGlassGeo = new THREE.BoxGeometry(5.5, 1.1, 0.1);
      const balconyGlass = new THREE.Mesh(balconyGlassGeo, glassMat);
      balconyGlass.position.set(3, 4.35, 6.05);
      houseGroup.add(balconyGlass);

      // Wooden Deck Flooring
      const deckGeo = new THREE.BoxGeometry(8, 0.05, 5);
      const deck = new THREE.Mesh(deckGeo, warmWoodMat);
      deck.position.set(-1, 0.05, 5.5);
      deck.receiveShadow = true;
      houseGroup.add(deck);

      // Architectural Dimension Lines Grid (Base plane)
      const gridHelper = new THREE.GridHelper(26, 26, 0xf97316, 0xe5e7eb);
      gridHelper.position.y = -0.59;
      houseGroup.add(gridHelper);

      scene.add(houseGroup);

      // 7. Render Loop with Smooth Camera Lerp
      let isRunning = true;
      const animate = () => {
        if (!isRunning) return;

        // Smooth camera movement
        camera.position.lerp(targetCamPos.current, 0.04);
        currentLookAt.current.lerp(targetLookAt.current, 0.04);
        camera.lookAt(currentLookAt.current);

        // Auto rotation when enabled and in exterior view
        if (isAutoRotating && activeView === 'exterior') {
          houseGroup.rotation.y += 0.002;
        }

        renderer.render(scene, camera);
        reqIdRef.current = requestAnimationFrame(animate);
      };
      animate();

      // Handle Resize
      const handleResize = () => {
        if (!mountRef.current || !renderer || !camera) return;
        const newWidth = mountRef.current.clientWidth;
        const newHeight = mountRef.current.clientHeight || 500;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        isRunning = false;
        if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
      };
    } catch (err) {
      console.warn('WebGL init fallback:', err);
      setWebGlSupported(false);
    }
  }, []);

  // Update camera target when viewpoint changes
  const handleViewChange = (view: SceneViewKey) => {
    setActiveView(view);
    const target = cameraViews[view];
    targetCamPos.current.set(...target.pos);
    targetLookAt.current.set(...target.look);

    if (houseGroupRef.current && view !== 'exterior') {
      houseGroupRef.current.rotation.y = 0;
    }
  };

  // Toggle Dusk / Day Lighting
  const handleToggleLighting = () => {
    const nextDusk = !isDuskMode;
    setIsDuskMode(nextDusk);

    if (sceneRef.current && dirLightRef.current && ambLightRef.current) {
      if (nextDusk) {
        sceneRef.current.background = new THREE.Color(0xfff7ed);
        dirLightRef.current.color = new THREE.Color(0xfb923c);
        dirLightRef.current.intensity = 1.1;
        ambLightRef.current.color = new THREE.Color(0xfed7aa);
        ambLightRef.current.intensity = 0.6;
      } else {
        sceneRef.current.background = new THREE.Color(0xffffff);
        dirLightRef.current.color = new THREE.Color(0xfff7ed);
        dirLightRef.current.intensity = 1.4;
        ambLightRef.current.color = new THREE.Color(0xffffff);
        ambLightRef.current.intensity = 0.85;
      }
    }
  };

  return (
    <section id="3d-showcase" className="py-20 lg:py-24 bg-white border-b border-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E5] text-[#D95B16] text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
              <span>INTERACTIVE ARCHITECTURAL VIEWER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333333] tracking-tight">
              VISUALIZE YOUR SPACE BEFORE IT IS BUILT
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#6B7280] max-w-2xl">
              Inspect materials, spatial proportions, and natural daylight flow. Switch seamlessly between exterior massing, floor plans, and room perspectives.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-3 bg-[#FFF9F3] border border-[#F3F4F6] px-4 py-2 rounded-lg text-xs font-medium text-[#333333]">
            <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse"></span>
            <span>Real-time 3D Engine: Three.js WebGL</span>
          </div>
        </div>

        {/* Main 3D Stage Container */}
        <div className="relative rounded-2xl overflow-hidden border border-[#F3F4F6] shadow-xl bg-white">
          
          {/* Top Control Bar */}
          <div className="bg-white/95 backdrop-blur-md border-b border-[#F3F4F6] px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 z-10 relative">
            
            {/* View Switching Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-xs font-bold text-[#6B7280] mr-1 hidden sm:inline uppercase">View:</span>
              {(['exterior', 'floorplan', 'living', 'kitchen', 'bedroom'] as SceneViewKey[]).map((view) => (
                <button
                  key={view}
                  onClick={() => handleViewChange(view)}
                  id={`btn-view-${view}`}
                  className={`px-3 sm:px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    activeView === view
                      ? 'bg-[#F97316] text-white shadow-sm'
                      : 'bg-[#FFF9F3] text-[#333333] hover:bg-[#FFF0E5] hover:text-[#F97316] border border-[#F3F4F6]'
                  }`}
                >
                  {view === 'exterior' && 'Exterior Massing'}
                  {view === 'floorplan' && '3D Floor Plan'}
                  {view === 'living' && 'Living Lounge'}
                  {view === 'kitchen' && 'Modular Kitchen'}
                  {view === 'bedroom' && 'Master Bedroom'}
                </button>
              ))}
            </div>

            {/* Utility Toggles (Lighting, Overlay, Rotation) */}
            <div className="flex items-center gap-2">
              {/* Day / Warm Dusk Lighting Toggle */}
              <button
                onClick={handleToggleLighting}
                className={`p-2 rounded-md text-xs font-bold flex items-center gap-1.5 transition-colors ${
                  isDuskMode
                    ? 'bg-[#FFF0E5] text-[#D95B16] border border-[#F97316]/40'
                    : 'bg-[#F3F4F6] text-[#333333] hover:bg-[#E5E7EB]'
                }`}
                title="Toggle natural daytime / warm dusk lighting"
              >
                {isDuskMode ? <Moon className="w-4 h-4 text-[#F97316]" /> : <Sun className="w-4 h-4 text-[#F97316]" />}
                <span className="hidden md:inline">{isDuskMode ? 'Dusk Sun' : 'Day Sun'}</span>
              </button>

              {/* Floor Plan Overlay Toggle */}
              <button
                onClick={() => setShowFloorplanOverlay(!showFloorplanOverlay)}
                className={`p-2 rounded-md text-xs font-bold flex items-center gap-1.5 transition-colors ${
                  showFloorplanOverlay
                    ? 'bg-[#FFF0E5] text-[#D95B16] border border-[#F97316]/40'
                    : 'bg-[#F3F4F6] text-[#333333] hover:bg-[#E5E7EB]'
                }`}
                title="Toggle CAD blueprint overlay"
              >
                <Layers className="w-4 h-4 text-[#F97316]" />
                <span className="hidden md:inline">CAD Grid</span>
              </button>

              {/* Auto Orbit Toggle */}
              <button
                onClick={() => setIsAutoRotating(!isAutoRotating)}
                className={`p-2 rounded-md text-xs font-bold flex items-center gap-1.5 transition-colors ${
                  isAutoRotating
                    ? 'bg-[#FFF0E5] text-[#D95B16] border border-[#F97316]/40'
                    : 'bg-[#F3F4F6] text-[#333333] hover:bg-[#E5E7EB]'
                }`}
                title="Toggle turntable auto-orbit"
              >
                <RotateCcw className={`w-4 h-4 ${isAutoRotating ? 'animate-spin' : ''}`} />
                <span className="hidden md:inline">Turntable</span>
              </button>
            </div>

          </div>

          {/* Three.js Canvas Stage */}
          <div className="relative w-full h-[480px] sm:h-[540px] bg-white">
            
            {webGlSupported ? (
              <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
            ) : (
              // Fallback image showcase if WebGL disabled
              <div className="w-full h-full relative">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern architectural 3D view"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Optional CAD Floor Plan Overlay */}
            {showFloorplanOverlay && (
              <div className="absolute inset-0 pointer-events-none bg-blueprint-grid opacity-75 border-4 border-dashed border-[#F97316]/30 m-4 rounded-xl flex flex-col justify-between p-4 font-mono text-[10px] text-[#333333]">
                <div className="flex justify-between items-center bg-white/90 p-2 rounded max-w-sm border border-[#F97316]/40">
                  <div>
                    <span className="font-bold text-[#F97316]">TIMS CAD VASTU PLAN // SECTION 04</span>
                    <p className="text-[9px] text-[#6B7280]">Plot: 40x60 • North-East Foyer • Cross Ventilation</p>
                  </div>
                </div>
                <div className="flex justify-between text-[#6B7280] font-bold">
                  <span>SCALE 1:100 MM</span>
                  <span className="text-[#F97316]">HSR LAYOUT SPECIFICATION</span>
                </div>
              </div>
            )}

            {/* Hotspot Floating Chips */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2 pointer-events-auto">
              <span className="bg-white/90 backdrop-blur-sm text-[11px] font-bold text-[#333333] px-2.5 py-1 rounded border border-[#F3F4F6] shadow-sm">
                Architectural Hotspots:
              </span>
              {hotspots.map((spot) => (
                <button
                  key={spot.id}
                  onClick={() => setSelectedHotspot(spot)}
                  className={`px-3 py-1 rounded text-xs font-semibold backdrop-blur-sm border transition-all ${
                    selectedHotspot?.id === spot.id
                      ? 'bg-[#F97316] text-white border-[#F97316] shadow-md'
                      : 'bg-white/95 text-[#333333] hover:bg-[#FFF0E5] hover:text-[#F97316] border-[#F3F4F6] shadow-sm'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] inline-block mr-1.5"></span>
                  {spot.title}
                </button>
              ))}
            </div>

            {/* Hotspot Detail Card Popup */}
            {selectedHotspot && (
              <div className="absolute top-16 right-4 max-w-xs bg-white/98 backdrop-blur-md p-4 rounded-xl border border-[#F97316]/40 shadow-2xl animate-in fade-in z-20">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#F97316] uppercase">
                    <Info className="w-3.5 h-3.5" />
                    <span>Material Specification</span>
                  </div>
                  <button
                    onClick={() => setSelectedHotspot(null)}
                    className="text-xs text-[#6B7280] hover:text-[#333333] font-bold"
                  >
                    ✕
                  </button>
                </div>

                <h4 className="font-bold text-sm text-[#333333] mb-1">
                  {selectedHotspot.title}
                </h4>
                <p className="text-xs text-[#6B7280] leading-relaxed mb-3">
                  {selectedHotspot.description}
                </p>

                <div className="pt-2 border-t border-[#F3F4F6] text-[10px] font-mono text-[#D95B16] font-semibold">
                  {selectedHotspot.specs}
                </div>
              </div>
            )}

          </div>

          {/* Bottom Specifications Bar */}
          <div className="bg-[#FFF9F3] border-t border-[#F3F4F6] px-6 py-3 flex flex-wrap items-center justify-between text-xs text-[#6B7280] gap-3">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-[#333333]">Materials Rendered:</span>
              <span>Smooth Stucco White</span>
              <span>•</span>
              <span>Natural Oak Slats</span>
              <span>•</span>
              <span>Reinforced Concrete</span>
              <span>•</span>
              <span className="text-[#F97316] font-bold">TIMS Orange Highlights</span>
            </div>

            <div className="flex items-center gap-1.5 text-[#333333] font-medium">
              <Compass className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Full 3D Walkthroughs Available with Planning Packages</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
