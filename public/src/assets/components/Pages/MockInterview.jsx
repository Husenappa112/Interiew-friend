import {
FaRobot,
FaMicrophone,
FaVideo,
FaPlay
} from "react-icons/fa";

const MockInterview=()=>{

return(

<div className="bg-slate-950 min-h-screen pt-32">

<div className="max-w-7xl mx-auto px-6">

<h1 className="text-5xl font-bold text-white">

AI Mock Interview

</h1>

<p className="text-slate-400 mt-5">

Practice technical and HR interviews with AI.

</p>

<div className="grid lg:grid-cols-2 gap-10 mt-16">

<div className="bg-slate-900 rounded-3xl p-10">

<FaRobot className="text-8xl text-cyan-400"/>

<h2 className="text-3xl text-white font-bold mt-8">

AI Interviewer

</h2>

<p className="text-slate-400 mt-5">

The AI interviewer asks technical and HR questions based on your selected role.

</p>

<button className="mt-10 bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-xl text-white">

<FaPlay className="inline mr-3"/>

Start Interview

</button>

</div>

<div className="bg-slate-900 rounded-3xl p-10">

<div className="flex justify-center gap-10">

<div className="w-24 h-24 rounded-full bg-cyan-500/20 flex justify-center items-center">

<FaMicrophone className="text-cyan-400 text-4xl"/>

</div>

<div className="w-24 h-24 rounded-full bg-purple-500/20 flex justify-center items-center">

<FaVideo className="text-purple-400 text-4xl"/>

</div>

</div>

<h2 className="text-white text-3xl font-bold text-center mt-10">

Voice + Camera

</h2>

<p className="text-slate-400 text-center mt-5">

The next version will analyze speech, confidence and communication using AI.

</p>

</div>

</div>

</div>

</div>

);

};

export default MockInterview;