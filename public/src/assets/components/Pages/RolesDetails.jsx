import { useParams } from "react-router-dom";
import { roles } from "../data/roles";

const RolesDetails = () => {

    const { id } = useParams();

    const role = roles.find(r => r.id === Number(id));

    if (!role) {

        return (
            <div className="bg-slate-950 min-h-screen flex justify-center items-center text-white text-3xl">

                Role Not Found

            </div>
        );

    }

    return (

        <div className="bg-slate-950 min-h-screen pt-32">

            <div className="max-w-7xl mx-auto px-6">

                <img
                    src={role.image}
                    alt={role.title}
                    className="rounded-3xl w-full h-[450px] object-cover"
                />

                <h1 className="text-6xl font-bold text-white mt-10">

                    {role.title}

                </h1>

                <p className="text-slate-400 mt-8 text-lg">

                    {role.description}

                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-16">

                    <div className="bg-slate-900 rounded-3xl p-8">

                        <h2 className="text-cyan-400 text-3xl font-bold">

                            Required Skills

                        </h2>

                        <ul className="mt-8 space-y-3 text-slate-300">

                            {role.skills.map((skill, index) => (

                                <li key={index}>• {skill}</li>

                            ))}

                        </ul>

                    </div>

                    <div className="bg-slate-900 rounded-3xl p-8">

                        <h2 className="text-cyan-400 text-3xl font-bold">

                            Projects

                        </h2>

                        <ul className="mt-8 space-y-3 text-slate-300">

                            {role.projects.map((project, index) => (

                                <li key={index}>• {project}</li>

                            ))}

                        </ul>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default RolesDetails;