import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.send("Olá NLW 05");
});

app.post("/", (request, response) => {
  return response.json({ message: "Usuário salvo com sucesso!" });
});

app.listen(3000, () => console.log("Server is running on port 3000"));
