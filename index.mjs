import express from "express";
import dotenv from "dotenv";
import articleRoute from "./routes/article.mjs";

dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const articles = [
    { title: "Article 1", createdAt: new Date(), desc: "First article" },
    { title: "Article 2", createdAt: new Date(), desc: "Article two" },
  ];
  res.render("articles/index", { articles: articles });
});
app.use("/articles", articleRoute);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
