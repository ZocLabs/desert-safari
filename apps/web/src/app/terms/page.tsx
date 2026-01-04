import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="bg-brand-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-16 border-b border-gray-100 pb-12">
            <span className="text-brand-gold font-bold tracking-widest uppercase text-sm block mb-4">Legal Framework</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-brand-onyx mb-6">Terms & <span className="text-brand-gold">Conditions</span></h1>
            <p className="text-gray-500 text-xl font-light">Last updated: January 2026</p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none space-y-12">
          <section className="space-y-4">
            <h2 className="text-3xl font-heading font-bold text-brand-onyx flex items-center gap-4">
                <span className="text-brand-gold">01.</span> Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using the services provided by Desert Safari Qatar, you acknowledge that you have read, understood, and agree to be bound by these terms. Our tours operate under the jurisdiction of the State of Qatar.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-heading font-bold text-brand-onyx flex items-center gap-4">
                <span className="text-brand-gold">02.</span> Booking & Reservations
            </h2>
            <p className="text-gray-600 leading-relaxed">
               All bookings are subject to availability and confirmation. A valid credit card or advance payment via our official payment partners is required to secure a "Signature Journey". 
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Prices are quoted in Qatari Riyals (QAR).</li>
                <li>Private tours require a minimum 48-hour notice for customization.</li>
                <li>Group tours operate on a fixed schedule.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-heading font-bold text-brand-onyx flex items-center gap-4">
                <span className="text-brand-gold">03.</span> Cancellation Policy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-brand-onyx text-white rounded-2xl">
                    <h4 className="font-bold text-brand-gold mb-2">Full Refund</h4>
                    <p className="text-sm border-l-2 border-brand-gold pl-4">Cancellations made more than 72 hours before the scheduled departure.</p>
                </div>
                <div className="p-6 bg-gray-50 text-brand-onyx rounded-2xl">
                    <h4 className="font-bold mb-2">No Refund</h4>
                    <p className="text-sm border-l-2 border-brand-onyx pl-4">Cancellations made less than 24 hours before departure or no-shows.</p>
                </div>
            </div>
          </section>

          <section className="space-y-4 bg-brand-gold/5 p-8 rounded-3xl border border-brand-gold/20">
            <h2 className="text-3xl font-heading font-bold text-brand-onyx flex items-center gap-4">
                <span className="text-brand-gold">04.</span> Participant Responsibility
            </h2>
            <p className="text-gray-600 leading-relaxed italic">
              "The desert is a powerful force. Respecting its boundaries ensures the safety of all."
            </p>
            <p className="text-gray-600 leading-relaxed">
              Participants must follow the safety instructions of the desert guides at all times. Desert Safari Qatar reserves the right to refuse service to anyone who compromises the safety of the group.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
