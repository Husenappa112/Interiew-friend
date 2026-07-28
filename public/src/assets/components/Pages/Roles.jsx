import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RoleCard from "../components/RoleCard";
import { roles } from "../data/roles";

const Roles = () => {

    const [search, setSearch] = useState("");

    const filtered = roles.filter(role =>
        role.title.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div className="bg-slate-950 min-h-screen pt-32">

            <div className="max-w-7xl mx-auto px-6">

                <h1 className="text-5xl font-bold text-white">

                    Explore Career Roles

                </h1>

                <p className="text-slate-400 mt-4">

                    Learn skills, watch videos, practice interviews and become job ready.

                </p>

                <div className="mt-10">

                    <SearchBar
                        placeholder="Search Career..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>

                <div className="grid lg:grid-cols-3 gap-8 mt-16">

                    {filtered.map(role => (

                        <RoleCard
                            key={role.id}
                            role={role}
                        />

                    ))}

                </div>

            </div>

        </div>

    );

};

export default Roles;