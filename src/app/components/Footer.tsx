import { motion } from 'motion/react';
import { Heart, Instagram, Facebook, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black px-4 py-16 text-white">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-500"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 30 - 15],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mb-6 inline-block"
          >
            <Heart className="h-16 w-16 fill-rose-500 text-rose-500" />
          </motion.div>
          
          <h2 className="mb-4 font-serif text-4xl text-white">Mohammed Suhail & Amrin Fathima</h2>
          <p className="text-lg text-gray-400">May 31, 2026</p>
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex justify-center gap-6"
        >
          {[
            { icon: Instagram, color: 'from-purple-500 to-pink-500',link: "https://www.instagram.com/_shayaz_/" },
            { icon: Facebook, color: 'from-blue-600 to-blue-400', link: "https://www.facebook.com/shayazath.khan/" },
            { icon: Mail, color: 'from-amber-600 to-orange-500', link: "mailto:shayazathkhan@gmail.com" },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={index}
                href={item.link}
                target='_blank'
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className={`rounded-full bg-gradient-to-br ${item.color} p-4 shadow-xl transition-all hover:shadow-2xl`}
              >
                <Icon className="h-6 w-6 text-white" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mx-auto max-w-2xl font-serif text-xl italic text-gray-300">
            "The best of you are those who are best to their wives"
          </p>
          <p className="mt-2 text-amber-400">- Prophet Muhammad (PBUH)</p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="mx-auto mb-8 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"
        />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>Created with love for Mohammed Suhail & Amrin Fathima's Nikkah</p>
          <p className="mt-2">© 2026 All rights reserved</p>
        </div>

        {/* Floating hearts */}
        <div className="pointer-events-none absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + i * 15}%`,
                bottom: 0,
              }}
              animate={{
                y: [0, -300],
                opacity: [0, 1, 0],
                rotate: [0, 180],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 1,
              }}
            >
              <Heart className="h-6 w-6 fill-rose-500 text-rose-500 opacity-30" />
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
}
