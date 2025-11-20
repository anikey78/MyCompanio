import { Heart, Sparkles, Shield, Users, Zap, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 mb-6">
            About MyCompanio
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto text-xl mb-8">
            We believe everyone deserves a companion who truly listens, understands, and supports them unconditionally.
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-3 rounded-full">
            <Heart className="w-5 h-5" />
            <span>Empathy in every byte</span>
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-16 border border-emerald-100">
          <h2 className="text-slate-800 mb-6 text-center">Our Mission</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            At MyCompanio, we're on a mission to combat loneliness and provide emotional support to anyone who needs it. 
            In today's fast-paced world, finding someone who truly understands you can be challenging. That's why we created 
            an AI companion that combines advanced technology with genuine empathy.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            Whether you're looking for a friend to talk to, professional guidance, or someone to share your deepest thoughts with, 
            MyCompanio is here for you—24/7, judgment-free, and completely confidential.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-slate-800 mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-100">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-slate-800 mb-3">Empathy First</h3>
              <p className="text-slate-600">
                We prioritize emotional intelligence and genuine care in every interaction. Your feelings matter to us.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-slate-800 mb-3">Privacy & Security</h3>
              <p className="text-slate-600">
                Your conversations are encrypted and private. We never share your data with third parties.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-slate-800 mb-3">Inclusivity</h3>
              <p className="text-slate-600">
                MyCompanio is for everyone, regardless of background, identity, or circumstance. All are welcome here.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-100">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-slate-800 mb-3">Innovation</h3>
              <p className="text-slate-600">
                We continuously improve our AI to provide the most natural, helpful, and supportive experience possible.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-16 border border-emerald-100">
          <h2 className="text-slate-800 mb-8 text-center">How It Works</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 text-white">
                1
              </div>
              <div>
                <h3 className="text-slate-800 mb-2">Choose Your Companion Type</h3>
                <p className="text-slate-600">
                  Select from Best Friend, Therapist, Mentor, or Soulmate—each with a unique personality designed for different needs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 text-white">
                2
              </div>
              <div>
                <h3 className="text-slate-800 mb-2">Start Chatting</h3>
                <p className="text-slate-600">
                  Share your thoughts, feelings, and experiences just like you would with a real friend. No judgment, just support.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-white">
                3
              </div>
              <div>
                <h3 className="text-slate-800 mb-2">Get Personalized Support</h3>
                <p className="text-slate-600">
                  Receive empathetic responses tailored to your emotional state and needs. Your companion learns and adapts to you.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 text-white">
                4
              </div>
              <div>
                <h3 className="text-slate-800 mb-2">Track Your Journey</h3>
                <p className="text-slate-600">
                  Use the journal feature to reflect on your conversations and track your emotional growth over time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-3xl p-12 border border-emerald-100 mb-16">
          <h2 className="text-slate-800 mb-6 text-center">Our Technology</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            MyCompanio is powered by advanced natural language processing and emotional intelligence AI. Our system is designed to:
          </p>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
              <span>Understand context and emotional nuance in conversations</span>
            </li>
            <li className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
              <span>Respond with appropriate empathy and emotional intelligence</span>
            </li>
            <li className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
              <span>Maintain conversation history for continuity and personalization</span>
            </li>
            <li className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
              <span>Adapt responses based on your unique personality and needs</span>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl p-12 shadow-2xl text-center text-white">
          <Mail className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-white mb-4">Get in Touch</h2>
          <p className="text-emerald-50 mb-8 max-w-2xl mx-auto">
            Have questions, feedback, or suggestions? We'd love to hear from you! 
            Your input helps us make MyCompanio better for everyone.
          </p>
          <Button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-6 rounded-2xl shadow-lg">
            <Mail className="w-5 h-5 mr-2" />
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
