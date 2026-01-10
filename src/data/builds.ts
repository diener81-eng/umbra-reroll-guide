export type BuildClass = 'Arcanist' | 'Savage';

// Slot 5 priorities by armor piece type
export interface ArmorSlot5Priority {
  helmPauldron: string[];   // Basic skill stats
  beltBoots: string[];      // Core skill stats
  cuirassGreaves: string[]; // Ultimate skill stats
}

// Group-based stat priorities
export interface BuildStatPriority {
  groupA: string[];         // Weapon + Necklace + Amulet + Ring
  groupB: string[];         // Gauntlets + Bracers
  groupC: string[];         // All armor pieces
  slot4: string[];          // Armor 4th slot (Evasion priority for PvP)
  slot5: ArmorSlot5Priority; // Armor 5th slot by piece type
  defense: string[];        // Defensive priorities
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

// Default slot 5 priorities for most builds
const defaultSlot5: ArmorSlot5Priority = {
  helmPauldron: ['Basic Skill Haste', 'Basic Skill Dmg Up'],
  beltBoots: ['Core Skill Dmg Up', 'Core Skill Haste'], // keep if you prefer dmg > haste here
  cuirassGreaves: ['Ultimate CD', 'Ultimate Haste'],
};


// Ancient God builds prioritize Ultimate CD
const ancientGodSlot5: ArmorSlot5Priority = {
  helmPauldron: ['Basic Skill Dmg Up', 'Basic Skill Haste'],
  beltBoots: ['Core Skill Dmg Up', 'Core Skill Haste'],
  cuirassGreaves: ['Ultimate CD', 'Ultimate Haste'], // HIGHEST priority
};

// Standard defense priorities
const standardDefense = ['Physical Res.', 'Elemental Res.', 'Evasion', 'Heal on Hit'];
const pvpDefense = ['Evasion', 'Physical Res.', 'Elemental Res.', 'Heal on Hit'];

export const arcanistBuilds: Build[] = [
  // ===== FIREBALL CORE BUILDS =====
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
      slot5: defaultSlot5,
      defense: standardDefense
    }
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
      groupA: ['Elemental Damage', 'Add Dmg', 'Add Dmg Chance', 'Core Skill Dmg', 'Crit Damage'], // and Crit Chance can be included if you want slot5 groupA
      groupB: ['Elemental Damage', 'Add Dmg', 'Add Dmg Chance', 'Core Skill Dmg', 'Crit Damage'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: ancientGodSlot5,
      defense: standardDefense
    }
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
      slot5: defaultSlot5,
      defense: standardDefense
    }
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
      slot4: ['Evasion'], // TOP priority for PvP
      slot5: defaultSlot5,
      defense: pvpDefense
    }
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
      slot5: ancientGodSlot5,
      defense: standardDefense
    }
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
      slot5: ancientGodSlot5,
      defense: standardDefense
    }
  },

  // ===== LIGHTNING PUNCH CORE BUILDS =====
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
      slot5: defaultSlot5,
      defense: standardDefense
    }
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
      slot4: ['Evasion'], // TOP priority for PvP
      slot5: defaultSlot5,
      defense: pvpDefense
    }
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
      slot5: defaultSlot5,
      defense: standardDefense
    }
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
      slot5: defaultSlot5,
      defense: standardDefense
    }
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
      slot4: ['Evasion'], // TOP priority for PvP
      slot5: defaultSlot5,
      defense: pvpDefense
    }
  },

  // ===== ICE RAY CORE BUILDS =====
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
      slot5: defaultSlot5,
      defense: standardDefense
    }
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
      slot4: ['Evasion'], // TOP priority for PvP
      slot5: defaultSlot5,
      defense: pvpDefense
    }
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
      slot5: defaultSlot5,
      defense: standardDefense
    }
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
      slot5: defaultSlot5,
      defense: standardDefense
    }
  },
];

