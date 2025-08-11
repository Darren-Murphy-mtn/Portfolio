import { Mail } from 'lucide-react';

export default function ContactCard() {
  return (
    <div className="mx-auto max-w-md text-center">
      <p>You can reach me directly via email:</p>
      <a
        href="mailto:darren@example.com"
        className="mt-4 inline-flex items-center gap-2 rounded bg-accentProject px-4 py-2 font-medium text-white hover:bg-accentProject/90 focus-visible:outline focus-visible:outline-2"
      >
        <Mail className="h-4 w-4" /> darren@example.com
      </a>
      {/*
      Uncomment the form below and replace YOUR_ENDPOINT with Formspree or Formsubmit to enable contact form.
      <form
        action="https://formspree.io/f/YOUR_ENDPOINT"
        method="POST"
        className="mt-6 flex flex-col gap-4"
      >
        <input name="name" placeholder="Name" required className="rounded border border-muted/30 p-2" />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="rounded border border-muted/30 p-2"
        />
        <textarea
          name="message"
          rows={4}
          placeholder="Message"
          required
          className="rounded border border-muted/30 p-2"
        />
        <button type="submit" className="rounded bg-accentProject px-4 py-2 text-white hover:bg-accentProject/90">
          Send
        </button>
      </form>
      */}
    </div>
  );
}