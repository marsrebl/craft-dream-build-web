
import { useState, useCallback } from 'react';

interface AuthUser {
  email: string;
  role: 'admin' | 'superAdmin';
  locationId?: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async (email: string, password: string, role: 'admin' | 'superAdmin') => {
    setIsLoading(true);
    
    // Simple authentication logic - in a real app, this would connect to your backend
    const adminCredentials = {
      admin: { email: 'admin@agrawal.com', password: 'admin123' },
      superAdmin: { email: 'superadmin@agrawal.com', password: 'super123' }
    };

    if (adminCredentials[role].email === email && adminCredentials[role].password === password) {
      const authUser: AuthUser = {
        email,
        role,
        ...(role === 'admin' && { locationId: 'kathmandu' }) // Default location for demo
      };
      setUser(authUser);
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated: !!user
  };
};
