/* eslint-disable react/jsx-no-useless-fragment */
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { CenteredFooter } from '@/features/landing/CenteredFooter';
import { Section } from '@/features/landing/Section';
import { AppConfig } from '@/utils/AppConfig';

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <Section className="pb-16 pt-0">
      <CenteredFooter
        name={AppConfig.name}
        legalLinks={
          <>
            <li>
              <Link href="/sign-up">{t('terms_of_service')}</Link>
            </li>
            <li>
              <Link href="/sign-up">{t('privacy_policy')}</Link>
            </li>
          </>
        }
      >
        <></> {/* Providing an empty fragment as children */}
      </CenteredFooter>
    </Section>
  );
};

export { Footer };
