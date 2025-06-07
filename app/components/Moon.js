"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function SimpleGlobe() {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = 400;
    const height = 400;

    // إنشاء المشهد
    const scene = new THREE.Scene();

    // الكاميرا
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 3;

    // الرندرر
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // الكرة الزرقاء
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({
      color: "#007bff",
      metalness: 0.3,
      roughness: 0.7,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // إضاءة
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    // تحكم الماوس
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // يجعل الحركة سلسة
    controls.dampingFactor = 0.05;

    // دالة التحديث والرسوم
    const animate = () => {
      requestAnimationFrame(animate);

      sphere.rotation.y += 0.005; // دوران تلقائي بسيط

      controls.update(); // تحديث تحكمات الماوس

      renderer.render(scene, camera);
    };

    animate();

    // تنظيف عند إزالة المكون
    return () => {
      controls.dispose();
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "400px",
        height: "400px",
        margin: "0 auto",
        backgroundColor: "#010217",
      }}
    />
  );
}
