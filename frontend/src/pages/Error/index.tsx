import { Box, Button, Grow, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useNavigate } from 'react-router-dom';

import { useLanguage } from 'utils/hooks/useLanguage';

export const ErrorPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      px={2}
    >
      <Grow in timeout={600}>
        <ErrorOutlineIcon color="error" sx={{ fontSize: 120, mb: 2 }} />
      </Grow>

      <Typography variant="h4" fontWeight="bold" mb={1}>
        {t('error.title')}
      </Typography>

      <Typography variant="body1" color="text.secondary" mb={4}>
        {t('error.description')}
      </Typography>

      <Button variant="contained" size="large" onClick={() => navigate('/')}>
        {t('error.button')}
      </Button>
    </Box>
  );
};
