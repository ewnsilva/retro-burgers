import { getDefaultQueryOptions } from "shared/utils/getDefaultQueryOptions";

import {
  Attributes,
  FindOptions,
  Model,
  ModelStatic,
  WhereAttributeHashValue,
} from "sequelize";
import { models } from "shared/Models/Models";

export class Services<T extends Model> {
  private model: ModelStatic<T>;

  constructor(model: ModelStatic<T>) {
    this.model = models[
      model.name as keyof typeof models
    ] as unknown as ModelStatic<T>;
  }

  async findAll(options: FindOptions = {}): Promise<T[]> {
    const queryOptions = getDefaultQueryOptions(options);
    return this.model.findAll(queryOptions);
  }

  async findById(id: number, options: FindOptions = {}): Promise<T | null> {
    const queryOptions = getDefaultQueryOptions(options);
    return this.model.findByPk(id, queryOptions);
  }

  async create(data: any): Promise<T> {
    return this.model.create(data);
  }

  async update(
    updatedData: any,
    id: WhereAttributeHashValue<Attributes<T>[number]>
  ): Promise<boolean> {
    const [updatedCount] = await this.model.update(updatedData, {
      where: { id },
    });
    return updatedCount > 0;
  }

  async delete(
    id: WhereAttributeHashValue<Attributes<T>[number]>
  ): Promise<void> {
    await this.model.destroy({ where: { id } });
  }
}
