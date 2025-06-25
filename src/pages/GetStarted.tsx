
import { ArrowLeft, Brain, CheckCircle, ArrowRight, Clock, Users, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const GetStarted = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: [25000],
    timeline: '',
    description: '',
    goals: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Project inquiry:', formData);
    // Handle form submission
  };

  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description: "30-minute consultation to understand your needs and challenges",
      duration: "30 minutes",
      icon: Users
    },
    {
      number: "02",
      title: "Strategy Workshop",
      description: "Deep-dive session to design your AI strategy and technical approach",
      duration: "2-4 hours",
      icon: Lightbulb
    },
    {
      number: "03",
      title: "Project Planning",
      description: "Detailed project plan with timelines, milestones, and deliverables",
      duration: "1 week",
      icon: Clock
    },
    {
      number: "04",
      title: "Development & Implementation",
      description: "Agile development process with regular updates and feedback loops",
      duration: "4-16 weeks",
      icon: Brain
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Analytica AI
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Start Your AI Journey
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Transform your business with our proven 4-step process. From initial consultation to full implementation, we'll guide you every step of the way.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                        {step.number}
                      </div>
                    </div>
                    <div className="mt-4 mb-6">
                      <IconComponent className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600 text-sm mb-3">{step.description}</p>
                      <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium inline-block">
                        {step.duration}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Inquiry Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Tell Us About Your Project</h2>
            <p className="text-xl text-slate-600">
              Help us understand your needs so we can provide the most accurate proposal and timeline.
            </p>
          </div>

          <Card className="shadow-2xl border-0">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your full name"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your.email@company.com"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company">Company Name *</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Your company name"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="projectType">Project Type *</Label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                    required
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select project type</option>
                    <option value="ai-consultation">AI Strategy & Consultation</option>
                    <option value="machine-learning">Machine Learning Implementation</option>
                    <option value="full-stack-development">Full-Stack Application Development</option>
                    <option value="data-analytics">Data Analytics & Insights</option>
                    <option value="process-automation">Process Automation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label>Project Budget Range: ${formData.budget[0].toLocaleString()}</Label>
                  <div className="mt-4 px-4">
                    <Slider
                      value={formData.budget}
                      onValueChange={(value) => setFormData({...formData, budget: value})}
                      max={200000}
                      min={5000}
                      step={5000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-slate-500 mt-2">
                      <span>$5,000</span>
                      <span>$200,000+</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="timeline">Desired Timeline</Label>
                  <select
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP (Rush project)</option>
                    <option value="1-2-months">1-2 months</option>
                    <option value="3-4-months">3-4 months</option>
                    <option value="5-6-months">5-6 months</option>
                    <option value="6+-months">6+ months</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="description">Project Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Describe your project, current challenges, and what you're looking to achieve..."
                    required
                    className="mt-2 min-h-[120px]"
                  />
                </div>

                <div>
                  <Label htmlFor="goals">Success Metrics & Goals</Label>
                  <Textarea
                    id="goals"
                    value={formData.goals}
                    onChange={(e) => setFormData({...formData, goals: e.target.value})}
                    placeholder="What metrics will define success for this project? (e.g., cost reduction, efficiency gains, revenue increase)"
                    className="mt-2 min-h-[80px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-4"
                >
                  Submit Project Inquiry
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">What Happens Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">We Review Your Inquiry</h3>
              <p className="text-slate-600 text-sm">Our team analyzes your requirements and prepares for the initial consultation.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Schedule Discovery Call</h3>
              <p className="text-slate-600 text-sm">We'll contact you within 24 hours to schedule your free consultation.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Receive Proposal</h3>
              <p className="text-slate-600 text-sm">Get a detailed proposal with timeline, costs, and expected outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <CheckCircle className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Risk Consultation</h3>
              <p className="text-slate-300 text-sm">Your first consultation is completely free with no obligations.</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-slate-300 text-sm">Fixed-price projects with no hidden costs or surprise fees.</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Success Guarantee</h3>
              <p className="text-slate-300 text-sm">We stand behind our work with performance guarantees.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
