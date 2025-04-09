import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: 'A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended for any project.',
      author: 'Radha Rani',
      company: 'CEO, Google'
    },
    {
      quote: 'A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended for any project.',
      author: 'Radha Rani',
      company: 'CEO, Google'
    },
    {
      quote: 'A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended for any project.',
      author: 'Radha Rani',
      company: 'CEO, Google'
    },
    {
      quote: 'A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended for any project.',
      author: 'Radha Rani',
      company: 'CEO, Google'
    },
    {
      quote: 'A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended for any project.',
      author: 'Radha Rani',
      company: 'CEO, Google'
    },
    {
      quote: 'A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended for any project.',
      author: 'Radha Rani',
      company: 'CEO, Google'
    }
  ];

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-1">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Hear from Our Clients</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <Quote className="w-8 h-8 text-cyan-500 mb-4" />
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 overflow-hidden mr-3">
                  <img src="/api/placeholder/40/40" alt={testimonial.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.author}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;