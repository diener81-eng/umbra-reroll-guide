export type GearCategory = 'armor' | 'offensive' | 'accessory';
export type SkillSlotType = 'basic' | 'control' | 'core' | 'offensive' | 'none';

export interface GearPiece {
  id: string;
  name: string;
  icon: string;
  category: GearCategory;
  skillSlotType: SkillSlotType;
  has4thSlot: boolean; // Only armor has 4th slot for Evasion
}

export const gearPieces: GearPiece[] = [
  // Armor - Basic Skills (Helm, Pauldron)
  { id: 'helm', name: 'Helm', icon: 'hard-hat', category: 'armor', skillSlotType: 'basic', has4thSlot: true },
  { id: 'pauldron', name: 'Pauldron', icon: 'shield', category: 'armor', skillSlotType: 'basic', has4thSlot: true },

  // Armor - Control Skills (Cuirass, Greaves)
  { id: 'cuirass', name: 'Cuirass', icon: 'shirt', category: 'armor', skillSlotType: 'control', has4thSlot: true },
  { id: 'greaves', name: 'Greaves', icon: 'rectangle-vertical', category: 'armor', skillSlotType: 'control', has4thSlot: true },

  // Armor - Core Skills (Boots, Belt)
  { id: 'boots', name: 'Boots', icon: 'footprints', category: 'armor', skillSlotType: 'core', has4thSlot: true },
  { id: 'belt', name: 'Belt', icon: 'circle', category: 'armor', skillSlotType: 'core', has4thSlot: true },

  // Offensive Gear - Weapon & Jewelry
  { id: 'weapon', name: 'Weapon', icon: 'sword', category: 'offensive', skillSlotType: 'offensive', has4thSlot: false },
  { id: 'necklace', name: 'Necklace', icon: 'gem', category: 'offensive', skillSlotType: 'offensive', has4thSlot: false },
  { id: 'amulet', name: 'Amulet', icon: 'sparkles', category: 'offensive', skillSlotType: 'offensive', has4thSlot: false },
  { id: 'ring', name: 'Ring', icon: 'circle-dot', category: 'offensive', skillSlotType: 'offensive', has4thSlot: false },

  // Accessories - All slots can have any stat
  { id: 'gauntlets', name: 'Gauntlets', icon: 'hand', category: 'accessory', skillSlotType: 'none', has4thSlot: false },
  { id: 'bracers', name: 'Bracers', icon: 'shield-half', category: 'accessory', skillSlotType: 'none', has4thSlot: false },
];

export function getGearById(id: string): GearPiece | undefined {
  return gearPieces.find(g => g.id === id);
}

export function getArmorPieces(): GearPiece[] {
  return gearPieces.filter(g => g.category === 'armor');
}

export function getOffensivePieces(): GearPiece[] {
  return gearPieces.filter(g => g.category === 'offensive');
}

export function getAccessoryPieces(): GearPiece[] {
  return gearPieces.filter(g => g.category === 'accessory');
}

export function getSkillSlotLabel(type: SkillSlotType): string {
  switch (type) {
    case 'basic': return 'Basic Skill';
    case 'control': return 'Control Skill';
    case 'core': return 'Core Skill';
    case 'offensive': return 'Offensive';
    case 'none': return 'None';
    default: return 'None';
  }
}
