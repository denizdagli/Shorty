exports.landingPage = (req, res) => {
    res.status(200).json({
        message: 'Welcome to the landing page!',
    });
}

exports.loginPage = (req, res) => {
    res.status(200).json({
        message: 'Welcome to the login page!',
    });
}

exports.registerPage = (req, res) => {
    res.status(200).json({
        message: 'Welcome to the register page!',
    });
}

exports.homePage = (req, res) => {
    res.status(200).json({
        message: 'Welcome to the home page!',
    });
}
