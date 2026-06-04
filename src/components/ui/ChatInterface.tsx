import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Send, Check, Sparkles, Crown, FileText, Download, Lock } from "lucide-react";

interface Message {
  id: number;
  type: "client" | "agency";
  text?: string;
  delay: number;
  content?: "pdf_attachment";
}

interface ChatInterfaceProps {
  className?: string;
}

export function ChatInterface({ className }: ChatInterfaceProps) {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);

  const messages: Message[] = [
    {
      id: 1,
      type: "client",
      text: "Bonjour ! Pourquoi devrais-je choisir votre agence pour mon projet haut de gamme ?",
      delay: 500
    },
    {
      id: 2,
      type: "agency",
      text: "Bonjour. Nous ne créons pas simplement des sites web, nous bâtissons des héritages numériques.",
      delay: 2000
    },
    {
      id: 3,
      type: "agency",
      text: "Voici une présentation détaillée de notre expertise et pourquoi nous sommes le choix idéal :",
      delay: 4000
    },
    {
      id: 4,
      type: "agency",
      content: "pdf_attachment",
      delay: 5500
    }
  ];

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    
    // Reset state
    setVisibleMessages([]);

    // Show messages in sequence
    messages.forEach((msg) => {
      const timeout = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, msg.id]);
      }, msg.delay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  // Default classes if no className provided
  const defaultClasses = "w-full h-full min-h-[500px] flex flex-col relative bg-stone-950 rounded-xl border border-stone-800 shadow-2xl overflow-hidden ring-1 ring-white/5";
  const appliedClasses = className || defaultClasses;

  return (
    <div className={appliedClasses}>
      <div className="flex flex-col h-full bg-stone-950 overflow-hidden relative z-10 w-full">
         {/* Desktop Window Header */}
        <div className="h-10 bg-stone-900/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-4 z-50 shrink-0">
            <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-stone-600/50 border border-stone-500/50" />
            <div className="w-3 h-3 rounded-full bg-stone-600/50 border border-stone-500/50" />
            <div className="w-3 h-3 rounded-full bg-stone-600/50 border border-stone-500/50" />
            </div>
            <div className="text-xs font-medium text-stone-400 flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-amber-500" />
            VisuaNova — Conciergerie Digitale
            </div>
            <div className="w-16"></div>
        </div>

        {/* Chat Header Inside */}
        <div className="bg-stone-900/50 backdrop-blur-sm px-8 py-6 flex items-center gap-5 border-b border-white/5 z-10 shrink-0">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#BF953F] to-[#FCF6BA] flex items-center justify-center shadow-lg shadow-amber-500/10">
             <Crown className="w-7 h-7 text-amber-900" />
          </div>
          <div>
            <div className="text-white font-bold text-xl tracking-tight">VisuaNova Studio</div>
            <div className="text-amber-400/80 text-sm flex items-center gap-2 font-medium mt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Support Premium Actif
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-8 overflow-y-auto space-y-8 scrollbar-thin scrollbar-thumb-stone-800 scrollbar-track-transparent relative">
          <AnimatePresence>
            {messages.map((msg) => (
              visibleMessages.includes(msg.id) && (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex ${msg.type === "agency" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] sm:max-w-[70%] flex flex-col ${msg.type === "agency" ? "items-end" : "items-start"}`}>
                    
                    {/* Text Bubble */}
                    {msg.text && (
                        <div
                        className={`p-6 rounded-2xl text-lg leading-relaxed relative shadow-sm ${
                            msg.type === "agency"
                            ? "bg-gradient-to-br from-[#BF953F] to-[#99762C] text-white rounded-tr-sm shadow-amber-900/20"
                            : "bg-stone-800 text-stone-200 rounded-tl-sm"
                        }`}
                        >
                        {msg.text}
                        </div>
                    )}

                    {/* PDF Attachment Bubble */}
                    {msg.content === "pdf_attachment" && (
                        <div className="bg-gradient-to-br from-[#BF953F] to-[#99762C] p-1 rounded-2xl rounded-tr-sm shadow-amber-900/20 w-72 mt-1">
                            <div className="bg-stone-900/20 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 border border-white/10 group cursor-not-allowed">
                                <div className="w-12 h-12 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0">
                                    <FileText className="w-6 h-6 text-red-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-white font-medium truncate text-sm">Presentation_VisuaNova.pdf</div>
                                    <div className="text-white/60 text-xs">2.4 MB • PDF Document</div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 group-hover:bg-white/20 transition-colors">
                                    <Download className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {/* Read Receipt */}
                    {msg.type === "agency" && (
                      <div className="flex items-center gap-1.5 mt-2 text-xs text-stone-500 font-medium">
                        <span>Remis à l'instant</span>
                        <Check className="w-3.5 h-3.5 text-amber-500" />
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            ))}
            
            {/* Typing Indicator */}
            {visibleMessages.length < messages.length && visibleMessages.length > 0 && (
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="flex items-center gap-1.5 ml-4 text-stone-500"
               >
                 <span className="w-2 h-2 bg-stone-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}/>
                 <span className="w-2 h-2 bg-stone-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}/>
                 <span className="w-2 h-2 bg-stone-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}/>
               </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input Area - Disabled/Visual Only */}
        <div className="bg-stone-900 p-6 flex items-center gap-4 border-t border-white/5 shrink-0 relative">
            {/* Overlay to prevent clicking */}
            <div className="absolute inset-0 z-20 cursor-not-allowed bg-stone-950/20 backdrop-blur-[1px]" />
            
          <div className="flex-1 bg-stone-800/30 h-16 rounded-full px-8 flex items-center text-lg text-stone-600 border border-transparent">
             <span className="flex items-center gap-2">
                <Lock className="w-4 h-4" /> Conversation terminée
             </span>
          </div>
          <div className="w-16 h-16 rounded-full bg-stone-800 flex items-center justify-center text-stone-600">
            <Send className="w-7 h-7" />
          </div>
        </div>
      </div>
    </div>
  );
}
