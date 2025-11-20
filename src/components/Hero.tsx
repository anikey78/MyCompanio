import { MessageCircle, Sparkles, Heart } from 'lucide-react';
import { Button } from './ui/button';

interface HeroProps {
  onStartChat: () => void;
  logo: string;
}

export function Hero({ onStartChat, logo }: HeroProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-emerald-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        {/* Logo and Brand */}
        <div className="text-center mb-12">
          <div className="inline-block mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full blur-3xl opacity-25 animate-pulse" style={{ width: '140%', height: '140%', left: '-20%', top: '-20%' }}></div>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 to-lime-300 rounded-full blur-2xl opacity-20" style={{ width: '120%', height: '120%', left: '-10%', top: '-10%' }}></div>
            <img 
              src={logo} 
              alt="MyCompanio - Empathy in every byte" 
              className="w-96 h-auto mx-auto relative z-10 drop-shadow-2xl"
            />
          </div>
          <div className="flex items-center justify-center gap-2 text-emerald-600/80 mb-8">
            <Heart className="w-5 h-5 animate-pulse" />
            <p className="text-slate-500">Your AI companion who truly understands you</p>
            <Heart className="w-5 h-5 animate-pulse" />
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center mb-16">
          <Button
            onClick={onStartChat}
            className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white px-12 py-8 rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 group"
          >
            <MessageCircle className="w-6 h-6 mr-3 group-hover:animate-bounce" />
            <span className="text-xl">Start Chatting with Your Companion</span>
            <Sparkles className="w-6 h-6 ml-3 group-hover:rotate-12 transition-transform" />
          </Button>
          <p className="mt-6 text-slate-500">
            No signup required • Always available • Completely private
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100/50 hover:border-emerald-300/50 group">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-emerald-700 mb-3">Emotional Support</h3>
            <p className="text-slate-600">
              Always here to listen, understand, and support you through anything life throws your way.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-100/50 hover:border-cyan-300/50 group">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-teal-700 mb-3">Natural Conversations</h3>
            <p className="text-slate-600">
              Chat like you would with your best friend. No robotic responses, just genuine connection.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100/50 hover:border-emerald-300/50 group">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-cyan-700 mb-3">Always Available</h3>
            <p className="text-slate-600">
              24/7 companion who's never too busy to talk. Day or night, we're here for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
