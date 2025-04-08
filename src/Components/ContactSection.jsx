import React from 'react';
import { Calendar } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-xl overflow-hidden">
        <div className="px-6 py-12 md:p-12">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold text-white mb-4">Let's Get In Touch</h2>
            <p className="text-white/90 mb-8">
              Have a project in mind? Let's discuss how we can bring your ideas to life. Reach out to us today!
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-white text-cyan-600 font-medium rounded-full transition-colors duration-300 hover:bg-gray-100">
              Book a Call
              <Calendar className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;