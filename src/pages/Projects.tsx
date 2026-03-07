import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Cpu, 
  MapPin, 
  ShieldCheck, 
  Wifi, 
  Car, 
  CloudLightning,
  Dumbbell,
  Navigation,
  ExternalLink,
  ChevronLeft
} from 'lucide-react';

const projects = [
  {
    title: 'شبكة شحن ذكية للمركبات الكهربائية',
    description: 'مشروع إنشاء شبكة متكاملة من محطات شحن المركبات الكهربائية في مواقع استراتيجية. توفر محطات حديثة ذات هوية بصرية موحدة، ومرافق خدمية متكاملة، ومنصة إلكترونية للحجز والدفع الذكي.',
    icon: CloudLightning,
    status: 'قيد التنفيذ',
    category: 'النقل المستدام',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e3e40fc7-b5b2-4c7b-97fb-0f1736bb74f2.jpg'
  },
  {
    title: 'نظام الترقيم وتسمية الشوارع',
    description: 'تطبيق نظام حديث لترقيم وتسمية الشوارع يعتمد على قاعدة بيانات جغرافية متقدمة متصلة بأنظمة الملاحة والتوجيه. يسهم في تحسين الاستجابة لحالات الطوارئ وتسهيل الخدمات اللوجستية.',
    icon: Navigation,
    status: 'مكتمل جزئياً',
    category: 'البنية التحتية',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_ae75a6ae-9b29-48e2-97af-6958e5e6ac3c.jpg'
  },
  {
    title: 'مركز متكامل لخدمات السيارات في عبدون',
    description: 'تحديث مواقف عبدون وتحويلها إلى مركز شامل لخدمات السيارات، يتضمن غسيل السيارات، تغيير الإطارات، شحن المركبات الكهربائية، وتأجير السيارات.',
    icon: Car,
    status: 'قيد التطوير',
    category: 'الخدمات العامة',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_b3e1225b-7f84-41b8-9239-746e4cc8c1f5.jpg'
  },
  {
    title: 'مشروع رياضي متكامل في خلدا',
    description: 'إنشاء مشروع رياضي متكامل في منطقة خلدا بقيمة استثمارية تبلغ 5.3 مليون دينار، ويشمل مسبحاً أولمبياً، أكاديمية رياضية، وملاعب متنوعة.',
    icon: Dumbbell,
    status: 'قيد التنفيذ',
    category: 'التنمية المجتمعية',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_ff6e637f-84b3-4116-b814-5bb367f6fedb.jpg'
  },
  {
    title: 'منصة التنقل الذكي',
    description: 'حزمة تهدف إلى تنظيم الحركة المرورية من خلال منصة للتحكم المروري، وأنظمة مراقبة آلية للمخالفات، وتطبيقات تدعم الاصطفاف الذكي.',
    icon: Cpu,
    status: 'قيد التشغيل',
    category: 'التنقل الذكي',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_ee7eb6fc-5df5-4681-9a66-4eb083103af7.jpg'
  },
  {
    title: 'نظام "مستكشف عمّان" (GIS)',
    description: 'منصة إلكترونية متكاملة تتيح للمواطنين والمستثمرين الوصول إلى معلومات جغرافية دقيقة حول المدينة والمخططات التنظيمية.',
    icon: MapPin,
    status: 'متاح',
    category: 'البيانات الجغرافية',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e9e271a3-5468-4bba-88d0-14916e2f8ed9.jpg'
  }
];

export default function Projects() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 border-b pb-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-primary">مبادرات ومشاريع المدينة الذكية</h2>
        <p className="text-lg text-muted-foreground max-w-3xl">
          تعرف على الجهود والمشاريع التي تقودها رؤية عمّان لتحويل العاصمة إلى نموذج رائد في المدن الذكية.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-shadow overflow-hidden">
            <div className="relative aspect-video">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-white/90 text-primary shadow-sm">
                  {project.category}
                </Badge>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <project.icon className="h-5 w-5" />
                </div>
                <Badge variant="outline" className="text-xs">
                  {project.status}
                </Badge>
              </div>
              <CardTitle className="text-xl leading-snug">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <CardDescription className="text-sm leading-relaxed mb-6">
                {project.description}
              </CardDescription>
              <div className="flex items-center justify-between mt-auto pt-4 border-t">
                <Button variant="ghost" size="sm" className="p-0 h-auto font-bold text-primary flex gap-2">
                   تفاصيل المشروع <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
