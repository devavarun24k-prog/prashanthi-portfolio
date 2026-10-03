import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Architectural 3D Group
    const group = new THREE.Group();
    scene.add(group);

    // 1. Subtle Translucent Architectural Planes (Fashion Editorial Panels)
    const planeGeo = new THREE.PlaneGeometry(3.2, 4.2);
    
    // Panel 1: Deep Charcoal / Burgundy tint
    const mat1 = new THREE.MeshBasicMaterial({
      color: 0x722f37,
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide,
    });
    const panel1 = new THREE.Mesh(planeGeo, mat1);
    panel1.position.set(1.2, 0.2, -1.5);
    panel1.rotation.set(-0.08, -0.25, 0.04);
    group.add(panel1);

    // Panel 2: Neutral Muted Taupe tint
    const mat2 = new THREE.MeshBasicMaterial({
      color: 0x8e8278,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide,
    });
    const panel2 = new THREE.Mesh(planeGeo, mat2);
    panel2.position.set(-1.4, -0.3, -2.2);
    panel2.rotation.set(0.06, 0.2, -0.03);
    group.add(panel2);

    // 2. Delicate Architectural Wireframe Edges
    const wireframeGeo = new THREE.EdgesGeometry(planeGeo);
    const wireframeMat = new THREE.LineBasicMaterial({
      color: 0x722f37,
      transparent: true,
      opacity: 0.28,
    });
    const wire1 = new THREE.LineSegments(wireframeGeo, wireframeMat);
    wire1.position.copy(panel1.position);
    wire1.rotation.copy(panel1.rotation);
    group.add(wire1);

    const wireframeMat2 = new THREE.LineBasicMaterial({
      color: 0xc8bfb2,
      transparent: true,
      opacity: 0.18,
    });
    const wire2 = new THREE.LineSegments(wireframeGeo, wireframeMat2);
    wire2.position.copy(panel2.position);
    wire2.rotation.copy(panel2.rotation);
    group.add(wire2);

    // 3. Elegant Spatial Grid Lines (Editorial Magazine Guides)
    const gridLinesMat = new THREE.LineBasicMaterial({
      color: 0x262320,
      transparent: true,
      opacity: 0.45,
    });

    for (let i = -2; i <= 2; i++) {
      const pointsH = [new THREE.Vector3(-4, i * 1.2, -2), new THREE.Vector3(4, i * 1.2, -2)];
      const lineGeoH = new THREE.BufferGeometry().setFromPoints(pointsH);
      const lineH = new THREE.Line(lineGeoH, gridLinesMat);
      group.add(lineH);

      const pointsV = [new THREE.Vector3(i * 1.6, -3, -2), new THREE.Vector3(i * 1.6, 3, -2)];
      const lineGeoV = new THREE.BufferGeometry().setFromPoints(pointsV);
      const lineV = new THREE.Line(lineGeoV, gridLinesMat);
      group.add(lineV);
    }

    // 4. Subtle Floating Accent Nodes
    const nodeGeo = new THREE.CircleGeometry(0.03, 16);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: 0x722f37,
      transparent: true,
      opacity: 0.6,
    });

    const nodePositions = [
      [-1.8, 1.5, -1],
      [1.8, -1.2, -1],
      [2.2, 1.8, -1.5],
      [-2.2, -1.6, -1.8],
    ];

    nodePositions.forEach(([x, y, z]) => {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set(x, y, z);
      group.add(node);
    });

    // Mouse Tracking for Gentle Parallax
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      targetRotY = x * 0.12;
      targetRotX = -y * 0.1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Active Viewport Intersection Check
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth camera/group interpolation
      currentRotX += (targetRotX - currentRotX) * 0.04;
      currentRotY += (targetRotY - currentRotY) * 0.04;

      group.rotation.x = currentRotX + Math.sin(elapsedTime * 0.3) * 0.015;
      group.rotation.y = currentRotY + Math.cos(elapsedTime * 0.25) * 0.015;

      // Subtle breathing of background panels
      panel1.position.y = 0.2 + Math.sin(elapsedTime * 0.4) * 0.05;
      wire1.position.y = panel1.position.y;

      panel2.position.y = -0.3 + Math.cos(elapsedTime * 0.35) * 0.04;
      wire2.position.y = panel2.position.y;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();

      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
      planeGeo.dispose();
      wireframeGeo.dispose();
      mat1.dispose();
      mat2.dispose();
      wireframeMat.dispose();
      wireframeMat2.dispose();
      gridLinesMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`absolute inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
};
