const express = require("express");
const http = require("http");
const path = require("path");

const { Server, Socket } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  connectionStateRecovery: {},
  cors: {
    origin: "http://localhost:5173",
  },
});

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket = Socket) => {
  console.info("A user connected!");

  // socket.emit("chat message", {
  //   user: {
  //     uid: "5fd22343-98c0-4476-af74-5b6e3a82648f",
  //     name: "Server",
  //     avatar: "",
  //   },
  //   text: "Wellcome",
  //   timestamp: new Date().toLocaleTimeString(),
  //   type: "status",
  // });

  socket.on("disconnect", () => {
    console.info("User disconnected");
  });

  socket.on("chat message", (payload) => {
    console.log(`message:  ${JSON.stringify(payload)}`);
    io.emit("chat message", payload);
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
