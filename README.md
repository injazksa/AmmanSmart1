# عمان الذكية | Amman Smart Platform

منصة عمان الذكية - مشروع رائد لتطوير حلول النقل الذكي، الإعلانات الرقمية المتقدمة، وبوابات الاستثمار المتطورة.

## 🌟 المميزات الرئيسية

### 🔍 تحسين محركات البحث (SEO)
- **Meta Tags متقدمة:** تم إضافة Meta Tags احترافية لكل صفحة
- **Schema.org JSON-LD:** دعم كامل لـ Schema.org لتحسين ظهور الموقع في نتائج البحث
- **Sitemap و Robots.txt:** ملفات SEO متقدمة لتحسين فهرسة الموقع
- **Open Graph و Twitter Cards:** دعم كامل لمشاركة الموقع على وسائل التواصل الاجتماعي

### ✨ الأنيميشن والتأثيرات البصرية
- **Framer Motion:** مكتبة Motion للحركات السلسة والانسيابية
- **Fade-in على التمرير:** تأثيرات Fade-in عند التمرير عبر الصفحة
- **Stagger Animation:** تأثيرات متتالية للعناصر
- **Hover Effects:** تأثيرات تفاعلية عند التمرير على العناصر

### 📱 تحسين تجربة المستخدم (UX)
- **Skeleton Loaders:** مؤشرات تحميل احترافية
- **Netlify Forms:** نماذج اتصال متقدمة مع معالجة آمنة
- **Responsive Design:** تصميم متجاوب يعمل على جميع الأجهزة
- **Accessibility:** دعم كامل لإمكانية الوصول

### 📊 الإحصائيات والمكونات المتقدمة
- **Statistics Component:** مكون لعرض الإحصائيات بشكل احترافي
- **Feature Cards:** بطاقات لعرض المميزات
- **Testimonials:** بطاقات الشهادات والآراء
- **Section Headers:** عناوين أقسام متقدمة
- **Call-to-Action:** أزرار دعوة للعمل

### 🚀 الأداء والسرعة
- **Lazy Loading:** تحميل الصور بشكل كسول
- **Code Splitting:** تقسيم الكود لتحسين الأداء
- **Optimized Assets:** تحسين الموارد والملفات
- **CDN Integration:** دعم CDN لتسريع التحميل

## 🛠️ التقنيات المستخدمة

- **React 18:** مكتبة React الحديثة
- **TypeScript:** لغة TypeScript للأمان النوعي
- **Tailwind CSS:** إطار عمل CSS للتصميم
- **Vite:** أداة بناء سريعة وحديثة
- **Framer Motion:** مكتبة الحركات والأنيميشن
- **React Router:** توجيه متقدم
- **Radix UI:** مكونات واجهة المستخدم الأساسية
- **Lucide React:** أيقونات عالية الجودة

## 📦 المتطلبات

- Node.js 22.13.0 أو أحدث
- pnpm 10.30.2 أو أحدث

## 🚀 البدء السريع

### 1. تثبيت المتطلبات
```bash
pnpm install
```

### 2. تشغيل خادم التطوير
```bash
pnpm run dev
```

الموقع سيكون متاحاً على `http://localhost:5173`

### 3. بناء للإنتاج
```bash
pnpm run build
```

### 4. معاينة الإنتاج
```bash
pnpm run preview
```

## 📁 هيكل المشروع

```
src/
├── components/
│   ├── common/           # المكونات المشتركة
│   │   ├── PageMeta.tsx  # إدارة Meta Tags
│   │   ├── AnimatedSection.tsx
│   │   ├── FadeInOnScroll.tsx
│   │   ├── HoverScale.tsx
│   │   ├── StaggerContainer.tsx
│   │   ├── SkeletonLoader.tsx
│   │   ├── Statistics.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── SectionHeader.tsx
│   │   └── CallToAction.tsx
│   ├── ui/              # مكونات Radix UI
│   └── HeroBackground.tsx
├── pages/               # صفحات التطبيق
│   ├── Home.tsx
│   ├── Contact.tsx
│   ├── Projects.tsx
│   ├── Services.tsx
│   ├── Dashboard.tsx
│   ├── News.tsx
│   ├── FutureVision.tsx
│   ├── SmartInitiatives.tsx
│   └── IPRights.tsx
├── contexts/            # React Contexts
├── hooks/               # Custom Hooks
├── lib/                 # مكتبات مساعدة
├── types/               # أنواع TypeScript
├── App.tsx
├── main.tsx
└── index.css

public/
├── robots.txt           # ملف robots.txt للـ SEO
├── sitemap.xml          # ملف sitemap.xml
└── favicon.png

netlify.toml            # إعدادات Netlify
index.html              # ملف HTML الرئيسي
```

