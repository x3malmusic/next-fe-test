import type { NextApiRequest, NextApiResponse } from 'next'

export interface IRecipe {
  id: number,
  name: string,
  details: string,
  img: string,
  prepTime: string,
  cookTime: string,
  totalTime: string
}

const recipes = {
  0: {
    id: 0,
    name: 'Whole-Grain Banana Bread',
    details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    prepTime: '10 mins',
    cookTime: '1 hr to 1hr 15 mins',
    totalTime: '1hr 10 mins'
  },
  1: {
    id: 1,
    name: 'Banana Cake',
    details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    prepTime: '10 mins',
    cookTime: '1 hr to 1hr 15 mins',
    totalTime: '1hr 10 mins'
  },
}

interface Data {
  recipe: IRecipe
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query
  res.status(200).json(recipes[id as string] || {})
}
