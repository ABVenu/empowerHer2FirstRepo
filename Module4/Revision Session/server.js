import express from "express";
import fs from "fs";
const app = express();
app.use(express.json());

/// Define the routes
/// The below one are Test Routes
/// Get Reguest First
app.get("/", (req, res) => {
  res.send("This is First Get Request");
});

app.get("/home", (req, res) => {
  res.send(`<h1 style="color:green">This is Home Page</h1>`);
});

app.get("/aboutus", (req, res) => {
  res.send("This is About Us Page");
});

app.post("/contactus", (req, res) => {
  res.send("This is Conatct Us Page");
});

app.patch("/patch", (req, res) => {
  res.send("This is path request");
});

app.delete("/delete", (req, res) => {
  res.send("This is Delete Request");
});

/// The below one are TODO CRUD Routes
/// Get All Todos
app.get("/todos", (req, res) => {
  let rawData = fs.readFileSync("./db.json", "utf-8");
  /// Always fs will give string as output
  console.log("data", rawData);
  /// we need to parse to convert string to object
  let parsedData = JSON.parse(rawData);
  console.log("parsedData", parsedData);
  let todos = parsedData.todos;
  console.log("todos", todos);
  res.json({ message: "Todos List", data: todos });
});

/// Add A Todo
app.post("/add-todo", (req, res) => {
  /// Get the todo from the req
  //console.log("Req Body", req.body)
  /// 1. read the data from db.json
  /// 2. Parse it
  /// 3. Access todos
  /// 4. Push req.body todo also add status false and one id
  /// 5. Update new data in the db.json
  let rawData = fs.readFileSync("./db.json", "utf-8"); ///1.
  let parsedData = JSON.parse(rawData); /// 2.
  let todos = parsedData.todos; ///3.
  let newId = todos[todos.length - 1].id + 1;
  let newTodo = { id: newId, title: req.body.title, status: false };
  console.log("newTodo", newTodo);
  todos.push(newTodo); ///4.
  console.log("todos array updated", todos);
  /// Before pushing into db.json, stringify the data
  let stringiffiedData = JSON.stringify(parsedData);
  fs.writeFileSync("./db.json", stringiffiedData);
  res.json({ message: "Todo Added" });
});

/// Delete Todo. --> Todo Id sending thrugh Req.Body
app.delete("/delete-todo", (req, res) => {
  let todoIdToBeDeleted = req.body.id;
  /// 1. read the data from db.json
  /// 2. Parse it
  /// 3. Access todos
  // 4.Filter out all the todos except todo of todoId present in the body
  // 5. Upadte the Filtered todo in db.json again

  let rawData = fs.readFileSync("./db.json", "utf-8"); ///1.
  let parsedData = JSON.parse(rawData); /// 2.
  let todos = parsedData.todos; ///3.
  let filteredTodos = todos.filter((el) => el.id != todoIdToBeDeleted);
  if (filteredTodos.length == todos.length) {
    /// which means do difference in filtered and original todos
    //  which means todo not found
    res.json({ message: "Todo Not Found" });
    return;
  }
  console.log("filteredTodos", filteredTodos);
  parsedData.todos = filteredTodos;
  /// Before pushing into db.json, stringify the data
  let stringiffiedData = JSON.stringify(parsedData);
  fs.writeFileSync("./db.json", stringiffiedData);
  res.json({ message: "Todo Deletd" });
});

/// The below is craeting a connection that accepts request to the PORT 8080,
app.listen(8080, () => {
  console.log("Server started");
});
