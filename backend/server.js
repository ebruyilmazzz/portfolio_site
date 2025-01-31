const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Bağlantısı
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/portfolio', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ MongoDB bağlantısı başarılı!');
  } catch (err) {
    console.error('❌ MongoDB bağlantı hatası:', err.message);
    process.exit(1);
  }
};

connectDB();

// Contact Model
const Contact = require('./models/Contact');

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend API çalışıyor!' });
});

// Contact routes
app.post('/api/contact', async (req, res) => {
  try {
    console.log('📨 Yeni mesaj alındı:', req.body);
    
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Lütfen tüm alanları doldurun'
      });
    }
    
    console.log('📝 Contact modeli oluşturuluyor:', { name, email, message });
    
    const contact = new Contact({
      name,
      email,
      message,
      date: new Date()
    });
    
    console.log('💾 MongoDB\'ye kaydediliyor...');
    const savedContact = await contact.save();
    console.log('✅ MongoDB\'ye kaydedildi:', savedContact);
    
    res.status(201).json({ 
      success: true,
      message: 'Mesajınız başarıyla kaydedildi',
      data: savedContact
    });
  } catch (error) {
    console.error('❌ Hata detayı:', error);
    res.status(500).json({ 
      success: false,
      message: 'Bir hata oluştu', 
      error: error.message 
    });
  }
});

app.get('/api/contact', async (req, res) => {
  try {
    console.log('📋 Tüm mesajlar istendi');
    const messages = await Contact.find().sort({ date: -1 });
    console.log(`✅ ${messages.length} mesaj bulundu`);
    res.json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    console.error('❌ Mesajları getirme hatası:', error);
    res.status(500).json({ 
      success: false,
      message: 'Bir hata oluştu', 
      error: error.message 
    });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server ${PORT} portunda çalışıyor`);
  console.log(`📡 API endpoint: http://localhost:${PORT}/api`);
});
