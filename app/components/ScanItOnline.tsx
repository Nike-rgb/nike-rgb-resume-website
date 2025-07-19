"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  CSS3DRenderer,
  CSS3DObject,
} from "three/examples/jsm/renderers/CSS3DRenderer.js";

interface Props {
  images: string[];
}

export default function ThreeCarousel({ images }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef(new THREE.Object3D());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const widthPx = container.clientWidth;
    const heightPx = container.clientHeight;

    const renderer = new CSS3DRenderer();
    renderer.setSize(widthPx, heightPx);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(60, widthPx / heightPx, 1, 5000);
    camera.position.set(0, 0, 900);
    scene.add(camera);

    const carousel = carouselRef.current;
    carousel.position.z = -300;
    scene.add(carousel);

    const radius = 750;

    images.forEach((src, i) => {
      const el = document.createElement("div");
      const img = new Image();
      img.src = src;
      img.onload = () => {
        const aspect = img.width / img.height;
        const maxW = 500;
        const maxH = 500;
        let w = maxW,
          h = maxH;

        if (aspect > 1) {
          w = maxW;
          h = maxW / aspect;
        } else {
          h = maxH;
          w = maxH * aspect;
        }

        el.style.width = `${w}px`;
        el.style.height = `${h}px`;
        el.style.backgroundImage = `url(${src})`;
        el.style.backgroundSize = "cover";
        el.style.backgroundPosition = "center";
      };

      el.style.borderRadius = "12px";
      el.style.boxShadow = "0 15px 30px rgba(0,0,0,0.3)";
      el.style.transition = "transform 0.3s";

      const obj = new CSS3DObject(el);
      const angle = (i / images.length) * Math.PI * 2;
      obj.position.setFromSphericalCoords(radius, Math.PI / 2, angle);
      obj.lookAt(camera.position);
      carousel.add(obj);
    });

    const renderScene = () => {
      renderer.render(scene, camera);
    };

    renderScene();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderScene();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [images]);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <div
        ref={containerRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
      />
    </div>
  );
}
