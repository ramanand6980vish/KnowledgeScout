import React, { useState } from "react";
import UploadDocument from "./Components/UploadDocument";
import DocumentList from "./Components/DocumentList";
import AskQuestion from "./Components/AskQuestion";
import Navbar from "./Components/Navbar";



 
function App() {
  const [documents, setDocuments] = useState([]); // <-- must be an array
  const [questions, setQuestions] = useState([]); // <-- must be an array

  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <h1 className="text-center mb-4">📘 KnowledgeScout - Doc Q&A</h1>

        <div className="row">
          <div className="col-md-6 mb-3">
            <UploadDocument documents={documents} setDocuments={setDocuments} />
          </div>
          <div className="col-md-6 mb-3">
            <DocumentList documents={documents} />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <AskQuestion documents={documents} questions={questions} setQuestions={setQuestions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
