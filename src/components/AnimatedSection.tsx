import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: 'fade-up' | 'fade-in' | 'scale-in';
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0,
  duration = 700,
  animation = 'fade-up'
}: AnimatedSectionProps) => {
  const [ref, isVisible] = useScrollAnimation();
  const divRef = ref as React.RefObject<HTMLDivElement>;

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-${duration} ease-out`;
    const delayClass = delay > 0 ? `delay-${delay}` : '';
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return `${baseClasses} ${delayClass} opacity-0 transform translate-y-4`;
        case 'fade-in':
          return `${baseClasses} ${delayClass} opacity-0`;
        case 'scale-in':
          return `${baseClasses} ${delayClass} opacity-0 transform scale-95`;
        default:
          return `${baseClasses} ${delayClass} opacity-0 transform translate-y-4`;
      }
    }
    
    return `${baseClasses} ${delayClass} opacity-100 transform translate-y-0 scale-100`;
  };

  return (
    <div ref={divRef} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;