import { Request, Response } from "express";
import generateWish from "./helpers/fetchWish";

export function generateWishRequest(req: Request, res: Response) {
   const { name, sender } = req.query;
   const wish = generateWish(name as string, sender as string);
   res.send({
      success: true,
      message: "Birthday wish generated successfully",
      data: {
         wish,
         metaData: {
            name,
            sender,
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(),
         },
      },
   });
}
