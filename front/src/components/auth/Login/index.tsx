import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Box, Button, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import useStyles from "./useStyles";
import { login } from "../../../apis/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

interface loginProps {
  toggleRotate: () => void;
}

interface loginFormType {
  username: string;
  password: string;
}

const loginFormSchema = yup
  .object()
  .shape({
    username: yup.string().min(3).max(32).required(),
    password: yup.string().min(6).max(20).required(),
  })
  .required();

const Login: FC<loginProps> = ({ toggleRotate }) => {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    reValidateMode: "onSubmit",
  });

  const [loading, setLoading] = useState(false);

  const handleLogin = (formData: loginFormType) => {
    setLoading(true);
    login(formData)
      .then(() => toast.success("login successfully"))
      .finally(() => setLoading(false));
  };

  return (
    <Box
      className={classes.container}
      component={"form"}
      onSubmit={handleSubmit(handleLogin)}
    >
      <Box className={classes.content}>
        <TextField
          label="enter your username"
          {...register("username", {
            onChange: () => clearErrors("username"),
          })}
          error={!!errors.username}
          helperText={<p>{errors.username?.message}</p>}
        />

        <TextField
          label="enter your password"
          {...register("password", {
            onChange: () => clearErrors("password"),
          })}
          type="password"
          error={!!errors.password}
          helperText={<p>{errors.password?.message}</p>}
        />
      </Box>

      <Box className={classes.buttonsContainer}>
        <LoadingButton
          color="primary"
          variant="contained"
          type="submit"
          loading={loading}
        >
          login
        </LoadingButton>

        <Button onClick={() => (loading ? null : toggleRotate())} disableRipple>
          create an acount
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
