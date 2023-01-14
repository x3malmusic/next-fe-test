import type { NextApiRequest, NextApiResponse } from 'next'

export interface ICategory {
  id: number,
  name: string
}

const categories = [
  {
    id: 0,
    name: 'Bread'
  },
  {
    id: 1,
    name: 'Cake'
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICategory[]>
) {
  res.status(200).json(categories)
}
