import { Link } from "react-router-dom";

function RoleCard({ role }) {

    return (

        <div className="bg-slate-800 rounded-xl p-6 hover:scale-105 transition duration-300 shadow-lg">

            <div className="text-6xl text-blue-400">

                {role.icon}

            </div>

            <h2 className="text-white text-2xl font-bold mt-5">

                {role.title}

            </h2>

            <p className="text-gray-400 mt-3">

                {role.description}

            </p>

            <div className="flex justify-between mt-6 text-gray-300">

                <span>

                    {role.level}

                </span>

                <span>

                    {role.questions} Questions

                </span>

            </div>

            <Link

                to={`/roles/${role.id}`}

                className="block mt-8 bg-blue-600 hover:bg-blue-700 text-center py-3 rounded-lg text-white"

            >

                Explore

            </Link>

        </div>

    );

}

export default RoleCard;