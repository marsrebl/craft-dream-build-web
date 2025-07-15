
import { useState, useEffect, useCallback } from 'react';
import { getLocationById } from '@/data/locations';
import { useAuth } from '@/hooks/useAuth';

export const useAdminPanel = () => {
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showSuperAdminPanel, setShowSuperAdminPanel] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState<'admin' | 'superAdmin' | null>(null);
  const [currentLocation, setCurrentLocation] = useState<string | null>(null);
  const { user, isAuthenticated, login, logout, isLoading } = useAuth();

  const openAdminPanel = useCallback((locationId?: string) => {
    if (!isAuthenticated || user?.role !== 'admin') {
      setShowAdminLogin('admin');
      return;
    }
    
    if (locationId) {
      setCurrentLocation(locationId);
    }
    setShowAdminPanel(true);
  }, [isAuthenticated, user]);

  const closeAdminPanel = useCallback(() => {
    setShowAdminPanel(false);
    setCurrentLocation(null);
  }, []);

  const openSuperAdminPanel = useCallback(() => {
    if (!isAuthenticated || user?.role !== 'superAdmin') {
      setShowAdminLogin('superAdmin');
      return;
    }
    
    setShowSuperAdminPanel(true);
  }, [isAuthenticated, user]);

  const closeSuperAdminPanel = useCallback(() => {
    setShowSuperAdminPanel(false);
  }, []);

  const handleLogin = useCallback(async (email: string, password: string, role: 'admin' | 'superAdmin') => {
    const success = await login(email, password, role);
    if (success) {
      setShowAdminLogin(null);
      if (role === 'admin') {
        // Try to get current location from URL
        const path = window.location.pathname;
        const locationMatch = path.match(/\/locations\/([^\/]+)/);
        if (locationMatch) {
          setCurrentLocation(locationMatch[1]);
        }
        setShowAdminPanel(true);
      } else {
        setShowSuperAdminPanel(true);
      }
    }
    return success;
  }, [login]);

  const closeLogin = useCallback(() => {
    setShowAdminLogin(null);
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.altKey && e.shiftKey) {
        if (e.key === 'N') {
          e.preventDefault();
          if (showAdminPanel) {
            closeAdminPanel();
          } else {
            // Try to get current location from URL
            const path = window.location.pathname;
            const locationMatch = path.match(/\/locations\/([^\/]+)/);
            if (locationMatch) {
              openAdminPanel(locationMatch[1]);
            } else {
              openAdminPanel();
            }
          }
        } else if (e.key === 'S') {
          e.preventDefault();
          if (showSuperAdminPanel) {
            closeSuperAdminPanel();
          } else {
            openSuperAdminPanel();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showAdminPanel, showSuperAdminPanel, openAdminPanel, closeAdminPanel, openSuperAdminPanel, closeSuperAdminPanel]);

  const location = currentLocation ? getLocationById(currentLocation) : null;

  return {
    showAdminPanel,
    showSuperAdminPanel,
    showAdminLogin,
    currentLocation: location,
    user,
    isLoading,
    openAdminPanel,
    closeAdminPanel,
    openSuperAdminPanel,
    closeSuperAdminPanel,
    handleLogin,
    closeLogin,
    logout
  };
};
