import React, { useState } from 'react';
import logo from './logo.svg';

function MainCVComponent() {
  const [fileName, setFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [cvError, setCvError] = useState('');

  const [jobDescription, setJobDescription] = useState('');
  const [jobResult, setJobResult] = useState(null);
  const [jobLoading, setJobLoading] = useState(false);
  const [jobError, setJobError] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : '');
    setShowResult(false);
    setCvError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fileName) return;

    setIsLoading(true);
    setCvError('');
    setShowResult(false);

    setTimeout(() => {
      const success = Math.random() > 0.3;
      setIsLoading(false);

      if (success) {
        setShowResult(true);
      } else {
        setCvError('❌ Resume parsing failed. Please try again.');
      }
    }, 1500);
  };

  const handleAnalyze = () => {
    if (!jobDescription) return;

    setJobLoading(true);
    setJobError('');
    setJobResult(null);

    setTimeout(() => {
      const success = Math.random() > 0.2;
      setJobLoading(false);

      if (success) {
        setJobResult({
          summary: 'This job is a great match for candidates with JavaScript and React experience.',
          matchedSkills: ['JavaScript', 'React', 'Teamwork'],
          score: 88,
        });
      } else {
        setJobError('❌ Job description analysis failed. Please check the content.');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-indigo-200 to-blue-300 flex flex-col items-center px-4 py-10 space-y-10">

      {/* Header */}
      <div className="text-center">
        <img src={logo} alt="Logo" className="w-14 h-14 mx-auto animate-spin mb-2 drop-shadow-md" />
        <h1 className="text-4xl font-extrabold text-blue-700 tracking-wide mb-2">CV Optimizer</h1>
        <p className="text-gray-600 text-sm">Improve your CV and match your dream job</p>
      </div>

      {/* Upload CV Card */}
      <div className="bg-white shadow-xl rounded-xl w-full max-w-xl p-6 space-y-5 border border-blue-100">
        <h2 className="text-xl font-semibold text-blue-600 mb-3">📤 Upload Your CV</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="w-full text-sm border border-gray-300 rounded-md shadow-sm p-2 bg-gray-50 focus:ring-2 focus:ring-blue-300 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200 shadow-sm"
          >
            {isLoading ? 'Analyzing...' : 'Upload CV'}
          </button>
        </form>

        {cvError && <p className="text-red-600 text-sm mt-2">{cvError}</p>}

        {isLoading && (
          <div className="w-6 h-6 border-4 border-blue-300 border-t-blue-700 rounded-full animate-spin mx-auto mt-4"></div>
        )}

        {showResult && (
          <div className="mt-4 bg-green-50 p-4 border border-green-300 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-green-700 mb-2">✅ Analysis Results</h3>
            <ul className="text-sm text-gray-800 space-y-2">
              <li><strong>✅ Keywords Matched:</strong> 18 / 20</li>
              <li>
                <span className="block font-semibold mb-1">📊 ATS Score:</span>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className={`h-4 rounded-full transition-all duration-700 ease-in-out ${
                      91 >= 75 ? 'bg-green-500' : 91 >= 50 ? 'bg-yellow-400' : 'bg-red-500'
                    }`}
                    style={{ width: '91%' }}
                  />
                </div>
                <div className="text-right text-sm font-medium text-gray-700 mt-1">91%</div>
              </li>
              <li><strong>📝 Readability:</strong> Easy</li>
              <li><strong>📁 File:</strong> {fileName}</li>
            </ul>
          </div>
        )}
      </div>

      {/* Job Description Card */}
      <div className="bg-white shadow-xl rounded-xl w-full max-w-xl p-6 border border-blue-100">
        <h2 className="text-xl font-semibold text-blue-600 mb-3">🧐 Analyze Job Description</h2>

        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          maxLength={3000}
          rows={6}
          placeholder="Paste up to 3000 characters of a job description..."
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm resize-none text-sm text-gray-800 focus:ring-2 focus:ring-blue-300 focus:outline-none"
        />
        <div className="text-sm text-gray-500 mt-1 text-right">{jobDescription.length} / 3000</div>

        <button
          onClick={handleAnalyze}
          disabled={!jobDescription || jobLoading}
          className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-200 disabled:opacity-50"
        >
          {jobLoading ? 'Analyzing...' : 'Analyze Description'}
        </button>

        {jobError && <p className="text-red-600 text-sm mt-2">{jobError}</p>}

        {jobLoading && (
          <div className="w-6 h-6 border-4 border-green-300 border-t-green-700 rounded-full animate-spin mx-auto mt-4"></div>
        )}

        {jobResult && (
          <div className="mt-5 bg-blue-50 p-4 border border-blue-200 rounded-lg">
            <h3 className="font-bold text-blue-700 mb-2">📄 Job Match Summary</h3>
            <p className="text-sm text-gray-800 mb-2">{jobResult.summary}</p>
            <p className="text-sm"><strong>Skills Matched:</strong> {jobResult.matchedSkills.join(', ')}</p>
            <p className="text-sm"><strong>Match Score:</strong> {jobResult.score}%</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainCVComponent;
