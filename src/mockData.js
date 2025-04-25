export const users = [
    { id: 1, name: "Alice", email: "alice@example.com", kycStatus: "pending" },
    { id: 2, name: "Bob", email: "bob@example.com", kycStatus: "approved" },
  ];
  
  export const reviews = [
    { id: 1, user: "Alice", rating: 5, feedback: "Great!" },
    { id: 2, user: "Bob", rating: 3, feedback: "Okay service." },
  ];
  
  export const transactions = [
    { id: "txn001", amount: 100, status: "payout", date: "2024-04-01" },
    { id: "txn002", amount: 50, status: "refund", date: "2024-04-02" },
  ];
  
  export const tickets = [
    { id: 1, title: "Late delivery", userId: 1, category: "Shipping", status: "open" },
  ];
  