import { Lightbulb } from "lucide-react";

interface ProTipProps {
  children: React.ReactNode;
}

export function ProTip({ children }: ProTipProps) {
  return (
    <div className="flex items-start gap-3 p-3 bg-gold/5 border border-gold/20 rounded-lg">
      <Lightbulb className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
      <p className="text-sm text-foreground/90">{children}</p>
    </div>
  );
}
