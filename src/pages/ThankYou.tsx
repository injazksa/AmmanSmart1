import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageMeta from '@/components/common/PageMeta';
import { CheckCircle2 } from 'lucide-react';

const ThankYou: React.FC = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, [navigate]);

  return (
    <>
      <PageMeta 
        title="شكراً لك | عمان الذكية"
        description="شكراً لتواصلك مع منصة عمان الذكية. تم استلام رسالتك بنجاح وسنقوم بالرد عليك قريباً."
        robots="noindex, follow"
      />
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4 overflow-hidden">
        {/* Background Overlay - similar to HeroBackground */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/background/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll',
            filter: 'blur(8px) brightness(0.6)', // Glassmorphism effect
            transform: 'scale(1.05)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/60" />
        <div className="absolute inset-0 bg-blue-900/15 mix-blend-overlay" />

        <div className="relative z-10 flex flex-col items-center justify-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 animate-fade-in-up">
          <CheckCircle2 className="h-24 w-24 text-green-400 mb-6 animate-bounce-in" />
          <h1 className="text-5xl font-extrabold mb-4 text-green-300 text-center">تم الاستلام بنجاح!</h1>
          <p className="text-xl text-center mb-8 max-w-md leading-relaxed">
            رسالتك في طريقها إلى مركز العمليات الذكي. فريقنا يعالج طلبك الآن وسنرد عليك في أسرع وقت ممكن.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            سيتم تحويلك إلى الصفحة الرئيسية خلال <span className="font-bold text-blue-400 text-2xl">{countdown}</span> ثوانٍ...
          </p>
          <Button
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            العودة إلى الصفحة الرئيسية الآن
          </Button>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        @keyframes bounce-in {
          0% { transform: scale(0); opacity: 0; }
          60% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); }
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default ThankYou;
