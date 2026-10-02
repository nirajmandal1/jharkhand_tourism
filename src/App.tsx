import React, { useState } from 'react';
import { 
  MapPin, Calendar, Users, MessageCircle, AlertTriangle, Search, Menu, X, 
  Phone, Shield, Heart, Star, Camera, Globe, Send, Sparkles, CheckCircle2, 
  Compass, Share2, ThumbsUp, Clock, ArrowRight, Play
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import tourismVideo from "./components/material/video.mp4";
import deogharImg from "./components/material/deogharImg.jpg";

interface Destination {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  description: string;
  category: string;
  highlights: string[];
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Netarhat",
    location: "Netarhat, Jharkhand",
    image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/08/9ffc869f0419cc62a4e18896dc9b388b_1000x1000.jpg",
    rating: 4.8,
    description: "Queen of Chotanagpur, known for mesmerizing sunsets and cool climate",
    category: "Hill Station",
    highlights: ["Sunrise/Sunset views", "Cool climate", "Dense forests"]
  },
  {
    id: 2,
    name: "Betla National Park",
    location: "Palamau, Jharkhand",
    image: "https://live.staticflickr.com/884/40448564665_bb529f9784_b.jpg",
    rating: 4.6,
    description: "Tiger reserve with rich biodiversity and ancient Palamau Fort",
    category: "Wildlife",
    highlights: ["Tiger safari", "Rich wildlife", "Palamau Fort"]
  },
  {
    id: 3,
    name: "Hundru Falls",
    location: "Ranchi, Jharkhand",
    image: "https://windows10spotlight.com/wp-content/uploads/2023/10/30d0282629f494794b3f9588c00a632e-1024x576.jpg",
    rating: 4.5,
    description: "Spectacular 320-foot waterfall surrounded by dense forests",
    category: "Waterfall",
    highlights: ["320ft high fall", "Monsoon beauty", "Photography spot"]
  },
  {
    id: 4,
    name: "Deoghar Baidyanath Temple",
    location: "Deoghar, Jharkhand",
    image: deogharImg,
    rating: 4.7,
    description: "Sacred city with Baidyanath Temple, one of the 12 Jyotirlingas in India",
    category: "Religious",
    highlights: ["Baidyanath Temple", "Spiritual significance", "Cultural heritage"]
  }
];

const events = [
  {
    id: 1,
    title: "Sarhul Festival",
    date: "March 15-17, 2025",
    location: "Ranchi",
    category: "Cultural",
    description: "Celebrate the spring festival of tribal communities"
  },
  {
    id: 2,
    title: "Karam Festival",
    date: "August 10-12, 2025",
    location: "Various locations",
    category: "Traditional",
    description: "Worship of Karam tree with traditional dances"
  },
  {
    id: 3,
    title: "Wildlife Photography Workshop",
    date: "November 5-7, 2025",
    location: "Betla National Park",
    category: "Workshop",
    description: "Learn wildlife photography in natural habitat"
  }
];

