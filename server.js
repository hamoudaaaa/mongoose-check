const express = require("express");
const app = express();
const connectDB = require("./Config/connectDB");
const contactRouter = require("./Route/contact");

connectDB();
app.use(express.json());

app.use("/api/contacts", contactRouter);
const port = 5000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
