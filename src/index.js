const express = require('express');

const { ServerConfig, Logger } = require('./config'); // no need to specify index.js it'll automatically fetch

const app = express();

const apiRoutes = require('./routes/index');

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server Setup Completely On PORT ${ServerConfig.PORT}`);
    Logger.info("Successfully started the server", {})
});