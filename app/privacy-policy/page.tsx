import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy · ACRED",
  description:
    "How ACRED collects, uses and protects personal information, including messages received via WhatsApp, Messenger and Instagram.",
  path: "/privacy-policy",
});

const UPDATED = "6 October 2026";

export default function PrivacyPolicyPage() {
  const email = "support@acred.in";
  return (
    <LegalPage label="Legal" title="Privacy Policy" updated={UPDATED}>
      <p>
        This Privacy Policy explains how ACRED (&quot;ACRED&quot;, &quot;we&quot;, &quot;us&quot;), a property and
        built-environment company based in Bengaluru, India, collects, uses and protects personal
        information when you visit acred.in, contact us, or message us on WhatsApp, Facebook
        Messenger or Instagram.
      </p>

      <h2>1. Information we collect</h2>
      <ul>
        <li>Contact details you share: name, phone number, email address.</li>
        <li>Messages you send us on WhatsApp, Messenger or Instagram, and related metadata such as timestamps.</li>
        <li>Property or project preferences you tell us about (location, budget, configuration, timeline).</li>
        <li>Basic profile information provided by the messaging platform, such as your display name and platform user ID.</li>
        <li>Website usage data such as device type, browser and pages visited.</li>
      </ul>

      <h2>2. How we use your information</h2>
      <ul>
        <li>To respond to your enquiries about properties, construction, architecture, engineering and interiors.</li>
        <li>To follow up on enquiries, schedule site visits and share project details you asked for.</li>
        <li>To keep records of our conversations for service quality and support.</li>
        <li>To improve our website, services and communication.</li>
        <li>To comply with applicable laws.</li>
      </ul>

      <h2>3. Messaging platforms</h2>
      <p>
        When you contact us through WhatsApp, Messenger or Instagram, your messages are processed
        by Meta Platforms under its own terms and privacy policies. We receive your messages through
        Meta&apos;s official business APIs and use them only for the purposes above.
      </p>

      <h2>4. We do not sell your data</h2>
      <p>
        We do not sell or rent your personal information. We share it only with service providers
        who help us operate (such as CRM, hosting and messaging tools), with developers or channel
        partners when you have asked to be connected for a specific project, or where required by
        law. These parties are required to protect your information.
      </p>

      <h2>5. Data retention</h2>
      <p>
        We keep personal information only as long as needed for the purposes in this policy or as
        required by law, after which we delete or anonymise it.
      </p>

      <h2>6. Security</h2>
      <p>
        We use reasonable technical and organisational safeguards, including access controls and
        encrypted connections, to protect your information. No system is completely secure, but we
        work to limit risk.
      </p>

      <h2>7. Your rights</h2>
      <p>
        You may ask us to access, correct or delete your personal information, or to stop contacting
        you. To request deletion, see our <a href="/data-deletion">Data Deletion Instructions</a> or
        email <a href={`mailto:${email}`}>{email}</a>.
      </p>

      <h2>8. Children</h2>
      <p>Our services are not directed at anyone under 18, and we do not knowingly collect their data.</p>

      <h2>9. Changes to this policy</h2>
      <p>We may update this policy and will change the date above when we do.</p>

      <h2>10. Contact us</h2>
      <p>
        ACRED, Bengaluru, Karnataka, India
        <br />
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
    </LegalPage>
  );
}
