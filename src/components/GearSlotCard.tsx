import { LucideIcon } from "lucide-react";

interface GearSlotCardProps {
  icon: LucideIcon;
  name: string;
  slot: string;
  variant: "offensive" | "defensive" | "skill";
}

const variantStyles = {
  offensive: {
    card: "card-offensive glow-offensive",
    icon: "icon-offensive",
    badge: "bg-offensive/20 text-offensive border-offensive/30",
  },
  defensive: {
    card: "card-defensive glow-defensive",
    icon: "icon-defensive",
    badge: "bg-defensive/20 text-defensive border-defensive/30",
  },
  skill: {
    card: "card-skill glow-skill",
    icon: "icon-skill",
    badge: "bg-skill/20 text-skill border-skill/30",
  },
};

export function GearSlotCard({ icon: Icon, name, slot, variant }: GearSlotCardProps) {
  const styles = variantStyles[variant];

  return (
    <div className={`${styles.card} rounded-lg p-4 transition-all duration-300 hover:scale-105 hover:brightness-110`}>
      <div className="flex items-center gap-3">
        <Icon className={`${styles.icon} w-8 h-8 animate-pulse-glow`} />
        <div>
          <h4 className="font-display font-semibold text-foreground">{name}</h4>
          <span className={`${styles.badge} text-xs px-2 py-0.5 rounded-full border inline-block mt-1`}>
            {slot}
          </span>
        </div>
      </div>
    </div>
  );
}
