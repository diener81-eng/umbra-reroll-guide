export type BuildClass = 'Arcanist' | 'Savage';

export interface BuildStatPriority {
  offense: string[];
  defense: string[];
}

export interface Build {
  name: string;
  class: BuildClass;
  coreSkill: string;
  basicSkill: string;
  controlSkills: string[];
  ultimateSkill: string;
  statPriority: BuildStatPriority;
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
      offense: ['Elemental Damage', 'Add Dmg', 'Add Dmg Chance', 'Core Skill Dmg', 'Crit Chance', 'Crit Damage'],
      defense: ['Physical Res.', 'Elemental Res.', 'Evasion', 'Heal on Hit']
    }
  },
  { 
    name: 'Iceflame Ancient God', 
    class: 'Arcanist', 
    coreSkill: 'Fireball', 
    basicSkill: 'Flame Wave', 
    controlSkills: ['Flash', 'Frost Shield'], 
    ultimateSkill: 'Hail',
    statPriority: {
      offense: ['Elemental Damage', 'Add Dmg', 'Add Dmg Chance', 'Core Skill Dmg', 'Crit Chance', 'Crit Damage'],
      defense: ['Physical Res.', 'Elemental Res.', 'Evasion', 'Heal on Hit']
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
      offense: ['Elemental Damage', 'Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Dmg Over Time'],
      defense: ['Physical Res.', 'Elemental Res.', 'Evasion', 'Heal on Hit']
    }
  },
  { 
    name: 'Pyroblast Ancient God', 
    class: 'Arcanist', 
    coreSkill: 'Fireball', 
    basicSkill: 'Lightning Whip', 
    controlSkills: ['Flash', 'Frost Shield'], 
    ultimateSkill: 'Hail',
    statPriority: {
      offense: ['Hail CD', 'Elemental Damage', 'Crit Chance', 'Crit Damage', 'Core Skill Dmg'],
      defense: ['Physical Res.', 'Elemental Res.', 'Evasion', 'Heal on Hit']
    }
  },
  { 
    name: 'Jolt Ancient God', 
    class: 'Arcanist', 
    coreSkill: 'Fireball', 
    basicSkill: 'Flame Wave', 
    controlSkills: ['Flash', 'Frost Shield'], 
    ultimateSkill: 'Hail',
    statPriority: {
      offense: ['Hail CD', 'Elemental Damage', 'Crit Chance', 'Crit Damage', 'Core Skill Dmg'],
      defense: ['Physical Res.', 'Elemental Res.', 'Evasion', 'Heal on Hit']
    }
  },
  { 
    name: 'Ice Sword', 
    class: 'Arcanist', 
    coreSkill: 'Lightning Punch', 
    basicSkill: 'Flame Wave', 
    controlSkills: ['Flash', 'Frost Shield'], 
    ultimateSkill: 'Aether Form',
    statPriority: {
      offense: ['Elemental Damage', 'Crit Chance', 'Crit Damage', 'Core Skill Dmg'],
      defense: ['Physical Res.', 'Elemental Res.', 'Evasion', 'Heal on Hit']
    }
  },
  { 
    name: 'Ice Sword PVP', 
    class: 'Arcanist', 
    coreSkill: 'Lightning Punch', 
    basicSkill: 'Lightning Whip', 
    controlSkills: ['Flash', 'Frost Shield'], 
    ultimateSkill: 'Hail',
    statPriority: {
      offense: ['Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      defense: ['Physical Res.', 'Elemental Res.', 'Evasion', 'Heal on Hit']
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
      offense: ['Elemental Damage', 'Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Dmg Over Time'],
      defense: ['Physical Res.', 'Elemental Res.', 'Evasion', 'Heal on Hit']
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
      offense: ['Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      defense: ['Physical Res.', 'Elemental Res.', 'Evasion', 'Heal on Hit']
    }
  },
  { 
    name: 'Thunder Punch PVP', 
    class: 'Arcanist', 
    coreSkill: 'Lightning Punch', 
    basicSkill: 'Flame Wave', 
    controlSkills: ['Flash', 'Frost Shield'], 
    ultimateSkill: 'Aether Form',
    statPriority: {
      offense: ['Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      defense: ['Evasion', 'Physical Res.', 'Elemental Res.', 'Heal on Hit']
    }
  },
  { 
    name: 'Rimebite', 
    class: 'Arcanist', 
    coreSkill: 'Ice Ray', 
    basicSkill: 'Flame Wave', 
    controlSkills: ['Flash', 'Frost Shield'], 
    ultimateSkill: 'Hail',
    statPriority: {
      offense: ['Add Dmg', 'Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      defense: ['Physical Res.', 'Elemental Res.', 'Evasion', 'Heal on Hit']
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
      offense: ['Add Dmg', 'Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      defense: ['Physical Res.', 'Elemental Res.', 'Evasion', 'Heal on Hit']
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
      offense: ['Add Dmg Chance', 'Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      defense: ['Physical Res.', 'Elemental Res.', 'Evasion', 'Heal on Hit']
    }
  },
];

export const savageBuilds: Build[] = [
  { 
    name: 'Thunder', 
    class: 'Savage', 
    coreSkill: 'Bladestorm', 
    basicSkill: 'Bloodlust', 
    controlSkills: ['Raze', 'Rampage'], 
    ultimateSkill: 'Ragnarok',
    statPriority: {
      offense: ['Add Dmg Chance', 'Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      defense: ['Physical Res.', 'Elemental Res.', 'Evasion', 'Heal on Hit']
    }
  },
  { 
    name: 'Thunder PVP', 
    class: 'Savage', 
    coreSkill: 'Bladestorm', 
    basicSkill: 'Bloodlust', 
    controlSkills: ['Rush', 'Rampage'], 
    ultimateSkill: 'Ragnarok',
    statPriority: {
      offense: ['Add Dmg Chance', 'Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      defense: ['Physical Res.', 'Elemental Res.', 'Evasion', 'Heal on Hit']
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
      offense: ['Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      defense: ['Physical Res.', 'Elemental Res.', 'Evasion', 'Heal on Hit']
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
      offense: ['Add Dmg Chance', 'Add Dmg', 'Core Skill Dmg', 'Physical Damage'],
      defense: ['Physical Res.', 'Elemental Res.', 'Evasion', 'Heal on Hit']
    }
  },
  { 
    name: 'Thorn PVP', 
    class: 'Savage', 
    coreSkill: 'Bladestorm', 
    basicSkill: 'Bloodlust', 
    controlSkills: ['Skybound Strike', 'Rampage'], 
    ultimateSkill: 'Ragnarok',
    statPriority: {
      offense: ['Add Dmg Chance', 'Add Dmg', 'Core Skill Dmg', 'Physical Damage'],
      defense: ['Physical Res.', 'Elemental Res.', 'Evasion', 'Heal on Hit']
    }
  },
  { 
    name: 'Blazefury', 
    class: 'Savage', 
    coreSkill: 'Swipe', 
    basicSkill: 'Strike', 
    controlSkills: ['Raze', 'Rampage'], 
    ultimateSkill: 'Ragnarok',
    statPriority: {
      offense: ['Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Physical Damage', 'Elemental Damage'],
      defense: ['Physical Res.', 'Elemental Res.', 'Evasion', 'Heal on Hit']
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
      offense: ['Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      defense: ['Physical Res.', 'Elemental Res.', 'Evasion', 'Heal on Hit']
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
      offense: ['Add Dmg Chance', 'Add Dmg', 'Core Skill Dmg', 'Physical Damage'],
      defense: ['Physical Res.', 'Elemental Res.', 'Evasion', 'Heal on Hit']
    }
  },
  { 
    name: 'Hellfire', 
    class: 'Savage', 
    coreSkill: 'Heavy Blow', 
    basicSkill: 'Bloodlust', 
    controlSkills: ['Raze', 'Rampage'], 
    ultimateSkill: 'Ragnarok',
    statPriority: {
      offense: ['Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      defense: ['Physical Res.', 'Elemental Res.', 'Evasion', 'Heal on Hit']
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
      offense: ['Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      defense: ['Physical Res.', 'Elemental Res.', 'Evasion', 'Heal on Hit']
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
      offense: ['Crit Chance', 'Crit Damage', 'Core Skill Dmg', 'Elemental Damage'],
      defense: ['Physical Res.', 'Elemental Res.', 'Evasion', 'Heal on Hit']
    }
  },
];

export const allBuilds = [...arcanistBuilds, ...savageBuilds];

export function getBuildsByClass(buildClass: BuildClass): Build[] {
  const builds = buildClass === 'Arcanist' ? arcanistBuilds : savageBuilds;
  return [...builds].sort((a, b) => a.name.localeCompare(b.name));
}
