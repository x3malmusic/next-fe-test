import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles()((theme) => ({
  root: {
    maxWidth: 960,
    width: '100%',
    margin: '0 auto',
  },
  contentContainer: {
    display: 'flex',
    gap: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(8),
  },
  infoContainer: {
    display: 'flex',
    marginTop: theme.spacing(2),
    gap: theme.spacing(2),
  },
  prepTime: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  bold: {
    fontWeight: 'bold'
  },
  controls: {
    marginTop: theme.spacing(1),
    display: 'flex',
    gap: theme.spacing(2),
    alignItems: 'center',
  },
}))

export default useStyles