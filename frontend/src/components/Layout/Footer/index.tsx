import { Box, Typography } from '@mui/material';

export const Footer = (): JSX.Element => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'primary.main',
      }}
    >
      <Box display="flex" ml="2%" paddingY={1}>
        <Typography variant="h6" ml={1} sx={{ color: 'white' }}>
          © 2024 Retro-Burguers. Todos os direitos reservados
        </Typography>
      </Box>
    </Box>
  );
};
