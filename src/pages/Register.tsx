import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    gender: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { userType, ...formData });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-100 py-20">
      <div className="container mx-auto px-4">
        {/* Hero/Intro Section */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-primary mb-4">
            Join the Agrawal Samaj Community
          </h1>
          <p className="text-lg text-muted-foreground">
            Register now to be part of our growing network of entrepreneurs,
            families, and cultural heritage.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Business Networking</h3>
            <p className="text-sm text-muted-foreground">
              Connect with fellow Agrawal entrepreneurs and grow together.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Cultural Events</h3>
            <p className="text-sm text-muted-foreground">
              Be a part of vibrant cultural programs and traditional festivals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Social Impact</h3>
            <p className="text-sm text-muted-foreground">
              Contribute to community service, education, and charity efforts.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm shadow-elegant border-0">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-foreground mb-2">
                Registration
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Fill in your details to join officially.
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
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input id="fullName" value={formData.fullName} onChange={(e) => handleInputChange("fullName", e.target.value)} className="h-12" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} className="h-12" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} className="h-12" required />
                      </div>
                    </div>

                    {/* Shopkeeper Fields */}
                    {userType === "shopkeeper" && (
                      <div className="space-y-6 border-t pt-6">
                        <h3 className="text-lg font-semibold">Business Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="shopName">Shop Name *</Label>
                            <Input id="shopName" value={formData.shopName} onChange={(e) => handleInputChange("shopName", e.target.value)} className="h-12" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="businessType">Business Type *</Label>
                            <Input id="businessType" value={formData.businessType} onChange={(e) => handleInputChange("businessType", e.target.value)} className="h-12" required />
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="shopAddress">Shop Address *</Label>
                            <Textarea id="shopAddress" value={formData.shopAddress} onChange={(e) => handleInputChange("shopAddress", e.target.value)} required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="gstPan">GST/PAN Number</Label>
                            <Input id="gstPan" value={formData.gstPan} onChange={(e) => handleInputChange("gstPan", e.target.value)} className="h-12" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="shopLicense">Shop License</Label>
                            <Input id="shopLicense" type="file" accept=".pdf,.jpg,.jpeg,.png" className="h-12" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Normal Fields */}
                    {userType === "normal" && (
                      <div className="space-y-6 border-t pt-6">
                        <h3 className="text-lg font-semibold">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="address">Address *</Label>
                            <Textarea id="address" value={formData.address} onChange={(e) => handleInputChange("address", e.target.value)} required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                            <Input id="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={(e) => handleInputChange("dateOfBirth", e.target.value)} className="h-12" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="gender">Gender *</Label>
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
                            <Label htmlFor="profilePhoto">Profile Photo</Label>
                            <Input id="profilePhoto" type="file" accept=".jpg,.jpeg,.png" className="h-12" />
                          </div>
                        </div>
                      </div>
                    )}

                    <Button type="submit" className="w-full h-12 text-lg font-semibold mt-6">
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
