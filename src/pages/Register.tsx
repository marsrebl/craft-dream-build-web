import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Register = () => {
  const [userType, setUserType] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    shopName: "",
    shopAddress: "",
    businessType: "",
    gstPan: "",
    address: "",
    dateOfBirth: "",
    gender: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { userType, ...formData });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm shadow-elegant border-0">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-foreground mb-2">
                Registration
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Join the Agrawal Samaj community
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Type Selection */}
                <div className="space-y-2">
                  <Label htmlFor="userType" className="text-sm font-semibold text-foreground">
                    Registration Type *
                  </Label>
                  <Select value={userType} onValueChange={setUserType}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select registration type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="normal">Normal Member</SelectItem>
                      <SelectItem value="shopkeeper">Shopkeeper</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {userType && (
                  <>
                    {/* Common Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-sm font-semibold text-foreground">
                          Full Name *
                        </Label>
                        <Input
                          id="fullName"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          className="h-12"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="h-12"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-semibold text-foreground">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="h-12"
                          required
                        />
                      </div>
                    </div>

                    {/* Shopkeeper Specific Fields */}
                    {userType === "shopkeeper" && (
                      <div className="space-y-6 border-t pt-6">
                        <h3 className="text-lg font-semibold text-foreground">Business Information</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="shopName" className="text-sm font-semibold text-foreground">
                              Shop Name *
                            </Label>
                            <Input
                              id="shopName"
                              type="text"
                              placeholder="Enter shop name"
                              value={formData.shopName}
                              onChange={(e) => handleInputChange("shopName", e.target.value)}
                              className="h-12"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="businessType" className="text-sm font-semibold text-foreground">
                              Business Type *
                            </Label>
                            <Input
                              id="businessType"
                              type="text"
                              placeholder="e.g., Retail, Restaurant, Services"
                              value={formData.businessType}
                              onChange={(e) => handleInputChange("businessType", e.target.value)}
                              className="h-12"
                              required
                            />
                          </div>

                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="shopAddress" className="text-sm font-semibold text-foreground">
                              Shop Address *
                            </Label>
                            <Textarea
                              id="shopAddress"
                              placeholder="Enter complete shop address"
                              value={formData.shopAddress}
                              onChange={(e) => handleInputChange("shopAddress", e.target.value)}
                              className="min-h-[100px]"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="gstPan" className="text-sm font-semibold text-foreground">
                              GST/PAN Number
                            </Label>
                            <Input
                              id="gstPan"
                              type="text"
                              placeholder="Enter GST or PAN number"
                              value={formData.gstPan}
                              onChange={(e) => handleInputChange("gstPan", e.target.value)}
                              className="h-12"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="shopLicense" className="text-sm font-semibold text-foreground">
                              Shop License
                            </Label>
                            <Input
                              id="shopLicense"
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              className="h-12"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Normal Member Specific Fields */}
                    {userType === "normal" && (
                      <div className="space-y-6 border-t pt-6">
                        <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="address" className="text-sm font-semibold text-foreground">
                              Address *
                            </Label>
                            <Textarea
                              id="address"
                              placeholder="Enter your complete address"
                              value={formData.address}
                              onChange={(e) => handleInputChange("address", e.target.value)}
                              className="min-h-[100px]"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="dateOfBirth" className="text-sm font-semibold text-foreground">
                              Date of Birth *
                            </Label>
                            <Input
                              id="dateOfBirth"
                              type="date"
                              value={formData.dateOfBirth}
                              onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                              className="h-12"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="gender" className="text-sm font-semibold text-foreground">
                              Gender *
                            </Label>
                            <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="profilePhoto" className="text-sm font-semibold text-foreground">
                              Profile Photo
                            </Label>
                            <Input
                              id="profilePhoto"
                              type="file"
                              accept=".jpg,.jpeg,.png"
                              className="h-12"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full h-12 text-lg font-semibold"
                      size="lg"
                    >
                      Submit Registration
                    </Button>
                  </>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
