export default function CookiesPage() {
  return (
    <div className="bg-brand-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-16 border-b border-gray-100 pb-12">
            <span className="text-brand-gold font-bold tracking-widest uppercase text-sm block mb-4">Digital Transparency</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-brand-onyx mb-6">Cookie <span className="text-brand-gold">Policy</span></h1>
            <p className="text-gray-500 text-xl font-light">Enhancing your digital safari experience.</p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none space-y-12">
          <section className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                    <span className="font-bold text-xl">01</span>
                </div>
                <h2 className="text-3xl font-heading font-bold text-brand-onyx m-0">What are Cookies?</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Cookies are small text files that are stored on your device when you visit Desert Safari Qatar. They help us remember your preferences, keep your session secure, and understand how you interact with our luxury collections.
            </p>
          </section>

          <section className="space-y-4 pt-8">
            <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                    <span className="font-bold text-xl">02</span>
                </div>
                <h2 className="text-3xl font-heading font-bold text-brand-onyx m-0">How We Use Them</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-brand-onyx text-white rounded-3xl border border-brand-gold/20">
                    <h3 className="text-brand-gold font-bold mb-4">Essential Cookies</h3>
                    <p className="text-sm opacity-80 leading-relaxed">Necessary for the website to function. These handle secure logins via Clerk and maintain your language settings in Qatar.</p>
                </div>
                <div className="p-8 bg-gray-50 text-brand-onyx rounded-3xl border border-gray-100">
                    <h3 className="font-bold mb-4">Experience Cookies</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">These allow us to show you tours you've recently viewed and remember your luxury preferences for the next visit.</p>
                </div>
            </div>
          </section>

          <section className="space-y-4 pt-8">
            <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                    <span className="font-bold text-xl">03</span>
                </div>
                <h2 className="text-3xl font-heading font-bold text-brand-onyx m-0">Analytics & Insights</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We use third-party analytics (like Google Analytics) to measure the traffic and usage trends of our desert journal and booking flow. This information is processed in an aggregate, anonymized way.
            </p>
          </section>

          <section className="bg-brand-gold/5 p-10 rounded-[3rem] border border-brand-gold/20 mt-16 text-center">
            <h2 className="text-2xl font-heading font-bold text-brand-onyx mb-4">Managing Your Preferences</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              You can choose to disable cookies through your browser settings. However, please note that elements of the "Live Chat" and "Signature Booking" may not function as intended.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                 <div className="px-6 py-3 bg-brand-onyx text-white rounded-full text-xs font-bold tracking-widest uppercase">Safari Settings</div>
                 <div className="px-6 py-3 bg-brand-onyx text-white rounded-full text-xs font-bold tracking-widest uppercase">Chrome Settings</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
