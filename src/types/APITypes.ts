export interface Provider {
  name: string;
  url: string;
}

export interface ApiDetail {
  description: string;
  properties: { [key: string]: any };
}

export interface ProviderData {
  [key: string]: ApiDetail[];
}
