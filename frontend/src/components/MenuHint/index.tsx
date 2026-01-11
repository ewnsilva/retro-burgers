import { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from 'utils/context/Theme';
import { useLanguage } from 'utils/hooks/useLanguage';
import * as styles from './MenuHint.styles';

export const MenuHint = () => {
  const { currentColors } = useTheme();
  const { t } = useLanguage();
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState<DOMRect | null>(null);

  useEffect(() => {
    const shown = localStorage.getItem('menuHintShown');
    if (!shown) {
      const el = document.getElementById('menu-icon-button');
      if (el) {
        setCoords(el.getBoundingClientRect());
        setShow(true);
      }
      localStorage.setItem('menuHintShown', 'true');
    }
  }, []);

  if (!show || !coords) {
    return null;
  }

  return (
    <Box sx={styles.overlay(coords)} onClick={() => setShow(false)}>
      <Box sx={styles.highlight(coords, currentColors.primary)} />

      <Box sx={styles.hintBox(coords, currentColors.secondary)}>
        <Typography variant="h6" sx={styles.title(currentColors.primary)}>
          <strong>{t('menuHint.title')}</strong>
        </Typography>

        <Typography color="primary" sx={styles.text}>
          {t('menuHint.text.beforeTheme')}
          <strong>{t('menuHint.text.theme')}</strong>
          {t('menuHint.text.middle')}
          <strong>{t('menuHint.text.music')}</strong> 🎵.
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={styles.button(currentColors.primary, currentColors.secondary)}
          onClick={() => setShow(false)}
        >
          {t('menuHint.button')}
        </Button>
      </Box>

      <style>
        {`
          @keyframes pulse {
            0% { box-shadow: 0 0 10px ${currentColors.primary}; }
            100% { box-shadow: 0 0 25px ${currentColors.secondary}; }
          }
        `}
      </style>
    </Box>
  );
};
