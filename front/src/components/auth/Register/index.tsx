import { FC, useState } from "react";
import { useForm } from "react-hook-form";

import { Box, Button, TextField } from "@mui/material";

import useStyles from "./useStyles";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { LoadingButton } from "@mui/lab";
import { register as registerApi } from "../../../apis/auth";
import { authFormSchema } from "../../../schemas/auth";

interface registerProps {
  toggleRotate: () => void;
}

interface loginFormType {
  username: string;
  password: string;
}

const Register: FC<registerProps> = ({ toggleRotate }) => {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({
    resolver: yupResolver(authFormSchema),
    reValidateMode: "onSubmit",
  });

  const [loading, setLoading] = useState(false);

  const handleRegister = (formData: loginFormType) => {
    setLoading(true);
    registerApi(formData)
      .then(() => {
        toast.success("register successfully, login with your account");
        setTimeout(() => {
          toggleRotate();
        }, 500);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Box
      className={classes.container}
      component={"form"}
      onSubmit={handleSubmit(handleRegister)}
    >
      <Box className={classes.content}>
        <TextField
          label="enter your username"
          {...register("username", {
            onChange: () => clearErrors("username"),
          })}
          error={!!errors.username}
          helperText={<span>{errors.username?.message}</span>}
        />

        <TextField
          label="enter your password"
          {...register("password", {
            onChange: () => clearErrors("password"),
          })}
          type="password"
          error={!!errors.password}
          helperText={<span>{errors.password?.message}</span>}
        />
      </Box>

      <Box className={classes.buttonsContainer}>
        <LoadingButton
          color="primary"
          variant="contained"
          type="submit"
          loading={loading}
        >
          register
        </LoadingButton>

        <Button
          onClick={() => (loading ? null : toggleRotate())}
          disableRipple
          variant="text"
        >
          login with your acount
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
