import React, { useEffect, useState } from "react";
import axios from "axios";

const DocumentList = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/documents")
      .then((res) => setDocs(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="card shadow-sm p-4">
      <h4 className="mb-3">Uploaded Documents</h4>
      <ul className="list-group">
        {docs.length === 0 && (
          <li className="list-group-item">No documents uploaded yet.</li>
        )}
        {docs.map((d) => (
          <li key={d.id} className="list-group-item">
            📄 {d.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
