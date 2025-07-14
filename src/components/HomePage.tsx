
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Zap, Users, Award, TrendingUp, Shield } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Compete To Conserve
                <br />
                <span className="text-orange-primary">Win While You Save!</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join our community to track your energy usage, compete with friends, and build a sustainable future. 
                By joining the Power Together challenge, you're not just reducing your daily bills - 
                you're leading your community to the fight against climate change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-accent hover:bg-blue-accent/90 text-white px-8 py-3 text-lg">
                  Get Started
                </Button>
                <Button variant="outline" className="border-orange-primary text-orange-primary hover:bg-orange-primary hover:text-white px-8 py-3 text-lg">
                  Watch demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/Desktop/pictures_for_index/1st.png"
                alt="Solar panel installation"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Redefined Energy Management For A Sustainable Tomorrow
            </h2>
            <p className="text-xl text-gray-600">
              Turn data into action with powerful insights and intelligent tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-orange-primary text-white border-0 hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-8 h-8 text-orange-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Save</h3>
                <p className="text-orange-light">
                  Track your energy use, see where you can reduce your spending and impact the planet every day.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-orange-primary text-white border-0 hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-orange-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Win Rewards</h3>
                <p className="text-orange-light">
                  Earn rewards for daily steps you take from simple energy conversations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-orange-primary text-white border-0 hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-orange-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Compete</h3>
                <p className="text-orange-light">
                  Challenge your friends, set local leaderboards and see where others make an impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Track your impact. Save energy.
            <br />
            Lead the change.
          </h2>
          <Button className="bg-white text-orange-primary hover:bg-orange-light px-8 py-3 text-lg font-semibold">
            Yes! lets do it
          </Button>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-4">Energy Saved :</h3>
            <div className="text-6xl font-bold mb-4">40 <span className="text-3xl">KWH</span></div>
            <div className="flex justify-center space-x-4">
              <span className="bg-white/20 px-4 py-2 rounded-full">Today</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Week</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Month</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Year</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us for More Info!</h2>
              <p className="text-gray-600 mb-8">Feel free to contact our team via the form box</p>
              <img
                src="/api/placeholder/400/300"
                alt="Wind turbines at sunset"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Send Us a Message!</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-primary focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-primary focus:border-transparent"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-primary focus:border-transparent"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-primary focus:border-transparent resize-none"
                    ></textarea>
                    <Button className="w-full bg-blue-accent hover:bg-blue-accent/90 text-white py-3 text-lg">
                      Send
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
