'use client'

import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Field, FieldLabel, FieldError, FieldContent } from '@/components/ui/field'
import { contactSchema, ContactFormValues } from '@/lib/validations/contact'

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isPending, startTransition] = useTransition()

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  async function onSubmit(values: ContactFormValues) {
    startTransition(async () => {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        })

        const result = await response.json()

        if (!result.success) {
          throw new Error(result.error || 'Something went wrong')
        }

        toast.success('ส่งข้อความสำเร็จแล้ว!')
        setIsSuccess(true)
        form.reset()
      } catch (error) {
        toast.error((error as Error).message || 'เกิดข้อผิดพลาดในการส่งข้อความ')
      }
    })
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center text-center gap-6 py-12">
        <CheckCircle className="w-12 h-12 text-[#65A30D]" />
        <h3 className="text-2xl font-serif font-bold text-[#1C1917]">ส่งข้อความสำเร็จ!</h3>
        <p className="text-[#57534E]">
          เราได้รับข้อความของคุณแล้ว และจะติดต่อกลับโดยเร็วที่สุด
        </p>
        <Button 
          variant="outline" 
          onClick={() => setIsSuccess(false)}
          className="mt-4 border-[#D6D3D1] text-[#78716C] hover:bg-[#F5F5F4] rounded-none"
        >
          ส่งข้อความอีกครั้ง
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <Field key="name" data-invalid={!!form.formState.errors.name}>
        <FieldLabel className="text-[#57534E] text-[13px] font-semibold mb-2">ชื่อ</FieldLabel>
        <FieldContent>
          <Input 
            placeholder="กรอกชื่อของคุณ" 
            className="border-[#D6D3D1] focus:border-[#78716C] rounded-none h-[48px]"
            {...form.register('name')} 
          />
        </FieldContent>
        <FieldError 
          className="text-[#DC2626] text-[13px]"
          errors={[form.formState.errors.name as { message?: string }]} 
        />
      </Field>

      <Field key="email" data-invalid={!!form.formState.errors.email}>
        <FieldLabel className="text-[#57534E] text-[13px] font-semibold mb-2">Email</FieldLabel>
        <FieldContent>
          <Input 
            type="email" 
            placeholder="example@email.com" 
            className="border-[#D6D3D1] focus:border-[#78716C] rounded-none h-[48px]"
            {...form.register('email')} 
          />
        </FieldContent>
        <FieldError 
          className="text-[#DC2626] text-[13px]"
          errors={[form.formState.errors.email as { message?: string }]} 
        />
      </Field>

      <Field key="message" data-invalid={!!form.formState.errors.message}>
        <FieldLabel className="text-[#57534E] text-[13px] font-semibold mb-2">ข้อความ</FieldLabel>
        <FieldContent>
          <Textarea 
            rows={5} 
            placeholder="พิมพ์ข้อความที่ต้องการ..." 
            className="border-[#D6D3D1] focus:border-[#78716C] rounded-none"
            {...form.register('message')} 
          />
        </FieldContent>
        <FieldError 
          className="text-[#DC2626] text-[13px]"
          errors={[form.formState.errors.message as { message?: string }]} 
        />
      </Field>

      <Button 
        type="submit" 
        className="w-full bg-[#78716C] text-[#FAFAF9] hover:bg-[#57534E] rounded-none h-[48px] font-semibold text-[15px]" 
        disabled={isPending}
      >
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        ส่งข้อความ
      </Button>
    </form>
  )
}
