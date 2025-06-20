'use client';

import { useState } from 'react';
import { Button, TextField, Card, CardContent, IconButton } from '@mui/material';
import Image from 'next/image';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function ContactPage() {
  const [message, setMessage] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSuccess(true);
    setMessage('');
    setTimeout(() => setFormSuccess(false), 3000);
  };

  return (
    <div className="max-w-screen-xl mx-auto my-8 p-4 sm:p-6 lg:p-8">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-[#352483] to-[#4B8EFD] rounded-3xl shadow-lg p-10 mb-16 text-center animate-fade-in">
        <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">Contact Us</h1>
        <p className="text-xl text-white/90 mb-2">We&apos;d love to hear from you! Reach out for questions, feedback, or just to say hello.</p>
      </div>

      {/* Contact Information Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#352483]">
            <CardContent className="flex flex-col items-center py-8">
              <EmailIcon className="text-4xl text-[#352483] mb-2" />
              <h3 className="text-2xl font-semibold text-[#352483] mb-1">Email</h3>
              <p className="text-gray-600">info@bakersinn.com</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#4B8EFD]">
            <CardContent className="flex flex-col items-center py-8">
              <PhoneIcon className="text-4xl text-[#352483] mb-2" />
              <h3 className="text-2xl font-semibold text-[#352483] mb-1">Phone</h3>
              <p className="text-gray-600">+1 234 567 890</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#352483]">
            <CardContent className="flex flex-col items-center py-8">
              <LocationOnIcon className="text-4xl text-[#352483] mb-2" />
              <h3 className="text-2xl font-semibold text-[#352483] mb-1">Address</h3>
              <p className="text-gray-600">123 Bakery Street, Florence, Italy</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mb-16 flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1">
          <Card className="rounded-3xl shadow-2xl p-6 bg-gradient-to-br from-white via-[#f7f8fa] to-[#eaf0fb]">
            <CardContent>
              <h2 className="text-4xl font-extrabold text-[#352483] mb-6 text-center">Send Us a Message</h2>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    required
                    className="mb-4 bg-white rounded-lg"
                    size="small"
                    InputLabelProps={{ style: { color: '#352483' } }}
                    sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#352483' }, '&:hover fieldset': { borderColor: '#352483' }, '&.Mui-focused fieldset': { borderColor: '#352483' } } }}
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    className="mb-4 bg-white rounded-lg"
                    size="small"
                    InputLabelProps={{ style: { color: '#352483' } }}
                    sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#352483' }, '&:hover fieldset': { borderColor: '#352483' }, '&.Mui-focused fieldset': { borderColor: '#352483' } } }}
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
                  className="mb-4 bg-white rounded-lg"
                  size="small"
                  InputLabelProps={{ style: { color: '#352483' } }}
                  sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#352483' }, '&:hover fieldset': { borderColor: '#352483' }, '&.Mui-focused fieldset': { borderColor: '#352483' } } }}
                />
                <div className="text-center mt-8">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ backgroundColor: '#352483', padding: '10px 32px', borderRadius: '12px', textTransform: 'none', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 4px 16px #35248322', '&:hover': { backgroundColor: '#4B8EFD', transform: 'scale(1.05)' }, transition: 'transform 0.3s ease-in-out' }}
                  >
                    Submit
                  </Button>
                </div>
                {formSuccess && (
                  <div className="text-green-600 text-center font-semibold mt-4 animate-fade-in">Thank you! Your message has been submitted.</div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="flex-1 hidden md:flex items-center justify-center">
          <Image src="/images/contact.jpg" alt="Contact Illustration" width={400} height={400} className="rounded-2xl shadow-xl object-cover" />
        </div>
      </section>

      {/* Social Media Links & Newsletter Section */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Social Media */}
        <Card className="rounded-3xl shadow-xl p-8 flex flex-col items-center bg-gradient-to-br from-[#f7f8fa] to-[#eaf0fb]">
          <h2 className="text-3xl font-bold text-[#352483] mb-4">Follow Us</h2>
          <p className="text-lg text-gray-600 mb-8 text-center">Stay connected with us for updates, promotions, and the latest news from Bakers Inn.</p>
          <div className="flex justify-center space-x-6 mb-4">
            <IconButton href="https://facebook.com/bakersinn" target="_blank" className="hover:scale-110 transition-transform" sx={{ color: '#1877F3', backgroundColor: '#fff', boxShadow: 2 }}>
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton href="https://instagram.com/bakersinn" target="_blank" className="hover:scale-110 transition-transform" sx={{ color: '#E4405F', backgroundColor: '#fff', boxShadow: 2 }}>
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton href="https://twitter.com/bakersinn" target="_blank" className="hover:scale-110 transition-transform" sx={{ color: '#1DA1F2', backgroundColor: '#fff', boxShadow: 2 }}>
              <TwitterIcon fontSize="large" />
            </IconButton>
          </div>
        </Card>
        {/* Newsletter */}
        <Card className="rounded-3xl shadow-xl p-8 flex flex-col items-center bg-gradient-to-br from-[#f7f8fa] to-[#eaf0fb]">
          <h2 className="text-3xl font-bold text-[#352483] mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-gray-600 mb-8 text-center">Get the latest updates, news, and exclusive offers directly to your inbox.</p>
          <form className="flex w-full max-w-md gap-4">
            <TextField
              label="Enter your email"
              variant="outlined"
              fullWidth
              required
              type="email"
              size="small"
              className="bg-white rounded-lg"
              InputLabelProps={{ style: { color: '#352483' } }}
              sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#352483' }, '&:hover fieldset': { borderColor: '#352483' }, '&.Mui-focused fieldset': { borderColor: '#352483' } } }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ backgroundColor: '#352483', borderRadius: '12px', fontWeight: 'bold', '&:hover': { backgroundColor: '#4B8EFD', transform: 'scale(1.05)' }, transition: 'transform 0.3s ease-in-out' }}
            >
              Subscribe
            </Button>
          </form>
        </Card>
      </section>

      {/* FAQ Section */}
      <section className="mb-12 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#352483]">Frequently Asked Questions</h2>
        <FAQ />
      </section>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: 'What are your opening hours?',
      answer: 'We are open from 7:00 AM to 8:00 PM, Monday to Saturday. On Sundays, we are open from 8:00 AM to 4:00 PM.'
    },
    {
      question: 'Do you offer gluten-free or vegan products?',
      answer: 'Yes! We have a selection of gluten-free and vegan breads and pastries. Please ask our staff or check our menu for details.'
    },
    {
      question: 'Can I place a custom cake or large order?',
      answer: 'Absolutely! Please contact us at least 48 hours in advance for custom cakes or large orders. You can use the contact form above or call us directly.'
    },
    {
      question: 'Where are you located?',
      answer: 'Our main bakery is at 123 Bakery Street, Florence, Italy. See the contact information above for more details.'
    },
    {
      question: 'How can I subscribe to your newsletter?',
      answer: 'Simply enter your email in the newsletter form above and click Subscribe!'
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div key={idx} className="border rounded-xl shadow-md bg-white">
          <button
            className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center text-[#352483] font-semibold text-lg hover:bg-[#f7f8fa] transition-colors rounded-xl"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
          >
            {faq.question}
            <span className={`ml-2 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}>▼</span>
          </button>
          {openIndex === idx && (
            <div className="px-6 pb-4 text-gray-700 animate-fade-in">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
