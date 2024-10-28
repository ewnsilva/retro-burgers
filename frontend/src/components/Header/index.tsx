import { Fastfood } from "@mui/icons-material";
import { Typography } from "@mui/material";

export const Header = (): JSX.Element => {
  return (
    <header
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
      }}
    >
      <Fastfood fontSize="large" />
      <Typography variant="h4" ml={1}>
        Retro-Burgers
      </Typography>
    </header>
  );
};
