import express from "express";
import router from "./routes/index.js";
const app = express();
app.use(express.json());
app.use(router);

let server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Hacker news server started on port: ${server.address().port}`);
});
