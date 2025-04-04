import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch('https://formspree.io/f/mnnpggzj', {
        method: 'POST',
        body: formData,
      });

      console.log(response);

      if (response.ok) {
        setStatus('Message sent successfully!');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setStatus('Failed to send message. Try again later.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen pointer-events-none">
      <form
        onSubmit={handleSubmit}
        className=" p-8 w-96"
      >
        <h1 className="text-3xl text-amber-300 mb-4 font-bold ">Contact Me</h1>
        <label className="block text-amber-300 mb-2">
          Your email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 mt-1 rounded-md bg-transparent text-white border border-black focus:outline-none focus:border-amber-300 pointer-events-auto"
          />
        </label>
        <label className="block text-amber-300 mb-2">
          Your message:
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-2 mt-1 rounded-md bg-transparent text-white border border-black focus:outline-none focus:border-amber-300 pointer-events-auto"
          />
        </label>
        <button
          type="submit"
          className="px-12 py-3 translate-y-[1rem] bg-amber-400 text-gray-900 font-bold text-lg rounded-lg shadow-lg hover:bg-amber-500 transition self-center md:self-start pointer-events-auto"
        >
          Send
        </button>

        {/* Feedback Message */}
        {status && <div className="mt-4 text-white"><p>{status}</p></div>}
      </form>
    </div>
  );
};

export default Contact;
