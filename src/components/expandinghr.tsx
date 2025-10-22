"use client";
import { useEffect, useRef, useState } from "react";

export default function ExpandingHr() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <hr
      ref={ref}
      className="border-0 bg-white h-[2px] my-4 transition-all duration-1500 ease-out"
      style={{
        width: visible ? "100%" : "0%",
      }}
    />
  );
}
