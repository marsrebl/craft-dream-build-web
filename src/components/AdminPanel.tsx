
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  Calendar, 
  Camera, 
  Settings, 
  Plus, 
  Edit, 
  Trash2, 
  Save,
  X
} from 'lucide-react';
import { Location, LocationEvent, LocationGalleryItem, LocationFeature } from '@/data/locations';

interface AdminPanelProps {
  location: Location;
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ location, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(location);

  // Handle keyboard shortcut to close admin panel
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.altKey && e.shiftKey && e.key === 'N') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onClose]);

  const handleSave = () => {
    // In a real app, this would save to a database
    console.log('Saving location data:', editData);
    setIsEditing(false);
    // Show success message
  };

  const addEvent = () => {
    const newEvent: LocationEvent = {
      id: `${location.id}-evt-${Date.now()}`,
      title: 'New Event',
      date: new Date().toISOString().split('T')[0],
      description: 'Event description',
      category: 'Community'
    };
    setEditData(prev => ({
      ...prev,
      events: [...prev.events, newEvent]
    }));
  };

  const addGalleryItem = () => {
    const newItem: LocationGalleryItem = {
      id: `${location.id}-gal-${Date.now()}`,
      title: 'New Gallery Item',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=500&q=60',
      category: 'Community',
      date: new Date().toISOString().split('T')[0]
    };
    setEditData(prev => ({
      ...prev,
      gallery: [...prev.gallery, newItem]
    }));
  };

  const addFeature = () => {
    const newFeature: LocationFeature = {
      id: `${location.id}-feat-${Date.now()}`,
      title: 'New Feature',
      description: 'Feature description',
      icon: 'star'
    };
    setEditData(prev => ({
      ...prev,
      features: [...prev.features, newFeature]
    }));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-background rounded-lg shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-card">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Admin Panel - {location.name}
            </h2>
            <p className="text-muted-foreground">
              Press Alt+Shift+N to close | Manage your location's content
            </p>
          </div>
          <div className="flex items-center gap-2">
            {isEditing && (
              <>
                <Button onClick={handleSave} size="sm">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
                <Button onClick={() => setIsEditing(false)} variant="outline" size="sm">
                  Cancel
                </Button>
              </>
            )}
            {!isEditing && (
              <Button onClick={() => setIsEditing(true)} variant="outline" size="sm">
                <Edit className="w-4 h-4 mr-2" />
                Edit Mode
              </Button>
            )}
            <Button onClick={onClose} variant="ghost" size="sm">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Members</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {location.members.yuva + location.members.mahila + location.members.kanya}
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-4 text-sm">
                      <div className="text-center">
                        <div className="font-medium text-primary">{location.members.yuva}</div>
                        <div className="text-muted-foreground">Yuva</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-accent-foreground">{location.members.mahila}</div>
                        <div className="text-muted-foreground">Mahila</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-secondary-foreground">{location.members.kanya}</div>
                        <div className="text-muted-foreground">Kanya</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Events</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{location.events.length}</div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Scheduled events and activities
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Gallery Items</CardTitle>
                    <Camera className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{location.gallery.length}</div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Photos and media content
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Basic Info Editing */}
              {isEditing && (
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Location Name</label>
                        <Input
                          value={editData.name}
                          onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Region</label>
                        <Input
                          value={editData.region}
                          onChange={(e) => setEditData(prev => ({ ...prev, region: e.target.value }))}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Admin Email</label>
                      <Input
                        type="email"
                        value={editData.adminEmail || ''}
                        onChange={(e) => setEditData(prev => ({ ...prev, adminEmail: e.target.value }))}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="text-sm font-medium">Yuva Members</label>
                        <Input
                          type="number"
                          value={editData.members.yuva}
                          onChange={(e) => setEditData(prev => ({
                            ...prev,
                            members: { ...prev.members, yuva: parseInt(e.target.value) || 0 }
                          }))}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Mahila Members</label>
                        <Input
                          type="number"
                          value={editData.members.mahila}
                          onChange={(e) => setEditData(prev => ({
                            ...prev,
                            members: { ...prev.members, mahila: parseInt(e.target.value) || 0 }
                          }))}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Kanya Members</label>
                        <Input
                          type="number"
                          value={editData.members.kanya}
                          onChange={(e) => setEditData(prev => ({
                            ...prev,
                            members: { ...prev.members, kanya: parseInt(e.target.value) || 0 }
                          }))}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="events" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Manage Events</h3>
                {isEditing && (
                  <Button onClick={addEvent} size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Event
                  </Button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(isEditing ? editData.events : location.events).map((event, index) => (
                  <Card key={event.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <Badge variant="outline">{event.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {isEditing ? (
                        <>
                          <Input
                            value={event.title}
                            onChange={(e) => {
                              const newEvents = [...editData.events];
                              newEvents[index] = { ...event, title: e.target.value };
                              setEditData(prev => ({ ...prev, events: newEvents }));
                            }}
                            placeholder="Event title"
                          />
                          <Input
                            type="date"
                            value={event.date}
                            onChange={(e) => {
                              const newEvents = [...editData.events];
                              newEvents[index] = { ...event, date: e.target.value };
                              setEditData(prev => ({ ...prev, events: newEvents }));
                            }}
                          />
                          <Textarea
                            value={event.description}
                            onChange={(e) => {
                              const newEvents = [...editData.events];
                              newEvents[index] = { ...event, description: e.target.value };
                              setEditData(prev => ({ ...prev, events: newEvents }));
                            }}
                            placeholder="Event description"
                          />
                          <div className="flex gap-2">
                            <Button 
                              variant="destructive" 
                              size="sm"
                              onClick={() => {
                                const newEvents = editData.events.filter((_, i) => i !== index);
                                setEditData(prev => ({ ...prev, events: newEvents }));
                              }}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </>
                      ) : (
                        <>
                          <p className="text-sm text-muted-foreground">
                            {new Date(event.date).toLocaleDateString()}
                          </p>
                          <p>{event.description}</p>
                        </>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="gallery" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Manage Gallery</h3>
                {isEditing && (
                  <Button onClick={addGalleryItem} size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Item
                  </Button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(isEditing ? editData.gallery : location.gallery).map((item, index) => (
                  <Card key={item.id}>
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <CardContent className="p-4 space-y-2">
                      {isEditing ? (
                        <>
                          <Input
                            value={item.title}
                            onChange={(e) => {
                              const newGallery = [...editData.gallery];
                              newGallery[index] = { ...item, title: e.target.value };
                              setEditData(prev => ({ ...prev, gallery: newGallery }));
                            }}
                          />
                          <Input
                            value={item.image}
                            onChange={(e) => {
                              const newGallery = [...editData.gallery];
                              newGallery[index] = { ...item, image: e.target.value };
                              setEditData(prev => ({ ...prev, gallery: newGallery }));
                            }}
                            placeholder="Image URL"
                          />
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => {
                              const newGallery = editData.gallery.filter((_, i) => i !== index);
                              setEditData(prev => ({ ...prev, gallery: newGallery }));
                            }}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </>
                      ) : (
                        <>
                          <h4 className="font-medium">{item.title}</h4>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <Badge variant="secondary">{item.category}</Badge>
                            <span>{new Date(item.date).toLocaleDateString()}</span>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Manage Features</h3>
                {isEditing && (
                  <Button onClick={addFeature} size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Feature
                  </Button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(isEditing ? editData.features : location.features).map((feature, index) => (
                  <Card key={feature.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {isEditing ? (
                        <>
                          <Input
                            value={feature.title}
                            onChange={(e) => {
                              const newFeatures = [...editData.features];
                              newFeatures[index] = { ...feature, title: e.target.value };
                              setEditData(prev => ({ ...prev, features: newFeatures }));
                            }}
                          />
                          <Textarea
                            value={feature.description}
                            onChange={(e) => {
                              const newFeatures = [...editData.features];
                              newFeatures[index] = { ...feature, description: e.target.value };
                              setEditData(prev => ({ ...prev, features: newFeatures }));
                            }}
                          />
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => {
                              const newFeatures = editData.features.filter((_, i) => i !== index);
                              setEditData(prev => ({ ...prev, features: newFeatures }));
                            }}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </>
                      ) : (
                        <p>{feature.description}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
