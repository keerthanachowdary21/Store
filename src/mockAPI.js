export const invoices = [
    {
      id: 1,
      storeName: "Store A",
      orderId: "ORD123",
      date: "2025-10-01",
      items: [
        { name: "Item 1", quantity: 2, regularPrice: 50, dealPrice: 45, taxRate: 0.1 },
        { name: "Item 2", quantity: 1, regularPrice: 30, dealPrice: 25, taxRate: 0.05 },
      ],
    },
    {
      id: 2,
      storeName: "Store B",
      orderId: "ORD124",
      date: "2025-10-02",
      items: [
        { name: "Item 2", quantity: 13, regularPrice: 210, dealPrice: 182, taxRate: 0.11 },
        { name: "Item 3", quantity: 1, regularPrice: 30, dealPrice: 25, taxRate: 0.05 },
        { name: "Item 2", quantity: 1, regularPrice: 30, dealPrice: 25, taxRate: 0.05 },
      ],
    },
    {
        id: 3,
        storeName: "Store C",
        orderId: "ORD125",
        date: "2025-10-03",
        items: [
          { name: "Item 7", quantity: 31, regularPrice: 120, dealPrice: 181, taxRate: 0.112 },
          { name: "Item 4", quantity: 1, regularPrice: 30, dealPrice: 25, taxRate: 0.05 },
          { name: "Item 2", quantity: 1, regularPrice: 30, dealPrice: 25, taxRate: 0.05 },
        ],
      },
      {
        id: 4,
        storeName: "Store D",
        orderId: "ORD126",
        date: "2025-10-04",
        items: [
          { name: "Item 6", quantity: 43, regularPrice: 206, dealPrice: 138, taxRate: 0.122 },
          { name: "Item 2", quantity: 1, regularPrice: 30, dealPrice: 25, taxRate: 0.05 },
          { name: "Item 5", quantity: 1, regularPrice: 30, dealPrice: 25, taxRate: 0.05 },
        ],
      },
      {
        id: 5,
        storeName: "Store E",
        orderId: "ORD127",
        date: "2025-10-05",
        items: [
          { name: "Item 4", quantity: 31, regularPrice: 201, dealPrice: 182, taxRate: 0.12 },
          { name: "Item 6", quantity: 1, regularPrice: 30, dealPrice: 25, taxRate: 0.05 },
          { name: "Item 2", quantity: 1, regularPrice: 30, dealPrice: 25, taxRate: 0.05 },
        ],
      },
  ];
  
  export const products = [
    { id: 1, store: "Store A", name: "Product 1", price: 50 },
    { id: 2, store: "Store A", name: "Product 2", price: 30 },
    { id: 3, store: "Store B", name: "Product 3", price: 24 },
    { id: 4, store: "Store C", name: "Product 4", price: 42 },
    { id: 5, store: "Store D", name: "Product 5", price: 26 },
  ];