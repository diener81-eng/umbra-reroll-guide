import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

// Stat descriptions from the wiki
const statDescriptions: Record<string, { summary: string; detail: string }> = {
  // Defensive stats
  'Evasion': {
    summary: 'Chance to dodge attacks',
    detail: 'When you evade, you take zero damage from that attack. Very powerful in theory, but only works if the enemy\'s Hit isn\'t too high. Evasion is a "high risk, high reward" stat — if the enemy has tons of Hit, your Evasion may do nothing. But against enemies with low Hit, high Evasion can make you nearly untouchable.'
  },
  
  // Offensive stats
  'Critical': {
    summary: 'Chance to critical hit',
    detail: 'Your chance to land a critical hit. When you crit, your damage is multiplied by your Crit Dmg. The Crit system has 4 interacting stats: Crit vs Crit Deflect determines IF you crit, while Crit Dmg vs Crit Dmg Res. determines HOW MUCH extra damage the crit deals.'
  },
  'Additional Damage Chance': {
    summary: 'Extra damage proc chance',
    detail: 'Chance to trigger an additional damage "packet" when you hit. This is rolled separately from your main attack. When it triggers, a separate damage calculation happens using your Add. Dmg stat. This extra damage is added on top of your main hit. Fast-hitting builds benefit more since it can trigger on every attack.'
  },
  
  // Skill stat types
  'Damage Up': {
    summary: 'Increases skill damage',
    detail: 'Increases the damage output of the specified skill. This is a multiplier that boosts the base damage of the skill, making it more effective in combat. Prioritize this for your main damage-dealing abilities.'
  },
  'Haste': {
    summary: 'Reduces skill cooldown',
    detail: 'Reduces the cooldown time of the specified skill, allowing you to cast it more frequently. More casts mean more damage over time and better uptime on key abilities. Especially valuable for skills you spam constantly.'
  },
  'Cooldown': {
    summary: 'Reduces skill cooldown',
    detail: 'Reduces the cooldown time of the specified skill. Lower cooldown means more frequent use of control abilities, giving you better crowd control uptime and more opportunities to disable enemies.'
  },
  'CD': {
    summary: 'Reduces ultimate cooldown',
    detail: 'Reduces the cooldown time of your Ultimate skill. Only recommended for builds that heavily rely on Ultimate uptime. Getting your Ultimate back faster can be game-changing in extended fights.'
  }
};

// Helper to find the best matching description
function getStatDescription(statName: string): { summary: string; detail: string } | null {
  // Direct match
  if (statDescriptions[statName]) {
    return statDescriptions[statName];
  }
  
  // Check for skill-specific stats (e.g., "Fireball Damage Up" -> "Damage Up")
  for (const key of Object.keys(statDescriptions)) {
    if (statName.endsWith(key)) {
      return statDescriptions[key];
    }
  }
  
  return null;
}

interface StatItemProps {
  stat: string;
  colorClass: string;
}

export default function StatItem({ stat, colorClass }: StatItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const description = getStatDescription(stat);
  
  if (!description) {
    // No description available, render simple non-expandable item
    return (
      <div className="flex items-center gap-2">
        <ChevronRight className={cn("w-4 h-4", colorClass)} />
        <span className="text-foreground font-medium">{stat}</span>
      </div>
    );
  }
  
  return (
    <div className="space-y-1">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 w-full text-left hover:opacity-80 transition-opacity group"
      >
        {isExpanded ? (
          <ChevronDown className={cn("w-4 h-4 transition-transform", colorClass)} />
        ) : (
          <ChevronRight className={cn("w-4 h-4 transition-transform", colorClass)} />
        )}
        <span className="text-foreground font-medium">{stat}</span>
        <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-1">
          (click for details)
        </span>
      </button>
      
      {isExpanded && (
        <div className="ml-6 p-3 rounded-lg bg-background/50 border border-border/30 animate-fade-in">
          <p className="text-sm font-medium text-foreground mb-1">
            {description.summary}
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {description.detail}
          </p>
        </div>
      )}
    </div>
  );
}
