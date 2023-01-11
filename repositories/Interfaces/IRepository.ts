export interface IRead<T> {
  getAll(populate?: string): Promise<T[]>;
  findOne(id: string): Promise<T | null>;
}

export interface IWrite<T> {
  create(item: T): Promise<T>;
  update(id: string, item: T): Promise<T | null>;
  delete(id: string): Promise<boolean>;
}

export interface IRepository<T> extends IWrite<T>, IRead<T> {}
