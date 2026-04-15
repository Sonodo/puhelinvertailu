import Link from 'next/link';
import { Info } from 'lucide-react';

/**
 * Affiliate disclosure banner.
 *
 * Slim, subtle, non-dismissible. Placed immediately above any operator/plan
 * comparison list so users see the disclosure before clicking outbound CTAs.
 *
 * Copy is fixed and must not be altered without compliance review.
 */
export default function AffiliateDisclosure() {
  return (
    <div
      role="note"
      aria-label="Affiliate disclosure"
      className="mb-6 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs leading-5 text-slate-600 sm:text-sm"
    >
      <div className="flex items-start gap-2 sm:items-center">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-slate-500 sm:mt-0" aria-hidden="true" />
        <p className="m-0">
          ValitseLiittymä on ilmainen vertailupalvelu. Saamme komissiota osalta palveluntarjoajista,
          mutta tämä ei vaikuta vertailun järjestykseen.{' '}
          <Link
            href="/sivuston-ansainta"
            className="font-medium text-cyan-700 underline underline-offset-2 hover:text-cyan-800"
          >
            Lue lisää
          </Link>
        </p>
      </div>
    </div>
  );
}
