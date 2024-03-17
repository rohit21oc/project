// const express = require("express");
// const app = express();
// const port = 5500;

// const { v4: uuidv4 } = require('uuid');


// app.use(express.urlencoded({ extended: true }));

// const path = require("path");
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// app.use(express.static(path.join(__dirname, "public")));

// let posts = [{
//         id : uuidv4(),
//         username: "Rohit kumar",
//         content: "I got selected in my first internship"
//     },
//     {
//         id : uuidv4(),
//         username: "Sachin kumar",
//         content: "I got selected in my first internship"
//     },
//     {
//         id : uuidv4(),
//         username: "Sumit kumar",
//         content: "I got selected in my first internship"
//     },
//     {
//         id : uuidv4(),
//         username: "Lakshman kumar",
//         content: "I got selected in my first internship"
//     }
// ];

// app.get("/posts", (req, res) => {
//     res.render("index.ejs", { posts });
// });

// app.get("/posts/new", (req, res) => {
//     res.render("newPost.ejs");
// });

// app.post("/posts", (req, res) => {
//     let { username, content } = req.body;
//     let id = uuidv4();
//     posts.push({id, username, content });
//     // res.send("New post uploaded successfully");
//     res.redirect("/posts")
// });

// app.get("/posts/:id",(req,res) =>{
//     let {id} = req.params;
//     console.log(id);
//     let post = posts.find((p) =>id == p.id);
//     res.render("show.ejs", {post});
// })

// app.patch("/post/:id",(req,res) =>{
//     let {id} = req.params;
//     let newContent = req.body.content;
//     let post = posts.find((p) =>id == p.id);
//     post.content = newContent;
//     console.log(post);
//     res.send("pathch is working")
// });

// app.listen(port, () => {
//     console.log("App is listening on port", port);
// });





const express = require("express");
const app = express();
const port = 3000;

const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override")

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [{
        id : uuidv4(),
        username: "Rohit kumar",
        content: "I got selected in my first internship"
    },
    {
        id : uuidv4(),
        username: "Sachin kumar",
        content: "I got selected in my first internship"
    },
    {
        id : uuidv4(),
        username: "Sumit kumar",
        content: "I got selected in my first internship"
    },
    {
        id : uuidv4(),
        username: "Lakshman kumar",
        content: "I got selected in my first internship"
    }
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("newPost.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({id, username, content });
    res.redirect("/posts")
});

app.get("/posts/:id",(req,res) =>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
});

app.patch("/posts/:id",(req,res) =>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts")
    // res.send("It's Working")
});

app.get("/posts/:id/edit",(req,res) =>{
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});
app.delete("/posts/:id",(req,res)=>{
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts")

})

app.listen(port, () => {
    console.log("App is listening on port", port);
});
