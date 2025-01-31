import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';

const About = () => {
  const skills = [
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#64ffda' }} />,
      title: 'Eğitim',
      content: 'Bilgisayar Mühendisliği mezunuyum. Sürekli kendimi geliştiriyor ve yeni teknolojileri öğreniyorum.'
    },
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: '#64ffda' }} />,
      title: 'Teknolojiler',
      content: 'React, Node.js, MongoDB, Express.js, Material-UI, PHP, MySQL gibi modern web teknolojilerini kullanıyorum.'
    },
    {
      icon: <BuildIcon sx={{ fontSize: 40, color: '#64ffda' }} />,
      title: 'Yetenekler',
      content: 'Full-stack web geliştirme, responsive tasarım, veritabanı yönetimi ve API entegrasyonu konularında deneyimliyim.'
    }
  ];

  return (
    <Box
      id="hakkimda"
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)',
        color: '#8892b0',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: '#ccd6f6',
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 4,
              textAlign: 'center',
              '&::after': {
                content: '""',
                display: 'block',
                width: '60px',
                height: '4px',
                background: '#64ffda',
                margin: '20px auto',
                borderRadius: '2px',
              }
            }}
          >
            Hakkımda
          </Typography>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            {skills.map((skill, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                      }
                    }}
                  >
                    <Box sx={{ mb: 2 }}>{skill.icon}</Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        color: '#ccd6f6',
                        mb: 2,
                        fontSize: { xs: '1.5rem', md: '1.75rem' },
                        fontWeight: 600
                      }}
                    >
                      {skill.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#8892b0',
                        lineHeight: 1.7,
                        fontSize: '1rem'
                      }}
                    >
                      {skill.content}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="body1"
              sx={{
                maxWidth: '800px',
                margin: '0 auto',
                textAlign: 'center',
                lineHeight: 1.8,
                fontSize: '1.1rem',
                color: '#8892b0'
              }}
            >
              Merhaba! Ben Ebru, tutkulu bir full-stack web geliştiricisiyim. Modern ve kullanıcı dostu web uygulamaları geliştirmekten keyif alıyorum. Her projede en iyi kullanıcı deneyimini sunmak için çaba gösteriyorum. Yeni teknolojileri öğrenmeye ve kendimi geliştirmeye her zaman açığım.
            </Typography>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
