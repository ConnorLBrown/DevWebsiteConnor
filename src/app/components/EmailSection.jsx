"use client"
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-8 relative">
      {/* Left Column */}
      <div className="md:col-span-1">
        <div className="max-w-md">
          <div className="mb-12 md:mb-0">
            <h2 className="capitalize relative text-transparent font-sans mb-4 text-5xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>Connect</h2>
            <p className="text-gray-600 text-lg mb-8">
              I'm currently looking for new opportunities, my inbox is always open.
              If you have any questions do not hesitate to reach out. I'll try my best to get back to you as soon as possible.
            </p>
            <div className="socials flex flex-row gap-2 mb-8">
            <Link href="https://github.com/ConnorL_Brown">
                <Image src={GithubIcon} alt="Github Icon" style={{ backgroundColor:"slate-500" }} />
              </Link>
              <Link href="https://linkedin.com/in/your-profile">
                <Image src={LinkedinIcon} alt="Linkedin Icon" style={{ backgroundColor:"slate-500" }} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="md:col-span-1">
        {!emailSubmitted ? (
          <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-gray-800 block mb-2 font-medium">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="border border-gray-300 placeholder-gray-500 text-gray-800 text-sm rounded-lg block w-full p-2.5"
                placeholder="youremail@google.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-gray-800 block mb-2 font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="border border-gray-300 placeholder-gray-500 text-gray-800 text-sm rounded-lg block w-full p-2.5"
                placeholder="Type the subject of your message here"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-gray-800 block mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="border border-gray-300 placeholder-gray-500 text-gray-800 text-sm rounded-lg block w-full p-2.5"
                placeholder="Type out your message here"
              />
            </div>
            <button
              type="submit"
              className="bg-slate-700 hover:bg-primary-500 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        ) : (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
