import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import { styled } from "@mui/material/styles";

const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  color: "#fff",
  zIndex: theme.zIndex.modal + 1,
}));

export interface LoaderPropsTypes {
  loading: boolean;
}

function Loader({ loading }: LoaderPropsTypes) {
  return (
    <StyledBackdrop open={loading}>
      <CircularProgress color="inherit" />
    </StyledBackdrop>
  );
}

export default Loader;
