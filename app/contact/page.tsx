import React from 'react';

export default function Contact() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        We would love to hear from you! Whether you have questions, feedback, or just want to get in touch, you can reach out to us via email.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
      <p className="text-lg text-gray-700 mb-6">
        Email: <a href="mailto:junais66@gmail.com" className="text-green-600 hover:underline">junais66@gmail.com</a>
      </p>
      <h2 className="text-3xl font-semibold mb-4">Find Us</h2>
      <div className="relative w-full max-w-4xl h-80 mb-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d299186.4536511994!2d54.39346946444477!3d24.386741041916657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7cc2e9341971108!2sAbu%20Dhabi!5e1!3m2!1sen!2sae!4v1723368642507!5m2!1sen!2sae"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p className="text-lg text-gray-700">
     I am based in Abu Dhabi, UAE. Feel free to drop us a message, and we'll get back to you as soon as possible.
      </p>
    </div>
  );
}
