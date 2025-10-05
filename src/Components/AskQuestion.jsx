import React, { useState } from "react";
import axios from "axios";

const AskQuestion = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async (e) => {
    e.preventDefault();
    if (!question) return;

    try {
      const res = await axios.post("http://localhost:8080/api/ask", { question });
      setAnswer(res.data.answer);
      setQuestion("");
    } catch {
      setAnswer("Error fetching answer.");
    }
  };

  return (
    <div className="card shadow-sm p-4">
      <h4 className="mb-3">Ask a Question</h4>
      <form onSubmit={handleAsk}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Type your question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button className="btn btn-success w-10" type="submit">
          Ask
        </button>
      </form>
      {answer && (
        <div className="alert alert-secondary mt-3">
          <b>Answer:</b> {answer}
        </div>
      )}
    </div>
  );
};

export default AskQuestion;
