import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, Music, Utensils, Camera } from 'lucide-react';
import hall from '../../images/hall.png';
import couple from '../../images/couple.png';
import mehndi from '../../images/mehndi.jpeg';

interface Event {
  name: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  icon: any;
  color: string;
  image: string;
}

const events: Event[] = [
  {
    name: "Nikkah Ceremony",
    date: "Sunday, June 07, 2026",
    time: "11:00 AM - 12:00 PM",
    venue: "Vani Mahal, Chennai-TN",
    description: "The sacred Nikkah ceremony where we will take our vows in the presence of our loved ones and seek Allah's blessings.",
    icon: Music,
    color: "from-rose-500 to-pink-500",
    image: couple
  },
];

function EventCard({ event, index }: { event: Event; index: number }) {
  const Icon = event.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={event.image}
          alt={event.name}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Icon */}
        <motion.div
          className={`absolute right-4 top-4 rounded-full bg-gradient-to-br ${event.color} p-3 shadow-xl`}
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="h-6 w-6 text-white" />
        </motion.div>

        {/* Event name overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-serif text-3xl text-white">{event.name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4 space-y-3">
          <div className="flex items-center gap-3 text-gray-700">
            <Calendar className="h-5 w-5 text-amber-600" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Clock className="h-5 w-5 text-rose-600" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <MapPin className="h-5 w-5 text-emerald-600" />
            <span>{event.venue}</span>
          </div>
        </div>

        <p className="leading-relaxed text-gray-600">{event.description}</p>

        {/* Animated border */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`mt-4 h-1 rounded-full bg-gradient-to-r ${event.color}`}
        />
      </div>
    </motion.div>
  );
}

export function Events() {
  return (
    <section className="relative bg-gradient-to-b from-emerald-50 to-white px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="mb-6 inline-block"
          >
            <Camera className="h-12 w-12 text-amber-600" />
          </motion.div>
          <h2 className="mb-4 font-serif text-4xl text-gray-800 md:text-5xl">Wedding Event</h2>
          <p className="text-lg text-gray-600">Join us in celebrating our special moments</p>
        </motion.div>

        {/* <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
          ))}
        </div> */}

        {/* Venue map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 overflow-hidden rounded-3xl bg-white shadow-2xl"
        >
          <div className="bg-gradient-to-r from-amber-600 via-rose-600 to-emerald-600 p-6 text-center">
            <h3 className="font-serif text-2xl text-white">MS Mahal, Chennai</h3>
            <p className="mt-2 text-white/90">No 41, 60, Chella Pillayar Koil St, Padupakkam, Triplicane</p>
          </div>
          <div className="group">
            {/* Image */}
            <div className="relative h-64 bg-gray-100 overflow-hidden rounded-xl">
              <img
                src={hall}
                alt="Venue"
                className="h-full w-full object-cover"
              />

              {/* 💻 Overlay button (Desktop only) */}
              <div className="hidden md:flex absolute inset-0 items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300">
                <motion.button
                  onClick={() =>
                    window.open("https://maps.app.goo.gl/59fn2rXE6qg8gXYR8", "_blank")
                  }
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2"
                >
                  📍 Get Directions
                </motion.button>
              </div>
            </div>

            {/* 📱 Button below (Mobile only) */}
            <div className="mt-4 flex justify-center md:hidden">
              <motion.button
                onClick={() =>
                  window.open("https://maps.app.goo.gl/59fn2rXE6qg8gXYR8", "_blank")
                }
                whileTap={{ scale: 0.95 }}
                animate={{ y: [0, -5, 0] }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  },
                }}
                className="bg-black text-white px-6 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2"
              >
                📍 Get Directions
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
