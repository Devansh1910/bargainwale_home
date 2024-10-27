import { MixerHorizontalIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/button';
import { CTABanner } from '@/features/landing/CTABanner';
import { Section } from '@/features/landing/Section';

const CTA = () => {
  const t = useTranslations('CTA');

  return (
    <Section>
      <CTABanner
        title={t('title')}
        description={t('description')}
        buttons={
          <a
            className={buttonVariants({ variant: 'outline', size: 'lg' })}
            href="mailto:info@bargainwale.in?subject=Would%20like%20to%20work"
          >
            <MixerHorizontalIcon className="mr-2 size-5" />
            {t('button_text')}
          </a>
        }
      />
    </Section>
  );
};

export { CTA };
