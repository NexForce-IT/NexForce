export const metadata = {
  title: "Impressum | NexForce IT",
  description: "Impressum und Anbieterkennzeichnung der NexForce-IT UG (haftungsbeschränkt)",
};

export default function Impressum() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#0066FF]/20 blur-[150px]" />
        <div className="pointer-events-none absolute top-20 right-[-250px] w-[500px] h-[500px] rounded-full bg-[#0066FF]/10 blur-[150px]" />

        <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-5 h-[5px] rounded-full bg-[#0066FF]" />
            <span className="text-[#0066FF] font-bold text-[11px] md:text-[13px] tracking-[2px] uppercase">
              Rechtliche Informationen
            </span>
          </div>

          <h1 className="font-bold text-[42px] sm:text-[52px] md:text-[64px] xl:text-[76px] leading-[0.95] uppercase max-w-[1000px]">
            Impressum
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="relative pb-24 2xl:pb-0">
        <div className="max-w-[1150px] mx-auto px-5 sm:px-8 lg:px-10 space-y-6">
          <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#03060F] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="pointer-events-none absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-[#0066FF]/10 blur-[130px]" />

            <div className="relative z-10 privacy-content">
              <h3 style={{ marginTop: 0 }}>Angaben gemäß § 5 DDG</h3>
              <p>
                <strong className="text-white">
                  NexForce-IT UG (haftungsbeschränkt)
                </strong>
                <br />
                Eduard-Mörike-Str. 10
                <br />
                63477 Maintal
              </p>

              <p>
                Handelsregister: HRB 101579
                <br />
                Registergericht: Amtsgericht Hanau
              </p>

              <p>
                <strong className="text-white">Vertreten durch:</strong>
                <br />
                Nomer Malik 
               
              </p>

              <h3>Kontakt</h3>
                <p>
                  Telefon:{" "}
                  <a
                    href="tel:+4961099660113"
                    className="text-[#0066FF] hover:text-white transition-colors"
                  >
                    +49 6109 9660113
                  </a>
                  <br />
                E-Mail:{" "}
                <a
                  href="mailto:info@nexforce-it.com"
                  className="text-[#0066FF] hover:text-white transition-colors"
                >
                  info@nexforce-it.com
                </a>
              </p>

              <h3>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h3>
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>


              <p>
                Quelle:{" "}
                <a
                    href="https://www.e-recht24.de/impressum-generator.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0066FF] hover:text-white transition-colors"
                >
                    https://www.e-recht24.de/impressum-generator.html
                </a>
                </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
