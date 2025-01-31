const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    const contact = new Contact({
      name,
      email,
      message
    });

    await contact.save();
    res.status(201).json({ message: 'Mesajınız başarıyla gönderildi!' });
  } catch (error) {
    console.error('Contact save error:', error);
    res.status(500).json({ message: 'Bir hata oluştu, lütfen tekrar deneyin.' });
  }
});

module.exports = router;
