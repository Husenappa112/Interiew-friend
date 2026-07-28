import { questions } from "../data/questions";
import QuestionCard from "../components/QuestionCard";

const QuestionBank = () => {

    return (

        <div className="bg-slate-950 min-h-screen pt-32">

            <div className="max-w-7xl mx-auto px-6">

                <h1 className="text-5xl text-white font-bold">

                    Interview Question Bank

                </h1>

                <p className="text-slate-400 mt-5">

                    Company-wise technical, HR and coding interview questions.

                </p>

                <div className="grid lg:grid-cols-2 gap-8 mt-16">

                    {questions.map(question => (

                        <QuestionCard
                            key={question.id}
                            question={question}
                        />

                    ))}

                </div>

            </div>

        </div>

    );

};

export default QuestionBank;