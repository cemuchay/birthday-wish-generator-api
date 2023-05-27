import express from "express";
import { Request, Response } from "express";

declare global {
   namespace Express {
      interface Response {
         customResponse: {
            success: boolean;
            message: string | null;
            data: object | null;
         };
      }
   }
}
import { generateWishRequest } from "./generateWishController";

const app = express();


// Enable CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Replace * with the specific origin(s) you want to allow
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.get("/", (req, res) => {
   res.send("Hello, TypeScript Express!");
});

app.get("/generate-wish", generateWishRequest);

app.get('/hello', (req: Request, res: Response) => {
    res.customResponse = {
      success: true,
      message: 'Success message',
      data: { example: 'Data' }
    };
    res.send(res.customResponse);
  });

app.listen(3000, () => {
   console.log("Server is listening on port 3000");
});
