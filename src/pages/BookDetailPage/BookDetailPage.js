import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BookDetailPage() {
  const { id } = useParams();
  const apiUrl = `https://openlibrary.org/works/${id}`;

  return <h2>BookDetailPage</h2>;
}
