
import React from 'react';
import { FEATURES } from '../../../shared/lib/constants';
import { FeatureCard } from '../../../entities/robot/ui/FeatureCard';

export const FeatureGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {FEATURES.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  );
};
