export interface Main {
  data: DAT;
  meta: Meta;
}

export interface Categorias {
  data: DAT[];
}

export interface PurpleAttributes {
  Nome:        string;
  descricao:   Descricao[];
  valor:       number;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  Images:      Images;
  categorias:  Categorias;
}

export interface ProdutosDatum {
  id:         number;
  attributes: PurpleAttributes;
}

export interface Produtos {
  data: ProdutosDatum[];
}

export interface DataAttributes {
  Nome:        string;
  descricao:   Descricao[];
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  produtos?:   Produtos;
}

export interface DAT {
  id:         number;
  attributes: DataAttributes;
}

export interface Images {
  data: ImagesDatum[];
}

export interface ImagesDatum {
  id:         number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  name:              string;
  alternativeText:   null;
  caption:           null;
  width:             number;
  height:            number;
  formats:           Formats;
  hash:              string;
  ext:               EXT;
  mime:              MIME;
  size:              number;
  url:               string;
  previewUrl:        null;
  provider:          string;
  provider_metadata: null;
  createdAt:         Date;
  updatedAt:         Date;
}

export enum EXT {
  Jpg = ".jpg",
}

export interface Formats {
  thumbnail: Medium;
  small:     Medium;
  medium:    Medium;
}

export interface Medium {
  name:        string;
  hash:        string;
  ext:         EXT;
  mime:        MIME;
  path:        null;
  width:       number;
  height:      number;
  size:        number;
  sizeInBytes: number;
  url:         string;
}

export enum MIME {
  ImageJPEG = "image/jpeg",
}

export interface Descricao {
  type:     string;
  children: Child[];
}

export interface Child {
  type: string;
  text: string;
}

export interface Meta {
}
