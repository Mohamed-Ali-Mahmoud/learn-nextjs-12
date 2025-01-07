// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

// this page accessible at http://localhost:3000/api/random-numbers
// this page should not return any raect component, it should return json data
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ num: Math.floor(Math.random() * 10) });
}
