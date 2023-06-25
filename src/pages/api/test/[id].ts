import { NextApiRequest, NextApiResponse } from "next";
const sleep = (ms: any) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    if (typeof req.query.sleep != "undefined") {
      await sleep(Number(req.query.sleep)).then(() => console.log("Do something..."));
      res.status(200).json({ result: Number(req.query.id) ** 2 });
      return;
    }

    res.status(200).json({ result: Number(req.query.id) ** 2 });
  }
}
