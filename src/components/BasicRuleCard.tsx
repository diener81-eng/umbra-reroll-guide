import { LucideIcon } from "lucide-react";

interface BasicRuleCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function BasicRuleCard({ icon: Icon, title, description }: BasicRuleCardProps) {
  return (
    <div className="card-game rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
