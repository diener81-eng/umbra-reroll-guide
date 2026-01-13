export type BuildClass = 'Arcanist' | 'Savage';

// Slot 5 priorities by armor piece type
export interface ArmorSlot5Priority {
  helmPauldron: string[]; // Basic skill stats
  beltBoots: string[]; // Core skill stats
  cuirassGreaves: string[]; // Ultimate skill stats
}

// Group-based stat priorities
export interface BuildStatPriority {
  groupA: string[]; // Weapon + Necklace + Amulet + Ring
  groupB: string[]; // Gauntlets + Bracers
  groupC: string[]; // (unused for armor other-slots; kept for compatibility)
  slot4: string[]; // Armor 4th slot
  slot5: ArmorSlot5Priority; // Armor 5th slot by piece type
  defense: string[]; // Defensive priorities
}

export interface Build {
  name: string;
  class: BuildClass;
  coreSkill: string;
  basicSkill: string;
  controlSkills: string[];
  ultimateSkill: string;
  statPriority: BuildStatPriority;
  isPvP?: boolean;
  isAncientGod?: boolean;
}

// Standard defense priorities
const standardDefense = ['Physical Res.', 'Elemental Res.', 'Evasion', 'Heal on Hit'];
const pvpDefense = ['Evasion', 'Physical Res.', 'Elemental Res.', 'Heal on Hit'];

// Default slot 5 templates
const baseSlot5: ArmorSlot5Priority = {
  helmPauldron: ['Basic Skill Dmg Up', 'Basic Skill Haste'],
  beltBoots: ['Core Skill Dmg Up', 'Core Skill Haste'],
  cuirassGreaves: ['Ultimate CD'], // default: only CD (no haste)
};

// If Ultimate is Aether Form, it has Dmg Up instead of CD/Haste.
// We keep it as a TEMPLATE string so the UI can display "Aether Form Dmg Up" automatically.
const aetherFormSlot5: ArmorSlot5Priority = {
  helmPauldron: ['Basic Skill Dmg Up', 'Basic Skill Haste'],
  beltBoots: ['Core Skill Dmg Up', 'Core Skill Haste'],
  cuirassGreaves: ['Ultimate Dmg Up'],
};

function slot5ForUltimate(ultimateSkill: string): ArmorSlot5Priority {
  return ultimateSkill === 'Aether Form' ? aetherFormSlot5 : baseSlot5;
}

