"use client";

import Button from "../button";
import Separator from "../separator";

interface ContactSextionProps {
  id: string;
}

export default function ContactSection({ id }: ContactSextionProps) {
  return (
    <section id={id} className="flex min-h-screen flex-col items-center p-10">
      <h2 className="text-2xl font-bold">Contact</h2>
      <Separator />
      <p className="max-w-xl text-center">
        Want to discuss a project or exchange ideas? Contact me
      </p>
      <form className="flex w-full max-w-lg flex-1 flex-col justify-center space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            className="rounded-md border border-gray p-3 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-green"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            className="rounded-md border border-gray p-3 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-green"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            rows={6}
            className="rounded-md border border-gray p-3 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-green"
            required
          />
        </div>
        <Button type="submit">Send Message</Button>
      </form>
    </section>
  );
}
