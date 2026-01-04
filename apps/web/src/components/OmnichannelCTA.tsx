"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CalendarCheck, HelpCircle, X, Send, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

type Message = {
    id: string;
    text: string;
    sender: "user" | "bot";
    time: string;
};

export function OmnichannelCTA() {
  const [activeTab, setActiveTab] = useState<"options" | "chat">("options");
  const [scrolled, setScrolled] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Hello! Welcome to Desert Safari Qatar. How can I help you today?", sender: "bot", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = {
        id: Date.now().toString(),
        text: inputValue,
        sender: "user",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
        const botMsg: Message = {
            id: (Date.now() + 1).toString(),
            text: "Thank you for your inquiry. A luxury concierge specialist will be with you shortly. For immediate booking, please use WhatsApp.",
            sender: "bot",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botMsg]);
    }, 1500);
  };

  const handleWhatsApp = () => {
     window.open("https://wa.me/97412345678?text=Hi%2C%20I%20want%20to%20book%20a%20luxury%20safari%20experience", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+97412345678";
  };

  return (
    <>
      {/* Mobile Bottom Concierge Bar */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-0 left-0 right-0 z-50 flex h-20 items-center justify-between px-2 pb-2 md:hidden pointer-events-none"
      >
        <div className="pointer-events-auto flex w-full items-center justify-between gap-2 rounded-2xl border border-white/10 bg-brand-onyx/90 p-2 shadow-2xl backdrop-blur-xl supports-[backdrop-filter]:bg-brand-onyx/60">
            <Button 
                variant="ghost" 
                className="flex flex-col gap-1 h-full rounded-xl text-brand-white hover:bg-white/5 hover:text-brand-gold w-20 transition-colors"
                onClick={handleWhatsApp}
            >
                <div className="relative">
                    <MessageCircle className="h-6 w-6" />
                    <span className="absolute -top-1 -right-1 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-brand-onyx" />
                </div>
                <span className="text-[10px] uppercase tracking-wider font-light">WhatsApp</span>
            </Button>
            
            <Drawer>
                <DrawerTrigger asChild>
                    <Button className="flex-1 h-12 rounded-xl bg-brand-gold text-brand-onyx font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:bg-brand-gold/90 hover:shadow-[0_0_30px_rgba(197,160,89,0.5)] transition-all">
                        BOOK CONCIERGE
                    </Button>
                </DrawerTrigger>
                <DrawerContent className="bg-brand-white border-none max-h-[85vh]">
                    <div className="mx-auto w-full max-w-sm flex flex-col h-full">
                        <DrawerHeader className="pb-2">
                             <div className="flex justify-center mb-4">
                                <div className="flex bg-gray-100 p-1 rounded-full w-full max-w-[200px]">
                                    <button 
                                        onClick={() => setActiveTab("options")}
                                        className={cn("flex-1 py-2 text-xs font-bold rounded-full transition-all", activeTab === "options" ? "bg-white text-brand-onyx shadow-sm" : "text-gray-400")}
                                    >
                                        Options
                                    </button>
                                    <button 
                                        onClick={() => setActiveTab("chat")}
                                        className={cn("flex-1 py-2 text-xs font-bold rounded-full transition-all", activeTab === "chat" ? "bg-white text-brand-onyx shadow-sm" : "text-gray-400")}
                                    >
                                        Live Chat
                                    </button>
                                </div>
                             </div>
                            <DrawerTitle className="font-heading text-3xl text-brand-onyx text-center">
                                {activeTab === "options" ? "Plan Your Escape" : "Luxury Support"}
                            </DrawerTitle>
                            <DrawerDescription className="sr-only">Choose a contact option or chat live with our team.</DrawerDescription>
                        </DrawerHeader>

                        <div className="flex-1 overflow-hidden p-4">
                            {activeTab === "options" ? (
                                <div className="space-y-3">
                                    <Button className="w-full h-14 text-lg bg-[#25D366] hover:bg-[#128C7E] text-white gap-3 rounded-xl shadow-lg" onClick={handleWhatsApp}>
                                        <MessageCircle className="w-6 h-6" /> WhatsApp Concierge
                                    </Button>
                                    <Button className="w-full h-14 text-lg bg-brand-onyx text-brand-white gap-3 rounded-xl shadow-lg" onClick={handleCall}>
                                        <Phone className="w-6 h-6" /> Call Directly
                                    </Button>
                                    <div className="pt-4 grid grid-cols-2 gap-3 text-center">
                                        <div className="p-3 bg-gray-50 rounded-xl">
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Availability</p>
                                            <p className="text-xs font-bold text-green-600">Open 24/7</p>
                                        </div>
                                        <div className="p-3 bg-gray-50 rounded-xl">
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Response</p>
                                            <p className="text-xs font-bold text-brand-onyx">&lt; 2 Minutes</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col h-[400px]">
                                    <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                                        {messages.map(msg => (
                                            <div key={msg.id} className={cn("flex flex-col", msg.sender === "user" ? "items-end" : "items-start")}>
                                                <div className={cn(
                                                    "max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed",
                                                    msg.sender === "user" ? "bg-brand-onyx text-white rounded-tr-none" : "bg-gray-100 text-brand-onyx rounded-tl-none"
                                                )}>
                                                    {msg.text}
                                                </div>
                                                <span className="text-[10px] text-gray-400 mt-1">{msg.time}</span>
                                            </div>
                                        ))}
                                        <div ref={chatEndRef} />
                                    </div>
                                    <form onSubmit={handleSendMessage} className="mt-4 flex gap-2">
                                        <Input 
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            placeholder="Type message..." 
                                            className="h-12 bg-gray-50 border-none rounded-xl"
                                        />
                                        <Button type="submit" size="icon" className="h-12 w-12 rounded-xl bg-brand-gold text-brand-onyx">
                                            <Send className="h-5 w-5" />
                                        </Button>
                                    </form>
                                </div>
                            )}
                        </div>
                        
                        <DrawerFooter className="pt-0">
                            <DrawerClose asChild>
                                <Button variant="ghost" className="text-gray-400 text-xs">Close Concierge</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </div>
                </DrawerContent>
            </Drawer>

            <Button 
                variant="ghost" 
                className="flex flex-col gap-1 h-full rounded-xl text-brand-white hover:bg-white/5 hover:text-brand-gold w-20 transition-colors"
                onClick={handleCall}
            >
                <Phone className="h-6 w-6" />
                <span className="text-[10px] uppercase tracking-wider font-light">Call</span>
            </Button>
        </div>
      </motion.div>

      {/* Desktop Floating Concierge */}
      <motion.div 
        className={cn(
            "hidden md:flex fixed bottom-8 right-8 z-50 flex-col items-end gap-4 transition-all duration-300",
            scrolled ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
        )}
      >
         <div className="flex flex-col gap-3">
             <Button 
                onClick={handleWhatsApp} 
                className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 grid place-items-center"
             >
                <MessageCircle className="h-6 w-6" />
             </Button>
             
             <Drawer>
                <DrawerTrigger asChild>
                     <Button className="h-14 px-8 rounded-full bg-brand-onyx border border-brand-gold/30 text-brand-gold font-bold text-lg shadow-2xl hover:bg-black hover:border-brand-gold transition-all duration-300">
                        <CalendarCheck className="mr-2 h-5 w-5" /> Concierge Support
                    </Button>
                </DrawerTrigger>
                <DrawerContent className="bg-brand-white/95 backdrop-blur-md border-white/20 ml-auto mr-8 mb-8 w-[400px] h-[600px] rounded-3xl">
                     <div className="flex flex-col h-full p-6">
                        <DrawerHeader className="p-0 mb-8 border-none bg-transparent">
                             <div className="flex items-center justify-between w-full">
                                <DrawerTitle className="font-heading text-2xl text-brand-onyx">Private Concierge</DrawerTitle>
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-[10px] font-bold text-gray-400 uppercase">Live</span>
                                </div>
                             </div>
                             <DrawerDescription className="sr-only">Chat live with our private concierge team.</DrawerDescription>
                        </DrawerHeader>

                        <div className="flex-1 overflow-y-auto space-y-6 pr-2 mb-6 custom-scrollbar">
                            {messages.map(msg => (
                                <div key={msg.id} className={cn("flex gap-3", msg.sender === "user" ? "flex-row-reverse" : "flex-row")}>
                                    <div className={cn("h-8 w-8 rounded-full flex items-center justify-center shrink-0", msg.sender === "user" ? "bg-brand-gold" : "bg-gray-200")}>
                                        {msg.sender === "user" ? <User className="h-4 w-4 text-brand-onyx" /> : <div className="text-[10px] font-bold">DS</div>}
                                    </div>
                                    <div className="flex flex-col">
                                        <div className={cn(
                                            "p-4 rounded-2xl text-sm leading-relaxed shadow-sm",
                                            msg.sender === "user" ? "bg-brand-onyx text-white rounded-tr-none" : "bg-white text-brand-onyx rounded-tl-none border border-gray-100"
                                        )}>
                                            {msg.text}
                                        </div>
                                        <span className={cn("text-[9px] text-gray-400 mt-1", msg.sender === "user" ? "text-right" : "text-left")}>{msg.time}</span>
                                    </div>
                                </div>
                            ))}
                            <div ref={chatEndRef} />
                        </div>

                        <div className="space-y-4">
                            <form onSubmit={handleSendMessage} className="relative">
                                <Input 
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask anything about our tours..." 
                                    className="h-14 bg-gray-50 border-none rounded-2xl pr-14 focus:ring-1 focus:ring-brand-gold"
                                />
                                <Button size="icon" className="absolute right-2 top-2 h-10 w-10 rounded-xl bg-brand-gold text-brand-onyx">
                                    <Send className="h-4 w-4" />
                                </Button>
                            </form>
                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm" className="flex-1 h-10 rounded-xl text-[10px]" onClick={handleWhatsApp}>WHATSAPP</Button>
                                <Button variant="outline" size="sm" className="flex-1 h-10 rounded-xl text-[10px]" onClick={handleCall}>DIRECT CALL</Button>
                            </div>
                        </div>
                     </div>
                </DrawerContent>
             </Drawer>
         </div>
      </motion.div>
    </>
  );
}
