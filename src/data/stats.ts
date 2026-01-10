// Comprehensive stat database for Lootborn Warriors gear

export type StatCategory = 'offensive' | 'defensive' | 'skill' | 'utility';

export interface StatDefinition {
  id: string;
  name: string;
  summary: string;
  detail: string;
  category: StatCategory;
}

// All stats with their descriptions
export const allStats: StatDefinition[] = [
  // === DEFENSIVE STATS ===
  {
    id: 'evasion',
    name: 'Evasion',
    summary: 'Chance to dodge attacks',
    detail: 'When you evade, you take zero damage from that attack. Very powerful in theory, but only works if the enemy\'s Hit isn\'t too high. Evasion is a "high risk, high reward" stat — if the enemy has tons of Hit, your Evasion may do nothing. But against enemies with low Hit, high Evasion can make you nearly untouchable.',
    category: 'defensive'
  },
  {
    id: 'physical_res',
    name: 'Physical Res.',
    summary: 'Reduces physical damage taken',
    detail: 'Reduces the physical damage you receive from enemy attacks. Physical resistance is a flat reduction that applies before other damage calculations. Stack this against physical-heavy enemies.',
    category: 'defensive'
  },
  {
    id: 'elemental_res',
    name: 'Elemental Res.',
    summary: 'Reduces elemental damage taken',
    detail: 'Reduces the elemental damage you receive from enemy attacks. Elemental resistance covers fire, ice, lightning, and other magical damage types. Essential against caster-heavy content.',
    category: 'defensive'
  },
  {
    id: 'block_chance',
    name: 'Block Chance',
    summary: 'Chance to block attacks',
    detail: 'Your chance to block an incoming attack. When you block, you reduce the damage taken by your Block Value. Unlike Evasion which is all-or-nothing, Block provides consistent damage reduction.',
    category: 'defensive'
  },
  {
    id: 'block_value',
    name: 'Block Value',
    summary: 'Damage reduced when blocking',
    detail: 'The amount of damage reduced when you successfully block an attack. Higher Block Value means more damage prevented per block. Scales well with Block Chance.',
    category: 'defensive'
  },
  {
    id: 'heal_on_hit',
    name: 'Heal on Hit',
    summary: 'Restore HP when hitting enemies',
    detail: 'Heals you for a small amount each time you hit an enemy. Fast-attacking builds benefit more since healing triggers on every hit. Great for sustain in extended fights.',
    category: 'defensive'
  },
  {
    id: 'hp_regen',
    name: 'HP Regen',
    summary: 'Passive health regeneration',
    detail: 'Restores health over time passively. Useful for recovering between fights and sustaining through chip damage. Less effective during intense combat compared to Heal on Hit.',
    category: 'defensive'
  },
  {
    id: 'slow_res',
    name: 'Slow Res.',
    summary: 'Resistance to slow effects',
    detail: 'Reduces the effectiveness and duration of slow effects applied to you. Helps maintain mobility when fighting enemies with slowing abilities.',
    category: 'defensive'
  },
  {
    id: 'stun_res',
    name: 'Stun Res.',
    summary: 'Resistance to stun effects',
    detail: 'Reduces the duration of stun effects applied to you. Stuns are one of the most dangerous crowd control effects, so this resistance is valuable in PvP and against certain bosses.',
    category: 'defensive'
  },
  {
    id: 'knockback_res',
    name: 'Knockback Res.',
    summary: 'Resistance to knockback effects',
    detail: 'Reduces how far you get knocked back by enemy attacks. Helps maintain positioning and prevents interruption of channeled abilities.',
    category: 'defensive'
  },

  // === OFFENSIVE STATS ===
  {
    id: 'crit_chance',
    name: 'Crit Chance',
    summary: 'Chance to critical hit',
    detail: 'Your chance to land a critical hit. When you crit, your damage is multiplied by your Crit Dmg. The Crit system has 4 interacting stats: Crit vs Crit Deflect determines IF you crit, while Crit Dmg vs Crit Dmg Res. determines HOW MUCH extra damage the crit deals.',
    category: 'offensive'
  },
  {
    id: 'thorn_dmg',
    name: 'Thorn Dmg',
    summary: 'Reflect damage to attackers',
    detail: 'Deals damage back to enemies when they hit you. Thorn damage scales with the amount listed and triggers on every hit received. Can be a significant damage source in tank builds.',
    category: 'offensive'
  },
  {
    id: 'physical_dmg',
    name: 'Physical Damage',
    summary: 'Increases physical damage dealt',
    detail: 'A multiplier that increases all physical damage you deal. Affects weapon attacks and physical skills. One of the most universally useful offensive stats.',
    category: 'offensive'
  },
  {
    id: 'elemental_dmg',
    name: 'Elemental Damage',
    summary: 'Increases elemental damage dealt',
    detail: 'A multiplier that increases all elemental damage you deal. Affects magical skills and elemental weapon damage. Essential for caster builds.',
    category: 'offensive'
  },
  {
    id: 'crit_dmg',
    name: 'Crit Damage',
    summary: 'Critical hit damage multiplier',
    detail: 'Increases the damage multiplier when you land a critical hit. Works in conjunction with Crit Chance — high Crit Damage is useless without Crit Chance, and vice versa.',
    category: 'offensive'
  },
  {
    id: 'add_dmg',
    name: 'Add Dmg',
    summary: 'Additional damage proc chance',
    detail: 'Chance to trigger an additional damage "packet" when you hit. This is rolled separately from your main attack. When it triggers, a separate damage calculation happens. This extra damage is added on top of your main hit. Fast-hitting builds benefit more since it can trigger on every attack.',
    category: 'offensive'
  },
  {
    id: 'basic_skill_dmg',
    name: 'Basic Skill Dmg Up',
    summary: 'Increases basic skill damage',
    detail: 'Increases the damage output of your basic skill. A generic multiplier that affects all basic skills regardless of which one you use.',
    category: 'offensive'
  },
  {
    id: 'core_skill_dmg',
    name: 'Core Skill Dmg',
    summary: 'Increases core skill damage',
    detail: 'Increases the damage output of your core skill. A generic multiplier that affects all core skills. Core skills are typically your main damage dealers.',
    category: 'offensive'
  },
  {
    id: 'dot_dmg',
    name: 'Dmg Over Time',
    summary: 'Increases damage over time effects',
    detail: 'Increases the damage of all damage-over-time effects you apply. Affects burns, bleeds, poisons, and other DoT effects. Great for builds focused on sustained damage.',
    category: 'offensive'
  },
  {
    id: 'mspd',
    name: 'MSPD',
    summary: 'Movement speed',
    detail: 'Increases your movement speed. Faster movement helps with dodging, kiting, and general navigation. Quality of life stat that also improves survivability.',
    category: 'utility'
  },

  // === SKILL-SPECIFIC STATS (generic templates) ===
  {
    id: 'skill_dmg_up',
    name: 'Damage Up',
    summary: 'Increases skill damage',
    detail: 'Increases the damage output of the specified skill. This is a multiplier that boosts the base damage of the skill, making it more effective in combat. Prioritize this for your main damage-dealing abilities.',
    category: 'skill'
  },
  {
    id: 'skill_haste',
    name: 'Haste',
    summary: 'Reduces skill cooldown',
    detail: 'Reduces the cooldown time of the specified skill, allowing you to cast it more frequently. More casts mean more damage over time and better uptime on key abilities. Especially valuable for skills you spam constantly.',
    category: 'skill'
  },
  {
    id: 'skill_cooldown',
    name: 'Cooldown',
    summary: 'Reduces skill cooldown',
    detail: 'Reduces the cooldown time of the specified skill. Lower cooldown means more frequent use of control abilities, giving you better crowd control uptime and more opportunities to disable enemies.',
    category: 'skill'
  },
  {
    id: 'ultimate_cd',
    name: 'CD',
    summary: 'Reduces ultimate cooldown',
    detail: 'Reduces the cooldown time of your Ultimate skill. Only recommended for builds that heavily rely on Ultimate uptime. Getting your Ultimate back faster can be game-changing in extended fights.',
    category: 'skill'
  }
];

