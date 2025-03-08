import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import { ArrowRight, Search, Calendar, Sparkles, Utensils, Wallet, User } from 'lucide-react';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NutriPlan - Smart Nutrition & Meal Planning</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <Header />
        
        <main className="pt-32 pb-20">
          {/* Hero Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 space-y-8 max-w-xl animate-fade-up">
                <h1 className="text-5xl md:text-6xl font-display font-medium leading-tight">
                  Nutrition Intelligence, <span className="text-primary">Personalized</span> 
                </h1>
                <p className="text-xl text-muted-foreground/90 leading-relaxed">
                  Discover the nutritional profile of any food and create personalized meal plans tailored to your unique needs and preferences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg" className="h-14 px-8 text-lg">
                    <Link to="/analysis">
                      Analyze Food
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg">
                    <Link to="/meal-plan">Create Meal Plan</Link>
                  </Button>
                </div>
              </div>
              
              <div className="flex-1 w-full max-w-md animate-fade-in">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2670&auto=format&fit=crop" 
                    alt="Healthy food"
                    className="rounded-2xl shadow-xl object-cover aspect-[4/3] w-full"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-100 p-2 rounded-full">
                        <Sparkles className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">AI-Powered</p>
                        <p className="text-xs text-muted-foreground">Nutrition Analysis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
            <h2 className="text-3xl font-medium text-center mb-16">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="glass-card rounded-xl p-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-start justify-between mb-6">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=2670&auto=format&fit=crop" 
                    alt="Food analysis"
                    className="w-24 h-24 rounded-lg object-cover shadow-sm"
                  />
                </div>
                <h3 className="text-xl font-medium mb-3">Food Analysis</h3>
                <p className="text-muted-foreground mb-6">
                  Get detailed nutritional information for any food item. Analyze macronutrients, micronutrients, calories, and more.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm">Comprehensive macro and micronutrient data</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm">Health benefits and potential concerns</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm">Text search or image-based analysis</p>
                  </li>
                </ul>
                <Button asChild variant="outline" className="mt-8 w-full">
                  <Link to="/analysis">
                    Try Food Analysis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="glass-card rounded-xl p-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start justify-between mb-6">
                  <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-indigo-600" />
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2670&auto=format&fit=crop" 
                    alt="Meal planning"
                    className="w-24 h-24 rounded-lg object-cover shadow-sm"
                  />
                </div>
                <h3 className="text-xl font-medium mb-3">Personalized Meal Planning</h3>
                <p className="text-muted-foreground mb-6">
                  Get AI-generated meal plans based on your dietary restrictions, health needs, and taste preferences.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm">7-day meal plans with detailed recipes</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm">Customized to your dietary restrictions</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm">Automatic grocery list generation</p>
                  </li>
                </ul>
                <Button asChild variant="outline" className="mt-8 w-full">
                  <Link to="/meal-plan">
                    Create Meal Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="glass-card rounded-xl p-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-start justify-between mb-6">
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Utensils className="h-6 w-6 text-purple-600" />
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2670&auto=format&fit=crop" 
                    alt="Flexible meal options"
                    className="w-24 h-24 rounded-lg object-cover shadow-sm"
                  />
                </div>
                <h3 className="text-xl font-medium mb-3">Flexible Meal Options</h3>
                <p className="text-muted-foreground mb-6">
                  Choose between full week planning or quick single meals based on your needs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm">Quick single meals with minimal prep time</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm">Customizable cooking methods and ingredients</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm">Detailed nutritional information per meal</p>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-xl p-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-start justify-between mb-6">
                  <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Wallet className="h-6 w-6 text-orange-600" />
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2670&auto=format&fit=crop" 
                    alt="Budget planning"
                    className="w-24 h-24 rounded-lg object-cover shadow-sm"
                  />
                </div>
                <h3 className="text-xl font-medium mb-3">Budget Planning</h3>
                <p className="text-muted-foreground mb-6">
                  Track and manage your meal plan costs with detailed budget breakdowns.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm">Weekly budget tracking and management</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm">Cost per meal and daily average calculations</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm">Store-wise cost breakdown</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Features Showcase */}
            <div className="mt-24">
              <h2 className="text-3xl font-medium text-center mb-12">See It In Action</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                  <img 
                    src="https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?q=80&w=2670&auto=format&fit=crop" 
                    alt="Meal analysis"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-white text-xl font-medium mb-2">Smart Analysis</h3>
                      <p className="text-white/80 text-sm">Get detailed nutritional insights for any meal</p>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                  <img 
                    src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2670&auto=format&fit=crop" 
                    alt="Recipe suggestions"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-white text-xl font-medium mb-2">Recipe Suggestions</h3>
                      <p className="text-white/80 text-sm">Personalized recipes based on your preferences</p>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                  <img 
                    src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2668&auto=format&fit=crop" 
                    alt="Budget planning"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-white text-xl font-medium mb-2">Smart Budgeting</h3>
                      <p className="text-white/80 text-sm">Plan meals within your budget</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div className="mt-24">
              <h2 className="text-3xl font-medium text-center mb-12">Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2670&auto=format&fit=crop" 
                    alt="Healthy meal prep"
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                    <div className="p-8">
                      <p className="text-white text-lg font-medium mb-4">"NutriPlan helped me achieve my health goals while staying within budget."</p>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <User className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-medium">Sarah Johnson</p>
                          <p className="text-white/60 text-sm">Lost 20 lbs in 3 months</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1511909525232-61113c912358?q=80&w=2670&auto=format&fit=crop" 
                    alt="Family meal"
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                    <div className="p-8">
                      <p className="text-white text-lg font-medium mb-4">"Perfect for planning family meals and managing grocery expenses."</p>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <User className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-medium">Michael Chen</p>
                          <p className="text-white/60 text-sm">Family of 4</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-10 md:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=2574&auto=format&fit=crop')] opacity-5 mix-blend-overlay bg-cover"></div>
              <div className="relative z-10 max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-medium mb-6">Ready to transform your nutrition?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get started today with our AI-powered nutrition analysis and meal planning tools. Your personalized journey to better health begins here.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild size="lg" className="text-md">
                    <Link to="/analysis">
                      Analyze Food
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="bg-white/80 backdrop-blur-sm text-md">
                    <Link to="/meal-plan">
                      Create Meal Plan
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <footer className="py-10 border-t border-slate-200 bg-white/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} NutriPlan. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
