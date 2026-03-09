import React from 'react';
import { motion } from 'motion/react';

interface HoverScaleProps {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  duration?: number;
}

export const HoverScale: React.FC<HoverScaleProps> = ({
  children,
  className = '',
  scale = 1.05,
  duration = 0.3,
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
      transition={{
        duration,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
};

export default HoverScale;
