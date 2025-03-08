import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import { ArrowRight, Search, Calendar, Sparkles, Utensils, Wallet } from 'lucide-react';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NutriPlan - Smart Nutrition & Meal Planning</title>
      </Helmet>
      <div className="min-h-screen relative overflow-hidden">
        {/* Background Pattern */}
        <div className="fixed inset-0 w-full h-full -z-20 opacity-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#4ade8040_1px,transparent_0)] bg-[size:32px_32px]" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#4ade8020_25%,transparent_25%,transparent_75%,#4ade8020_75%,#4ade8020),linear-gradient(45deg,#4ade8020_25%,transparent_25%,transparent_75%,#4ade8020_75%,#4ade8020)] bg-[length:48px_48px] bg-[position:0_0,24px_24px] opacity-60" />
        </div>

        {/* Animated Background */}
        <div className="fixed inset-0 w-full h-full -z-10">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'linear-gradient(120deg, rgba(220, 252, 231, 0.7), rgba(219, 234, 254, 0.7), rgba(255, 255, 255, 0.8))',
                'linear-gradient(240deg, rgba(219, 234, 254, 0.7), rgba(220, 252, 231, 0.7), rgba(255, 255, 255, 0.8))',
                'linear-gradient(360deg, rgba(255, 255, 255, 0.8), rgba(220, 252, 231, 0.7), rgba(219, 234, 254, 0.7))',
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          
          {/* Fluid Gradient Overlay */}
          <motion.div
            className="absolute inset-0 opacity-60"
            animate={{
              background: [
                'radial-gradient(circle at 20% 20%, rgba(74, 222, 128, 0.4) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(74, 222, 128, 0.4) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />

          {/* Enhanced Pattern Overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(60deg,#4ade8015_25%,transparent_25%,transparent_75%,#4ade8015_75%,#4ade8015),linear-gradient(120deg,#4ade8015_25%,transparent_25%,transparent_75%,#4ade8015_75%,#4ade8015)] bg-[length:64px_64px] bg-[position:0_0,32px_32px] opacity-70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#4ade8010_1px,transparent_50%)] bg-[size:48px_48px] opacity-60" />
          </div>

          <div className="absolute inset-0 backdrop-blur-3xl"/>
        </div>

        <Header />
        
        <main className="pt-32 pb-20 relative z-10">
          {/* Hero Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <motion.div 
                className="flex-1 space-y-8 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-6xl font-display font-medium leading-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Nutrition Intelligence, <span className="text-primary">Personalized</span> 
                </h1>
                <p className="text-xl text-muted-foreground/90 leading-relaxed">
                  Discover the nutritional profile of any food and create personalized meal plans tailored to your unique needs and preferences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300">
                    <Link to="/analysis">
                      Analyze Food
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg border-2 hover:bg-primary/5">
                    <Link to="/meal-plan">Create Meal Plan</Link>
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex-1 w-full max-w-md"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-1000"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2670&auto=format&fit=crop" 
                    alt="Healthy food"
                    className="rounded-2xl shadow-xl object-cover aspect-[4/3] w-full relative"
                    loading="lazy"
                  />
                  <motion.div 
                    className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-r from-green-100 to-blue-100 p-2 rounded-full">
                        <Sparkles className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">AI-Powered</p>
                        <p className="text-xs text-muted-foreground">Nutrition Analysis</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
            <motion.h2 
              className="text-3xl font-medium text-center mb-16 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Key Features
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div 
                className="glass-card rounded-xl p-8 bg-white/70 backdrop-blur-sm border border-slate-200/50 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="h-12 w-12 bg-gradient-to-r from-blue-100 to-primary/20 rounded-full flex items-center justify-center">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=2670&auto=format&fit=crop" 
                    alt="Food analysis"
                    className="w-24 h-24 rounded-lg object-cover shadow-sm hover:scale-105 transition-transform duration-300"
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
              </motion.div>
              
              <motion.div 
                className="glass-card rounded-xl p-8 bg-white/70 backdrop-blur-sm border border-slate-200/50 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="h-12 w-12 bg-gradient-to-r from-indigo-100 to-primary/20 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2670&auto=format&fit=crop" 
                    alt="Meal planning"
                    className="w-24 h-24 rounded-lg object-cover shadow-sm hover:scale-105 transition-transform duration-300"
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
              </motion.div>

              <motion.div 
                className="glass-card rounded-xl p-8 bg-white/70 backdrop-blur-sm border border-slate-200/50 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="h-12 w-12 bg-gradient-to-r from-purple-100 to-primary/20 rounded-full flex items-center justify-center">
                    <Utensils className="h-6 w-6 text-primary" />
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2670&auto=format&fit=crop" 
                    alt="Flexible meal options"
                    className="w-24 h-24 rounded-lg object-cover shadow-sm hover:scale-105 transition-transform duration-300"
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
              </motion.div>

              <motion.div 
                className="glass-card rounded-xl p-8 bg-white/70 backdrop-blur-sm border border-slate-200/50 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="h-12 w-12 bg-gradient-to-r from-orange-100 to-primary/20 rounded-full flex items-center justify-center">
                    <Wallet className="h-6 w-6 text-primary" />
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2670&auto=format&fit=crop" 
                    alt="Budget planning"
                    className="w-24 h-24 rounded-lg object-cover shadow-sm hover:scale-105 transition-transform duration-300"
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
              </motion.div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
            <motion.div 
              className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-3xl p-10 md:p-16 relative overflow-hidden border border-slate-200/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=2574&auto=format&fit=crop')] opacity-5 mix-blend-overlay bg-cover"></div>
              <div className="relative z-10 max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-medium mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Ready to transform your nutrition?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get started today with our AI-powered nutrition analysis and meal planning tools. Your personalized journey to better health begins here.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild size="lg" className="text-md bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90">
                    <Link to="/analysis">
                      Analyze Food
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="bg-white/80 backdrop-blur-sm text-md border-2">
                    <Link to="/meal-plan">
                      Create Meal Plan
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </section>
        </main>
        
        <footer className="py-10 border-t border-slate-200 bg-white/30 backdrop-blur-sm relative z-10">
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
