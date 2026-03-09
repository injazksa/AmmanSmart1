import React, { useEffect, useState } from 'react';
import { 
  Zap, 
  Network, 
  Building2, 
  Wifi, 
  Smartphone, 
  Cloud, 
  Cpu,
  Globe
} from 'lucide-react';

interface FloatingIcon {
  id: number;
  Icon: React.ComponentType<any>;
  left: number;
  top: number;
  duration: number;
  delay: number;
  size: number;
}

export const HeroBackground = ({ children }: { children: React.ReactNode }) => {
  const [floatingIcons, setFloatingIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    const icons = [
      { Icon: Zap, size: 24 },
      { Icon: Network, size: 28 },
      { Icon: Building2, size: 26 },
      { Icon: Wifi, size: 22 },
      { Icon: Smartphone, size: 24 },
      { Icon: Cloud, size: 26 },
      { Icon: Cpu, size: 24 },
      { Icon: Globe, size: 28 },
    ];

    const generatedIcons: FloatingIcon[] = icons.map((item, index) => ({
      id: index,
      Icon: item.Icon,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 8 + Math.random() * 8,
      delay: Math.random() * 2,
      size: item.size,
    }));

    setFloatingIcons(generatedIcons);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Video Background - Optimized for Netlify and Responsivity */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          poster="/images/background/hero-bg.jpg"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          {/* Fallback to image if video fails to load */}
          <img 
            src="/images/background/hero-bg.jpg" 
            alt="Amman Smart City Background" 
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Advanced Overlay for better readability and depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
      <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Icons with Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item) => (
          <div
            key={item.id}
            className="absolute text-blue-400/30 animate-pulse"
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
              animation: `float ${item.duration}s ease-in-out ${item.delay}s infinite`,
            }}
          >
            <item.Icon size={item.size} strokeWidth={1} />
          </div>
        ))}
      </div>

      {/* Glow Effects for Futuristic Look */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center pt-20 pb-12 px-4">
        <div className="w-full max-w-7xl mx-auto">
          {children}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-15px) translateX(10px); }
          50% { transform: translateY(-30px) translateX(-10px); }
          75% { transform: translateY(-15px) translateX(10px); }
        }
      `}</style>
    </div>
  );
};
