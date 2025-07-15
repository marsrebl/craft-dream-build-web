
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  MapPin, 
  Settings, 
  BarChart3, 
  Shield, 
  Database,
  X,
  Search,
  Filter
} from 'lucide-react';
import { nepaleseLocations, Location } from '@/data/locations';

interface SuperAdminPanelProps {
  onClose: () => void;
}

const SuperAdminPanel: React.FC<SuperAdminPanelProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  // Handle keyboard shortcut to close super admin panel
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.altKey && e.shiftKey && e.key === 'S') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onClose]);

  const regions = ['All', ...Array.from(new Set(nepaleseLocations.map(loc => loc.region)))];
  
  const filteredLocations = nepaleseLocations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === 'All' || location.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const totalStats = nepaleseLocations.reduce((acc, location) => ({
    totalMembers: acc.totalMembers + location.members.yuva + location.members.mahila + location.members.kanya,
    totalYuva: acc.totalYuva + location.members.yuva,
    totalMahila: acc.totalMahila + location.members.mahila,
    totalKanya: acc.totalKanya + location.members.kanya,
    totalEvents: acc.totalEvents + location.events.length,
    totalGallery: acc.totalGallery + location.gallery.length,
    totalFeatures: acc.totalFeatures + location.features.length
  }), {
    totalMembers: 0,
    totalYuva: 0,
    totalMahila: 0,
    totalKanya: 0,
    totalEvents: 0,
    totalGallery: 0,
    totalFeatures: 0
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-background rounded-lg shadow-2xl w-full max-w-7xl max-h-[95vh] overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-gradient-to-r from-primary/10 to-accent/10">
          <div>
            <h2 className="text-3xl font-bold text-foreground flex items-center">
              <Shield className="w-8 h-8 mr-3 text-primary" />
              Super Admin Panel
            </h2>
            <p className="text-muted-foreground mt-1">
              Press Alt+Shift+S to close | Master control for all locations
            </p>
          </div>
          <Button onClick={onClose} variant="ghost" size="sm">
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(95vh-100px)]">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="locations">Locations</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Global Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Locations</CardTitle>
                    <MapPin className="h-4 w-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">{nepaleseLocations.length}</div>
                    <p className="text-xs text-muted-foreground">Across Nepal</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-accent/10 to-accent/5">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Members</CardTitle>
                    <Users className="h-4 w-4 text-accent-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-accent-foreground">{totalStats.totalMembers}</div>
                    <p className="text-xs text-muted-foreground">Active community members</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Events</CardTitle>
                    <BarChart3 className="h-4 w-4 text-green-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">{totalStats.totalEvents}</div>
                    <p className="text-xs text-muted-foreground">Organized events</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Gallery Items</CardTitle>
                    <Database className="h-4 w-4 text-blue-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600">{totalStats.totalGallery}</div>
                    <p className="text-xs text-muted-foreground">Media content</p>
                  </CardContent>
                </Card>
              </div>

              {/* Member Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Member Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">{totalStats.totalYuva}</div>
                      <div className="text-muted-foreground">Yuva (Youth)</div>
                      <div className="text-sm text-muted-foreground">
                        {((totalStats.totalYuva / totalStats.totalMembers) * 100).toFixed(1)}%
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent-foreground mb-2">{totalStats.totalMahila}</div>
                      <div className="text-muted-foreground">Mahila (Women)</div>
                      <div className="text-sm text-muted-foreground">
                        {((totalStats.totalMahila / totalStats.totalMembers) * 100).toFixed(1)}%
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-secondary-foreground mb-2">{totalStats.totalKanya}</div>
                      <div className="text-muted-foreground">Kanya (Girls)</div>
                      <div className="text-sm text-muted-foreground">
                        {((totalStats.totalKanya / totalStats.totalMembers) * 100).toFixed(1)}%
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Regional Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Regional Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {regions.slice(1).map(region => {
                      const regionLocations = nepaleseLocations.filter(loc => loc.region === region);
                      const regionMembers = regionLocations.reduce((acc, loc) => 
                        acc + loc.members.yuva + loc.members.mahila + loc.members.kanya, 0
                      );
                      return (
                        <div key={region} className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{region}</div>
                            <div className="text-sm text-muted-foreground">
                              {regionLocations.length} locations
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">{regionMembers}</div>
                            <div className="text-sm text-muted-foreground">members</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="locations" className="space-y-6">
              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex items-center gap-2 flex-1 max-w-md">
                  <Search className="w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-muted-foreground" />
                  <div className="flex gap-2">
                    {regions.map((region) => (
                      <Button
                        key={region}
                        variant={selectedRegion === region ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedRegion(region)}
                      >
                        {region === 'All' ? 'All' : region.split(' ')[0]}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Locations Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Location Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3">Location</th>
                          <th className="text-left p-3">Region</th>
                          <th className="text-center p-3">Members</th>
                          <th className="text-center p-3">Events</th>
                          <th className="text-center p-3">Gallery</th>
                          <th className="text-center p-3">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredLocations.map((location) => {
                          const totalMembers = location.members.yuva + location.members.mahila + location.members.kanya;
                          return (
                            <tr key={location.id} className="border-b hover:bg-muted/50">
                              <td className="p-3">
                                <div>
                                  <div className="font-medium">{location.name}</div>
                                  <div className="text-sm text-muted-foreground">{location.adminEmail}</div>
                                </div>
                              </td>
                              <td className="p-3">{location.region}</td>
                              <td className="p-3 text-center">
                                <Badge variant="secondary">{totalMembers}</Badge>
                              </td>
                              <td className="p-3 text-center">{location.events.length}</td>
                              <td className="p-3 text-center">{location.gallery.length}</td>
                              <td className="p-3 text-center">
                                <Badge variant={totalMembers > 0 ? "default" : "secondary"}>
                                  {totalMembers > 0 ? "Active" : "Inactive"}
                                </Badge>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-muted-foreground">
                    <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Analytics Dashboard</p>
                    <p className="text-sm">Detailed analytics and reports coming soon...</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-muted-foreground">
                    <Settings className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Global Settings</p>
                    <p className="text-sm">System configuration and global settings coming soon...</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminPanel;
