import { Button } from '@/components/ui/button';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onSlideChange: (index: number) => void;
}

export default function SlideNavigation({
  currentSlide,
  totalSlides,
  onSlideChange,
}: SlideNavigationProps) {
  return (
    <div className="fixed bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex space-x-2 md:space-x-3">
      {Array.from({ length: totalSlides }, (_, index) => (
        <Button
          key={index}
          variant="ghost"
          size="sm"
          onClick={() => onSlideChange(index)}
          className={`w-2 h-2 md:w-3 md:h-3 rounded-full p-0 transition-all duration-300 hover:bg-elegant-gold ${
            index === currentSlide
              ? 'bg-elegant-gold scale-125'
              : 'bg-white/60'
          }`}
        />
      ))}
    </div>
  );
}
