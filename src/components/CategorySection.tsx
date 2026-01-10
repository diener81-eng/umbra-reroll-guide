import { ReactNode } from "react";

interface CategorySectionProps {
  icon: string;
  title: string;
  subtitle: string;
  variant: "offensive" | "defensive" | "skill";
  children: ReactNode;
  targetAffixes?: string[];
  whyNote?: string;
}

const variantStyles = {
  offensive: {
    border: "border-l-offensive",
    title: "text-offensive",
    badge: "bg-offensive/10 text-offensive",
  },
  defensive: {
    border: "border-l-defensive",
    title: "text-defensive",
    badge: "bg-defensive/10 text-defensive",
  },
  skill: {
    border: "border-l-skill",
    title: "text-skill",
    badge: "bg-skill/10 text-skill",
  },
};

export function CategorySection({
  icon,
  title,
  subtitle,
  variant,
  children,
  targetAffixes,
  whyNote,
}: CategorySectionProps) {
  const styles = variantStyles[variant];

  return (
    <section className={`card-game rounded-xl p-6 md:p-8 border-l-4 ${styles.border}`}>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl animate-float">{icon}</span>
        <div>
          <h2 className={`font-display text-2xl font-bold ${styles.title}`}>{title}</h2>
          <p className="text-muted-foreground text-sm">{subtitle}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {children}
      </div>

      {targetAffixes && targetAffixes.length > 0 && (
        <div className="mt-6 pt-4 border-t border-border">
          <h4 className="text-sm font-semibold text-muted-foreground mb-2">Target Affixes:</h4>
          <div className="flex flex-wrap gap-2">
            {targetAffixes.map((affix) => (
              <span key={affix} className={`${styles.badge} px-3 py-1 rounded-full text-sm font-medium`}>
                {affix}
              </span>
            ))}
          </div>
        </div>
      )}

      {whyNote && (
        <p className="mt-4 text-sm text-muted-foreground italic border-l-2 border-muted pl-3">
          {whyNote}
        </p>
      )}
    </section>
  );
}
