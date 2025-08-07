import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message when chatbot opens for the first time
      setMessages([{
        id: "welcome",
        content: "Hello! I'm here to help you find the right cybersecurity service for your needs. I know about all of ITNOA's services including IT Audits, GRC Consulting, Business Continuity, and more. What can I help you with today?",
        sender: "bot",
        timestamp: new Date().toISOString()
      }]);
    }
  }, [isOpen, messages.length]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chatbot/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputValue }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get response");
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response,
        sender: "bot",
        timestamp: data.timestamp || new Date().toISOString()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm sorry, I'm experiencing some technical difficulties right now. Please try again in a moment, or feel free to contact us directly for immediate assistance.",
        sender: "bot",
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatMessage = (content: string) => {
    // Convert markdown-style links [text](/path) to actual Link components
    const parts = content.split(/(\[([^\]]+)\]\(([^)]+)\))/g);
    
    return parts.map((part, index) => {
      const linkMatch = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        const [, text, path] = linkMatch;
        return (
          <Link key={index} href={path}>
            <Button
              variant="link" 
              className="text-[#01411c] hover:text-[#012d13] p-0 h-auto text-sm font-semibold inline underline"
              onClick={() => {
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
            >
              {text}
            </Button>
          </Link>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <>
      {/* Chat Button - Smooth animations */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-[#01411c] hover:bg-[#012d13] text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 chatbot-animate-bounce"
            data-testid="chatbot-open-button"
          >
            <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        )}
      </div>

      {/* Chat Window - Mobile Optimized */}
      {isOpen && (
        <div className={`fixed inset-0 sm:inset-auto sm:bottom-20 sm:right-4 lg:right-6 z-50 transition-all duration-300 ${
          isOpen ? 'animate-in fade-in slide-in-from-bottom-5' : 'animate-out fade-out slide-out-to-bottom-5'
        }`}>
          {/* Mobile backdrop */}
          <div 
            className="sm:hidden absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          <Card className="relative sm:static w-full h-full sm:w-80 lg:w-96 sm:h-[500px] sm:max-h-[80vh] shadow-2xl border-0 sm:border-2 border-[#01411c]/20 sm:rounded-lg overflow-hidden">
            <CardHeader className="bg-[#01411c] text-white p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center animate-pulse">
                    <Bot className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base sm:text-lg font-bold">ITNOA Assistant</CardTitle>
                    <p className="text-xs sm:text-sm text-white/90 hidden sm:block">Find the perfect cybersecurity service</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 p-1.5 sm:p-2 h-auto rounded-full transition-all duration-200 hover:rotate-90"
                  data-testid="chatbot-close-button"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-0 flex flex-col h-[calc(100vh-80px)] sm:h-[420px]">
              {/* Messages Container with smooth scrolling */}
              <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {messages.map((message, index) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-3 shadow-sm transition-all duration-200 hover:shadow-md ${
                        message.sender === "user"
                          ? "bg-[#01411c] text-white rounded-br-sm"
                          : "bg-gray-100 text-gray-900 rounded-bl-sm"
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.sender === "bot" && (
                          <Bot className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#01411c] animate-pulse" />
                        )}
                        {message.sender === "user" && (
                          <User className="h-4 w-4 mt-0.5 flex-shrink-0 text-white" />
                        )}
                        <div className="text-sm sm:text-base leading-relaxed">
                          {message.sender === "bot" ? formatMessage(message.content) : message.content}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Loading animation */}
                {isLoading && (
                  <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="bg-gray-100 rounded-2xl rounded-bl-sm p-3 max-w-[80%] shadow-sm">
                      <div className="flex items-center space-x-2">
                        <Bot className="h-4 w-4 text-[#01411c] animate-pulse" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Section - Mobile optimized */}
              <div className="border-t p-3 sm:p-4 bg-white">
                <div className="flex space-x-2 items-end">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about our services..."
                    disabled={isLoading}
                    className="flex-1 rounded-full border-2 focus:border-[#01411c] transition-all duration-200 text-sm sm:text-base py-2 sm:py-3"
                    data-testid="chatbot-input"
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    className="bg-[#01411c] hover:bg-[#012d13] text-white rounded-full p-2 sm:p-3 transition-all duration-200 hover:scale-110 disabled:hover:scale-100"
                    data-testid="chatbot-send-button"
                  >
                    <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>
                
                {/* Quick action buttons */}
                <div className="mt-3 flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setInputValue("What services do you offer?")}
                    className="text-xs rounded-full border-[#01411c]/30 hover:bg-[#01411c]/10 transition-all duration-200"
                  >
                    Services
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setInputValue("I need help with HIPAA compliance")}
                    className="text-xs rounded-full border-[#01411c]/30 hover:bg-[#01411c]/10 transition-all duration-200"
                  >
                    HIPAA
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setInputValue("Tell me about IT audits")}
                    className="text-xs rounded-full border-[#01411c]/30 hover:bg-[#01411c]/10 transition-all duration-200"
                  >
                    IT Audit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}