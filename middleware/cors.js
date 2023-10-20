const cors = require('cors');

module.exports = (app) => {
    // Use Cors for Global
    app.use(cors(
        {
            origin: ['https://tame-teal-dog-cap.cyclic.app', 'http://localhost:5173']
        }
    ));
}