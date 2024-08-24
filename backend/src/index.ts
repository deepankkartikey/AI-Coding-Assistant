import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//connections and listeneres
const PORT = process.env.PORT || 4999;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log("Server Open & Connected To Database 🤝")
    );
  })
  .catch((err) => console.log(err));


// app.listen(PORT, () =>
//   console.log("Server Open 🤟")
// );

// app.get("/hello", (req, res, next)=>{
//   return res.send("Hello API!")
// })