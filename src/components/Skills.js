import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import JavascriptIcon from '@mui/icons-material/Javascript';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

const skills = [
  { 
    name: 'HTML & CSS', 
    level: 90,
    icon: <WebIcon sx={{ fontSize: 40, color: '#2196f3' }} />,
    description: 'Modern ve responsive web tasarımı'
  },
  { 
    name: 'JavaScript', 
    level: 85,
    icon: <JavascriptIcon sx={{ fontSize: 40, color: '#f7df1e' }} />,
    description: 'ES6+ ve modern JavaScript özellikleri'
  },
  { 
    name: 'React', 
    level: 80,
    icon: <CodeIcon sx={{ fontSize: 40, color: '#61dafb' }} />,
    description: 'Component tabanlı UI geliştirme'
  },
  { 
    name: 'Node.js', 
    level: 75,
    icon: <StorageIcon sx={{ fontSize: 40, color: '#68a063' }} />,
    description: 'Backend geliştirme ve API tasarımı'
  },
  { 
    name: 'TypeScript', 
    level: 70,
    icon: <DeveloperModeIcon sx={{ fontSize: 40, color: '#3178c6' }} />,
    description: 'Tip güvenli uygulama geliştirme'
  },
  { 
    name: 'Python', 
    level: 65,
    icon: <IntegrationInstructionsIcon sx={{ fontSize: 40, color: '#4584b6' }} />,
    description: 'Veri analizi ve backend geliştirme'
  },
];

const Skills = () => {
  return (
    <Box
      id="yetenekler"
      sx={{
        py: 8,
        backgroundColor: 'transparent',
        background: 'linear-gradient(135deg, #000428 0%, #004e92 100%)',
        pt: { xs: 16, sm: 8 },
        position: 'relative',
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            align="center"
            sx={{
              mb: 6,
              fontWeight: 'bold',
              color: 'white',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            Yeteneklerim
          </Typography>

          <Grid container spacing={4}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      height: '100%',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                      }}
                    >
                      {skill.icon}
                      <Typography
                        variant="h6"
                        sx={{
                          mt: 2,
                          mb: 1,
                          fontWeight: 600,
                        }}
                      >
                        {skill.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {skill.description}
                      </Typography>
                      <Box
                        sx={{
                          width: '100%',
                          height: 4,
                          backgroundColor: 'rgba(0,0,0,0.08)',
                          borderRadius: 2,
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          style={{
                            height: '100%',
                            background: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
                            borderRadius: 4,
                            position: 'absolute',
                          }}
                        />
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{ mt: 1, fontWeight: 500 }}
                      >
                        {skill.level}%
                      </Typography>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
