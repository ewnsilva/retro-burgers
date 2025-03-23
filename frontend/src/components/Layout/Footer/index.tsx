import { Box, Typography } from "@mui/material";

export const Footer = (): JSX.Element => {
  return (
    <footer
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#FA558A",
      }}
    >
      <Box display="flex" ml={"2%"} paddingY={1}>
        <Typography variant="h6" ml={1} sx={{ color: "white" }}>
          © 2024 Retro-Burguers. Todos os direitos reservados
        </Typography>
      </Box>
    </footer>
  );
};
