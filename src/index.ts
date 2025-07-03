import "dotenv/config";
import express, {Request, Response} from "express";
import { db } from "./db/drizzle";
import { usersTable, todosTable } from "db/schema";
import https from "https";

const app = express();
app.use(express.json());
// const server = https.createServer(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});

app.get("/healthcheck", (req: Request, res: Response) => {
    try {
        res.status(200).send();
    } catch (error) {
        res.status(500).send();
    }
})

app.get("/api/v1/todos", async(req: Request, res: Response) => {
    try {
        console.log("Fetching all todos");
        const allTodos = await db.select().from(todosTable);
        res.json(allTodos)
    } catch (error) {
        console.error("Error fetching todos:", error);
        res.status(500).send();
    }
})

app.get("/api/v1/todos/:id", (req: Request, res: Response) => {
    try {
        res.send("GET TODO BY ID");
    } catch (error) {
        res.status(500).send();
    }
})

app.post("/api/v1/todos/", (req: Request, res: Response) => {
    try {
        console.log(typeof req.body);
        console.log(req.body);
        res.send("POST CREATE TODO");
    } catch (error) {
        res.status(500).send();
    }
})

app.patch("/api/v1/todos/:id", (req: Request, res: Response) => {
    try {
        res.send("UPDATE TODO");
    } catch (error) {
        res.status(500).send();
    }
})

app.put("/api/v1/todos/:id", (req: Request, res: Response) => {
    try {
        res.send("PUT TODO");
    } catch (error) {
        res.status(500).send();
    }
})

app.delete("/api/v1/todos/:id", (req: Request, res: Response) => {
    try {
        res.send("DELETE TODO");
    } catch (error) {
        res.status(500).send();
    }
})