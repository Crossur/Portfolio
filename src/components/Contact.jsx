import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  // Handle the form submission via AJAX
  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(''); // Reset status before submission

    const statusElement = document.getElementById("my-form-status");
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setStatus("Thanks for your submission!");
        setEmail('');
        setMessage('');
        form.reset();
      } else {
        const errorData = await response.json();
        if (errorData.errors) {
          setStatus(errorData.errors.map((error) => error.message).join(', '));
        } else {
          setStatus("Oops! There was a problem submitting your form");
        }
      }
    } catch (error) {
      setStatus("Oops! There was a problem submitting your form");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen pointer-events-none">
      <form
        id="my-form"
        action="https://formspree.io/f/mnnpggzj"
        method="POST"
        onSubmit={handleSubmit}
        className="p-8 w-96"
      >
        <h1 className="text-3xl text-amber-300 mb-4 font-bold">Contact Me</h1>
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
          id="my-form-button"
          className="px-12 py-3 translate-y-[1rem] bg-amber-400 text-gray-900 font-bold text-lg rounded-lg shadow-lg hover:bg-amber-500 transition self-center md:self-start pointer-events-auto"
        >
          Send
        </button>

        {/* Feedback Message */}
        <p id="my-form-status" className="mt-4 text-white translate-y-[1rem]">{status}</p>
      </form>
    </div>
  );
};

export default Contact;
