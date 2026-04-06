'use client;'
import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import '@fontsource/playfair-display';
import '@fontsource/great-vibes';

import brideImg from '../../images/bride3.png';
import groomImg from '../../images/groom.png';
import vid from '../../video/vid.mp4';
import { Heart } from 'lucide-react';


export function Hero() {
  const sectionRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(async () => {
      // 🎬 Swipe-up animation: hero slides up and out
      await controls.start({
        y: '-100%',
        opacity: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      });

      // ⬇️ Then scroll to next section after animation completes
      const nextSection = sectionRef.current?.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [controls]);
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* 🎥 Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={vid} type="video/mp4" />
      </video>

      {/* 🌫️ Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      {/* 👰 Bride - Left */}
      <motion.img
        src={groomImg}
        alt="Bride"
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="hidden md:block absolute top-20 left-0 bottom-0 h-full max-w-[60%] object-contain scale-x-[-1] opacity-90 z-0"
      />

      {/* 🤵 Groom - Right */}
      <motion.img
        src={brideImg}
        alt="Groom"
        initial={{ opacity: 0, x: 120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="hidden md:block absolute top-20 right-0 bottom-0 h-full max-w-[45%] object-contain opacity-90 z-0"
      />

      {/* 🌟 Center Content */}
      <div className="hidden md:flex relative z-10 h-full flex-col items-center justify-center px-4 text-center text-white">
        {/* Bismillah */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <p className="text-xl md:text-2xl text-amber-300 tracking-wide">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
          <p className="mt-2 text-sm md:text-base text-gray-200">
            In the name of Allah, the Most Gracious, the Most Merciful
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-4 text-4xl md:text-6xl lg:text-7xl flex flex-col items-center gap-4"
          style={{ fontFamily: 'Avenue de Madison' }}
        >
          <span>Mohammed Suhail</span>

          <Heart className="h-10 w-10 md:h-12 md:w-12 fill-white text-white" />

          <span>Amrin Fathima</span>
        </motion.h1>

        {/* ✨ Ceremony */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-8 flex items-center gap-4"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="h-10 w-10 rounded-full border border-amber-300"
          />

          <p
            className="text-2xl md:text-3xl tracking-wide"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Nikkah Ceremony
          </p>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="h-10 w-10 rounded-full border border-amber-300"
          />
        </motion.div>

        {/* 💌 Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-lg md:text-xl text-gray-200"
        >
          Join us in celebrating our special day
        </motion.p>

        {/* ⬇️ Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-10 left-0 right-0 flex flex-col items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center justify-center"
          >
           <p
              className="text-2xl tracking-widest mb-1 drop-shadow-lg"
              style={{
                fontFamily: 'Great Vibes, cursive',
                color: 'white',
                textShadow: '0 0 10px #fbbf24, 0 0 25px #fbbf24, 0 0 50px #f59e0b, 0 0 80px #f59e0b',
                letterSpacing: '0.15em',
              }}
            >
              Scroll down
            </p>
            <ChevronDown
              className="h-15 w-15"
              style={{
                color: 'white',
                filter: 'drop-shadow(0 0 8px #fbbf24) drop-shadow(0 0 20px #f59e0b)',
              }}
            />
          </motion.div>
        </motion.div>

      </div>
      {/* 📱 MOBILE VIEW */}
      <div className="md:hidden relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">

        {/* 👰 Bride (left) */}
        <motion.img
          src={groomImg}
          alt="Bride"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="
      absolute right-25 top-48
      h-[100%] 
      max-w-[100%] 
      object-contain 

      opacity-70
    "
        />

        {/* 🤵 Groom (right) */}
        <motion.img
          src={brideImg}
          alt="Groom"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="
      absolute left-35 bottom-0 top-45
      h-[100%] 
      max-w-[80%] 
      object-contain 
      opacity-70
    "
        />

        {/* 🌫️ Soft gradient (lighter than before) */}

        {/* ✨ Content */}
        <div className="relative z-10 flex flex-col items-center px-2 bottom-50 text-center text-white">

          {/* Bismillah */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-3"
          >
            <p className="text-2xl text-amber-300 ">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </p>
            <p className="mt-1 text-[15px] text-gray-200">
              In the name of Allah, the Most Gracious, the Most Merciful
            </p>
          </motion.div>

          {/* 💎 Names */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl leading-tight text-center"
            style={{ fontFamily: 'Avenue de Madison' }}
          >
            {/* 📱 Mobile view (stacked with heart center) */}
            <span className="flex flex-col items-center gap-2 md:hidden">
              <span>Mohammed Suhail</span>

              <span className="text-amber-300 text-2xl">❤</span>

              <span>Amrin Fathima</span>
            </span>

            {/* 💻 Desktop view (inline) */}
            <span className="hidden md:inline">
              Mohammed Suhail <span className="text-amber-300">&</span> Amrin Fathima
            </span>
          </motion.h1>

          {/* ✨ Ceremony */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-2 text-2xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Nikkah Ceremony
          </motion.p>
          {/* 💌 Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-1 text-xs text-gray-200"
          >
            Join us in celebrating our special day
          </motion.p>

        </div>

        {/* ⬇️ Scroll - Mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-10 left-0 right-0 flex flex-col items-center justify-center z-20"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center justify-center"
          >
            <p
              className="text-2xl tracking-widest mb-1 drop-shadow-lg"
              style={{
                fontFamily: 'Great Vibes, cursive',
                color: 'black',
                textShadow: '0 0 10px #fbbf24, 0 0 25px #fbbf24, 0 0 50px #f59e0b, 0 0 80px #f59e0b',
                letterSpacing: '0.15em',
              }}
            >
              Scroll down
            </p>
            <ChevronDown
              className="h-15 w-15"
              style={{
                color: 'white',
                filter: 'drop-shadow(0 0 8px #fbbf24) drop-shadow(0 0 20px #f59e0b)',
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section >
  );
}