const culturalItems = [
  {
    name: "Sohrai Art",
    description: "Traditional tribal wall art with natural pigments",
    price: "₹500 - ₹5,000",
    image: "https://images.unsplash.com/photo-1580467469359-91a73a6e92ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMHRyaWJhbCUyMGFydCUyMGhhbmRpY3JhZnRzfGVufDF8fHx8MTc1Nzc5MjUzOXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Bamboo Crafts",
    description: "Handwoven baskets and decorative items",
    price: "₹200 - ₹2,000",
    image: "https://images.unsplash.com/photo-1580467469359-91a73a6e92ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMHRyaWJhbCUyMGFydCUyMGhhbmRpY3JhZnRzfGVufDF8fHx8MTc1Nzc5MjUzOXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Traditional Thali",
    description: "Local cuisine with dhuska, ghugni, and tribal vegetables",
    price: "₹150 - ₹400",
    image: "https://images.unsplash.com/photo-1756741987051-a6a38f28838b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMEluZGlhbiUyMGZvb2QlMjB0aGFsaXxlbnwxfHx8fDE3NTc3OTI1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const navigation = [
  { name: 'Home', id: 'home', icon: MapPin },
  { name: 'Destinations', id: 'destinations', icon: MapPin },
  { name: 'Virtual Tours', id: 'virtual-tours', icon: Camera },
  { name: 'Trip Planner', id: 'trip-planner', icon: Calendar },
  { name: 'Culture & Food', id: 'culture', icon: Heart },
  { name: 'Events', id: 'events', icon: Calendar },
  { name: 'Community', id: 'community', icon: Users },
  { name: 'Login', id: 'auth', icon: Users }
];

/* --- TOP-LEVEL COMPONENTS TO PRESERVE FOCUS & STATE --- */

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ currentPage, setCurrentPage, mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <img src="/logo1.png" alt="App Logo" className="w-9 h-9 rounded-lg object-contain" />
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-700 to-amber-700 bg-clip-text text-transparent">
              Jh Tourism
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "default" : "ghost"}
                onClick={() => setCurrentPage(item.id)}
                className={`${currentPage === item.id 
                  ? 'bg-gradient-to-r from-emerald-600 to-amber-600 text-white' 
                  : 'text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
              </Button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-emerald-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-emerald-100 py-4">
            <div className="grid grid-cols-2 gap-2">
              {navigation.map((item) => (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? "default" : "ghost"}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`${currentPage === item.id 
                    ? 'bg-gradient-to-r from-emerald-600 to-amber-600 text-white' 
                    : 'text-emerald-700'
                  } justify-start`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

interface HomePageProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setCurrentPage: (page: string) => void;
}

function HomePage({ searchQuery, setSearchQuery, setCurrentPage }: HomePageProps) {
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage('destinations');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://pbs.twimg.com/media/ET77GGKVAAEZJxu.jpg"
            alt="Jharkhand landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-amber-900/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-200 to-amber-200 bg-clip-text text-transparent">
            Welcome To Jharkhand
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-emerald-100">
            Experience the untouched beauty of nature, rich tribal culture, and eco-friendly adventures
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="flex max-w-md mx-auto mb-8">
            <Input
              placeholder="Search destinations, events, waterfalls..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-r-none bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
            />
            <Button 
              type="submit"
              className="rounded-l-none bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700"
            >
              <Search className="w-4 h-4" />
            </Button>
          </form>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => setCurrentPage('destinations')}
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Explore Destinations
            </Button>
            <Button 
              onClick={() => setCurrentPage('virtual-tours')}
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
            >
              <Camera className="w-4 h-4 mr-2" />
              Virtual Tours
            </Button>
            <Button 
              onClick={() => setCurrentPage('trip-planner')}
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Plan Trip
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-800 mb-4">Why Choose Jharkhand Tourism?</h2>
            <p className="text-emerald-600 max-w-2xl mx-auto">Experience sustainable tourism that preserves nature and supports local communities</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-emerald-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">Safe & Secure</h3>
                <p className="text-emerald-600 text-sm">24/7 emergency support and guided tours for your safety</p>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">Eco-Friendly</h3>
                <p className="text-emerald-600 text-sm">Sustainable tourism practices that protect our environment</p>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">Cultural Heritage</h3>
                <p className="text-emerald-600 text-sm">Authentic tribal experiences and traditional crafts</p>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">Virtual Reality</h3>
                <p className="text-emerald-600 text-sm">Immersive 360° tours and AR experiences</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

interface DestinationsPageProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setCurrentPage: (page: string) => void;
}

function DestinationsPage({ searchQuery, setSearchQuery, setCurrentPage }: DestinationsPageProps) {
  const filtered = destinations.filter((dest) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      dest.name.toLowerCase().includes(q) ||
      dest.location.toLowerCase().includes(q) ||
      dest.category.toLowerCase().includes(q) ||
      dest.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">Explore Destinations</h1>
          <p className="text-emerald-600 max-w-2xl mx-auto">Discover the hidden gems of Jharkhand's natural beauty and cultural heritage</p>
          
          {/* Quick filter search */}
          <div className="mt-6 max-w-md mx-auto flex items-center">
            <Input
              placeholder="Filter by name, city, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white border-emerald-200"
            />
            {searchQuery && (
              <Button 
                variant="ghost" 
                onClick={() => setSearchQuery('')}
                className="ml-2 text-emerald-700"
              >
                Clear
              </Button>
            )}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-white/60 rounded-xl border border-emerald-100 max-w-lg mx-auto">
            <Compass className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-emerald-800">No destinations found</h3>
            <p className="text-emerald-600 text-sm mt-1">Try searching for "Netarhat", "Betla", "Waterfall", or "Deoghar".</p>
            <Button onClick={() => setSearchQuery('')} className="mt-4 bg-emerald-600 text-white">
              View All Destinations
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((destination) => (
              <Card key={destination.id} className="overflow-hidden border-emerald-100 hover:shadow-xl transition-shadow bg-white flex flex-col justify-between">
                <div>
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-emerald-600 text-white">
                      {destination.category}
                    </Badge>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center shadow-sm">
                      <Star className="w-4 h-4 text-amber-500 fill-current mr-1" />
                      <span className="text-sm font-medium">{destination.rating}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-emerald-800 mb-2">{destination.name}</h3>
                    <p className="text-emerald-600 text-sm mb-2 flex items-center">
                      <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                      {destination.location}
                    </p>
                    <p className="text-gray-600 mb-4 text-sm">{destination.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {destination.highlights.map((highlight, index) => (
                        <Badge key={index} variant="secondary" className="bg-amber-100 text-amber-800">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
                <div className="px-6 pb-6">
                  <div className="flex gap-2">
                    <Button 
                      onClick={() => setCurrentPage('virtual-tours')}
                      className="flex-1 bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white"
                    >
                      <Camera className="w-4 h-4 mr-2" />
                      Virtual Tour
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setCurrentPage('trip-planner')}
                      className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                      title="Plan Trip to this location"
                    >
                      <Calendar className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function VirtualToursPage() {
  const [selectedTour, setSelectedTour] = useState<Destination | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">Virtual Tours & AR Experiences</h1>
          <p className="text-emerald-600 max-w-2xl mx-auto">Immerse yourself in Jharkhand's beauty with video tours, 360° views, and augmented reality experiences</p>
        </div>

        {/* Featured Video Showcase using local tourismVideo */}
        <Card className="border-emerald-100 overflow-hidden mb-12 shadow-lg">
          <CardHeader className="bg-emerald-900 text-white py-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center text-white">
                <Play className="w-5 h-5 mr-2 text-amber-400" />
                Featured Video Tour: Glimpses of Jharkhand
              </CardTitle>
              <Badge className="bg-amber-500 text-emerald-950 font-semibold">Watch in HD</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-0 bg-black flex justify-center">
            <video 
              controls 
              className="w-full max-h-[500px] object-cover" 
              src={tourismVideo}
              poster="https://pbs.twimg.com/media/ET77GGKVAAEZJxu.jpg"
            >
              Your browser does not support video playback.
            </video>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-emerald-100">
            <CardHeader>
              <CardTitle className="text-emerald-800 flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                360° Virtual Tours
              </CardTitle>
              <CardDescription>Click any destination to preview interactive 360° view</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {destinations.map((destination) => (
                  <div 
                    key={destination.id} 
                    onClick={() => setSelectedTour(destination)}
                    className="relative group cursor-pointer overflow-hidden rounded-lg border border-emerald-100 hover:shadow-md transition-all"
                  >
                    <div className="aspect-square overflow-hidden">
                      <ImageWithFallback
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-3">
                      <span className="text-white text-sm font-medium">{destination.name}</span>
                    </div>
                    <div className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-sm">
                      <Camera className="w-4 h-4 text-emerald-600" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-100">
            <CardHeader>
              <CardTitle className="text-emerald-800 flex items-center">
                <Camera className="w-5 h-5 mr-2" />
                AR Cultural Experiences
              </CardTitle>
              <CardDescription>Interactive augmented reality features on your mobile device</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-emerald-50 rounded-lg flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-emerald-800">Tribal Art Recognition</h4>
                    <p className="text-sm text-emerald-600">Point your camera at Sohrai and Kohbar tribal art to view history</p>
                  </div>
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    Try AR
                  </Button>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-amber-800">Wildlife Spotter</h4>
                    <p className="text-sm text-amber-600">Identify Betla animals, birds, and flora in real-time</p>
                  </div>
                  <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                    Try AR
                  </Button>
                </div>
                <div className="p-4 bg-emerald-50 rounded-lg flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-emerald-800">Historical Timeline</h4>
                    <p className="text-sm text-emerald-600">Explore Palamau Fort and Baidyanath Temple with 3D models</p>
                  </div>
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    Try AR
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Selected Tour Modal */}
        <Dialog open={!!selectedTour} onOpenChange={(open) => !open && setSelectedTour(null)}>
          <DialogContent className="sm:max-w-2xl">
            {selectedTour && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-emerald-800 flex items-center">
                    <Camera className="w-5 h-5 mr-2" />
                    360° Virtual Preview: {selectedTour.name}
                  </DialogTitle>
                  <DialogDescription>{selectedTour.location}</DialogDescription>
                </DialogHeader>
                <div className="relative h-72 w-full rounded-lg overflow-hidden border border-emerald-100">
                  <ImageWithFallback 
                    src={selectedTour.image} 
                    alt={selectedTour.name} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-emerald-900 font-semibold text-sm flex items-center">
                      <Globe className="w-4 h-4 mr-2 animate-spin text-emerald-600" />
                      360° Interactive Panorama Loaded
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-emerald-50 rounded-lg text-sm text-emerald-800">
                  {selectedTour.description}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Interactive Map */}
        <Card className="border-emerald-100">
          <CardHeader>
            <CardTitle className="text-emerald-800 flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Interactive Tourist Map
            </CardTitle>
            <CardDescription>Explore Jharkhand with major attractions, routes, and emergency kiosks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-8 text-center">
              <MapPin className="w-16 h-16 text-emerald-600 mx-auto mb-4 animate-bounce" />
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">Interactive GPS Map of Jharkhand</h3>
              <p className="text-emerald-600 max-w-xl mx-auto mb-4">
                View key destinations: Ranchi, Netarhat, Betla National Park, Deoghar, Parasnath Hill, and Hundru Falls with live route calculation.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button 
                  onClick={() => alert("GPS Map coordinates initialized. Navigating to Ranchi hub.")}
                  className="bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white"
                >
                  <Compass className="w-4 h-4 mr-2" />
                  Open Live Map View
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function TripPlannerPage() {
  const [travelers, setTravelers] = useState('2');
  const [budget, setBudget] = useState('₹10,000 - ₹25,000');
  const [accommodation, setAccommodation] = useState('Eco Resorts');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['Nature', 'Culture']);
  const [hasGuide, setHasGuide] = useState(false);
  const [hasPhotographer, setHasPhotographer] = useState(false);
  const [itinerary, setItinerary] = useState<Array<{ day: string; title: string; activities: string[] }> | null>(null);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) => 
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleGenerate = () => {
    setItinerary([
      {
        day: "Day 1: Arrival & Waterfalls of Ranchi",
        title: "Scenic Waterfalls & Cultural Welcome",
        activities: [
          "Arrive in Ranchi and check-in to your selected " + accommodation,
          "Morning visit to spectacular Hundru Falls (320 ft drop)",
          "Enjoy authentic Dhuska and Ghugni lunch with local artisans",
          "Evening sunset view at Tagore Hill with tribal handicraft gallery tour"
        ]
      },
      {
        day: "Day 2: Queen of Chotanagpur (Netarhat)",
        title: "Pine Forests & Sunrise Points",
        activities: [
          "Early drive through lush sal forest valleys to Netarhat",
          "Explore Magnolia Point for the famous panoramic sunset",
          "Guided trek through pine forest and Upper Ghaghri falls",
          hasGuide ? "Personal local guide session: Tribal folklore and history" : "Stargazing at Netarhat plateau"
        ]
      },
      {
        day: "Day 3: Wildlife Safari & Heritage",
        title: "Betla Safari & Ancient Fort",
        activities: [
          "Morning wildlife jungle safari at Betla National Park",
          "Spotting elephants, deer, and exotic bird species",
          "Explore historical Palamau Fort remnants inside the tiger reserve",
          hasPhotographer ? "Professional photo session completed and delivered" : "Departure with traditional tribal souvenirs"
        ]
      }
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">AI Trip Planner</h1>
          <p className="text-emerald-600 max-w-2xl mx-auto">Let our smart planner create an itinerary customized for your interests, budget, and dates</p>
        </div>

        <Card className="border-emerald-100 mb-8 shadow-md">
          <CardHeader>
            <CardTitle className="text-emerald-800">Plan Your Perfect Trip</CardTitle>
            <CardDescription>Tell us about your preferences and we'll generate your personalized itinerary</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-emerald-700 mb-2">Travel Dates</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input type="date" className="border-emerald-200 bg-white" />
                    <Input type="date" className="border-emerald-200 bg-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-700 mb-2">Number of Travelers</label>
                  <Input 
                    type="number" 
                    value={travelers} 
                    onChange={(e) => setTravelers(e.target.value)} 
                    min="1" 
                    className="border-emerald-200 bg-white" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-700 mb-2">Budget Range</label>
                  <select 
                    value={budget} 
                    onChange={(e) => setBudget(e.target.value)} 
                    className="w-full p-2 border border-emerald-200 rounded-md bg-white text-emerald-900"
                  >
                    <option>₹5,000 - ₹10,000</option>
                    <option>₹10,000 - ₹25,000</option>
                    <option>₹25,000 - ₹50,000</option>
                    <option>₹50,000+</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-emerald-700 mb-2">Interests</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Nature', 'Wildlife', 'Culture', 'Adventure', 'Photography', 'Spirituality'].map((interest) => (
                      <label key={interest} className="flex items-center space-x-2 cursor-pointer bg-emerald-50/70 p-2 rounded border border-emerald-100 hover:bg-emerald-100/50">
                        <input 
                          type="checkbox" 
                          checked={selectedInterests.includes(interest)} 
                          onChange={() => toggleInterest(interest)}
                          className="text-emerald-600 rounded" 
                        />
                        <span className="text-sm font-medium text-emerald-800">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-700 mb-2">Accommodation Type</label>
                  <select 
                    value={accommodation} 
                    onChange={(e) => setAccommodation(e.target.value)}
                    className="w-full p-2 border border-emerald-200 rounded-md bg-white text-emerald-900"
                  >
                    <option>Budget Hotels</option>
                    <option>Eco Resorts</option>
                    <option>Luxury Hotels</option>
                    <option>Homestays</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="border-t border-emerald-100 pt-6">
              <h3 className="text-lg font-semibold text-emerald-800 mb-4">Additional Services</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card 
                  onClick={() => setHasGuide(!hasGuide)} 
                  className={`cursor-pointer transition-all border ${hasGuide ? 'border-emerald-600 bg-emerald-50/50' : 'border-emerald-100'}`}
                >
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-emerald-800">Local Guide</h4>
                      <p className="text-sm text-emerald-600">Expert local guide for cultural insights</p>
                      <p className="text-sm font-medium text-emerald-700 mt-1">₹500/day</p>
                    </div>
                    <input 
                      type="checkbox" 
                      checked={hasGuide} 
                      onChange={(e) => setHasGuide(e.target.checked)} 
                      className="text-emerald-600 w-5 h-5 rounded" 
                    />
                  </CardContent>
                </Card>
                <Card 
                  onClick={() => setHasPhotographer(!hasPhotographer)} 
                  className={`cursor-pointer transition-all border ${hasPhotographer ? 'border-emerald-600 bg-emerald-50/50' : 'border-emerald-100'}`}
                >
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-emerald-800">Photographer</h4>
                      <p className="text-sm text-emerald-600">Professional photography service</p>
                      <p className="text-sm font-medium text-emerald-700 mt-1">₹1,500/day</p>
                    </div>
                    <input 
                      type="checkbox" 
                      checked={hasPhotographer} 
                      onChange={(e) => setHasPhotographer(e.target.checked)} 
                      className="text-emerald-600 w-5 h-5 rounded" 
                    />
                  </CardContent>
                </Card>
              </div>
            </div>

            <Button 
              onClick={handleGenerate}
              className="w-full py-6 text-base bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white shadow-md"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Generate AI Itinerary
            </Button>
          </CardContent>
        </Card>

        {/* Generated Itinerary Output */}
        {itinerary && (
          <div className="space-y-4 animate-in fade-in-50 duration-500">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-emerald-900 flex items-center">
                <CheckCircle2 className="w-6 h-6 mr-2 text-emerald-600" />
                Custom Itinerary Generated for You
              </h2>
              <Badge className="bg-emerald-600 text-white">{travelers} Travelers • {budget}</Badge>
            </div>
            {itinerary.map((item, idx) => (
              <Card key={idx} className="border-emerald-200 bg-white shadow-sm overflow-hidden">
                <div className="bg-emerald-50 px-6 py-3 border-b border-emerald-100 flex items-center justify-between">
                  <span className="font-bold text-emerald-800">{item.day}</span>
                  <span className="text-sm font-medium text-emerald-600">{item.title}</span>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    {item.activities.map((act, actIdx) => (
                      <li key={actIdx} className="flex items-start text-emerald-950 text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CulturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">Local Culture & Food</h1>
          <p className="text-emerald-600 max-w-2xl mx-auto">Discover the rich heritage of Jharkhand's tribal culture, traditional crafts, and authentic cuisine</p>
        </div>

        <Tabs defaultValue="crafts" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white border border-emerald-100">
            <TabsTrigger value="crafts" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">Handicrafts</TabsTrigger>
            <TabsTrigger value="culture" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">Tribal Culture</TabsTrigger>
            <TabsTrigger value="food" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">Local Food</TabsTrigger>
          </TabsList>

          <TabsContent value="crafts">
            <div className="grid md:grid-cols-3 gap-6">
              {culturalItems.map((item, index) => (
                <Card key={index} className="border-emerald-100 overflow-hidden bg-white shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="h-48 relative">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-emerald-800 mb-2">{item.name}</h3>
                      <p className="text-emerald-600 mb-3 text-sm">{item.description}</p>
                      <p className="text-lg font-bold text-amber-700">{item.price}</p>
                    </CardContent>
                  </div>
                  <div className="px-6 pb-6">
                    <Button 
                      onClick={() => alert(`Inquiring about ${item.name}. Local artisans contacted!`)}
                      className="w-full bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white"
                    >
                      Learn More / Buy
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="culture">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-emerald-100 bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-emerald-800">Tribal Communities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <h4 className="font-semibold text-emerald-800">Santhal Tribe</h4>
                      <p className="text-emerald-600 text-sm">Known for their vibrant festivals, musical instruments, and traditional dances</p>
                    </div>
                    <div className="p-4 bg-amber-50 rounded-lg">
                      <h4 className="font-semibold text-amber-800">Oraon Tribe</h4>
                      <p className="text-amber-600 text-sm">Famous for their agricultural practices, nature worship, and Karam folk music</p>
                    </div>
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <h4 className="font-semibold text-emerald-800">Munda Tribe</h4>
                      <p className="text-emerald-600 text-sm">Renowned for their traditional crafts, brass works, and Birsa Munda heritage</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-emerald-100 bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-emerald-800">Cultural Experiences</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-emerald-800">Village Homestay</h4>
                        <p className="text-emerald-600 text-sm">Live with welcoming tribal families</p>
                      </div>
                      <Badge className="bg-emerald-600 text-white">₹800/night</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50 to-emerald-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-emerald-800">Traditional Dance Show</h4>
                        <p className="text-emerald-600 text-sm">Cultural performances & music</p>
                      </div>
                      <Badge className="bg-amber-600 text-white">₹200/person</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-emerald-800">Craft Workshop</h4>
                        <p className="text-emerald-600 text-sm">Learn traditional Sohrai painting</p>
                      </div>
                      <Badge className="bg-emerald-600 text-white">₹500/session</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="food">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Dhuska", desc: "Crispy fried bread made of fermented rice and chana dal batter.", price: "₹20 - ₹40" },
                { name: "Ghugni", desc: "Spicy and tangy black gram curry prepared with local spices.", price: "₹30 - ₹60" },
                { name: "Tribal Thali", desc: "Nutritious meal with red rice, kurthi dal, and seasonal saag.", price: "₹150 - ₹300" },
                { name: "Handia", desc: "Traditional cooling fermented rice beverage of tribal communities.", price: "₹50 - ₹100" },
                { name: "Bamboo Shoot Curry", desc: "Forest delicacy (Karil) cooked with savory mustard paste.", price: "₹80 - ₹150" },
                { name: "Rugra", desc: "Wild seasonal forest mushroom delicacy prized for delicious texture.", price: "₹120 - ₹200" }
              ].map((dish, i) => (
                <Card key={i} className="border-emerald-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">{dish.name}</h3>
                    <p className="text-emerald-600 text-sm mb-3">{dish.desc}</p>
                    <p className="text-lg font-bold text-amber-700">{dish.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">Events & Festivals</h1>
          <p className="text-emerald-600 max-w-2xl mx-auto">Join us for cultural festivals, seasonal celebrations, and special events throughout the year</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {events.map((event) => (
              <Card key={event.id} className="border-emerald-100 bg-white shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Badge className="bg-emerald-100 text-emerald-800 mr-2">
                          {event.category}
                        </Badge>
                        <span className="text-sm text-emerald-600">{event.location}</span>
                      </div>
                      <h3 className="text-xl font-bold text-emerald-800 mb-2">{event.title}</h3>
                      <p className="text-emerald-600 mb-3 text-sm">{event.description}</p>
                      <p className="text-sm font-medium text-amber-700 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {event.date}
                      </p>
                    </div>
                    <Button 
                      onClick={() => alert(`Pass booked for ${event.title}! Confirmation sent.`)}
                      className="bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white whitespace-nowrap"
                    >
                      Book Pass
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <Card className="border-emerald-100 mb-6 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-emerald-800">Event Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-emerald-50 rounded-lg p-6 text-center">
                  <Calendar className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <p className="text-emerald-800 font-medium">Seasonal Calendar 2025-2026</p>
                  <p className="text-emerald-600 text-xs mt-1">Upcoming festivals and registration dates are updated weekly.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-100 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-emerald-800">Upcoming Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-lg">
                    <h4 className="font-medium text-emerald-800">Sarhul Festival</h4>
                    <p className="text-xs text-emerald-600">March 15 - Nature worship celebration with sal blossoms</p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-amber-50 to-emerald-50 rounded-lg">
                    <h4 className="font-medium text-amber-800">Betla Safari Workshop</h4>
                    <p className="text-xs text-amber-600">April 10 - Wildlife photography expedition</p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-lg">
                    <h4 className="font-medium text-emerald-800">Sohrai Art Expo</h4>
                    <p className="text-xs text-emerald-600">May 20 - Tribal indigenous art exhibition</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommunityPage() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Raj Kumar",
      initials: "RK",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      time: "2 hours ago",
      text: "Just visited Hundru Falls and it was absolutely breathtaking! The 320-foot drop is incredible. Water volume is high and the scenic road from Ranchi is very smooth.",
      images: [
        "https://images.unsplash.com/photo-1675296321708-2971a2fbd7e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKaGFya2hhbmQlMjB3YXRlcmZhbGwlMjBuYXR1cmUlMjBzY2VuaWN8ZW58MXx8fHwxNzU3NzkyNTM2fDA&ixlib=rb-4.1.0&q=80&w=300",
        "https://windows10spotlight.com/wp-content/uploads/2023/10/30d0282629f494794b3f9588c00a632e-1024x576.jpg"
      ],
      likes: 24,
      comments: 8,
      liked: false
    },
    {
      id: 2,
      author: "Priya Sharma",
      initials: "PS",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b884?w=40&h=40&fit=crop&crop=face",
      time: "5 hours ago",
      text: "Attended the Sarhul festival celebration near Ranchi. The cultural performances and traditional dhuska were amazing! The local people welcomed us with open hearts.",
      images: [],
      likes: 18,
      comments: 5,
      liked: false
    }
  ]);

  const [newPostText, setNewPostText] = useState('');

  const handleLike = (id: number) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            likes: post.liked ? post.likes - 1 : post.likes + 1,
            liked: !post.liked
          };
        }
        return post;
      })
    );
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostText.trim()) return;
    const newEntry = {
      id: Date.now(),
      author: "You (Traveler)",
      initials: "ME",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
      time: "Just now",
      text: newPostText,
      images: [],
      likes: 1,
      comments: 0,
      liked: true
    };
    setPosts([newEntry, ...posts]);
    setNewPostText('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">Community Connect</h1>
          <p className="text-emerald-600 max-w-2xl mx-auto">Share your experiences, connect with fellow travelers, and discover hidden gems through our community</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {posts.map((post) => (
              <Card key={post.id} className="border-emerald-100 bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Avatar>
                      <AvatarImage src={post.avatar} />
                      <AvatarFallback>{post.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-emerald-800">{post.author}</h4>
                        <span className="text-xs text-emerald-600">{post.time}</span>
                      </div>
                      <p className="text-emerald-950 mb-3 text-sm leading-relaxed">{post.text}</p>
                      
                      {post.images.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          {post.images.map((img, idx) => (
                            <ImageWithFallback
                              key={idx}
                              src={img}
                              alt="Post media"
                              className="w-full h-36 object-cover rounded-lg"
                            />
                          ))}
                        </div>
                      )}

                      <div className="flex items-center space-x-4 pt-2">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleLike(post.id)}
                          className={post.liked ? "text-red-500 hover:text-red-600" : "text-emerald-600 hover:text-emerald-700"}
                        >
                          <Heart className={`w-4 h-4 mr-1 ${post.liked ? 'fill-current' : ''}`} />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-emerald-600">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {post.comments}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <Card className="border-emerald-100 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-emerald-800">Share Your Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreatePost} className="space-y-4">
                  <textarea
                    placeholder="Share your travel experience, tips or memories..."
                    value={newPostText}
                    onChange={(e) => setNewPostText(e.target.value)}
                    className="w-full p-3 border border-emerald-200 rounded-lg resize-none text-sm focus:outline-emerald-600"
                    rows={4}
                  />
                  <div className="flex items-center justify-between">
                    <Button 
                      type="button"
                      variant="outline" 
                      size="sm" 
                      onClick={() => alert("Upload photo dialog: You can attach travel pictures.")}
                      className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                    >
                      <Camera className="w-4 h-4 mr-1" />
                      Add Photo
                    </Button>
                    <Button 
                      type="submit"
                      disabled={!newPostText.trim()}
                      className="bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white"
                    >
                      Share Post
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card className="border-emerald-100 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-emerald-800">Trending Destinations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-700 font-medium">#HundruFalls</span>
                    <Badge variant="secondary">127 posts</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-700 font-medium">#NetarhatSunset</span>
                    <Badge variant="secondary">94 posts</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-700 font-medium">#BetlaWildlife</span>
                    <Badge variant="secondary">68 posts</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-700 font-medium">#BaidyanathDham</span>
                    <Badge variant="secondary">52 posts</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-100 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-emerald-800">Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-emerald-700 space-y-2">
                  <p>• Be respectful to local tribal traditions</p>
                  <p>• Share authentic, high-quality tips</p>
                  <p>• Follow eco-friendly & zero plastic practices</p>
                  <p>• Support local guides and handicrafts</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setStatusMessage('Please enter both email and password.');
      return;
    }
    setStatusMessage(isSignUp ? 'Account created! Welcome to Jharkhand Tourism.' : 'Signed in successfully! Welcome back.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 flex items-center justify-center py-8">
      <div className="max-w-md w-full mx-4">
        <Card className="border-emerald-100 bg-white shadow-lg">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
              <Globe className="w-8 h-8" />
            </div>
            <CardTitle className="text-2xl font-bold text-emerald-800">
              {isSignUp ? 'Create an Account' : 'Welcome Back'}
            </CardTitle>
            <CardDescription>
              {isSignUp 
                ? 'Register to plan and book your Jharkhand adventures' 
                : 'Sign in to your Jharkhand Tourism account'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {statusMessage && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm rounded-lg text-center">
                {statusMessage}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-emerald-700 mb-2">Email</label>
                <Input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com" 
                  className="border-emerald-200 bg-white" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-700 mb-2">Password</label>
                <Input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="border-emerald-200 bg-white" 
                  required
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white"
              >
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </Button>
            </form>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-emerald-200"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-2 text-emerald-600">OR</span>
              </div>
            </div>

            <Button 
              type="button"
              variant="outline" 
              onClick={() => alert("Google Single Sign-On initiated.")}
              className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50"
            >
              Continue with Google
            </Button>

            <div className="text-center text-sm pt-2">
              <span className="text-emerald-600">
                {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
              </span>
              <button 
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setStatusMessage('');
                }}
                className="text-emerald-700 font-semibold hover:text-emerald-800 underline"
              >
                {isSignUp ? 'Sign in' : 'Sign up'}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function SOSButton() {
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Dialog>
        <DialogTrigger asChild>
          <Button 
            className="w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-xl animate-pulse flex items-center justify-center p-0"
            title="Emergency Tourist Assistance"
          >
            <AlertTriangle className="w-7 h-7" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-red-800 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Emergency Tourist SOS
            </DialogTitle>
            <DialogDescription>
              Direct contact numbers for 24/7 tourist safety and emergency response
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg border border-red-100">
              <h4 className="font-semibold text-red-800 mb-2">Emergency Contacts</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between p-2 bg-white rounded border border-red-100">
                  <span className="font-medium text-gray-800">Tourist Helpline:</span>
                  <a href="tel:1363" className="text-red-700 font-bold hover:underline">1363 (Toll Free)</a>
                </div>
                <div className="flex items-center justify-between p-2 bg-white rounded border border-red-100">
                  <span className="font-medium text-gray-800">Police Emergency:</span>
                  <a href="tel:100" className="text-red-700 font-bold hover:underline">100 / 112</a>
                </div>
                <div className="flex items-center justify-between p-2 bg-white rounded border border-red-100">
                  <span className="font-medium text-gray-800">Medical Ambulance:</span>
                  <a href="tel:108" className="text-red-700 font-bold hover:underline">108</a>
                </div>
              </div>
            </div>
            <a href="tel:1363" className="block w-full">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call Tourist Helpline (1363)
              </Button>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

interface ChatBotProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

function ChatBot({ open, setOpen }: ChatBotProps) {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I'm your Jharkhand Tourism Assistant. Ask me anything about destinations, waterfalls, Betla safari, local food, or travel tips!"
    }
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userText = inputVal;
    setInputVal('');
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);

    // Intelligent auto-responder for Jharkhand topics
    setTimeout(() => {
      const q = userText.toLowerCase();
      let reply = "Jharkhand has marvelous places! Explore Netarhat for sunsets, Hundru and Dassam falls for nature, Betla for wildlife, and Deoghar for spiritual heritage.";
      
      if (q.includes("netarhat") || q.includes("sunset")) {
        reply = "Netarhat ('Queen of Chotanagpur') is 156 km from Ranchi. Don't miss Magnolia Point sunset and sunrise point. Best time to visit is October to March!";
      } else if (q.includes("waterfall") || q.includes("fall") || q.includes("hundru")) {
        reply = "Hundru Falls (320 ft), Jonha Falls, and Dassam Falls are all within 45 km of Ranchi. Monsoon and post-monsoon (July to February) are the best months.";
      } else if (q.includes("betla") || q.includes("animal") || q.includes("tiger") || q.includes("wildlife")) {
        reply = "Betla National Park in Palamau is home to elephants, tigers, sambar deer, and the ancient Palamau Fort. Morning safaris start around 6:00 AM.";
      } else if (q.includes("food") || q.includes("eat") || q.includes("dhuska")) {
        reply = "Must-try authentic foods include Dhuska with spicy Ghugni, Arsa Roti, Chilka Roti, Rugra mushroom curry, and bamboo shoot delicacies!";
      } else if (q.includes("temple") || q.includes("deoghar") || q.includes("baidyanath")) {
        reply = "Baba Baidyanath Temple in Deoghar is one of the 12 sacred Jyotirlingas. It attracts millions during the holy Shravani Mela.";
      }

      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button 
            className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white shadow-xl flex items-center justify-center p-0"
            title="Chat with Tourism Assistant"
          >
            <MessageCircle className="w-7 h-7" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-emerald-800 flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Jharkhand Tourism AI Guide
            </DialogTitle>
            <DialogDescription>
              Ask questions about places, routes, tribal culture, or local food
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="h-72 bg-emerald-50/50 rounded-lg p-4 overflow-y-auto space-y-3 border border-emerald-100">
              {messages.map((m, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3 rounded-xl text-sm ${
                      m.sender === 'user' 
                        ? 'bg-gradient-to-r from-emerald-600 to-amber-600 text-white' 
                        : 'bg-white text-emerald-950 shadow-sm border border-emerald-100'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSend} className="flex space-x-2">
              <Input 
                placeholder="Ask about Netarhat, Hundru, Betla..." 
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="border-emerald-200 bg-white" 
              />
              <Button 
                type="submit"
                className="bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
            <div className="text-xs text-emerald-700 text-center font-medium">
              English • Hindi • Santhali tourism tips available
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

/* --- MAIN APP COMPONENT --- */

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'destinations':
        return (
          <DestinationsPage 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
            setCurrentPage={setCurrentPage} 
          />
        );
      case 'virtual-tours':
        return <VirtualToursPage />;
      case 'trip-planner':
        return <TripPlannerPage />;
      case 'culture':
        return <CulturePage />;
      case 'events':
        return <EventsPage />;
      case 'community':
        return <CommunityPage />;
      case 'auth':
        return <AuthPage />;
      default:
        return (
          <HomePage 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
            setCurrentPage={setCurrentPage} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col justify-between">
      <div>
        <Header 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <main>{renderCurrentPage()}</main>
      </div>

      {/* Floating Utilities */}
      <SOSButton />
      <ChatBot open={chatbotOpen} setOpen={setChatbotOpen} />

      {/* Modern Footer */}
      <footer className="bg-emerald-950 text-white py-12 px-4 mt-16 border-t border-emerald-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo1.png" alt="App Logo" className="w-8 h-8 rounded object-contain bg-white/10 p-1" />
              <span className="text-xl font-bold text-white">Jh Tourism</span>
            </div>
            <p className="text-emerald-300 text-sm">
              Discover the untouched hills, cascading waterfalls, and rich tribal heritage of Jharkhand.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-emerald-300">
              <li><button onClick={() => setCurrentPage('destinations')} className="hover:text-white">Destinations</button></li>
              <li><button onClick={() => setCurrentPage('virtual-tours')} className="hover:text-white">Virtual Tours</button></li>
              <li><button onClick={() => setCurrentPage('trip-planner')} className="hover:text-white">AI Trip Planner</button></li>
              <li><button onClick={() => setCurrentPage('culture')} className="hover:text-white">Local Culture</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Helplines</h4>
            <ul className="space-y-2 text-sm text-emerald-300">
              <li>Tourist Helpline: <a href="tel:1363" className="text-amber-400 font-semibold">1363</a></li>
              <li>Emergency Services: <a href="tel:112" className="text-amber-400 font-semibold">112</a></li>
              <li>Jharkhand Tourism Board, Ranchi</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Responsible Tourism</h4>
            <p className="text-emerald-300 text-sm">
              Preserving nature, respecting tribal culture, and promoting eco-friendly travel across Jharkhand.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-emerald-900 mt-8 pt-6 text-center text-xs text-emerald-400">
          © {new Date().getFullYear()} Jharkhand Tourism. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;