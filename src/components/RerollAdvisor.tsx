import { useState } from 'react';
import { 
  HardHat, Shield, Shirt, Footprints, Circle, Sword, Gem, Sparkles, CircleDot,
  Zap, ShieldCheck, Target, ChevronRight, RotateCcw, RectangleVertical
} from 'lucide-react';
import { gearPieces, GearPiece, getSkillSlotLabel } from '@/data/gear';
import { Build, BuildClass, getBuildsByClass } from '@/data/builds';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = {
  'hard-hat': HardHat,
  'shield': Shield,
  'shirt': Shirt,
  'footprints': Footprints,
  'circle': Circle,
  'sword': Sword,
  'gem': Gem,
  'sparkles': Sparkles,
  'circle-dot': CircleDot,
  'rectangle-vertical': RectangleVertical,
};

interface RecommendationResult {
  gear: GearPiece;
  build?: Build;
  defensive?: string;
  skillSpecific?: string[];
  ultimateSpecific?: string[];
  offensive?: string[];
}

function getRecommendations(gear: GearPiece, build?: Build): RecommendationResult {
  const result: RecommendationResult = { gear, build };
  
  // Defensive slot (4th) - only for armor
  if (gear.has4thSlot) {
    result.defensive = 'Evasion';
  }
  
  // Offensive gear (5th slot)
  if (gear.category === 'offensive') {
    result.offensive = ['Critical', 'Additional Damage Chance'];
    return result;
  }
  
  // Skill-specific (5th slot) - requires build for armor
  if (build && gear.category === 'armor') {
    switch (gear.skillSlotType) {
      case 'basic':
        result.skillSpecific = [
          `${build.basicSkill} Damage Up`,
          `${build.basicSkill} Haste`
        ];
        break;
      case 'control':
        // Control skills: Cooldown/Haste
        result.skillSpecific = [
          ...build.controlSkills.map(s => `${s} Cooldown`),
          ...build.controlSkills.map(s => `${s} Haste`)
        ];
        // Ultimate skill: CD only (for specific builds)
        result.ultimateSpecific = [
          `${build.ultimateSkill} CD`
        ];
        break;
      case 'core':
        result.skillSpecific = [
          `${build.coreSkill} Damage Up`,
          `${build.coreSkill} Haste`
        ];
        break;
    }
  }
  
  return result;
}