export const arcanistBuilds: Build[] = [
  {
    name: 'Iceflame',
    class: 'Arcanist',
    coreSkill: 'Fireball',
    basicSkill: 'Flame Wave',
    controlSkills: ['Flash', 'Frost Shield'],
    ultimateSkill: 'Hail',
    statPriority: {
      groupA: ['Elemental Damage', 'Add Dmg', 'Add Dmg Chance', 'Core Skill Dmg', 'Crit Chance', 'Crit Damage'],
      groupB: ['Elemental Damage', 'Add Dmg', 'Add Dmg Chance', 'Core Skill Dmg', 'Crit Damage'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: slot5ForUltimate('Hail'),
      defense: standardDefense,
    },
  },
  {
    name: 'Iceflame Ancient God',
    class: 'Arcanist',
    coreSkill: 'Fireball',
    basicSkill: 'Flame Wave',
    controlSkills: ['Flash', 'Frost Shield'],
    ultimateSkill: 'Hail',
    isAncientGod: true,
    statPriority: {
      groupA: ['Elemental Damage', 'Add Dmg', 'Add Dmg Chance', 'Core Skill Dmg', 'Crit Damage'],
      groupB: ['Elemental Damage', 'Add Dmg', 'Add Dmg Chance', 'Core Skill Dmg', 'Crit Damage'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: slot5ForUltimate('Hail'),
      defense: standardDefense,
    },
  },
  {
    name: 'Pyroblast',
    class: 'Arcanist',
    coreSkill: 'Fireball',
    basicSkill: 'Flame Wave',
    controlSkills: ['Flash', 'Frost Shield'],
    ultimateSkill: 'Aether Form',
    statPriority: {
      groupA: ['Elemental Damage', 'Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Dmg Over Time'],
      groupB: ['Elemental Damage', 'Crit Damage', 'Core Skill Dmg', 'Dmg Over Time'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: slot5ForUltimate('Aether Form'),
      defense: standardDefense,
    },
  },
  {
    name: 'Pyroblast PVP',
    class: 'Arcanist',
    coreSkill: 'Fireball',
    basicSkill: 'Flame Wave',
    controlSkills: ['Flash', 'Frost Shield'],
    ultimateSkill: 'Aether Form',
    isPvP: true,
    statPriority: {
      groupA: ['Elemental Damage', 'Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Dmg Over Time'],
      groupB: ['Elemental Damage', 'Crit Damage', 'Core Skill Dmg', 'Dmg Over Time'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: slot5ForUltimate('Aether Form'),
      defense: pvpDefense,
    },
  },
  {
    name: 'Pyroblast Ancient God',
    class: 'Arcanist',
    coreSkill: 'Fireball',
    basicSkill: 'Lightning Whip',
    controlSkills: ['Flash', 'Frost Shield'],
    ultimateSkill: 'Hail',
    isAncientGod: true,
    statPriority: {
      groupA: ['Elemental Damage', 'Crit Chance', 'Crit Damage', 'Core Skill Dmg'],
      groupB: ['Elemental Damage', 'Crit Damage', 'Core Skill Dmg'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: slot5ForUltimate('Hail'),
      defense: standardDefense,
    },
  },
  {
    name: 'Jolt Ancient God',
    class: 'Arcanist',
    coreSkill: 'Fireball',
    basicSkill: 'Flame Wave',
    controlSkills: ['Flash', 'Frost Shield'],
    ultimateSkill: 'Hail',
    isAncientGod: true,
    statPriority: {
      groupA: ['Elemental Damage', 'Crit Chance', 'Crit Damage', 'Core Skill Dmg'],
      groupB: ['Elemental Damage', 'Crit Damage', 'Core Skill Dmg'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: slot5ForUltimate('Hail'),
      defense: standardDefense,
    },
  },

  // Lightning Punch
  {
    name: 'Ice Sword',
    class: 'Arcanist',
    coreSkill: 'Lightning Punch',
    basicSkill: 'Flame Wave',
    controlSkills: ['Flash', 'Frost Shield'],
    ultimateSkill: 'Aether Form',
    statPriority: {
      groupA: ['Elemental Damage', 'Crit Chance', 'Crit Damage', 'Core Skill Dmg'],
      groupB: ['Elemental Damage', 'Crit Damage', 'Core Skill Dmg'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: slot5ForUltimate('Aether Form'),
      defense: standardDefense,
    },
  },
  {
    name: 'Ice Sword PVP',
    class: 'Arcanist',
    coreSkill: 'Lightning Punch',
    basicSkill: 'Lightning Whip',
    controlSkills: ['Flash', 'Frost Shield'],
    ultimateSkill: 'Hail',
    isPvP: true,
    statPriority: {
      groupA: ['Elemental Damage', 'Crit Chance', 'Crit Damage', 'Core Skill Dmg'],
      groupB: ['Elemental Damage', 'Crit Damage', 'Core Skill Dmg'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: slot5ForUltimate('Hail'),
      defense: pvpDefense,
    },
  },
  {
    name: 'Flame Bow',
    class: 'Arcanist',
    coreSkill: 'Lightning Punch',
    basicSkill: 'Flame Wave',
    controlSkills: ['Flash', 'Infernal Bloom'],
    ultimateSkill: 'Aether Form',
    statPriority: {
      groupA: ['Elemental Damage', 'Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Dmg Over Time'],
      groupB: ['Elemental Damage', 'Crit Damage', 'Core Skill Dmg', 'Dmg Over Time'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: slot5ForUltimate('Aether Form'),
      defense: standardDefense,
    },
  },
  {
    name: 'Thunder Punch',
    class: 'Arcanist',
    coreSkill: 'Lightning Punch',
    basicSkill: 'Flame Wave',
    controlSkills: ['Flash', 'Frost Shield'],
    ultimateSkill: 'Aether Form',
    statPriority: {
      groupA: ['Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupB: ['Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: slot5ForUltimate('Aether Form'),
      defense: standardDefense,
    },
  },
  {
    name: 'Thunder Punch PVP',
    class: 'Arcanist',
    coreSkill: 'Lightning Punch',
    basicSkill: 'Flame Wave',
    controlSkills: ['Flash', 'Frost Shield'],
    ultimateSkill: 'Aether Form',
    isPvP: true,
    statPriority: {
      groupA: ['Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupB: ['Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: slot5ForUltimate('Aether Form'),
      defense: pvpDefense,
    },
  },

  // Ice Ray
  {
    name: 'Rimebite',
    class: 'Arcanist',
    coreSkill: 'Ice Ray',
    basicSkill: 'Flame Wave',
    controlSkills: ['Flash', 'Frost Shield'],
    ultimateSkill: 'Hail',
    statPriority: {
      groupA: ['Add Dmg', 'Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupB: ['Add Dmg', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: slot5ForUltimate('Hail'),
      defense: standardDefense,
    },
  },
  {
    name: 'Rimebite PVP',
    class: 'Arcanist',
    coreSkill: 'Ice Ray',
    basicSkill: 'Flame Wave',
    controlSkills: ['Flash', 'Frost Shield'],
    ultimateSkill: 'Hail',
    isPvP: true,
    statPriority: {
      groupA: ['Add Dmg', 'Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupB: ['Add Dmg', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: slot5ForUltimate('Hail'),
      defense: pvpDefense,
    },
  },
  {
    name: 'Pyresight',
    class: 'Arcanist',
    coreSkill: 'Ice Ray',
    basicSkill: 'Flame Wave',
    controlSkills: ['Flash', 'Frost Shield'],
    ultimateSkill: 'Hail',
    statPriority: {
      groupA: ['Add Dmg', 'Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupB: ['Add Dmg', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: slot5ForUltimate('Hail'),
      defense: standardDefense,
    },
  },
  {
    name: 'Ionization',
    class: 'Arcanist',
    coreSkill: 'Ice Ray',
    basicSkill: 'Flame Wave',
    controlSkills: ['Flash', 'Frost Shield'],
    ultimateSkill: 'Aether Form',
    statPriority: {
      groupA: ['Add Dmg Chance', 'Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupB: ['Add Dmg Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: slot5ForUltimate('Aether Form'),
      defense: standardDefense,
    },
  },
];

export const savageBuilds: Build[] = [
  // Bladestorm
  {
    name: 'Thunder',
    class: 'Savage',
    coreSkill: 'Bladestorm',
    basicSkill: 'Bloodlust',
    controlSkills: ['Raze', 'Rampage'],
    ultimateSkill: 'Ragnarok',
    statPriority: {
      groupA: ['Add Dmg Chance', 'Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupB: ['Add Dmg Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: slot5ForUltimate('Ragnarok'),
      defense: standardDefense,
    },
  },
  {
    name: 'Thunder PVP',
    class: 'Savage',
    coreSkill: 'Bladestorm',
    basicSkill: 'Bloodlust',
    controlSkills: ['Rush', 'Rampage'],
    ultimateSkill: 'Ragnarok',
    isPvP: true,
    statPriority: {
      groupA: ['Add Dmg Chance', 'Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupB: ['Add Dmg Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: slot5ForUltimate('Ragnarok'),
      defense: pvpDefense,
    },
  },

  // Heavy Blow
  {
    name: 'Ice Blast',
    class: 'Savage',
    coreSkill: 'Heavy Blow',
    basicSkill: 'Bloodlust',
    controlSkills: ['Raze', 'Rampage'],
    ultimateSkill: 'Savage',
    statPriority: {
      groupA: ['Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupB: ['Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: slot5ForUltimate('Savage'),
      defense: standardDefense,
    },
  },
  {
    name: 'Thunderbolt',
    class: 'Savage',
    coreSkill: 'Heavy Blow',
    basicSkill: 'Bloodlust',
    controlSkills: ['Raze', 'Rampage'],
    ultimateSkill: 'Ragnarok',
    statPriority: {
      groupA: ['Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupB: ['Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: slot5ForUltimate('Ragnarok'),
      defense: standardDefense,
    },
  },
  {
    name: 'Thunderbolt PVP',
    class: 'Savage',
    coreSkill: 'Heavy Blow',
    basicSkill: 'Bloodlust',
    controlSkills: ['Raze', 'Rampage'],
    ultimateSkill: 'Ragnarok',
    isPvP: true,
    statPriority: {
      groupA: ['Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupB: ['Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: slot5ForUltimate('Ragnarok'),
      defense: pvpDefense,
    },
  },
];

export const allBuilds = [...arcanistBuilds, ...savageBuilds];

export function getBuildsByClass(buildClass: BuildClass): Build[] {
  const builds = buildClass === 'Arcanist' ? arcanistBuilds : savageBuilds;
  return [...builds].sort((a, b) => a.name.localeCompare(b.name));
}

// Helper to get the gear group for a given gear ID
export type GearGroup = 'A' | 'B' | 'C';

export function getGearGroup(gearId: string): GearGroup {
  const groupA = ['weapon', 'necklace', 'amulet', 'ring'];
  const groupB = ['gauntlets', 'bracers'];

  if (groupA.includes(gearId)) return 'A';
  if (groupB.includes(gearId)) return 'B';
  return 'C';
}

// Helper to get the slot 5 type for armor pieces
export type ArmorSlot5Type = 'helmPauldron' | 'beltBoots' | 'cuirassGreaves';

export function getArmorSlot5Type(gearId: string): ArmorSlot5Type | null {
  switch (gearId) {
    case 'helm':
    case 'pauldron':
      return 'helmPauldron';
    case 'belt':
    case 'boots':
      return 'beltBoots';
    case 'cuirass':
    case 'greaves':
      return 'cuirassGreaves';
    default:
      return null;
  }
}