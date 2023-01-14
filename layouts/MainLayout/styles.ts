import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles()((theme) => ({
  root: {
  },
  content: {
    maxWidth: 1440,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    margin: '0 auto',
    marginTop: theme.spacing(8),
  }
}))

export default useStyles