import { Box, Typography } from '@mui/material';
import { useLanguage } from 'utils/hooks/useLanguage';

export const Footer = (): JSX.Element => {
  const { t } = useLanguage();

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
          {t('footer.copyright')}
        </Typography>
      </Box>
    </Box>
  );
};
