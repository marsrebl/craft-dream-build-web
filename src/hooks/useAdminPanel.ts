
import { useState, useEffect, useCallback } from 'react';
import { getLocationById } from '@/data/locations';

export const useAdminPanel = () => {
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showSuperAdminPanel, setShowSuperAdminPanel] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<string | null>(null);

  const openAdminPanel = useCallback((locationId?: string) => {
    if (locationId) {
      setCurrentLocation(locationId);
    }
    setShowAdminPanel(true);
  }, []);

  const closeAdminPanel = useCallback(() => {
    setShowAdminPanel(false);
    setCurrentLocation(null);
  }, []);

  const openSuperAdminPanel = useCallback(() => {
    setShowSuperAdminPanel(true);
  }, []);

  const closeSuperAdminPanel = useCallback(() => {
    setShowSuperAdminPanel(false);
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
    currentLocation: location,
    openAdminPanel,
    closeAdminPanel,
    openSuperAdminPanel,
    closeSuperAdminPanel
  };
};
