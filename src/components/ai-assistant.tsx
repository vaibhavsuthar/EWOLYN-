
"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, Send, Bot, User, Loader2 } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const initialBotMessages = [
  "👋 Welcome to EWOLYN SERVICES!",
  "🚀 We offer end-to-end support for Startup Registration, Tax Exemptions, Digital Marketing, Govt. Schemes & Specialized Funding.",
  "🎯 Looking for services like Private Limited Company Registration, ISO Certification, or Udyam Certificate?",
  "💬 Just type your query below, and one of our advisors will guide you!",
  "📞 Or call us directly at +91 77779 41611 or 📧 email: info.ewolyn@gmail.com"
];


export function AiAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Clear messages and show initial bot messages when dialog opens
      setMessages([]);
      let currentMessageIndex = 0;
      
      const displayNextMessage = () => {
        if (currentMessageIndex < initialBotMessages.length) {
          const nextMessage: Message = {
            role: "assistant",
            content: initialBotMessages[currentMessageIndex],
          };
          setMessages((prev) => [...prev, nextMessage]);
          currentMessageIndex++;
          setTimeout(displayNextMessage, 1500); // 1.5 second delay between messages
        }
      };
      
      // Start displaying messages
      const timer = setTimeout(displayNextMessage, 500);

      // Cleanup timeout on component unmount or if dialog closes
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate a delay for a more natural feel
    setTimeout(() => {
      const assistantMessage: Message = {
        role: "assistant",
        content: "Thank you for your message! An Ewolyn advisor will get back to you shortly. For immediate assistance, please call us at +91 77779 41611.",
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <Button
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl z-50"
        size="icon"
        onClick={() => setIsOpen(true)}
        aria-label="Open AI Assistant"
      >
        <MessageSquare className="h-8 w-8" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] md:max-w-[600px] grid-rows-[auto_1fr_auto] h-[80vh] max-h-[800px] p-0">
          <DialogHeader className="p-4 border-b">
            <DialogTitle className="flex items-center gap-2">
              <Bot /> AI Assistant
            </DialogTitle>
            <DialogDescription>
              Ask about startup registrations, funding, and more.
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-start gap-3",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {message.role === "assistant" && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback><Bot size={20}/></AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "rounded-lg px-4 py-2 max-w-[80%] whitespace-pre-wrap",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    {message.content.includes("info.ewolyn@gmail.com") ? (
                      <span>
                        📞 Or call us directly at +91 77779 41611 or 📧 email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info.ewolyn@gmail.com" target="_blank" rel="noopener noreferrer" className="underline">info.ewolyn@gmail.com</a>
                      </span>
                    ) : message.content}
                  </div>
                  {message.role === "user" && (
                     <Avatar className="h-8 w-8">
                      <AvatarFallback><User size={20}/></AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              {isLoading && (
                 <div className="flex items-start gap-3 justify-start">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback><Bot size={20}/></AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg px-4 py-2 max-w-[80%] bg-muted flex items-center">
                        <Loader2 className="h-5 w-5 animate-spin"/>
                    </div>
                </div>
              )}
            </div>
          </ScrollArea>
          
          <DialogFooter className="p-4 border-t">
            <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
