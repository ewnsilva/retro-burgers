import express, { Request, Response } from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 3000;

app.use(cors());

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: number;
}

app.get("/api/products/:category", (req: Request, res: Response) => {
  const category = parseInt(req.params.category);

  const filePath = path.join(__dirname, "products.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Erro ao ler o arquivo de produtos." });
    }

    let products: Product[] = JSON.parse(data);

    if (category >= 1 && category <= 4) {
      products = products.filter((product) => product.category === category);
    }

    res.json(products);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
