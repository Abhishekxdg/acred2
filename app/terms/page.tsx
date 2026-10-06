import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { site } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service · ACRED",
  description: "Terms governing the use of ACRED's website and messaging channels.",
  path: "/terms",
});

const UPDATED = "6 October 2026";

export default function TermsPage() {
  const email = site.contact.email;
  return (
    <LegalPage label="Legal" title="Terms of Service" updated={UPDATED}>
      <p>
        These Terms govern your use of acred.in and of ACRED&apos;s communication channels, including
        WhatsApp, Facebook Messenger and Instagram. By using them, you agree to these Terms.
      </p>

      <h2>1. About ACRED</h2>
      <p>
        ACRED is a Bengaluru-based property and built-environment company offering services across
        architecture, construction, real estate, engineering and interiors.
      </p>

      <h2>2. Use of our services</h2>
      <ul>
        <li>You agree to provide accurate information when you contact us.</li>
        <li>You will not use our channels for unlawful, abusive, misleading or spam purposes.</li>
        <li>You will not attempt to disrupt or gain unauthorised access to our systems.</li>
      </ul>

      <h2>3. Information, not an offer</h2>
      <p>
        Property details, prices, availability and specifications shared through our website or
        messages are indicative, may change without notice, and do not form a binding offer. Any
        purchase or service engagement is governed by a separate written agreement.
      </p>

      <h2>4. Messaging</h2>
      <p>
        By messaging us, you agree that we may reply to you on the same platform about your enquiry.
        You can ask us to stop at any time by replying STOP or emailing{" "}
        <a href={`mailto:${email}`}>{email}</a>. Messaging platforms are operated by Meta and are
        subject to Meta&apos;s own terms.
      </p>

      <h2>5. Intellectual property</h2>
      <p>
        All content on acred.in, including text, images, logos and designs, belongs to ACRED or its
        licensors and may not be copied or reused without permission.
      </p>

      <h2>6. Limitation of liability</h2>
      <p>
        To the extent permitted by law, ACRED is not liable for indirect or consequential losses
        arising from use of our website or messaging channels.
      </p>

      <h2>7. Privacy</h2>
      <p>
        Our handling of personal data is described in our <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <h2>8. Governing law</h2>
      <p>These Terms are governed by the laws of India, with courts in Bengaluru having jurisdiction.</p>

      <h2>9. Changes</h2>
      <p>We may update these Terms and will change the date above when we do.</p>

      <h2>10. Contact</h2>
      <p>
        ACRED, Bengaluru, Karnataka, India
        <br />
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
    </LegalPage>
  );
}
