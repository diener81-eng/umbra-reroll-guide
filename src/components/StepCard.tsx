interface StepCardProps {
  step: number;
  title: string;
  description: string;
}

export function StepCard({ step, title, description }: StepCardProps) {
  return (
    <div className="card-game rounded-xl p-5 relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
      <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors" />
      <div className="relative flex gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
          <span className="font-display font-bold text-primary">{step}</span>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
