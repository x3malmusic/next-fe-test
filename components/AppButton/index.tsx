import { FC } from "react";
import { Button } from "@mui/material";
import { ButtonProps } from "@mui/material";
import clsx from "clsx";
import useStyles from "./styles";

interface Props extends ButtonProps{
  className?: string
}

const AppButton: FC<Props> = ({ children, className, ...props }) => {
  const { classes } = useStyles();

  return <Button
    className={clsx(classes.root, className)}
    variant="contained"
    color="primary"
    {...props}
  >
    {children}
  </Button>
}

export default AppButton