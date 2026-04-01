import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export function DateReveal() {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    if (!isRevealed) {
      setIsRevealed(true);
      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d97706', '#dc2626', '#059669'],
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-rose-50 px-4 py-20">
      {/* Decorative elements */}
      <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-amber-200 opacity-20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-rose-200 opacity-20 blur-3xl" />

      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2
            className="mb-4 font-serif text-4xl text-gray-800 md:text-5xl"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Save The Date
          </motion.h2>
        </motion.div>

        <div className="flex justify-center">
          <motion.button
            onClick={handleReveal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-600 via-rose-600 to-emerald-600 p-1 shadow-2xl"
          >
            <motion.div
              animate={{
                background: [
                  'linear-gradient(45deg, #d97706, #dc2626, #059669)',
                  'linear-gradient(90deg, #dc2626, #059669, #d97706)',
                  'linear-gradient(135deg, #059669, #d97706, #dc2626)',
                  'linear-gradient(45deg, #d97706, #dc2626, #059669)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0"
            />
            <div className="relative rounded-xl bg-white px-12 py-8">
               <motion.div
                    key="revealed"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", duration: 0.8 }}
                    className="space-y-6"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-4 text-left"
                    >
                      <div className="rounded-full bg-amber-100 p-3">
                        <Calendar className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Date</p>
                        <p className="text-xl font-semibold text-gray-800">Sunday, May 31, 2026</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center gap-4 text-left"
                    >
                      <div className="rounded-full bg-rose-100 p-3">
                        <Clock className="h-6 w-6 text-rose-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Time</p>
                        <p className="text-xl font-semibold text-gray-800">11:00 AM onwards</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex items-center gap-4 text-left"
                    >
                      <div className="rounded-full bg-emerald-100 p-3">
                        <MapPin className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Venue</p>
                        <p className="text-xl font-semibold text-gray-800">MS Mahal, Chennai-TN</p>
                      </div>
                    </motion.div>
                  </motion.div>
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
