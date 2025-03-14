"use client";

import React, { useState } from "react";
import DescriptionSection from "./DescriptionSection";

const ContactForm = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Extract form values
    const firstName = e.currentTarget["first-name"].value;
    const lastName = e.currentTarget["last-name"].value;
    const email = e.currentTarget.email.value;
    const message = e.currentTarget.message.value;

    // Check if any field is empty
    if (!firstName || !lastName || !email || !message) {
      setError("All fields are required.");
      return;
    }

    // Email regex to validate the format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Reset error message
    setError(null);

    // Prepare data for sending
    const data = { firstName, lastName, email, message };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/resend";

    // Prepare the request
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    // Send data to the server
    const response = await fetch(endpoint, options);

    // Handle response
    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    } else {
      setError("Failed to send message. Please try again later.");
    }
  };

  return (
    <section className="container-x px-8 py-16">
      <DescriptionSection
        title="Reach out to me"
        subtitle="Contact"
        description="Fill out the form below to send me a message."
      />

      <div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md container mx-auto border border-gray-300">
          <div className="p-6 grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            {/* Contact Information Section */}
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <p className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white mb-2">
                Contact Information
              </p>
              <p className="block antialiased font-sans font-normal text-inherit mx-auto mb-8 text-base text-white">
                Answer may take a while. Please be patient.
              </p>
              <div className="flex my-2 gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6 text-white"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
                </svg>
                <p className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white mb-2">
                  mail@milankiele.com
                </p>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  {/* First Name */}
                  <div className="relative w-full min-w-[200px] h-12 !min-w-full mb-3 md:mb-0">
                    <input
                      placeholder="Ben"
                      className="peer w-full h-full bg-transparent text-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-gray-50 disabled:border-0 transition-all border-b placeholder-shown:border-gray-200 text-sm px-px pt-5 pb-2 border-gray-200 focus:border-gray-900"
                      name="first-name"
                      disabled={emailSubmitted}
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500 transition-all -top-2.5 text-sm peer-focus:text-sm after:content[' '] after:block after:w-full after:absolute after:-bottom-2.5 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:border-gray-900">
                      First Name
                    </label>
                  </div>

                  {/* Last Name */}
                  <div className="relative w-full min-w-[200px] h-12 !min-w-full">
                    <input
                      placeholder="Kenobi"
                      className="peer w-full h-full bg-transparent text-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-gray-50 disabled:border-0 transition-all border-b placeholder-shown:border-gray-200 text-sm px-px pt-5 pb-2 border-gray-200 focus:border-gray-900"
                      name="last-name"
                      disabled={emailSubmitted}
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500 transition-all -top-2.5 text-sm peer-focus:text-sm after:content[' '] after:block after:w-full after:absolute after:-bottom-2.5 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:border-gray-900">
                      Last Name
                    </label>
                  </div>
                </div>

                {/* Email Input */}
                <div className="relative w-full min-w-[200px] h-12 !min-w-full mb-8">
                  <input
                    placeholder="eg. mail@milankiele.com"
                    className="peer w-full h-full bg-transparent text-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-gray-50 disabled:border-0 transition-all border-b placeholder-shown:border-gray-200 text-sm px-px pt-5 pb-2 border-gray-200 focus:border-gray-900"
                    name="email"
                    disabled={emailSubmitted}
                  />
                  <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500 transition-all -top-2.5 text-sm peer-focus:text-sm after:content[' '] after:block after:w-full after:absolute after:-bottom-2.5 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:border-gray-900">
                    Your Email
                  </label>
                </div>

                {/* Message Input */}
                <div className="relative w-full min-w-[200px] h-32 !min-w-full mb-3 md:mb-0 pb-6">
                  <textarea
                    placeholder="Message"
                    className="peer w-full h-full bg-transparent text-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-gray-50 disabled:border-0 transition-all border-b placeholder-shown:border-gray-200 text-sm px-px pt-5 pb-2 border-gray-200 focus:border-gray-900 resize-none"
                    name="message"
                    disabled={emailSubmitted}
                  />
                  <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500 transition-all -top-2.5 text-sm peer-focus:text-sm after:content[' '] after:block after:w-full after:absolute after:-bottom-2.5 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:border-gray-900">
                    Message
                  </label>
                </div>

                {/* Submit Button */}
                {!emailSubmitted && (
                  <button
                    type="submit"
                    className="w-full h-12 py-2 px-4 text-sm bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 transition-all"
                    disabled={emailSubmitted}
                  >
                    Submit
                  </button>
                )}
              </form>

              {/* Error message at the bottom */}
              {error && (
                <div className="mt-4 text-center text-red-600">
                  <p>{error}</p>
                </div>
              )}

              {/* Success message */}
              {emailSubmitted && (
                <div className="mt-4 text-center text-gray-700">
                  <p>Successfully Sent!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
