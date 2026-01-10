import {
  Sword,
  Shield,
  Zap,
  Coins,
  Layers,
  Star,
  Recycle,
  AlertTriangle,
  Crown,
  Gem,
  CircleDot,
  Shirt,
  RectangleHorizontal,
  Footprints,
  HardHat,
  Sparkles,
} from "lucide-react";
import { GearSlotCard } from "@/components/GearSlotCard";
import { CategorySection } from "@/components/CategorySection";
import { StepCard } from "@/components/StepCard";
import { ProTip } from "@/components/ProTip";
import { BasicRuleCard } from "@/components/BasicRuleCard";

const offensiveGear = [
  { icon: Sword, name: "Weapon", slot: "5th Affix" },
  { icon: Gem, name: "Necklace", slot: "5th Affix" },
  { icon: CircleDot, name: "Amulet", slot: "5th Affix" },
  { icon: Sparkles, name: "Ring", slot: "5th Affix" },
];

const defensiveGear = [
  { icon: HardHat, name: "Helm", slot: "4th Affix" },
  { icon: Shirt, name: "Cuirass", slot: "4th Affix" },
  { icon: RectangleHorizontal, name: "Belt", slot: "4th Affix" },
  { icon: Shield, name: "Greaves", slot: "4th Affix" },
  { icon: Crown, name: "Pauldrons", slot: "4th Affix" },
  { icon: Footprints, name: "Boots", slot: "4th Affix" },
];

const skillGear = [
  { icon: HardHat, name: "Helmet", slot: "Basic Skill" },
  { icon: Crown, name: "Pauldron", slot: "Basic Skill" },
  { icon: Shirt, name: "Cuirass", slot: "Control/Ult" },
  { icon: Shield, name: "Greaves", slot: "Control/Ult" },
  { icon: Footprints, name: "Boots", slot: "Core Skill" },
  { icon: RectangleHorizontal, name: "Belt", slot: "Core Skill" },
];

const steps = [
  {
    title: "Gear Check",
    description: "Only invest Umbra Essence into high-tier gear (Primals) with good 3-4 affixes that you plan to use long-term.",
  },
  {
    title: "Identify Goal",
    description: "Check the affix chart. For your Weapon, are you missing Crit in the 5th slot? For your Boots, missing Core Skill damage?",
  },
  {
    title: "Select Slot",
    description: "In the reroll menu, carefully select the correct slot — 4th for Evasion on armor, 5th for offensive/skill stats.",
  },
  {
    title: "Reroll",
    description: "Reroll until you get one of the desired affixes. It might take many attempts! Don't get discouraged.",
  },
  {
    title: "Know When to Stop",
    description: "Got a good roll (e.g., Crit 8-10%)? Consider stopping and saving Essence for another piece rather than chasing perfection.",
  },
];

const proTips = [
  "Priority Order: Offensive (5th slot) → Defensive (4th slot) → Skill-specific stats",
  "Weapon First: Weapon Critical is often the highest priority for damage builds",
  "Core Skill Builds: Boots & Belt skill damage is absolutely crucial",
  "Resource Management: Don't burn all essence chasing perfect rolls",
  "Focus: Only use Umbra Essence on your best end-game gear",
];

