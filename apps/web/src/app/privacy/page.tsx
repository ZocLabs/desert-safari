export default function PrivacyPage() {
  return (
    <div className="bg-brand-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-16 text-center">
            <span className="text-brand-gold font-bold tracking-widest uppercase text-sm block mb-4">Your Trust is Our Asset</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-brand-onyx mb-6">Privacy <span className="text-brand-gold">Policy</span></h1>
            <div className="w-24 h-1 bg-brand-gold mx-auto" />
        </div>

        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
             <div className="md:col-span-4">
                <h2 className="text-2xl font-heading font-bold text-brand-onyx sticky top-32">01. Data We Collect</h2>
             </div>
             <div className="md:col-span-8 text-gray-600 space-y-4">
                <p>We collect information necessary to provide a bespoke desert experience:</p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-xl">
                        <p className="font-bold text-brand-onyx text-sm uppercase mb-1 tracking-tighter">Identity</p>
                        <p className="text-xs">Full Name, Passport Number (for insurance), Nationality.</p>
                    </div>
                     <div className="p-4 bg-gray-50 rounded-xl">
                        <p className="font-bold text-brand-onyx text-sm uppercase mb-1 tracking-tighter">Contact</p>
                        <p className="text-xs">WhatsApp number, Email, Hotel Location in Doha.</p>
                    </div>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
             <div className="md:col-span-4">
                <h2 className="text-2xl font-heading font-bold text-brand-onyx sticky top-32">02. How We Use It</h2>
             </div>
             <div className="md:col-span-8 text-gray-600 leading-relaxed">
                <p>Your data is exclusively used for:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Confirming your "Concierge" booking request.</li>
                    <li>Notifying our drivers of your pick-up coordinates.</li>
                    <li>Ensuring compliance with Qatari National Security regulations for border-zone entry (Inland Sea).</li>
                </ul>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
             <div className="md:col-span-4">
                <h2 className="text-2xl font-heading font-bold text-brand-onyx sticky top-32">03. Security Standards</h2>
             </div>
             <div className="md:col-span-8 bg-brand-onyx p-8 rounded-3xl text-white">
                <p className="mb-6 opacity-80">We employ bank-grade encryption for all transaction data.</p>
                <div className="flex items-center gap-4 text-brand-gold">
                    <div className="h-2 w-2 rounded-full bg-brand-gold" />
                    <span className="text-sm font-bold uppercase tracking-widest">SSL Encrypted</span>
                </div>
                 <div className="flex items-center gap-4 text-brand-gold mt-2">
                    <div className="h-2 w-2 rounded-full bg-brand-gold" />
                    <span className="text-sm font-bold uppercase tracking-widest">GDPR Compliant</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
