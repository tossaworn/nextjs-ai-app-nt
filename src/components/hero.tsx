import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-24 bg-[#FAFAF9]">
      <div className="relative z-10 max-w-3xl text-center">
        <Badge
          asChild
          className="border-[#D6D3D1] text-[#57534E] py-1.5 px-3.5 mb-8"
          variant="secondary"
        >
          <Link href="#">
            NT 2026 Just released v1.0.0 <ArrowUpRight className="ml-1.5 size-4 text-[#78716C]" />
          </Link>
        </Badge>

        <h1 className="mx-auto mt-6 max-w-2xl font-serif text-[40px] font-bold tracking-tight text-[#1C1917] leading-tight sm:text-5xl md:text-6xl">
          Ship better UI without&nbsp;the&nbsp;hassle
        </h1>
        
        <p className="mx-auto mt-8 max-w-2xl text-[#57534E] text-[17px] leading-[1.8] font-sans">
          Instead of starting from scratch every time, use thoughtfully designed
          blocks that give you a solid foundation for any UI. sum
        </p>
        
        <div className="mt-12 flex items-center justify-center gap-6">
          <Button size="lg">
            Get Started <ArrowUpRight className="ml-1 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
          >
            <CirclePlay className="mr-1 h-5 w-5" /> Watch Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
