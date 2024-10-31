import { models } from "../Models/Models";

import { Model } from "sequelize";

export class Services {
  private model: string;

  constructor(model: string) {
    this.model = model;
  }

  async findAll(): Promise<Model[]> {
    return models[this.model as keyof typeof models].findAll();
  }

  async findById(id: number): Promise<Model | null> {
    return models[this.model as keyof typeof models].findByPk(id);
  }

  async create(data: any): Promise<Model> {
    return models[this.model as keyof typeof models].create(data);
  }

  async update(updatedData: any, id: number): Promise<boolean> {
    const [updatedCount] = await models[
      this.model as keyof typeof models
    ].update(updatedData, {
      where: { id },
    });
    return updatedCount > 0;
  }

  async delete(id: number): Promise<void> {
    await models[this.model as keyof typeof models].destroy({ where: { id } });
  }
}
