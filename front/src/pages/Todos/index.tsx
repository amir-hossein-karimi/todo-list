import { Box, Typography } from "@mui/material";

import useStyles from "./useStyles";

const Todos = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h1">TODOS</Typography>

      <Box className={classes.content}>
        {/* {categoriesLoading ? (
          <Box className={classes.centerBox}>
            <CircularProgress color="secondary" />
          </Box>
        ) : error ? (
          <Box className={classes.centerBox}>
            <Box className={classes.errorContainer}>
              <Typography color="red">has error</Typography>

              <LoadingButton
                color="primary"
                variant="contained"
                loading={categoriesLoading}
                onClick={() => {
                  setError(false);
                  getCategories(true);
                }}
              >
                try again
              </LoadingButton>
            </Box>
          </Box>
        ) : ( */}
        <Box className={classes.todosListContainer}></Box>
        {/* )} */}
      </Box>
    </Box>
  );
};

export default Todos;
