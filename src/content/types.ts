export type Category = "stotra" | "aarti" | "prarthana" | "mantra" | "pujan-vidhi";

export interface Verse {
  dev: string;
  en: string;
}

export interface Stotra {
  id: string;
  title_dev: string;
  title_en: string;
  deity: string;
  category: Category;
  description?: string;
  verses: Verse[];
}
