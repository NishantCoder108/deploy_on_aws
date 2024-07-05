import express, { Request, Response } from "express";
import path from "path";

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, "./index.html")));

app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/test", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Finally deployment and cicd pipelined done!",
        version: "1.0.0",
        author: "Nishant",
        date: new Date().toISOString(),
    });
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
