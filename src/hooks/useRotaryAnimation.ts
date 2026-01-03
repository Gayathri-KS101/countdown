import { useState, useRef, useEffect, useCallback } from "react";

const ROTATION_AMOUNT = 50; // degrees to rotate on hover
const EASE_STRENGTH = 0.12; // spring easing (0.1-0.15 recommended)
const SWIPE_ROTATION_SCALE = 0.5; // degrees per pixel of swipe

export function useRotaryAnimation() {
  const [isHovered, setIsHovered] = useState(false);
  const [angleOffset, setAngleOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const animationRef = useRef<number | null>(null);
  const targetOffsetRef = useRef(0);
  const currentOffsetRef = useRef(0);

  // Touch tracking
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const swipeOffsetRef = useRef(0);
  const isDraggingRef = useRef(false);

  // Animation loop with spring easing
  useEffect(() => {
    const animate = () => {
      if (isDraggingRef.current) {
        // During drag, directly follow the swipe offset (no easing)
        currentOffsetRef.current = swipeOffsetRef.current;
        setAngleOffset(swipeOffsetRef.current);
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // On hover or release, spring back smoothly
        targetOffsetRef.current = isHovered ? ROTATION_AMOUNT : 0;
        currentOffsetRef.current +=
          (targetOffsetRef.current - currentOffsetRef.current) * EASE_STRENGTH;

        setAngleOffset(currentOffsetRef.current);

        // Continue animating if not fully settled
        if (Math.abs(targetOffsetRef.current - currentOffsetRef.current) > 0.01) {
          animationRef.current = requestAnimationFrame(animate);
        }
      }
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHovered, isDragging]);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
    isDraggingRef.current = true;
    setIsDragging(true);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - touchStartRef.current.x;

    // Map horizontal drag to rotation in real-time (left = negative, right = positive)
    swipeOffsetRef.current = Math.max(
      -ROTATION_AMOUNT,
      Math.min(ROTATION_AMOUNT, deltaX * SWIPE_ROTATION_SCALE)
    );
  }, []);

  const handleTouchEnd = useCallback(() => {
    touchStartRef.current = null;
    isDraggingRef.current = false;
    setIsDragging(false);
    swipeOffsetRef.current = 0;
  }, []);

  return {
    angleOffset,
    handleMouseEnter,
    handleMouseLeave,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}
