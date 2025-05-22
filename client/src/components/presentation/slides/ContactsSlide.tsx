import { motion } from 'framer-motion';
import { Phone, Mail, Globe, MapPin, Sparkles, Building2 } from 'lucide-react';
import logoPath from '@assets/LOGO-MELTIN.png';

export default function ContactsSlide() {

  return (
    <div className="flex items-center justify-center min-h-screen md:h-full w-full relative py-8 md:py-0">
      <div className="absolute inset-0 bg-gradient-to-br from-warm-white via-white to-elegant-gold/10"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4 md:mb-6">
            Vuoi vedere il Totem in <span className="text-elegant-gold">azione</span>?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-charcoal/80 leading-relaxed max-w-4xl mx-auto">
            Contattaci per una dimostrazione dal vivo nella tua location.
            Siamo pronti a offrirti un servizio chiavi in mano, senza costi e con grande valore aggiunto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-elegant-gold/20">
              {/* Logo aziendale */}
              <div className="text-center mb-6 md:mb-8">
                <img 
                  src={logoPath} 
                  alt="Melt in Touch - Innovative Digital Solutions" 
                  className="h-12 md:h-16 mx-auto mb-3 md:mb-4 object-contain"
                />
                <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-charcoal">
                  <span className="text-elegant-gold">Melt in Touch</span> srl
                </h3>
                <p className="text-xs md:text-sm text-charcoal/60 mt-1 md:mt-2">Innovative Digital Solutions</p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Building2,
                    label: 'Azienda',
                    value: 'Melt in Touch srl',
                    color: 'elegant-gold',
                  },
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'info@totemtouchscreen.it',
                    color: 'rose-antique',
                  },
                  {
                    icon: Phone,
                    label: 'Telefono',
                    value: '+39.06.32110721',
                    color: 'elegant-gold',
                  },
                  {
                    icon: MapPin,
                    label: 'Servizio',
                    value: 'Disponibili in tutta Italia',
                    color: 'rose-antique',
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    className={`flex items-center space-x-4 p-4 bg-${contact.color}/5 rounded-lg hover:bg-${contact.color}/10 transition-colors duration-300`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <div className={`bg-${contact.color}/20 rounded-full p-3 flex-shrink-0`}>
                      <contact.icon className={`text-${contact.color} text-xl`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-charcoal/60">{contact.label}</p>
                      <p className="font-semibold text-charcoal text-lg break-words">{contact.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 p-4 bg-gradient-to-r from-elegant-gold/10 to-rose-antique/10 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <p className="text-charcoal font-medium">
                  Contattaci per una <span className="text-elegant-gold">dimostrazione gratuita</span> del Totem Selfie
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <img
              src="https://images.unsplash.com/photo-1556125574-d7f27ec36a06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern illuminated photobooth device with elegant branding and company logo display"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent rounded-2xl flex items-end justify-center pb-8">
              <div className="text-center text-white">
                <p className="font-dancing text-3xl mb-2">Totem Selfie</p>
                <p className="font-inter text-sm opacity-90">Il ricordo perfetto per ogni matrimonio</p>
              </div>
            </div>

            <motion.div
              className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="text-elegant-gold text-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
