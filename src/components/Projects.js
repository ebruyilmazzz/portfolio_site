import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'React ve Node.js kullanarak geliştirdiğim kişisel portfolyo websitesi. Material-UI ile modern ve responsive tasarım, MongoDB ile mesaj yönetimi.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'Node.js', 'MongoDB', 'Material-UI'],
    github: 'https://github.com/ebruyilmazzz/site_portfolio',
    demo: 'http://localhost:3000'
  },
  {
    title: 'Coffee Heaven',
    description: 'PHP ile geliştirilmiş modern bir kafe sitesi. Menü yönetimi, rezervasyon sistemi ve admin paneli içerir.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['PHP', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/ebruyilmazzz/Coffee-Heaven-Site-Proje',
  },
  {
    title: 'Çizgi İzleyen Robot',
    description: 'Arduino tabanlı çizgi izleyen robot projesi. Sensör entegrasyonu ve motor kontrolü içerir.',
    image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Arduino', 'C++'],
    github: 'https://github.com/ebruyilmazzz/Cizgi-izleyen-Robot',
  },
  {
    title: 'Tatlı Sitesi',
    description: 'PHP ile geliştirilmiş yönetim panelli tatlı sitesi. Ürün yönetimi ve sipariş takibi özellikleri içerir.',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['PHP', 'MySQL', 'JavaScript'],
    github: 'https://github.com/ebruyilmazzz/Tatli-Sitesi',
  },
  {
    title: 'Ürün Paneli',
    description: 'PHP tabanlı ürün yönetim paneli. CRUD işlemleri ve kullanıcı yetkilendirme sistemi içerir.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['PHP', 'MySQL'],
    github: 'https://github.com/ebruyilmazzz/Urun_Paneli',
  }
];

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      id="projeler"
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #112240 0%, #0a192f 100%)',
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
              mb: 6,
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
            Projelerim
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        objectFit: 'cover',
                        filter: 'brightness(0.8)',
                        transition: 'filter 0.3s ease-in-out',
                        '&:hover': {
                          filter: 'brightness(1)',
                        },
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h3"
                        sx={{
                          color: '#ccd6f6',
                          fontWeight: 600,
                          mb: 2,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        sx={{
                          mb: 2,
                          color: '#8892b0',
                          fontSize: '0.9rem',
                          lineHeight: 1.6,
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech, i) => (
                          <Chip
                            key={i}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(100, 255, 218, 0.1)',
                              color: '#64ffda',
                              fontSize: '0.75rem',
                              '&:hover': {
                                backgroundColor: 'rgba(100, 255, 218, 0.2)',
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <IconButton
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: '#ccd6f6',
                          '&:hover': {
                            color: '#64ffda',
                          },
                        }}
                      >
                        <GitHubIcon />
                      </IconButton>
                      {project.demo && (
                        <IconButton
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: '#ccd6f6',
                            '&:hover': {
                              color: '#64ffda',
                            },
                          }}
                        >
                          <LaunchIcon />
                        </IconButton>
                      )}
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
