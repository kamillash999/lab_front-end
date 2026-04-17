export interface Item {
  id: number;
  title: string;
  description: string;
  category: string;
}

export function generateItems(count: number): Item[] {
  const categories = ["Tech", "Science", "Business", "Sports", "Art"];
  const items: Item[] = [];

  for (let i = 0; i < count; i++) {
    items.push({
      id: i,
      title: `Item ${i + 1}`,
      description: `This is a long description for item number ${i + 1}`,
      category: categories[Math.floor(Math.random() * categories.length)],
    });
  }
  return items;
}