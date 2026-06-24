import { Mail, Phone, Clock } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import ContactForm from './contact-form'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] py-12 md:py-24 font-sans">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold tracking-tight mb-4 text-[#1C1917]">ติดต่อเรา</h1>
          <p className="text-lg text-[#57534E] max-w-2xl mx-auto">
            หากคุณมีคำถามหรือข้อสงสัย สามารถติดต่อเราได้ผ่านช่องทางด้านล่างนี้
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 md:gap-24">
          <div className="flex flex-col gap-8">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#F5F5F4] rounded-none">
                  <Mail className="w-5 h-5 text-[#78716C]" />
                </div>
                <div className="font-sans">
                  <p className="font-semibold text-[#1C1917]">Email</p>
                  <p className="text-[#57534E]">support@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#F5F5F4] rounded-none">
                  <Phone className="w-5 h-5 text-[#78716C]" />
                </div>
                <div className="font-sans">
                  <p className="font-semibold text-[#1C1917]">เบอร์โทรศัพท์</p>
                  <p className="text-[#57534E]">02-123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#F5F5F4] rounded-none">
                  <Clock className="w-5 h-5 text-[#78716C]" />
                </div>
                <div className="font-sans">
                  <p className="font-semibold text-[#1C1917]">เวลาทำการ</p>
                  <p className="text-[#57534E]">จันทร์ - ศุกร์: 09:00 - 18:00 น.</p>
                </div>
              </div>
            </div>
            <Separator className="bg-[#E7E5E4]" />
            <p className="text-[#57534E] text-sm leading-relaxed font-sans">
              เรามุ่งมั่นที่จะให้บริการลูกค้าอย่างดีที่สุด 
              กรุณาทิ้งข้อความไว้ แล้วทีมงานของเราจะติดต่อกลับหาคุณโดยเร็วที่สุดในเวลาทำการ
            </p>
          </div>

          <div className="bg-[#F5F5F4] p-6 md:p-12 rounded-none border border-[#D6D3D1]">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
