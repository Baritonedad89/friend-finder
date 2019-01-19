const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


// make sure to put this before requires of data 
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('../app/routing/apiRoutes')(app);
require('../app/routing/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}!`);
})

module.e