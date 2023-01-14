import { FC } from "react"
import { Box } from "@mui/material/"
import { Fade } from "@mui/material"

import RecipeCard from "../../containers/RecipeCard"
import { ICategory } from '../api/categories'
import { getCategories } from "../../services/api"
import useStyles from "./styles"

interface IPageProps {
  categories: ICategory[]
}

const Recipes: FC<IPageProps> = ({ categories }) => {
  const { classes } = useStyles()

  return (
    <Box className={classes.root}>
      {categories.map((c, i) =>
        <Fade key={c.id} in timeout={500 * (i + 1)}>
          <div>
            <RecipeCard id={c.id} name={c.name} />
          </div>
        </Fade>
      )}
    </Box>
  )
}

export const getServerSideProps = async () => {
  const data = await getCategories()

  return { props: { categories: data } }
}

export default Recipes
