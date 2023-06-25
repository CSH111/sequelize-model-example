import { NextApiRequest, NextApiResponse } from "next";
const sleep = (ms: any) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // await sleep(Number(Math.random() * 1000));
    res.status(200).json({ result: Math.random() });
  }
}
