
import { ArrowLeft, Brain, ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      title: "HealthTech AI Diagnostics",
      category: "Healthcare AI",
      description: "Machine learning system for medical image analysis that improved diagnostic accuracy by 35% and reduced analysis time by 80%.",
      technologies: ["TensorFlow", "Python", "React", "AWS"],
      impact: "35% accuracy improvement",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "E-commerce Recommendation Engine",
      category: "Retail AI",
      description: "Personalized product recommendation system that increased conversion rates by 42% and average order value by 28%.",
      technologies: ["PyTorch", "Node.js", "MongoDB", "Redis"],
      impact: "42% conversion increase",
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      title: "Financial Fraud Detection",
      category: "FinTech AI",
      description: "Real-time fraud detection system processing 1M+ transactions daily with 99.8% accuracy and sub-second response times.",
      technologies: ["Apache Kafka", "Spark", "Elasticsearch", "Docker"],
      impact: "99.8% accuracy rate",
      image: "photo-1519389950473-47ba0277781c"
    },
    {
      title: "Supply Chain Optimization",
      category: "Logistics AI",
      description: "AI-powered supply chain management system that reduced costs by 25% and improved delivery times by 30%.",
      technologies: ["Scikit-learn", "FastAPI", "PostgreSQL", "Kubernetes"],
      impact: "25% cost reduction",
      image: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "Smart Manufacturing Platform",
      category: "Industrial IoT",
      description: "IoT and AI solution for predictive maintenance that reduced equipment downtime by 60% and maintenance costs by 40%.",
      technologies: ["IoT Sensors", "Azure", "Time Series DB", "Power BI"],
      impact: "60% downtime reduction",
      image: "photo-1605810230434-7631ac76ec81"
    },
    {
      title: "Customer Service Chatbot",
      category: "NLP & Automation",
      description: "Intelligent chatbot handling 90% of customer inquiries automatically with 95% satisfaction rate.",
      technologies: ["OpenAI API", "LangChain", "React", "Supabase"],
      impact: "90% automation rate",
      image: "photo-1488590528505-98d2b5aba04b"
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
            Our Portfolio
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Explore our successful AI implementations and software engineering projects that have transformed businesses across various industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Start Your Project
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-slate-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-slate-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-slate-600">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">99%</div>
              <div className="text-slate-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real-world solutions that delivered measurable results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {project.impact}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <Button variant="outline" size="sm" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        Case Study
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="text-yellow-400">★</div>
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "Analytica AI transformed our healthcare diagnostics with their ML solution. The 35% improvement in accuracy has been game-changing for patient outcomes."
                </p>
                <div>
                  <p className="font-semibold">Dr. Sarah Johnson</p>
                  <p className="text-slate-500 text-sm">CTO, MedTech Solutions</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="text-yellow-400">★</div>
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "The recommendation engine they built increased our conversion rates by 42%. ROI was evident within the first month of deployment."
                </p>
                <div>
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-slate-500 text-sm">VP Engineering, RetailCorp</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="text-yellow-400">★</div>
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "Their fraud detection system processes over 1M transactions daily with incredible accuracy. Outstanding technical execution."
                </p>
                <div>
                  <p className="font-semibold">Jennifer Rodriguez</p>
                  <p className="text-slate-500 text-sm">Head of Security, FinBank</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Success Story?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join our portfolio of successful AI implementations and digital transformations.
          </p>
          <Link to="/get-started">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 rounded-full">
              Start Your Project Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
