import { CrumpledPaperIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/button';
import { CenteredHero } from '@/features/landing/CenteredHero';
import { Section } from '@/features/landing/Section';

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <Section className="py-36">
      <CenteredHero
        banner={{
          href: 'https://reduxcorporation.in',
          text: <>{t('follow_twitter')}</>,
        }}
        title={t.rich('title', {
          important: (chunks) => (
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {chunks}
            </span>
          ),
        })}
        description={t('description')}
        buttons={
          <>
            <Link href="/sign-up" className={buttonVariants({ size: 'lg' })}>
              Get Started
            </Link>

            <Link
              href="https://reduxcorporation.in"
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
              target="_blank"
            >
              <CrumpledPaperIcon className="mr-2 size-5" />
              Visit our
            </Link>
          </>
        }
      />
    </Section>
  );
};

export { Hero };
