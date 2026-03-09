import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Tag, 
  ArrowLeft, 
  ExternalLink, 
  ChevronLeft,
  Share2,
  Newspaper,
  TrendingUp,
  Award
} from 'lucide-react';

const newsItems = [
  {
    title: 'رؤية عمّان تطلق مشروع شبكة شحن المركبات الكهربائية المتكاملة',
    date: '2026-02-15',
    category: 'نقل ذكي',
    summary: 'أعلنت شركة رؤية عمّان للاستثمار والتطوير عن البدء في تنفيذ شبكة متكاملة من محطات شحن المركبات الكهربائية في مواقع استراتيجية بالعاصمة لتعزيز التنقل المستدام.',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e3e40fc7-b5b2-4c7b-97fb-0f1736bb74f2.jpg',
    featured: true
  },
  {
    title: 'توقيع اتفاقية لإنشاء مشروع رياضي متكامل في خلدا بقيمة 5.3 مليون دينار',
    date: '2026-01-28',
    category: 'استثمار',
    summary: 'أبرمت رؤية عمّان اتفاقية تطوير لإنشاء مشروع رياضي ضخم في منطقة خلدا يشمل مسبحاً أولمبياً وأكاديمية رياضية وملاعب تنس وسلة.',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_ff6e637f-84b3-4116-b814-5bb367f6fedb.jpg',
    featured: false
  },
  {
    title: 'تحويل مواقف عبدون إلى مركز شامل لخدمات السيارات بالتعاون مع دلة البركة',
    date: '2025-12-10',
    category: 'خدمات',
    summary: 'وقعت شركة دلة البركة اتفاقية شراكة لتطوير مواقف عبدون وتحويلها إلى مركز عصري يقدم كافة خدمات السيارات بما في ذلك الشحن الكهربائي.',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_b3e1225b-7f84-41b8-9239-746e4cc8c1f5.jpg',
    featured: false
  },
  {
    title: 'اكتمال ربط نظام تسمية الشوارع الجديد مع قواعد البيانات الجغرافية (GIS)',
    date: '2025-11-05',
    category: 'بنية تحتية',
    summary: 'تم الانتهاء من دمج نظام الترقيم وتسمية الشوارع الحديث مع أنظمة الملاحة لتعزيز سرعة الاستجابة للطوارئ وتسهيل الخدمات اللوجستية.',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_ae75a6ae-9b29-48e2-97af-6958e5e6ac3c.jpg',
    featured: false
  },
  {
    title: 'عمّان تحتضن المنتدى العربي للمدن الذكية لتعزيز التحول الإلكتروني',
    date: '2025-10-15',
    category: 'فعاليات',
    summary: 'أكدت أمانة عمّان دورها الريادي في المنطقة من خلال استضافة المنتدى العربي للمدن الذكية، مما يسهم في تبادل الخبرات في التحول الرقمي.',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_bc418c01-aade-4389-81c9-d5a5d21b7aa5.jpg',
    featured: false
  }
];

export default function News() {
  const featuredNews = newsItems.find(item => item.featured);
  const otherNews = newsItems.filter(item => !item.featured);

  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-4 border-b pb-8">
        <div className="flex items-center gap-3">
          <Newspaper className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-extrabold tracking-tight text-primary">الأخبار والمستجدات</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl">
          تابع آخر التطورات والإعلانات الخاصة بمشاريع مبادرة عمّان الذكية وقصص النجاح في تحويل مدينتنا.
        </p>
      </div>

      {/* Featured News */}
      {featuredNews && (
        <Card className="overflow-hidden border-none shadow-xl bg-card">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-video md:aspect-auto">
              <img 
                src={featuredNews.image} 
                alt={featuredNews.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary hover:bg-primary/90 text-white font-bold px-4 py-1">
                  أهم الأخبار
                </Badge>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {featuredNews.date}</span>
                <span className="flex items-center gap-1"><Tag className="h-4 w-4" /> {featuredNews.category}</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-primary leading-tight">
                {featuredNews.title}
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {featuredNews.summary}
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="font-bold gap-2">
                  التفاصيل الكاملة <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="ghost" className="h-12 w-12 rounded-full p-0">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* News Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {otherNews.map((news, index) => (
          <Card key={index} className="flex flex-col h-full border-none shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative aspect-video">
              <img 
                src={news.image} 
                alt={news.title} 
                className="w-full h-full object-cover"
              />
              <Badge variant="secondary" className="absolute bottom-4 right-4 bg-white/90 text-primary">
                {news.category}
              </Badge>
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" /> {news.date}
              </div>
              <CardTitle className="text-xl leading-tight hover:text-primary transition-colors cursor-pointer">
                {news.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className="text-sm line-clamp-2">
                {news.summary}
              </CardDescription>
            </CardContent>
            <CardFooter className="pt-4 border-t">
              <Button variant="link" className="p-0 h-auto font-bold text-primary flex gap-2">
                اقرأ المزيد <ChevronLeft className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Newsletter */}
      <section className="rounded-2xl bg-primary/5 p-8 md:p-12 border border-primary/10">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">اشترك في النشرة الإخبارية</h3>
          <p className="text-muted-foreground mb-8">كن أول من يعرف عن المبادرات والمشاريع والخدمات الذكية الجديدة في عمّان.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="بريدك الإلكتروني" 
              className="flex-1 rounded-md border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="font-bold">اشتراك</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
