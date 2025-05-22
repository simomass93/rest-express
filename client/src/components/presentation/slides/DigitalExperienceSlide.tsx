import { motion } from 'framer-motion';
import { Mail, Images, Share2, QrCode, Wifi } from 'lucide-react';

export default function DigitalExperienceSlide() {
  return (
    <div className="flex items-center justify-center h-full w-full relative">
      <div className="absolute inset-0 bg-gradient-to-bl from-white via-elegant-gold/5 to-rose-antique/10"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Foto <span className="text-elegant-gold">cartacea</span> e{' '}
            <span className="text-rose-antique">digitale</span> in un click
          </h2>
          <p className="text-xl md:text-2xl text-charcoal/80 leading-relaxed max-w-4xl mx-auto">
            Oltre alla stampa immediata, gli ospiti possono godere di un'esperienza digitale completa
            senza bisogno di scaricare app o fare registrazioni.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {[
              {
                icon: Mail,
                title: 'Invio Immediato',
                description: 'Ricevi la foto via email o scansionando un semplice QR code',
                color: 'elegant-gold',
              },
              {
                icon: Images,
                title: 'Galleria Privata',
                description: 'Accesso a una galleria online esclusiva con tutte le foto dell\'evento',
                color: 'rose-antique',
              },
              
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`bg-white rounded-2xl p-8 shadow-xl border border-${feature.color}/20`}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`bg-${feature.color}/10 rounded-full p-4`}>
                    <feature.icon className={`text-${feature.color} text-2xl`} />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-charcoal">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-charcoal/70 text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern photobooth touchscreen interface showing sharing options with smartphone displaying received photo"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />

            <motion.div
              className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <QrCode className="text-elegant-gold text-3xl" />
            </motion.div>

            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-elegant-gold to-rose-antique rounded-xl p-4 shadow-lg text-white">
              <Wifi className="text-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
