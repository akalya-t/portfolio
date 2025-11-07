const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8 text-center bg-[#f9f6f1]">
      <h2 className="text-3xl font-serif mb-6">
        Let’s Build Something Memorable
      </h2>

      <form
        action="https://formspree.io/f/meopydwo"
        method="POST"
        className="max-w-md mx-auto flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="border border-[#3c2f2f] p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#3c2f2f]"
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="border border-[#3c2f2f] p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#3c2f2f]"
        />

        <textarea
          name="message"
          rows="4"
          placeholder="Your message"
          required
          className="border border-[#3c2f2f] p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#3c2f2f]"
        ></textarea>

        <button
          type="submit"
          className="mt-2 border border-[#3c2f2f] px-6 py-3 rounded-full hover:bg-[#3c2f2f] hover:text-[#f9f6f1] transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
