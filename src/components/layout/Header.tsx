import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Bell, User, Globe, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';

export function Header() {
  const { setTheme, theme } = useTheme();

  const handleSoon = (feature: string) => {
    toast.info(`ميزة ${feature} ستكون متاحة قريباً ضمن رؤية عمان 2030`, {
      description: "نحن نعمل على تطوير تجربة رقمية استثنائية تليق بمستقبل عمان.",
      duration: 4000,
    });
  };

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur-md">
      {/* Strategic Acquisition Banner */}
      <div className="bg-primary/10 py-2 px-4 border-b border-primary/20">
        <div className="mx-auto max-w-7xl flex items-center justify-center gap-3 text-sm font-bold text-primary">
          <Sparkles className="h-4 w-4 animate-pulse" />
          <span>AmmanSmart.com: فرصة استراتيجية للاستحواذ الرقمي ضمن رؤية التحول الذكي.</span>
          <Link to="/contact" className="underline underline-offset-4 hover:text-primary/80 transition-colors">
            تواصل لمناقشة الفرص
          </Link>
        </div>
      </div>
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="h-9 w-9" />
          <div className="hidden items-center gap-2 md:flex">
            <h1 className="text-xl font-bold text-primary">منصة عمّان الذكية</h1>
            <span className="mx-2 h-4 w-px bg-border" />
            <p className="text-sm font-medium text-muted-foreground">رؤية لمستقبل حضري مستدام</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-9 w-9"
            onClick={() => handleSoon("التنبيهات والاشعارات الذكية")}
          >
            <Bell className="h-5 w-5 text-muted-foreground" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-muted-foreground" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-muted-foreground" />
            <span className="sr-only">تبديل السمة</span>
          </Button>

          <Button 
            variant="outline" 
            size="sm" 
            className="hidden gap-2 md:flex"
            onClick={() => handleSoon("تسجيل الدخول الموحد")}
          >
            <User className="h-4 w-4" />
            <span>تسجيل الدخول</span>
          </Button>

          <Button 
            variant="ghost" 
            size="icon" 
            className="h-9 w-9"
            onClick={() => handleSoon("تغيير اللغة")}
          >
            <Globe className="h-5 w-5 text-muted-foreground" />
          </Button>
        </div>
      </div>
    </header>
  );
}
