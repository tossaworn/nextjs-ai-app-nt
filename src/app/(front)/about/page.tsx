import Link from "next/link";
import AppLoading from "../components/app-loading";
import { Suspense } from "react";

async function ApiVersion() {
  try {
    const response = await fetch('https://api.codingthailand.com/api/version');
    const apiInfo = await response.json();
    return <p className="text-[13px] text-[#A8A29E]">API Version: {apiInfo.data.version}</p>;
  } catch (e) {
    return <p className="text-[13px] text-[#A8A29E]">API Version: Unknown</p>;
  }
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] py-12 md:py-24 font-sans">
      <div className="container max-w-3xl mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6 text-[#1C1917]">
            เกี่ยวกับเรา
          </h1>
          <p className="text-xl text-[#57534E] leading-relaxed max-w-2xl mx-auto">
            เรามุ่งมั่นที่จะสร้างพื้นที่สำหรับการเรียนรู้ที่เรียบง่าย สงบ และเปี่ยมไปด้วยแรงบันดาลใจ 
            เพื่อให้ผู้ใช้งานสามารถโฟกัสกับเนื้อหาและการเติบโตได้อย่างแท้จริง
          </p>
        </section>

        {/* Story Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-[#1C1917]">เรื่องราวของเรา</h2>
              <p className="text-[17px] text-[#1C1917] leading-[1.8]">
                เริ่มต้นจากความเชื่อที่ว่า "ความเรียบง่ายคือความซับซ้อนขั้นสูงสุด" เราจึงออกแบบ 
                แพลตฟอร์มนี้ขึ้นมาโดยตัดทอนสิ่งที่ไม่จำเป็นออกทั้งหมด เพื่อให้เหลือเพียงสิ่งที่สำคัญที่สุด 
                นั่นคือ "เนื้อหา" และ "ประสบการณ์การอ่าน" 
              </p>
              <p className="text-[17px] text-[#1C1917] leading-[1.8]">
                ทุกรายละเอียดใน ThoughtStream ถูกกลั่นกรองเพื่อให้เกิดสมาธิและความสงบ 
                เปรียบเสมือนการนั่งอ่านหนังสือเล่มโปรดในห้องที่เงียบสงบ
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-24">
          <h2 className="text-2xl font-serif font-bold text-[#1C1917] mb-8">คุณค่าที่เรายึดถือ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "ความเรียบง่าย", desc: "ลดทอนสิ่งรบกวนเพื่อให้เนื้อหาโดดเด่นที่สุด" },
              { title: "ความชัดเจน", desc: "สื่อสารอย่างตรงไปตรงมาผ่าน Typography ที่สะอาดตา" },
              { title: "ความสงบ", desc: "สร้างบรรยากาศที่ผ่อนคลายและส่งเสริมการจดจ่อ" },
            ].map((value, i) => (
              <div key={i} className="bg-[#F5F5F4] p-8 border border-[#E7E5E4] rounded-none">
                <h3 className="text-lg font-semibold text-[#1C1917] mb-3">{value.title}</h3>
                <p className="text-sm text-[#57534E] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer / Meta Section */}
        <footer className="pt-12 border-t border-[#E7E5E4] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="text-sm font-semibold text-[#78716C] hover:text-[#1C1917] transition-colors"
            >
              ← กลับหน้าหลัก
            </Link>
            <Separator className="hidden md:block h-4 w-px bg-[#D6D3D1]" />
            <Suspense fallback={<AppLoading />}>
              <ApiVersion />
            </Suspense>
          </div>
          <p className="text-[13px] text-[#A8A29E]">
            © {new Date().getFullYear()} ThoughtStream. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}

function Separator({ className }: { className?: string }) {
  return <div className={`bg-current ${className}`} />;
}
