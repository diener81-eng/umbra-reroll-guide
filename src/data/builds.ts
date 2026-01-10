export type BuildClass = 'Arcanist' | 'Savage';

export interface Build {
  name: string;
  class: BuildClass;
  coreSkill: string;
  basicSkill: string;
  controlSkills: string[];
  ultimateSkill: string;
}

export const arcanistBuilds: Build[] = [
  { name: 'Iceflame', class: 'Arcanist', coreSkill: 'Fireball', basicSkill: 'Flame Wave', controlSkills: ['Flash', 'Frost Shield'], ultimateSkill: 'Hail' },
  { name: 'Pyroblast', class: 'Arcanist', coreSkill: 'Fireball', basicSkill: 'Flame Wave', controlSkills: ['Flash', 'Frost Shield'], ultimateSkill: 'Aether Form' },
  { name: 'Pyroblast Ancient God', class: 'Arcanist', coreSkill: 'Fireball', basicSkill: 'Lightning Whip', controlSkills: ['Flash', 'Frost Shield'], ultimateSkill: 'Hail' },
  { name: 'Jolt', class: 'Arcanist', coreSkill: 'Fireball', basicSkill: 'Flame Wave', controlSkills: ['Flash', 'Frost Shield'], ultimateSkill: 'Hail' },
  { name: 'Ice Sword', class: 'Arcanist', coreSkill: 'Lightning Punch', basicSkill: 'Flame Wave', controlSkills: ['Flash', 'Frost Shield'], ultimateSkill: 'Aether Form' },
  { name: 'Ice Sword PVP', class: 'Arcanist', coreSkill: 'Lightning Punch', basicSkill: 'Lightning Whip', controlSkills: ['Flash', 'Frost Shield'], ultimateSkill: 'Hail' },
  { name: 'Flame Bow', class: 'Arcanist', coreSkill: 'Lightning Punch', basicSkill: 'Flame Wave', controlSkills: ['Flash', 'Infernal Bloom'], ultimateSkill: 'Aether Form' },
  { name: 'Thunder Punch', class: 'Arcanist', coreSkill: 'Lightning Punch', basicSkill: 'Flame Wave', controlSkills: ['Flash', 'Frost Shield'], ultimateSkill: 'Aether Form' },
  { name: 'Rimebite', class: 'Arcanist', coreSkill: 'Ice Ray', basicSkill: 'Flame Wave', controlSkills: ['Flash', 'Frost Shield'], ultimateSkill: 'Hail' },
  { name: 'Pyresight', class: 'Arcanist', coreSkill: 'Ice Ray', basicSkill: 'Flame Wave', controlSkills: ['Flash', 'Frost Shield'], ultimateSkill: 'Hail' },
  { name: 'Ionization', class: 'Arcanist', coreSkill: 'Ice Ray', basicSkill: 'Flame Wave', controlSkills: ['Flash', 'Frost Shield'], ultimateSkill: 'Aether Form' },
];

export const savageBuilds: Build[] = [
  { name: 'Thunder', class: 'Savage', coreSkill: 'Bladestorm', basicSkill: 'Bloodlust', controlSkills: ['Raze', 'Rampage'], ultimateSkill: 'Ragnarok' },
  { name: 'Thunder PVP', class: 'Savage', coreSkill: 'Bladestorm', basicSkill: 'Bloodlust', controlSkills: ['Rush', 'Rampage'], ultimateSkill: 'Ragnarok' },
  { name: 'Fiery Rage', class: 'Savage', coreSkill: 'Bladestorm', basicSkill: 'Bloodlust', controlSkills: ['Raze', 'Rampage'], ultimateSkill: 'Ragnarok' },
  { name: 'Thorn', class: 'Savage', coreSkill: 'Bladestorm', basicSkill: 'Bloodlust', controlSkills: ['Raze', 'Rampage'], ultimateSkill: 'Ragnarok' },
  { name: 'Thorn PVP', class: 'Savage', coreSkill: 'Bladestorm', basicSkill: 'Bloodlust', controlSkills: ['Skybound Strike', 'Rampage'], ultimateSkill: 'Ragnarok' },
  { name: 'Blazefury', class: 'Savage', coreSkill: 'Swipe', basicSkill: 'Strike', controlSkills: ['Raze', 'Rampage'], ultimateSkill: 'Ragnarok' },
  { name: 'Wild Spark', class: 'Savage', coreSkill: 'Swipe', basicSkill: 'Strike', controlSkills: ['Raze', 'Rampage'], ultimateSkill: 'Ragnarok' },
  { name: 'Ritual Blade', class: 'Savage', coreSkill: 'Swipe', basicSkill: 'Strike', controlSkills: ['Raze', 'Rampage'], ultimateSkill: 'Ragnarok' },
  { name: 'Hellfire', class: 'Savage', coreSkill: 'Heavy Blow', basicSkill: 'Bloodlust', controlSkills: ['Raze', 'Rampage'], ultimateSkill: 'Ragnarok' },
  { name: 'Ice Blast', class: 'Savage', coreSkill: 'Heavy Blow', basicSkill: 'Bloodlust', controlSkills: ['Raze', 'Rampage'], ultimateSkill: 'Savage' },
  { name: 'Thunderbolt', class: 'Savage', coreSkill: 'Heavy Blow', basicSkill: 'Bloodlust', controlSkills: ['Raze', 'Rampage'], ultimateSkill: 'Ragnarok' },
];

export const allBuilds = [...arcanistBuilds, ...savageBuilds];

export function getBuildsByClass(buildClass: BuildClass): Build[] {
  const builds = buildClass === 'Arcanist' ? arcanistBuilds : savageBuilds;
  return [...builds].sort((a, b) => a.name.localeCompare(b.name));
}
