import { useState, useEffect } from "react";
import examData from "./examData";

/* ───────────────────────── Start Screen ───────────────────────── */
function StartScreen({ onStart }) {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-16">
            <div className="w-full max-w-xl text-center">
                {/* Badge */}
                <div className="mb-14 animate-fade-in-up">
                    <div className="w-28 h-28 mx-auto rounded-3xl bg-gradient-to-br from-gt-gold to-gt-gold-dark flex items-center justify-center shadow-2xl animate-pulse-glow">
                        <span className="text-gt-navy-dark font-extrabold text-3xl tracking-tight">
                            ML4T
                        </span>
                    </div>
                </div>

                {/* Title Block */}
                <div className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-text-primary mb-5 tracking-tight leading-[1.1]">
                        Practice Exam 1
                    </h1>
                    <p className="text-gt-gold text-xl font-semibold mb-6">
                        CS7646 — Machine Learning for Trading
                    </p>
                    <p className="text-text-secondary text-base leading-relaxed max-w-sm mx-auto">
                        25 Multi-Select Questions &middot; Closed-Book Format<br />
                        Each question has 5 sub-answers — mark each True or False.
                    </p>
                </div>

                {/* Info Cards */}
                <div
                    className="grid grid-cols-3 gap-5 mb-16 animate-fade-in-up"
                    style={{ animationDelay: "0.2s" }}
                >
                    {[
                        { label: "Questions", value: "25" },
                        { label: "Format", value: "Multi-Select" },
                        { label: "Topics", value: "Weeks 1–7" },
                    ].map((item) => (
                        <div
                            key={item.label}
                            className="bg-surface rounded-2xl py-7 px-4 border border-surface-lighter/50"
                        >
                            <div className="text-gt-gold font-extrabold text-2xl mb-2">
                                {item.value}
                            </div>
                            <div className="text-text-secondary text-sm">{item.label}</div>
                        </div>
                    ))}
                </div>

                {/* Start Button */}
                <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                    <button
                        id="start-exam-btn"
                        onClick={onStart}
                        className="group inline-flex items-center gap-3 px-14 py-5 bg-gradient-to-r from-gt-gold to-gt-gold-light text-gt-navy-dark font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] cursor-pointer"
                    >
                        Start Exam
                        <svg
                            className="w-5 h-5 transition-transform group-hover:translate-x-1.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>

                <p className="text-text-secondary/30 text-sm mt-16">
                    Georgia Tech &middot; Spring 2026
                </p>
            </div>
        </div>
    );
}

