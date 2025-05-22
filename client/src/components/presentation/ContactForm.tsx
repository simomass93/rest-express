import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CalendarPlus, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  venueName: string;
  message: string;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    venueName: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (onSubmit) {
        onSubmit(formData);
      }

      setIsSubmitted(true);
      toast({
        title: "Richiesta inviata con successo!",
        description: "Ti contatteremo presto per organizzare la dimostrazione.",
      });

      // Reset form after success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          venueName: '',
          message: '',
        });
      }, 3000);

    } catch (error) {
      toast({
        title: "Errore nell'invio",
        description: "Si è verificato un problema. Riprova più tardi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="bg-white rounded-2xl p-8 shadow-xl border border-elegant-gold/20 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CheckCircle className="text-elegant-gold text-5xl mx-auto mb-4" />
        <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-2">
          Grazie per il tuo interesse!
        </h3>
        <p className="text-charcoal/70">
          Ti contatteremo presto per organizzare la dimostrazione del Totem Selfie.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-elegant-gold/20">
      <h3 className="font-playfair text-3xl font-semibold text-charcoal mb-8 text-center">
        Richiedi una <span className="text-elegant-gold">Demo Gratuita</span>
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-charcoal font-medium">
              Nome e Cognome *
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Il tuo nome completo"
              required
              className="border-elegant-gold/20 focus:border-elegant-gold"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-charcoal font-medium">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="la.tua.email@esempio.it"
              required
              className="border-elegant-gold/20 focus:border-elegant-gold"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-charcoal font-medium">
              Telefono
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="+39 123 456 7890"
              className="border-elegant-gold/20 focus:border-elegant-gold"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="venueName" className="text-charcoal font-medium">
              Nome della Villa/Location
            </Label>
            <Input
              id="venueName"
              value={formData.venueName}
              onChange={(e) => handleInputChange('venueName', e.target.value)}
              placeholder="Villa dei Fiori"
              className="border-elegant-gold/20 focus:border-elegant-gold"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-charcoal font-medium">
            Messaggio
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            placeholder="Raccontaci di più sulla tua villa e quando vorresti organizzare la dimostrazione..."
            rows={4}
            className="border-elegant-gold/20 focus:border-elegant-gold resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-elegant-gold to-rose-antique text-white font-semibold py-4 px-8 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Invio in corso...
            </>
          ) : (
            <>
              <Send className="mr-2" size={20} />
              Invia Richiesta Demo
            </>
          )}
        </Button>

        <p className="text-sm text-charcoal/60 text-center">
          * Campi obbligatori. I tuoi dati saranno trattati nel rispetto della privacy.
        </p>
      </form>
    </div>
  );
}