import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Presale Terms — Wallet to Wealth',
  description:
    'Terms governing whitelist enrollment and any future token presale offered by Wallet to Wealth.',
  robots: { index: true, follow: true },
}

const EFFECTIVE = 'May 13, 2026'
const VERSION = 'v1-2026-05-13'
const SITE = 'wallet2wealth.com'

export default function PresaleTermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-2 text-sm text-white/65 hover:text-white"
      >
        <Image
          src="/brand/logo-no-bg.png"
          alt="Wallet to Wealth"
          width={24}
          height={24}
          className="drop-shadow-[0_0_10px_rgba(91,200,255,0.6)]"
        />
        Wallet to Wealth
      </Link>

      <h1 className="text-3xl font-bold sm:text-4xl">Presale Terms</h1>
      <p className="mt-2 text-sm text-white/55">
        Effective {EFFECTIVE} · Version {VERSION}
      </p>

      <Section title="1. Introduction">
        <p>
          These Presale Terms (&ldquo;Terms&rdquo;) govern your enrollment on the whitelist
          (&ldquo;Whitelist&rdquo;) for any future token sale, allocation event, or related
          distribution (collectively, the &ldquo;Presale&rdquo;) offered by the operators of {SITE}{' '}
          (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). By submitting your email and
          wallet address(es), you agree to be bound by these Terms.
        </p>
      </Section>

      <Section title="2. No Offer; No Allocation Guarantee">
        <p>
          Enrollment on the Whitelist is <strong>not</strong> an offer to sell, nor a solicitation
          of an offer to buy, any token, security, or financial instrument. Whitelist enrollment
          does <strong>not</strong> guarantee any allocation, priority, discount, or right to
          participate in the Presale. We may, in our sole discretion, deny, reduce, modify, or
          cancel any allocation at any time and for any reason, including without notice.
        </p>
      </Section>

      <Section title="3. Eligibility & Restricted Jurisdictions">
        <p>You represent and warrant that you are:</p>
        <ul className="ml-5 list-disc space-y-1">
          <li>at least 18 years old (or the age of majority in your jurisdiction);</li>
          <li>
            not a resident, citizen, or located in the United States of America, its territories, or
            any other Restricted Jurisdiction (as defined below);
          </li>
          <li>
            not subject to any sanctions list, including but not limited to the U.S. OFAC SDN list,
            EU consolidated sanctions list, UK HMT sanctions list, or UN sanctions; and
          </li>
          <li>acting on your own behalf, not as a nominee or agent for any third party.</li>
        </ul>
        <p>
          <strong>Restricted Jurisdictions</strong> include, without limitation: the United States
          of America, Cuba, Iran, North Korea, Syria, Crimea, the so-called Donetsk and Luhansk
          People&rsquo;s Republics, and any other jurisdiction in which participation would violate
          applicable law. We reserve the right to update the list of Restricted Jurisdictions at any
          time.
        </p>
        <p>
          If you become ineligible at any time, you must immediately withdraw from the Whitelist and
          refrain from participating in the Presale.
        </p>
      </Section>

      <Section title="4. KYC / AML Requirements">
        <p>
          Participation in the Presale will require successful completion of Know-Your-Customer
          (&ldquo;KYC&rdquo;) and Anti-Money-Laundering (&ldquo;AML&rdquo;) verification through our
          designated provider. You agree to provide accurate and complete information requested
          during KYC. Failure to complete KYC will result in disqualification from the Presale
          without any obligation on our part to provide an allocation.
        </p>
      </Section>

      <Section title="5. Wallet Information">
        <p>
          You are solely responsible for the accuracy of any wallet address you submit. We are not
          responsible for losses arising from an incorrect, compromised, or inaccessible wallet. You
          confirm that you own and control any wallet address you provide and that its use complies
          with applicable law.
        </p>
      </Section>

      <Section title="6. No Investment Advice; Risk Disclosures">
        <p>
          Nothing on {SITE} constitutes investment, financial, legal, or tax advice. Digital assets
          are <strong>highly volatile and risky</strong>. You may lose the entire amount you commit.
          You should consult independent legal, financial, and tax advisors before participating.
          You are solely responsible for evaluating the merits and risks of any potential Presale.
        </p>
      </Section>

      <Section title="7. Forward-Looking Statements">
        <p>
          Any statements about future tokens, ecosystems, features, roadmaps, partnerships, or
          performance are forward-looking and subject to significant risks and uncertainties. Actual
          outcomes may differ materially. We make no representation that any such statements will be
          realized.
        </p>
      </Section>

      <Section title="8. Privacy">
        <p>
          We process the personal data you provide (email, wallet address, IP, user agent) to
          administer the Whitelist, communicate with you, and comply with applicable law. See our{' '}
          <Link href="/privacy" className="underline">
            Privacy Policy
          </Link>
          .
        </p>
      </Section>

      <Section title="9. Communications">
        <p>
          By enrolling, you consent to receive transactional and informational emails relating to
          the Whitelist and any Presale. You may withdraw consent for non-essential communications
          at any time by contacting us at the address below.
        </p>
      </Section>

      <Section title="10. No Refund of $2.99 Guide Purchase">
        <p>
          Your $2.99 guide purchase is governed by our standard refund policy. Whitelist enrollment
          is a separate, complimentary benefit and does not entitle you to any additional refund.
        </p>
      </Section>

      <Section title="11. Modifications & Termination">
        <p>
          We may modify, suspend, or terminate the Whitelist or the Presale at any time, with or
          without notice. Continued participation after any modification constitutes acceptance of
          the revised Terms. We may remove you from the Whitelist at our sole discretion.
        </p>
      </Section>

      <Section title="12. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, our aggregate liability arising out of or relating
          to the Whitelist or these Terms shall not exceed the lesser of (a) US $100 or (b) the
          amount you paid to us in the 12 months preceding the claim. We disclaim all warranties,
          express or implied, including warranties of merchantability, fitness for a particular
          purpose, and non-infringement.
        </p>
      </Section>

      <Section title="13. Indemnification">
        <p>
          You agree to indemnify and hold us harmless from any claim, loss, liability, or expense
          (including reasonable attorneys&rsquo; fees) arising from your breach of these Terms, your
          misrepresentation of eligibility, or your violation of applicable law.
        </p>
      </Section>

      <Section title="14. Governing Law & Disputes">
        <p>
          These Terms are governed by the laws of the jurisdiction in which we are domiciled,
          without regard to conflict-of-laws principles. Any dispute shall be resolved through
          binding arbitration on an individual basis. You waive any right to participate in a class
          action, class arbitration, or representative proceeding.
        </p>
      </Section>

      <Section title="15. Severability">
        <p>
          If any provision of these Terms is held invalid or unenforceable, the remaining provisions
          shall remain in full force and effect.
        </p>
      </Section>

      <Section title="16. Contact">
        <p>
          Questions about these Terms? Email{' '}
          <a href="mailto:hello@wallet2wealth.com" className="underline">
            hello@wallet2wealth.com
          </a>
          .
        </p>
      </Section>

      <p className="mt-12 text-xs text-white/45">
        By submitting the whitelist form, you confirm that you have read, understood, and agreed to
        these Presale Terms in their entirety.
      </p>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 space-y-3 text-sm leading-relaxed text-white/75">
      <h2 className="text-lg font-bold text-white sm:text-xl">{title}</h2>
      {children}
    </section>
  )
}
