import { useSnackbar } from "notistack";

const UseCustomSnackbar = () => {
  const { enqueueSnackbar, ...others } = useSnackbar();

  const showSnackbar = (message, style, options = {}) => enqueueSnackbar({message, style}, options);

  return {
    showSnackbar, ...others
  };
};

export default UseCustomSnackbar;
