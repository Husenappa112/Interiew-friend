import Navbar from "../components/Navbar";

const Login = () => {
  return (

    <>

      <Navbar />

      <div className="min-h-screen bg-slate-950 flex justify-center items-center">

        <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800 w-[420px]">

          <h1 className="text-white text-4xl font-bold">

            Welcome Back

          </h1>

          <p className="text-slate-400 mt-3">

            Continue your AI Interview Journey

          </p>

          <input
            placeholder="Email"
            className="w-full mt-10 bg-slate-950 p-4 rounded-xl border border-slate-700 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mt-5 bg-slate-950 p-4 rounded-xl border border-slate-700 text-white"
          />

          <button className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-purple-600 py-4 rounded-xl text-white font-bold">

            Login

          </button>

        </div>

      </div>

    </>

  );
};

export default Login;