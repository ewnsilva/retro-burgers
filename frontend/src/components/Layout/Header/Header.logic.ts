import { useState, ChangeEvent, MouseEvent } from 'react';
import { useTheme as useCustomTheme } from 'utils/context/Theme';
import { useThemeMusic } from 'utils/hooks/musics';

export const useHeaderLogic = (setSearch: (value: string) => void) => {
  const { themeType, setThemeType, allThemeColors } = useCustomTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showInfo, setShowInfo] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  useThemeMusic({ themeType, musicEnabled: musicOn });

  const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => setAnchorEl(null);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleThemeChange = (type: typeof themeType) => {
    setThemeType(type);
    handleCloseMenu();
  };

  const toggleMusic = () => setMusicOn(prev => !prev);

  return {
    themeType,
    allThemeColors,
    anchorEl,
    showInfo,
    musicOn,
    handleMenuClick,
    handleCloseMenu,
    handleSearchChange,
    handleThemeChange,
    toggleMusic,
    setShowInfo,
  };
};
