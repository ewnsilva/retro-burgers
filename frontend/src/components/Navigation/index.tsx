import { Search } from "@mui/icons-material";
import { Button, ButtonGroup, InputAdornment, TextField } from "@mui/material";

export const Navigation = (): JSX.Element => {
  return (
    <nav
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "yellow",
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <div style={{ display: "flex" }}>
        <Button sx={{ width: 150 }}>Hamburguers</Button>
        <Button sx={{ width: 150 }}>Salgados</Button>
        <Button sx={{ width: 150 }}>Sucos</Button>
        <Button sx={{ width: 150 }}>Doces</Button>
      </div>
      <TextField
        label="Pesquisa"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        sx={{ position: "absolute", right: "15%" }}
      />
    </nav>
  );
};
