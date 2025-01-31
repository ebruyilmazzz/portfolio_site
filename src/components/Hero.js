import React from 'react';
import { Box, Container, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const scrollToContact = () => {
    const contactSection = document.getElementById('iletisim');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #000428 0%, #004e92 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 50%)',
          pointerEvents: 'none',
        }
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: '#7fffd4',
                fontWeight: 500,
                mb: 1,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <CodeIcon sx={{ fontSize: '1.2rem' }} /> FULL-STACK DEVELOPER
            </Typography>

            <Typography
              component="h1"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 700,
                color: 'white',
                mb: 2,
                lineHeight: 1.2
              }}
            >
              Merhaba, Ben{' '}
              <Box
                component="span"
                sx={{
                  color: '#7fffd4',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: '#7fffd4',
                    opacity: 0.5
                  }
                }}
              >
                Ebru Yılmaz
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '600px',
                mb: 4,
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.6
              }}
            >
              Modern ve kullanıcı dostu web uygulamaları geliştiriyorum. Yaratıcı çözümler ve yenilikçi teknolojilerle projelerinizi hayata geçiriyorum.
            </Typography>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button
                variant="contained"
                onClick={scrollToContact}
                sx={{
                  backgroundColor: '#7fffd4',
                  color: '#000428',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  py: 1.5,
                  px: 4,
                  '&:hover': {
                    backgroundColor: '#5fffc4',
                  },
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                İletişime Geç
                <ArrowForwardIcon sx={{ fontSize: '1.2rem' }} />
              </Button>
            </motion.div>
          </motion.div>
        </Box>
      </Container>

      {/* Dekoratif arka plan elementleri */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(100,255,218,0.1) 0%, rgba(100,255,218,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'pulse 4s infinite',
          '@keyframes pulse': {
            '0%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.2)' },
            '100%': { transform: 'scale(1)' },
          },
        }}
      />
    </Box>
  );
};

export default Hero;
