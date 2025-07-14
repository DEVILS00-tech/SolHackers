
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Zap, Leaf, Trophy, TrendingUp, Cloud, Sun, Wind } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Hi, Alvin</h1>
              <p className="text-gray-600">Welcome Back!</p>
            </div>
          </div>
          <div className="bg-orange-primary text-white p-1 rounded-lg inline-block">
            <span className="px-3 py-1 text-sm font-medium">📊 Dashboard</span>
          </div>
        </div>

        {/* Congratulations Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Well done, Alvin!</h2>
          <p className="text-gray-600">Keep the momentum going—your savings are powering a cleaner world.</p>
        </div>

        {/* Main Stats Card */}
        <Card className="mb-8 bg-gradient-to-r from-red-900 to-orange-900 text-white border-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <CardContent className="p-8 relative z-10">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Carbon Emission Reduction</span>
                </div>
                <div className="text-3xl font-bold">16.68 Kg</div>
                <div className="text-sm opacity-80">of CO₂</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Cost Savings</span>
                </div>
                <div className="text-3xl font-bold">₹320</div>
                <div className="text-sm opacity-80">Saved This Today</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Your Impact</span>
                </div>
                <div className="text-3xl font-bold">2 Trees Planted</div>
                <div className="text-sm opacity-80">That's what your savings helps for the planet</div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Energy Saved :</h3>
              <div className="text-5xl font-bold mb-4">40 <span className="text-2xl">KWH</span></div>
              <div className="flex justify-center space-x-2">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Today</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Weekly</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Monthly</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Year</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Secondary Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Energy Production Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Energy Produced
                <Button variant="outline" size="sm" className="text-blue-accent border-blue-accent">
                  Week ▼
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-7 gap-1 items-end h-32">
                  <div className="bg-yellow-400 h-16 rounded-t"></div>
                  <div className="bg-yellow-400 h-20 rounded-t"></div>
                  <div className="bg-yellow-400 h-24 rounded-t"></div>
                  <div className="bg-yellow-400 h-28 rounded-t"></div>
                  <div className="bg-orange-400 h-32 rounded-t"></div>
                  <div className="bg-yellow-400 h-20 rounded-t"></div>
                  <div className="bg-yellow-400 h-16 rounded-t"></div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-xs text-gray-500 text-center">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weather Card */}
          <Card className="bg-gradient-to-br from-green-400 to-blue-500 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm opacity-80">Partly cloudy</span>
                <Sun className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">30°C</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Wind className="w-4 h-4" />
                  <span>23 km/h WSW</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Cloud className="w-4 h-4" />
                  <span>60% Humidity</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile Card */}
          <Card className="bg-orange-primary text-white border-0">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-lg bg-white/20 mx-auto mb-3 bg-cover bg-center" style={{backgroundImage: 'url(/api/placeholder/64/64)'}}></div>
                <h3 className="font-bold text-lg">Alvin 🔥</h3>
              </div>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span>📊 190,344+ Ranking</span>
                </div>
                <div className="flex justify-between">
                  <span>👥 2nd Ranking</span>
                </div>
              </div>
              <div className="text-center">
                <span className="text-lg font-bold">Level 2 🏆</span>
                <div className="flex space-x-1 mt-2 justify-center">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className={`w-6 h-6 rounded-full ${i < 5 ? 'bg-yellow-400' : 'bg-white/20'} flex items-center justify-center text-xs`}>
                      ⚡
                    </div>
                  ))}
                </div>
                <Progress value={87} className="mt-3 bg-white/20" />
                <p className="text-xs mt-1">87% completed</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Energy Storage */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Energy Storage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center">
                <div className="relative w-40 h-40">
                  <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8"/>
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#f59e0b" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="37.68"/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold">85%</div>
                      <div className="text-sm text-gray-500">Capacity</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm">Green Energy 85%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-sm">Main Power 0%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Challenge */}
          <Card className="bg-orange-primary text-white border-0">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold">Weekly Challenge:</h3>
                <p className="text-orange-light">Boost Your Rank & Earn Rewards</p>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Save 80 kwh this week</h2>
                <Progress value={75} className="bg-white/20 mb-2" />
                <p className="text-sm">45 / 80 kwh • 56% complete</p>
              </div>
              <Button className="w-full bg-blue-accent hover:bg-blue-accent/90 text-white mb-4">
                Claim Reward
              </Button>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Trophy className="w-5 h-5" />
                  <span className="text-sm">Gold Badge • 100 cashback</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-sm">⏰ 3 Days Left</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tip */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <p className="text-blue-800">
              <strong>Tip:</strong> "Clean your solar panels regularly—dust and debris can reduce efficiency by up to 20%."
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
