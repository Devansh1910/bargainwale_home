import { enUS, frFR } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';

export default function AuthLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let clerkLocale = enUS;

  // Set external URLs for sign-in and sign-up
  const signInUrl = 'https://account.bargainwale.in';
  const signUpUrl = 'https://account.bargainwale.in';
  const dashboardUrl = `/${props.params.locale}/dashboard`;

  if (props.params.locale === 'fr') {
    clerkLocale = frFR;
  }

  return (
    <ClerkProvider
      localization={clerkLocale}
      signInUrl={signInUrl}
      signUpUrl={signUpUrl}
      signInFallbackRedirectUrl={dashboardUrl}
      signUpFallbackRedirectUrl={dashboardUrl}
    >
      {props.children}
    </ClerkProvider>
  );
}
