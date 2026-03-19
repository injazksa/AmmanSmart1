import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { HeroBackground } from '@/components/HeroBackground';
import { Input } from '@/components/ui/input';
import PageMeta from '@/components/common/PageMeta';
import AnimatedSection from '@/components/common/AnimatedSection';
import FadeInOnScroll from '@/components/common/FadeInOnScroll';
import StaggerContainer from '@/components/common/StaggerContainer';
import HoverScale from '@/components/common/HoverScale';
import { 
  Zap, 
  MapPin, 
  Trophy, 
  TrendingUp, 
  Leaf, 
  Users, 
  ArrowLeft,
  ChevronLeft,
  LayoutGrid,
  Building2,
  Mail,
  Rocket,
  Globe,
  Cpu,
  Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const stats = [
  { label: 'استثمارات عمان سمارت', value: '100+', icon: TrendingUp },
  { label: 'منصات تقنية ذكية', value: '25+', icon: LayoutGrid },
  { label: 'تخفيض الازدحام المروري', value: '30%', icon: Zap },
  { label: 'مساحات خضراء مستدامة', value: '200+', icon: Leaf },
];

const featuredProjects = [
  {
    title: 'شبكة شحن المركبات الكهربائية الذكية',
    description: 'إنشاء شبكة متكاملة من محطات شحن المركبات الكهربائية في مواقع استراتيجية ضمن رؤية عمان سمارت للنقل المستدام.',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e3e40fc7-b5b2-4c7b-97fb-0f1736bb74f2.jpg',
    tag: 'نقل ذكي'
  },
  {
    title: 'نظام الترقيم وتسمية الشوارع الرقمي',
    description: 'نظام حديث يعتمد على قاعدة بيانات جغرافية متقدمة والذكاء الاصطناعي لتسهيل التنقل والخدمات اللوجستية في عمان.',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_ae75a6ae-9b29-48e2-97af-6958e5e6ac3c.jpg',
    tag: 'بنية تحتية ذكية'
  },
  {
    title: 'مشروع خلدا الرياضي المتطور',
    description: 'مركز رياضي عصري يضم مسبحاً أولمبياً وملاعب متعددة تدار بأنظمة ذكية لتعزيز الصحة المجتمعية في الأردن.',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_ff6e637f-84b3-4116-b814-5bb367f6fedb.jpg',
    tag: 'تنمية ذكية'
  }
];

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast.success("تم الاشتراك بنجاح!", {
      description: "ستصلك آخر أخبار عمان سمارت (Amman Smart) ورؤية الأردن 2030 قريباً.",
    });
    setEmail('');
  };

  const handleSoon = (feature: string) => {
    toast.info(`ميزة ${feature} قيد التطوير`, {
      description: "نحن نجهز تجربة استثنائية ستنطلق قريباً في منصة عمان الذكية.",
    });
  };

  return (
    <>
      <PageMeta
        title="عمان سمارت | Amman Smart | مستقبل الذكاء والتطور في الأردن"
        description="منصة عمان سمارت (Amman Smart) - المبادرة الرائدة لتحويل عمان إلى مدينة ذكية مستدامة. اكتشف حلول الذكاء الاصطناعي، النقل الذكي، وفرص الاستثمار التقني في الأردن ورؤية عمان 2030."
        keywords="عمان سمارت, Amman Smart, مدينة ذكية, الأردن, ذكاء اصطناعي, استثمار تقني, نقل ذكي, رؤية عمان 2030, تكنولوجيا, تطوير عمان, Smart City Jordan, Digital Transformation Amman"
        ogUrl="https://ammansmart.com/"
        canonicalUrl="https://ammansmart.com/"
        schemaType="Organization"
      />

      {/* Hero Section with Animated Background */}
      <HeroBackground>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection delay={0.1} direction="down">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-4 py-1.5 text-sm font-medium text-cyan-300 mb-8 backdrop-blur-sm border border-cyan-500/30 animate-pulse">
              <Rocket className="h-4 w-4" />
              <span>عمان سمارت (Amman Smart) - نحو مستقبل أذكى للأردن</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="up">
            <h1 className="mb-8 text-5xl font-extrabold tracking-tight md:text-8xl leading-tight drop-shadow-2xl">
              عمان <span className="text-cyan-400">سمارت</span> الذكية
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.3} direction="up">
            <p className="mb-10 text-xl opacity-95 md:text-2xl leading-relaxed max-w-3xl mx-auto drop-shadow-xl font-medium">
              نحن نقود التحول الرقمي في الأردن عبر منصة Amman Smart، لربط التكنولوجيا المتقدمة والذكاء الاصطناعي بحياة المواطن اليومية في عمان.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4} direction="up">
            <div className="flex flex-wrap gap-6 justify-center">
              <Button size="lg" variant="secondary" className="font-bold text-lg h-14 px-10 shadow-2xl hover:shadow-cyan-500/20 transition-all scale-105 hover:scale-110" asChild>
                <Link to="/future-vision">رؤية عمان 2030</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-primary font-bold text-lg h-14 px-10 shadow-2xl transition-all" asChild>
                <Link to="/smart-initiatives">مبادرات الذكاء والتطور</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </HeroBackground>

      {/* Main Content */}
      <div className="space-y-20 py-12">
        {/* Stats Section */}
        <FadeInOnScroll>
          <StaggerContainer className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            {stats.map((stat, index) => (stat && (
              <HoverScale key={index} scale={1.05}>
                <Card className="border-none shadow-xl bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all">
                  <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                    <div className="mb-4 rounded-2xl bg-primary/10 p-4 text-primary">
                      <stat.icon className="h-8 w-8" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-base font-bold text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </HoverScale>
            )))}
          </StaggerContainer>
        </FadeInOnScroll>

        {/* About Section */}
        <FadeInOnScroll>
          <div className="grid items-center gap-16 md:grid-cols-2">
            <AnimatedSection direction="right">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-extrabold text-primary leading-tight">عمان سمارت: ريادة الذكاء الاصطناعي في الأردن</h2>
                  <div className="h-1.5 w-24 bg-primary rounded-full" />
                </div>
                <p className="text-xl leading-relaxed text-muted-foreground font-medium">
                  تعتبر مبادرة "عمان سمارت" (Amman Smart) المشروع الأهم لشركة رؤية عمّان للاستثمار والتطوير، حيث نهدف إلى دمج أحدث تقنيات الذكاء والتطور التكنولوجي لتحويل العاصمة الأردنية إلى نموذج عالمي للمدن الذكية.
                </p>
                <div className="grid gap-6">
                  {[
                    "تطبيق أنظمة الذكاء الاصطناعي لإدارة المرور في شوارع عمان.",
                    "تطوير بنية تحتية رقمية تدعم الابتكار والذكاء في الأردن.",
                    "تعزيز مكانة عمان سمارت كمركز إقليمي للتطور التقني."
                  ].map((text, i) => (
                    <AnimatedSection key={i} delay={i * 0.1} direction="right">
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition-all">
                        <div className="mt-1 rounded-full bg-primary p-1 text-white flex-shrink-0">
                          <ChevronLeft className="h-4 w-4" />
                        </div>
                        <span className="text-lg font-bold">{text}</span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_a7041ca8-c789-4924-b1b6-69e4af1dc312.jpg" 
                    alt="Amman Smart City - عمان سمارت الذكية" 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </FadeInOnScroll>

        {/* SEO Content Section */}
        <FadeInOnScroll>
          <div className="bg-primary/5 rounded-[2rem] p-12 border border-primary/10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Cpu className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-extrabold text-primary">الذكاء والتطور في قلب عمان</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                نحن في <strong>عمان سمارت (Amman Smart)</strong> نؤمن بأن مستقبل الأردن يكمن في التطور التقني. من خلال دمج حلول <strong>الذكاء الاصطناعي</strong> في النقل، الطاقة، والخدمات العامة، نسعى لتكون عمان المدينة الأذكى في المنطقة، محققين بذلك أهداف رؤية عمان 2030.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Badge variant="outline" className="px-4 py-2 text-sm font-bold border-primary/30">#عمان_سمارت</Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm font-bold border-primary/30">#Amman_Smart</Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm font-bold border-primary/30">#ذكاء_اصطناعي_الأردن</Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm font-bold border-primary/30">#تطور_عمان</Badge>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Featured Projects */}
        <section className="space-y-10">
          <FadeInOnScroll>
            <div className="flex flex-col md:flex-row items-end justify-between gap-6 border-b pb-8">
              <div className="space-y-2">
                <h2 className="text-4xl font-extrabold text-primary">مشاريع عمان سمارت</h2>
                <p className="text-xl text-muted-foreground font-medium">أهم مبادرات التطور والذكاء في العاصمة الأردنية</p>
              </div>
              <Button variant="outline" className="font-bold text-lg h-12 px-8 rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all" asChild>
                <Link to="/projects">استكشف كافة المشاريع <ArrowLeft className="mr-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </FadeInOnScroll>

          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <HoverScale key={index} scale={1.02}>
                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-none bg-card/50 backdrop-blur-sm">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-white shadow-xl">
                      {project.tag}
                    </div>
                  </div>
                  <CardHeader className="p-8">
                    <CardTitle className="text-2xl font-extrabold group-hover:text-primary transition-colors leading-tight">{project.title}</CardTitle>
                    <CardDescription className="text-lg mt-2 line-clamp-3 font-medium">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <Button variant="link" className="p-0 h-auto text-primary font-extrabold text-lg group-hover:gap-3 transition-all">
                      تفاصيل المبادرة <ChevronLeft className="h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </HoverScale>
            ))}
          </StaggerContainer>
        </section>

        {/* Newsletter Section */}
        <FadeInOnScroll>
          <Card className="bg-gradient-to-r from-slate-950 to-slate-900 text-white border-none overflow-hidden relative rounded-[2rem] shadow-2xl">
            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none rotate-12">
              <Mail className="w-64 h-64" />
            </div>
            <div className="absolute bottom-0 left-0 p-12 opacity-10 pointer-events-none -rotate-12">
              <Globe className="w-48 h-48" />
            </div>
            <CardContent className="p-16 text-center relative z-10 max-w-3xl mx-auto space-y-8">
              <AnimatedSection direction="down">
                <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">تابع تطور عمان سمارت</h3>
                  <p className="text-xl text-slate-300 font-medium leading-relaxed">
                    اشترك لتصلك آخر أخبار الذكاء الاصطناعي والتطور التقني في عمان ورؤية الأردن 2030.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up">
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 items-center">
                  <Input 
                    type="email" 
                    placeholder="بريدك الإلكتروني" 
                    className="h-14 bg-white/10 border-white/20 text-white placeholder:text-slate-400 text-lg rounded-2xl focus:ring-cyan-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" size="lg" className="h-14 px-10 text-lg font-bold rounded-2xl w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 transition-colors">
                    اشترك الآن
                  </Button>
                </form>
              </AnimatedSection>

              <div className="flex justify-center gap-8 pt-4">
                <button onClick={() => handleSoon("إضافة نشرة")} className="text-sm font-bold text-slate-400 hover:text-white transition-colors">إضافة نشرة جديدة</button>
                <button onClick={() => handleSoon("الأرشيف")} className="text-sm font-bold text-slate-400 hover:text-white transition-colors">أرشيف النشرات</button>
              </div>
            </CardContent>
          </Card>
        </FadeInOnScroll>
      </div>
    </>
  );
}
