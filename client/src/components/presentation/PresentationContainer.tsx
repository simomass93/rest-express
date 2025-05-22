import { motion, AnimatePresence } from 'framer-motion';
import { usePresentation } from '@/hooks/usePresentation';
import NavigationControls from './NavigationControls';
import SlideNavigation from './SlideNavigation';
import CoverSlide from './slides/CoverSlide';
import IntroductionSlide from './slides/IntroductionSlide';
import FreeServiceSlide from './slides/FreeServiceSlide';
import CustomizationSlide from './slides/CustomizationSlide';
import DigitalExperienceSlide from './slides/DigitalExperienceSlide';
import VillaBenefitsSlide from './slides/VillaBenefitsSlide';
import ContactsSlide from './slides/ContactsSlide';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  CoverSlide,
  IntroductionSlide,
  FreeServiceSlide,
  CustomizationSlide,
  DigitalExperienceSlide,
  VillaBenefitsSlide,
  ContactsSlide,
];

export default function PresentationContainer() {
  const {
    currentSlide,
    totalSlides,
    goToSlide,
    nextSlide,
    prevSlide,
    toggleFullscreen,
    downloadPresentation,
    isFullscreen,
  } = usePresentation(slides.length);

  const CurrentSlide = slides[currentSlide];

  return (
    <div className="presentation-container min-h-screen w-full relative bg-warm-white overflow-x-hidden md:overflow-hidden md:h-screen">
      {/* Navigation Controls */}
      <NavigationControls
        onToggleFullscreen={toggleFullscreen}
        onDownload={downloadPresentation}
        isFullscreen={isFullscreen}
      />

      {/* Slide Navigation Dots */}
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onSlideChange={goToSlide}
      />

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="fixed left-2 md:left-6 top-1/2 transform -translate-y-1/2 z-50 bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-4 shadow-lg hover:bg-elegant-gold hover:text-white transition-all duration-300 h-8 w-8 md:h-12 md:w-12 opacity-60 hover:opacity-100"
      >
        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-charcoal" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="fixed right-2 md:right-6 top-1/2 transform -translate-y-1/2 z-50 bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-4 shadow-lg hover:bg-elegant-gold hover:text-white transition-all duration-300 h-8 w-8 md:h-12 md:w-12 opacity-60 hover:opacity-100"
      >
        <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-charcoal" />
      </Button>

      {/* Slides Container */}
      <div className="h-full w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-full w-full"
          >
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
