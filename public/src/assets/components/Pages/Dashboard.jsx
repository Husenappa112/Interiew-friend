import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";

import {
 FaFire,
 FaRobot,
 FaCheckCircle,
 FaChartLine
} from "react-icons/fa";

const Dashboard = () => {

 const cards=[

 {
 title:"Completed Interviews",
 value:"18",
 icon:<FaCheckCircle/>,
 color:"bg-green-500/20 text-green-400"
 },

 {
 title:"AI Score",
 value:"91%",
 icon:<FaRobot/>,
 color:"bg-cyan-500/20 text-cyan-400"
 },

 {
 title:"Current Streak",
 value:"15",
 icon:<FaFire/>,
 color:"bg-orange-500/20 text-orange-400"
 },

 {
 title:"Progress",
 value:"82%",
 icon:<FaChartLine/>,
 color:"bg-purple-500/20 text-purple-400"
 }

 ];

 return(

 <>

 <Navbar/>

 <div className="bg-slate-950 min-h-screen pt-32 px-6">

 <div className="max-w-7xl mx-auto">

 <h1 className="text-5xl font-bold text-white">

 Dashboard

 </h1>

 <p className="text-slate-400 mt-3">

 Track your interview preparation.

 </p>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

 {cards.map((card,index)=>(

 <DashboardCard
 key={index}
 {...card}
 />

 ))}

 </div>

 </div>

 </div>

 </>

 );

};

export default Dashboard;