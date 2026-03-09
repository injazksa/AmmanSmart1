import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import PageMeta from '@/components/common/PageMeta';
import AnimatedSection from '@/components/common/AnimatedSection';
import FadeInOnScroll from '@/components/common/FadeInOnScroll';
import StaggerContainer from '@/components/common/StaggerContainer';
import HoverScale from '@/components/common/HoverScale';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  MessageSquare,
  LifeBuoy,
  ChevronLeft,
  Search,
  HelpCircle,
  Building2,
  Sparkles,
  Clock,
  CheckCircle2
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactInfo = [
  { icon: Building2, label: 'العنوان الرئيسي', value: 'رأس العين، شارع عمر مطر، عمّان، الأردن', href: '#' },
  { icon: Globe, label: 'الموقع الإلكتروني', value: 'www.ammansmart.com', href: 'https://www.ammansmart.com' },
];

const faqs = [
  { 
    question: 'كيف يمكنني الوصول إلى منصة الخدمات الإلكترونية؟', 
    answer: 'يمكنك الوصول إليها عبر دليل الخدمات في هذه المنصة أو من خلال الموقع الرسمي لأمانة عمّان الكبرى. جميع الخدمات متاحة 24/7 عبر الإنترنت.' 
  },
  { 
    question: 'ما هي مواعيد عمل مركز خدمات السيارات في عبدون؟', 
    answer: 'يعمل المركز على مدار الساعة (24/7) لتقديم خدمات الشحن والصيانة السريعة للمركبات الكهربائية.' 
  },
  { 
    question: 'كيف يمكنني التقدم بطلب للحصول على تصريح استثماري ذكي؟', 
    answer: 'يتم تقديم الطلبات من خلال بوابة المستثمرين في "رؤية عمّان للاستثمار والتطوير" مع توفير جميع المستندات المطلوبة.' 
  },
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      toast.success('تم إرسال رسالتك بنجاح! سنقوم بالرد عليك قريباً.');
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      // Submit to Netlify Forms
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      // Netlify Forms may return 301/302 redirects or 200 OK
      if (response.ok || response.status === 301 || response.status === 302) {
        // Form submitted successfully
        form.reset();
        toast.success('تم استلام رسالتك بنجاح! فريقنا سيتواصل معك قريباً.', {
          description: 'شكراً لاهتمامك بمنصة عمان الذكية.',
          duration: 5000,
        });
        // Navigate to thank you page after a short delay
        setTimeout(() => {
          navigate('/thank-you');
        }, 1000);
      } else {
        throw new Error(`Server responded with status: ${response.status}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageMeta
        title="تواصل معنا | عمان الذكية"
        description="تواصل مع فريق عمان الذكية للاستفسار عن الخدمات والمبادرات والشراكات. نحن هنا لمساعدتك 24/7."
        keywords="تواصل, دعم, استفسار, عمان, الذكية, خدمات"
        ogUrl="https://ammansmart.com/contact"
        canonicalUrl="https://ammansmart.com/contact"
        schemaType="LocalBusiness"
      />

      <div className="space-y-12 pb-20">
        <AnimatedSection direction="down">
          <div className="flex flex-col gap-4 border-b pb-8">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-10 w-10 text-primary animate-bounce" />
              <h1 className="text-4xl font-extrabold tracking-tight text-primary leading-tight">تواصل ودعم المنصة الذكية</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl font-medium leading-relaxed">
              نحن هنا لمساعدتك والإجابة على استفساراتك حول مبادرات وخدمات عمّان الذكية ورؤية 2030. فريقنا متاح 24/7 لتقديم أفضل الخدمات.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Contact Form - Netlify Forms */}
          <AnimatedSection direction="right">
            <Card className="border-none shadow-2xl bg-card/50 backdrop-blur-sm rounded-[2rem] overflow-hidden">
              <CardHeader className="p-10">
                <CardTitle className="text-3xl font-extrabold mb-2">أرسل لنا رسالة</CardTitle>
                <CardDescription className="text-lg font-medium">اترك استفسارك أو تعليقاتك وسنعود إليك في أقرب وقت.</CardDescription>
              </CardHeader>
              <CardContent className="p-10 pt-0">
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  data-netlify-honeypot="bot-field"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  {/* Netlify Hidden Fields */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </p>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-base font-bold">الاسم الكامل *</label>
                      <Input 
                        id="name"
                        name="name" 
                        placeholder="أدخل اسمك" 
                        className="h-14 rounded-xl text-lg bg-white/50 dark:bg-black/20 border-2 border-transparent hover:border-primary/30 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-base font-bold">البريد الإلكتروني *</label>
                      <Input 
                        id="email"
                        name="email" 
                        placeholder="name@example.com" 
                        type="email"
                        className="h-14 rounded-xl text-lg bg-white/50 dark:bg-black/20 border-2 border-transparent hover:border-primary/30 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-3">
                      <label htmlFor="phone" className="text-base font-bold">رقم الهاتف</label>
                      <Input 
                        id="phone"
                        name="phone" 
                        placeholder="+962-6-XXXXXXX" 
                        type="tel"
                        className="h-14 rounded-xl text-lg bg-white/50 dark:bg-black/20 border-2 border-transparent hover:border-primary/30 focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="organization" className="text-base font-bold">المؤسسة/الشركة</label>
                      <Input 
                        id="organization"
                        name="organization" 
                        placeholder="اسم المؤسسة" 
                        className="h-14 rounded-xl text-lg bg-white/50 dark:bg-black/20 border-2 border-transparent hover:border-primary/30 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="subject" className="text-base font-bold">الموضوع *</label>
                    <Select name="subject" required>
                      <SelectTrigger className="h-14 rounded-xl text-lg bg-white/50 dark:bg-black/20 border-2 border-transparent hover:border-primary/30 focus:border-primary transition-colors">
                        <SelectValue placeholder="اختر موضوع الرسالة" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="acquisition">
                          <div className="flex items-center gap-2">
                            <Sparkles className="h-4 w-4" />
                            <span>استفسار حول الاستحواذ على النطاق والشراكة الاستراتيجية</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="support">الدعم الفني والتقني</SelectItem>
                        <SelectItem value="partnership">فرص الشراكة والمبادرات</SelectItem>
                        <SelectItem value="investment">فرص الاستثمار</SelectItem>
                        <SelectItem value="general">استفسار عام</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-base font-bold">الرسالة *</label>
                    <Textarea 
                      id="message"
                      name="message" 
                      placeholder="اكتب رسالتك هنا..." 
                      className="min-h-[180px] rounded-xl text-lg bg-white/50 dark:bg-black/20 border-2 border-transparent hover:border-primary/30 focus:border-primary transition-colors resize-none"
                      required
                    />
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 animate-fade-in">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-900 dark:text-blue-300 font-medium">سيتم معالجة رسالتك من قبل فريقنا وسنعود إليك في غضون 24 ساعة.</p>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full font-extrabold h-14 text-xl rounded-xl shadow-xl hover:shadow-primary/20 transition-all scale-100 hover:scale-[1.02]"
                  >
                    {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة الآن'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Contact info & Map */}
          <AnimatedSection direction="left">
            <div className="space-y-10">
              <StaggerContainer className="grid gap-6 md:grid-cols-2">
                {contactInfo.map((info, index) => (
                  <a key={index} href={info.href} className="group">
                    <HoverScale scale={1.02}>
                      <Card className="border-none shadow-xl hover:bg-primary/5 transition-all cursor-pointer h-full">
                        <CardContent className="flex items-start gap-5 p-8">
                          <div className="mt-1 rounded-2xl bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <info.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="text-lg font-extrabold mb-1">{info.label}</h4>
                            <p className="text-base text-muted-foreground font-medium leading-relaxed break-all">{info.value}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </HoverScale>
                  </a>
                ))}
              </StaggerContainer>

              {/* Google Map Embed */}
              <FadeInOnScroll>
                <Card className="border-none shadow-2xl overflow-hidden h-[350px] rounded-[2rem]">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    style={{ border: 0 }} 
                    referrerPolicy="no-referrer-when-downgrade" 
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_LJOYJL-84SMuxNB7LtRGhxEQLjswvy0&language=ar&region=jo&q=Greater+Amman+Municipality+Headquarters" 
                    allowFullScreen
                    loading="lazy"
                    title="خريطة موقع أمانة عمّان الكبرى"
                  ></iframe>
                </Card>
              </FadeInOnScroll>

              {/* Social Media Links */}
              <FadeInOnScroll>
                <div className="flex items-center justify-center gap-8 py-6 border-t border-b">
                  <a href="https://www.facebook.com/ammansmart" target="_blank" rel="noopener noreferrer" className="group">
                    <HoverScale scale={1.2}>
                      <Button variant="ghost" size="icon" className="h-12 w-12 text-muted-foreground hover:text-primary transition-colors group-hover:bg-primary/10">
                        <Facebook className="h-8 w-8" />
                      </Button>
                    </HoverScale>
                  </a>
                  <a href="https://www.twitter.com/ammansmart" target="_blank" rel="noopener noreferrer" className="group">
                    <HoverScale scale={1.2}>
                      <Button variant="ghost" size="icon" className="h-12 w-12 text-muted-foreground hover:text-primary transition-colors group-hover:bg-primary/10">
                        <Twitter className="h-8 w-8" />
                      </Button>
                    </HoverScale>
                  </a>
                  <a href="https://www.instagram.com/ammansmart" target="_blank" rel="noopener noreferrer" className="group">
                    <HoverScale scale={1.2}>
                      <Button variant="ghost" size="icon" className="h-12 w-12 text-muted-foreground hover:text-primary transition-colors group-hover:bg-primary/10">
                        <Instagram className="h-8 w-8" />
                      </Button>
                    </HoverScale>
                  </a>
                  <a href="https://www.linkedin.com/company/ammansmart" target="_blank" rel="noopener noreferrer" className="group">
                    <HoverScale scale={1.2}>
                      <Button variant="ghost" size="icon" className="h-12 w-12 text-muted-foreground hover:text-primary transition-colors group-hover:bg-primary/10">
                        <Linkedin className="h-8 w-8" />
                      </Button>
                    </HoverScale>
                  </a>
                </div>
              </FadeInOnScroll>
            </div>
          </AnimatedSection>
        </div>

        {/* FAQ Section */}
        <section className="space-y-10">
          <AnimatedSection direction="down">
            <div className="flex items-center gap-4 mb-2">
              <HelpCircle className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-extrabold leading-tight">الأسئلة المتكررة</h2>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            {faqs.map((faq, index) => (
              <HoverScale key={index} scale={1.02}>
                <Card className="border-none shadow-xl hover:border-primary/20 hover:border-solid border rounded-2xl bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all">
                  <CardHeader className="p-8">
                    <CardTitle className="text-xl font-extrabold leading-tight flex items-start gap-3">
                      <span className="text-primary font-bold text-2xl flex-shrink-0">Q</span>
                      <span>{faq.question}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <CardDescription className="text-base leading-relaxed text-muted-foreground font-medium">
                      <span className="text-primary font-bold text-lg">A: </span>
                      {faq.answer}
                    </CardDescription>
                  </CardContent>
                </Card>
              </HoverScale>
            ))}
          </StaggerContainer>
        </section>

        {/* Support Center Callout */}
        <FadeInOnScroll>
          <Card className="bg-gradient-to-r from-primary to-cyan-600 text-primary-foreground border-none overflow-hidden relative rounded-[2.5rem] shadow-2xl">
            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
              <LifeBuoy className="w-80 h-80" />
            </div>
            <CardContent className="p-16 text-center relative z-10 max-w-2xl mx-auto space-y-8">
              <AnimatedSection direction="down">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Clock className="h-6 w-6 animate-spin" />
                    <span className="text-lg font-bold">متاح 24/7</span>
                  </div>
                  <h3 className="text-4xl font-extrabold leading-tight">هل تحتاج إلى مساعدة فورية؟</h3>
                  <p className="text-xl opacity-90 font-medium leading-relaxed">مركز الدعم الفني متاح على مدار الساعة طوال أيام الأسبوع لمساعدة المستخدمين في تفعيل واستخدام كافة الخدمات الذكية.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up">
                <Button size="lg" variant="secondary" className="font-extrabold h-14 px-12 text-xl rounded-2xl shadow-xl hover:bg-white hover:text-primary transition-all">
                  الاتصال بمركز الدعم
                </Button>
              </AnimatedSection>
            </CardContent>
          </Card>
        </FadeInOnScroll>
      </div>
    </>
  );
}
