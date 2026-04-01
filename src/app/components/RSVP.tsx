import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Check } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

export function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attending: 'yes',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_00nbdfc',     // 🔴 replace
        'template_g0hkq6a',    // 🔴 replace
        {
          name: formData.name,
          email: formData.email,
          guests: formData.guests,
          attending: formData.attending,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        'y-vfCIZnQkHUaAlFu'      // 🔴 replace
      );

      setSubmitted(true);
      toast.success('RSVP sent successfully! 💌');

      setFormData({
        name: '',
        email: '',
        guests: '1',
        attending: 'yes',
        message: '',
      });

    } catch (error) {
      console.error(error);
      toast.error('Failed to send RSVP ❌');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: any) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-rose-50 to-emerald-50 px-4 py-20">

      <div className="relative mx-auto max-w-4xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-serif text-4xl text-gray-800 md:text-5xl">
            RSVP
          </h2>
          <p className="text-lg text-gray-600">
            Please let us know if you'll be joining us
          </p>
        </motion.div>

        {/* Card */}
        <div className="rounded-3xl bg-white p-8 shadow-2xl md:p-12">

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="mb-6 rounded-full bg-emerald-500 p-6">
                <Check className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-3xl font-serif text-gray-800">Thank You!</h3>
              <p className="text-gray-600 mt-2 text-center">
                Your RSVP has been received 💖
              </p>
            </div>
          ) : (

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name + Email */}
              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </div>

              </div>

              {/* Guests + Attending */}
              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full rounded-xl border px-4 py-3"
                  >
                    {[1, 2, 3, 4, 5].map(n => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Attending
                  </label>
                  <select
                    name="attending"
                    value={formData.attending}
                    onChange={handleChange}
                    className="w-full rounded-xl border px-4 py-3"
                  >

                    <option value="yes">Yes, I'll be there! 🎉</option>
                    <option value="no">Sorry, can't make it 😔</option>
                  </select>
                </div>

              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border px-4 py-3"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-amber-600 via-rose-600 to-emerald-600 px-8 py-4 text-white font-semibold"
              >
                {loading ? 'Sending...' : 'Submit RSVP'}
              </button>

            </form>
          )}
        </div>
      </div>
    </section>
  );
}