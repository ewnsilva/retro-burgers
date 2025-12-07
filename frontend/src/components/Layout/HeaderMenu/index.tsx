import { Box, Menu, MenuItem, Typography } from '@mui/material';
import { MusicNote, MusicOff, Info, Check } from '@mui/icons-material';

type HeaderMenuProps = {
  allThemeColors: Record<string, { primary: string; secondary: string }>;
  anchorEl: HTMLElement | null;
  musicOn: boolean;
  open: boolean;
  themeType: string;
  onClose: () => void;
  onOpenInfo: () => void;
  onThemeChange: (type: any) => void;
  toggleMusic: () => void;
};

export const HeaderMenu = ({
  allThemeColors,
  anchorEl,
  musicOn,
  open,
  themeType,
  onClose,
  onOpenInfo,
  onThemeChange,
  toggleMusic,
}: HeaderMenuProps): JSX.Element => {
  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
      {Object.entries(allThemeColors).map(([key, colors]) => (
        <MenuItem
          key={key}
          selected={themeType === key}
          onClick={() => onThemeChange(key)}
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
            <Typography textTransform="capitalize" color="textSecondary">
              {key}
            </Typography>
          </Box>

          {themeType === key && <Check color="primary" />}
        </MenuItem>
      ))}

      <MenuItem onClick={toggleMusic}>
        {musicOn ? (
          <MusicNote sx={{ color: 'background.default' }} />
        ) : (
          <MusicOff sx={{ color: 'background.default' }} />
        )}
        <Typography ml={1} color="textSecondary">
          {musicOn ? 'Música ativada' : 'Música desativada'}
        </Typography>
      </MenuItem>

      <MenuItem
        onClick={() => {
          onClose();
          onOpenInfo();
        }}
      >
        <Info sx={{ color: 'background.default' }} />
        <Typography ml={1} color="textSecondary">
          Mais informações
        </Typography>
      </MenuItem>
    </Menu>
  );
};
