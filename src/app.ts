import express, {Request, Response, NextFunction} from "express";
import morgan from "morgan";
import usersRoutes from "./routes/users";

const app = express();
app.use("/users", usersRoutes);
app.use(morgan('combined'));
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message})
})

app.listen(3000);
