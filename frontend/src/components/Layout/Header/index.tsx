import { useState, ChangeEvent, MouseEvent } from 'react';

import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { Fastfood, Menu as MenuIcon, Search } from '@mui/icons-material';

import { useTheme as useCustomTheme } from '../../../utils/context';
import { useThemeMusic } from '../../../utils/hooks';
import { InfoModal, HeaderMenu } from 'components';
import { IHeader } from 'utils';

export const Header = ({ setSearch }: IHeader): JSX.Element => {
  const muiTheme = useTheme();
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

  return (
    <>
      <Box
        component="header"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'info.main',
        }}
      >
        <Box display="flex" ml="2%" paddingY={2}>
          <Fastfood htmlColor={muiTheme.palette.primary.main} fontSize="large" />
          <Typography
            variant="h4"
            ml={1}
            sx={{
              backgroundImage: `radial-gradient(50% 50% at 50% 50%, ${muiTheme.palette.background.default} 0%, ${muiTheme.palette.primary.main} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              display: 'inline-block',
            }}
          >
            Retro-Burgers
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1} mr="5%">
          <TextField
            label="Pesquisa"
            variant="outlined"
            color="primary"
            size="small"
            onChange={handleSearchChange}
            sx={{
              minWidth: '200px',
              '& .MuiInputBase-input': {
                color: 'primary.main',
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search color="primary" />
                </InputAdornment>
              ),
            }}
          />
          <Tooltip title="Mais opções">
            <IconButton id="menu-icon-button" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      <HeaderMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        allThemeColors={allThemeColors}
        themeType={themeType}
        onThemeChange={handleThemeChange}
        musicOn={musicOn}
        toggleMusic={toggleMusic}
        onOpenInfo={() => setShowInfo(true)}
      />

      <InfoModal open={showInfo} onClose={() => setShowInfo(false)} />
    </>
  );
};
