import { forwardRef, Ref } from 'react';
import { useRouter } from 'next/router';
import { generatePath } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { RECIPE_PAGE } from '../../constants/pathnames';
import useStyles from './styles';

interface Props {
  name: string,
  id: number
}

const RecipeCard = ({ name, id }: Props) => {
  const router = useRouter()
  const { classes } = useStyles()

  const goToRecipePage = () => {
    const path = generatePath(RECIPE_PAGE, { id: id.toString() })
    router.push(path)
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={goToRecipePage} size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default RecipeCard