import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { 
  Activity, 
  Users, 
  Car, 
  Zap, 
  Leaf, 
  Trophy, 
  TrendingUp, 
  Signal, 
  Navigation,
  Globe,
  Database,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const trafficData = [
  { name: '06:00', level: 30 },
  { name: '08:00', level: 85 },
  { name: '10:00', level: 65 },
  { name: '12:00', level: 55 },
  { name: '14:00', level: 75 },
  { name: '16:00', level: 90 },
  { name: '18:00', level: 80 },
  { name: '20:00', level: 45 },
];

const sustainabilityData = [
  { name: 'الطاقة المتجددة', value: 45, color: 'hsl(var(--chart-1))' },
  { name: 'المساحات الخضراء', value: 25, color: 'hsl(var(--chart-2))' },
  { name: 'كفاءة المباني', value: 30, color: 'hsl(var(--chart-3))' },
];

const digitalProgress = [
  { year: '2022', progress: 40 },
  { year: '2023', progress: 55 },
  { year: '2024', progress: 75 },
  { year: '2025', progress: 90 },
];

const kpis = [
  { 
    title: 'مؤشر التحول الرقمي', 
    value: '82%', 
    change: '+12%', 
    status: 'up', 
    icon: Globe, 
    description: 'تحسن في توافر الخدمات الإلكترونية' 
  },
  { 
    title: 'انسيابية المرور', 
    value: '68%', 
    change: '-5%', 
    status: 'up', 
    icon: Car, 
    description: 'تخفيض في معدلات الازدحام المروري' 
  },
  { 
    title: 'تغطية شبكة الجيل الخامس', 
    value: '95%', 
    change: '+8%', 
    status: 'up', 
    icon: Signal, 
    description: 'تغطية شاملة للمناطق الحضرية' 
  },
  { 
    title: 'مساهمة الطاقة المتجددة', 
    value: '35%', 
    change: '+15%', 
    status: 'up', 
    icon: Leaf, 
    description: 'توليد الطاقة من النفايات والمشاريع الخضراء' 
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 border-b pb-8">
        <div className="flex items-center gap-3">
          <Database className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-extrabold tracking-tight text-primary">لوحة بيانات المدينة الذكية</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl">
          عرض حي لبيانات المدينة والمؤشرات الرئيسية التي تعكس تطور مبادرة عمّان الذكية.
        </p>
      </div>

      {/* KPI Row */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              <div className="rounded-full bg-primary/10 p-2 text-primary">
                <kpi.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <span className={kpi.status === 'up' ? 'text-green-500 flex items-center' : 'text-red-500 flex items-center'}>
                  {kpi.status === 'up' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {kpi.change}
                </span>
                {kpi.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Traffic Chart */}
        <Card className="lg:col-span-4 border-none shadow-md">
          <CardHeader>
            <CardTitle>مستويات الازدحام المروري (يومي)</CardTitle>
            <CardDescription>تحليل حركة المرور بناءً على مستشعرات المنصة الذكية</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="colorLevel" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                   contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
                   itemStyle={{ color: 'hsl(var(--primary))' }}
                />
                <Area type="monotone" dataKey="level" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorLevel)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Sustainability Pie Chart */}
        <Card className="lg:col-span-3 border-none shadow-md">
          <CardHeader>
            <CardTitle>توزيع مؤشرات الاستدامة</CardTitle>
            <CardDescription>النسب المئوية لمبادرات المدينة الخضراء</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex flex-col items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sustainabilityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {sustainabilityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              {sustainabilityData.map((entry, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: entry.color }} />
                  <span className="text-xs font-medium">{entry.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Digital Growth */}
        <Card className="lg:col-span-3 border-none shadow-md">
          <CardHeader>
            <CardTitle>نمو التحول الرقمي</CardTitle>
            <CardDescription>التقدم السنوي في أتمتة خدمات أمانة عمّان</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={digitalProgress}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                   contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
                />
                <Line type="monotone" dataKey="progress" stroke="hsl(var(--accent))" strokeWidth={3} dot={{ fill: 'hsl(var(--accent))', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Live Status Cards */}
        <Card className="lg:col-span-4 border-none shadow-md">
          <CardHeader>
            <CardTitle>الحالة التشغيلية للمنصة</CardTitle>
            <CardDescription>مراقبة لحظية للأنظمة الذكية في المدينة</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'شبكة محطات الشحن الكهربائي', status: 'مستقر', color: 'bg-green-500' },
                { name: 'نظام التحكم المروري المركزي', status: 'نشط', color: 'bg-green-500' },
                { name: 'بوابة الخدمات الإلكترونية', status: 'صيانة مجدولة', color: 'bg-yellow-500' },
                { name: 'مستكشف عمّان الجغرافي', status: 'مستقر', color: 'bg-green-500' },
                { name: 'تطبيقات الهاتف المحمول', status: 'نشط', color: 'bg-green-500' },
              ].map((system, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <div className={`h-2.5 w-2.5 rounded-full ${system.color} animate-pulse`} />
                    <span className="text-sm font-medium">{system.name}</span>
                  </div>
                  <Badge variant="outline" className="text-[10px]">{system.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
