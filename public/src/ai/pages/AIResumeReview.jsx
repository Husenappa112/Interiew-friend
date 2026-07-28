import { useState } from "react";
import ResumeUpload from "../components/ResumeUpload";
import ATSScoreCard from "../components/ATSScoreCard";
import SuggestionCard from "../components/SuggestionCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { reviewResume } from "../services/ai";

const AIResumeReview = () => {
  const [resume, setResume] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState({
    atsScore: 0,
    strengths: [],
    weaknesses: [],
    suggestions: [],
    keywords: [],
    summary: "",
  });

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    setDragActive(false);

    if (e.dataTransfer.files.length > 0) {
      setResume(e.dataTransfer.files[0]);
    }
  };

  const handleReview = async () => {
    if (!resume) {
      alert("Please upload your resume.");
      return;
    }

    try {
      setLoading(true);

      const response = await reviewResume(resume);

      setResult(response);
    } catch (error) {
      console.error(error);

      alert("Unable to analyze resume.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold">
          AI Resume Review
        </h1>

        <p className="text-gray-400 mt-3">
          Upload your resume and receive AI-powered
          ATS analysis, strengths, weaknesses and
          improvement suggestions.
        </p>

        <div
          className={`mt-10 border-2 border-dashed rounded-3xl p-10 transition-all

          ${
            dragActive
              ? "border-cyan-500 bg-slate-900"
              : "border-slate-700 bg-slate-900/40"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <ResumeUpload
            file={resume}
            setFile={setResume}
          />

          <p className="text-center text-gray-400 mt-5">
            or Drag & Drop Resume Here
          </p>
        </div>

        <div className="flex justify-center mt-8">

          <button
            onClick={handleReview}
            disabled={loading}
            className="px-10 py-4 rounded-xl bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 font-semibold"
          >
            {loading
              ? "Analyzing Resume..."
              : "Analyze Resume"}
          </button>

        </div>

        {loading && (
          <LoadingSpinner />
        )}

        {!loading &&
          result.atsScore > 0 && (

          <>
            <div className="grid lg:grid-cols-3 gap-8 mt-12">

              <ATSScoreCard
                score={result.atsScore}
              />

              <SuggestionCard
                title="Strengths"
                suggestions={result.strengths}
              />

              <SuggestionCard
                title="Weaknesses"
                suggestions={result.weaknesses}
              />

            </div>

            <div className="grid lg:grid-cols-2 gap-8 mt-10">

              <SuggestionCard
                title="Improvement Suggestions"
                suggestions={result.suggestions}
              />

              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">

                <h2 className="text-2xl font-bold">
                  ATS Keywords
                </h2>

                <div className="flex flex-wrap gap-3 mt-6">

                  {result.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="px-4 py-2 rounded-full bg-cyan-600"
                    >
                      {keyword}
                    </span>
                  ))}

                </div>

              </div>

            </div>

            {/* Continue in Part 2 */}
                        <div className="mt-10 bg-slate-900 rounded-2xl border border-slate-700 p-6">

              <h2 className="text-2xl font-bold">
                Resume Summary
              </h2>

              <p className="mt-4 text-gray-300 leading-8">
                {result.summary}
              </p>

            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-8">

              <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

                <h2 className="text-2xl font-bold">
                  Resume Tips
                </h2>

                <ul className="mt-6 space-y-3 text-gray-300">

                  <li>✔ Keep your resume to one page.</li>

                  <li>✔ Add measurable achievements.</li>

                  <li>✔ Include GitHub and LinkedIn profiles.</li>

                  <li>✔ Use ATS-friendly keywords.</li>

                  <li>✔ Mention technologies used in projects.</li>

                  <li>✔ Avoid spelling and grammar mistakes.</li>

                </ul>

              </div>

              <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

                <h2 className="text-2xl font-bold">
                  Next Steps
                </h2>

                <ul className="mt-6 space-y-3 text-gray-300">

                  <li>🚀 Improve missing technical skills.</li>

                  <li>🚀 Add certifications.</li>

                  <li>🚀 Build 2–3 real-world projects.</li>

                  <li>🚀 Practice DSA regularly.</li>

                  <li>🚀 Prepare for behavioral interviews.</li>

                </ul>

              </div>

            </div>

            <div className="flex justify-center mt-10">

              <button
                className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl font-semibold"
              >
                Download Report
              </button>

            </div>

          </>
        )}

      </div>

    </div>
  );
};

export default AIResumeReview;