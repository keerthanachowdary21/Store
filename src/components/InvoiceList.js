import React, { useEffect, useState } from "react";
import { invoices } from "../mockAPI";
import { Link } from "react-router-dom";
import "../styles/InvoiceList.css";

const InvoiceList = () => {
  const [invoiceData, setInvoiceData] = useState([]);

  useEffect(() => {
    setInvoiceData(invoices);
  }, []);

  return (
    <div className="invoice-list">
      <h1>Invoice List</h1>
      {invoiceData.map((invoice) => (
        <div key={invoice.id} className="invoice-item">
          <Link to={`/invoice/${invoice.id}`}>
            {invoice.storeName} - {invoice.orderId} - {invoice.date}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default InvoiceList;