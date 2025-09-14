import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Navigation, Phone, Clock, Users } from "lucide-react";

// Campus locations data
const campusLocations = [
  {
    id: 1,
    name: "Computer Science Department",
    type: "Academic",
    coordinates: { lat: 30.7653, lng: 76.5732 },
    description: "Department of Computer Science & Engineering",
    contact: "+91-172-2753000",
    timing: "9:00 AM - 5:00 PM",
    facilities: ["Labs", "Classrooms", "Faculty Offices"]
  },
  {
    id: 2,
    name: "Central Library",
    type: "Academic",
    coordinates: { lat: 30.7648, lng: 76.5728 },
    description: "Main campus library with extensive collection",
    contact: "+91-172-2753001",
    timing: "8:00 AM - 11:00 PM",
    facilities: ["Reading Halls", "Digital Library", "Group Study Rooms"]
  },
  {
    id: 3,
    name: "Student Cafeteria",
    type: "Dining",
    coordinates: { lat: 30.7645, lng: 76.5735 },
    description: "Main dining facility for students",
    contact: "+91-172-2753002",
    timing: "7:00 AM - 10:00 PM",
    facilities: ["Food Court", "Snack Bar", "Seating Area"]
  },
  {
    id: 4,
    name: "Administrative Block",
    type: "Administrative",
    coordinates: { lat: 30.7655, lng: 76.5725 },
    description: "Main administrative offices",
    contact: "+91-172-2753003",
    timing: "9:00 AM - 5:00 PM",
    facilities: ["Registrar Office", "Accounts", "Admissions"]
  },
  {
    id: 5,
    name: "Sports Complex",
    type: "Recreation",
    coordinates: { lat: 30.7640, lng: 76.5740 },
    description: "Indoor and outdoor sports facilities",
    contact: "+91-172-2753004",
    timing: "6:00 AM - 10:00 PM",
    facilities: ["Gym", "Swimming Pool", "Courts", "Ground"]
  },
  {
    id: 6,
    name: "Boys Hostel 1",
    type: "Residential",
    coordinates: { lat: 30.7660, lng: 76.5720 },
    description: "Residential facility for male students",
    contact: "+91-172-2753005",
    timing: "24/7",
    facilities: ["Rooms", "Common Room", "Mess", "Study Hall"]
  }
];

const locationTypes = ["All", "Academic", "Administrative", "Dining", "Recreation", "Residential"];

