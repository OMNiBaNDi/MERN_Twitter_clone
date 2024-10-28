import express from "express"; //node.js framework that helps build web servers and API's

const app = express(); // creating instance of express server, allowing us to define routes, middleware and start server

/*
- A GET route is defined for the root URL
 ("/"), which sends back the message "Server is ready" when accessed.
*/
app.get("/", (req, res) => {
  res.send("Server is ready");
});

//This line starts the Express server and tells it to listen for incoming requests on port 8000. The listen()
//method binds and listens for connections on the specified port.
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
