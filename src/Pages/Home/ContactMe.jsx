
import React, { useState } from "react";
import { send } from "@emailjs/browser";

const initialForm = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
};

export default function ContactMe() {
    const [formData, setFormData] = useState(initialForm);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [statusType, setStatusType] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage("");
        setStatusType("");

        try {
            await send(
                "service_z93b18m",
                "template_y5a0aqe",
                formData,
                { publicKey: "p0YC6pTrecdlMGaqn" }
            );

            setStatusMessage(
                "Message sent! I'll get back to you soon."
            );
            setStatusType("success");
            setFormData(initialForm);
        } catch (error) {
            console.error("EmailJS error:", error);
            setStatusMessage(
                "Something went wrong. Please try again."
            );
            setStatusType("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="Contact" className="contact--section">
            <div className="contact--inner">

                {/* Left column */}
                <div className="contact--info">
                    <p className="contact--eyebrow">
                        <span className="contact--eyebrow-line" />
                        04 / CONTACT
                    </p>

                    <h2 className="contact--title">
                        Let's talk<span>.</span>
                    </h2>

                    <p className="contact--intro">
                        Have a question, an opportunity, or just want
                        to connect? I'd be happy to hear from you!
                    </p>

                    <div className="contact--socials">
                        <a
                            href="https://www.linkedin.com/in/idoazulay"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact--social-link"
                        >
                            <span className="contact--social-icon">
                                in
                            </span>
                            LinkedIn
                            <span className="contact--social-arrow">↗</span>
                        </a>
                    </div>
                </div>

                {/* Right column */}
                <form
                    className="contact--form--container"
                    onSubmit={handleSubmit}
                >
                    <div className="contact--form--header">
                        <h3>Send a message</h3>
                    </div>

                    <label
                        className="contact--label"
                        htmlFor="contact-name"
                    >
                        <span>Name</span>
                        <input
                            id="contact-name"
                            type="text"
                            name="firstName"
                            className="contact--input"
                            placeholder="Your name"
                            value={formData.firstName}
                            onChange={handleChange}
                            autoComplete="name"
                            required
                        />
                    </label>

                    <label
                        className="contact--label"
                        htmlFor="contact-email"
                    >
                        <span>Email</span>
                        <input
                            id="contact-email"
                            type="email"
                            name="email"
                            className="contact--input"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="email"
                            required
                        />
                    </label>

                    <label
                        className="contact--label"
                        htmlFor="contact-message"
                    >
                        <span>Message</span>
                        <textarea
                            id="contact-message"
                            name="message"
                            className="contact--input contact--textarea"
                            placeholder="Write your message here..."
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <button
                        type="submit"
                        className="contact--submit"
                        disabled={isSubmitting}
                    >
                        <span>
                            {isSubmitting
                                ? "Sending..."
                                : "Send Message"}
                        </span>
                        {!isSubmitting && <span aria-hidden="true">↗</span>}
                    </button>

                    {statusMessage && (
                        <p
                            className={`contact--status contact--status--${statusType}`}
                            role="status"
                            aria-live="polite"
                        >
                            {statusMessage}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
