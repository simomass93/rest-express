import { motion } from 'framer-motion';
import { Smartphone, Printer, Palette, Heart } from 'lucide-react';

export default function IntroductionSlide() {
  return (
    <div className="flex items-center justify-center min-h-screen md:h-full w-full relative py-8 md:py-0">
      <div className="absolute inset-0 bg-gradient-to-r from-white to-warm-white"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-7xl mx-auto px-4 md:px-6 items-center min-h-0">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal leading-tight">
            Un angolo speciale per{' '}
            <span className="text-elegant-gold">sorrisi autentici</span>
          </h2>

          <div className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl text-charcoal/80 leading-relaxed">
            <p>
              Il <strong className="text-elegant-gold">Totem Selfie</strong> è un photobooth digitale dal design moderno ed elegante,
              pensato per catturare i momenti più spontanei e divertenti durante matrimoni e cerimonie.
            </p>
            <p>
              Facile da usare, con touchscreen e interfaccia intuitiva, permette agli ospiti di scattare selfie in autonomia,
              scegliere grafiche personalizzate e ricevere una stampa ricordo.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            {[
              { icon: Smartphone, label: 'Touchscreen Intuitivo' },
              { icon: Printer, label: 'Stampa Istantanea' },
              { icon: Palette, label: 'Grafica Personalizzabile' },
            ].map((feature, index) => (
              <motion.div
                key={feature.label}
                className="bg-white rounded-lg p-4 shadow-lg border border-elegant-gold/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <feature.icon className="text-elegant-gold text-2xl mb-2" />
                <p className="text-sm font-medium text-charcoal">{feature.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
            alt="Wedding guests laughing and taking photos at modern photobooth with instant prints"
            className="rounded-2xl shadow-2xl w-full h-auto"
          />
          <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
            <Heart className="text-rose-antique text-3xl" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
