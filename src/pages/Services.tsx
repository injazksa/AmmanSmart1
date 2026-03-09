import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bus, 
  MapPin, 
  Zap, 
  Leaf, 
  ShieldCheck, 
  Wifi, 
  Globe, 
  ChevronLeft, 
  ArrowLeft,
  Search,
  LayoutGrid,
  FileText,
  Building2,
  ParkingCircle
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const serviceCategories = [
  { id: 'all', name: 'جميع الخدمات', icon: LayoutGrid },
  { id: 'transportation', name: 'التنقل والنقل', icon: Bus },
  { id: 'utilities', name: 'المرافق والخدمات', icon: Zap },
  { id: 'public-services', name: 'الخدمات العامة', icon: Building2 },
];

const services = [
  {
    title: 'تطبيقات النقل العام الذكية',
    description: 'معرفة مواعيد وصول الحافلات وتخطيط رحلاتك مسبقاً من خلال تطبيقات الهاتف المحمول.',
    category: 'transportation',
    icon: Bus,
    link: '#',
    status: 'نشط'
  },
  {
    title: 'تطبيق الاصطفاف الذكي',
    description: 'العثور على أماكن وقوف السيارات المتاحة وحجزها والدفع إلكترونياً لتقليل وقت البحث.',
    category: 'transportation',
    icon: ParkingCircle,
    link: '#',
    status: 'قيد التطوير'
  },
  {
    title: 'نظام "مستكشف عمّان" (GIS)',
    description: 'الوصول إلى معلومات جغرافية دقيقة حول المخططات التنظيمية، حدود الأراضي، والبيانات البيئية.',
    category: 'public-services',
    icon: MapPin,
    link: '#',
    status: 'نشط'
  },
  {
    title: 'نظام الخدمات الإلكترونية الشاملة',
    description: 'منصة متكاملة للوصول إلى كافة الخدمات الحكومية والاجتماعية في أمانة عمّان والوزارات.',
    category: 'public-services',
    icon: Globe,
    link: '#',
    status: 'نشط'
  },
  {
    title: 'منصة التحكم المروري',
    description: 'الحصول على معلومات آنية عن الحوادث والازدحامات المرورية عبر اللوحات الإلكترونية الذكية.',
    category: 'transportation',
    icon: Zap,
    link: '#',
    status: 'نشط'
  },
  {
    title: 'شبكة شحن المركبات الكهربائية',
    description: 'تحديد مواقع محطات الشحن القريبة وحجز موعد للشحن عبر التطبيق المخصص.',
    category: 'utilities',
    icon: Zap,
    link: '#',
    status: 'قيد التنفيذ'
  },
  {
    title: 'نظام الاستجابة لحالات الطوارئ',
    description: 'تسهيل وصول سيارات الإسعاف والدفاع المدني من خلال نظام الترقيم وتسمية الشوارع الذكي.',
    category: 'public-services',
    icon: ShieldCheck,
    link: '#',
    status: 'نشط'
  },
  {
    title: 'بوابة المستثمرين',
    description: 'توفير بيانات دقيقة ومخططات للمستثمرين الراغبين في المساهمة في مشاريع المدينة.',
    category: 'public-services',
    icon: FileText,
    link: '#',
    status: 'نشط',
    image: '/images/investor-portal.png'
  }
];

export default function Services() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeTab, setActiveTab] = React.useState('all');

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === 'all' || service.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 border-b pb-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-primary">دليل الخدمات الذكية</h2>
        <p className="text-lg text-muted-foreground max-w-3xl">
          اكتشف واستخدم الخدمات الرقمية التي توفرها عمّان لتحسين تجربتك اليومية في المدينة.
        </p>
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="ابحث عن خدمة..." 
            className="pr-10" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full h-auto">
            {serviceCategories.map(category => (
              <TabsTrigger key={category.id} value={category.id} className="gap-2 py-2">
                <category.icon className="h-4 w-4 hidden md:block" />
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredServices.length > 0 ? (
          filteredServices.map((service, index) => (
            <Card key={index} className="group relative h-full flex flex-col hover:border-primary/50 hover:bg-primary/5 transition-all">
              {service.image && (
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-4">
                  <div className="rounded-xl bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <Badge variant={service.status === 'نشط' ? 'default' : 'secondary'} className="text-[10px]">
                    {service.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 pb-6">
                <CardDescription className="text-sm line-clamp-3 mb-6 flex-1">
                  {service.description}
                </CardDescription>
                <Button className="w-full font-bold gap-2" variant="outline">
                  استخدام الخدمة <ChevronLeft className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-muted-foreground">
            لم يتم العثور على خدمات تطابق بحثك.
          </div>
        )}
      </div>
    </div>
  );
}
