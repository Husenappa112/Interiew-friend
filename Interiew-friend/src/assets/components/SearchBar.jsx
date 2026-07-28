function SearchBar({ search, setSearch }) {

    return (

        <input

            type="text"

            placeholder="Search Roles..."

            value={search}

            onChange={(e)=>setSearch(e.target.value)}

            className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 outline-none"

        />

    );

}

export default SearchBar;