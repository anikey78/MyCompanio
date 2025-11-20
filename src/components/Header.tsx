import { Menu, X, LogIn, UserPlus, User, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import type { Page } from '../App';

interface HeaderProps {
  logo: string;
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onAuthClick: (mode: 'login' | 'signup') => void;
  isAuthenticated: boolean;
}

export function Header({ logo, currentPage, onNavigate, onAuthClick, isAuthenticated }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Chat Types', page: 'chat-types' },
    { label: 'Notes', page: 'notes' },
    { label: 'About Us', page: 'about' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-emerald-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl flex items-center justify-center p-2 shadow-sm">
              <img src={logo} alt="MyCompanio" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
                MyCompanio
              </h2>
              <p className="text-slate-500 text-xs">Empathy in every byte</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`transition-colors ${
                  currentPage === item.page
                    ? 'text-emerald-600'
                    : 'text-slate-600 hover:text-emerald-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {!isAuthenticated ? (
              <>
                <Button
                  variant="ghost"
                  onClick={() => onAuthClick('login')}
                  className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Button>
                <Button
                  onClick={() => onAuthClick('signup')}
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Sign Up
                </Button>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <Button variant="ghost" className="text-emerald-600">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Button>
                <Button variant="ghost" className="text-slate-600 hover:text-red-600">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-600 hover:text-emerald-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-emerald-100">
            <nav className="flex flex-col gap-4 mb-4">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 rounded-lg transition-colors ${
                    currentPage === item.page
                      ? 'bg-emerald-50 text-emerald-600'
                      : 'text-slate-600 hover:bg-emerald-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="flex flex-col gap-2 px-4">
              {!isAuthenticated ? (
                <>
                  <Button
                    variant="outline"
                    onClick={() => {
                      onAuthClick('login');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full"
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                  <Button
                    onClick={() => {
                      onAuthClick('signup');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    Sign Up
                  </Button>
                </>
              ) : (
                <Button variant="outline" className="w-full">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
