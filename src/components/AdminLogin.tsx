
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { X, Shield, User } from 'lucide-react';

interface AdminLoginProps {
  onClose: () => void;
  onLogin: (email: string, password: string, role: 'admin' | 'superAdmin') => Promise<boolean>;
  role: 'admin' | 'superAdmin';
  isLoading: boolean;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onClose, onLogin, role, isLoading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const success = await onLogin(email, password, role);
    if (!success) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fade-in">
      <Card className="w-full max-w-md animate-scale-in">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            {role === 'superAdmin' ? (
              <Shield className="w-6 h-6 text-primary" />
            ) : (
              <User className="w-6 h-6 text-primary" />
            )}
            <CardTitle>
              {role === 'superAdmin' ? 'Super Admin Login' : 'Admin Login'}
            </CardTitle>
          </div>
          <Button onClick={onClose} variant="ghost" size="sm">
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={role === 'superAdmin' ? 'superadmin@agrawal.com' : 'admin@agrawal.com'}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="text-sm text-muted-foreground bg-muted p-3 rounded">
              <p className="font-medium mb-1">Demo Credentials:</p>
              {role === 'superAdmin' ? (
                <>
                  <p>Email: superadmin@agrawal.com</p>
                  <p>Password: super123</p>
                </>
              ) : (
                <>
                  <p>Email: admin@agrawal.com</p>
                  <p>Password: admin123</p>
                </>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
