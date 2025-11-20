import { Heart, Shield, Clock, Sparkles, MessageCircle, Smile } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Heart,
      title: 'Empathetic Understanding',
      description: 'Our AI is designed to understand emotions and respond with genuine care and empathy.',
      gradient: 'from-rose-400 to-pink-400',
    },
    {
      icon: Shield,
      title: 'Safe & Private',
      description: 'Your conversations are completely private. Share freely without worry.',
      gradient: 'from-emerald-400 to-teal-400',
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Day or night, whenever you need someone to talk to, MyCompanio is here.',
      gradient: 'from-blue-400 to-cyan-400',
    },
    {
      icon: MessageCircle,
      title: 'Natural Conversations',
      description: 'Chat naturally like you would with your best friend - no scripts, no limits.',
      gradient: 'from-purple-400 to-violet-400',
    },
    {
      icon: Smile,
      title: 'Positive Vibes',
      description: 'Get encouragement, support, and a friend who celebrates your wins with you.',
      gradient: 'from-amber-400 to-orange-400',
    },
    {
      icon: Sparkles,
      title: 'Personalized Experience',
      description: 'The more you chat, the better MyCompanio understands your unique personality.',
      gradient: 'from-cyan-400 to-emerald-400',
    },
  ];

  return (
    <div className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 mb-4">
            Why Choose MyCompanio?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            More than just an AI - a companion who genuinely cares about your wellbeing and happiness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-emerald-200 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl p-12 shadow-2xl">
          <h3 className="text-white mb-4">
            Ready to Meet Your New Best Friend?
          </h3>
          <p className="text-emerald-50 mb-8 max-w-2xl mx-auto">
            Join thousands who have found comfort, support, and friendship with MyCompanio. 
            Start your journey to better emotional wellbeing today.
          </p>
          <div className="flex items-center justify-center gap-3 text-white">
            <Heart className="w-6 h-6 animate-pulse" />
            <p className="text-emerald-100">
              Because everyone deserves a friend who truly listens
            </p>
            <Heart className="w-6 h-6 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
