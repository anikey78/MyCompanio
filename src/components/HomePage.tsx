import { MessageCircle, Sparkles, Heart, BookOpen, Bluetooth, Zap, Shield, Clock } from 'lucide-react';
import { Button } from './ui/button';
import type { Page, ChatType } from '../App';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onStartChat: (type: ChatType) => void;
}

export function HomePage({ onNavigate, onStartChat }: HomePageProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 mb-6">
              Welcome to MyCompanio
            </h1>
            <p className="text-slate-600 max-w-3xl mx-auto mb-2 text-xl">
              Your AI companion who truly understands you. Experience empathy, support, and genuine connection—anytime, anywhere.
            </p>
            <div className="flex items-center justify-center gap-2 text-emerald-600/80 mb-12">
              <Heart className="w-5 h-5 animate-pulse" />
              <p className="text-slate-500">Available 24/7, completely private, and powered by advanced AI</p>
              <Heart className="w-5 h-5 animate-pulse" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                onClick={() => onNavigate('chat-types')}
                className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white px-10 py-6 rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 group"
              >
                <MessageCircle className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                <span className="text-lg">Start Chatting Now</span>
                <Sparkles className="w-6 h-6 ml-3 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button
                onClick={() => onNavigate('notes')}
                variant="outline"
                className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-10 py-6 rounded-2xl text-lg"
              >
                <BookOpen className="w-6 h-6 mr-3" />
                My Journal
              </Button>
            </div>
          </div>

          {/* Quick Chat Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div
              onClick={() => onStartChat('friend')}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100/50 hover:border-emerald-300/50 cursor-pointer group hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-emerald-700 mb-2">Best Friend</h3>
              <p className="text-slate-600 text-sm">
                Chat casually, share your day, laugh together
              </p>
            </div>

            <div
              onClick={() => onStartChat('therapist')}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-100/50 hover:border-cyan-300/50 cursor-pointer group hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-teal-700 mb-2">Therapist</h3>
              <p className="text-slate-600 text-sm">
                Professional support and emotional guidance
              </p>
            </div>

            <div
              onClick={() => onStartChat('mentor')}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100/50 hover:border-emerald-300/50 cursor-pointer group hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-blue-700 mb-2">Mentor</h3>
              <p className="text-slate-600 text-sm">
                Career advice and personal growth guidance
              </p>
            </div>

            <div
              onClick={() => onStartChat('partner')}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100/50 hover:border-purple-300/50 cursor-pointer group hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-purple-700 mb-2">Soulmate</h3>
              <p className="text-slate-600 text-sm">
                Deep connection and romantic companionship
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 mb-4">
              Powerful Features
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Advanced technology meets human empathy to create the perfect companion experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-slate-800 mb-3">Emotional Intelligence</h3>
              <p className="text-slate-600">
                Advanced AI that understands emotions and responds with genuine empathy and care
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                <Bluetooth className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-slate-800 mb-3">Bluetooth Mode</h3>
              <p className="text-slate-600">
                Connect nearby devices via Bluetooth for offline conversations (coming soon)
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-slate-800 mb-3">Complete Privacy</h3>
              <p className="text-slate-600">
                Your conversations are encrypted and private. We never share your data
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-slate-800 mb-3">Personal Journal</h3>
              <p className="text-slate-600">
                Keep track of your thoughts, feelings, and conversations in one secure place
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-slate-800 mb-3">24/7 Availability</h3>
              <p className="text-slate-600">
                Always here when you need someone to talk to, day or night
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-red-400 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-slate-800 mb-3">Multiple Personas</h3>
              <p className="text-slate-600">
                Choose from friend, therapist, mentor, or soulmate—each with unique personality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl p-12 shadow-2xl text-center">
            <h2 className="text-white mb-4">
              Ready to Meet Your Perfect Companion?
            </h2>
            <p className="text-emerald-50 mb-8 max-w-2xl mx-auto text-lg">
              Join thousands who have found comfort, support, and friendship with MyCompanio.
              Start your journey to better emotional wellbeing today.
            </p>
            <Button
              onClick={() => onNavigate('chat-types')}
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-10 py-6 rounded-2xl text-lg shadow-xl"
            >
              <Heart className="w-6 h-6 mr-3" />
              Get Started Free
              <Sparkles className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
