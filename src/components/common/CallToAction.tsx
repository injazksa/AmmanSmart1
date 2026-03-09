import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

interface CallToActionProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundGradient?: string;
  className?: string;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  icon: Icon,
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundGradient = 'from-primary to-cyan-600',
  className = '',
}) => {
  return (
    <AnimatedSection>
      <Card className={`bg-gradient-to-r ${backgroundGradient} text-white border-none overflow-hidden relative rounded-[2.5rem] shadow-2xl ${className}`}>
        {Icon && (
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <Icon className="w-80 h-80" />
          </div>
        )}

        <CardContent className="p-16 text-center relative z-10 max-w-3xl mx-auto space-y-8">
          <AnimatedSection direction="down">
            <div className="space-y-4">
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">{title}</h3>
              <p className="text-xl opacity-90 font-medium leading-relaxed">{description}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                className="font-extrabold h-14 px-12 text-xl rounded-2xl shadow-xl hover:bg-white hover:text-primary transition-all"
                asChild
              >
                <Link to={primaryButtonLink}>{primaryButtonText}</Link>
              </Button>

              {secondaryButtonText && secondaryButtonLink && (
                <Button
                  size="lg"
                  variant="outline"
                  className="font-extrabold h-14 px-12 text-xl rounded-2xl shadow-xl bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary transition-all"
                  asChild
                >
                  <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
                </Button>
              )}
            </div>
          </AnimatedSection>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};

export default CallToAction;
