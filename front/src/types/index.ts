export interface todoType {
  _id: string;
  title: string;
  description?: string;
  status: "todo" | "in_progress" | "done";
  userId: string;
  categoryId?: string;
}

export interface categoryType {
  name: string;
  _id: string;
  todos?: todoType[];
  userId?: string;
}
