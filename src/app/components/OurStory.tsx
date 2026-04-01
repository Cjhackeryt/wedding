import { motion } from 'motion/react';
import { Star } from 'lucide-react';

interface StoryEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
}

const events: StoryEvent[] = [
  {
    year: "2020",
    title: "First Meeting",
    description: "Our paths crossed at a mutual friend's gathering. Little did we know, it was the beginning of something beautiful.",
    icon: "✨"
  },
  {
    year: "2022",
    title: "Growing Together",
    description: "Through countless conversations and shared dreams, we discovered a connection that went beyond words.",
    icon: "💫"
  },
  {
    year: "2024",
    title: "The Proposal",
    description: "Under the stars, with hearts full of love and hope, Arman asked Ayesha to be his life partner forever.",
    icon: "💍"
  },
  {
    year: "2026",
    title: "Our Nikkah",
    description: "Surrounded by family and friends, we begin our journey as husband and wife, blessed by Allah's mercy.",
    icon: "🤲"
  }
];

export function OurStory() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-rose-50 to-emerald-50 px-4 py-20">
      {/* Decorative background */}
      <div className="absolute left-0 top-1/4 h-64 w-64 rounded-full bg-amber-200 opacity-20 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 h-64 w-64 rounded-full bg-rose-200 opacity-20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="mb-6 inline-block"
          >
            <Star className="h-12 w-12 fill-amber-600 text-amber-600" />
          </motion.div>
          <h2 className="font-serif text-4xl text-gray-800 md:text-5xl">Our Love Story</h2>
          <p className="mt-4 text-lg text-gray-600">A journey written by destiny</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="absolute left-1/2 top-0 w-1 -translate-x-1/2 bg-gradient-to-b from-amber-600 via-rose-600 to-emerald-600"
          />

          {/* Events */}
          <div className="space-y-16">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`w-5/12 rounded-2xl bg-white p-6 shadow-xl ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}
                >
                  <p className="mb-2 text-sm font-semibold text-amber-600">{event.year}</p>
                  <h3 className="mb-3 font-serif text-2xl text-gray-800">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </motion.div>

                {/* Center icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-600 via-rose-600 to-emerald-600 text-4xl shadow-2xl"
                >
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {event.icon}
                  </motion.span>
                </motion.div>

                {/* Spacer */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-2xl">
            <p className="mb-4 font-serif text-2xl italic text-gray-700">
              "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy."
            </p>
            <p className="text-amber-600">- Quran 30:21</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
