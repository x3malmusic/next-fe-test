import { createTheme } from '@mui/material/styles';
import createCache from "@emotion/cache";

export const muiCache = createCache({
  key: "css",
  prepend: true,
});

export const theme = createTheme({});