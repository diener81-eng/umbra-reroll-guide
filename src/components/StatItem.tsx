import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { getStatByName } from '@/data/stats';
import { cn } from '@/lib/utils';

interface StatItemProps {
  stat: string;
  colorClass: string;
  priority?: number;
}

export default function StatItem({ stat, colorClass, priority }: StatItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const statDef = getStatByName(stat);

  if (!statDef) {
    return (
      <div className="flex items-center gap-2">
        {typeof priority === 'number' && (
          <span className="w-5 h-5 rounded-full bg-muted/40 border border-border/40 flex items-center justify-center text-[11px] text-muted-foreground">
            {priority}
          </span>
        )}
        <ChevronRight className={cn("w-4 h-4 opacity-60", colorClass)} />
        <span className="text-foreground font-medium">{stat}</span>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 w-full text-left"
      >
        {typeof priority === 'number' && (
          <span className="w-5 h-5 rounded-full bg-muted/40 border border-border/40 flex items-center justify-center text-[11px] text-muted-foreground">
            {priority}
          </span>
        )}
        {isExpanded ? (
          <ChevronDown className={cn("w-4 h-4 transition-transform", colorClass)} />
        ) : (
          <ChevronRight className={cn("w-4 h-4 transition-transform", colorClass)} />
        )}
        <span className="text-foreground font-medium">{stat}</span>
      </button>

      {isExpanded && (
        <div className="ml-6 space-y-2 text-sm">
          <p className="text-muted-foreground">
            <span className="text-foreground font-semibold">Quick:</span> {statDef.summary}
          </p>
          <p className="text-muted-foreground">
            <span className="text-foreground font-semibold">Details:</span> {statDef.detail}
          </p>
        </div>
      )}
    </div>
  );
}
