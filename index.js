import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Server listening at localhost:3000 ");
});

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello world");
});

//Exercício 2
app.get("/get-text", (req, res) => {
  const text = req.query.text;
  const invertedArr = [];

  const textArr = text.split("");

  for (let i = textArr.length - 1; i >= 0; i--) {
    invertedArr.push(textArr[i]);
  }

  res.send(`Inverted text: ${invertedArr.join("")}`);
});

//Exercício 1
app.get("/page1", (req, res) => {
  res.send(`
    <h1>Page 1</h1>
    <a href="/page2">Go to page2</a>
    `);
});

app.get("/page2", (req, res) => {
  res.send(`
    <h1>Page 2</h1>
    <a href="/page1">Go to page1</a>
    `);
});

//Exercício 3
app.post("/auth", (req, res) => {
  const { user, password } = req.body;
  const accessKey = user + user;

  if (password === accessKey) {
    res.send("User has accesses permission");
  } else {
    res.status(401).send("User does not have accesses permission");
  }
});
