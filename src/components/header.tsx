"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [loaded, setLoaded] = useState(false);

  return (
    <header className="flex flex-col md:flex-row justify-center items-center">
      <Image
        src="/homepage/ecoplasmatechnologies.avif"
        alt="EcoPlasma Technologies Logo"
        width={470}
        height={390}
        onLoadingComplete={() => setLoaded(true)}
        className={`transition-opacity duration-700 ease-in-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        priority
      />
    </header>
  );
}