
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Trophy, Search, TrendingUp, TrendingDown, Award, Zap, Flame, Target, Users } from 'lucide-react';

const Leaderboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [timeFilter, setTimeFilter] = useState('today');

  const topUsers = [
    { rank: 1, name: 'Varinder', level: 2, avatar: '/api/placeholder/50/50', trend: 'same' },
    { rank: 2, name: 'Alvin', level: 2, avatar: '/api/placeholder/50/50', trend: 'up' },
    { rank: 3, name: '', level: 2, avatar: '/api/placeholder/50/50', trend: 'down' }
  ];

  const leaderboardData = [
    { rank: 4, name: 'Rahul Sharma', level: 1, avatar: '/api/placeholder/40/40', trend: 'up', change: '1 from last week' },
    { rank: 5, name: 'Shivam Kumar', level: 1, avatar: '/api/placeholder/40/40', trend: 'down', change: '2 from last week' },
    { rank: 6, name: 'Amit Gupta', level: 1, avatar: '/api/placeholder/40/40', trend: 'up', change: '1 from last week' }
  ];

  const achievements = [
    { name: 'First Spark', icon: <Zap className="w-6 h-6" />, color: 'bg-orange-primary' },
    { name: 'Power Saver', icon: <Award className="w-6 h-6" />, color: 'bg-orange-primary' },
    { name: 'Solar Warrior', icon: <Flame className="w-6 h-6" />, color: 'bg-blue-accent' },
    { name: 'Daily Streaker', icon: <Target className="w-6 h-6" />, color: 'bg-orange-primary' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Hi, Alvin</h1>
              <p className="text-gray-600">Welcome Back!</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 mb-6">
            <Trophy className="w-8 h-8 text-orange-primary" />
            <h2 className="text-3xl font-bold text-gray-900">LeaderBoard</h2>
          </div>
          <p className="text-gray-600 text-lg">Small actions, big impact—see where you stand in the community.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search"
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <Select value={timeFilter} onValueChange={setTimeFilter}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This week</SelectItem>
              <SelectItem value="month">This month</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex space-x-2">
            <Button variant={timeFilter === 'today' ? 'default' : 'outline'} className="bg-orange-primary hover:bg-orange-primary/90">
              Today
            </Button>
            <Button variant={timeFilter === 'month' ? 'default' : 'outline'}>
              This month
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Leaderboard */}
          <div className="lg:col-span-2">
            {/* Top 3 Podium */}
            <Card className="mb-6 bg-orange-primary text-white border-0">
              <CardContent className="p-8">
                <div className="flex items-center justify-center space-x-8">
                  {/* 2nd Place */}
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 mx-auto mb-3 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-cover bg-center" style={{backgroundImage: 'url(/api/placeholder/64/64)'}}></div>
                    </div>
                    <h3 className="font-bold">Alvin</h3>
                    <p className="text-sm opacity-80">Level 2</p>
                    <div className="bg-white/30 rounded-lg p-4 mt-2">
                      <div className="text-3xl font-bold">2</div>
                    </div>
                  </div>

                  {/* 1st Place */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-white/20 mx-auto mb-3 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-cover bg-center" style={{backgroundImage: 'url(/api/placeholder/80/80)'}}></div>
                    </div>
                    <h3 className="font-bold">Varinder</h3>
                    <p className="text-sm opacity-80">Level 2</p>
                    <div className="bg-white/30 rounded-lg p-4 mt-2">
                      <div className="text-3xl font-bold">1</div>
                    </div>
                  </div>

                  {/* 3rd Place */}
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 mx-auto mb-3 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-cover bg-center" style={{backgroundImage: 'url(/api/placeholder/64/64)'}}></div>
                    </div>
                    <h3 className="font-bold"></h3>
                    <p className="text-sm opacity-80">Level 2</p>
                    <div className="bg-white/30 rounded-lg p-4 mt-2">
                      <div className="text-3xl font-bold">3</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Remaining Rankings */}
            <Card>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {leaderboardData.map((user, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 flex items-center justify-center text-lg font-bold text-gray-600">
                          {user.rank}
                        </div>
                        <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{backgroundImage: `url(${user.avatar})`}}></div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{user.name}</h4>
                          <p className="text-sm text-gray-500">Level {user.level}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {user.trend === 'up' ? (
                          <TrendingUp className="w-4 h-4 text-green-500" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-500" />
                        )}
                        <span className="text-sm text-gray-500">{user.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* User Profile & Achievements */}
          <div className="space-y-6">
            {/* User Profile Card */}
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Alvin 🔥</h3>
                <div className="bg-orange-100 text-orange-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Level 2
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className={`${achievement.color} text-white p-4 rounded-lg flex flex-col items-center text-center`}>
                      {achievement.icon}
                      <span className="text-sm font-medium mt-2">{achievement.name}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 text-orange-primary border-orange-primary hover:bg-orange-primary hover:text-white">
                  +2 More Achievements
                </Button>
              </CardContent>
            </Card>

            {/* Level Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Level 2</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>87% completed</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-primary h-2 rounded-full" style={{width: '87%'}}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tip */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
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

export default Leaderboard;
