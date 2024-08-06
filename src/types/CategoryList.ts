export interface MainCategoryList {
  data: MainDatum[];
  meta: Meta;
}

export interface MainDatum {
  id:         number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  Nome:        string;
  descricao:   Descricao[] | null;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  capa:        Capa;
  produtos:    Capa;
}

export interface Capa {
  data: CapaDatum[] | null;
}

export interface CapaDatum {
  id:         number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  Nome:        string;
  descricao:   Descricao[];
  valor:       number;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
}

export interface Descricao {
  type:     DescricaoType;
  children: Child[];
}

export interface Child {
  type: ChildType;
  text: string;
}

export enum ChildType {
  Text = "text",
}

export enum DescricaoType {
  Paragraph = "paragraph",
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page:      number;
  pageSize:  number;
  pageCount: number;
  total:     number;
}
