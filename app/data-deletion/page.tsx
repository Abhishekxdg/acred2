import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { site } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Data Deletion Instructions · ACRED",
  description:
    "How to ask ACRED to delete the personal data we hold about you, including data received via WhatsApp, Messenger and Instagram.",
  path: "/data-deletion",
});

const UPDATED = "6 October 2026";

export default function DataDeletionPage() {
  const email = site.contact.email;
  const subject = encodeURIComponent("Delete my data");
  const body = encodeURIComponent(
    "Hello ACRED,\n\nPlease delete all personal data you hold about me.\n\nName:\nPhone number / platform used (WhatsApp, Messenger, Instagram):\n\nThank you."
  );

  return (
    <LegalPage label="Legal" title="Data Deletion Instructions" updated={UPDATED}>
      <p>
        ACRED respects your right to have your personal data deleted. If you have contacted us
        through our website, WhatsApp, Facebook Messenger or Instagram, you can ask us to delete the
        information we hold about you at any time.
      </p>

      <h2>How to request deletion</h2>
      <ol>
        <li>
          Email <a href={`mailto:${email}`}>{email}</a> with the subject line{" "}
          <strong>&quot;Delete my data&quot;</strong>.
        </li>
        <li>
          Include your full name and the phone number or account (WhatsApp, Messenger or Instagram
          username) you used to contact us, so we can find your records.
        </li>
        <li>
          Or <a href={`mailto:${email}?subject=${subject}&body=${body}`}>open a pre-filled email</a>.
        </li>
      </ol>

      <h2>What happens next</h2>
      <ul>
        <li>We will confirm receipt of your request within 3 working days.</li>
        <li>
          We will delete your personal data, including conversation history and contact details,
          from our systems within 30 days.
        </li>
        <li>We will email you once deletion is complete.</li>
      </ul>

      <h2>Data we may need to keep</h2>
      <p>
        Where the law requires us to retain certain records (for example, transaction or tax
        records), we keep only what is required and delete the rest.
      </p>

      <h2>Facebook and Instagram</h2>
      <p>
        To also remove ACRED&apos;s access to your Facebook or Instagram account, open Settings &amp;
        privacy &gt; Settings &gt; Apps and websites (Facebook) or Apps and websites (Instagram
        settings), find the ACRED app and remove it. Then email us as described above to delete data
        we already hold.
      </p>

      <p>
        See also our <a href="/privacy-policy">Privacy Policy</a>.
      </p>
    </LegalPage>
  );
}
