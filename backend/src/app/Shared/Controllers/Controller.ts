import { Request, Response } from "express";

export class Controller<T> {
  protected service: T;

  constructor(service: T) {
    this.service = service;
  }

  async findAll(req: Request, res: Response): Promise<void> {
    try {
      const result = await (this.service as any).findAll();
      res.status(200).json(result);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const result = await (this.service as any).findById(Number(id));
      res.status(200).json(result);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    const data = req.body;
    try {
      const result = await (this.service as any).create(data);
      res.status(201).json(result);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const updatedData = req.body;
    try {
      const isUpdated = await (this.service as any).update(
        updatedData,
        Number(id)
      );
      if (!isUpdated) {
        res.status(400).json({ message: "Data were not updated" });
      } else {
        res.status(200).json({ message: "Data were updated" });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      await (this.service as any).delete(Number(id));
      res.status(200).json({ message: "Data were deleted" });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
