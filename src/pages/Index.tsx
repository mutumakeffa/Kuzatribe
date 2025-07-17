import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Users, 
  Target, 
  TrendingUp, 
  Shield, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  MapPin,
  BarChart3,
  Network,
  MessageSquare,
  Star,
  Phone,
  Mail,
  Linkedin,
  Twitter
} from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    challenge: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Understanding People to Drive Business Success
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Kuzatribe helps organizations succeed through deep insights into human behavior, preferences, and market dynamics with cutting-edge research methodologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="cta" 
                  size="lg"
                  onClick={scrollToForm}
                  className="text-lg px-8 py-4"
                >
                  Request a Consultation
                  <ArrowRight className="ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Explore Solutions
                </Button>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative animate-scale-in">
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img 
                  src="/src/assets/hero-workspace.jpg"
                  alt="Team analyzing market research data in modern workspace"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-6 left-6 bg-accent text-white px-6 py-4 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold">87%</div>
                  <div className="text-sm">Improved decision accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Solutions That Drive Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our research and intelligence services are designed to help you make informed decisions, identify new opportunities, and create strategies that resonate with your target audience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Search className="h-12 w-12 text-primary" />,
                title: "Market Research",
                description: "Comprehensive market analysis, consumer insights, and competitive intelligence to identify opportunities and threats.",
                items: ["Consumer Behavior Analysis", "Market Segmentation", "Competitive Benchmarking"]
              },
              {
                icon: <Users className="h-12 w-12 text-primary" />,
                title: "Customer Insights", 
                description: "Deep understanding of your customers' needs, preferences, and pain points to improve product-market fit.",
                items: ["Focus Groups", "In-depth Interviews", "Customer Journey Mapping"]
              },
              {
                icon: <TrendingUp className="h-12 w-12 text-primary" />,
                title: "Growth Strategy",
                description: "Data-driven strategies to accelerate growth, optimize marketing, and improve customer retention.",
                items: ["Pricing Analysis", "Market Entry Strategy", "Brand Development"]
              },
              {
                icon: <BarChart3 className="h-12 w-12 text-primary" />,
                title: "Analytics & Reporting",
                description: "Transform complex data into actionable insights through advanced analytics and clear reporting.",
                items: ["Predictive Analytics", "Data Visualization", "Impact Measurement"]
              }
            ].map((item, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0">
                <div className="mx-auto mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <ul className="text-sm text-muted-foreground space-y-1 text-left">
                  {item.items.map((listItem, idx) => (
                    <li key={idx}>• {listItem}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How Kuzatribe Solves Your Market Challenges
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive African market research and community management solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Search className="h-8 w-8" />,
                title: "African Market Research & Competitive Intelligence",
                description: "Deep dive analysis of market opportunities, competitor positioning, and industry benchmarking across African markets."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Buyer Persona Development",
                description: "Detailed buyer persona mapping and decision-maker profiling to optimize your go-to-market strategy."
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Sales Funnel Audit & Optimization",
                description: "Complete analysis and optimization of your sales processes to accelerate lead generation and conversion."
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Decision-Maker Outreach & Community Access",
                description: "Leveraging our professional networks to facilitate warm introductions and strategic partnerships."
              }
            ].map((service, index) => (
              <Card key={index} className="h-full shadow-card border-0 hover:shadow-warm transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Community-Powered Growth
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our proprietary network of industry professionals, decision-makers, and local experts across Africa enables rapid market entry and accelerated business development. We don't just provide data—we provide direct access to the people who matter most to your success.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Professional Networks</Badge>
                <Badge variant="secondary">Warm Introductions</Badge>
                <Badge variant="secondary">Trust Building</Badge>
                <Badge variant="secondary">Local Expertise</Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "500+", label: "Professional Contacts" },
                { number: "25+", label: "African Countries" },
                { number: "95%", label: "Client Satisfaction" },
                { number: "30%", label: "Faster Market Entry" }
              ].map((stat, index) => (
                <Card key={index} className="text-center p-6 shadow-card border-0">
                  <div className="text-2xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Built for Startups, FMCG, NGOs & More
            </h2>
            <p className="text-xl text-muted-foreground">
              Tailored solutions for every industry sector across Africa
            </p>
          </div>

          <Tabs defaultValue="startups" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="startups">Startups</TabsTrigger>
              <TabsTrigger value="fmcg">FMCG</TabsTrigger>
              <TabsTrigger value="ngos">NGOs</TabsTrigger>
              <TabsTrigger value="tech">Tech Companies</TabsTrigger>
            </TabsList>
            
            <TabsContent value="startups" className="space-y-6">
              <Card className="p-8 shadow-card border-0">
                <h3 className="text-2xl font-bold mb-4">Startup Market Validation</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Challenge</h4>
                    <p className="text-muted-foreground">Limited resources for comprehensive market research and customer discovery.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Our Solution</h4>
                    <p className="text-muted-foreground">Rapid market validation, competitor analysis, and go-to-market strategy development.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Result</h4>
                    <p className="text-muted-foreground">Validated product-market fit and optimized launch strategy.</p>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="fmcg" className="space-y-6">
              <Card className="p-8 shadow-card border-0">
                <h3 className="text-2xl font-bold mb-4">FMCG Distribution Excellence</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Challenge</h4>
                    <p className="text-muted-foreground">Complex distribution networks and varying consumer preferences across regions.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Our Solution</h4>
                    <p className="text-muted-foreground">Regional demand analysis, distribution partner mapping, and consumer behavior insights.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Result</h4>
                    <p className="text-muted-foreground">Optimized distribution strategy and improved market penetration.</p>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="ngos" className="space-y-6">
              <Card className="p-8 shadow-card border-0">
                <h3 className="text-2xl font-bold mb-4">NGO Impact Maximization</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Challenge</h4>
                    <p className="text-muted-foreground">Understanding community needs and stakeholder landscapes for effective program delivery.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Our Solution</h4>
                    <p className="text-muted-foreground">Community needs assessment, stakeholder mapping, and program effectiveness evaluation.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Result</h4>
                    <p className="text-muted-foreground">Enhanced program impact and improved community engagement.</p>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="tech" className="space-y-6">
              <Card className="p-8 shadow-card border-0">
                <h3 className="text-2xl font-bold mb-4">Tech Market Entry</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Challenge</h4>
                    <p className="text-muted-foreground">Navigating diverse regulatory environments and technology adoption patterns.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Our Solution</h4>
                    <p className="text-muted-foreground">Market entry strategy, regulatory landscape analysis, and partnership facilitation.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Result</h4>
                    <p className="text-muted-foreground">Accelerated market entry and reduced regulatory risks.</p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from real businesses across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Kuzatribe's market research helped us identify the perfect market entry strategy. We reduced our time-to-market by 30% and achieved profitability 6 months ahead of schedule.",
                name: "Sarah Mbeki",
                title: "CEO, EcoTech Solutions",
                rating: 5
              },
              {
                quote: "Their community network opened doors we never knew existed. The warm introductions led to partnerships that transformed our distribution strategy across West Africa.",
                name: "James Ochieng", 
                title: "Head of Business Development, FreshFood Ltd",
                rating: 5
              },
              {
                quote: "The competitive intelligence and buyer persona research was incredibly detailed and actionable. Our conversion rates improved by 45% after implementing their recommendations.",
                name: "Amina Hassan",
                title: "Marketing Director, TechFlow Inc",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-card border-0">
                <CardContent className="space-y-4">
                  <div className="flex text-primary">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our 4-Step Engagement Process
            </h2>
            <p className="text-xl text-muted-foreground">
              From insight to action in a structured, proven methodology
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Deep dive into your business goals, target markets, and current challenges to define project scope."
              },
              {
                step: "02", 
                title: "Research",
                description: "Comprehensive market analysis using our proprietary networks and advanced research methodologies."
              },
              {
                step: "03",
                title: "Analysis",
                description: "Transform raw data into actionable insights with detailed reporting and strategic recommendations."
              },
              {
                step: "04",
                title: "Activation",
                description: "Implementation support and community introductions to accelerate your market entry and growth."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-gradient-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Insights into Action?
            </h2>
            <p className="text-xl text-muted-foreground">
              Book your free 30-minute discovery call to see how Kuzatribe can accelerate your growth across African markets.
            </p>
          </div>

          <Card className="shadow-warm border-0">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industry *</Label>
                  <Select value={formData.industry} onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">Startup</SelectItem>
                      <SelectItem value="fmcg">FMCG</SelectItem>
                      <SelectItem value="ngo">NGO</SelectItem>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="challenge">Brief Description of Your Challenge</Label>
                  <Textarea
                    id="challenge"
                    placeholder="Tell us about your current market research needs or business challenges..."
                    value={formData.challenge}
                    onChange={(e) => setFormData(prev => ({ ...prev, challenge: e.target.value }))}
                    rows={4}
                  />
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full">
                  Book My Discovery Call
                  <ArrowRight className="ml-2" />
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  We'll never spam you. Your information is secure and will only be used to schedule your discovery call.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Kuzatribe</h3>
              <p className="text-white/80 mb-6 max-w-md">
                Africa's leading market research and community management firm, helping businesses unlock growth opportunities across dynamic African markets.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-white/80">
                <li>Market Research</li>
                <li>Community Management</li>
                <li>Competitor Intelligence</li>
                <li>Go-to-Market Strategy</li>
                <li>Buyer Persona Development</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-white/80">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@kuzatribe.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+234 (0) 123 456 7890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/60">© 2024 Kuzatribe. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-white/60 hover:text-white">Privacy Policy</a>
                <a href="#" className="text-white/60 hover:text-white">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
