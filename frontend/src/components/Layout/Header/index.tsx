import { useState, ChangeEvent, MouseEvent } from 'react';

import {
  Box,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Modal,
  TextField,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import {
  Fastfood,
  Menu as MenuIcon,
  MusicNote,
  MusicOff,
  Info,
  Search,
  Check,
} from '@mui/icons-material';

import { useTheme as useCustomTheme } from '../../../utils/context';
import { useThemeMusic } from '../../../utils/hooks';
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
            size="small"
            onChange={handleSearchChange}
            sx={{ minWidth: '200px' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search color="primary" />
                </InputAdornment>
              ),
            }}
          />
          <Tooltip title="Mais opções">
            <IconButton onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* MENU */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
        {Object.entries(allThemeColors).map(([key, colors]) => (
          <MenuItem
            key={key}
            selected={themeType === key}
            onClick={() => handleThemeChange(key as typeof themeType)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              minWidth: 180,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: 1,
                  background: `linear-gradient(135deg, ${colors.primary} 50%, ${colors.secondary} 50%)`,
                  border: '1px solid #ccc',
                  marginRight: 1.5,
                }}
              />
              <Typography textTransform="capitalize">{key}</Typography>
            </Box>
            {themeType === key && <Check color="primary" />}
          </MenuItem>
        ))}
        <MenuItem onClick={toggleMusic}>
          {musicOn ? <MusicNote /> : <MusicOff />}
          <Typography ml={1}>{musicOn ? 'Música ativada' : 'Música desativada'}</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseMenu();
            setShowInfo(true);
          }}
        >
          <Info />
          <Typography ml={1}>Mais informações</Typography>
        </MenuItem>
      </Menu>

      <Modal open={showInfo} onClose={() => setShowInfo(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" mb={2}>
            Descrição
          </Typography>
          <Typography variant="body1">
            Este projeto é um experimento pessoal chamado <strong>Retro-Burgers</strong>, com temas
            visuais inspirados na estética synthwave/retrowave. Ele usa Material UI, React e
            conceitos modernos de UI para criar uma experiência divertida e estilosa.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
