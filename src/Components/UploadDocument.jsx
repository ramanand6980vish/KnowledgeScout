import React, { useState } from "react";

const UploadDocument = ({ documents, setDocuments }) => {
  const [message, setMessage] = useState("");

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setDocuments([...documents, { name: file.name, content: reader.result }]);
      setMessage(`Uploaded ${file.name} successfully!`);
    };
    reader.onerror = () => {
      setMessage("Upload failed!");
    };

    reader.readAsText(file);
  };

  return (
    <div className="card shadow-sm p-4 mb-4">
      <h4>Upload Document</h4>
      <input type="file" className="form-control mb-3" onChange={handleUpload} />
      {message && <div className="alert alert-info">{message}</div>}

      <ul className="list-group mt-3">
        {documents && documents.length > 0 ? (
          documents.map((doc, idx) => (
            <li key={idx} className="list-group-item">
              {doc.name}
            </li>
          ))
        ) : (
          <li className="list-group-item">No documents uploaded yet.</li>
        )}
      </ul>
    </div>
  );
};

export default UploadDocument; // ✅ Make sure this line exists
