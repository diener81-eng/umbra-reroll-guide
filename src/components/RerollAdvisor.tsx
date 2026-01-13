import React, { useState } from 'react';
import {
  HardHat,
  Shield,
  Shirt,
  Footprints,
  Circle,
  Sword,
  Gem,
  Sparkles,
  CircleDot,
  Zap,
  ShieldCheck,
  Target,
  RotateCcw,
  RectangleVertical,
  Hand,
  ShieldHalf,
  Grip,
} from 'lucide-react';

import { gearPieces, GearPiece } from '@/data/gear';
import { Build, BuildClass, getBuildsByClass, getGearGroup, getArmorSlot5Type } from '@/data/builds';
import { cn } from '@/lib/utils';
import StatItem from './StatItem';
import { armorSlotConfig } from '@/data/stats';

const iconMap: Record<string, React.ElementType> = {
  'hard-hat': HardHat,
  shield: Shield,
  shirt: Shirt,
  footprints: Footprints,
  circle: Circle,
  sword: Sword,
  gem: Gem,
  sparkles: Sparkles,
  'circle-dot': CircleDot,
  'rectangle-vertical': RectangleVertical,
  hand: Hand,
  'shield-half': ShieldHalf,
};

type ArmorSlot5Type = 'helmPauldron' | 'beltBoots' | 'cuirassGreaves';

interface RecommendationResult {
  gear: GearPiece;
  build: Build;
  gearGroup: 'A' | 'B' | 'C';

  // Slot 4 (armor only)
  slot4Stats?: string[];

  // Slot 5 (armor only)
  slot5Stats?: string[];
  slot5Label?: string;
  slot5Type?: ArmorSlot5Type;

  // Offensive gear (weapon/jewelry) 5th slot
  offensive5thSlot?: string[];

  // Priority stats for the “other slots” section
  priorityStats?: string[];

  // Flags
  isAncientGod?: boolean;
  isPvP?: boolean;
}

// Helper to replace ONLY slot-5 template stats with actual skill names.
// IMPORTANT: Do NOT rename "Core Skill Dmg" (generic stat) into "Fireball Dmg" etc.
function formatSkillStat(stat: string, build: Build): string {
  // Slot 5 templates ONLY
  if (stat === 'Basic Skill Dmg Up') return `${build.basicSkill} Dmg Up`;
  if (stat === 'Basic Skill Haste') return `${build.basicSkill} Haste`;

  if (stat === 'Core Skill Dmg Up') return `${build.coreSkill} Dmg Up`;
  if (stat === 'Core Skill Haste') return `${build.coreSkill} Haste`;

  // Ultimate templates
  if (stat === 'Ultimate CD') return `${build.ultimateSkill} CD`;
  if (stat === 'Ultimate Haste') return `${build.ultimateSkill} Haste`;
  if (stat === 'Ultimate Dmg Up') return `${build.ultimateSkill} Dmg Up`;

  // Everything else must stay generic:
  // "Core Skill Dmg", "Crit Damage", "Elemental Damage", etc.
  return stat;
}

function getRecommendations(gear: GearPiece, build: Build): RecommendationResult {
  const gearGroup = getGearGroup(gear.id);

  const result: RecommendationResult = {
    gear,
    build,
    gearGroup,
    isAncientGod: !!build.isAncientGod,
    isPvP: !!build.isPvP,
  };

  // -----------------
  // SLOT 4 (ARMOR)
  // -----------------
  if (gear.category === 'armor' && gear.has4thSlot) {
    // Always the same: show Evasion as the 4th slot pick
    result.slot4Stats = build.statPriority.slot4;
  }

  // -----------------
  // SLOT 5 (ARMOR)
  // -----------------
  if (gear.category === 'armor') {
    const slot5Type = getArmorSlot5Type(gear.id);
    if (slot5Type) {
      result.slot5Type = slot5Type;
      result.slot5Label = '5th Slot';
      result.slot5Stats = build.statPriority.slot5[slot5Type].map((s) => formatSkillStat(s, build));
    }

    // ARMOR “Other Slots” can ONLY be defensive stats.
    // Show the build’s defense list (minus Evasion if you already show it in Slot 4),
    // AND intersect with the armorSlotConfig.anySlot list so nothing impossible shows.
    result.priorityStats = build.statPriority.defense
      .map((s) => formatSkillStat(s, build))
      .filter((s) => s !== 'Evasion')
      .filter((s) => armorSlotConfig.anySlot.includes(s));

    return result;
  }

  // -----------------
  // OFFENSIVE (WEAPON/JEWELRY)
  // -----------------
  if (gear.category === 'offensive') {
    // 5th slot on weapon/jewelry is where Crit Chance exists.
    result.offensive5thSlot = ['Crit Chance'];

    // “Other slots” (1-4 and 6) should show Group A priorities, but NEVER repeat Crit Chance.
    result.priorityStats = build.statPriority.groupA
      .map((s) => formatSkillStat(s, build))
      .filter((s) => s !== 'Crit Chance');

    return result;
  }

  // -----------------
  // ACCESSORIES (GAUNTLETS/BRACERS)
  // -----------------
  // Accessories do NOT have slot-5 skill rolls. They only use generic offensive stats.
  // So we just show Group B priorities.
  result.priorityStats = build.statPriority.groupB.map((s) => formatSkillStat(s, build));
  return result;
}

