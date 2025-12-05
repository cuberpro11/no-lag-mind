import { Hero } from '@/components/sections/Hero';
import { PillarSection } from '@/components/sections/PillarSection';
import { PillarsShowcase } from '@/components/sections/PillarsShowcase';
import { Footer } from '@/components/Footer';
import {
  KeyboardShortcutsGraphic,
  CognitiveFlowGraphic,
  WordsPerMinuteGraphic,
  AIToolsGraphic,
} from '@/components/sections/SlideGraphics';

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      
      {/* Keyboard Shortcuts */}
      <PillarSection
        title="Keyboard Shortcuts"
        description="Leverage your high WPM to execute commands instantly. Build muscle memory for every tool you use. Transform your workflow with powerful shortcuts."
        direction="left"
        index={0}
        showNoClickBadge={true}
        graphic={<KeyboardShortcutsGraphic />}
      />

      {/* Cognitive Flow */}
      <PillarSection
        title="Cognitive Flow"
        description="Maintain uninterrupted focus. Eliminate context switching and stay in the zone. Create an environment that supports deep work."
        direction="right"
        index={1}
        showNoClickBadge={true}
        graphic={<CognitiveFlowGraphic />}
      />

      {/* Words Per Minute */}
      <PillarSection
        title="Words Per Minute"
        description="Master typing speed to match your thinking speed. Your hands should keep up with your mind. Learn techniques to increase your WPM and maintain accuracy."
        direction="left"
        index={2}
        showNoClickBadge={true}
        graphic={<WordsPerMinuteGraphic />}
      />

      {/* AI Tools */}
      <PillarSection
        title="AI Tools"
        description="Amplify your capabilities with AI. Let artificial intelligence handle routine tasks while you focus on what matters. Work smarter, not harder."
        direction="right"
        index={3}
        graphic={<AIToolsGraphic />}
      />

      {/* Pillars Showcase - Split Screen */}
      <PillarsShowcase />

      <Footer />
      </main>
  );
}
