import { useTranslations } from 'next-intl';

import { PricingCard } from '@/features/billing/PricingCard';
import { PricingFeature } from '@/features/billing/PricingFeature';
import type { PlanId } from '@/types/Subscription';
import { PricingPlanList } from '@/utils/AppConfig';

const PricingInformation = (props: {
  buttonList: Record<PlanId, React.ReactNode>;
}) => {
  const t = useTranslations('PricingPlan');

  const getFeatureKey = (planId: string, feature: string) => {
    return `${planId}_plan_${feature}`;
  };

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-3">
      {PricingPlanList.map((plan) => (
        <PricingCard
          key={plan.id}
          planId={plan.id}
          price={plan.price}
          interval={plan.interval}
          button={props.buttonList[plan.id]}
        >
          <PricingFeature>
            {t(getFeatureKey(plan.id, 'feature_team_member'))}
          </PricingFeature>
          <PricingFeature>
            {t(getFeatureKey(plan.id, 'feature_website'))}
          </PricingFeature>
          <PricingFeature>
            {t(getFeatureKey(plan.id, 'feature_storage'))}
          </PricingFeature>
          <PricingFeature>
            {t(getFeatureKey(plan.id, 'feature_transfer'))}
          </PricingFeature>
          <PricingFeature>
            {t(getFeatureKey(plan.id, 'feature_email_support'))}
          </PricingFeature>
        </PricingCard>
      ))}
    </div>
  );
};

export { PricingInformation };