// Get stat by ID
export function getStatById(id: string): StatDefinition | undefined {
  return allStats.find(s => s.id === id);
}

// Get stat by name (for display matching)
export function getStatByName(name: string): StatDefinition | undefined {
  // Direct match first
  const direct = allStats.find(s => s.name === name);
  if (direct) return direct;
  
  // Check for skill-specific stats (e.g., "Fireball Damage Up" -> "Damage Up")
  for (const stat of allStats) {
    if (name.endsWith(stat.name)) {
      return stat;
    }
  }
  
  return undefined;
}

// === GEAR SLOT CONFIGURATIONS ===

export type GearType = 'armor' | 'offensive' | 'accessory';

export interface GearSlotConfig {
  gearType: GearType;
  slot4Only: string[];     // Stats exclusive to 4th slot
  slot5Only: string[];     // Stats exclusive to 5th slot  
  anySlot: string[];       // Stats available in any slot (1-3, 6)
}

// Armor: Helm, Pauldrons, Cuirass, Greaves, Belt, Boots
// 4th slot: Evasion + other defensive stats
// 5th slot: Skill-specific (Dmg Up / Haste based on gear piece and build)
// Other slots: Defensive stats
export const armorSlotConfig: GearSlotConfig = {
  gearType: 'armor',
  slot4Only: ['Evasion'],  // Only 4th slot has Evasion
  slot5Only: [],  // Skill-specific - handled dynamically based on build
  anySlot: [
    'Physical Res.',
    'Elemental Res.',
    'Block Chance',
    'Block Value',
    'Heal on Hit',
    'HP Regen',
    'Slow Res.',
    'Stun Res.',
    'Knockback Res.'
  ]
};

// Offensive Gear: Weapon, Necklace, Amulet, Ring
// 5th slot: Crit Chance, Thorn Dmg (exclusive)
// Other slots: Various offensive stats
export const offensiveSlotConfig: GearSlotConfig = {
  gearType: 'offensive',
  slot4Only: [],
  slot5Only: ['Crit Chance', 'Thorn Dmg'],  // Only 5th slot has these
  anySlot: [
    'Physical Damage',
    'Elemental Damage',
    'Crit Damage',
    'Thorn Dmg',
    'Add Dmg',
    'Basic Skill Dmg Up',
    'Core Skill Dmg',
    'Dmg Over Time',
    'MSPD'
  ]
};

// Accessories: Gauntlets, Bracers
// All 6 slots can have any of these stats (no exclusive slots)
export const accessorySlotConfig: GearSlotConfig = {
  gearType: 'accessory',
  slot4Only: [],
  slot5Only: [],
  anySlot: [
    'Physical Damage',
    'Elemental Damage',
    'Crit Damage',
    'Thorn Dmg',
    'Add Dmg',
    'Basic Skill Dmg Up',
    'Core Skill Dmg',
    'Dmg Over Time',
    'MSPD'
  ]
};

// Get slot config by gear type
export function getSlotConfigByType(gearType: GearType): GearSlotConfig {
  switch (gearType) {
    case 'armor': return armorSlotConfig;
    case 'offensive': return offensiveSlotConfig;
    case 'accessory': return accessorySlotConfig;
  }
}
