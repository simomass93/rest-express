import { motion } from 'framer-motion';
import { Palette, Calendar, Images, Wand2, Printer } from 'lucide-react';

export default function CustomizationSlide() {
  return (
    <div className="flex items-center justify-center h-full w-full relative">
      <div className="absolute inset-0 bg-gradient-to-r from-warm-white to-white"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 items-center">
        <motion.div
          className="relative order-2 lg:order-1"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
            alt="Elegant wedding photo frames and custom printed memories being held by hands"
            className="rounded-2xl shadow-2xl w-full h-auto"
          />

          <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-3">
            <Wand2 className="text-elegant-gold text-2xl" />
          </div>
        </motion.div>

        <motion.div
          className="space-y-8 order-1 lg:order-2"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal leading-tight">
            Ogni stampa è unica come il loro{' '}
            <span className="font-dancing text-elegant-gold">amore</span>
          </h2>

          <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed">
            Il software del Totem è completamente personalizzabile per riflettere
            perfettamente lo stile e l'atmosfera del matrimonio.
          </p>

          <div className="space-y-6">
            {[
              {
                icon: Palette,
                title: 'Cornici Grafiche',
                description: 'Design in linea con lo stile e i colori del matrimonio',
                color: 'elegant-gold',
              },
              {
                icon: Calendar,
                title: 'Dettagli Personalizzati',
                description: 'Nomi degli sposi, data dell\'evento, hashtag speciali',
                color: 'rose-antique',
              },
              {
                icon: Images,
                title: 'Layout Su Misura',
                description: 'Loghi, simboli e elementi grafici scelti dagli sposi',
                color: 'elegant-gold',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`flex items-start space-x-4 bg-white rounded-lg p-4 shadow-lg border border-${feature.color}/10`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <div className={`bg-${feature.color}/10 rounded-full p-3 flex-shrink-0`}>
                  <feature.icon className={`text-${feature.color} text-xl`} />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">{feature.title}</h4>
                  <p className="text-charcoal/70">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-gradient-to-r from-elegant-gold/10 to-rose-antique/10 rounded-xl p-6 border border-elegant-gold/20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <p className="text-center text-charcoal font-medium">
              <Printer className="text-elegant-gold mr-2 inline" size={20} />
              Le foto vengono stampate all'istante, in alta qualità, come vero ricordo da portare a casa.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
