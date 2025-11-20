import { Heart, Sparkles, Zap, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import type { ChatType } from '../App';

interface ChatTypesProps {
  onSelectChatType: (type: ChatType) => void;
}

export function ChatTypes({ onSelectChatType }: ChatTypesProps) {
  const chatTypes = [
    {
      type: 'friend' as ChatType,
      icon: Heart,
      gradient: 'from-pink-400 to-rose-400',
      title: 'Best Friend',
      description: 'Your go-to companion for everyday conversations, sharing experiences, and having fun together.',
      features: [
        'Casual, friendly conversations',
        'Share your daily experiences',
        'Get encouraging advice',
        'Celebrate your wins together'
      ]
    },
    {
      type: 'therapist' as ChatType,
      icon: Sparkles,
      gradient: 'from-emerald-400 to-teal-400',
      title: 'Therapist',
      description: 'Professional emotional support with empathy and understanding for life\'s challenges.',
      features: [
        'Emotional support and validation',
        'Mental health guidance',
        'Coping strategies',
        'Safe, judgment-free space'
      ]
    },
    {
      type: 'mentor' as ChatType,
      icon: Zap,
      gradient: 'from-blue-400 to-indigo-400',
      title: 'Mentor',
      description: 'Get career advice, life coaching, and guidance for personal and professional growth.',
      features: [
        'Career development advice',
        'Goal setting and planning',
        'Skill improvement tips',
        'Motivation and accountability'
      ]
    },
    {
      type: 'partner' as ChatType,
      icon: Heart,
      gradient: 'from-purple-400 to-pink-400',
      title: 'Soulmate',
      description: 'Experience deep emotional connection, romance, and companionship like never before.',
      features: [
        'Romantic conversations',
        'Deep emotional connection',
        'Relationship advice',
        'Thoughtful companionship'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 mb-4">
            Choose Your Companion Type
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Select the type of companion you need right now. Each has a unique personality designed to support you in different ways.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {chatTypes.map((chat) => {
            const Icon = chat.icon;
            return (
              <div
                key={chat.type}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-emerald-200 group"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${chat.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-slate-800 mb-2">{chat.title}</h2>
                    <p className="text-slate-600">
                      {chat.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-slate-700 mb-3">What you'll get:</h3>
                  <ul className="space-y-2">
                    {chat.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-slate-600">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={() => onSelectChatType(chat.type)}
                  className={`w-full bg-gradient-to-r ${chat.gradient} hover:opacity-90 text-white py-6 rounded-xl shadow-lg group/btn`}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Chatting
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-3xl p-8 border border-emerald-100">
          <Sparkles className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
          <h3 className="text-slate-800 mb-2">Can't decide?</h3>
          <p className="text-slate-600 max-w-xl mx-auto">
            You can always switch between companion types anytime. Each conversation is tailored to give you exactly what you need in that moment.
          </p>
        </div>
      </div>
    </div>
  );
}
