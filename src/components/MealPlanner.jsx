import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Calendar, CheckSquare, ShoppingBag, Utensils, Clock, ChevronDown, ChevronUp, Wallet } from 'lucide-react';
import { generateMealPlan } from '@/utils/geminiService';
import { cn } from '@/lib/utils';

const MealPlanner = () => {
  const [preferences, setPreferences] = useState({
    allergies: '',
    healthConditions: '',
    activityLevel: 'moderate',
    tastePreferences: '',
    calorieTarget: '',
    availableIngredients: '',
    isOnePiece: false,
    dietaryPreferences: '',
    customDietaryPreferences: '',
    weeklyBudget: '',
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [mealPlan, setMealPlan] = useState(null);
  const [activeDay, setActiveDay] = useState(0);
  const [activeMeal, setActiveMeal] = useState(null);
  const [activeTab, setActiveTab] = useState('mealplan');
  const [expandedCategories, setExpandedCategories] = useState({
    produce: true,
    protein: true,
    dairy: true,
    grains: true,
    other: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Add validation for budget input
    if (name === 'weeklyBudget') {
      // Convert to number and check if negative
      const numValue = parseFloat(value);
      if (numValue < 0) {
        toast.error('Budget cannot be negative');
        return;
      }
    }
    
    setPreferences((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setPreferences((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsGenerating(true);
    toast.info('Generating your meal plan...', { duration: 3000 });

    try {
      const plan = await generateMealPlan(preferences);
      
      if (plan.error) {
        toast.error(plan.message);
      } else {
        setMealPlan(plan);
        setActiveDay(0);
        setActiveMeal(null);
        toast.success('Your meal plan is ready!');
      }
    } catch (error) {
      console.error('Meal plan generation error:', error);
      toast.error('Failed to generate meal plan. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const resetPlan = () => {
    setMealPlan(null);
    setActiveDay(0);
    setActiveMeal(null);
  };

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const activityLevels = [
    { value: 'sedentary', label: 'Sedentary (little to no exercise)' },
    { value: 'light', label: 'Light (light exercise 1-3 days/week)' },
    { value: 'moderate', label: 'Moderate (moderate exercise 3-5 days/week)' },
    { value: 'active', label: 'Active (hard exercise 6-7 days/week)' },
    { value: 'very_active', label: 'Very Active (very hard exercise & physical job)' },
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {!mealPlan ? (
        <div className="space-y-6 animate-fade-up">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-medium mb-2">
              {preferences.isOnePiece ? 'Quick Single Meal Generator' : 'Personalized Meal Planning'}
            </h2>
            <p className="text-muted-foreground">
              {preferences.isOnePiece 
                ? 'Get a quick, easy-to-prepare single meal based on your preferences'
                : 'Create a customized 7-day meal plan based on your preferences and needs'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-slate-100 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Meal Plan Type</h3>
                <p className="text-sm text-muted-foreground">
                  {preferences.isOnePiece 
                    ? 'Generate a single quick meal'
                    : 'Choose how you want to plan your meals'}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  type="button"
                  variant={preferences.isOnePiece ? "outline" : "default"}
                  onClick={() => setPreferences(prev => ({ ...prev, isOnePiece: false }))}
                >
                  Full Week Plan
                </Button>
                <Button
                  type="button"
                  variant={preferences.isOnePiece ? "default" : "outline"}
                  onClick={() => setPreferences(prev => ({ ...prev, isOnePiece: true }))}
                >
                  Quick Single Meal
                </Button>
              </div>
            </div>

            {preferences.isOnePiece ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="mealType" className="block text-sm font-medium mb-1">
                        Meal Type
                      </label>
                      <Select
                        value={preferences.mealType || 'lunch'}
                        onValueChange={(value) => handleSelectChange('mealType', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select meal type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="breakfast">Breakfast</SelectItem>
                          <SelectItem value="lunch">Lunch</SelectItem>
                          <SelectItem value="dinner">Dinner</SelectItem>
                          <SelectItem value="snack">Snack</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="prepTime" className="block text-sm font-medium mb-1">
                        Maximum Prep Time
                      </label>
                      <Select
                        value={preferences.prepTime || '15'}
                        onValueChange={(value) => handleSelectChange('prepTime', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select prep time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5 minutes</SelectItem>
                          <SelectItem value="10">10 minutes</SelectItem>
                          <SelectItem value="15">15 minutes</SelectItem>
                          <SelectItem value="20">20 minutes</SelectItem>
                          <SelectItem value="30">30 minutes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="calorieTarget" className="block text-sm font-medium mb-1">
                        Calorie Target (optional)
                      </label>
                      <Input
                        id="calorieTarget"
                        name="calorieTarget"
                        type="text"
                        placeholder="e.g., 500, or leave blank for automatic calculation"
                        value={preferences.calorieTarget}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="maxIngredients" className="block text-sm font-medium mb-1">
                        Maximum Ingredients
                      </label>
                      <Select
                        value={preferences.maxIngredients || '5'}
                        onValueChange={(value) => handleSelectChange('maxIngredients', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select max ingredients" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3">3 ingredients</SelectItem>
                          <SelectItem value="4">4 ingredients</SelectItem>
                          <SelectItem value="5">5 ingredients</SelectItem>
                          <SelectItem value="6">6 ingredients</SelectItem>
                          <SelectItem value="7">7 ingredients</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="cookingMethod" className="block text-sm font-medium mb-1">
                        Preferred Cooking Method
                      </label>
                      <Select
                        value={preferences.cookingMethod || 'any'}
                        onValueChange={(value) => handleSelectChange('cookingMethod', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select cooking method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="no-cook">No Cooking Required</SelectItem>
                          <SelectItem value="microwave">Microwave</SelectItem>
                          <SelectItem value="stovetop">Stovetop</SelectItem>
                          <SelectItem value="oven">Oven</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="availableIngredients" className="block text-sm font-medium mb-1">
                        Available Ingredients (optional)
                      </label>
                      <Textarea
                        id="availableIngredients"
                        name="availableIngredients"
                        placeholder="List ingredients you have at home (e.g., chicken breast, rice, tomatoes)"
                        value={preferences.availableIngredients}
                        onChange={handleInputChange}
                        className="resize-none h-20"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="dietaryPreferences" className="block text-sm font-medium mb-1">
                        Dietary Preferences
                      </label>
                      <Select
                        value={preferences.dietaryPreferences || 'none'}
                        onValueChange={(value) => handleSelectChange('dietaryPreferences', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your dietary preference" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">No Specific Diet</SelectItem>
                          <SelectItem value="vegetarian">Vegetarian</SelectItem>
                          <SelectItem value="vegan">Vegan</SelectItem>
                          <SelectItem value="keto">Ketogenic (Keto)</SelectItem>
                          <SelectItem value="paleo">Paleo</SelectItem>
                          <SelectItem value="mediterranean">Mediterranean</SelectItem>
                          <SelectItem value="pescatarian">Pescatarian</SelectItem>
                          <SelectItem value="gluten-free">Gluten-Free</SelectItem>
                          <SelectItem value="dairy-free">Dairy-Free</SelectItem>
                          <SelectItem value="low-carb">Low-Carb</SelectItem>
                          <SelectItem value="low-fat">Low-Fat</SelectItem>
                          <SelectItem value="high-protein">High-Protein</SelectItem>
                          <SelectItem value="halal">Halal</SelectItem>
                          <SelectItem value="kosher">Kosher</SelectItem>
                          <SelectItem value="custom">Custom Diet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {preferences.dietaryPreferences === 'custom' && (
                      <div>
                        <label htmlFor="customDietaryPreferences" className="block text-sm font-medium mb-1">
                          Custom Dietary Preferences
                        </label>
                        <Textarea
                          id="customDietaryPreferences"
                          name="customDietaryPreferences"
                          placeholder="Describe your specific dietary preferences (e.g., no red meat, only organic, etc.)"
                          value={preferences.customDietaryPreferences}
                          onChange={handleInputChange}
                          className="resize-none h-20"
                        />
                      </div>
                    )}

                    <div>
                      <label htmlFor="allergies" className="block text-sm font-medium mb-1">
                        Allergies
                      </label>
                      <Input
                        id="allergies"
                        name="allergies"
                        placeholder="e.g., Nuts, Dairy, Gluten, Shellfish"
                        value={preferences.allergies}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="healthConditions" className="block text-sm font-medium mb-1">
                        Health Conditions
                      </label>
                      <Input
                        id="healthConditions"
                        name="healthConditions"
                        placeholder="e.g., Diabetes, Hypertension, GERD"
                        value={preferences.healthConditions}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="availableIngredients" className="block text-sm font-medium mb-1">
                        Available Ingredients
                      </label>
                      <Textarea
                        id="availableIngredients"
                        name="availableIngredients"
                        placeholder="List your available ingredients (e.g., chicken breast, rice, tomatoes, spinach)"
                        value={preferences.availableIngredients}
                        onChange={handleInputChange}
                        className="resize-none h-24"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="activityLevel" className="block text-sm font-medium mb-1">
                        Activity Level
                      </label>
                      <Select
                        value={preferences.activityLevel}
                        onValueChange={(value) => handleSelectChange('activityLevel', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your activity level" />
                        </SelectTrigger>
                        <SelectContent>
                          {activityLevels.map((level) => (
                            <SelectItem key={level.value} value={level.value}>
                              {level.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="weeklyBudget" className="block text-sm font-medium mb-1">
                        Weekly Budget
                      </label>
                      <Input
                        id="weeklyBudget"
                        name="weeklyBudget"
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="Enter your weekly budget (e.g., 200)"
                        value={preferences.weeklyBudget}
                        onChange={handleInputChange}
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        Set your weekly budget to help plan meals within your spending limit
                      </p>
                    </div>

                    <div>
                      <label htmlFor="tastePreferences" className="block text-sm font-medium mb-1">
                        Taste Preferences
                      </label>
                      <Textarea
                        id="tastePreferences"
                        name="tastePreferences"
                        placeholder="e.g., Spicy food, Mediterranean cuisine, Prefer chicken over red meat"
                        value={preferences.tastePreferences}
                        onChange={handleInputChange}
                        className="resize-none h-20"
                      />
                    </div>

                    <div>
                      <label htmlFor="calorieTarget" className="block text-sm font-medium mb-1">
                        Calorie Target (optional)
                      </label>
                      <Input
                        id="calorieTarget"
                        name="calorieTarget"
                        type="text"
                        placeholder="e.g., 2000, or leave blank for automatic calculation"
                        value={preferences.calorieTarget}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <Button
              type="submit"
              className="w-full py-6 text-lg font-medium mt-6"
              disabled={isGenerating}
            >
              {isGenerating ? 'Generating Plan...' : 'Generate Meal Plan'}
            </Button>
          </form>
        </div>
      ) : (
        <div className="space-y-6 animate-fade-up">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-3xl font-medium">
                {preferences.isOnePiece ? 'Your Quick OnePiece Meal' : 'Your Custom Meal Plan'}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {preferences.isOnePiece ? (
                  <>
                    {mealPlan.onePieceMeal.name} • 
                    Prep time: {mealPlan.onePieceMeal.prepTime} minutes • 
                    {mealPlan.onePieceMeal.calories} kcal
                  </>
                ) : (
                  <>
                    Average daily calories: {mealPlan.nutritionSummary.averageDailyCalories} kcal • 
                    Protein: {mealPlan.nutritionSummary.macroRatio.protein} • 
                    Fat: {mealPlan.nutritionSummary.macroRatio.fat} • 
                    Carbs: {mealPlan.nutritionSummary.macroRatio.carbs}
                  </>
                )}
              </p>
            </div>
            <Button variant="outline" onClick={resetPlan}>
              Create New {preferences.isOnePiece ? 'Meal' : 'Plan'}
            </Button>
          </div>

          {preferences.isOnePiece ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{mealPlan.onePieceMeal.name}</CardTitle>
                  <CardDescription>
                    A quick and easy {mealPlan.onePieceMeal.type} meal
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span>Prep Time:</span>
                    <span className="font-medium">{mealPlan.onePieceMeal.prepTime} minutes</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Cooking Method:</span>
                    <span className="font-medium">{mealPlan.onePieceMeal.cookingMethod}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Calories:</span>
                    <span className="font-medium">{mealPlan.onePieceMeal.calories} kcal</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Cost:</span>
                    <span className="font-medium">${mealPlan.onePieceMeal.estimatedCost.toFixed(2)}</span>
                  </div>
                  <Separator className="my-4" />
                  <div>
                    <h4 className="font-medium mb-2">Macronutrients</h4>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-medium">{mealPlan.onePieceMeal.macros.protein}g</div>
                        <div className="text-xs text-muted-foreground">Protein</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">{mealPlan.onePieceMeal.macros.fat}g</div>
                        <div className="text-xs text-muted-foreground">Fat</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">{mealPlan.onePieceMeal.macros.carbs}g</div>
                        <div className="text-xs text-muted-foreground">Carbs</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Recipe</CardTitle>
                  <CardDescription>
                    Simple and quick to prepare
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Ingredients</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {mealPlan.onePieceMeal.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-sm">{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  <Separator className="my-4" />
                  <div>
                    <h4 className="font-medium mb-2">Instructions</h4>
                    <p className="text-sm text-muted-foreground">{mealPlan.onePieceMeal.recipe}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="mealplan" className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>Meal Plan</span>
                </TabsTrigger>
                <TabsTrigger value="grocery" className="flex items-center gap-2">
                  <ShoppingBag size={18} />
                  <span>Grocery List</span>
                </TabsTrigger>
                <TabsTrigger value="budget" className="flex items-center gap-2">
                  <Wallet size={18} />
                  <span>Budget</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="mealplan" className="space-y-6">
                <div className="flex overflow-x-auto py-2 gap-2 pb-4">
                  {days.map((day, index) => (
                    <Button
                      key={index}
                      variant={activeDay === index ? "default" : "outline"}
                      className={cn(
                        "flex-shrink-0 h-12",
                        activeDay === index ? "shadow-md" : ""
                      )}
                      onClick={() => setActiveDay(index)}
                    >
                      {day}
                    </Button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {mealPlan.weekPlan[activeDay].meals.map((meal, index) => (
                    <Card 
                      key={index} 
                      className={cn(
                        "transition-all duration-300 hover:shadow-md overflow-hidden",
                        activeMeal === index ? "ring-2 ring-primary/20" : ""
                      )}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div className="bg-slate-100 text-xs rounded-full px-2 py-1 text-slate-600">
                            {meal.type}
                          </div>
                          <div className="flex items-center gap-2">
                            {meal.usesAvailableIngredients && (
                              <div className="bg-green-100 text-xs rounded-full px-2 py-1 text-green-600">
                                Uses Available Ingredients
                              </div>
                            )}
                            <div className="text-sm text-muted-foreground">
                              {meal.calories} kcal
                            </div>
                          </div>
                        </div>
                        <CardTitle className="text-xl mt-2">{meal.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-3">
                        <div className="flex justify-between mb-3 text-sm">
                          <span>Protein: {meal.macros.protein}</span>
                          <span>Fat: {meal.macros.fat}</span>
                          <span>Carbs: {meal.macros.carbs}</span>
                        </div>
                        <Separator className="my-2" />
                        <div 
                          className={cn(
                            "transition-all duration-300 overflow-hidden",
                            activeMeal === index ? "max-h-72" : "max-h-0"
                          )}
                        >
                          <div className="pt-2">
                            <h4 className="font-medium text-sm mb-1">Ingredients:</h4>
                            <ul className="text-sm space-y-1 pl-5 list-disc mb-3">
                              {meal.ingredients.map((ingredient, i) => (
                                <li key={i}>{ingredient}</li>
                              ))}
                            </ul>
                            <h4 className="font-medium text-sm mb-1">Recipe:</h4>
                            <p className="text-sm text-muted-foreground">{meal.recipe}</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button 
                          variant="ghost" 
                          className="w-full flex items-center justify-center gap-1"
                          onClick={() => setActiveMeal(activeMeal === index ? null : index)}
                        >
                          {activeMeal === index ? (
                            <>
                              <ChevronUp size={18} />
                              <span>Hide Details</span>
                            </>
                          ) : (
                            <>
                              <ChevronDown size={18} />
                              <span>View Details</span>
                            </>
                          )}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="grocery" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Weekly Grocery List</CardTitle>
                    <CardDescription>
                      All ingredients needed for your 7-day meal plan
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {mealPlan.ingredientUsage && (
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium mb-2">Available Ingredients Used</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {mealPlan.ingredientUsage.availableIngredientsUsed.map((ingredient, index) => (
                              <div key={index} className="flex items-center space-x-2 bg-green-50 p-2 rounded-lg">
                                <CheckSquare size={16} className="text-green-600" />
                                <span className="text-sm">{ingredient}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Additional Ingredients Needed</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {mealPlan.ingredientUsage.additionalIngredientsNeeded.map((ingredient, index) => (
                              <div key={index} className="flex items-center space-x-2 bg-slate-50 p-2 rounded-lg">
                                <ShoppingBag size={16} className="text-slate-600" />
                                <span className="text-sm">{ingredient}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    <Separator className="my-4" />
                    <div className="space-y-4">
                      {Object.entries(mealPlan.groceryList).map(([category, items]) => (
                        <div key={category} className="border rounded-lg overflow-hidden">
                          <div 
                            className="flex items-center justify-between p-3 bg-secondary cursor-pointer"
                            onClick={() => toggleCategory(category)}
                          >
                            <h3 className="font-medium capitalize">{category}</h3>
                            <Button variant="ghost" size="sm">
                              {expandedCategories[category] ? (
                                <ChevronUp size={18} />
                              ) : (
                                <ChevronDown size={18} />
                              )}
                            </Button>
                          </div>
                          {expandedCategories[category] && (
                            <div className="p-3 bg-white">
                              <ul className="space-y-1">
                                {items.map((item, index) => (
                                  <li key={index} className="flex items-center space-x-2">
                                    <CheckSquare size={16} className="text-muted-foreground" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="budget" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Weekly Budget Planning</CardTitle>
                    <CardDescription>
                      Track and manage your weekly meal plan costs
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="weeklyBudget" className="block text-sm font-medium mb-1">
                            Weekly Budget
                          </label>
                          <Input
                            id="weeklyBudget"
                            name="weeklyBudget"
                            type="number"
                            min="0"
                            step="0.01"
                            placeholder="Enter your weekly budget (e.g., 200)"
                            value={preferences.weeklyBudget}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-medium mb-2">Weekly Budget Summary</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Total Weekly Cost:</span>
                            <span className="font-medium">${mealPlan?.budgetSummary?.estimatedWeeklyCost || '0.00'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Daily Average:</span>
                            <span className="font-medium">${(mealPlan?.budgetSummary?.estimatedWeeklyCost / 7 || 0).toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Cost per Meal:</span>
                            <span className="font-medium">${mealPlan?.budgetSummary?.costPerMeal || '0.00'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Remaining Budget:</span>
                            <span className="font-medium">${mealPlan?.budgetSummary?.remainingBudget || '0.00'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {mealPlan?.budgetSummary?.storeBreakdown && (
                      <div className="mt-6">
                        <h3 className="font-medium mb-3">Weekly Store Breakdown</h3>
                        <div className="space-y-3">
                          {Object.entries(mealPlan.budgetSummary.storeBreakdown).map(([store, amount]) => (
                            <div key={store} className="flex justify-between items-center">
                              <span className="text-sm">{store}</span>
                              <span className="font-medium">${amount.toFixed(2)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </div>
      )}
    </div>
  );
};

export default MealPlanner;
