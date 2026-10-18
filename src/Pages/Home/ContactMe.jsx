// export default function ConactMe() {
//     return (
//         <section id="Contact" className="contact--section">
//             <div>
//                 <p className="sub--title">Get In Touch</p>
//                 <h2>Contact Me</h2>
//                 <p className="text--lg">Let's connect! Send me a message and I'll get back to you.</p>
//             </div>
//             <form className="contact--form--container">
//                 <div className="container">

//                     <label htmlFor="first-name" className="contact--label">
//                         <span className="text-md">First Name</span>
//                         <input type="text" className="contact--input text-md" name="first-name" id="first-name" required />
//                     </label>

//                     <label htmlFor="last-name" className="contact--label">
//                         <span className="text-md">Last Name</span>
//                         <input type="text" className="contact--input text-md" name="last-name" id="last-name" required />
//                     </label>

//                     <label htmlFor="email" className="contact--label">
//                         <span className="text-md">Email</span>
//                         <input type="email" className="contact--input text-md" name="email" id="email" required />
//                     </label>

//                     <label htmlFor="phone-number" className="contact--label">
//                         <span className="text-md">Phone-number</span>
//                         <input type="number" className="contact--input text-md" name="phone-number" id="phone-number" required />
//                     </label>

//                 </div>
//                 {/* 
//                 <label htmlFor="choose-topic" className="contact--label">
//                     <span className="text-md">Choose a topic</span>
//                     <select id="choose-topic" className="contact--input text-md">
//                         <option>Select One...</option>
//                         <option>Option 1</option>
//                         <option>Option 2</option>
//                         <option>Option 3</option>
//                     </select>
//                 </label> */}

//                 <label htmlFor="message" className="contact--label">
//                     <span className="text-md">Message</span>
//                     <textarea className="contact--input text-md" id="message" rows={8} placeholder="Type Your Message.." />
//                 </label>

//                 {/* <label htmlFor="checkbox" className="checkbox--label">
//                     <input type="checkbox" required name="checkbox" id="checkbox" />
//                     <span className="text-sm">I accept the terms</span>
//                 </label> */}

//                 <div>
//                     <button className="btn btn-primary contact--form--btn">Submit</button>
//                 </div>
//             </form>
//         </section>
//     );
// }

import React, { useState } from 'react';
import { init, send } from '@emailjs/browser';

export default function ContactMe() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    // Initialize EmailJS with your user ID
    init('p0YC6pTrecdlMGaqn'); // Replace with your EmailJS user ID

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        send('service_z93b18m', 'template_y5a0aqe', formData) // Replace with your EmailJS service and template IDs
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setStatusMessage('Thank you for your message. I will get back to you soon.');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    message: '',
                });
            }, (error) => {
                console.log('Email failed to send:', error.text);
                setStatusMessage('Oops, something went wrong. Please try again.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="Contact" className="contact--section">
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className="text--lg">Let's connect! Send me a message and I'll get back to you.</p>
            </div>
            <form className="contact--form--container" onSubmit={handleSubmit}>
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="firstName"
                            id="first-name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="lastName"
                            id="last-name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input
                            type="email"
                            className="contact--input text-md"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Phone Number</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="phoneNumber"
                            id="phone-number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>

                <label htmlFor="message" className="contact--label">
                    <span className="text-md">Message</span>
                    <textarea
                        className="contact--input text-md"
                        id="message"
                        name="message"
                        rows={8}
                        placeholder="Type Your Message.."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </label>

                <div>
                    <button
                        type="submit"
                        className="btn btn-primary contact--form--btn"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>

                {statusMessage && <p>{statusMessage}</p>}
            </form>
        </section>
    );
}
