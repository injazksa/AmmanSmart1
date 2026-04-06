import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Bike, 
  Bus, 
  Cpu, 
  Eye, 
  Zap, 
  Sparkles, 
  Layers, 
  Smartphone,
  BarChart3,
  History
} from 'lucide-react';

export default function SmartInitiatives() {
  return (
    <div className="space-y-16 pb-20">
      {/* Header Section */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-12 text-white shadow-2xl">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        
        <div className="relative z-10 max-w-3xl space-y-6">
          <Badge className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-1 text-sm font-bold">مبادرات 2026</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            حلول ذكية لمستقبل <span className="text-cyan-400 text-shadow-glow">أكثر كفاءة</span>
          </h1>
          <p className="text-xl text-slate-300 font-medium leading-relaxed">
            نستعرض هنا الركائز الأساسية للتحول الرقمي في عمان، من التنقل الذكي إلى تقنيات الهولوجرام التفاعلية، لتعزيز جودة الحياة وجذب الاستثمارات العالمية.
          </p>
        </div>
      </div>

      {/* 01. Smart Mobility Section */}
      <section id="smart-mobility" className="scroll-mt-24 space-y-8">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
            <span className="text-2xl font-black">01</span>
          </div>
          <h2 className="text-3xl font-extrabold text-primary">التنقل الذكي | Smart Mobility</h2>
        </div>

        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl mb-8">
          <img 
            src="/images/smart-mobility.png" 
            alt="Smart Mobility" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
            <div className="flex items-center gap-3 text-white">
              <Sparkles className="h-6 w-6 text-cyan-400" />
              <span className="text-lg font-bold">مستقبل التنقل الذكي في شوارع عمان</span>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="group overflow-hidden border-none bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500">
            <CardHeader className="p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500">
                <Bike className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl font-extrabold">ممرات السكوتر الذكية</CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                تخطيط مسارات ذكية باستخدام إنترنت الأشياء (IoT) لضمان سلامة المستخدمين وتوفير بدائل نقل صديقة للبيئة في المناطق المزدحمة.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-cyan-50 text-cyan-700 border-cyan-100">تتبع لحظي</Badge>
                <Badge variant="secondary" className="bg-cyan-50 text-cyan-700 border-cyan-100">شحن بالطاقة الشمسية</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden border-none bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500">
            <CardHeader className="p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                <Bus className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl font-extrabold">الحافلات الذكية</CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                تتبع مباشر لمواعيد الحافلات عبر تطبيقات الهاتف، مع توفير شبكة Wi-Fi مجانية وأنظمة دفع لا تلامسية لتعزيز تجربة النقل العام.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-100">تطبيقات الهاتف</Badge>
                <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-100">دفع إلكتروني</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 02. Digital Signage Section */}
      <section id="digital-ads" className="scroll-mt-24 relative overflow-hidden rounded-[2.5rem] bg-primary/5 p-12 border border-primary/10">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        
        <div className="relative z-10 grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                <span className="text-2xl font-black">02</span>
              </div>
              <h2 className="text-3xl font-extrabold text-primary">الإعلانات الرقمية | AI Signage</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                لوحاتنا الإعلانية ليست مجرد شاشات، بل هي <strong className="text-primary">أنظمة ذكية</strong> تحلل بيانات المارة لتقديم محتوى إعلاني مخصص يزيد من فعالية الحملات التسويقية.
              </p>
              
              <ul className="grid gap-4">
                {[
                  { icon: Eye, text: "تحليل الكثافة (Crowd Analytics)" },
                  { icon: Cpu, text: "استهداف لحظي (Real-time Targeting)" },
                  { icon: BarChart3, text: "تقارير أداء دقيقة للمعلنين" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-primary/5">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="text-lg font-bold">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl opacity-50" />
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/images/digital-signage.png" 
                alt="AI Signage" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="flex items-center gap-3 text-white">
                  <Sparkles className="h-6 w-6 text-cyan-400" />
                  <span className="text-lg font-bold">تقنيات تحليل الجمهور بالذكاء الاصطناعي</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Holograms Section */}
      <section id="holograms" className="scroll-mt-24 space-y-8">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
            <span className="text-2xl font-black">03</span>
          </div>
          <h2 className="text-3xl font-extrabold text-primary">الفعاليات والابتكار | Holograms</h2>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          <Card className="relative overflow-hidden border-none bg-slate-950 text-white rounded-[2rem]">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="p-12 space-y-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-4 py-1.5 text-sm font-medium text-cyan-300 border border-cyan-500/30">
                    <Sparkles className="h-4 w-4" />
                    <span>تجربة سياحية "خارج الصندوق"</span>
                  </div>
                  <h3 className="text-3xl font-extrabold leading-tight">تاريخ عمان يتجسد أمامك بتقنية الهولوجرام</h3>
                  <p className="text-xl text-slate-300 font-medium leading-relaxed">
                    استخدام تقنية <strong className="text-cyan-400">الهولوجرام ثلاثية الأبعاد</strong> لعرض تاريخ عمان العريق في الساحات العامة بطريقة تفاعلية تبهر الزوار وتربط الماضي بالمستقبل.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <History className="h-8 w-8 text-cyan-400" />
                      <p className="font-bold">عرض تاريخي</p>
                    </div>
                    <div className="space-y-2">
                      <Layers className="h-8 w-8 text-cyan-400" />
                      <p className="font-bold">تفاعل ثلاثي الأبعاد</p>
                    </div>
                  </div>
                </div>
                <div className="relative min-h-[400px]">
                  <img 
                    src="/images/holograms.png" 
                    alt="Hologram Technology" 
                    className="absolute inset-0 h-full w-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Summary / Call to Action */}
      <div className="text-center max-w-2xl mx-auto space-y-6 pt-10">
        <h3 className="text-2xl font-extrabold text-primary">هل أنت مستعد للمشاركة في هذا التحول؟</h3>
        <p className="text-lg text-muted-foreground font-medium">
          نحن نفتح أبوابنا للمستثمرين والمبتكرين للمساهمة في بناء هذه الرؤية وتحويلها إلى واقع ملموس في شوارع عمان.
        </p>
      </div>
    </div>
  );
}