## 🔧 الإعدادات المهمة

### إعدادات SEO

تم تحسين الموقع لـ SEO من خلال:
- إضافة Meta Tags متقدمة في `index.html`
- استخدام `PageMeta` component لإدارة Meta Tags الديناميكية
- إضافة `robots.txt` و `sitemap.xml`
- دعم Schema.org JSON-LD

### إعدادات Netlify Forms

تم تفعيل Netlify Forms في صفحة Contact مع:
- نموذج آمن مع Honeypot
- معالجة آمنة للبيانات
- إعادة توجيه بعد الإرسال

### إعدادات الأداء

- Lazy loading للصور
- Code splitting تلقائي
- Preload للموارد الحرجة
- DNS prefetch للنطاقات الخارجية

## 📝 ملفات SEO المهمة

### robots.txt
يتحكم في كيفية زحف محركات البحث للموقع

### sitemap.xml
يحتوي على قائمة بجميع صفحات الموقع لتسهيل الفهرسة

### Meta Tags
تم إضافة Meta Tags شاملة في `index.html`:
- Open Graph Tags
- Twitter Card Tags
- Schema.org JSON-LD
- Apple Mobile Web App Tags

## 🌐 النشر على Netlify

### خطوات النشر:

1. **ربط المستودع:**
   - اذهب إلى [Netlify](https://netlify.com)
   - انقر على "New site from Git"
   - اختر GitHub وحدد المستودع

2. **إعدادات البناء:**
   - Build command: `pnpm run build`
   - Publish directory: `dist`

3. **متغيرات البيئة:**
   - أضف أي متغيرات بيئة مطلوبة

4. **تفعيل Forms:**
   - تم تفعيل Netlify Forms تلقائياً
   - سيتم استقبال الرسائل في لوحة تحكم Netlify

## 📊 المكونات المتاحة

### Statistics Component
```tsx
import { Statistics } from '@/components/common';

<Statistics
  items={[
    { label: 'الاستثمارات', value: '100+', icon: TrendingUp }
  ]}
  columns={4}
/>
```

### FeatureCard Component
```tsx
import { FeatureCard } from '@/components/common';

<FeatureCard
  icon={Zap}
  title="الميزة"
  description="وصف الميزة"
  details={['التفصيل 1', 'التفصيل 2']}
/>
```

### AnimatedSection Component
```tsx
import { AnimatedSection } from '@/components/common';

<AnimatedSection direction="up" delay={0.2}>
  محتوى مع أنيميشن
</AnimatedSection>
```

## 🔐 الأمان

تم تطبيق إجراءات أمان متقدمة:
- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- Strict-Transport-Security
- Referrer-Policy

## 📱 الاستجابة (Responsive)

الموقع متجاوب تماماً ويعمل على:
- الهواتف الذكية (Mobile)
- الأجهزة اللوحية (Tablet)
- أجهزة سطح المكتب (Desktop)

## 🎨 التخصيص

### تغيير الألوان الأساسية
عدّل متغيرات CSS في `src/index.css`

### تغيير الخطوط
عدّل الخطوط في `index.html`

## 🐛 استكشاف الأخطاء

### المشكلة: الأنيميشن لا تعمل
- تأكد من تثبيت `motion` package
- تحقق من استيراد `motion/react` بشكل صحيح

### المشكلة: Netlify Forms لا تعمل
- تأكد من وجود `netlify.toml` في الجذر
- تحقق من أن اسم النموذج يطابق `name` attribute

### المشكلة: الصور لا تظهر
- تحقق من رابط الصورة
- تأكد من أن الصورة متاحة على CDN

## 📞 الدعم والتواصل

للمزيد من المعلومات أو الدعم:
- البريد الإلكتروني: info@ammansmart.com
- الموقع: www.ammansmart.com

## 📄 الترخيص

هذا المشروع مرخص تحت MIT License

---

**آخر تحديث:** مارس 2026
