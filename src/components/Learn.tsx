
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Search, Lightbulb, BarChart3, Lightbulb as Tips, Wrench, Leaf, Zap, Users, Play, Clock, CheckCircle } from 'lucide-react';

const Learn = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const topicCategories = [
    {
      title: 'Solar Basics',
      icon: <Lightbulb className="w-8 h-8" />,
      image: '/api/placeholder/200/150',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Understanding your Data',
      icon: <BarChart3 className="w-8 h-8" />,
      image: '/api/placeholder/200/150',
      color: 'from-blue-400 to-purple-500'
    },
    {
      title: 'Smart Usage Tips',
      icon: <Tips className="w-8 h-8" />,
      image: '/api/placeholder/200/150',
      color: 'from-green-400 to-teal-500'
    },
    {
      title: 'Solar Maintenance',
      icon: <Wrench className="w-8 h-8" />,
      image: '/api/placeholder/200/150',
      color: 'from-orange-400 to-red-500'
    }
  ];

  const quizzes = [
    {
      title: 'World environment day',
      subtitle: 'Environmental Awareness',
      completion: 75,
      difficulty: 'Easy',
      questions: 10,
      time: '5 mins',
      color: 'from-green-400 to-blue-500'
    },
    {
      title: 'Energy Vampire Hunt',
      subtitle: 'Home Energy Audit',
      completion: 60,
      difficulty: 'Medium',
      questions: 15,
      time: '8 mins',
      color: 'from-red-400 to-pink-500'
    },
    {
      title: 'Myth Busters: Solar Edition',
      subtitle: 'Solar Facts vs Fiction',
      completion: 90,
      difficulty: 'Expert',
      questions: 20,
      time: '12 mins',
      color: 'from-purple-400 to-indigo-500'
    }
  ];

  const videoTutorials = [
    {
      title: 'Setting Up Your Solar App',
      description: 'Learn how to navigate your solar app to track energy usage, monitor savings, and stay in control.',
      duration: '5 min',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      title: 'Maximizing Solar Panel Efficiency',
      description: 'Small changes, big impact. Learn practical ways to improve your system\'s output through positioning, cleaning, and scheduling.',
      duration: '8 min',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      title: 'Troubleshooting Solar Issues',
      description: 'Learn to identify common solar system problems and what steps to take before calling in the pros.',
      duration: '12 min',
      thumbnail: '/api/placeholder/300/200'
    }
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
            <BookOpen className="w-8 h-8 text-green-500" />
            <h2 className="text-3xl font-bold text-gray-900">Learn & Grow with Solar</h2>
          </div>
        </div>

        {/* Hero Section */}
        <Card className="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <CardContent className="p-8 relative z-10">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">Learn & Grow with Solar</h3>
              <p className="text-xl mb-6 opacity-90">
                Empower your energy journey with simple, smart lessons.
                <br />
                Power smarter—learn the best ways to optimize your solar at every level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-accent hover:bg-blue-accent/90 text-white px-8 py-3">
                  Start Learning
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                  Browse Topics
                </Button>
              </div>
              <p className="mt-6 text-sm opacity-80">Over 10,000 users empowered by our solar learning tools. Join them today!</p>
            </div>
          </CardContent>
        </Card>

        {/* Learn by Topics */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Learn by Topics</h3>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search"
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topicCategories.map((topic, index) => (
              <Card key={index} className="group cursor-pointer hover:scale-105 transition-transform duration-300 border-0 shadow-lg">
                <div className={`h-32 bg-gradient-to-r ${topic.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    {topic.icon}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold text-lg text-gray-900">{topic.title}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Quiz */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Quick Quiz</h3>
              <p className="text-gray-600">Engage with bite-sized challenges to reinforce what you've learned. From basics to expert insights, each quiz helps you grow your energy awareness.</p>
            </div>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search" className="pl-10" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {quizzes.map((quiz, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className={`h-32 bg-gradient-to-r ${quiz.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute top-4 left-4 text-white">
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">{quiz.difficulty}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold">{quiz.completion}%</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold text-lg text-gray-900 mb-1">{quiz.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{quiz.subtitle}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>Time: {quiz.time}</span>
                    <span>{quiz.questions} Questions</span>
                  </div>
                  <Progress value={quiz.completion} className="mb-3" />
                  <Button variant="outline" className="w-full text-orange-primary border-orange-primary hover:bg-orange-primary hover:text-white">
                    Continue Quiz
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Watch & Learn */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Watch & Learn</h3>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search" className="pl-10" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {videoTutorials.map((video, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-gray-800 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{video.title}</h4>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
