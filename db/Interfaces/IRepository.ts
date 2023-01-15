export interface IRead<T> {
  getAllExists(populate?: string): Promise<T[]>;
  // findOne(id: string, populate?: string): Promise<T | null>;
}

export interface IWrite<T> {
  create(item: T): Promise<T>;
  update(id: string, item: T): Promise<T | null>;
  deletePermanently(id: string): Promise<any>;
  Disable(id: string): Promise<boolean>;
}

export interface IFilter<T> {
  filterByName(name: string, populate?: string): Promise<T[]>;
 findById(id: string): Promise<T[]>;

}

export interface IRepository<T> extends IWrite<T>, IRead<T>, IFilter<T> {}
