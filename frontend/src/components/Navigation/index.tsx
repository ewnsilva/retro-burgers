import { Button } from "@mui/material";

export const Navigation: React.FC<{
  setCategory: React.Dispatch<React.SetStateAction<number>>;
  categoty: number;
}> = ({ setCategory, categoty }) => {
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
          onClick={() => setCategory(0)}
          sx={{
            width: 150,
            color: categoty === 0 ? "#FDE12D" : "#250F40",
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
          onClick={() => setCategory(1)}
          sx={{
            width: 150,
            color: categoty === 1 ? "#FDE12D" : "#250F40",
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
          onClick={() => setCategory(2)}
          sx={{
            width: 150,
            color: categoty === 2 ? "#FDE12D" : "#250F40",
            fontWeight: 600,
            "&:hover": {
              color: "#FDE12D",
              textDecoration: "underline",
            },
          }}
        >
          Doces
        </Button>
        <Button
          onClick={() => setCategory(3)}
          sx={{
            width: 150,
            color: categoty === 3 ? "#FDE12D" : "#250F40",
            fontWeight: 600,
            "&:hover": {
              color: "#FDE12D",
              textDecoration: "underline",
            },
          }}
        >
          Bebidas
        </Button>
      </div>
    </nav>
  );
};
