import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }),
        });

        if (response.ok) {
            alert('Your message has been sent!');
            setFormData({ name: '', email: '', message: '' }); // Clear form
        } else {
            alert('Failed to send your message. Please try again later.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
             style={{ backgroundImage: "url('/Contactbg.jpg')" }}>
            <div className="bg-white bg-opacity-80 p-8 rounded shadow-md max-w-lg w-full">
                <h1 className="text-2xl font-bold text-center mb-4">Contact Us</h1>
                <p className="text-center mb-6 italic">“Innovating the future with robotics.”</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name:</label>
                        <input type="text" name="name" required 
                               value={formData.name} onChange={handleChange} 
                               className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email:</label>
                        <input type="email" name="email" required 
                               value={formData.email} onChange={handleChange} 
                               className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Message:</label>
                        <textarea name="message" rows="4" required 
                                  value={formData.message} onChange={handleChange} 
                                  className="w-full p-2 border border-gray-300 rounded"></textarea>
                    </div>
                    <button type="submit" 
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
