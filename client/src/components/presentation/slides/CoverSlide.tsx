import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import logoPath from '@assets/LOGO-MELTIN.png';

export default function CoverSlide() {
  return (
    <div className="flex items-center justify-center min-h-screen md:h-full w-full relative py-8 md:py-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-white via-rose-antique/20 to-elegant-gold/30"></div>
      
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
        alt="Elegant wedding reception with modern photobooth"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo aziendale centrato sopra il titolo */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img 
              src={logoPath} 
              alt="Melt in Touch - Innovative Digital Solutions" 
              className="h-12 md:h-16 mx-auto object-contain mb-2"
            />
            <p className="text-sm md:text-base text-charcoal/70 font-medium">Innovative Digital Solutions</p>
          </motion.div>

          <h1 className="font-playfair text-4xl md:text-6xl lg:text-8xl font-bold text-charcoal mb-4 md:mb-6 leading-tight">
            Totem Selfie
            <span className="block font-dancing text-elegant-gold text-3xl md:text-5xl lg:text-7xl mt-2">
              Photobooth
            </span>
          </h1>
          
          <h2 className="font-playfair text-xl md:text-3xl lg:text-4xl text-charcoal mb-6 md:mb-8 font-semibold">
            Il Ricordo Perfetto per Ogni Matrimonio
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl text-charcoal/80 font-light leading-relaxed max-w-3xl mx-auto">
            Un'esperienza fotografica elegante, divertente e gratuita per gli ospiti…
            e un servizio esclusivo per la tua villa.
          </p>
          
          <motion.div
            className="mt-12"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Camera className="text-elegant-gold mx-auto" size={48} />
          </motion.div>
        </motion.div>


      </div>
    </div>
  );
}