export default function RerollAdvisor() {
  const [selectedGear, setSelectedGear] = useState<GearPiece | null>(null);
  const [selectedClass, setSelectedClass] = useState<BuildClass>('Arcanist');
  const [selectedBuild, setSelectedBuild] = useState<Build | null>(null);

  const armorPieces = gearPieces.filter((g) => g.category === 'armor');
  const offensivePieces = gearPieces.filter((g) => g.category === 'offensive');
  const accessoryPieces = gearPieces.filter((g) => g.category === 'accessory');
  const builds = getBuildsByClass(selectedClass);

  const canShowResults = selectedGear !== null && selectedBuild !== null;
  const recommendations = canShowResults ? getRecommendations(selectedGear!, selectedBuild!) : null;

  const handleGearSelect = (gear: GearPiece) => {
    setSelectedGear(gear);
    // Keep build selection when switching gear (user asked for this behavior)
  };

  const handleReset = () => {
    setSelectedGear(null);
    setSelectedBuild(null);
  };

  const isAncientGodSelected = selectedBuild?.isAncientGod ?? false;
  const isUltimateGear = (gearId: string) => gearId === 'cuirass' || gearId === 'greaves';

  return (
    <div className="space-y-8">
      {/* Step 1: Gear Selection */}
      <div className="card-game p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-cinzel text-xl text-foreground flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm text-primary">1</span>
            Select Gear Piece
          </h3>
          {selectedGear && (
            <button
              onClick={handleReset}
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-sm"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          )}
        </div>

        {/* Armor */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-defensive" />
            Armor (Has Evasion + Skill Slots)
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {armorPieces.map((gear) => {
              const Icon = iconMap[gear.icon] || Circle;
              const isSelected = selectedGear?.id === gear.id;
              const isHighlighted = isAncientGodSelected && isUltimateGear(gear.id);

              return (
                <button
                  key={gear.id}
                  onClick={() => handleGearSelect(gear)}
                  className={cn(
                    'flex flex-col items-center gap-2 p-3 rounded-lg border transition-all duration-200',
                    isSelected
                      ? 'border-skill bg-skill/10 glow-skill'
                      : isHighlighted
                        ? 'border-primary bg-primary/10 ring-1 ring-primary/50'
                        : 'border-border/50 bg-card/50 hover:border-skill/50 hover:bg-skill/5'
                  )}
                >
                  <Icon
                    className={cn(
                      'w-6 h-6',
                      isSelected ? 'text-skill' : isHighlighted ? 'text-primary' : 'text-muted-foreground'
                    )}
                  />
                  <span
                    className={cn(
                      'text-xs font-medium',
                      isSelected ? 'text-skill' : isHighlighted ? 'text-primary' : 'text-foreground'
                    )}
                  >
                    {gear.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Offensive */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
            <Zap className="w-4 h-4 text-offensive" />
            Weapon & Jewelry (Offensive Stats Only)
          </p>
          <div className="grid grid-cols-4 gap-2">
            {offensivePieces.map((gear) => {
              const Icon = iconMap[gear.icon] || Circle;
              const isSelected = selectedGear?.id === gear.id;

              return (
                <button
                  key={gear.id}
                  onClick={() => handleGearSelect(gear)}
                  className={cn(
                    'flex flex-col items-center gap-2 p-3 rounded-lg border transition-all duration-200',
                    isSelected
                      ? 'border-offensive bg-offensive/10 glow-offensive'
                      : 'border-border/50 bg-card/50 hover:border-offensive/50 hover:bg-offensive/5'
                  )}
                >
                  <Icon className={cn('w-6 h-6', isSelected ? 'text-offensive' : 'text-muted-foreground')} />
                  <span className={cn('text-xs font-medium', isSelected ? 'text-offensive' : 'text-foreground')}>
                    {gear.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Accessories */}
        <div>
          <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
            <Grip className="w-4 h-4 text-primary" />
            Accessories (All Slots Flexible)
          </p>
          <div className="grid grid-cols-2 gap-2">
            {accessoryPieces.map((gear) => {
              const Icon = iconMap[gear.icon] || Circle;
              const isSelected = selectedGear?.id === gear.id;

              return (
                <button
                  key={gear.id}
                  onClick={() => handleGearSelect(gear)}
                  className={cn(
                    'flex flex-col items-center gap-2 p-3 rounded-lg border transition-all duration-200',
                    isSelected
                      ? 'border-primary bg-primary/10 glow-offensive'
                      : 'border-border/50 bg-card/50 hover:border-primary/50 hover:bg-primary/5'
                  )}
                >
                  <Icon className={cn('w-6 h-6', isSelected ? 'text-primary' : 'text-muted-foreground')} />
                  <span className={cn('text-xs font-medium', isSelected ? 'text-primary' : 'text-foreground')}>
                    {gear.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Reroll Recommendations — MUST appear above the build picker */}
      {selectedGear && selectedBuild && recommendations && (
        <div className="card-game p-6 animate-fade-in border-2 border-primary/30">
          <h3 className="font-cinzel text-xl text-foreground flex items-center gap-2 mb-2">
            <Target className="w-6 h-6 text-primary" />
            Reroll Recommendations
          </h3>

          <p className="text-muted-foreground mb-6">
            For <span className="text-gradient-gold font-semibold">{selectedGear.name}</span> with{' '}
            <span className="text-primary font-semibold">{selectedBuild.name}</span>
            {selectedBuild.isPvP && (
              <span className="ml-2 text-xs bg-destructive/20 text-destructive px-2 py-0.5 rounded-full">PvP</span>
            )}
            {selectedBuild.isAncientGod && (
              <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">Ultimate Focus</span>
            )}
          </p>

          <div className="space-y-4">
            {/* ARMOR: Ancient God + Cuirass/Greaves special callout */}
            {recommendations.isAncientGod &&
              recommendations.slot5Type === 'cuirassGreaves' &&
              recommendations.slot5Stats && (
                <div className="p-4 rounded-lg bg-primary/10 border-2 border-primary/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-primary">{recommendations.slot5Label}</span>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full ml-auto font-semibold">
                      PRIORITY
                    </span>
                  </div>
                  <div className="space-y-2 ml-7">
                    {recommendations.slot5Stats.map((stat, i) => (
                      <StatItem key={i} stat={stat} colorClass="text-primary/70" />
                    ))}
                  </div>
                  <p className="text-xs mt-3 ml-7 p-2 rounded bg-destructive/10 border border-destructive/30">
                    <span className="text-destructive font-semibold">Target: 8%+ per piece</span>
                    <span className="text-muted-foreground"> — Requires at least one </span>
                    <span className="text-destructive font-semibold">Primal</span>
                    <span className="text-muted-foreground">
                      {' '}
                      piece. Aim for 15%+ total CD across Cuirass and Greaves combined.
                    </span>
                  </p>
                </div>
              )}

            {/* ARMOR: Slot 4 */}
            {selectedGear.category === 'armor' && recommendations.slot4Stats && (
              <div
                className={cn(
                  'p-4 rounded-lg border',
                  recommendations.isPvP ? 'bg-defensive/20 border-2 border-defensive/50' : 'bg-defensive/10 border-defensive/30'
                )}
              >
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-defensive" />
                  <span className="font-semibold text-defensive">4th Slot — Defensive</span>
                  {recommendations.isPvP && (
                    <span className="text-xs bg-defensive/20 text-defensive px-2 py-0.5 rounded-full ml-auto font-semibold">
                      PvP PRIORITY
                    </span>
                  )}
                </div>
                <div className="ml-7">
                  {recommendations.slot4Stats.map((stat, i) => (
                    <StatItem key={i} stat={stat} colorClass="text-defensive/70" />
                  ))}
                </div>
              </div>
            )}

            {/* ARMOR: Slot 5 (normal) */}
            {selectedGear.category === 'armor' &&
              recommendations.slot5Stats &&
              !(recommendations.isAncientGod && recommendations.slot5Type === 'cuirassGreaves') && (
                <div className="p-4 rounded-lg bg-skill/10 border border-skill/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-skill" />
                    <span className="font-semibold text-skill">{recommendations.slot5Label}</span>
                  </div>
                  <div className="space-y-2 ml-7">
                    {recommendations.slot5Stats.map((stat, i) => (
                      <StatItem key={i} stat={stat} colorClass="text-skill/70" />
                    ))}
                  </div>
                </div>
              )}

            {/* ARMOR: Other Slots */}
            {selectedGear.category === 'armor' && recommendations.priorityStats && recommendations.priorityStats.length > 0 && (
              <div className="p-4 rounded-lg bg-offensive/10 border border-offensive/30">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-offensive" />
                  <span className="font-semibold text-offensive">Other Slots — Build Priority Stats</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3 ml-7">Prioritize these stats in order for slots 1-3 and 6:</p>
                <div className="space-y-2 ml-7">
                  {recommendations.priorityStats.map((stat, i) => (
                    <StatItem key={i} stat={stat} colorClass="text-offensive/70" priority={i + 1} />
                  ))}
                </div>
              </div>
            )}

            {/* OFFENSIVE: 5th Slot */}
            {selectedGear.category === 'offensive' && recommendations.offensive5thSlot && (
              <div className="p-4 rounded-lg bg-offensive/10 border-2 border-offensive/50">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-offensive" />
                  <span className="font-semibold text-offensive">5th Slot — Priority Stats</span>
                  <span className="text-xs bg-offensive/20 text-offensive px-2 py-0.5 rounded-full ml-auto font-semibold">PRIORITY</span>
                </div>
                <div className="space-y-2 ml-7">
                  {recommendations.offensive5thSlot.map((stat, i) => (
                    <StatItem key={i} stat={stat} colorClass="text-offensive/70" />
                  ))}
                </div>
              </div>
            )}

            {/* OFFENSIVE: Other Slots */}
            {selectedGear.category === 'offensive' && recommendations.priorityStats && recommendations.priorityStats.length > 0 && (
              <div className="p-4 rounded-lg bg-offensive/10 border border-offensive/30">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-offensive" />
                  <span className="font-semibold text-offensive">Other Slots — Build Priority Stats</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3 ml-7">Prioritize these stats in order for slots 1-4 and 6:</p>
                <div className="space-y-2 ml-7">
                  {recommendations.priorityStats.map((stat, i) => (
                    <StatItem key={i} stat={stat} colorClass="text-offensive/70" priority={i + 1} />
                  ))}
                </div>
              </div>
            )}

            {/* ACCESSORY: Other Slots */}
            {selectedGear.category === 'accessory' && recommendations.priorityStats && recommendations.priorityStats.length > 0 && (
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                <div className="flex items-center gap-2 mb-2">
                  <Grip className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">All Slots — Build Priority Stats</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3 ml-7">Prioritize these stats in order for all 6 slots:</p>
                <div className="space-y-2 ml-7">
                  {recommendations.priorityStats.map((stat, i) => (
                    <StatItem key={i} stat={stat} colorClass="text-primary/70" priority={i + 1} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Step 2: Build Selection */}
      {selectedGear && (
        <div className="card-game p-6 animate-fade-in">
          <h3 className="font-cinzel text-xl text-foreground flex items-center gap-2 mb-4">
            <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm text-primary">2</span>
            Select Your Build
          </h3>

          {/* Class Tabs */}
          <div className="flex gap-2 mb-4">
            {(['Arcanist', 'Savage'] as BuildClass[]).map((cls) => (
              <button
                key={cls}
                onClick={() => {
                  setSelectedClass(cls);
                  setSelectedBuild(null);
                }}
                className={cn(
                  'px-4 py-2 rounded-lg font-medium transition-all duration-200',
                  selectedClass === cls
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground border border-border/50'
                )}
              >
                {cls}
              </button>
            ))}
          </div>

          {/* Build Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {builds.map((build) => {
              const isSelected = selectedBuild?.name === build.name;
              return (
                <button
                  key={build.name}
                  onClick={() => setSelectedBuild(build)}
                  className={cn(
                    'p-3 rounded-lg border text-left transition-all duration-200',
                    isSelected
                      ? 'border-primary bg-primary/10 glow-offensive'
                      : 'border-border/50 bg-card/50 hover:border-primary/50 hover:bg-primary/5'
                  )}
                >
                  <div className="flex items-center gap-2">
                    <p className={cn('font-semibold text-sm', isSelected ? 'text-primary' : 'text-foreground')}>{build.name}</p>
                    {build.isPvP && (
                      <span className="text-[10px] bg-destructive/20 text-destructive px-1.5 py-0.5 rounded">PvP</span>
                    )}
                    {build.isAncientGod && (
                      <span className="text-[10px] bg-primary/20 text-primary px-1.5 py-0.5 rounded">AG</span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Core: {build.coreSkill}</p>
                </button>
              );
            })}
          </div>

          {selectedBuild && (
            <div className="mt-4 p-3 rounded-lg bg-muted/30 border border-border/50">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">{selectedBuild.name}</span> uses{' '}
                <span className="text-skill">{selectedBuild.basicSkill}</span> (Basic),{' '}
                <span className="text-offensive">{selectedBuild.coreSkill}</span> (Core),{' '}
                <span className="text-defensive">{selectedBuild.controlSkills.join(' / ')}</span> (Control), and{' '}
                <span className="text-primary">{selectedBuild.ultimateSkill}</span> (Ultimate)
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}