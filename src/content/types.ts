export type Category = "stotra" | "aarti" | "prarthana" | "mantra";

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
