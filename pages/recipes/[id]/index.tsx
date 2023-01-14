import { FC } from "react"
import Image from "next/image"
import { Box, Divider, Typography, Button } from "@mui/material"

import { IRecipe } from "../../api/recipes/[id]"
import { getRecipeById } from "../../../services/api"
import TimeIcon from '../../../assets/images/hourglass.png'
import AppButton from "../../../components/AppButton"
import useStyles from "./styles"

interface IPageProps {
  recipe: IRecipe
}

const Recipes: FC<IPageProps> = ({ recipe }) => {
  const { classes } = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.contentContainer}>
        <Box>
          <Typography className={classes.title} variant="h4">
            {recipe.name}
          </Typography>

          <Typography>
            {recipe.details}
          </Typography>

          <Box className={classes.infoContainer}>
            <Box className={classes.prepTime}>
              <Image
                src={TimeIcon}
                alt=''
                priority
              />

              <Box>
                <Typography className={classes.bold}>
                  PREP
                </Typography>
                <Typography className={classes.bold}>
                  {recipe.prepTime}
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography className={classes.bold}>
                BAKE
              </Typography>
              <Typography className={classes.bold}>
                {recipe.cookTime}
              </Typography>
            </Box>

            <Box>
              <Typography className={classes.bold}>
                TOTAL
              </Typography>
              <Typography className={classes.bold}>
                {recipe.totalTime}
              </Typography>
            </Box>
          </Box>
          
          <Divider />

          <Box className={classes.controls}>
            <Box className={classes.prepTime}>
              <Image
                src={TimeIcon}
                alt=''
                priority
              />

              <Box>
                <Typography className={classes.bold}>
                  YIELD
                </Typography>
                <Typography className={classes.bold}>
                  i loaf, 12 generous servings
                </Typography>
              </Box>
            </Box>
            <AppButton>Save Recipe</AppButton>
            <AppButton>Print</AppButton>
          </Box>
        </Box>

        <Box>
          <Image
            src={recipe.img}
            alt=''
            width={300}
            height={300}
            loading='lazy'
          />
        </Box>

      </Box>
    </Box>
  )
}

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.params
  const data = await getRecipeById(id)

  return { props: { recipe: data } }
}

export default Recipes
