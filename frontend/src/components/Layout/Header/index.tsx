import { ChangeEvent } from 'react';

import { Box, InputAdornment, TextField, Typography, useTheme } from '@mui/material';
import { Fastfood, Search } from '@mui/icons-material';

import { IHeader } from 'utils';

export const Header = ({ setSearch }: IHeader): JSX.Element => {
  const theme = useTheme();
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
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
        <Fastfood htmlColor={theme.palette.primary.main} fontSize="large" />
        <Typography
          variant="h4"
          ml={1}
          sx={{
            backgroundImage: `radial-gradient(50% 50% at 50% 50%, ${theme.palette.background.default} 0%, ${theme.palette.primary.main} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            display: 'inline-block',
          }}
        >
          Retro-Burgers
        </Typography>
      </Box>
      <TextField
        label="Pesquisa"
        variant="outlined"
        size="small"
        onChange={handleSearchChange}
        slotProps={{
          htmlInput: {
            startAdornment: (
              <InputAdornment position="start">
                <Search color="primary" />
              </InputAdornment>
            ),
          },
        }}
        sx={{ mr: '5%' }}
      />
    </Box>
  );
};
