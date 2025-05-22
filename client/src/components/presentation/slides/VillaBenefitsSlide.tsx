import { motion } from 'framer-motion';
import { Star, Heart, Handshake, Trophy, Camera } from 'lucide-react';

export default function VillaBenefitsSlide() {
  return (
    <div className="flex items-center justify-center h-full w-full relative">
      <div className="absolute inset-0 bg-gradient-to-r from-rose-antique/10 to-elegant-gold/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Un servizio che fa la <span className="text-elegant-gold">differenza</span>
          </h2>
          <p className="text-xl md:text-2xl text-charcoal/80 leading-relaxed max-w-4xl mx-auto">
            Il Totem valorizza l'evento e fa parlare bene della tua struttura,
            creando un'esperienza memorabile per gli sposi e i loro ospiti.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            {
              icon: Star,
              title: 'Esperienza Esclusiva',
              description: 'Aggiungi un\'esperienza unica alla tua offerta matrimoniale',
              color: 'elegant-gold',
            },
            {
              icon: Heart,
              title: 'Sorprendi gli Ospiti',
              description: 'Crea momenti di gioia e divertimento che rimarranno nel cuore',
              color: 'rose-antique',
            },
            {
              icon: Handshake,
              title: 'Zero Impegni',
              description: 'Nessuna spesa, nessun impegno gestionale da parte vostra',
              color: 'elegant-gold',
            },
            {
              icon: Trophy,
              title: 'Differenziati',
              description: 'Distinguiti dalle altre location con un servizio innovativo',
              color: 'rose-antique',
            },
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-white rounded-2xl p-8 shadow-xl border border-elegant-gold/20 text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`bg-${benefit.color}/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                <benefit.icon className={`text-${benefit.color} text-2xl`} />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-charcoal mb-4">
                {benefit.title}
              </h3>
              <p className="text-charcoal/70">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400"
            alt="Elegant wedding celebration with bride, groom and guests taking photos together at photobooth"
            className="rounded-2xl shadow-2xl w-full h-64 object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-elegant-gold/20 to-rose-antique/20 rounded-2xl flex items-center justify-center">
            <div className="text-center text-white">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Camera className="text-5xl mb-4 mx-auto" />
              </motion.div>
              <p className="font-playfair text-2xl font-semibold">Momenti Indimenticabili</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
