import React from "react";
import { useParams } from "react-router-dom";
import { invoices } from "../mockAPI";
import jsPDF from "jspdf";
import "../styles/InvoiceDetail.css";

const InvoiceDetail = () => {
  const { id } = useParams();
  const invoice = invoices.find((inv) => inv.id === parseInt(id));

  if (!invoice) return <div>Invoice not found</div>;

  const grandTotalWithoutTax = invoice.items.reduce(
    (total, item) => total + item.quantity * item.dealPrice,
    0
  );

  const grandTotalWithTax = invoice.items.reduce(
    (total, item) => total + item.quantity * item.dealPrice * (1 + item.taxRate),
    0
  );

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(`Invoice: ${invoice.orderId}`, 10, 10);
    doc.text(`Store: ${invoice.storeName}`, 10, 20);
    invoice.items.forEach((item, index) => {
      doc.text(`${item.name} - $${item.dealPrice}`, 10, 30 + index * 10);
    });
    doc.save(`invoice_${invoices.orderId}.pdf`);
  };

  return (
    <div className="invoice-detail">
      <h1>Invoice Details</h1>
      <p>Store: {invoice.storeName}</p>
      <p>Order ID: {invoice.orderId}</p>
      <p>Date: {invoice.date}</p>
      <h2>Items:</h2>
      {invoice.items.map((item, index) => (
        <div key={index} className="invoice-item">
          <p>Name: {item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.dealPrice}</p>
          <p>Tax: ${(item.quantity * item.dealPrice * item.taxRate).toFixed(2)}</p>
        </div>
      ))}
      <h3>Grand Total (Without Tax): ${grandTotalWithoutTax.toFixed(2)}</h3>
      <h3>Grand Total (With Tax): ${grandTotalWithTax.toFixed(2)}</h3>
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default InvoiceDetail;