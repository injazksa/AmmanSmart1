import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import HoverScale from './HoverScale';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  rating?: number;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  avatar,
  rating = 5,
  className = '',
}) => {
  return (
    <HoverScale scale={1.02}>
      <Card className={`border-none shadow-xl bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all rounded-2xl ${className}`}>
        <CardContent className="p-8 space-y-4">
          {/* Rating Stars */}
          {rating > 0 && (
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
          )}

          {/* Quote */}
          <p className="text-lg font-medium text-foreground leading-relaxed">
            "{quote}"
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-4 pt-4 border-t">
            {avatar && (
              <img
                src={avatar}
                alt={author}
                className="h-12 w-12 rounded-full object-cover"
              />
            )}
            <div>
              <p className="font-bold text-foreground">{author}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </HoverScale>
  );
};

export default TestimonialCard;
