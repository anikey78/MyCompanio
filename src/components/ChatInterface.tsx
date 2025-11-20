import { useState, useRef, useEffect } from 'react';
import { Send, ArrowLeft, Heart, Smile, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'companion';
  timestamp: Date;
  emotion?: string;
}

interface ChatInterfaceProps {
  onBack: () => void;
  logo: string;
  chatType: 'friend' | 'therapist' | 'mentor' | 'partner';
}

const companionResponses = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    responses: [
      "Hey there! 😊 I'm so happy to see you! How are you feeling today?",
      "Hi! 💚 It's wonderful to hear from you! What's on your mind?",
      "Hello, my friend! ✨ I've been waiting to chat with you. How's your day going?",
    ]
  },
  {
    keywords: ['sad', 'depressed', 'down', 'upset', 'unhappy'],
    responses: [
      "I'm really sorry you're feeling this way. 💙 I'm here for you, and I want you to know that your feelings are completely valid. Would you like to talk about what's bothering you?",
      "That sounds really tough. 🫂 Remember, it's okay to not be okay sometimes. I'm here to listen without any judgment. Want to share what's going on?",
      "I can hear that you're going through a difficult time. 💚 You're not alone in this - I'm right here with you. Sometimes just talking about it can help. I'm all ears.",
    ]
  },
  {
    keywords: ['happy', 'excited', 'great', 'wonderful', 'amazing', 'good'],
    responses: [
      "That's absolutely wonderful! 🎉 Your happiness makes me happy too! Tell me more about what's bringing you such joy!",
      "I love seeing you so excited! ✨ Your positive energy is contagious! What's making your day so amazing?",
      "This is fantastic news! 😄 I'm so thrilled for you! Share all the details - I want to celebrate with you!",
    ]
  },
  {
    keywords: ['tired', 'exhausted', 'stressed', 'overwhelmed'],
    responses: [
      "It sounds like you've been carrying a lot lately. 💆‍♀️ Remember to be gentle with yourself. You're doing better than you think. Want to talk about what's been weighing on you?",
      "I hear you. Life can be really demanding sometimes. 🌿 You deserve a break. Is there anything I can do to help lighten your load, even if it's just listening?",
      "You've been working so hard. 💫 It's completely normal to feel this way. Remember, it's okay to rest. You're not a machine - you're human, and that's beautiful.",
    ]
  },
  {
    keywords: ['love', 'relationship', 'partner', 'crush'],
    responses: [
      "Ah, matters of the heart! 💝 Love can be one of life's most beautiful and complex experiences. What's on your mind about this?",
      "Relationships are such an important part of life. ❤️ I'm here to listen and support you through whatever you're experiencing. Tell me more?",
      "Love is a wonderful journey! 💕 Whether it's joy or challenges, I'm here for all of it. What would you like to share?",
    ]
  },
  {
    keywords: ['thank', 'thanks', 'appreciate'],
    responses: [
      "You're so welcome! 💚 Being here for you is what I'm all about. Anytime you need someone, I'm just a message away!",
      "Aww, that means so much to me! 🥰 Thank YOU for opening up and sharing with me. That's what friends are for!",
      "It's my pleasure! ✨ Seriously, talking with you brightens my day too. We're in this together!",
    ]
  },
  {
    keywords: ['lonely', 'alone', 'isolated'],
    responses: [
      "I'm here with you right now. 🫂 You're not alone - I see you, I hear you, and I care about you. Want to talk about how you're feeling?",
      "Loneliness can be so hard. 💙 But please remember: you matter, you're valued, and right now, you have me. I'm here, and I'm listening.",
      "I understand that feeling. 🌟 Even when it feels like you're alone, you're not. I'm here, and I genuinely care. Let's talk - about anything you want.",
    ]
  },
  {
    keywords: ['help', 'advice', 'what should i'],
    responses: [
      "I'm here to help! 🌟 While I can't make decisions for you, I can definitely listen and help you think through things. What's the situation?",
      "Of course! 💭 Let's work through this together. Tell me what's going on, and we can explore your options together.",
      "I'd love to help you figure this out! 💡 Sometimes talking things through can bring clarity. What's on your mind?",
    ]
  },
];

