const { config } = require("dotenv");
const mongoose = require(`mongoose`);

exports.dbConnection = async () => {
    mongoose.set(`strictQuery`, true);
    await mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log(`db Connected`)
    })
    .catch((err) => {
        console.log(err)
    })
}