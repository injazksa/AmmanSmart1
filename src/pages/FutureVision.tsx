import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Rocket, 
  Eye, 
  Cpu, 
  Globe2, 
  Glasses, 
  Map, 
  Zap, 
  ShieldCheck,
  ArrowLeft,
  Users,
  Building2,
  TreePine,
  Sparkles
} from 'lucide-react';
import { toast } from 'sonner';

const visionPillars = [
  {
    title: "عمان الافتراضية (VR Tourism)",
    description: "تجربة غامرة تتيح للسياح والمستثمرين التجول في شوارع عمان ومعالمها التاريخية بتقنية الواقع الافتراضي، لربط الماضي العريق بمستقبل ذكي.",
    icon: Glasses,
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "رؤية عمان 2030",
    description: "خارطة طريق متكاملة لتحويل العاصمة إلى نموذج عالمي للمدن المستدامة، حيث تلتقي التكنولوجيا مع جودة الحياة.",
    icon: Eye,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "الربط مع مدينة عمرة الذكية",
    description: "إنشاء أول شبكة ربط ذكية بين العاصمة ومدينة عمرة، لتكامل الخدمات اللوجستية والسياحية عبر انترنت الأشياء (IoT).",
    icon: Network,
    color: "bg-emerald-500/10 text-emerald-500"
  },
  {
    title: "التنقل الذكي والذاتي",
    description: "تطوير منظومة نقل عام تعتمد على الذكاء الاصطناعي لتقليل الازدحام والانبعاثات الكربونية في شوارع عمان.",
    icon: Zap,
    color: "bg-amber-500/10 text-amber-500"
  }
];

import { Network } from 'lucide-react';

export default function FutureVision() {
  const handleNotify = () => {
    toast.success("تم تسجيل اهتمامك بنجاح!", {
      description: "سنقوم بإعلامك فور إطلاق تجربة عمان الافتراضية.",
    });
  };

  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-8 py-20 text-white shadow-2xl">
        <div className="absolute inset-0 opacity-20">
           <img 
             src="/images/background/hero-bg.jpg" 
             alt="Future Vision" 
             className="w-full h-full object-cover"
           />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-medium text-blue-300 mb-6">
            <Rocket className="h-4 w-4" />
            <span>نحو آفاق جديدة</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            مستقبل عمّان <span className="text-blue-400">الذكي</span> يبدأ الآن
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            نحن لا نبني مدينة فحسب، بل نصمم تجربة حياة متكاملة تربط الإنسان بالتكنولوجيا، وعمان بالعالم، عبر مبادرات رائدة تتجاوز التوقعات.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="font-bold h-12 px-8" onClick={handleNotify}>
              كن جزءاً من الرؤية
            </Button>
            <Button size="lg" variant="outline" className="font-bold h-12 px-8 bg-white/5 border-white/20 hover:bg-white/10">
              استكشاف خارطة الطريق
            </Button>
          </div>
        </div>
      </div>

      {/* Vision Pillars Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {visionPillars.map((pillar, index) => (
          <Card key={index} className="group border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <CardContent className="p-8">
              <div className={`mb-6 inline-flex rounded-2xl p-4 ${pillar.color} transition-transform group-hover:scale-110`}>
                <pillar.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {pillar.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Vision Section */}
      <div className="grid gap-12 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-none shadow-xl bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
          <CardHeader className="p-10">
            <CardTitle className="text-3xl font-bold">عمان 2030: مدينة ذكية بروح عريقة</CardTitle>
            <CardDescription className="text-lg">كيف سنربط الأصالة بالابتكار العالمي</CardDescription>
          </CardHeader>
          <CardContent className="px-10 pb-10 space-y-6">
            <p className="text-lg leading-relaxed">
              تعتمد رؤيتنا لعام 2030 على ركائز أساسية تجعل من عمان مركزاً إقليمياً للابتكار. سنقوم بدمج تقنيات <strong>الواقع المعزز (AR)</strong> في الشوارع الرئيسية لتسهيل الملاحة والوصول للخدمات، مع تحويل كافة المعالم السياحية إلى نقاط تفاعلية ذكية.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/50 dark:bg-black/20">
                <ShieldCheck className="text-blue-500" />
                <span className="font-medium">أمن بيانات سيبراني متقدم</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/50 dark:bg-black/20">
                <TreePine className="text-emerald-500" />
                <span className="font-medium">مساحات خضراء ذكية</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/50 dark:bg-black/20">
                <Users className="text-purple-500" />
                <span className="font-medium">مشاركة مجتمعية رقمية</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/50 dark:bg-black/20">
                <Building2 className="text-amber-500" />
                <span className="font-medium">بنية تحتية مرنة</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xl bg-primary text-primary-foreground">
          <CardHeader className="p-8">
            <CardTitle className="text-2xl font-bold">التزامنا للمستثمرين</CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0 space-y-6">
            <p className="text-primary-foreground/90 leading-relaxed">
              نوفر بيئة استثمارية شفافة مدعومة بالذكاء الاصطناعي لتحليل البيانات السوقية لحظياً، مما يضمن أعلى عوائد وأقل مخاطر في قلب الشرق الأوسط.
            </p>
            
            {/* Strategic Domain Asset Callout */}
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20 space-y-4">
              <div className="flex items-center gap-2 text-amber-300">
                <Sparkles className="h-5 w-5" />
                <h4 className="font-bold text-lg">أصل رقمي استراتيجي</h4>
              </div>
              <p className="text-sm leading-relaxed opacity-90">
                يعتبر النطاق <strong>AmmanSmart.com</strong> الهوية الرقمية الأقوى لمشاريع التحول الذكي في العاصمة. هذا النطاق متاح حالياً كفرصة استحواذ استراتيجية للمستثمرين الراغبين في قيادة المشهد الرقمي في عمان.
              </p>
              <Button variant="secondary" size="sm" className="w-full font-bold" asChild>
                <a href="/contact">استفسر عن الاستحواذ</a>
              </Button>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-white shrink-0" />
                <span>تراخيص استثمارية فورية عبر البلوكشين</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-white shrink-0" />
                <span>ربط مباشر مع الأسواق العالمية</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center max-w-2xl mx-auto space-y-6 py-12">
        <h2 className="text-3xl font-bold">هل أنت جاهز للمستقبل؟</h2>
        <p className="text-muted-foreground text-lg">
          انضم إلينا في هذه الرحلة الملهمة لتحويل عمان إلى أذكى مدينة في المنطقة.
        </p>
        <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold">
          تواصل مع فريق الرؤية
        </Button>
      </div>
    </div>
  );
}
