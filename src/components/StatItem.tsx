import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getStatByName } from '@/data/stats';

interface StatItemProps {
  stat: string;
  colorClass: string;
  priority?: number;
}

export default function StatItem({ stat, colorClass, priority }: StatItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const statDef = getStatByName(stat);
  
  if (!statDef) {
    // No description available, render simple non-expandable item
    return (
      <div className="flex items-center gap-2">
        {priority && (
          <span className={cn("w-5 h-5 rounded-full bg-muted flex items-center justify-center text-xs font-medium", colorClass)}>
            {priority}
          </span>
        )}
        <ChevronRight className={cn("w-4 h-4", colorClass)} />
        <span className="text-foreground font-medium">{stat}</span>
      </div>
    );
  }
  
  return (
    <div className="space-y-1">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 w-full text-left hover:opacity-80 transition-opacity group"
      >
        {priority && (
          <span className={cn("w-5 h-5 rounded-full bg-muted flex items-center justify-center text-xs font-medium shrink-0", colorClass)}>
            {priority}
          </span>
        )}
        {isExpanded ? (
          <ChevronDown className={cn("w-4 h-4 transition-transform", colorClass)} />
        ) : (
          <ChevronRight className={cn("w-4 h-4 transition-transform", colorClass)} />
        )}
        <span className="text-foreground font-medium">{stat}</span>
        <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-1">
          (click for details)
        </span>
      </button>
      
      {isExpanded && (
        <div className="ml-6 p-3 rounded-lg bg-background/50 border border-border/30 animate-fade-in">
          <p className="text-sm font-medium text-foreground mb-1">
            {statDef.summary}
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {statDef.detail}
          </p>
        </div>
      )}
    </div>
  );
}
