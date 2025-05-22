import { useState, useEffect, useCallback } from 'react';

export interface PresentationHook {
  currentSlide: number;
  totalSlides: number;
  goToSlide: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  toggleFullscreen: () => void;
  downloadPresentation: () => void;
  isFullscreen: boolean;
}

export function usePresentation(totalSlides: number = 6): PresentationHook {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error('Error toggling fullscreen:', err);
    }
  }, []);

  const downloadPresentation = useCallback(async () => {
    try {
      const html2canvas = (await import('html2canvas')).default;
      const jsPDF = (await import('jspdf')).jsPDF;
      
      const presentationElement = document.querySelector('.presentation-container');
      if (!presentationElement) return;

      // Hide navigation controls during capture
      const controls = document.querySelectorAll('.fixed');
      controls.forEach(el => (el as HTMLElement).style.display = 'none');

      const pdf = new jsPDF('l', 'mm', 'a4'); // landscape orientation
      const imgWidth = 297; // A4 width in mm (landscape)
      const currentSlideIndex = currentSlide;

      // Capture all slides
      for (let i = 0; i < totalSlides; i++) {
        // Navigate to slide i
        setCurrentSlide(i);
        
        // Wait for slide transition
        await new Promise(resolve => setTimeout(resolve, 600));

        const canvas = await html2canvas(presentationElement as HTMLElement, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff'
        });

        const imgData = canvas.toDataURL('image/png');
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        if (i > 0) {
          pdf.addPage('a4', 'l');
        }
        
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      }

      // Restore navigation controls and original slide
      controls.forEach(el => (el as HTMLElement).style.display = '');
      setCurrentSlide(currentSlideIndex);

      pdf.save('Totem-Selfie-Photobooth-Presentazione-Completa.pdf');
      
    } catch (error) {
      console.error('Errore durante il download del PDF:', error);
      alert('Si è verificato un errore durante il download. Riprova più tardi.');
    }
  }, [currentSlide, totalSlides]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(totalSlides - 1);
          break;
        case 'F11':
          e.preventDefault();
          toggleFullscreen();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, totalSlides, toggleFullscreen]);

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Handle touch/swipe for mobile
  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!startX || !startY) return;

      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;

      const diffX = startX - endX;
      const diffY = startY - endY;

      // Ignore vertical swipes
      if (Math.abs(diffY) > Math.abs(diffX)) return;

      // Minimum swipe distance
      if (Math.abs(diffX) < 50) return;

      if (diffX > 0) {
        nextSlide(); // Swipe left - next slide
      } else {
        prevSlide(); // Swipe right - previous slide
      }

      startX = 0;
      startY = 0;
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

  return {
    currentSlide,
    totalSlides,
    goToSlide,
    nextSlide,
    prevSlide,
    toggleFullscreen,
    downloadPresentation,
    isFullscreen,
  };
}
