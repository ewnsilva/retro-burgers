import { Button, ButtonGroup } from "@mui/material";

export const Navigation = (): JSX.Element => {
  return (
    <nav
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        background: "yellow",
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <ButtonGroup color="secondary">
        <Button sx={{ width: 150 }}>Hamburguers</Button>
        <Button sx={{ width: 150 }}>Salgados</Button>
        <Button sx={{ width: 150 }}>Sucos</Button>
        <Button sx={{ width: 150 }}>Doces</Button>
      </ButtonGroup>
    </nav>
  );
};
