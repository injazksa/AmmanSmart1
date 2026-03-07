import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import HoverScale from './HoverScale';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details?: string[];
  className?: string;
  badge?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  details,
  className = '',
  badge,
}) => {
  return (
    <HoverScale scale={1.02}>
      <Card className={`border-none shadow-xl bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all rounded-2xl overflow-hidden ${className}`}>
        {badge && (
          <div className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
            {badge}
          </div>
        )}
        <CardHeader className="p-8">
          <div className="mb-4 rounded-2xl bg-primary/10 p-4 w-fit text-primary">
            <Icon className="h-8 w-8" />
          </div>
          <CardTitle className="text-2xl font-extrabold mb-2">{title}</CardTitle>
          <CardDescription className="text-base font-medium">{description}</CardDescription>
        </CardHeader>
        {details && details.length > 0 && (
          <CardContent className="px-8 pb-8">
            <ul className="space-y-2">
              {details.map((detail, index) => (
                <li key={index} className="flex items-start gap-3 text-sm font-medium text-muted-foreground">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        )}
      </Card>
    </HoverScale>
  );
};

export default FeatureCard;
