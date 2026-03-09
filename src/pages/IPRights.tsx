import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle2,
  Copyright,
  Lock,
  Eye,
  Zap
} from 'lucide-react';

export default function IPRights() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b pb-8">
        <div className="flex items-center gap-3">
          <Shield className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-extrabold tracking-tight text-primary">حقوق الملكية الفكرية</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl">
          جميع المحتوى والتصاميم والأفكار والملكية الفكرية على هذا الموقع محفوظة بموجب القانون الدولي.
        </p>
      </div>

      {/* Main Alert */}
      <Alert className="border-primary/50 bg-primary/5">
        <AlertTriangle className="h-4 w-4 text-primary" />
        <AlertDescription className="text-base">
          <strong>إشعار مهم:</strong> جميع الحقوق محفوظة لـ <strong>AmmanSmart.com</strong>. يُمنع منعاً باتاً استخدام أو نسخ أو تعديل أي محتوى من هذا الموقع دون الحصول على إذن كتابي صريح من المالك.
        </AlertDescription>
      </Alert>

      {/* Rights Overview */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-none shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Copyright className="h-6 w-6 text-primary" />
              <CardTitle>حقوق الطبع والنشر (Copyright)</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p>جميع المحتوى النصي والصور والرسومات والفيديوهات والعناصر البصرية الأخرى محفوظة بموجب قوانين حقوق الطبع والنشر الدولية.</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>المحتوى الأصلي والمكتوب</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>الصور والرسومات والتصاميم</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>الفيديوهات والعروض التقديمية</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              <CardTitle>حقوق الملكية الفكرية (IP)</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p>جميع الأفكار والمفاهيم والاستراتيجيات والحلول التقنية المستخدمة في هذا الموقع هي ملكية فكرية حصرية.</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>الأفكار والمفاهيم الأصلية</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>الحلول التقنية والبرمجية</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>الاستراتيجيات والمنهجيات</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Prohibited Actions */}
      <Card className="border-red-200 bg-red-50 border-none shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lock className="h-6 w-6 text-red-600" />
            <CardTitle className="text-red-900">الأنشطة المحظورة</CardTitle>
          </div>
          <CardDescription className="text-red-800">
            يُمنع منعاً باتاً القيام بأي من الأنشطة التالية:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-sm text-red-900">
            <li className="flex gap-3">
              <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span><strong>النسخ والتكرار:</strong> نسخ أو تكرار أي محتوى من الموقع بأي شكل من الأشكال</span>
            </li>
            <li className="flex gap-3">
              <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span><strong>التعديل والتغيير:</strong> تعديل أو تغيير أي جزء من المحتوى أو التصاميم</span>
            </li>
            <li className="flex gap-3">
              <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span><strong>إعادة النشر:</strong> إعادة نشر أو توزيع المحتوى دون إذن</span>
            </li>
            <li className="flex gap-3">
              <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span><strong>الاستخدام التجاري:</strong> استخدام أي محتوى لأغراض تجارية</span>
            </li>
            <li className="flex gap-3">
              <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span><strong>الهندسة العكسية:</strong> محاولة فهم أو استخراج الكود أو الخوارزميات</span>
            </li>
            <li className="flex gap-3">
              <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span><strong>الاستخدام غير المصرح:</strong> أي استخدام آخر غير مصرح به كتابياً</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Permitted Use */}
      <Card className="border-green-200 bg-green-50 border-none shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Eye className="h-6 w-6 text-green-600" />
            <CardTitle className="text-green-900">الاستخدام المسموح به</CardTitle>
          </div>
          <CardDescription className="text-green-800">
            يُسمح بالاستخدام الشخصي والتعليمي فقط ضمن الحدود التالية:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-sm text-green-900">
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span><strong>المشاهدة الشخصية:</strong> عرض المحتوى للاستخدام الشخصي غير التجاري</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span><strong>الأغراض التعليمية:</strong> استخدام المحتوى للأغراض التعليمية مع الإشارة للمصدر</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span><strong>المشاركة مع الإسناد:</strong> مشاركة المحتوى مع الإشارة الواضحة لـ AmmanSmart.com</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Contact for Permissions */}
      <Card className="border-none shadow-lg bg-primary/5">
        <CardHeader>
          <CardTitle>طلب الإذن أو الترخيص</CardTitle>
          <CardDescription>
            إذا كنت تريد استخدام أي محتوى من هذا الموقع لأغراض تجارية أو غير مسموح بها، يرجى التواصل معنا
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            نحن نرحب بطلبات الترخيص والاستخدام التجاري. يرجى إرسال طلبك عبر نموذج التواصل في الموقع مع تفاصيل الاستخدام المقترح.
          </p>
          <div className="bg-background p-4 rounded-lg border">
            <p className="text-sm font-semibold">للاستفسارات:</p>
            <p className="text-sm text-primary font-medium">يرجى استخدام نموذج "تواصل معنا" المتاح في الموقع.</p>
          </div>
        </CardContent>
      </Card>

      {/* Legal Notice */}
      <Alert className="border-amber-200 bg-amber-50">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertDescription className="text-sm text-amber-900">
          <strong>إشعار قانوني:</strong> يتم تطبيق قوانين الملكية الفكرية الدولية على جميع محتوى هذا الموقع. أي انتهاك لهذه الحقوق قد يؤدي إلى إجراءات قانونية. آخر تحديث: 2026
        </AlertDescription>
      </Alert>
    </div>
  );
}
