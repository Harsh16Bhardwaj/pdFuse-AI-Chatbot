import React, { useState } from 'react';

const PDFUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setError(null);
    } else {
      setError('Please upload a valid PDF file.');
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('No file selected for upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed.');
      }

      // Handle successful upload (e.g., show a success message)
      alert('File uploaded successfully!');
      setFile(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="pdf-upload">
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      {error && <p className="error">{error}</p>}
      <button onClick={handleUpload}>Upload PDF</button>
    </div>
  );
};

export default PDFUpload;