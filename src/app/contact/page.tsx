'use client';

import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can implement form submission logic here
    alert('Your message has been submitted!');
  };

  return (
    <div className="max-w-screen-xl mx-auto my-8 p-4 sm:p-6 lg:p-8">
      {/* Contact Information Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-extrabold text-center mb-6 text-[#352483]">Contact Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4 p-4 border rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <i className="fas fa-envelope text-3xl text-[#352483] transition-all hover:text-[#4B8EFD]"></i>
            <div>
              <h3 className="text-2xl font-semibold text-[#352483]">Email</h3>
              <p className="text-gray-600">info@bakersinn.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 border rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <i className="fas fa-phone-alt text-3xl text-[#352483] transition-all hover:text-[#4B8EFD]"></i>
            <div>
              <h3 className="text-2xl font-semibold text-[#352483]">Phone</h3>
              <p className="text-gray-600">+1 234 567 890</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 border rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <i className="fas fa-map-marker-alt text-3xl text-[#352483] transition-all hover:text-[#4B8EFD]"></i>
            <div>
              <h3 className="text-2xl font-semibold text-[#352483]">Address</h3>
              <p className="text-gray-600">123 Bakery Street, Florence, Italy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-extrabold text-center mb-6 text-[#352483]">Send Us a Message</h2>
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              required
              className="mb-4"
              size="small"
              InputLabelProps={{
                style: { color: '#352483' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#352483',
                  },
                  '&:hover fieldset': {
                    borderColor: '#352483',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#352483',
                  },
                },
              }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              className="mb-4"
              size="small"
              InputLabelProps={{
                style: { color: '#352483' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#352483',
                  },
                  '&:hover fieldset': {
                    borderColor: '#352483',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#352483',
                  },
                },
              }}
            />
          </div>
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={6}
            fullWidth
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mb-4"
            size="small"
            InputLabelProps={{
              style: { color: '#352483' },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#352483',
                },
                '&:hover fieldset': {
                  borderColor: '#352483',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#352483',
                },
              },
            }}
          />
          <div className="text-center mt-8">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: '#352483',
                padding: '10px 20px',
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#352483',
                  transform: 'scale(1.05)',
                },
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              Submit
            </Button>
          </div>
        </form>
      </section>

      {/* Location Map Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#352483]">Our Location</h2>
        <div className="w-full h-[400px] relative">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?q=Florence+Italy&key=YOUR_GOOGLE_MAPS_API_KEY"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Social Media Links & Newsletter Section */}
      <section className="mb-12 text-center">
        {/* Follow Us */}
        <h2 className="text-3xl font-bold text-[#352483] mb-4">Follow Us</h2>
        <p className="text-lg text-gray-600 mb-8">Stay connected with us for updates, promotions, and the latest news from Bakers Inn.</p>
        <div className="flex justify-center space-x-6 mb-8">
          <Link href="https://facebook.com/bakersinn" target="_blank">
            <Image
              src="/images/facebook_icon.png"
              alt="Facebook"
              width={40}
              height={40}
              className="inline-block transform transition-all hover:scale-110"
            />
          </Link>
          <Link href="https://instagram.com/bakersinn" target="_blank">
            <Image
              src="/images/instagram_icon.png"
              alt="Instagram"
              width={40}
              height={40}
              className="inline-block transform transition-all hover:scale-110"
            />
          </Link>
          <Link href="https://twitter.com/bakersinn" target="_blank">
            <Image
              src="/images/twitter_icon.png"
              alt="Twitter"
              width={40}
              height={40}
              className="inline-block transform transition-all hover:scale-110"
            />
          </Link>
        </div>

        {/* Subscribe to Newsletter */}
        <h2 className="text-3xl font-bold text-[#352483] mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-lg text-gray-600 mb-8">Get the latest updates, news, and exclusive offers directly to your inbox.</p>
        <form className="flex justify-center items-center gap-4">
          <TextField
            label="Enter your email"
            variant="outlined"
            fullWidth
            required
            className="max-w-md"
            type="email"
            size="small"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="py-2 px-6 transition-all transform hover:scale-110"
          >
            Subscribe
          </Button>
        </form>
      </section>
    </div>
  );
}