export const savageBuilds: Build[] = [
  // ===== BLADESTORM CORE BUILDS =====
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
      slot5: defaultSlot5,
      defense: standardDefense
    }
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
      slot4: ['Evasion'], // TOP priority for PvP
      slot5: defaultSlot5,
      defense: pvpDefense
    }
  },
  { 
    name: 'Fiery Rage', 
    class: 'Savage', 
    coreSkill: 'Bladestorm', 
    basicSkill: 'Bloodlust', 
    controlSkills: ['Raze', 'Rampage'], 
    ultimateSkill: 'Ragnarok',
    statPriority: {
      groupA: ['Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupB: ['Crit Chance', 'Core Skill Dmg', 'Elemental Damage'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: defaultSlot5,
      defense: standardDefense
    }
  },
  { 
    name: 'Fiery Rage PVP', 
    class: 'Savage', 
    coreSkill: 'Bladestorm', 
    basicSkill: 'Bloodlust', 
    controlSkills: ['Raze', 'Rampage'], 
    ultimateSkill: 'Ragnarok',
    isPvP: true,
    statPriority: {
      groupA: ['Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupB: ['Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupC: [],
      slot4: ['Evasion'], // TOP priority for PvP
      slot5: defaultSlot5,
      defense: pvpDefense
    }
  },
  { 
    name: 'Thorn', 
    class: 'Savage', 
    coreSkill: 'Bladestorm', 
    basicSkill: 'Bloodlust', 
    controlSkills: ['Raze', 'Rampage'], 
    ultimateSkill: 'Ragnarok',
    statPriority: {
      groupA: ['Add Dmg Chance', 'Add Dmg', 'Core Skill Dmg', 'Physical Damage'],
      groupB: ['Add Dmg Chance', 'Add Dmg', 'Core Skill Dmg', 'Physical Damage'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: defaultSlot5,
      defense: standardDefense
    }
  },
  { 
    name: 'Thorn PVP', 
    class: 'Savage', 
    coreSkill: 'Bladestorm', 
    basicSkill: 'Bloodlust', 
    controlSkills: ['Skybound Strike', 'Rampage'], 
    ultimateSkill: 'Ragnarok',
    isPvP: true,
    statPriority: {
      groupA: ['Add Dmg Chance', 'Add Dmg', 'Core Skill Dmg', 'Physical Damage'],
      groupB: ['Add Dmg Chance', 'Add Dmg', 'Core Skill Dmg', 'Physical Damage'],
      groupC: [],
      slot4: ['Evasion'], // TOP priority for PvP
      slot5: defaultSlot5,
      defense: pvpDefense
    }
  },

  // ===== SWIPE CORE BUILDS =====
  { 
    name: 'Blazefury', 
    class: 'Savage', 
    coreSkill: 'Swipe', 
    basicSkill: 'Strike', 
    controlSkills: ['Raze', 'Rampage'], 
    ultimateSkill: 'Ragnarok',
    statPriority: {
      groupA: ['Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Physical Damage', 'Elemental Damage'],
      groupB: ['Crit Damage', 'Core Skill Dmg', 'Physical Damage', 'Elemental Damage'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: defaultSlot5,
      defense: standardDefense
    }
  },
  { 
    name: 'Blazefury PVP', 
    class: 'Savage', 
    coreSkill: 'Swipe', 
    basicSkill: 'Strike', 
    controlSkills: ['Raze', 'Rampage'], 
    ultimateSkill: 'Ragnarok',
    isPvP: true,
    statPriority: {
      groupA: ['Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Physical Damage', 'Elemental Damage'],
      groupB: ['Crit Damage', 'Core Skill Dmg', 'Physical Damage', 'Elemental Damage'],
      groupC: [],
      slot4: ['Evasion'], // TOP priority for PvP
      slot5: defaultSlot5,
      defense: pvpDefense
    }
  },
  { 
    name: 'Wild Spark', 
    class: 'Savage', 
    coreSkill: 'Swipe', 
    basicSkill: 'Strike', 
    controlSkills: ['Raze', 'Rampage'], 
    ultimateSkill: 'Ragnarok',
    statPriority: {
      groupA: ['Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupB: ['Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: defaultSlot5,
      defense: standardDefense
    }
  },
  { 
    name: 'Ritual Blade', 
    class: 'Savage', 
    coreSkill: 'Swipe', 
    basicSkill: 'Strike', 
    controlSkills: ['Raze', 'Rampage'], 
    ultimateSkill: 'Ragnarok',
    statPriority: {
      groupA: ['Add Dmg Chance', 'Add Dmg', 'Core Skill Dmg', 'Physical Damage'],
      groupB: ['Add Dmg Chance', 'Add Dmg', 'Core Skill Dmg', 'Physical Damage'],
      groupC: [],
      slot4: ['Evasion'],
      slot5: defaultSlot5,
      defense: standardDefense
    }
  },

  // ===== HEAVY BLOW CORE BUILDS =====
  { 
    name: 'Hellfire', 
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
      slot5: defaultSlot5,
      defense: standardDefense
    }
  },
  { 
    name: 'Hellfire PVP', 
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
      slot4: ['Evasion'], // TOP priority for PvP
      slot5: defaultSlot5,
      defense: pvpDefense
    }
  },
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
      slot5: defaultSlot5,
      defense: standardDefense
    }
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
      slot5: defaultSlot5,
      defense: standardDefense
    }
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
      slot4: ['Evasion'], // TOP priority for PvP
      slot5: defaultSlot5,
      defense: pvpDefense
    }
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
  return 'C'; // All armor pieces
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
