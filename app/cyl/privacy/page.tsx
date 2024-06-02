import { Metadata } from "next";
import "./privacy.css";
import { ThemeSwitcher } from "@/components/themeSwitcher";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { CopyleftIcon } from "lucide-react";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Our Privacy Policy",
  keywords: ["privacy", "policy", "confirm", "youtube", "logout", "ycl"],
};

export default function PrivacyPage() {
  return (
    <>
      <div className="absolute right-0 top-0 m-2">
        <ThemeSwitcher />
      </div>
      <article className="page sans">
        <header>
          <div className="page-header-icon">
            <span className="icon">🔒</span>
          </div>
          <h1 className="page-title">Our Privacy Policy</h1>
          <p className="page-description"></p>
        </header>
        <div className="page-body">
          <h1>Privacy Policy</h1>
          <p>
            <em>Last updated: 2 June, 2024</em>
          </p>
          <p>
            kdv_ (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) operates
            the kdv.one website and subdomains, and the &quot;Confirm Youtube
            Logout&quot; web extension (the &quot;Service&quot;). This page
            informs you of our policies regarding the collection, use, and
            disclosure of Personal Information when you use our Service.
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
            We do not collect any personal information or data from you. We do
            not use analytics or tracking services. We use the permissions that
            you grant us simply to provide the service. No information or data
            from you is ever sent to our servers.
          </p>
          <h2>Changes To This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have a question, please contact us using one of the following
            methods:
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
            </li>
          </ul>
          <p></p>
        </div>
      </article>
      <Footer />
    </>
  );
}
