const cors = require('cors');

module.exports = (app) => {
    // Use Cors for Global
    app.use(cors(
        {
            origin: [
                'https://effortless-seahorse-90ef87.netlify.app',
                'https://week-17-suryafaturohman.web.app/',
                'http://localhost:5173'
            ]
        }
    ));
}