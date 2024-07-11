const dotenv = require("dotenv");
dotenv.config();                      // To setup env. variable in place

module.exports = {                    // isse chize dusri file se export hoti hai
    PORT: process.env.PORT
}

