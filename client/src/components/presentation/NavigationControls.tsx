import { Button } from '@/components/ui/button';
import { Maximize, Download, Minimize } from 'lucide-react';

interface NavigationControlsProps {
  onToggleFullscreen: () => void;
  onDownload: () => void;
  isFullscreen: boolean;
}

export default function NavigationControls({
  onToggleFullscreen,
  onDownload,
  isFullscreen,
}: NavigationControlsProps) {
  return (
    <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
      <Button
        variant="ghost"
        size="icon"
        onClick={onToggleFullscreen}
        className="bg-white/80 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg hover:bg-elegant-gold hover:text-white transition-all duration-300"
      >
        {isFullscreen ? (
          <Minimize className="h-4 w-4 md:h-5 md:w-5 text-charcoal" />
        ) : (
          <Maximize className="h-4 w-4 md:h-5 md:w-5 text-charcoal" />
        )}
      </Button>
    </div>
  );
}
