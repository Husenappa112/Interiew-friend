import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import RoleCard from "../components/RoleCard";

import roles from "../data/roles";

function Roles() {

    const [search,setSearch]=useState("");

    const filteredRoles=roles.filter(role=>

        role.title.toLowerCase().includes(search.toLowerCase())

    );

    return (

        <>

            <Navbar/>

            <section className="min-h-screen bg-slate-950 py-16">

                <div className="max-w-7xl mx-auto px-6">

                    <h1 className="text-white text-5xl font-bold text-center">

                        Interview Roles

                    </h1>

                    <p className="text-center text-gray-400 mt-4">

                        Select your dream role and start preparing.

                    </p>

                    <div className="mt-10">

                        <SearchBar

                            search={search}

                            setSearch={setSearch}

                        />

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

                        {

                            filteredRoles.map(role=>(

                                <RoleCard

                                    key={role.id}

                                    role={role}

                                />

                            ))

                        }

                    </div>

                </div>

            </section>

            <Footer/>

        </>

    );

}

export default Roles;