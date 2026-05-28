import React from "react";
import logoImg from "@/assets/portfolio-logo.png";

export function PortfolioLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <img
      src={logoImg}
      alt="Bilgehan Demiröz Logo"
      className={`${className} object-contain`}
      loading="lazy"
    />
  );
}
