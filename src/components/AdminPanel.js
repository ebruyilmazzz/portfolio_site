import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Alert,
} from '@mui/material';
import axios from 'axios';

const AdminPanel = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/contact');
      setMessages(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Mesajları getirme hatası:', error);
      setError('Mesajlar yüklenirken bir hata oluştu');
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ mt: 4, px: 2 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Gelen Mesajlar
        </Typography>
        
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Tarih</TableCell>
                <TableCell>İsim</TableCell>
                <TableCell>E-posta</TableCell>
                <TableCell>Mesaj</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {messages.map((message) => (
                <TableRow key={message._id}>
                  <TableCell>{formatDate(message.date)}</TableCell>
                  <TableCell>{message.name}</TableCell>
                  <TableCell>{message.email}</TableCell>
                  <TableCell>{message.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {messages.length === 0 && (
          <Typography sx={{ mt: 2, textAlign: 'center' }}>
            Henüz mesaj bulunmuyor.
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default AdminPanel;
