import { ChangeEvent } from "react";

import { Fastfood, Search } from "@mui/icons-material";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";

import { IHeader } from "context";

export const Header = ({ setSearch }: IHeader): JSX.Element => {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <header
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "primary.info",
      }}
    >
      <Box display="flex" ml={"2%"} paddingY={2}>
        <Fastfood htmlColor="#FA558A" fontSize="large" />
        <Typography
          variant="h4"
          ml={1}
          sx={{
            backgroundImage: `radial-gradient(50% 50% at 50% 50%, #250F40 0%, #FA558A 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
            display: "inline-block",
          }}
        >
          Retro-Burgers
        </Typography>
      </Box>
      <TextField
        label="Pesquisa"
        variant="outlined"
        size="small"
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search color="primary" />
            </InputAdornment>
          ),
        }}
        sx={{ mr: "5%" }}
      />
    </header>
  );
};
