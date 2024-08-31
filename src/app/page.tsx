"use client";
import AboutMe from "@/components/about-me";
import Background from "@/components/background";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import { BorderBeam } from "@/components/magicui/border-beam";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div>
        
        <Background />
        <div className="p-4 flex flex-col gap-3">
        <Header />
        <HeroSection />
        <AboutMe />
        
        </div>
        
      </div>
    </main>
  );
}
