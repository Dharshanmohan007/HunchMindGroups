"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 750,
  threshold = 0.15,
  className = "",
  style = {},
  as = "div",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timer = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [threshold]);

  const Component = as;

  const directionClass = {
    up: "reveal-up",
    down: "reveal-down",
    left: "reveal-left",
    right: "reveal-right",
    zoom: "reveal-zoom",
    fade: "",
  }[direction] || "reveal-up";

  const transitionStyle = {
    ...style,
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <Component
      ref={elementRef}
      className={`reveal-init ${directionClass} ${isVisible ? "reveal-active" : ""} ${className}`}
      style={transitionStyle}
    >
      {children}
    </Component>
  );
}