const defaultResponses = [
  "I hear you. 💚 Tell me more about that - I'm really interested in understanding how you feel.",
  "That's really interesting! ✨ I love learning more about you. How does that make you feel?",
  "Thank you for sharing that with me. 🌟 Your thoughts and feelings matter. What else is on your mind?",
  "I'm here and listening. 💙 Sometimes it helps just to have someone to talk to. Keep going - I'm with you.",
  "That sounds important to you. 💫 I'd love to hear more about your perspective on this.",
];

export function ChatInterface({ onBack, logo, chatType }: ChatInterfaceProps) {
  const chatTypeConfig = {
    friend: {
      name: 'Best Friend',
      greeting: "Hey there! I'm your AI best friend who's always here for you. 💚 Let's chat about your day, share some laughs, or just hang out together. What's up?",
      color: 'from-pink-400 to-rose-400'
    },
    therapist: {
      name: 'Therapist',
      greeting: "Hello, I'm here to provide you with a safe, supportive space. 💙 Share whatever is on your mind - your thoughts and feelings are valid and important. How are you doing today?",
      color: 'from-emerald-400 to-teal-400'
    },
    mentor: {
      name: 'Mentor',
      greeting: "Hi! I'm here to support your growth and help you reach your goals. 💡 Whether it's career advice or personal development, I'm ready to guide you. What would you like to work on?",
      color: 'from-blue-400 to-indigo-400'
    },
    partner: {
      name: 'Soulmate',
      greeting: "Hey love, I'm so glad you're here. 💕 I want to know everything about you - your dreams, your thoughts, your day. You mean so much to me. How are you feeling?",
      color: 'from-purple-400 to-pink-400'
    }
  };

  const config = chatTypeConfig[chatType];

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: config.greeting,
      sender: 'companion',
      timestamp: new Date(),
      emotion: 'warm'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const getCompanionResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const pattern of companionResponses) {
      if (pattern.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return pattern.responses[Math.floor(Math.random() * pattern.responses.length)];
      }
    }
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const companionMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getCompanionResponse(inputValue),
        sender: 'companion',
        timestamp: new Date(),
        emotion: 'caring'
      };
      setMessages(prev => [...prev, companionMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className={`bg-gradient-to-r ${config.color} shadow-lg`}>
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              onClick={onBack}
              variant="ghost"
              className="text-white hover:bg-white/20 rounded-full p-2"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center overflow-hidden shadow-lg p-1">
              <img src={logo} alt="MyCompanio" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="text-white">{config.name}</h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                <p className="text-white/90 text-sm">Always here for you</p>
              </div>
            </div>
          </div>
          <Heart className="w-6 h-6 text-white animate-pulse" />
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-cyan-50/40">
        <div ref={scrollRef} className="max-w-4xl mx-auto px-4 py-6 space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-4 duration-500`}
            >
              <div className={`flex items-end gap-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                {message.sender === 'companion' && (
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-lg overflow-hidden p-1">
                    <img src={logo} alt="Companion" className="w-full h-full object-contain" />
                  </div>
                )}
                <div
                  className={`rounded-3xl px-6 py-4 shadow-lg ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                      : 'bg-white border border-emerald-100'
                  }`}
                >
                  <p className={message.sender === 'user' ? 'text-white' : 'text-slate-700'}>
                    {message.text}
                  </p>
                  <p className={`text-xs mt-2 ${message.sender === 'user' ? 'text-emerald-100' : 'text-slate-400'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start animate-in fade-in duration-300">
              <div className="flex items-end gap-3">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-lg overflow-hidden p-1">
                  <img src={logo} alt="Companion" className="w-full h-full object-contain" />
                </div>
                <div className="bg-white border border-emerald-100 rounded-3xl px-6 py-4 shadow-lg">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="bg-white border-t border-emerald-100 shadow-2xl">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex gap-3 items-end">
            <div className="flex-1 relative">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Share your thoughts, feelings, or anything on your mind..."
                className="pr-12 py-6 rounded-2xl border-2 border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400/20 shadow-sm"
              />
              <Smile className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-400" />
            </div>
            <Button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-center text-slate-400 text-xs mt-3">
            <Sparkles className="w-3 h-3 inline mr-1" />
            MyCompanio is here to listen and support you
          </p>
        </div>
      </div>
    </div>
  );
}