export const CampusMapPage = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState<typeof campusLocations[0] | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const filteredLocations = campusLocations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "All" || location.type === selectedType;
    return matchesSearch && matchesType;
  });

  useEffect(() => {
    // Initialize Google Maps
    const initMap = () => {
      if (!mapRef.current) return;

      // Note: Replace with actual Google Maps API key
      const map = new (window as any).google.maps.Map(mapRef.current, {
        zoom: 16,
        center: { lat: 30.7650, lng: 76.5730 }, // PEC Chandigarh approximate coordinates
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
      });

      // Add markers for each location
      campusLocations.forEach(location => {
        const marker = new (window as any).google.maps.Marker({
          position: location.coordinates,
          map: map,
          title: location.name,
          icon: {
            url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="14" fill="#ffd633" stroke="#000" stroke-width="2"/>
                <circle cx="16" cy="16" r="8" fill="#000"/>
              </svg>
            `)}`,
            scaledSize: new (window as any).google.maps.Size(32, 32),
          }
        });

        const infoWindow = new (window as any).google.maps.InfoWindow({
          content: `
            <div style="max-width: 250px;">
              <h3 style="margin: 0 0 8px 0; font-weight: bold;">${location.name}</h3>
              <p style="margin: 0 0 8px 0; color: #666;">${location.description}</p>
              <div style="font-size: 12px; color: #888;">
                <div>📞 ${location.contact}</div>
                <div>🕒 ${location.timing}</div>
              </div>
            </div>
          `
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
          setSelectedLocation(location);
        });
      });

      setMapLoaded(true);
    };

    // Load Google Maps API if not already loaded
    if (!(window as any).google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
      script.async = true;
      script.defer = true;
      (window as any).initMap = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  const getLocationTypeColor = (type: string) => {
    switch (type) {
      case "Academic": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Administrative": return "bg-purple-100 text-purple-800 border-purple-200";
      case "Dining": return "bg-green-100 text-green-800 border-green-200";
      case "Recreation": return "bg-orange-100 text-orange-800 border-orange-200";
      case "Residential": return "bg-pink-100 text-pink-800 border-pink-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="font-heading text-3xl font-bold">Campus Map</h1>
        <p className="font-body text-muted-foreground">
          Interactive map of PEC Chandigarh campus with key locations and facilities.
        </p>
      </div>

      {/* API Key Notice */}
      {!mapLoaded && (
        <Card className="border-accent bg-accent/10">
          <CardContent className="p-4">
            <p className="font-body text-sm">
              <strong>🗺️ Google Maps Integration Ready:</strong> Add your Google Maps API key to enable the interactive map.
              Get your API key from the <a href="https://console.cloud.google.com/" target="_blank" className="text-accent-foreground underline">Google Cloud Console</a>.
            </p>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map */}
        <div className="lg:col-span-2">
          <Card className="border-portal-border">
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Campus Map
              </CardTitle>
              <CardDescription className="font-body">
                Click on markers to view location details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div 
                ref={mapRef} 
                className="w-full h-96 bg-portal-surface rounded-lg border border-portal-border flex items-center justify-center"
              >
                {!mapLoaded && (
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                    <p className="font-body text-muted-foreground">Loading map...</p>
                    <p className="font-body text-xs text-muted-foreground mt-1">
                      Requires Google Maps API key
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Location Details & Search */}
        <div className="space-y-6">
          {/* Search and Filter */}
          <Card className="border-portal-border">
            <CardHeader>
              <CardTitle className="font-heading text-lg">Find Locations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 font-body"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {locationTypes.map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type)}
                    className={`font-body text-xs ${
                      selectedType === type 
                        ? "bg-accent text-accent-foreground hover:bg-accent/90" 
                        : ""
                    }`}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Selected Location Details */}
          {selectedLocation && (
            <Card className="border-accent bg-accent/5">
              <CardHeader>
                <CardTitle className="font-heading text-lg">{selectedLocation.name}</CardTitle>
                <Badge className={`w-fit font-body ${getLocationTypeColor(selectedLocation.type)}`}>
                  {selectedLocation.type}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="font-body text-sm text-muted-foreground">
                  {selectedLocation.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="h-3 w-3" />
                    <span className="font-body">{selectedLocation.contact}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3" />
                    <span className="font-body">{selectedLocation.timing}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-3 w-3 mt-0.5" />
                    <div className="flex flex-wrap gap-1">
                      {selectedLocation.facilities.map((facility, index) => (
                        <Badge key={index} variant="outline" className="font-body text-xs">
                          {facility}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <Button size="sm" className="w-full font-body">
                  <Navigation className="h-3 w-3 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Location List */}
          <Card className="border-portal-border">
            <CardHeader>
              <CardTitle className="font-heading text-lg">
                All Locations {filteredLocations.length !== campusLocations.length && `(${filteredLocations.length})`}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {filteredLocations.map((location) => (
                  <div
                    key={location.id}
                    className="p-3 border border-portal-border rounded-lg hover:bg-portal-hover cursor-pointer transition-colors"
                    onClick={() => setSelectedLocation(location)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-body font-medium text-sm">{location.name}</h4>
                        <p className="font-body text-xs text-muted-foreground">{location.description}</p>
                      </div>
                      <Badge className={`font-body text-xs ${getLocationTypeColor(location.type)}`}>
                        {location.type}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};