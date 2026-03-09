# دليل النشر والتطوير | Deployment Guide

## 🚀 نشر المشروع على GitHub

### خطوات النشر على GitHub

```bash
cd /home/ubuntu/project/AmmanSmart1-main

# إضافة الملفات للـ Git
git add .

# إنشاء Commit أول
git commit -m "Initial commit: Amman Smart Platform with SEO, Animations, and UX improvements"

# إضافة الفرع الرئيسي
git branch -M main

# إضافة الـ Remote
git remote add origin https://github.com/YOUR_USERNAME/ammansmart.git

# دفع الكود إلى GitHub
git push -u origin main
```

---

## 🌐 نشر المشروع على Netlify

### خطوات النشر على Netlify

1. **الربط مع GitHub:**
   - اذهب إلى https://netlify.com
   - انقر على "New site from Git"
   - اختر GitHub وسجل الدخول
   - اختر المستودع

2. **إعدادات البناء:**
   - Build command: `pnpm run build`
   - Publish directory: `dist`
   - Node version: 22.13.0

3. **متغيرات البيئة:**
   ```
   NODE_ENV=production
   ```

4. **تفعيل Netlify Forms:**
   - تم تفعيل Forms تلقائياً
   - سيتم استقبال الرسائل في "Forms" > "Submissions"

---

## 📊 إعدادات Google Search Console

### 1. التحقق من الملكية
- اذهب إلى https://search.google.com/search-console
- أضف الملكية باستخدام Meta tag أو DNS record

### 2. إرسال Sitemap
- في Search Console اذهب إلى "Sitemaps"
- أضف: https://ammansmart.com/sitemap.xml

### 3. مراقبة الأداء
- اذهب إلى "Performance" لمراقبة الأداء

---

## 🔐 الأمان

تم تطبيق إجراءات أمان متقدمة:
- Content Security Policy (CSP)
- X-Frame-Options
- Strict-Transport-Security
- HTTPS تلقائي من Netlify

---

## 📱 اختبار التوافقية

استخدم:
- Chrome DevTools للاختبار على أجهزة مختلفة
- Google PageSpeed Insights لقياس الأداء
- GTmetrix لاختبار السرعة

---

**آخر تحديث:** مارس 2026