/* ──────────────────── Exam Screen (One Q per page) ────────────── */
function ExamScreen({ onSubmit }) {
    const [answers, setAnswers] = useState({});
    const [currentQ, setCurrentQ] = useState(0);
    const [showConfirm, setShowConfirm] = useState(false);
    const [direction, setDirection] = useState("right");

    const question = examData[currentQ];
    const totalQ = examData.length;
    const qAnswers = answers[question.id] || {};

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

    const goTo = (i) => {
        setDirection(i > currentQ ? "right" : "left");
        setCurrentQ(i);
    };
    const goNext = () => currentQ < totalQ - 1 && goTo(currentQ + 1);
    const goPrev = () => currentQ > 0 && goTo(currentQ - 1);

    return (
        <div className="min-h-screen flex flex-col">
            {/* ── Sticky Header ── */}
            <header className="sticky top-0 z-50 bg-gt-navy-dark/85 backdrop-blur-2xl border-b border-white/[0.06]">
                <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gt-gold to-gt-gold-dark flex items-center justify-center">
                            <span className="text-gt-navy-dark font-extrabold text-[10px]">ML4T</span>
                        </div>
                        <span className="text-sm text-text-secondary font-medium hidden sm:inline">
                            Practice Exam 1
                        </span>
                    </div>

                    <div className="flex items-center gap-5">
                        <span className="text-sm text-text-secondary">
                            <span className="text-gt-gold font-bold">{answeredCount}</span>
                            <span className="text-text-secondary/50"> / 25</span>
                        </span>
                        <div className="w-32 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-gt-gold to-gt-gold-light rounded-full transition-all duration-700 ease-out"
                                style={{ width: `${(answeredCount / 25) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* ── Main Content (Centered) ── */}
            <main className="flex-1 flex flex-col items-center justify-center px-6 py-10">
                {/* Question Counter */}
                <p className="text-center text-text-secondary/60 text-sm font-medium tracking-wide mb-10">
                    Question&ensp;
                    <span className="text-gt-gold font-extrabold text-2xl align-middle">
                        {currentQ + 1}
                    </span>
                    &ensp;
                    <span className="text-text-secondary/30">of {totalQ}</span>
                </p>

                {/* ── Question Card ── */}
                <div
                    key={question.id}
                    className="w-full max-w-[720px] animate-fade-in-up"
                >
                    {/* Topic Pill */}
                    <div className="text-center mb-5">
                        <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-gt-gold/60 bg-gt-gold/[0.07] rounded-full px-5 py-1.5">
                            {question.topic}
                        </span>
                    </div>

                    {/* Card */}
                    <div className="bg-surface rounded-3xl border border-white/[0.06] shadow-xl px-8 py-10 md:px-12 md:py-12">
                        {/* Question Text */}
                        <p className="text-text-primary text-[17px] md:text-lg leading-[1.8] mb-10">
                            {question.question}
                        </p>

                        {/* Options */}
                        <div className="space-y-4">
                            {question.options.map((opt) => {
                                const checked = !!qAnswers[opt.id];
                                return (
                                    <label
                                        key={opt.id}
                                        className={`group flex items-start gap-5 px-6 py-5 rounded-2xl cursor-pointer transition-all duration-200 border-2 ${checked
                                                ? "bg-gt-gold/[0.08] border-gt-gold/40"
                                                : "bg-white/[0.02] border-transparent hover:bg-white/[0.04] hover:border-white/[0.08]"
                                            }`}
                                    >
                                        {/* Custom Checkbox */}
                                        <div className="mt-[3px] shrink-0">
                                            <div
                                                className={`w-[22px] h-[22px] rounded-md border-2 flex items-center justify-center transition-all duration-200 ${checked
                                                        ? "bg-gt-gold border-gt-gold shadow-[0_0_12px_rgba(179,163,105,0.25)]"
                                                        : "border-white/20 group-hover:border-gt-gold/50"
                                                    }`}
                                            >
                                                {checked && (
                                                    <svg className="w-3 h-3 text-gt-navy-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                        <input
                                            type="checkbox"
                                            className="sr-only"
                                            checked={checked}
                                            onChange={() => handleToggle(question.id, opt.id)}
                                        />
                                        <span className="text-[15px] md:text-base text-text-primary/85 leading-[1.7]">
                                            <span className="font-bold text-gt-gold/70 mr-2">
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

                {/* ── Navigation ── */}
                <div className="w-full max-w-[720px] mt-10">
                    {/* Prev / Next Row */}
                    <div className="flex items-center justify-between mb-6">
                        <button
                            onClick={goPrev}
                            disabled={currentQ === 0}
                            className={`flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all cursor-pointer ${currentQ === 0
                                    ? "text-text-secondary/20 cursor-not-allowed"
                                    : "text-text-secondary bg-white/[0.04] border border-white/[0.08] hover:border-gt-gold/30 hover:text-gt-gold"
                                }`}
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                            Prev
                        </button>

                        {currentQ < totalQ - 1 ? (
                            <button
                                onClick={goNext}
                                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-text-secondary bg-white/[0.04] border border-white/[0.08] hover:border-gt-gold/30 hover:text-gt-gold transition-all cursor-pointer"
                            >
                                Next
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        ) : (
                            <button
                                id="submit-exam-btn"
                                onClick={() => setShowConfirm(true)}
                                className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-gt-gold to-gt-gold-light text-gt-navy-dark shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-[1.03] active:scale-[0.97]"
                            >
                                Submit Exam
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        )}
                    </div>

                    {/* Dot Mini-map */}
                    <div className="flex justify-center flex-wrap gap-2">
                        {examData.map((q, i) => {
                            const isAnswered = Object.values(answers[q.id] || {}).some(Boolean);
                            const isCurrent = i === currentQ;
                            return (
                                <button
                                    key={q.id}
                                    onClick={() => goTo(i)}
                                    className={`w-8 h-8 rounded-lg text-[11px] font-bold transition-all duration-200 cursor-pointer ${isCurrent
                                            ? "bg-gt-gold text-gt-navy-dark scale-110 shadow-lg shadow-gt-gold/20"
                                            : isAnswered
                                                ? "bg-gt-gold/20 text-gt-gold hover:bg-gt-gold/30"
                                                : "bg-white/[0.05] text-text-secondary/40 hover:bg-white/[0.08] hover:text-text-secondary/70"
                                        }`}
                                    title={`Q${q.id}`}
                                >
                                    {q.id}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </main>

            {/* ── Confirmation Modal ── */}
            {showConfirm && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md animate-fade-in">
                    <div className="bg-surface border border-white/[0.08] rounded-3xl p-10 max-w-md w-full mx-6 shadow-2xl animate-fade-in-up">
                        <h3 className="text-2xl font-bold text-text-primary mb-4">
                            Submit Exam?
                        </h3>
                        <p className="text-text-secondary text-sm mb-10 leading-relaxed">
                            You have answered{" "}
                            <span className="text-gt-gold font-bold">{answeredCount}</span>{" "}
                            out of 25 questions.
                            {answeredCount < 25 && (
                                <span className="text-incorrect">
                                    {" "}{25 - answeredCount} unanswered questions will be scored as all FALSE.
                                </span>
                            )}
                        </p>
                        <div className="flex gap-4">
                            <button
                                onClick={() => setShowConfirm(false)}
                                className="flex-1 py-3.5 border border-white/[0.1] text-text-secondary rounded-xl font-semibold text-sm hover:bg-white/[0.04] transition-colors cursor-pointer"
                            >
                                Go Back
                            </button>
                            <button
                                id="confirm-submit-btn"
                                onClick={() => onSubmit(answers)}
                                className="flex-1 py-3.5 bg-gradient-to-r from-gt-gold to-gt-gold-light text-gt-navy-dark rounded-xl font-bold text-sm hover:shadow-lg transition-all cursor-pointer"
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

/* ───────────────────────── Results Card ───────────────────────── */
function ResultCard({ question, answers }) {
    const qAnswers = answers[question.id] || {};
    let correct = 0;
    question.options.forEach((opt) => {
        if (!!qAnswers[opt.id] === opt.correct) correct++;
    });
    const perfect = correct === 5;

    return (
        <div
            className={`rounded-3xl border-2 p-8 md:p-10 ${perfect
                    ? "bg-correct/[0.04] border-correct/20"
                    : "bg-surface border-white/[0.06]"
                }`}
        >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-8">
                <div className="flex items-start gap-5">
                    <span
                        className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm ${perfect ? "bg-correct/20 text-correct" : "bg-gt-gold/15 text-gt-gold"
                            }`}
                    >
                        {question.id}
                    </span>
                    <div>
                        <span className="text-[11px] font-bold text-gt-gold/50 tracking-[0.12em] uppercase">
                            {question.topic}
                        </span>
                        <p className="text-text-primary text-base leading-[1.7] mt-2">
                            {question.question}
                        </p>
                    </div>
                </div>
                <span
                    className={`shrink-0 px-4 py-2 rounded-xl text-sm font-extrabold ${perfect ? "bg-correct/20 text-correct" : "bg-incorrect/15 text-incorrect"
                        }`}
                >
                    {correct}/5
                </span>
            </div>

            {/* Options */}
            <div className="space-y-3 ml-0 md:ml-16">
                {question.options.map((opt) => {
                    const userChecked = !!qAnswers[opt.id];
                    const isCorrectAnswer = opt.correct;
                    const userGotIt = userChecked === isCorrectAnswer;
                    return (
                        <div
                            key={opt.id}
                            className={`flex items-start gap-4 p-4 rounded-xl border ${userGotIt
                                    ? "bg-correct/[0.04] border-correct/10"
                                    : "bg-incorrect/[0.04] border-incorrect/10"
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
                                <span className="text-sm leading-[1.7]">
                                    <span className="font-bold text-gt-gold/70 mr-2">{opt.id.toUpperCase()}.</span>
                                    <span className={userGotIt ? "text-text-primary/85" : "text-incorrect/85"}>{opt.text}</span>
                                </span>
                                <div className="mt-2 flex items-center gap-2 text-xs">
                                    <span className={`font-semibold ${isCorrectAnswer ? "text-correct" : "text-text-secondary/70"}`}>
                                        Correct: {isCorrectAnswer ? "TRUE" : "FALSE"}
                                    </span>
                                    {!userGotIt && (
                                        <span className="text-incorrect/60">— You marked: {userChecked ? "TRUE" : "FALSE"}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Explanation */}
            <div className="mt-6 ml-0 md:ml-16 p-6 bg-gt-gold/[0.03] rounded-2xl border border-gt-gold/10">
                <p className="text-[11px] font-bold text-gt-gold/60 mb-2 uppercase tracking-[0.12em]">Explanation</p>
                <p className="text-sm text-text-secondary leading-[1.8]">{question.explanation}</p>
            </div>
        </div>
    );
}

/* ───────────────────────── Results Screen ───────────────────────── */
function ResultsScreen({ answers, onRestart }) {
    useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

    let totalCorrectSubs = 0;
    const totalSubs = examData.length * 5;
    const questionScores = examData.map((q) => {
        const qAnswers = answers[q.id] || {};
        let correct = 0;
        q.options.forEach((opt) => { if (!!qAnswers[opt.id] === opt.correct) correct++; });
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
            {/* Score Header */}
            <div className="bg-gradient-to-b from-surface via-surface to-gt-navy-dark border-b border-white/[0.04]">
                <div className="max-w-3xl mx-auto px-6 py-20 text-center animate-fade-in-up">
                    <p className="text-gt-gold text-sm font-bold tracking-[0.2em] uppercase mb-10">
                        Exam Complete
                    </p>

                    <div className="w-44 h-44 mx-auto rounded-full bg-gt-navy-dark border-4 border-gt-gold/25 flex flex-col items-center justify-center mb-10 shadow-2xl">
                        <span className="text-5xl font-extrabold text-gt-gold">{percentage}%</span>
                        <span className="text-sm text-text-secondary/60 mt-1 font-medium">Grade: {grade}</span>
                    </div>

                    <div className="flex items-center justify-center gap-10 text-sm mb-12">
                        <div>
                            <span className="text-text-secondary/60">Sub-answers: </span>
                            <span className="text-gt-gold font-bold">{totalCorrectSubs}</span>
                            <span className="text-text-secondary/40"> / {totalSubs}</span>
                        </div>
                        <div className="w-px h-5 bg-white/[0.08]" />
                        <div>
                            <span className="text-text-secondary/60">Perfect: </span>
                            <span className="text-correct font-bold">{perfectCount}</span>
                            <span className="text-text-secondary/40"> / 25</span>
                        </div>
                    </div>

                    {/* Mini-map */}
                    <div className="flex flex-wrap justify-center gap-2.5">
                        {questionScores.map((s) => (
                            <a
                                key={s.id}
                                href={`#result-q${s.id}`}
                                className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold transition-all hover:scale-110 ${s.perfect
                                        ? "bg-correct/20 text-correct"
                                        : s.correct >= 4
                                            ? "bg-gt-gold/15 text-gt-gold"
                                            : s.correct >= 3
                                                ? "bg-gt-gold/10 text-gt-gold/60"
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

            {/* Detailed Results */}
            <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
                <h2 className="text-xl font-bold text-text-primary">Detailed Breakdown</h2>
                {examData.map((q) => (
                    <div key={q.id} id={`result-q${q.id}`}>
                        <ResultCard question={q} answers={answers} />
                    </div>
                ))}

                <div className="pt-12 pb-24 text-center">
                    <button
                        id="restart-exam-btn"
                        onClick={onRestart}
                        className="inline-flex items-center gap-3 px-10 py-4 bg-white/[0.04] border border-gt-gold/25 text-gt-gold font-semibold rounded-2xl hover:bg-white/[0.07] transition-all cursor-pointer"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

    return (
        <>
            {screen === "start" && (
                <StartScreen onStart={() => { setScreen("exam"); window.scrollTo({ top: 0 }); }} />
            )}
            {screen === "exam" && (
                <ExamScreen onSubmit={(a) => { setSubmittedAnswers(a); setScreen("results"); }} />
            )}
            {screen === "results" && (
                <ResultsScreen
                    answers={submittedAnswers}
                    onRestart={() => { setSubmittedAnswers({}); setScreen("start"); window.scrollTo({ top: 0 }); }}
                />
            )}
        </>
    );
}
