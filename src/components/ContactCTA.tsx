import Image from "next/image";

const contactDetails = [
  { label: "General Enquiries", value: "spain@hellmann.com", href: "mailto:spain@hellmann.com" },
  { label: "Phone", value: "+34 93 000 0000", href: "tel:+34930000000" },
  { label: "Headquarters", value: "Barcelona, Spain", href: "#locations" },
];

const inputClass =
  "w-full px-4 py-3 text-sm text-[#343a3f] bg-[#eceff2] placeholder-[#b1bdca] focus:outline-none focus:ring-2 focus:ring-[#004c99] transition-colors";

export default function ContactCTA() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80"
        alt="Contact Hellmann Spain"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,76,153,0.93) 0%, rgba(60,91,123,0.90) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <p
              className="text-sm font-medium uppercase tracking-[0.2em] mb-4"
              style={{ color: "#b1bdca" }}
            >
              Get in Touch
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to Move
              <br />
              Your Business Forward?
            </h2>
            <p className="text-base text-white/70 leading-relaxed mb-10 max-w-md">
              Our Spain team is ready to design a logistics solution around your
              needs. Get in touch and one of our experts will respond within
              one business day.
            </p>

            <div className="space-y-5">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="text-xs uppercase tracking-wider text-white/40 w-32 flex-shrink-0">
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-white hover:text-white/70 transition-colors"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form card — white surface with styleguide form components */}
          <div className="bg-white p-8">
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#343a3f] mb-1.5">
                    First Name
                  </label>
                  <input type="text" placeholder="First Name" className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#343a3f] mb-1.5">
                    Last Name
                  </label>
                  <input type="text" placeholder="Last Name" className={inputClass} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#343a3f] mb-1.5">
                  Business Email
                </label>
                <input type="email" placeholder="your@company.com" className={inputClass} />
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#343a3f] mb-1.5">
                  Company
                </label>
                <input type="text" placeholder="Company name" className={inputClass} />
              </div>

              {/* Select — matches styleguide select component */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#343a3f] mb-1.5">
                  Product
                </label>
                <div className="relative">
                  <select
                    className="w-full px-4 py-3 text-sm text-[#343a3f] bg-[#eceff2] focus:outline-none focus:ring-2 focus:ring-[#004c99] transition-colors appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>Please choose a Product</option>
                    <option value="air">Air Freight</option>
                    <option value="sea">Sea Freight</option>
                    <option value="road">Road Freight</option>
                    <option value="contract">Contract Logistics</option>
                  </select>
                  <svg
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b1bdca] pointer-events-none"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#343a3f] mb-1.5">
                  Message
                </label>
                <textarea
                  placeholder="How can we help?"
                  rows={4}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Primary button — Ocean blue per styleguide */}
              <button
                type="submit"
                className="w-full py-3.5 font-bold uppercase tracking-wider text-white text-sm bg-[#004c99] hover:bg-[#3c5b7b] transition-colors duration-150"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
