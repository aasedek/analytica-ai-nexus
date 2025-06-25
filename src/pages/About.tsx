
import { ArrowLeft, Brain, Users, CheckCircle, Zap, Award, Globe, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const About = () => {
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              About Analytica AI
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're a team of passionate AI specialists and software engineers dedicated to transforming businesses through intelligent technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6">
                To democratize artificial intelligence and make cutting-edge technology accessible to businesses of all sizes. We believe that every organization deserves the opportunity to leverage AI for growth and innovation.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Founded in 2020, Analytica AI has been at the forefront of the AI revolution, helping over 200+ companies transform their operations and achieve unprecedented results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Our Services
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline">Get in Touch</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold mb-2">200+</div>
                    <div className="text-blue-100">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">99%</div>
                    <div className="text-blue-100">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">24/7</div>
                    <div className="text-blue-100">Support Available</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">5+</div>
                    <div className="text-blue-100">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Innovation First</h3>
                <p className="text-slate-600">
                  We stay at the cutting edge of AI technology, constantly exploring new possibilities and pushing boundaries to deliver breakthrough solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-green-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Client Success</h3>
                <p className="text-slate-600">
                  Your success is our success. We're committed to delivering solutions that drive real, measurable results for your business.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Excellence</h3>
                <p className="text-slate-600">
                  We maintain the highest standards in everything we do, from code quality to client communication and project delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Us?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our unique combination of expertise, experience, and dedication sets us apart in the AI consulting space.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4 mt-1">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Expert Team</h4>
                  <p className="text-slate-600">Our team includes PhD-level AI researchers, senior software engineers, and industry veterans with decades of combined experience.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-3 mr-4 mt-1">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Proven Results</h4>
                  <p className="text-slate-600">Track record of successful implementations across healthcare, finance, e-commerce, and manufacturing industries.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-100 rounded-full p-3 mr-4 mt-1">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Rapid Deployment</h4>
                  <p className="text-slate-600">Agile methodologies and proven frameworks ensure quick time-to-market without compromising on quality or security.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-100 rounded-full p-3 mr-4 mt-1">
                  <Globe className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Global Reach</h4>
                  <p className="text-slate-600">We've worked with clients across North America, Europe, and Asia, understanding diverse business cultures and requirements.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-gradient-to-br from-slate-900 to-blue-900 text-white h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                  <p className="text-slate-300 mb-8">
                    Join the hundreds of companies that have transformed their business with Analytica AI.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Schedule a Consultation
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