export default function RerollAdvisor() {
  const [selectedGear, setSelectedGear] = useState<GearPiece | null>(null);
  const [selectedClass, setSelectedClass] = useState<BuildClass>('Arcanist');
  const [selectedBuild, setSelectedBuild] = useState<Build | null>(null);
  
  const needsBuild = selectedGear?.category === 'armor';
  const canShowResults = selectedGear && (!needsBuild || selectedBuild);
  const recommendations = canShowResults ? getRecommendations(selectedGear, selectedBuild ?? undefined) : null;
  
  const handleGearSelect = (gear: GearPiece) => {
    setSelectedGear(gear);
    // Keep build selected when switching between armor pieces
  };
  
  const handleReset = () => {
    setSelectedGear(null);
    setSelectedBuild(null);
  };

  const armorPieces = gearPieces.filter(g => g.category === 'armor');
  const offensivePieces = gearPieces.filter(g => g.category === 'offensive');
  const builds = getBuildsByClass(selectedClass);

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
              return (
                <button
                  key={gear.id}
                  onClick={() => handleGearSelect(gear)}
                  className={cn(
                    "flex flex-col items-center gap-2 p-3 rounded-lg border transition-all duration-200",
                    isSelected
                      ? "border-skill bg-skill/10 glow-skill"
                      : "border-border/50 bg-card/50 hover:border-skill/50 hover:bg-skill/5"
                  )}
                >
                  <Icon className={cn("w-6 h-6", isSelected ? "text-skill" : "text-muted-foreground")} />
                  <span className={cn("text-xs font-medium", isSelected ? "text-skill" : "text-foreground")}>
                    {gear.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Offensive */}
        <div>
          <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
            <Zap className="w-4 h-4 text-offensive" />
            Weapon & Jewelry (Offensive Stats Only) — Always roll Crit Chance and/or Additional Damage Chance on 5th slot
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
                    "flex flex-col items-center gap-2 p-3 rounded-lg border transition-all duration-200",
                    isSelected
                      ? "border-offensive bg-offensive/10 glow-offensive"
                      : "border-border/50 bg-card/50 hover:border-offensive/50 hover:bg-offensive/5"
                  )}
                >
                  <Icon className={cn("w-6 h-6", isSelected ? "text-offensive" : "text-muted-foreground")} />
                  <span className={cn("text-xs font-medium", isSelected ? "text-offensive" : "text-foreground")}>
                    {gear.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Reroll Recommendations - shown BETWEEN gear and build selection */}
      {/* For armor: only show if build is selected. For offensive: always show */}
      {selectedGear && (selectedGear.category === 'offensive' || selectedBuild) && (
        <div className="card-game p-6 animate-fade-in border-2 border-primary/30">
          <h3 className="font-cinzel text-xl text-foreground flex items-center gap-2 mb-2">
            <Target className="w-6 h-6 text-primary" />
            Reroll Recommendations
          </h3>
          
          <p className="text-muted-foreground mb-6">
            For <span className="text-gradient-gold font-semibold">{selectedGear.name}</span>
            {selectedBuild && (
              <> with <span className="text-primary font-semibold">{selectedBuild.name}</span> build</>
            )}
          </p>
          
          <div className="space-y-4">
            {/* Skill-Specific (5th Slot) - PRIORITY ON TOP */}
            {recommendations?.skillSpecific && (
              <div className="p-4 rounded-lg bg-skill/10 border border-skill/30">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-skill" />
                  <span className="font-semibold text-skill">
                    5th Slot — {getSkillSlotLabel(selectedGear.skillSlotType)}
                  </span>
                  <span className="text-xs bg-skill/20 text-skill px-2 py-0.5 rounded-full ml-auto">
                    Priority!
                  </span>
                </div>
                <div className="space-y-1 ml-7">
                  {recommendations.skillSpecific.map((stat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-skill/70" />
                      <span className="text-foreground font-medium">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Ultimate Skill (5th Slot - for Cuirass/Greaves only) */}
            {recommendations?.ultimateSpecific && (
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">
                    5th Slot — Ultimate Skill
                  </span>
                  <span className="text-xs bg-muted/50 text-muted-foreground px-2 py-0.5 rounded-full ml-auto">
                    Build-specific
                  </span>
                </div>
                <div className="space-y-1 ml-7">
                  {recommendations.ultimateSpecific.map((stat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-primary/70" />
                      <span className="text-foreground font-medium">{stat}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2 ml-7">
                  Only recommended for builds that heavily rely on Ultimate uptime.
                </p>
              </div>
            )}
            
            {/* Offensive (5th Slot) - for weapons/jewelry */}
            {recommendations?.offensive && (
              <div className="p-4 rounded-lg bg-offensive/10 border border-offensive/30">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-offensive" />
                  <span className="font-semibold text-offensive">5th Slot — Offensive</span>
                  <span className="text-xs bg-offensive/20 text-offensive px-2 py-0.5 rounded-full ml-auto">
                    Priority!
                  </span>
                </div>
                <div className="space-y-1 ml-7">
                  {recommendations.offensive.map((stat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-offensive/70" />
                      <span className="text-foreground font-medium">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Defensive (4th Slot) - below 5th slot */}
            {selectedGear.has4thSlot && (
              <div className="p-4 rounded-lg bg-defensive/10 border border-defensive/30">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-defensive" />
                  <span className="font-semibold text-defensive">4th Slot — Defensive</span>
                </div>
                <div className="flex items-center gap-2 ml-7">
                  <ChevronRight className="w-4 h-4 text-defensive/70" />
                  <span className="text-foreground font-medium">Evasion</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Step 2: Build Selection (only for armor) - comes AFTER recommendations */}
      {selectedGear && needsBuild && (
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
                  "px-4 py-2 rounded-lg font-medium transition-all duration-200",
                  selectedClass === cls
                    ? "bg-primary text-primary-foreground"
                    : "bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground border border-border/50"
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
                    "p-3 rounded-lg border text-left transition-all duration-200",
                    isSelected
                      ? "border-primary bg-primary/10 glow-offensive"
                      : "border-border/50 bg-card/50 hover:border-primary/50 hover:bg-primary/5"
                  )}
                >
                  <p className={cn("font-semibold text-sm", isSelected ? "text-primary" : "text-foreground")}>
                    {build.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Core: {build.coreSkill}
                  </p>
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
