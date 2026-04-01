import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import bridee from '../../images/akka2.png';
import groomm from '../../images/cartogroom.png';

interface Person {
  name: string;
  role: string;
  description: string;
  image: string;
  parents: string;
}

const bride: Person = {
  name: "Amrin Fathima",
  role: "The Bride",
  description: "A kind soul with a heart full of love, Amrin brings light and joy to everyone around her. Her grace and compassion make her truly special.",
  image: bridee,
  parents: "Daughter of Syed Ali & Shahin Shulthana"
};

const groom: Person = {
  name: "Mohammed Suhail",
  role: "The Groom",
  description: "With strength and dedication, suhail is a man of integrity and honor. His devotion and kindness make him the perfect life partner.",
  image: groomm,
  parents: "Son of Saifuddin & Salma Begum"
};

function PersonCard({ person, reverse = false }: { person: Person; reverse?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col items-center gap-8 ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      {/* Image with animation */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative w-full md:w-1/2"
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-400 via-rose-400 to-emerald-400 opacity-20 blur-2xl"
        />
        <div className="relative overflow-hidden rounded-3xl shadow-5xl">
          <motion.img
            src={person.image}
            alt={person.name}
            className="h-[500px] w-full object-cover "
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent "
          />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="w-full space-y-4 text-center md:w-1/2 md:text-left"
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block"
        >
          <Heart className="h-8 w-8 fill-rose-500 text-rose-500" />
        </motion.div>
        
        <h3 className="font-serif text-4xl text-gray-800 md:text-5xl">{person.name}</h3>
        <p className="text-xl text-amber-600">{person.role}</p>
        <p className="text-sm text-gray-600">{person.parents}</p>
        <p className="leading-relaxed text-gray-700">{person.description}</p>
        
        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent md:mx-0"
        />
      </motion.div>
    </motion.div>
  );
}

export function BrideGroom() {
  return (
    <section className="bg-gradient-to-b from-white to-amber-50 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-serif text-4xl text-gray-800 md:text-5xl">The Happy Couple</h2>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="mx-auto h-16 w-16 rounded-full border-4 border-dashed border-amber-600"
          />
        </motion.div>

        <div className="space-y-20">
          <PersonCard person={bride} />
          <PersonCard person={groom} reverse />
        </div>

        {/* Heart animation in center */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="rounded-full bg-gradient-to-br from-rose-500 to-pink-500 p-6 shadow-2xl"
          >
            <Heart className="h-12 w-12 fill-white text-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
