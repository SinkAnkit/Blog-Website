import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

// In-memory data store
let posts = [
  {
    id: 1,
    title: "Quantum Computing: The Future of Processing Power",
    content:
      "Quantum computing is poised to revolutionize the tech industry by leveraging the principles of quantum mechanics to perform complex calculations at unprecedented speeds. Companies like IBM and Google are racing to develop practical quantum computers that could solve problems deemed impossible for classical systems.",
    author: "Amit Sharma",
    date: "2025-09-04T10:32:39.126637Z",
  },
  {
    id: 2,
    title: "The Evolution of Cybersecurity in a Digital Age",
    content:
      "As technology advances, so do cyber threats. With AI-driven security solutions, businesses and individuals are now equipped with better tools to combat cyberattacks. This post explores how cybersecurity strategies have evolved and what we can expect in the near future.",
    author: "Vikram Singh",
    date: "2025-09-05T15:32:30.600001Z",
  },
  {
    id: 3,
    title: "Green Energy Solutions: A Path to Sustainability",
    content:
      "Renewable energy sources like solar, wind, and hydro are becoming increasingly viable alternatives to fossil fuels. With innovations in energy storage and grid infrastructure, we are moving closer to a sustainable future.",
    author: "Rahul Iyer",
    date: "2025-09-07T14:31:35.237758Z",
  },
];

let lastId = 3;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CHALLENGE 1: GET All posts
app.get("/posts", (req, res) => {
  console.log(posts);
  res.json(posts);
});

//CHALLENGE 2: GET a specific post by id
app.get("posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
});

//CHALLENGE 3: POST a new post
app.post("/posts", (req, res) => {
  const newId = (lastId += 1);
  const post = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: new Date().toISOString(),
  };
  lastId = newId;
  posts.push(post);
  res.status(201).json(post);
});

//CHALLENGE 4: PATCH a post when you just want to update one parameter
app.patch("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: "Post not found" });

  if (req.body.title) post.title = req.body.title;
  if (req.body.content) post.content = req.body.content;
  if (req.body.author) post.author = req.body.author;

  res.json(post);
});

//CHALLENGE 5: DELETE a specific post by providing the post id.
app.delete("/posts/:id", (req, res) => {
  const index = posts.findIndex((p) => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Post not found" });

  posts.splice(index, 1);
  res.json({ message: "Post deleted" });
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
