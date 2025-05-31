import { getDefaultQueryOptions } from "shared/utils/getDefaultQueryOptions";

import { FindOptions, Model } from "sequelize";
import { models } from "shared/Models/Models";

export class Services {
  private model: string;

  constructor(model: string) {
    this.model = model;
  }

  async findAll(options: FindOptions = {}): Promise<Model[]> {
    const queryOptions = getDefaultQueryOptions(options);
    return models[this.model as keyof typeof models].findAll(queryOptions);
  }

  async findById(id: number, options: FindOptions = {}): Promise<Model | null> {
    const queryOptions = getDefaultQueryOptions(options);
    return models[this.model as keyof typeof models].findByPk(id, queryOptions);
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
