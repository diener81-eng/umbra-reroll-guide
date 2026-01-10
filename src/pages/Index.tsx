import { Sparkles, BookOpen, ExternalLink } from 'lucide-react';
import RerollAdvisor from '@/components/RerollAdvisor';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-offensive/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 py-12 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Lootborn Warriors</span>
            </div>
            
            <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-gradient-gold">Umbra Reroll</span>
              <br />
              <span className="text-foreground">Advisor</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select your gear and build to get personalized affix reroll recommendations.
              Optimize your Umbra Essence spending for maximum power.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          {/* Interactive Advisor */}
          <RerollAdvisor />
          
          {/* Quick Reference */}
          <div className="mt-12">
            <Accordion type="single" collapsible className="card-game">
              <AccordionItem value="reference" className="border-none">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <span className="font-cinzel text-lg">Quick Reference Guide</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4">
                    <div className="grid gap-3">
                      <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
                        <p className="font-semibold text-sm text-foreground mb-1">Basic Rules</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Only <span className="text-primary">Fabled+</span> quality gear can be rerolled (<span className="text-red-500 font-semibold">Primal</span> gear is priority, Save your Umbra Essence)</li>
                          <li>• Rerolling uses <span className="text-offensive">Umbra Essence</span></li>
                          <li>• Salvaging rerolled gear gives partial Essence refund</li>
                          <li>• Rerolls are random — not guaranteed to improve!</li>
                        </ul>
                      </div>
                      
                      <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
                        <p className="font-semibold text-sm text-foreground mb-1">Slot Breakdown</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• <span className="text-defensive">4th Slot (Armor):</span> Always Evasion</li>
                          <li>• <span className="text-skill">5th Slot (Helm/Pauldron):</span> Basic Skill stats</li>
                          <li>• <span className="text-skill">5th Slot (Cuirass/Greaves):</span> Control Skill stats</li>
                          <li>• <span className="text-skill">5th Slot (Boots/Belt):</span> Core Skill stats</li>
                          <li>• <span className="text-offensive">5th Slot (Weapon/Jewelry):</span> Crit or Additional Damage</li>
                        </ul>
                      </div>

                      <div className="p-3 rounded-lg bg-gold/5 border border-gold/20">
                        <p className="font-semibold text-sm text-foreground mb-1">Pro Tips</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• <strong>Priority Order:</strong> Offensive (5th slot) → Defensive (4th slot) → Skill-specific stats</li>
                          <li>• <strong>Weapon First:</strong> Weapon Crit is often the highest priority for damage builds</li>
                          <li>• <strong>Resource Management:</strong> Don't burn all Essence chasing perfect rolls — 8-10% is often good enough</li>
                          <li>• <strong>End-Game Only:</strong> Save your Umbra Essence for <span className="text-red-500 font-semibold">Primal</span> gear you'll use long-term</li>
                        </ul>
                      </div>
                    </div>
                    
                    <a 
                      href="https://www.youtube.com/shorts/biXkvFLJKVM" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Watch Video Tutorial
                    </a>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </div>

      {/* Footer with Wiki Attribution */}
      <footer className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">
              Data sourced from the{' '}
              <a 
                href="https://lootbornwarriors.miraheze.org/wiki/Umbra_Reroll#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                Lootborn Warriors Wiki
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
            <p className="text-xs text-muted-foreground/70">
              Community-driven resource for Lootborn Warriors players
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
