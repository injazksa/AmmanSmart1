import React from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from './AppSidebar';
import { Header } from './Header';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background" dir="rtl">
        <AppSidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
            <div className="mx-auto max-w-7xl">
              {!isHome && (
                <div className="mb-6">
                  <Button 
                    variant="ghost" 
                    className="gap-2 px-0 hover:bg-transparent hover:text-primary transition-colors group"
                    onClick={() => navigate(-1)}
                  >
                    <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    <span className="text-lg font-bold">الرجوع</span>
                  </Button>
                </div>
              )}
              {children}
            </div>
          </main>
          <footer className="border-t py-6 text-center text-xs text-muted-foreground bg-muted/30">
            <div className="space-y-2">
              <p>© 2026 منصة عمّان الذكية - جميع الحقوق محفوظة</p>
              <p className="text-xs opacity-75">جميع التصاميم والأفكار والمحتوى الفكري محفوظة لـ <strong>AmmanSmart.com</strong>. يُمنع استخدام أو نسخ أي جزء من الموقع دون إذن كتابي صريح من المالك.</p>
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
};
