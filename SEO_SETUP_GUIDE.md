# دليل إعداد SEO وجوجل سيرش كونسول

## مقدمة
هذا الدليل يشرح كيفية إعداد موقعك بشكل صحيح في جوجل سيرش كونسول (Google Search Console) وإحصائيات جوجل (Google Analytics) لضمان فهرسة سريعة وموثوقة.

---

## 1. إعداد Google Search Console

### الخطوة 1: الوصول إلى Google Search Console
1. اذهب إلى [Google Search Console](https://search.google.com/search-console)
2. سجل الدخول بحسابك على جوجل

### الخطوة 2: إضافة الملكية (Property)
1. انقر على **"إضافة ملكية"** (Add Property)
2. اختر **"URL prefix"** وأدخل: `https://ammansmart.com`
3. انقر على **"متابعة"** (Continue)

### الخطوة 3: التحقق من الملكية
اختر إحدى طرق التحقق التالية:

#### الطريقة 1: وسم Meta (الأسهل)
1. انسخ كود التحقق المقدم
2. افتح ملف `index.html` في المشروع
3. ابحث عن السطر:
   ```html
   <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
   ```
4. استبدل `YOUR_GOOGLE_VERIFICATION_CODE` بالكود الذي نسخته
5. احفظ الملف وادفعه إلى GitHub
6. عد إلى Google Search Console وانقر على **"تحقق"** (Verify)

#### الطريقة 2: ملف HTML
1. حمّل ملف التحقق المقدم
2. ضعه في مجلد `public/`
3. ادفعه إلى GitHub
4. عد إلى Google Search Console وانقر على **"تحقق"** (Verify)

### الخطوة 4: إرسال Sitemap
1. بعد التحقق، انتقل إلى **"Sitemaps"** في القائمة اليسرى
2. انقر على **"إضافة/اختبار sitemap"** (Add/test sitemap)
3. أدخل: `sitemap.xml`
4. انقر على **"إرسال"** (Submit)

### الخطوة 5: فحص robots.txt
1. انتقل إلى **"اختبار robots.txt"** (Test robots.txt)
2. تأكد من أن الملف يسمح بالزحف (Crawl) لجميع الصفحات المهمة

---

## 2. إعداد Google Analytics 4

### الخطوة 1: إنشاء حساب Google Analytics
1. اذهب إلى [Google Analytics](https://analytics.google.com)
2. انقر على **"البدء الآن"** (Get Started)
3. اتبع الخطوات لإنشاء حساب جديد

### الخطوة 2: إنشاء ملكية (Property)
1. اختر **"Google Analytics 4"** كنوع الملكية
2. أدخل اسم الملكية: `Amman Smart Website`
3. اختر المنطقة الزمنية: `Asia/Amman`
4. اختر العملة: `JOD` (دينار أردني)

### الخطوة 3: الحصول على معرّف القياس (Measurement ID)
1. بعد إنشاء الملكية، انتقل إلى **"إعدادات البيانات"** (Data Settings)
2. انسخ **معرّف القياس** (Measurement ID) - يبدأ بـ `G-`

### الخطوة 4: تثبيت Google Analytics في الموقع
1. افتح ملف `index.html`
2. ابحث عن السطر:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_GOOGLE_ANALYTICS_ID"></script>
   ```
3. استبدل `G-YOUR_GOOGLE_ANALYTICS_ID` بمعرّف القياس الذي نسخته
4. افتح السطر التالي:
   ```javascript
   gtag('config', 'G-YOUR_GOOGLE_ANALYTICS_ID', {
   ```
5. استبدل `G-YOUR_GOOGLE_ANALYTICS_ID` بنفس المعرّف
6. احفظ الملف وادفعه إلى GitHub

### الخطوة 5: التحقق من التثبيت
1. انتظر بضع دقائق
2. عد إلى Google Analytics
3. انتقل إلى **"تقارير"** (Reports)
4. تحقق من أن البيانات تبدأ بالظهور

---

## 3. إعداد Google Tag Manager (اختياري)

### الخطوة 1: إنشاء حساب GTM
1. اذهب إلى [Google Tag Manager](https://tagmanager.google.com)
2. انقر على **"إنشاء حساب"** (Create Account)
3. أدخل اسم الحساب: `Amman Smart`
4. اختر **"ويب"** (Web) كنوع الحاوية

### الخطوة 2: الحصول على معرّف الحاوية
1. بعد الإنشاء، انسخ معرّف الحاوية (Container ID) - يبدأ بـ `GTM-`

### الخطوة 3: تثبيت GTM في الموقع
1. افتح ملف `index.html`
2. ابحث عن السطر:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-YOUR_GTM_ID"></script>
   ```
3. استبدل `GTM-YOUR_GTM_ID` بمعرّف الحاوية الذي نسخته
4. ابحث عن السطر:
   ```html
   <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-YOUR_GTM_ID"
   ```
5. استبدل `GTM-YOUR_GTM_ID` بنفس المعرّف
6. احفظ الملف وادفعه إلى GitHub

---

## 4. الملفات المهمة للفهرسة

### sitemap.xml
- **الموقع**: `/public/sitemap.xml`
- **الوظيفة**: توفير قائمة بجميع صفحات الموقع لمحركات البحث
- **التحديث**: يتم تحديثه تلقائياً عند كل نشر

### robots.txt
- **الموقع**: `/public/robots.txt`
- **الوظيفة**: توجيه محركات البحث حول أي صفحات يجب فهرستها
- **القواعس الحالية**:
  - السماح بفهرسة جميع الصفحات العامة
  - منع فهرسة صفحات الإدارة والملفات الخاصة
  - تحديد معدل الزحف (Crawl Rate) لكل محرك بحث

### index.html - وسوم الميتا
- **الوسوم المهمة**:
  - `<meta name="description">` - وصف الصفحة
  - `<meta name="keywords">` - الكلمات المفتاحية
  - `<meta property="og:*">` - معلومات Open Graph
  - `<meta name="twitter:*">` - معلومات تويتر
  - `<link rel="canonical">` - الرابط الأساسي

---

## 5. Schema.org Markup

تم إضافة ثلاثة أنواع من Schema markup في الموقع:

### 1. Organization Schema
- يخبر جوجل عن معلومات المنظمة
- يتضمن: الاسم، الشعار، معلومات الاتصال، العنوان

### 2. LocalBusiness Schema
- يخبر جوجل أن هذا عمل محلي
- يتضمن: الهاتف، البريد الإلكتروني، العنوان

### 3. WebSite Schema
- يخبر جوجل عن وظائف الموقع
- يتضمن: إمكانية البحث

---

## 6. نصائح لتحسين الفهرسة

### أ) تحديث المحتوى بانتظام
- أضف محتوى جديد بشكل منتظم
- حدّث الصفحات الموجودة
- أرسل Sitemap جديد بعد كل تحديث

### ب) تحسين الأداء
- تأكد من سرعة تحميل الموقع
- استخدم صور مضغوطة
- استخدم CDN للملفات الثابتة

### ج) الأمان
- استخدم HTTPS (موقعك يستخدمه بالفعل)
- حدّث شهادة SSL بانتظام
- استخدم رؤوس الأمان (Security Headers)

### د) الجوال
- تأكد من أن الموقع متجاوب (Responsive)
- اختبر الموقع على أجهزة مختلفة
- استخدم Google Mobile-Friendly Test

---

## 7. اختبار وتحقق

### اختبار Sitemap
```
https://ammansmart.com/sitemap.xml
```

### اختبار robots.txt
```
https://ammansmart.com/robots.txt
```

### اختبار الهاتف المحمول
استخدم [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### اختبار الأداء
استخدم [Google PageSpeed Insights](https://pagespeed.web.dev)

### اختبار Rich Results
استخدم [Rich Results Test](https://search.google.com/test/rich-results)

---

## 8. المراجع والموارد

- [Google Search Console Help](https://support.google.com/webmasters)
- [Google Analytics Help](https://support.google.com/analytics)
- [Google Tag Manager Help](https://support.google.com/tagmanager)
- [Schema.org Documentation](https://schema.org)
- [SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)

---

## 9. الخطوات التالية

بعد إكمال هذا الإعداد:

1. **راقب الأداء**: تحقق من Google Search Console و Analytics بانتظام
2. **حسّن المحتوى**: استخدم البيانات لتحسين محتوى الموقع
3. **أضف محتوى جديد**: أضف مقالات وصفحات جديدة بانتظام
4. **بناء الروابط**: احصل على روابط من مواقع موثوقة
5. **تحسين التجربة**: حسّن سرعة التحميل والتصميم

---

**ملاحظة مهمة**: قد يستغرق جوجل من 2-4 أسابيع لفهرسة الموقع بالكامل. لا تقلق إذا لم تر النتائج فوراً.
