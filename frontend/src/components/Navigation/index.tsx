import { Button } from "@mui/material";

export const Navigation = (): JSX.Element => {
  return (
    <nav
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "yellow",
        marginBottom: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          backgroundImage: "linear-gradient(90deg, #FA558A 0%, #FEAE5D 100%)",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{
            width: 150,
            color: "#250F40",
            fontWeight: 600,
            "&:hover": {
              color: "#FDE12D",
              textDecoration: "underline",
            },
          }}
        >
          Hamburguers
        </Button>
        <Button
          sx={{
            width: 150,
            color: "#250F40",
            fontWeight: 600,
            "&:hover": {
              color: "#FDE12D",
              textDecoration: "underline",
            },
          }}
        >
          Salgados
        </Button>
        <Button
          sx={{
            width: 150,
            color: "#250F40",
            fontWeight: 600,
            "&:hover": {
              color: "#FDE12D",
              textDecoration: "underline",
            },
          }}
        >
          Sucos
        </Button>
        <Button
          sx={{
            width: 150,
            color: "#250F40",
            fontWeight: 600,
            "&:hover": {
              color: "#FDE12D",
              textDecoration: "underline",
            },
          }}
        >
          Doces
        </Button>
      </div>
    </nav>
  );
};
