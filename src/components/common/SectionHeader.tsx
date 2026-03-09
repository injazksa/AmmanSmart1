import React from 'react';
import { LucideIcon } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface SectionHeaderProps {
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
  description?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon: Icon,
  title,
  subtitle,
  description,
  alignment = 'center',
  className = '',
}) => {
  const alignmentClass = {
    left: 'text-right',
    center: 'text-center',
    right: 'text-left',
  };

  return (
    <AnimatedSection direction="down" className={`space-y-4 ${alignmentClass[alignment]} ${className}`}>
      {Icon && (
        <div className={`flex ${alignment === 'center' ? 'justify-center' : alignment === 'left' ? 'justify-end' : 'justify-start'}`}>
          <div className="rounded-2xl bg-primary/10 p-3 text-primary">
            <Icon className="h-8 w-8" />
          </div>
        </div>
      )}

      <div className="space-y-2">
        {subtitle && (
          <p className="text-sm font-bold text-primary uppercase tracking-wider">
            {subtitle}
          </p>
        )}
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">{title}</h2>
        {description && (
          <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      <div className={`h-1.5 w-24 bg-primary rounded-full ${alignment === 'center' ? 'mx-auto' : alignment === 'left' ? 'ml-auto' : ''}`} />
    </AnimatedSection>
  );
};

export default SectionHeader;
