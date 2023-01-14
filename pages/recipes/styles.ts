import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    gap: theme.spacing(2),
  },
}))

export default useStyles