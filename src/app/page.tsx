"use client";
import Background from "@/components/background";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import { BorderBeam } from "@/components/magicui/border-beam";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col justify-center gap-3 px-10">
        <Background />
        <Header />
        <div className="border border-opacity-60 border-white rounded-[20px] w-full">
          <div className="h-full">
            <HeroSection />
          </div>
        </div>
      </div>
    </main>
  );
}
