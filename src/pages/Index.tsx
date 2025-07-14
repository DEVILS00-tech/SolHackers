
import React, { useState } from 'react';
import Header from '@/components/Header';
import HomePage from '@/components/HomePage';
import Dashboard from '@/components/Dashboard';
import Leaderboard from '@/components/Leaderboard';
import Learn from '@/components/Learn';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <HomePage />;
      case 'Progress':
        return <Dashboard />;
      case 'Leaderboard':
        return <Leaderboard />;
      case 'Learn':
        return <Learn />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
