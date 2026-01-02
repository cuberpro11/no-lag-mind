import { GramTypeApp } from '@/components/gramtype/GramTypeApp';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GramType - Precision Practice | No Lag Mind',
  description: 'Build muscle memory for typing faster with bigram, trigram, and rare letter combination practice.',
};

export default function GramTypePage() {
  return <GramTypeApp />;
}

