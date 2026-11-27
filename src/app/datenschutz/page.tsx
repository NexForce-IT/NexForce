import Footer from "@/components/footer";
import link from "next/link";

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        Blue glow
        <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#0066FF]/20 blur-[150px]" />
        <div className="pointer-events-none absolute top-20 right-[-250px] w-[500px] h-[500px] rounded-full bg-[#0066FF]/10 blur-[150px]" />

        <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-5 h-[5px] rounded-full bg-[#0066FF]" />
            <span className="text-[#0066FF] font-bold text-[11px] md:text-[13px] tracking-[2px] uppercase">
              Legal information
            </span>
          </div>

          <h1 className="font-bold uppercase break-words hyphens-auto text-[calc(7vw)] leading-[calc(1em*1.15)] md:text-[50px] md:leading-[65px] lg:text-[60px] lg:leading-[75px] xl:text-[75px] xl:leading-[85px]" lang="de">
            Privacy Policy
          </h1>

          <p className="mt-8 max-w-[760px] text-white/65 text-[16px] md:text-[18px] leading-[1.7]">
            The following information gives you an overview of,
            what happens to your personal data when you
            Visit the website.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="relative pb-24 2xl:pb-0">
        <div className="max-w-[1150px] mx-auto px-5 sm:px-8 lg:px-10 space-y-6">

          {/* 01 */}
          <PrivacySection number="01" title="Data protection at a glance">
            <h3>General Information</h3>

            <p>
              The following information provides a simple overview of...
              what happens to your personal data when you
              Visit website. Personal data is any data relating to an identified or identifiable natural person.
              which can personally identify you. Detailed
              For information on data protection, please see our [link/section/etc.]
              Privacy policy listed in this text.
            </p>

            <h3>Data collection on this website</h3>

            Who is responsible for data collection on this website?

            <p>
              Data processing on this website is carried out by the
              Website operator. Their contact details can be found in the section
              “Note regarding the responsible body” in this
              See privacy policy.
            </p>

            How do we collect your data?

            <p>
              Your data is collected, firstly, because you provide this to us.
              inform us. This could include, for example, data that you
              Enter your information into a contact form.
            </p>

            <p>
              Other data is automatically or with your consent when
              Website visits are recorded by our IT systems. This includes...
              all technical data (e.g. internet browser, operating system)
              or the time of the page view). The collection of this data
              This happens automatically as soon as you enter this website.
            </p>

            <h4>What do we use your data for?</h4>

            <p>
              Some of the data is collected to ensure error-free provision.
              to ensure the website's functionality. Other data may be used for analysis.
              Your user behavior will be used. If you use the website
              Contracts can be concluded or initiated, the
              transmitted data also for contract offers, orders or
              Other order requests processed.
            </p>

            <h4>What rights do you have regarding your data?</h4>

            <p>
              You have the right to request information free of charge at any time about
              Origin, recipients and purpose of your stored data
              to receive personal data. You also have a right
              to the correction or deletion of this data. If you have a
              If you have given your consent to data processing, you can
              You may revoke this consent at any time for the future.
              Furthermore, you have the right, under certain circumstances, to
              Restriction of the processing of your personal data
              demand. Furthermore, you have the right to lodge a complaint with the
              to the competent supervisory authority.
            </p>

            <p>
              For this and other questions regarding data protection, you can
              Please feel free to contact us at any time.
            </p>
          </PrivacySection>

          {/* 02 */}
          <PrivacySection number="02" title="Hosting">
            <p>
              We host the content of our website with the following provider:
            </p>

            <h3>IONOS</h3>

            <p>
              The provider is IONOS SE, Elgendorfer Str. 57, 56410 Montabaur
              (hereinafter IONOS). When you visit our website, data is collected.
              IONOS stores various log files, including your IP addresses. Details
              Please refer to the IONOS privacy policy:
            </p>

            <p>
              <a
                href="https://www.ionos.de/terms-gtc/terms-privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0066FF] hover:text-white transition-colors break-all"
              >
                https://www.ionos.de/terms-gtc/terms-privacy
              </a>
            </p>

            <p>
              The use of IONOS is based on Article 6, paragraph 1.
              lit. f GDPR. We have a legitimate interest in a
              to ensure the most reliable presentation of our website. If a
              Once the appropriate consent has been requested, the
              Processing is carried out exclusively on the basis of Article 6(1)(a).
              a GDPR and Section 25 Paragraph 1 TDDDG, insofar as the consent
              Storing cookies or accessing information in
              User's end device (e.g., device fingerprinting) within the meaning of
              TDDDG is included. Consent can be revoked at any time.
            </p>

            <h4>Order processing</h4>

            <p>
              We have a data processing agreement (DPA) for
              Use of the above-mentioned service is closed. This is a matter of
              it is a contract required under data protection law,
              which ensures that this personal data
              Our website visitors only according to our instructions and under
              Processed in compliance with the GDPR.
            </p>
          </PrivacySection>

          {/* 03 */}
          <PrivacySection
            number="03"
            title="General Information and Mandatory Disclosures"
          >
            <h3>Data protection</h3>

            <p>
              The operators of these pages take the protection of your personal data seriously.
              We take data very seriously. We treat your personal data with respect.
              confidential and in accordance with legal requirements
              Data protection regulations and this privacy policy.
            </p>

            <p>
              When you use this website, various
              Personal data is collected. Personal data is
              Data that can be used to personally identify you.
              This privacy policy explains what data we collect.
              collect data and what we use it for. She also explains how and to
              for what purpose this is done.
            </p>

            <p>
              We would like to point out that data transmission on the Internet (e.g.
              B. in communication via e-mail) have security vulnerabilities
              can. Complete protection of the data from access by
              A third option is not possible.
            </p>

            <h3>Note regarding the responsible body</h3>

            <p>
              The responsible body for data processing on this
              Website is:
            </p>

            {/* Company information */}
            <div className="my-8 rounded-2xl border border-white/10 bg-[#03060F] p-6 md:p-8">
              <p className="!mb-2 !text-white !font-semibold">
                NexForce-IT UG (limited liability)
              </p>

              <p className="!mb-0">
                represented by the managing director
                <br />
                Nomer Ahmed Malik
                <br />
                Eduard-Mörike-Str. 10
                <br />
                63477 Maintal, Germany
                <br />
                <br />
                  Telephone:{" "}
                  <a
                    href="tel:+4961099660113"
                    className="text-[#0066FF] hover:text-white transition-colors"
                  >
                    +49 6109 9660113
                  </a>
                  <br />
                Email:{" "}
                <a
                  href="mailto:info@nexforce-it.com"
                  className="text-[#0066FF] hover:text-white transition-colors"
                >
                  info@nexforce-it.com
                </a>
              </p>
            </div>

            <p>
              The responsible body is the natural or legal person
              Person who, alone or jointly with others, considers the purposes
              and means of processing personal data (e.g.
              names, email addresses, etc.) decides.
            </p>

            <h3>Storage duration</h3>

            <p>
              Unless otherwise specified within this privacy policy
              As stated above, your personal data will remain stored for a certain period.
              We retain your data until the purpose for processing it no longer applies.
              If you are making a legitimate request for erasure or a
              If you withdraw your consent to data processing, your data will be deleted.
              deleted unless we have other legally permissible reasons
              for the storage of your personal data (e.g.
              tax or commercial law retention periods); in
              In the latter case, deletion occurs after this [reason] ceases to exist.
              Reasons.
            </p>

            <h3>
              General information on the legal basis for data processing
              on this website
            </h3>

            <p>
              Provided you have consented to the data processing,
              We process your personal data on the basis of
              Article 6 paragraph 1 letter a GDPR or Article 9 paragraph 2 letter a GDPR,
              provided that special categories of data are processed in accordance with Article 9(1) GDPR
              will be processed. In the case of explicit consent.
              the transfer of personal data to third countries
              Data processing is also carried out on the basis of Article 49.
              Article 1(a) GDPR. If you consent to the storage of cookies
              or access to information on your device (e.g., via
              If you have consented to device fingerprinting, the process will take place.
              Data processing is additionally based on Section 25 Paragraph 1 TDDDG.
              Consent can be withdrawn at any time. Are your data for
              Contract fulfillment or for the performance of pre-contractual
              If measures are necessary, we process your data on this basis
              of Article 6 paragraph 1 letter b GDPR. Furthermore, we process your
              Data, insofar as this is necessary for the fulfillment of a legal obligation
              are required on the basis of Art. 6 para. 1 lit. c GDPR.
              Data processing may also be based on our
              legitimate interest pursuant to Art. 6 para. 1 lit. f GDPR.
              Regarding the relevant legal bases in each individual case
              will be discussed in the following paragraphs of this privacy policy
              informed.
            </p>

            <h3>Recipients of personal data</h3>

            <p>
              As part of our business activities, we work with
              various external bodies. This also sometimes involves
              a transfer of personal data to these external parties
              Positions required. We only share personal data if
              to external bodies if this is done within the framework of a
              Contract fulfillment is required if we are legally obligated to do so.
              are obligated (e.g., to disclose data to
              tax authorities), if we have a legitimate interest under Article 6
              paragraph 1 letter f GDPR have consented to the transfer or if a
              other legal basis that permits data transfer. When used
              We do not disclose personal data of ours to data processors.
              Customers only on the basis of a valid contract regarding
              Order processing continues. In the case of joint
              Processing will be governed by a joint processing agreement.
              closed.
            </p>

            <h3>Revocation of your consent to data processing</h3>

            <p>
              Many data processing operations are only possible with your explicit consent.
              Consent is possible. You can revoke previously given consent.
              Withdraw your consent at any time. The legality of the data processed up to the
              Data processing carried out under a revocation remains unaffected by the revocation.
              untouched.
            </p>

            <h3>
              Right to object to data collection in special cases
              as well as against direct marketing (Art. 21 GDPR)
            </h3>

            <p className="uppercase">
              IF THE DATA PROCESSING IS BASED ON ART. 6 PARA. 1 LIT. E
              OR IF GDPR ACTIVATES, YOU HAVE THE RIGHT TO OBJECT TO PROCESSING YOUR PERSONAL DATA AT ANY TIME FOR REASONABLE REASONS.
              WHICH ARE RESULTING FROM THEIR PARTICULAR SITUATION, AGAINST THE
              OBJECTION TO THE PROCESSING OF YOUR PERSONAL DATA
              TO BE ENTERED IN; THIS ALSO APPLIES TO ANY RESOURCE RELATING TO THESE PROVISIONS
              SUPPORTED PROFILING. THE RESPECTIVE LEGAL BASIS ON WHICH
              PROCESSING IS RELIED, PLEASE REMEMBER THIS
              DATA PROTECTION DECLARATION. IF YOU OBJECT, WE WILL
              NO LONGER PROCESS YOUR PERSONAL DATA,
              UNLESS WE CAN PROVIDE COMPELLING, PROTECTIVE REASONS FOR THE
              PROOF OF PROCESSING THAT PROTECTS YOUR INTERESTS, RIGHTS AND
              FREEDOMS OUTWEIGHT OR THE PROCESSING SERVES THE
              Assertion, exercise or defense of legal claims
              (OBJECTION PURSUANT TO ART. 21 PARA. 1 GDPR).
            </p>

            <p className="uppercase">
              WILL YOUR PERSONAL DATA BE PROCESSED FOR DIRECT MARKETING?
              TO USE, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME
              THE PROCESSING OF PERSONAL DATA CONCERNING YOU FOR THE
              TO USE SUCH ADVERTISING FOR PURPOSES; THIS ALSO APPLIES TO THE
              PROFILING, IN IF IT IS CONNECTED WITH SUCH DIRECT ADVERTISING
              STANDS. IF YOU DISCLAIM, YOUR PERSONAL DATA WILL BE SUBJECT TO DISCLAIMER.
              DATA WILL NO LONGER BE USED FOR DIRECT MARKETING PURPOSES.
              USED ​​(OBJECTION PURSUANT TO ART. 21 PARA. 2 GDPR).
            </p>

            <h3>Right to lodge a complaint with the competent supervisory authority</h3>

            <p>
              In the event of violations of the GDPR, those affected have a right to legal redress.
              Right to lodge a complaint with a supervisory authority, in particular in the
              Member State of their habitual residence, their place of work
              or the place of the alleged violation. The right to appeal
              exists without prejudice to other administrative or
              judicial remedies.
            </p>

            <h3>Right to data portability</h3>

            <p>
              You have the right to access data that we process based on your
              consent or in fulfillment of a contract automated
              process, to oneself or to a third party in a commonly used,
              to have it provided in a machine-readable format. If you request the
              direct transfer of the data to another controller
              If requested, this will only be done to the extent that it is technically feasible.
            </p>

            <h3>Information, correction and deletion</h3>

            <p>
              They have within the framework of the applicable legal provisions
              You have the right to free information about your data at any time.
              stored personal data, its origin and
              Recipients and the purpose of data processing and, if applicable, a right
              for the correction or deletion of this data. For this purpose, as well as for
              For further questions regarding personal data, please contact us.
              Contact us anytime.
            </p>

            <h3>Right to restriction of processing</h3>

            <p>
              You have the right to restrict the processing of your
              to request personal data. You can do this by contacting us.
              You can contact us at any time. The right to restrict the
              Processing occurs in the following cases:
            </p>

            <ul>
              <li>
                If you wish to verify the accuracy of your data stored with us
                If you dispute the personal data, we generally require...
                Time to verify this. For the duration of the audit, you have
                You have the right to restrict the processing of your
                to request personal data.
              </li>

              <li>
                If the processing of your personal data is unlawful
                If this happened/is happening, you can, instead of deleting it,
                Request restriction of data processing.
              </li>

              <li>
                If we no longer need your personal data, you
                However, they are used for the exercise, defense, or assertion of
                If you require legal remedies, you have the right to, instead of the
                Deletion or restriction of processing of your data
                to request personal data.
              </li>

              <li>
                If you have lodged an objection pursuant to Article 21(1) GDPR
                There needs to be a balancing of your interests and ours.
                to be carried out. As long as it is not yet clear whose
                If your interests outweigh others, you have the right to restrict the restriction.
                to request the processing of your personal data.
              </li>
            </ul>

            <p>
              If you consent to the processing of your personal data
              If you have restricted this data, you may – from its storage –
              except – only with your consent or for the purpose of asserting,
              Exercise or defense of legal claims or for protection
              the rights of another natural or legal person or
              for reasons of important public interest of the
              will be processed within the European Union or a member state.
            </p>
          </PrivacySection>

          {/* 04 */}
          <PrivacySection
            number="04"
            title="Data collection on this website"
          >
            <h3>Server log files</h3>

            <p>
              The website provider automatically collects and stores data.
              Information in so-called server log files, which your browser
              automatically transmitted to us. These are:
            </p>

            <ul>
              <li>Browser type and browser version</li>
              <li>operating system used</li>
              <li>Referrer URL</li>
              <li>Hostname of the accessing computer</li>
              <li>Time of server request</li>
              <li>IP address</li>
            </ul>

            <p>
              A merging of this data with other data sources will
              not done.
            </p>

            <p>
              The collection of this data is based on Article 6, paragraph 1.
              Article 6(1)(f) GDPR. The website operator has a legitimate interest.
              Interest in the technically flawless presentation and the
              Website optimization – for this, the server log files must be analyzed.
              be recorded.
            </p>

            <h3>Contact form</h3>

            <p>
              If you send us inquiries via the contact form,
              Your information from the inquiry form, including the information you provided there
              The contact details provided are for the purpose of processing the request and for
              In case of follow-up questions, this data is stored with us.
              We will not share your information without your consent.
            </p>

            <p>
              This data is processed on the basis of Article 6.
              Article 1(b) GDPR, insofar as your request relates to the fulfillment of a
              related to the contract or for the implementation of pre-contractual measures
              Measures are required. In all other cases, the
              Processing based on our legitimate interest in effective
              Processing of requests addressed to us (Art. 6 para. 1 lit. f)
              GDPR) or based on your consent (Art. 6 para. 1 lit. a GDPR)
              provided that this was requested; consent can be withdrawn at any time
              revocable.
            </p>

            <p>
              The data you entered in the contact form will remain
              with us, until you request us to delete it, your consent
              to revoke consent to data storage or the purpose for data storage
              This is not necessary (e.g., after your request has been processed).
              Mandatory legal provisions – in particular
              Retention periods remain unaffected.
            </p>

            <h3>Inquiry via email, telephone or fax</h3>

            <p>
              If you contact us by email, telephone or fax,
              Your request, including all resulting information
              personal data (name, request) for the purpose of
              Your request will be stored and processed by us.
              We will not share this data without your consent.
            </p>

            <p>
              This data is processed on the basis of Article 6.
              Article 1(b) GDPR, insofar as your request relates to the fulfillment of a
              related to the contract or for the implementation of pre-contractual measures
              Measures are required. In all other cases, the
              Processing based on our legitimate interest in effective
              Processing of requests addressed to us (Art. 6 para. 1 lit. f)
              GDPR) or based on your consent (Art. 6 para. 1 lit. a GDPR)
              provided that this was requested; consent can be withdrawn at any time
              revocable.
            </p>

            <p>
              The data you send us via contact requests
              Your data will remain with us until you request its deletion.
              revoke consent to storage or change the purpose for which it was stored
              Data storage is not required (e.g., after processing is complete).
              Your request). Mandatory legal provisions –
              in particular statutory retention periods – remain
              untouched.
            </p>
          </PrivacySection>

          {/* 05 */}
          <PrivacySection number="05" title="IONOS WebAnalytics">
            <p>
              This website uses IONOS WebAnalytics for statistical analysis.
              Evaluation and technical optimization of our website.
            </p>

            <p>
              According to IONOS, the data is collected via a pixel or via
              Log files are analyzed. WebAnalytics does not use cookies.
              The IP address is transmitted when the page is requested and then
              immediately anonymized, so that the evaluation can be carried out without
              Personal data is collected.
            </p>

            <p>
              The following data can be recorded in particular: referrer, requested page
              or file, browser type and version, operating system,
              Device type, time of access, and IP address in
              anonymized form. IONOS publishes the data collected for web analytics.
              According to their own statement, they do not pass on data to third parties.
            </p>

            <p>
              The processing is based on Article 6(1)(f).
              GDPR. Our legitimate interest lies in statistical analysis.
              Evaluation and technical optimization of our website.
            </p>
          </PrivacySection>

          {/* 06 */}
          <PrivacySection number="06" title="Social Media">
            <h3>External links to Instagram and LinkedIn</h3>

            <p>
              This website contains only external links to
              our profiles on Instagram and LinkedIn. Simply visiting
              Our website does not establish any connection to the [unclear] via these links.
              The servers of the respective providers are used.
            </p>

            <p>
              Only when you click on such a link will you leave our site.
              Website and access the respective platform. From this point onwards
              The data processing will take place at that time according to the
              Privacy policy of the respective platform operator. On
              We have no influence over this processing.
            </p>
          </PrivacySection>

        </div>
      </section>
    </main>
  );
}


/* ================= REUSABLE SECTION ================= */

function PrivacySection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#03060F] p-6 sm:p-8 md:p-10 lg:p-12">

      Blue glow
      <div className="pointer-events-none absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-[#0066FF]/10 blur-[130px]" />

      <div className="relative z-10">

        {/* Section number */}
        <div className="flex items-center gap-4 mb-7">
          <span className="text-[#0066FF] text-[13px] md:text-[14px] font-bold tracking-[1px]">
            {number}
          </span>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        <h2 className="text-[25px] sm:text-[30px] md:text-[36px] font-bold leading-tight uppercase mb-8">
          {title}
        </h2>

        <div className="privacy-content">
          {children}
        </div>
      </div>
      
    </section>
    

  );
}
