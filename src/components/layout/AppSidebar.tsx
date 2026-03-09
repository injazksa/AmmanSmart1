import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { 
  Home, 
  LayoutGrid, 
  Briefcase, 
  BarChart3, 
  Newspaper, 
  Mail, 
  Building2,
  Rocket,
  Sparkles
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { title: 'الرئيسية', icon: Home, path: '/' },
  { title: 'رؤية عمان 2030', icon: Rocket, path: '/future-vision' },
  { title: 'المبادرات الذكية', icon: Sparkles, path: '/smart-initiatives' },
  { title: 'مبادرات المدينة', icon: LayoutGrid, path: '/projects' },
  { title: 'دليل الخدمات', icon: Briefcase, path: '/services' },
  { title: 'لوحة بيانات المدينة', icon: BarChart3, path: '/dashboard' },
  { title: 'الأخبار والمستجدات', icon: Newspaper, path: '/news' },
  { title: 'تواصل معنا', icon: Mail, path: '/contact' },
];

export function AppSidebar() {
  const location = useLocation();
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar side="right">
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Building2 className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight">عمّان الذكية</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>القائمة الرئيسية</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location.pathname === item.path}
                    tooltip={item.title}
                  >
                    <Link 
                      to={item.path} 
                      className="flex items-center gap-3"
                      onClick={() => setOpenMobile(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
