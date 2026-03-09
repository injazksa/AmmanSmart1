import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import HoverScale from './HoverScale';
import FadeInOnScroll from './FadeInOnScroll';

interface StatisticItem {
  label: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  trend?: 'up' | 'down' | 'stable';
  trendValue?: string;
}

interface StatisticsProps {
  items: StatisticItem[];
  className?: string;
  columns?: 2 | 3 | 4;
}

export const Statistics: React.FC<StatisticsProps> = ({
  items,
  className = '',
  columns = 4,
}) => {
  const gridClass = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
  };

  const getTrendIcon = (trend?: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return '📈';
      case 'down':
        return '📉';
      case 'stable':
        return '➡️';
      default:
        return '';
    }
  };

  return (
    <div className={`grid gap-4 md:gap-8 ${gridClass[columns]} ${className}`}>
      {items.map((stat, index) => (
        <FadeInOnScroll key={index} delay={index * 0.1}>
          <HoverScale scale={1.05}>
            <Card className="border-none shadow-xl bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all">
              <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                <div className="mb-4 rounded-2xl bg-primary/10 p-4 text-primary">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-base font-bold text-muted-foreground mb-2">{stat.label}</div>
                {stat.description && (
                  <p className="text-sm text-muted-foreground font-medium">{stat.description}</p>
                )}
                {stat.trend && (
                  <div className="mt-3 flex items-center gap-1 text-sm font-semibold">
                    <span>{getTrendIcon(stat.trend)}</span>
                    <span className={stat.trend === 'up' ? 'text-green-600' : stat.trend === 'down' ? 'text-red-600' : 'text-blue-600'}>
                      {stat.trendValue}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </HoverScale>
        </FadeInOnScroll>
      ))}
    </div>
  );
};

export default Statistics;
