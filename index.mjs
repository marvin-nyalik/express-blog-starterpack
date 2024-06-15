import express from "express";
import dotenv from "dotenv";
import indexRoute from './routes/index.mjs';
import usersRoute from './routes/users.mjs';


dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();

app.use('/', indexRoute);
app.use('/users', usersRoute);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
