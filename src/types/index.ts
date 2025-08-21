export interface Station {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  available: number;
  total: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Language {
  code: 'en' | 'pl';
  name: string;
}

export interface StationType {
  id: string;
  name: string;
  description: string;
  image: string;
}