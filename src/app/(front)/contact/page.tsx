import { Mail, Phone, Clock } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import ContactForm from './contact-form'

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">ติดต่อเรา</h1>
          <p className="text-lg text-muted-foreground">
            หากคุณมีคำถามหรือข้อสงสัย สามารถติดต่อเราได้ผ่านช่องทางด้านล่างนี้
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-8 md:gap-12">
          <div className="flex flex-col gap-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">support@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">เบอร์โทรศัพท์</p>
                  <p className="text-muted-foreground">02-123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">เวลาทำการ</p>
                  <p className="text-muted-foreground">จันทร์ - ศุกร์: 09:00 - 18:00 น.</p>
                </div>
              </div>
            </div>
            <Separator />
            <p className="text-muted-foreground text-sm leading-relaxed">
              เรามุ่งมั่นที่จะให้บริการลูกค้าอย่างดีที่สุด 
              กรุณาทิ้งข้อความไว้ แล้วทีมงานของเราจะติดต่อกลับหาคุณโดยเร็วที่สุดในเวลาทำการ
            </p>
          </div>

          <div className="bg-card p-6 md:p-8 rounded-xl border shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
