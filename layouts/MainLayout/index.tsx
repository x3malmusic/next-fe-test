import Box from "@mui/material/Box"
import Header from "../../components/Header"

import useStyles from "./styles"

const MainLayout = ({ children }) => {
  const { classes } = useStyles()

  return(
    <Box className={classes.root}>
      <Header />
      <Box className={classes.content}>
        {children}
      </Box>
    </Box>
  )
}

export default MainLayout