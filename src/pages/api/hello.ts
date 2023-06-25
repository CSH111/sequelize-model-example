// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { BelongsTo, HasMany, Op } from "sequelize";

import { Possession, User } from "../../../db/models";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const xx = await User.findAll({
    include: {
      model: Possession,
      // association: new HasMany(User, Possession, { sourceKey: "id", foreignKey: "user_id" }),
      // attributes: ["name", "user_id"],
      // where: { name: { [Op.like]: "%계%" } },
    },
  });

  res.status(200).json({ data: xx });
}
