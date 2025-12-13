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

import { HeaderMenu, InfoModal } from 'components';
import { useHeaderLogic } from './Header.logic';
import * as styles from './Header.styles';

export const Header = ({ setSearch }: { setSearch: (value: string) => void }): JSX.Element => {
  const theme = useTheme();
  const {
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
  } = useHeaderLogic(setSearch);

  return (
    <>
      <Box component="header" sx={styles.headerContainer(theme)}>
        <Box display="flex" ml="2%" paddingY={2}>
          <Fastfood htmlColor={theme.palette.primary.main} fontSize="large" />
          <Typography variant="h4" ml={1} sx={styles.logoText(theme)}>
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
            sx={styles.searchField}
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
