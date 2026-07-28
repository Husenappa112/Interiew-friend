import { FaFileUpload, FaRobot } from "react-icons/fa";

const Resume = () => {

return(

<div className="bg-slate-950 min-h-screen pt-32">

<div className="max-w-6xl mx-auto px-6">

<h1 className="text-5xl font-bold text-white">

AI Resume Analyzer

</h1>

<p className="text-slate-400 mt-4">

Upload your resume and receive ATS score, AI suggestions and missing skills.

</p>

<div className="mt-16 border-2 border-dashed border-cyan-500 rounded-3xl p-20 text-center">

<FaFileUpload className="text-7xl text-cyan-400 mx-auto"/>

<h2 className="text-3xl font-bold text-white mt-8">

Drag & Drop Resume

</h2>

<p className="text-slate-400 mt-4">

PDF • DOCX • Maximum 5MB

</p>

<button className="mt-8 px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold">

Choose File

</button>

</div>

<div className="grid md:grid-cols-4 gap-8 mt-16">

<div className="bg-slate-900 rounded-2xl p-6">

<h3 className="text-cyan-400">ATS Score</h3>

<p className="text-4xl font-bold text-white mt-4">92%</p>

</div>

<div className="bg-slate-900 rounded-2xl p-6">

<h3 className="text-cyan-400">Missing Skills</h3>

<p className="text-white mt-4">Docker</p>

</div>

<div className="bg-slate-900 rounded-2xl p-6">

<h3 className="text-cyan-400">Projects</h3>

<p className="text-white mt-4">4</p>

</div>

<div className="bg-slate-900 rounded-2xl p-6">

<h3 className="text-cyan-400">AI Review</h3>

<FaRobot className="text-5xl text-white mt-4"/>

</div>

</div>

</div>

</div>

);

};

export default Resume;