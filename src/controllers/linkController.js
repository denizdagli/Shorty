const Link = require('../models/Link');
const { generateCode } = require('../utils/code');


exports.getPage = (req, res) => {
  const shortUrl = null;
  res.render('index', { shortUrl });
};

exports.createLink = async (req, res) => {
  try {
    const url = req.body.url;
    const code = generateCode(8);
    const link = new Link({ /* code: code, */ url: url });
    await link.save();
    const shortUrl = `http://${process.env.DB_HOST}:${process.env.PORT}/${code}`;

    //res.render('index', { shortUrl: shortUrl, url: url });
    res.status(200).json({
      "shortUrl": shortUrl,
      "url": url
    });
    console.log("kısa:",shortUrl,"original:", url);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

exports.redirect = async (req, res) => {
  try {
    const code = req.params.code;
    const link = await Link.findById({ /* code: code */ _id });
    if (!link) {
      return res.status(404).send('Link not found');
    }
    return res.redirect(link.url);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};
