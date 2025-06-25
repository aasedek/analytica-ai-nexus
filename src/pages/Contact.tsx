
import { ArrowLeft, Brain, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    newsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // In a real app, you'd send this to your backend
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
            Get in Touch
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss your project and explore how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-8">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@company.com"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service">Service of Interest</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select a service</option>
                        <option value="ai-consultation">AI Consultation & Strategy</option>
                        <option value="software-engineering">Software Engineering</option>
                        <option value="innovation-workshop">Innovation Workshop</option>
                        <option value="performance-audit">Performance Audit</option>
                        <option value="security-assessment">Security Assessment</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, goals, and timeline..."
                        required
                        className="mt-2 min-h-[120px]"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletter: checked as boolean }))}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        Subscribe to our newsletter for AI insights and updates
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-slate-600">hello@analytica-ai.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-green-600 mr-3 mt-1" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-slate-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-purple-600 mr-3 mt-1" />
                      <div>
                        <p className="font-semibold">Address</p>
                        <p className="text-slate-600">San Francisco, CA<br />United States</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-orange-600 mr-3 mt-1" />
                      <div>
                        <p className="font-semibold">Business Hours</p>
                        <p className="text-slate-600">Mon - Fri: 9AM - 6PM PST<br />Weekend: Emergency only</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                  <p className="text-blue-100 mb-4">
                    For urgent inquiries or technical emergencies, contact our priority support line.
                  </p>
                  <Button className="w-full bg-white text-blue-600 hover:bg-slate-100">
                    Call Priority Support
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Response Time</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>General Inquiries</span>
                      <span className="text-green-600 font-semibold">24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Project Quotes</span>
                      <span className="text-blue-600 font-semibold">48 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Technical Support</span>
                      <span className="text-purple-600 font-semibold">4 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">How long does a typical project take?</h4>
              <p className="text-slate-600">Most AI consultation projects take 4-12 weeks, while software development projects range from 8-24 weeks depending on complexity.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Do you work with startups?</h4>
              <p className="text-slate-600">Yes! We work with companies of all sizes, from early-stage startups to Fortune 500 enterprises.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">What industries do you serve?</h4>
              <p className="text-slate-600">We have experience across healthcare, finance, e-commerce, manufacturing, logistics, and many other industries.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Do you provide ongoing support?</h4>
              <p className="text-slate-600">Absolutely. We offer various support packages including maintenance, monitoring, and continuous optimization services.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
