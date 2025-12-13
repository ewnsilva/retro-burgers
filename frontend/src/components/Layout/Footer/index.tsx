import { Box, Typography } from '@mui/material';

export const Footer = (): JSX.Element => {
  return (
    <Box
      component="footer"
      sx={{
        position: { xs: 'relative', md: 'fixed' },
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'primary.main',
      }}
    >
      <Box display="flex" ml="2%" paddingY={1}>
        <Typography ml={1} sx={{ color: 'white' }}>
          © 2024 Retro-Burguers. Todos os direitos reservados
        </Typography>
      </Box>
    </Box>
  );
};
