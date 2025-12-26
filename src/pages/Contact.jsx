import React from 'react';
import Header from '../components/Header';

function Contact() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Image */}
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Contact Info */}
          <div className="bg-gray-900 border border-red-600/30 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">
              Contact Information
            </h2>

            <p className="text-gray-200 mb-6">
              We’re always happy to hear from you.  
              Feel free to contact us using the details below.
            </p>

            <div className="space-y-4 text-gray-200">
              <p>
                📞 <span className="font-semibold">Phone:</span> +92 320 8083931
              </p>

              <p>
                📱 <span className="font-semibold">WhatsApp:</span> +92 320 8083931
              </p>

              <p>
                📧 <span className="font-semibold">Email:</span> goldenspoon@gmail.com
              </p>

              <p>
                📍 <span className="font-semibold">Address:</span>  
                Main Food Street F-7, Islamabad, Pakistan
              </p>

              <p>
                ⏰ <span className="font-semibold">Timings:</span>  
                12:00 PM – 12:00 AM
              </p>
            </div>

            {/* Contact Now Button */}
            <a
              href="https://wa.me/923208083931"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-6 w-full bg-black text-yellow-400 font-semibold py-3 rounded-full hover:bg-red-700 hover:text-white transition">
                Contact Now
              </button>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}

export default Contact;
