const User = require('../models/User');

exports.register =  async (req, res) => {
    try {
      const { username, password, email } = req.body;
  
      // Yeni bir kullanıcı oluştur
      const newUser = new User({
        username,
        password,
        email,
      });
  
      // Kullanıcıyı veritabanına kayıt
      const savedUser = await newUser.save();
  
      res.status(201).json({ message: 'Kayıt başarılı!', user: savedUser });
    } catch (error) {
      res.status(400).json({ message: 'Kayıt işlemi başarısız oldu.', error });
    }
  };

exports.login = async (req, res) => {   
    try {
        const { email, password } = req.body;
        // Kullanıcıyı veritabanında kontrol edin
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      res.status(401).json({ message: 'Geçersiz kullanıcı adı veya şifre.' });
    } else {
      res.status(200).json({ message: 'Giriş başarılı!', user });
    }
  } catch (error) {
    res.status(500).json({ message: 'Giriş işlemi sırasında bir hata oluştu.', error });
  }
};


exports.logout = async (req, res) => {
    try {
        req.session.destroy();
        res.status(200).json({
            status: 'success',
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error,
        });
    }
}

