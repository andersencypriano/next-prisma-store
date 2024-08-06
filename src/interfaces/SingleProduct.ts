export interface MainProducts {
  data: Data;
  meta: Meta;
}

export interface Data {
  id:         number;
  attributes: DataAttributes;
}

export interface DataAttributes {
  Nome:        string;
  descricao:   Descricao[];
  valor:       number;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  Images:      Images;
  categorias:  Categorias;
}

export interface Images {
  data: ImagesDatum[];
}

export interface ImagesDatum {
  id:         number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  name:              string;
  alternativeText:   null;
  caption:           null;
  width:             number;
  height:            number;
  formats:           Formats;
  hash:              string;
  ext:               string;
  mime:              string;
  size:              number;
  url:               string;
  previewUrl:        null;
  provider:          string;
  provider_metadata: null;
  createdAt:         Date;
  updatedAt:         Date;
}

export interface Formats {
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  name:        string;
  hash:        string;
  ext:         string;
  mime:        string;
  path:        null;
  width:       number;
  height:      number;
  size:        number;
  sizeInBytes: number;
  url:         string;
}

export interface Categorias {
  data: CategoriasDatum[];
}

export interface CategoriasDatum {
  id:         number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  Nome:        string;
  descricao:   Descricao[];
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
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
