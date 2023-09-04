export interface FAQItem {
  id: number;
  question: string;
  text: string;
}

export interface FAQItems {
  id: number;
  name: string;
  questions: FAQItem[];
}
