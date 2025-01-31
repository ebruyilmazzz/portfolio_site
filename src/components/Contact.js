import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Snackbar,
  Alert,
  CircularProgress,
  Paper,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5001/api/contact', {
        name: formData.name,
        email: formData.email,
        message: formData.message
      });

      if (response.status === 201) {
        setSnackbar({
          open: true,
          message: 'Mesajınız başarıyla gönderildi!',
          severity: 'success'
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Hata:', error);
      setSnackbar({
        open: true,
        message: error.response?.data?.message || 'Bir hata oluştu',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: <LinkedInIcon sx={{ fontSize: 30 }} />,
      url: 'https://www.linkedin.com/in/ebruyilmaz05',
      label: 'LinkedIn'
    },
    {
      icon: <GitHubIcon sx={{ fontSize: 30 }} />,
      url: '#',
      label: 'GitHub'
    },
    {
      icon: <EmailIcon sx={{ fontSize: 30 }} />,
      url: 'mailto:your.email@example.com',
      label: 'Email'
    }
  ];

  return (
    <Box
      id="iletisim"
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
            İletişime Geç
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    backgroundColor: 'white',
                    borderRadius: 2,
                  }}
                >
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Adınız"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '&:hover fieldset': {
                                borderColor: '#2196f3',
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="E-posta Adresiniz"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '&:hover fieldset': {
                                borderColor: '#2196f3',
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Mesajınız"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          multiline
                          rows={4}
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '&:hover fieldset': {
                                borderColor: '#2196f3',
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          disabled={loading}
                          sx={{
                            py: 1.5,
                            background: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
                            '&:hover': {
                              background: 'linear-gradient(45deg, #1976d2 30%, #1ba9d2 90%)',
                            },
                          }}
                          endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                        >
                          Gönder
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    backgroundColor: 'white',
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 600, textAlign: 'center', mb: 3 }}
                  >
                    Sosyal Medya
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: 2,
                      mb: 4
                    }}
                  >
                    {socialLinks.map((link, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <IconButton
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: '#2196f3',
                            '&:hover': {
                              color: '#1976d2',
                              backgroundColor: 'rgba(33, 150, 243, 0.1)',
                            },
                          }}
                          aria-label={link.label}
                        >
                          {link.icon}
                        </IconButton>
                      </motion.div>
                    ))}
                  </Box>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    align="center"
                    sx={{ mt: 2 }}
                  >
                    Sosyal medya üzerinden de benimle iletişime geçebilirsiniz.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;
