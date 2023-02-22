import { styled } from "@mui/material/styles";
import { Box, SwipeableDrawer } from "@mui/material";

export const StyledSwipeableDrawer = styled(SwipeableDrawer)(() => ({
  scrollbarColor: "red #D1D1D1",
  scrollbarWidth: "thin",
  overflowY: "scroll",
  scrollBehavior: "smooth",
  ".MuiPaper-root": {
    width: "365px",
    "@media(min-width:1000px)": {
      width: "400px",
    },
    "@media(max-width:415px)": {
      width: "100%",
    },
  },
  ".MuiDrawer-paperAnchorLeft": {
    "&::-webkit-scrollbar-button:single-button:vertical:decrement": {
      display: "hidden",
      height: "0px",
      backgroundImage: "unset",
      background: "transparent",
    },
    "&::-webkit-scrollbar": {
      width: "5px",
    },
    "&::-webkit-scrollbar-corner, ::-webkit-scrollbar-track": {
      borderRadius: "0px",
      background: "#D1D1D1",
    },
    "&::-webkit-scrollbar-button:single-button:vertical:increment": {
      display: "hidden",
      height: "0px",
      backgroundImage: "unset",
      background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundClip: "unset",
    },
  },
}));

export const StyledDrawerContainer = styled(Box)(() => ({
  paddingTop: "20px",
  "&::-webkit-scrollbar-button:single-button:vertical:decrement": {
    display: "hidden",
    height: "50px",
    backgroundImage: "unset",
    background: "transparent",
  },
  ".paddingDrawer": {
    width: "90%",
    margin: "0px auto",

    ".topDrawer": {
      display: "flex",
      justifyContent: "space-between",
      ".topDrawerText": {
        fontSize: "clamp(18px,2vw,72px)",
        fontWeight: "bold",
        marginLeft: "10px",
      },
      ".closeIconContainer": {
        display: "flex",
        alignItems: "center",
        svg: {
          fontSize: "18px",
        },
      },
    },
    ".containerAlert": {
      marginTop: "15px",
      ".Alert": {
        width: "auto !important",
        animation: "alertEffect .6s 2",
      },
    },
  },
  "@keyframes alertEffect": {
    "0%": {
      transform: "translate(0px, 0px)",
    },
    "10%": {
      transform: "translate(20px, 0px)",
    },
    "20%": {
      transform: "translate(0px, 0px)",
    },
    "30%": {
      transform: "translate(20px, 0px)",
    },
    "40%": {
      transform: "translate(0px, 0px)",
    },
    "50%": {
      transform: "translate(20px, 0px)",
    },
    "60%": {
      transform: "translate(0px, 0px)",
    },
    "70%": {
      transform: "translate(20px, 0px)",
    },
    "80%": {
      transform: "translate(0px, 0px)",
    },
    "90%": {
      transform: "translate(20px, 0px)",
    },
    "100%": {
      transform: "translate(0px, 0px)",
    },
  },
}));
