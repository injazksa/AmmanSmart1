import React from 'react';

interface SkeletonLoaderProps {
  count?: number;
  type?: 'card' | 'text' | 'image' | 'avatar';
  className?: string;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  count = 1,
  type = 'card',
  className = '',
}) => {
  const getSkeletonContent = () => {
    switch (type) {
      case 'card':
        return (
          <div className={`bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-lg p-6 space-y-4 ${className}`}>
            <div className="h-6 bg-slate-300 dark:bg-slate-600 rounded w-3/4" />
            <div className="space-y-2">
              <div className="h-4 bg-slate-300 dark:bg-slate-600 rounded" />
              <div className="h-4 bg-slate-300 dark:bg-slate-600 rounded w-5/6" />
            </div>
            <div className="h-10 bg-slate-300 dark:bg-slate-600 rounded w-1/3" />
          </div>
        );
      case 'text':
        return (
          <div className={`space-y-2 ${className}`}>
            <div className="h-4 bg-slate-300 dark:bg-slate-600 rounded" />
            <div className="h-4 bg-slate-300 dark:bg-slate-600 rounded w-5/6" />
            <div className="h-4 bg-slate-300 dark:bg-slate-600 rounded w-4/6" />
          </div>
        );
      case 'image':
        return (
          <div className={`bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-lg aspect-video ${className}`} />
        );
      case 'avatar':
        return (
          <div className={`bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-full w-12 h-12 ${className}`} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4 animate-pulse">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i}>
          {getSkeletonContent()}
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
