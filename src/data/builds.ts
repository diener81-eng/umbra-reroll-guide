export type BuildClass = 'Arcanist' | 'Savage';

export interface Build {
  name: string;
  class: BuildClass;
  coreSkill: string;
  basicSkill: string;
  controlSkills: string[];
}

export const arcanistBuilds: Build[] = [
  { name: 'Iceflame', class: 'Arcanist', coreSkill: 'Fireball', basicSkill: 'Flame Wave', controlSkills: ['Flash', 'Frost Shield'] },
  { name: 'Pyroblast', class: 'Arcanist', coreSkill: 'Fireball', basicSkill: 'Flame Wave', controlSkills: ['Flash', 'Frost Shield'] },
  { name: 'Jolt', class: 'Arcanist', coreSkill: 'Fireball', basicSkill: 'Flame Wave', controlSkills: ['Flash', 'Frost Shield'] },
  { name: 'Ice Sword', class: 'Arcanist', coreSkill: 'Lightning Punch', basicSkill: 'Flame Wave', controlSkills: ['Flash', 'Frost Shield'] },
  { name: 'Flame Bow', class: 'Arcanist', coreSkill: 'Lightning Punch', basicSkill: 'Flame Wave', controlSkills: ['Flash', 'Infernal Bloom'] },
  { name: 'Thunder Punch', class: 'Arcanist', coreSkill: 'Lightning Punch', basicSkill: 'Flame Wave', controlSkills: ['Flash', 'Frost Shield'] },
  { name: 'Rimebite', class: 'Arcanist', coreSkill: 'Ice Ray', basicSkill: 'Flame Wave', controlSkills: ['Flash', 'Frost Shield'] },
  { name: 'Pyresight', class: 'Arcanist', coreSkill: 'Ice Ray', basicSkill: 'Flame Wave', controlSkills: ['Flash', 'Frost Shield'] },
  { name: 'Ionization', class: 'Arcanist', coreSkill: 'Ice Ray', basicSkill: 'Flame Wave', controlSkills: ['Flash', 'Frost Shield'] },
];

export const savageBuilds: Build[] = [
  { name: 'Thunder', class: 'Savage', coreSkill: 'Bladestorm', basicSkill: 'Bloodlust', controlSkills: ['Raze', 'Rampage'] },
  { name: 'Fiery Rage', class: 'Savage', coreSkill: 'Bladestorm', basicSkill: 'Bloodlust', controlSkills: ['Raze', 'Rampage'] },
  { name: 'Thorn', class: 'Savage', coreSkill: 'Bladestorm', basicSkill: 'Bloodlust', controlSkills: ['Raze', 'Rampage'] },
  { name: 'Blazefury', class: 'Savage', coreSkill: 'Swipe', basicSkill: 'Strike', controlSkills: ['Raze', 'Rampage'] },
  { name: 'Wild Spark', class: 'Savage', coreSkill: 'Swipe', basicSkill: 'Strike', controlSkills: ['Raze', 'Rampage'] },
  { name: 'Ritual Blade', class: 'Savage', coreSkill: 'Swipe', basicSkill: 'Strike', controlSkills: ['Raze', 'Rampage'] },
  { name: 'Hellfire', class: 'Savage', coreSkill: 'Heavy Blow', basicSkill: 'Bloodlust', controlSkills: ['Raze', 'Rampage'] },
  { name: 'Ice Blast', class: 'Savage', coreSkill: 'Heavy Blow', basicSkill: 'Bloodlust', controlSkills: ['Raze', 'Rampage'] },
  { name: 'Thunderbolt', class: 'Savage', coreSkill: 'Heavy Blow', basicSkill: 'Bloodlust', controlSkills: ['Raze', 'Rampage'] },
];

export const allBuilds = [...arcanistBuilds, ...savageBuilds];

export function getBuildsByClass(buildClass: BuildClass): Build[] {
  return buildClass === 'Arcanist' ? arcanistBuilds : savageBuilds;
}
