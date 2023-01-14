import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles()((theme) => ({
  headerRoot: {
  },
  navbar: {
    height: theme.spacing(8),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(6),
    maxWidth: 768,
    width: '100%',
    margin: '0 auto',
    position: 'relative',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  link: {
    lineHeight: '1.5rem',
    textDecoration: 'none',
    color: '#464646',
    textTransform: 'uppercase',
    background: 'linear-gradient(to right, transparent, transparent), linear-gradient(to right, #ff0000, #ff0000)',
    backgroundSize: '100% 3px, 0 3px',
    backgroundPosition: '100% 100%, 0 100%',
    backgroundRepeat: 'no-repeat',
    transition: 'background-size 400ms',
    '&:hover': {
      backgroundSize: '0 3px, 100% 3px',
    }
  },
  activeLink: {
    backgroundSize: '100% 3px, 100% 3px',
  },
  logo: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    position: 'absolute',
    top: 0,
    left: theme.spacing(6),
  },
  categoryContainer: {
    height: theme.spacing(8),
    background: '#fbebeb'
  },
  categories: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(4),
    maxWidth: 768,
    width: '100%',
    margin: '0 auto',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  }
}))

export default useStyles