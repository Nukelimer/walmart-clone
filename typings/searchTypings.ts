export interface SearchResult {
  results: Result[];
  total_results: number;
  last_visible_page: number;
  parse_status_code: number;
  created_at: string;
  updated_at: string;
  page: number;
  url: string;
  job_id: string;
  status_code: string;
  parser_type: string;
}

export interface Result {
  out_of_stock: any;
  content: Content;
  page: number;
title: string;
}

export interface Content {
  url: string;
  organic: Organic[];
  total_results: number;
  last_visible_page: number;
  parse_status_code: number;
  title: string;

}

export interface Organic {
  out_of_stock: boolean;
  url: string;
  image: string;
  title: string;
  badge?: string;
  product_id: string;
  price: Price;
  rating: Rating;
  variants?: Variant[];
}

export interface Rating {
  count: number;
  rating: number;
}

export interface Seller {
  name: string;
}

export interface Price {
  price: number;
  currency: string;
}

export interface Variant {
  url: string;
  title: string;
  product_id: string;
}

export interface Context {
  key: string;
  value: any;
}

export interface Link {
  rel: string;
  href: string;
  method: string;
}

export interface Job {
  callback_url: string;
  client_id: number;
  context: Context[];
  created_at: string;
  domain: string;
  geo_location: null | string;
  id: string;
  limit: number;
  locale: null | string;
  pages: number;
  parse: number;
  parse_type: null | string;
  parsing_instructions: null | string;
  browser_instruction: null | string;
  render: null | string;

  url: string;
  query: string;
  sourse: string;
  start_page: number;
  status: string;
  storage_type: null | string;
  storage_url: null | string;
  subdomain: string;
  content_encoding: string;
  updated_at: string;
  user_agent_type: string;
  session_info: null | string;
  statutes: any[];
  client_notes: null | string;
  _link: Link[];
}



