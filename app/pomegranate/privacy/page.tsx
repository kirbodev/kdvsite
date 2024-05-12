import { Metadata } from "next";
import "./privacy.css";
import { ThemeSwitcher } from "@/components/themeSwitcher";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { CopyleftIcon } from "lucide-react";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Our Privacy Policy",
  keywords: ["privacy", "policy", "pomegranate"],
  icons: "/pomegranate.png",
};

export default function PrivacyPage() {
  return (
    <>
      <div className="absolute right-0 top-0 m-2">
        <ThemeSwitcher />
      </div>
      <TracingBeam className="px-6">
        <article className="page sans">
          <header>
            <div className="page-header-icon">
              <span className="icon">🔒</span>
            </div>
            <h1 className="page-title">Our Privacy Policy</h1>
            <p className="page-description"></p>
          </header>
          <div
            className="recent-changes"
            style={{
              borderLeft: "4px solid #ffc17a",
              borderRadius: "2px",
              paddingLeft: "1rem",
            }}
          >
            <h2>Recent Changes</h2>
            <p>
              We&apos;ve made some changes to our privacy policy since 10 April
              2024.
            </p>
            <ul className="bulleted-list">
              <li
                style={{
                  listStyleType: "disc",
                }}
              >
                We&apos;ve added the &quot;Artificial Intelligence&quot;
                section.
              </li>
              <li
                style={{
                  listStyleType: "disc",
                }}
              >
                No other changes have been made to the rest of our privacy
                policy.
              </li>
            </ul>
          </div>
          <div className="page-body">
            <h1>Privacy Policy</h1>
            <p>
              <em>Last updated: 12 May, 2024</em>
            </p>
            <p>
              Pomegranate, Pomelo, Dragon Fruit and the Pomegranate Devs
              (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) operate the
              kdv.one website and subdomains, Pomegranate, Dragon Fruit and
              Pomelo (the &quot;Service&quot;). This page informs you of our
              policies regarding the collection, use, and disclosure of Personal
              Information when you use our Service.
            </p>
            <p>
              We will not use or share your information with anyone except as
              described in this Privacy Policy. We use your Personal Information
              for providing and improving the Service. By using the Service, you
              agree to the collection and use of information in accordance with
              this policy.
            </p>
            <h2>Information Collection And Use</h2>
            <p>
              While using our Service, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you. Personally identifiable information (&quot;Personal
              Information&quot;) may include, but is not limited to:
            </p>
            <ul className="bulleted-list">
              <li
                style={{
                  listStyleType: "disc",
                }}
              >
                Discord user ID
              </li>
            </ul>
            <ul className="bulleted-list">
              <li
                style={{
                  listStyleType: "disc",
                }}
              >
                Discord username
              </li>
            </ul>
            <ul className="bulleted-list">
              <li
                style={{
                  listStyleType: "disc",
                }}
              >
                Discord Avatar
              </li>
            </ul>
            <ul className="bulleted-list">
              <li
                style={{
                  listStyleType: "disc",
                }}
              >
                Discord Banner
              </li>
            </ul>
            <ul className="bulleted-list">
              <li
                style={{
                  listStyleType: "disc",
                }}
              >
                Discord Profile Badges, referred to as User Flags
              </li>
            </ul>
            <ul className="bulleted-list">
              <li
                style={{
                  listStyleType: "disc",
                }}
              >
                Server IDs of the specified servers you&#x27;ve added the bot to
              </li>
            </ul>
            <ul className="bulleted-list">
              <li
                style={{
                  listStyleType: "disc",
                }}
              >
                Warns, Kicks, Bans, Mutes, and coherant moderation actions taken
                upon you in guilds
              </li>
            </ul>
            <ul className="bulleted-list">
              <li
                style={{
                  listStyleType: "disc",
                }}
              >
                Messages and their content, including ones that you have edited
                or deleted
              </li>
            </ul>
            <p>
              We collect this information for the purpose of providing the
              Service, identifying and communicating with you, responding to
              your requests/inquiries, and improving our services.
            </p>
            <h2>Artificial Intelligence</h2>
            <p>
              We use the Gemini AI platform to power the Sentience module of our
              services. As such, when you interact with the Sentience module by
              pinging one of our bots, some of your information may be shared
              and processed by the Gemini AI platform. Your information may be
              used to train AI models, which are not affiliated with us. This
              information includes:
            </p>
            <ul className="bulleted-list">
              <li
                style={{
                  listStyleType: "disc",
                }}
              >
                Message content
              </li>
            </ul>
            <ul className="bulleted-list">
              <li
                style={{
                  listStyleType: "disc",
                }}
              >
                Your discord username
              </li>
            </ul>
            <p>
              Your privacy rights mentioned in the &quot;What are your privacy
              rights?&quot; do not apply here, as we do not have access to your
              data. If you do not wish to have your data shared with the Gemini
              AI platform, do not interact with the Sentience module.
              Interacting with the Sentience module will be seen as an
              acknowledgement of your agreement to this section. You can find
              more information about how your data is used in the{" "}
              <a
                href="https://ai.google.dev/gemini-api/terms#data-use-unpaid"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gemini API Terms of Service
              </a>{" "}
              and the{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Privacy Policy
              </a>
              .
            </p>
            <figure
              className="block-color-gray_background callout"
              style={{
                whiteSpace: "pre-wrap",
                display: "flex",
              }}
            >
              <div
                style={{
                  fontSize: "1.5em",
                }}
              >
                <span className="icon">❗</span>
              </div>
              <div
                style={{
                  width: "100%",
                }}
              >
                Disclaimer: AI models are not 100% accurate and could provide
                inaccurate or offensive responses that don&apos;t reflect our
                views. We are not responsible for any misuse of the data
                provided by the AI models. Do not rely on the data for any type
                of professional advice.
              </div>
            </figure>
            <h2>On what legal bases do we process your information?</h2>
            <p>
              <em>
                If you are located in the EU or UK, this section applies to you.
              </em>
              <br />
              The General Data Protection Regulation (GDPR) and UK GDPR require
              us to explain the valid legal bases we rely on in order to process
              your personal information. As such, we may rely on the following
              legal bases to process your personal information:
              <br />
            </p>
            <ul className="bulleted-list">
              <li
                style={{
                  listStyleType: "disc",
                }}
              >
                Consent. We may process your information if you have given us
                permission (i.e., consent) to use your personal information for
                a specific purpose. You can withdraw your consent at any time.
                Learn more about withdrawing your consent.
              </li>
            </ul>
            <ul className="bulleted-list">
              <li
                style={{
                  listStyleType: "disc",
                }}
              >
                Legitimate Interests. We may process your information when we
                believe it is reasonably necessary to achieve our legitimate
                business interests and those interests do not outweigh your
                interests and fundamental rights and freedoms. For example, we
                may process your personal information for some of the purposes
                described in order to:
                <ul className="bulleted-list">
                  <li
                    style={{
                      listStyleType: "circle",
                    }}
                  >
                    Analyze how our Services are used so we can improve them to
                    engage and retain users
                    <br />
                    Diagnose problems and/or prevent fraudulent activities
                    <br />
                  </li>
                </ul>
                <ul className="bulleted-list">
                  <li
                    style={{
                      listStyleType: "circle",
                    }}
                  >
                    Understand how our users use our products and services so we
                    can improve user experience
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="bulleted-list">
              <li
                style={{
                  listStyleType: "disc",
                }}
              >
                Vital Interests. We may process your information where we
                believe it is necessary to protect your vital interests or the
                vital interests of a third party, such as situations involving
                potential threats to the safety of any person.
              </li>
            </ul>
            <ul className="bulleted-list">
              <li
                style={{
                  listStyleType: "disc",
                }}
              >
                Legal Obligations. We may process your information where we
                believe it is necessary for compliance with our legal
                obligations, such as to cooperate with a law enforcement body or
                regulatory agency, exercise or defend our legal rights, or
                disclose your information as evidence in litigation in which we
                are involved.
              </li>
            </ul>
            <h2>How long do we keep your information?</h2>
            <p>
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this privacy notice, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting, or other legal requirements). We do not have a
              scheduled deletion time but we can delete your information upon
              request. Message content will not be accessible to any user after
              1 day of your initial message being stored and deleted within a
              reasonable time period following that to protect your privacy.
            </p>
            <p>
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymize such
              information, or, if this is not possible (for example, because
              your personal information has been stored in backup archives),
              then we will securely store your personal information and isolate
              it from any further processing until deletion is possible.
            </p>
            <h2>Is your information transferred internationally?</h2>
            <p>
              Our servers are located in the United States and Ireland. Please
              be aware that your information may be transferred to, stored, and
              processed by us in our facilities and by those third parties with
              whom we may share your personal information, in the United States,
              Ireland, and other countries.
            </p>
            <p>
              If you are a resident in the European Economic Area (EEA), United
              Kingdom (UK), or Switzerland, then these countries may not
              necessarily have data protection laws or other similar laws as
              comprehensive as those in your country. However, we will take all
              necessary measures to protect your personal information in
              accordance with this privacy notice and applicable law.
              <br />
              <br />
              <em>European Commission&#x27;s Standard Contractual Clauses:</em>
              <br />
              We have implemented measures to protect your personal information,
              including by using the European Commission&#x27;s Standard
              Contractual Clauses for transfers of personal information between
              our group companies and between us and our third-party providers.
              These clauses require all recipients to protect all personal
              information that they process originating from the EEA or UK in
              accordance with European data protection laws and regulations.
              <br />
            </p>
            <h2>What are your privacy rights?</h2>
            <p>
              In some regions (like the EEA, UK, and Switzerland), you have
              certain rights under applicable data protection laws. These may
              include:
            </p>
            <ul className="bulleted-list">
              <li
                style={{
                  listStyleType: "disc",
                }}
              >
                The right (i) to request access and obtain a copy of your
                personal information
              </li>
            </ul>
            <ul className="bulleted-list">
              <li
                style={{
                  listStyleType: "disc",
                }}
              >
                (ii) to request rectification or erasure
              </li>
            </ul>
            <ul className="bulleted-list">
              <li
                style={{
                  listStyleType: "disc",
                }}
              >
                (iii) to restrict the processing of your personal information
              </li>
            </ul>
            <ul className="bulleted-list">
              <li
                style={{
                  listStyleType: "disc",
                }}
              >
                (iv) if applicable, to data portability
              </li>
            </ul>
            <ul className="bulleted-list">
              <li
                style={{
                  listStyleType: "disc",
                }}
              >
                and (v) not to be subject to automated decision-making.
              </li>
            </ul>
            <p>
              In certain circumstances, you may also have the right to object to
              the processing of your personal information. You can make such a
              request by contacting us by using the contact details provided in
              the section &quot;Contact Us&quot; below.
            </p>
            <figure
              className="block-color-gray_background callout"
              style={{
                whiteSpace: "pre-wrap",
                display: "flex",
              }}
            >
              <div
                style={{
                  fontSize: "1.5em",
                }}
              >
                <span className="icon">⚠️</span>
              </div>
              <div
                style={{
                  width: "100%",
                }}
              >
                Warning: Taking certain actions such as erasure of data,
                restricting the processing of your information, and not being
                subject to automated decision-making can lead to a guild ban on
                your discord account in each guild you share with the service.
                These actions prevent our provision of the service and the
                protection of the guilds the service is involved in. You will be
                informed before this occurs.
              </div>
            </figure>
            <h2>Log Data</h2>
            <p>
              We may also collect information that your browser sends whenever
              you visit our Service (&quot;Log Data&quot;). This Log Data may
              include information such as your computer&#x27;s Internet Protocol
              (&quot;IP&quot;) address, browser type, browser version, the pages
              of our Service that you visit, the time and date of your visit,
              the time spent on those pages, speed analytics, and other
              statistics.
            </p>
            <h2>Security</h2>
            <p>
              The security of your Personal Information is important to us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is 100% secure. While we strive to
              use commercially acceptable means to protect your Personal
              Information, we cannot guarantee its absolute security. No
              personal information aside from public access Discord Profile
              information, any information granted to use by you via our
              Authorized App, or any information mentioned in the “Information
              Collection and Use” section will ever be collected.
            </p>
            <h2>Links To Other Sites</h2>
            <p>
              Our Service may contain links to other sites that are not operated
              by us. If you click on a third-party link, you will be directed to
              that third party&#x27;s site. We strongly advise you to review the
              Privacy Policy of every site you visit.
            </p>
            <h2>Changes To This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
            <h2>Contact Us</h2>
            <p>
              Based on the applicable laws of your country, you may have the
              right to request
              <br />
              access to the personal information we collect from you, change
              that information, or
              <br />
              delete it. To request to review, update, delete your personal
              information or just ask a question, please contact us using one of
              the following methods:
              <br />
            </p>
            <ul className="bulleted-list">
              <li
                style={{
                  listStyleType: "disc",
                }}
              >
                By contact form:{" "}
                <a href="http://www.kdv.one/#contact">http://www.kdv.one/</a>
              </li>
            </ul>
            <ul className="bulleted-list">
              <li
                style={{
                  listStyleType: "disc",
                }}
              >
                By email: <a href="mailto:data@kdv.one">data@kdv.one</a>
              </li>
            </ul>
            <ul className="bulleted-list">
              <li
                style={{
                  listStyleType: "disc",
                }}
              >
                By discord:
                <ul className="bulleted-list">
                  <li
                    style={{
                      listStyleType: "circle",
                    }}
                  >
                    @kdv_ (User ID: 695228246966534255)
                  </li>
                </ul>
                <ul className="bulleted-list">
                  <li
                    style={{
                      listStyleType: "circle",
                    }}
                  >
                    @dunkelrot (User ID: 980280857958965328)
                  </li>
                </ul>
              </li>
            </ul>
            <p></p>
          </div>
        </article>
      </TracingBeam>
      <Footer />
    </>
  );
}
