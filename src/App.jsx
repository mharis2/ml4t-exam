import { useState, useRef, useEffect } from "react";
import examData from "./examData";

/* ───────────────────────── Start Screen ───────────────────────── */
function StartScreen({ onStart }) {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-lg w-full text-center animate-fade-in-up">
                {/* GT Logo / Badge */}
                <div className="mb-12">
                    <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-gt-gold to-gt-gold-dark flex items-center justify-center shadow-lg animate-pulse-glow">
                        <span className="text-gt-navy-dark font-extrabold text-2xl tracking-tight">
                            ML4T
                        </span>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-4 tracking-tight leading-tight">
                    Practice Exam 1
                </h1>
                <p className="text-gt-gold text-xl font-medium mb-4">
                    CS7646 — Machine Learning for Trading
                </p>
                <p className="text-text-secondary text-base mb-16 max-w-sm mx-auto leading-relaxed">
                    25 Multi-Select Questions &middot; Closed-Book Format
                    <br />
                    Each question has 5 sub-answers — mark each as True or False.
                </p>

                {/* Exam Info Cards */}
                <div className="grid grid-cols-3 gap-5 mb-16">
                    {[
                        { label: "Questions", value: "25" },
                        { label: "Format", value: "Multi-Select" },
                        { label: "Topics", value: "Weeks 1–7" },
                    ].map((item) => (
                        <div
                            key={item.label}
                            className="bg-surface rounded-2xl p-6 border border-surface-lighter/50"
                        >
                            <div className="text-gt-gold font-bold text-2xl">
                                {item.value}
                            </div>
                            <div className="text-text-secondary text-sm mt-2">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Start Button */}
                <button
                    id="start-exam-btn"
                    onClick={onStart}
                    className="group relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-gt-gold to-gt-gold-light text-gt-navy-dark font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                >
                    Start Exam
                    <svg
                        className="w-5 h-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                    </svg>
                </button>

                <p className="text-text-secondary/40 text-sm mt-12">
                    Georgia Tech &middot; Spring 2026
                </p>
            </div>
        </div>
    );
}

/* ───────────────────────── Question Card (Centered, Single) ───── */
function QuestionCard({ question, answers, onToggle }) {
    const qAnswers = answers[question.id] || {};

    return (
        <div className="w-full max-w-2xl mx-auto animate-fade-in-up">
            {/* Topic Badge */}
            <div className="mb-6 text-center">
                <span className="inline-block text-xs font-semibold text-gt-gold/70 tracking-widest uppercase bg-gt-gold/8 px-4 py-1.5 rounded-full">
                    {question.topic}
                </span>
            </div>

            {/* Question */}
            <div className="bg-surface rounded-2xl border border-surface-lighter/40 p-8 md:p-10">
                <p className="text-text-primary text-lg leading-relaxed mb-8">
                    {question.question}
                </p>

                {/* Options */}
                <div className="space-y-3">
                    {question.options.map((opt) => {
                        const checked = !!qAnswers[opt.id];
                        return (
                            <label
                                key={opt.id}
                                className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200 border ${checked
                                        ? "bg-gt-gold/10 border-gt-gold/30"
                                        : "bg-surface-light/40 border-transparent hover:bg-surface-light hover:border-surface-lighter"
                                    }`}
                            >
                                {/* Checkbox */}
                                <div className="mt-0.5 shrink-0">
                                    <div
                                        className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${checked
                                                ? "bg-gt-gold border-gt-gold"
                                                : "border-text-secondary/40 hover:border-gt-gold/60"
                                            }`}
                                    >
                                        {checked && (
                                            <svg
                                                className="w-3 h-3 text-gt-navy-dark"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={3}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                                <input
                                    type="checkbox"
                                    className="sr-only"
                                    checked={checked}
                                    onChange={() => onToggle(question.id, opt.id)}
                                />
                                <span className="text-[15px] text-text-primary/90 leading-relaxed">
                                    <span className="font-semibold text-gt-gold/80 mr-2">
                                        {opt.id.toUpperCase()}.
                                    </span>
                                    {opt.text}
                                </span>
                            </label>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

/* ───────────────────────── Results Card ───────────────────────── */
function ResultCard({ question, answers }) {
    const qAnswers = answers[question.id] || {};

    let correct = 0;
    question.options.forEach((opt) => {
        const userChecked = !!qAnswers[opt.id];
        if (userChecked === opt.correct) correct++;
    });
    const perfect = correct === 5;

    return (
        <div
            className={`rounded-2xl border p-6 md:p-8 transition-all ${perfect
                    ? "bg-correct-bg border-correct/20"
                    : "bg-surface border-surface-lighter/40"
                }`}
        >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                    <span
                        className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${perfect
                                ? "bg-correct/20 text-correct"
                                : "bg-gt-gold/15 text-gt-gold"
                            }`}
                    >
                        {question.id}
                    </span>
                    <div>
                        <span className="text-xs font-medium text-gt-gold/70 tracking-wide uppercase">
                            {question.topic}
                        </span>
                        <p className="text-text-primary text-[15px] leading-relaxed mt-1.5">
                            {question.question}
                        </p>
                    </div>
                </div>
                <span
                    className={`shrink-0 px-3 py-1.5 rounded-lg text-sm font-bold ${perfect
                            ? "bg-correct/20 text-correct"
                            : "bg-incorrect/20 text-incorrect"
                        }`}
                >
                    {correct}/5
                </span>
            </div>

            {/* Options with results */}
            <div className="space-y-2.5 ml-0 md:ml-14">
                {question.options.map((opt) => {
                    const userChecked = !!qAnswers[opt.id];
                    const isCorrectAnswer = opt.correct;
                    const userGotIt = userChecked === isCorrectAnswer;

                    return (
                        <div
                            key={opt.id}
                            className={`flex items-start gap-3 p-3.5 rounded-xl border ${userGotIt
                                    ? "bg-correct-bg/50 border-correct/10"
                                    : "bg-incorrect-bg/50 border-incorrect/10"
                                }`}
                        >
                            <div className="mt-0.5 shrink-0">
                                {userGotIt ? (
                                    <div className="w-5 h-5 rounded-full bg-correct/20 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-correct" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="w-5 h-5 rounded-full bg-incorrect/20 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-incorrect" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <span className="text-sm leading-relaxed">
                                    <span className="font-semibold text-gt-gold/80 mr-1.5">
                                        {opt.id.toUpperCase()}.
                                    </span>
                                    <span className={userGotIt ? "text-text-primary/90" : "text-incorrect/90"}>
                                        {opt.text}
                                    </span>
                                </span>
                                <div className="mt-1.5 flex items-center gap-2 text-xs">
                                    <span className={`font-medium ${isCorrectAnswer ? "text-correct" : "text-text-secondary"}`}>
                                        Correct: {isCorrectAnswer ? "TRUE" : "FALSE"}
                                    </span>
                                    {!userGotIt && (
                                        <span className="text-incorrect/70">
                                            — You marked: {userChecked ? "TRUE" : "FALSE"}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Explanation */}
            <div className="mt-5 ml-0 md:ml-14 p-5 bg-gt-navy/60 rounded-xl border border-gt-gold/10">
                <p className="text-xs font-semibold text-gt-gold mb-1.5 uppercase tracking-wide">
                    Explanation
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                    {question.explanation}
                </p>
            </div>
        </div>
    );
}

/* ───────────────────────── Exam Screen (One Q per page) ───────── */
function ExamScreen({ onSubmit }) {
    const [answers, setAnswers] = useState({});
    const [currentQ, setCurrentQ] = useState(0);
    const [showConfirm, setShowConfirm] = useState(false);

    const question = examData[currentQ];
    const totalQ = examData.length;

    const handleToggle = (questionId, optionId) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: {
                ...(prev[questionId] || {}),
                [optionId]: !prev[questionId]?.[optionId],
            },
        }));
    };

    const answeredCount = Object.keys(answers).filter((qId) =>
        Object.values(answers[qId] || {}).some(Boolean)
    ).length;

    const goNext = () => {
        if (currentQ < totalQ - 1) {
            setCurrentQ((p) => p + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const goPrev = () => {
        if (currentQ > 0) {
            setCurrentQ((p) => p - 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handleConfirmSubmit = () => {
        onSubmit(answers);
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* ── Sticky Header ── */}
            <div className="sticky top-0 z-50 bg-gt-navy-dark/90 backdrop-blur-xl border-b border-surface-lighter/30">
                <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gt-gold to-gt-gold-dark flex items-center justify-center">
                            <span className="text-gt-navy-dark font-extrabold text-xs">ML4T</span>
                        </div>
                        <span className="text-sm font-medium text-text-secondary hidden sm:inline">
                            Practice Exam 1
                        </span>
                    </div>
                    <div className="flex items-center gap-5">
                        <span className="text-sm text-text-secondary">
                            <span className="text-gt-gold font-semibold">{answeredCount}</span> / 25 answered
                        </span>
                        <div className="w-28 h-1.5 bg-surface-lighter rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-gt-gold to-gt-gold-light rounded-full transition-all duration-500"
                                style={{ width: `${(answeredCount / 25) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Question Area (Centered) ── */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 md:py-16">
                {/* Question Number */}
                <div className="mb-8 text-center">
                    <span className="text-text-secondary text-sm font-medium">
                        Question{" "}
                        <span className="text-gt-gold font-bold text-lg">{currentQ + 1}</span>{" "}
                        <span className="text-text-secondary/50">of {totalQ}</span>
                    </span>
                </div>

                {/* The Question Card — key forces re-mount for animation */}
                <div key={question.id} className="w-full">
                    <QuestionCard
                        question={question}
                        answers={answers}
                        onToggle={handleToggle}
                    />
                </div>

                {/* ── Navigation ── */}
                <div className="mt-10 flex items-center gap-4 w-full max-w-2xl mx-auto">
                    {/* Prev */}
                    <button
                        onClick={goPrev}
                        disabled={currentQ === 0}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer ${currentQ === 0
                                ? "text-text-secondary/30 bg-surface/50 cursor-not-allowed"
                                : "text-text-secondary bg-surface border border-surface-lighter hover:border-gt-gold/30 hover:text-gt-gold"
                            }`}
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        Prev
                    </button>

                    {/* Dots / Mini-map */}
                    <div className="flex-1 flex justify-center flex-wrap gap-1.5">
                        {examData.map((q, i) => {
                            const isAnswered = Object.values(answers[q.id] || {}).some(Boolean);
                            const isCurrent = i === currentQ;
                            return (
                                <button
                                    key={q.id}
                                    onClick={() => { setCurrentQ(i); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                                    className={`w-7 h-7 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${isCurrent
                                            ? "bg-gt-gold text-gt-navy-dark scale-110 shadow-md"
                                            : isAnswered
                                                ? "bg-gt-gold/20 text-gt-gold hover:bg-gt-gold/30"
                                                : "bg-surface-lighter/50 text-text-secondary/50 hover:bg-surface-lighter"
                                        }`}
                                    title={`Question ${q.id}`}
                                >
                                    {q.id}
                                </button>
                            );
                        })}
                    </div>

                    {/* Next or Submit */}
                    {currentQ < totalQ - 1 ? (
                        <button
                            onClick={goNext}
                            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-surface border border-surface-lighter text-text-secondary hover:border-gt-gold/30 hover:text-gt-gold transition-all cursor-pointer"
                        >
                            Next
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    ) : (
                        <button
                            id="submit-exam-btn"
                            onClick={() => setShowConfirm(true)}
                            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-gt-gold to-gt-gold-light text-gt-navy-dark shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-[1.03] active:scale-[0.98]"
                        >
                            Submit
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            {/* ── Confirmation Modal ── */}
            {showConfirm && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-surface border border-surface-lighter rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl animate-fade-in-up">
                        <h3 className="text-xl font-bold text-text-primary mb-3">
                            Submit Exam?
                        </h3>
                        <p className="text-text-secondary text-sm mb-8 leading-relaxed">
                            You have answered{" "}
                            <span className="text-gt-gold font-semibold">{answeredCount}</span>{" "}
                            out of 25 questions.
                            {answeredCount < 25 && (
                                <span className="text-incorrect">
                                    {" "}{25 - answeredCount} questions are unanswered and will be scored as all FALSE.
                                </span>
                            )}
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowConfirm(false)}
                                className="flex-1 px-4 py-3 border border-surface-lighter text-text-secondary rounded-xl font-medium text-sm hover:bg-surface-light transition-colors cursor-pointer"
                            >
                                Go Back
                            </button>
                            <button
                                id="confirm-submit-btn"
                                onClick={handleConfirmSubmit}
                                className="flex-1 px-4 py-3 bg-gradient-to-r from-gt-gold to-gt-gold-light text-gt-navy-dark rounded-xl font-bold text-sm hover:shadow-lg transition-all cursor-pointer"
                            >
                                Confirm Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

/* ───────────────────────── Results Screen ───────────────────────── */
function ResultsScreen({ answers, onRestart }) {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    let totalCorrectSubs = 0;
    const totalSubs = examData.length * 5;
    const questionScores = examData.map((q) => {
        const qAnswers = answers[q.id] || {};
        let correct = 0;
        q.options.forEach((opt) => {
            const userChecked = !!qAnswers[opt.id];
            if (userChecked === opt.correct) correct++;
        });
        totalCorrectSubs += correct;
        return { id: q.id, correct, perfect: correct === 5 };
    });

    const perfectCount = questionScores.filter((s) => s.perfect).length;
    const percentage = Math.round((totalCorrectSubs / totalSubs) * 100);

    let grade = "F";
    if (percentage >= 90) grade = "A";
    else if (percentage >= 80) grade = "B";
    else if (percentage >= 70) grade = "C";
    else if (percentage >= 60) grade = "D";

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="bg-gradient-to-b from-surface to-gt-navy-dark border-b border-surface-lighter/30">
                <div className="max-w-3xl mx-auto px-6 py-16 text-center">
                    <div className="animate-fade-in-up">
                        <p className="text-gt-gold text-sm font-medium tracking-widest uppercase mb-8">
                            Exam Complete
                        </p>

                        {/* Score Circle */}
                        <div className="w-40 h-40 mx-auto rounded-full bg-surface border-4 border-gt-gold/30 flex flex-col items-center justify-center mb-8 shadow-lg">
                            <span className="text-5xl font-extrabold text-gt-gold">{percentage}%</span>
                            <span className="text-sm text-text-secondary mt-1">Grade: {grade}</span>
                        </div>

                        {/* Stats Row */}
                        <div className="flex items-center justify-center gap-8 text-sm mb-10">
                            <div>
                                <span className="text-text-secondary">Sub-answers: </span>
                                <span className="text-gt-gold font-bold">{totalCorrectSubs}</span>
                                <span className="text-text-secondary"> / {totalSubs}</span>
                            </div>
                            <div className="w-px h-4 bg-surface-lighter" />
                            <div>
                                <span className="text-text-secondary">Perfect: </span>
                                <span className="text-correct font-bold">{perfectCount}</span>
                                <span className="text-text-secondary"> / 25</span>
                            </div>
                        </div>

                        {/* Mini-map */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {questionScores.map((s) => (
                                <a
                                    key={s.id}
                                    href={`#result-q${s.id}`}
                                    className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-all hover:scale-110 ${s.perfect
                                            ? "bg-correct/20 text-correct"
                                            : s.correct >= 4
                                                ? "bg-gt-gold/15 text-gt-gold"
                                                : s.correct >= 3
                                                    ? "bg-gt-gold/10 text-gt-gold/70"
                                                    : "bg-incorrect/15 text-incorrect"
                                        }`}
                                    title={`Q${s.id}: ${s.correct}/5`}
                                >
                                    {s.id}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Results */}
            <div className="max-w-3xl mx-auto px-6 py-10 space-y-6">
                <h2 className="text-xl font-bold text-text-primary mb-2">
                    Detailed Breakdown
                </h2>
                {examData.map((q) => (
                    <div key={q.id} id={`result-q${q.id}`}>
                        <ResultCard question={q} answers={answers} />
                    </div>
                ))}

                {/* Restart */}
                <div className="pt-10 pb-20 text-center">
                    <button
                        id="restart-exam-btn"
                        onClick={onRestart}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-surface border border-gt-gold/30 text-gt-gold font-semibold rounded-xl hover:bg-surface-light transition-all cursor-pointer"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Retake Exam
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ───────────────────────── Main App ───────────────────────── */
export default function App() {
    const [screen, setScreen] = useState("start");
    const [submittedAnswers, setSubmittedAnswers] = useState({});

    const handleStart = () => {
        setScreen("exam");
        window.scrollTo({ top: 0 });
    };

    const handleSubmit = (answers) => {
        setSubmittedAnswers(answers);
        setScreen("results");
    };

    const handleRestart = () => {
        setSubmittedAnswers({});
        setScreen("start");
        window.scrollTo({ top: 0 });
    };

    return (
        <>
            {screen === "start" && <StartScreen onStart={handleStart} />}
            {screen === "exam" && <ExamScreen onSubmit={handleSubmit} />}
            {screen === "results" && (
                <ResultsScreen answers={submittedAnswers} onRestart={handleRestart} />
            )}
        </>
    );
}
