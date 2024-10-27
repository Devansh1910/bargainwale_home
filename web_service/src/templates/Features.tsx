/* eslint-disable @next/next/no-img-element */
import { useTranslations } from 'next-intl';

import { Background } from '@/components/Background';
import { FeatureCard } from '@/features/landing/FeatureCard';
import { Section } from '@/features/landing/Section';

const Features = () => {
  const t = useTranslations('Features');

  return (
    <Background>
      <Section
        subtitle={t('section_subtitle')}
        title={t('section_title')}
        description={t('section_description')}
      >
        <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-3">
          <FeatureCard
            icon={
              <img
                src="https://res.cloudinary.com/dmzp6notl/image/upload/v1719988812/user_nenru0.svg"
                alt="Feature 1 Icon"
                className="stroke-primary-foreground stroke-2"
              />
            }
            title={t('feature1_title')}
          >
            {t('feature1_description')}
          </FeatureCard>

          <FeatureCard
            icon={
              <img
                src="https://res.cloudinary.com/dmzp6notl/image/upload/v1719988813/money_ebrxif.svg"
                alt="Feature 2 Icon"
                className="stroke-primary-foreground stroke-2"
              />
            }
            title={t('feature2_title')}
          >
            {t('feature2_description')}
          </FeatureCard>

          <FeatureCard
            icon={
              <img
                src="https://res.cloudinary.com/dmzp6notl/image/upload/v1719988813/meal_cqpod1.svg"
                alt="Feature 3 Icon"
                className="stroke-primary-foreground stroke-2"
              />
            }
            title={t('feature3_title')}
          >
            {t('feature3_description')}
          </FeatureCard>

          <FeatureCard
            icon={
              <img
                src="https://res.cloudinary.com/dmzp6notl/image/upload/v1719988813/multi_ee5hdd.svg"
                alt="Feature 4 Icon"
                className="stroke-primary-foreground stroke-2"
              />
            }
            title={t('feature4_title')}
          >
            {t('feature4_description')}
          </FeatureCard>

          <FeatureCard
            icon={
              <img
                src="https://res.cloudinary.com/dmzp6notl/image/upload/v1719988812/realtime_joo6us.svg"
                alt="Feature 5 Icon"
                className="stroke-primary-foreground stroke-2"
              />
            }
            title={t('feature5_title')}
          >
            {t('feature5_description')}
          </FeatureCard>

          <FeatureCard
            icon={
              <img
                src="https://res.cloudinary.com/dmzp6notl/image/upload/v1719988812/secure_imfg8a.svg"
                alt="Feature 6 Icon"
                className="stroke-primary-foreground stroke-2"
              />
            }
            title={t('feature6_title')}
          >
            {t('feature6_description')}
          </FeatureCard>
        </div>
      </Section>
    </Background>
  );
};

export { Features };
