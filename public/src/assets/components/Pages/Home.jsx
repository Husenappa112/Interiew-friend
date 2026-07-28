import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CompanySection from "../components/CompanySection";
import AIChatWidget from "../components/AIChatWidget";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-slate-950 min-h-screen">

      <Navbar />

      <Hero />

      <Features />

      {/* Popular Roles */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center text-white">

            Explore Career Roles

          </h2>

          <p className="text-slate-400 text-center mt-5">

            Frontend • Backend • AI • Cloud • Cyber Security • DevOps • Java • Python

          </p>

        </div>

      </section>

      <CompanySection />

      {/* Daily Challenge */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto">

          <div className="rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-600 p-14">

            <h2 className="text-5xl font-bold text-white">

              Daily Interview Challenge

            </h2>

            <p className="text-white/80 mt-5 text-lg">

              Solve one interview question every day and maintain your preparation streak.

            </p>

            <button className="mt-8 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold">

              Start Challenge

            </button>

          </div>

        </div>

      </section>

      {/* Testimonials */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-5xl font-bold text-white">

            Loved by Students

          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            {[1,2,3].map((item)=>(
              <div
                key={item}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
              >

                <h3 className="text-cyan-400 text-xl">

                  ★★★★★

                </h3>

                <p className="text-slate-400 mt-5">

                  This platform helped me prepare role-specific interviews with AI feedback and company questions.

                </p>

                <h4 className="text-white mt-8 font-semibold">

                  Student {item}

                </h4>

              </div>
            ))}

          </div>

        </div>

      </section>

      <Footer />

      <AIChatWidget />

    </div>
  );
};

export default Home;