import { useEffect, useRef } from 'react';
import { Howl } from 'howler';

type ThemeType = 'synthwave' | 'retrowave' | 'darkwave';

interface UseThemeMusicProps {
  themeType: ThemeType;
  musicEnabled: boolean;
}

const API_URL = process.env.REACT_APP_API_URL ?? '';

const MUSIC_MAP: Record<ThemeType, string> = {
  synthwave: `${API_URL}/audio/synthwave.mp3`,
  retrowave: `${API_URL}/audio/retrowave.mp3`,
  darkwave: `${API_URL}/audio/darkwave.mp3`,
};

export const useThemeMusic = ({ themeType, musicEnabled }: UseThemeMusicProps) => {
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current.unload();
      soundRef.current = null;
    }

    if (!musicEnabled) {
      return;
    }

    const sound = new Howl({
      src: [MUSIC_MAP[themeType]],
      loop: true,
      volume: 0.5,
      html5: true,
    });

    sound.play();
    soundRef.current = sound;

    return () => {
      if (soundRef.current) {
        soundRef.current.stop();
        soundRef.current.unload();
      }
    };
  }, [themeType, musicEnabled]);
};
