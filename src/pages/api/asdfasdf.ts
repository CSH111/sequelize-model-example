import { NextApiRequest, NextApiResponse } from "next";
// import { User } from "../../../zzz/models";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // const xx = await User.findAll({});
  // console.log(xx);
  if (req.method === "GET") {
    res.status(200).json({ data: 123124124124 });
  }
}