const Index = () => {
  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full" />
        
        <div className="container relative py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Lootborn Warriors Guide
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-gold mb-4">
              Umbra Affix Rerolling
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your good Umbra gear into legendary, build-defining items. 
              Master the reroll system to optimize every affix slot.
            </p>
          </div>
        </div>
      </header>

      <main className="container py-10 space-y-10">
        {/* Basic Rules */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Layers className="w-4 h-4 text-primary" />
            </span>
            Basic Rules
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <BasicRuleCard
              icon={Coins}
              title="Currency"
              description="Reroll unwanted affixes using Umbra Essence — your primary rerolling resource."
            />
            <BasicRuleCard
              icon={Layers}
              title="The Slots"
              description="Each Umbra gear piece has multiple affix slots. You choose which specific slot to reroll."
            />
            <BasicRuleCard
              icon={Star}
              title="Gear Quality"
              description="Only Fabled+ quality Umbras can be rerolled. Don't waste essence on lower tiers."
            />
            <BasicRuleCard
              icon={Recycle}
              title="Salvaging"
              description="Salvaging rerolled gear gives a partial refund of spent Umbra Essence."
            />
          </div>

          <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-xl flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-foreground">Important</h4>
              <p className="text-sm text-muted-foreground">
                Rerolling is random — you're not guaranteed a better stat. It can be resource-intensive. 
                Save your Umbra Essence for your best endgame gear!
              </p>
            </div>
          </div>
        </section>

        {/* Affix Categories */}
        <section className="space-y-6">
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">
            What to Roll For
          </h2>
          <p className="text-muted-foreground mb-6">
            Not all affix slots are created equal. Target the most powerful, build-enabling stats for each gear slot.
          </p>

          <CategorySection
            icon="🔥"
            title="Offensive Power"
            subtitle="5th Affix Slot"
            variant="offensive"
            targetAffixes={["Critical", "Additional Damage Chance"]}
            whyNote="These stats provide massive multiplicative damage boosts. Critical is #1 for Burst Damage builds, Additional Damage Chance for Burn Stacking builds."
          >
            {offensiveGear.map((gear) => (
              <GearSlotCard
                key={gear.name}
                icon={gear.icon}
                name={gear.name}
                slot={gear.slot}
                variant="offensive"
              />
            ))}
          </CategorySection>

          <CategorySection
            icon="🛡️"
            title="Defensive Survivability"
            subtitle="4th Affix Slot on All Armor"
            variant="defensive"
            targetAffixes={["Evasion"]}
            whyNote="Evasion allows you to completely avoid incoming attacks. Stacking it across armor pieces makes you significantly more durable in high-level content."
          >
            {defensiveGear.map((gear) => (
              <GearSlotCard
                key={gear.name}
                icon={gear.icon}
                name={gear.name}
                slot={gear.slot}
                variant="defensive"
              />
            ))}
          </CategorySection>

          <CategorySection
            icon="⚡"
            title="Skill-Specific Boosts"
            subtitle="5th Affix Slot Specialization"
            variant="skill"
            targetAffixes={["Basic Skill Damage/Haste", "Control Skill Damage/Haste", "Ultimate Damage/Haste", "Core Skill Damage/Haste"]}
            whyNote="These affixes define and specialize your build. If your build revolves around a powerful Core Skill, targeting Boots and Belt affixes is essential."
          >
            {skillGear.map((gear, index) => (
              <GearSlotCard
                key={`${gear.name}-${index}`}
                icon={gear.icon}
                name={gear.name}
                slot={gear.slot}
                variant="skill"
              />
            ))}
          </CategorySection>
        </section>

        {/* Step by Step */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary" />
            </span>
            Step-by-Step Rerolling Plan
          </h2>
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <StepCard key={index} step={index + 1} title={step.title} description={step.description} />
            ))}
          </div>
        </section>

        {/* Pro Tips */}
        <section className="card-game rounded-xl p-6 md:p-8 border border-gold/20">
          <h2 className="font-display text-2xl font-bold text-gold mb-6 flex items-center gap-3">
            <Crown className="w-6 h-6" />
            Pro Tips
          </h2>
          <div className="grid gap-3">
            {proTips.map((tip, index) => (
              <ProTip key={index}>{tip}</ProTip>
            ))}
          </div>
        </section>

        {/* Summary */}
        <section className="text-center py-8 border-t border-border">
          <h2 className="font-display text-xl font-bold text-foreground mb-3">Summary</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Focus on end-game gear only. Prioritize <span className="text-offensive font-medium">offensive stats</span> first, 
            then <span className="text-defensive font-medium">defensive</span>, 
            then <span className="text-skill font-medium">skill-specific</span>. 
            Weapon Crit is king for damage builds. Always double-check slot positions before spending Umbra Essence.
          </p>
          <p className="mt-4 text-lg font-display text-gradient-gold">
            Good luck, Warriors!
          </p>
        </section>
      </main>
    </div>
  );
};

export default Index;
