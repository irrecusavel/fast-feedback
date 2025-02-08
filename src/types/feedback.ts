export interface FeedBack {
  id: number;
  type: "suggestion" | "bug" | "compliment";
  message: string;
  status: "pending" | "resolved";
  createdAt: Date;
  updatedAt: Date;
}
