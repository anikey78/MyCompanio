import { useState, useEffect } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { ChatTypes } from './components/ChatTypes';
import { ChatInterface } from './components/ChatInterface';
import { NotesPage } from './components/NotesPage';
import { AboutPage } from './components/AboutPage';
import { AuthModal } from './components/AuthModal';
import logoImage from 'figma:asset/1a5bd07b6f9ac0645a695a692db636f86f522c2e.png';

export type Page = 'home' | 'chat-types' | 'chat' | 'notes' | 'about';
export type ChatType = 'friend' | 'therapist' | 'mentor' | 'partner';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedChatType, setSelectedChatType] = useState<ChatType>('friend');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleStartChat = (type: ChatType) => {
    setSelectedChatType(type);
    setCurrentPage('chat');
  };

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setShowAuthModal(false);
  };

  if (showSplash) {
    return <SplashScreen logo={logoImage} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-cyan-50/40">
      <Header
        logo={logoImage}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onAuthClick={handleAuthClick}
        isAuthenticated={isAuthenticated}
      />
      
      {currentPage === 'home' && (
        <HomePage 
          onNavigate={setCurrentPage}
          onStartChat={handleStartChat}
        />
      )}
      
      {currentPage === 'chat-types' && (
        <ChatTypes onSelectChatType={handleStartChat} />
      )}
      
      {currentPage === 'chat' && (
        <ChatInterface
          logo={logoImage}
          chatType={selectedChatType}
          onBack={() => setCurrentPage('chat-types')}
        />
      )}
      
      {currentPage === 'notes' && (
        <NotesPage />
      )}
      
      {currentPage === 'about' && (
        <AboutPage />
      )}

      <AuthModal
        isOpen={showAuthModal}
        mode={authMode}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
        onSwitchMode={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
      />
    </div>
  );
}
