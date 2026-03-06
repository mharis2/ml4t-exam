import { useState, useEffect } from "react";
import examData1 from "./examData";
import examData2 from "./examData2";
import examData3 from "./examData3";
import examData4 from "./examData4";

const EXAMS = [
    {
        id: 1,
        title: "Practice Exam 1",
        subtitle: "Core Foundations",
        description: "ML types, bias-variance, regression basics, kNN behavior, tree methods, ensemble learners, hedge fund structure, CAPM fundamentals.",
        data: examData1,
        color: "from-gt-gold to-gt-gold-dark",
    },
    {
        id: 2,
        title: "Practice Exam 2",
        subtitle: "Concepts & Applications",
        description: "ERM, RL components, statistical significance, tree pruning, OOB error, Bayes' theorem, data leakage, market mechanics, arbitrage, EMH.",
        data: examData2,
        color: "from-blue-400 to-blue-600",
    },
    {
        id: 3,
        title: "Practice Exam 3",
        subtitle: "Deep Understanding",
        description: "Generalization gaps, kNN dimensionality, Gini/entropy impurity, boosting tuning, base-rate problems, covariance, Sharpe ratio, Lasso geometry.",
        data: examData3,
        color: "from-emerald-400 to-emerald-600",
    },
    {
        id: 4,
        title: "Practice Exam 4",
        subtitle: "Edge Cases & Traps",
        description: "Applied scenarios, confounding variables, bagging theory, polynomial pitfalls, 130/30 strategy, CAGR math, HFT, standardization, factor models.",
        data: examData4,
        color: "from-violet-400 to-violet-600",
    },
];

/* ───────────────────────── Start Screen ───────────────────────── */
function StartScreen({ onSelectExam }) {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-16">
            <div className="w-full max-w-3xl text-center">
                {/* Badge */}
                <div className="mb-12 animate-fade-in-up">
                    <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-gt-gold to-gt-gold-dark flex items-center justify-center shadow-2xl animate-pulse-glow">
                        <span className="text-gt-navy-dark font-extrabold text-2xl tracking-tight">
                            ML4T
                        </span>
                    </div>
                </div>

                {/* Title Block */}
                <div className="mb-14 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4 tracking-tight leading-[1.1]">
                        ML4T Exam Prep
                    </h1>
                    <p className="text-gt-gold text-lg font-semibold mb-3">
                        CS7646 — Machine Learning for Trading
                    </p>
                    <p className="text-text-secondary text-base leading-relaxed max-w-md mx-auto">
                        4 Practice Exams &middot; 100 Total Questions &middot; Weeks 1–7
                    </p>
                </div>

                {/* Exam Selection Cards */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14 animate-fade-in-up"
                    style={{ animationDelay: "0.2s" }}
                >
                    {EXAMS.map((exam, i) => (
                        <button
                            key={exam.id}
                            id={`select-exam-${exam.id}`}
                            onClick={() => onSelectExam(exam)}
                            className="group relative text-left bg-surface rounded-2xl border border-white/[0.06] p-7 hover:border-gt-gold/30 transition-all duration-300 cursor-pointer hover:bg-white/[0.03] hover:shadow-lg hover:shadow-gt-gold/5 hover:scale-[1.02] active:scale-[0.98]"
                            style={{ animationDelay: `${0.2 + i * 0.08}s` }}
                        >
                            {/* Exam number badge */}
                            <div className="flex items-center gap-4 mb-4">
                                <div
                                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exam.color} flex items-center justify-center shadow-lg`}
                                >
                                    <span className="text-white font-extrabold text-lg">{exam.id}</span>
                                </div>
                                <div className="text-left">
                                    <h3 className="text-text-primary font-bold text-base group-hover:text-gt-gold transition-colors">
                                        {exam.title}
                                    </h3>
                                    <p className="text-gt-gold/70 text-xs font-semibold uppercase tracking-widest">
                                        {exam.subtitle}
                                    </p>
                                </div>
                            </div>
                            <p className="text-text-secondary/70 text-sm leading-[1.7]">
                                {exam.description}
                            </p>
                            {/* Arrow indicator */}
                            <div className="absolute top-7 right-6 text-text-secondary/20 group-hover:text-gt-gold/50 transition-all group-hover:translate-x-1">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Info row */}
                <div
                    className="flex items-center justify-center gap-6 text-text-secondary/40 text-sm animate-fade-in-up"
                    style={{ animationDelay: "0.4s" }}
                >
                    <span>25 Questions Each</span>
                    <span className="w-1 h-1 rounded-full bg-text-secondary/20" />
                    <span>Multi-Select Format</span>
                    <span className="w-1 h-1 rounded-full bg-text-secondary/20" />
                    <span>Closed-Book</span>
                </div>

                <p className="text-text-secondary/20 text-sm mt-14">
                    Georgia Tech &middot; Spring 2026
                </p>
            </div>
        </div>
    );
}

/* ──────────────────── Exam Screen (One Q per page) ────────────── */
function ExamScreen({ examInfo, onSubmit, onBack }) {
    const [answers, setAnswers] = useState({});
    const [currentQ, setCurrentQ] = useState(0);
    const [showConfirm, setShowConfirm] = useState(false);
    const [direction, setDirection] = useState("right");

    const data = examInfo.data;
    const question = data[currentQ];
    const totalQ = data.length;
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
                        <button
                            onClick={onBack}
                            className="flex items-center gap-2 text-text-secondary/60 hover:text-gt-gold transition-colors cursor-pointer"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${examInfo.color} flex items-center justify-center`}>
                            <span className="text-white font-extrabold text-[10px]">{examInfo.id}</span>
                        </div>
                        <span className="text-sm text-text-secondary font-medium hidden sm:inline">
                            {examInfo.title}
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
                        {data.map((q, i) => {
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
function ResultsScreen({ examInfo, answers, onRestart, onHome }) {
    const data = examInfo.data;
    useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

    let totalCorrectSubs = 0;
    const totalSubs = data.length * 5;
    const questionScores = data.map((q) => {
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
                    <p className="text-gt-gold text-sm font-bold tracking-[0.2em] uppercase mb-3">
                        {examInfo.title}
                    </p>
                    <p className="text-text-secondary/50 text-sm mb-10">
                        {examInfo.subtitle} — Exam Complete
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
                {data.map((q) => (
                    <div key={q.id} id={`result-q${q.id}`}>
                        <ResultCard question={q} answers={answers} />
                    </div>
                ))}

                <div className="pt-12 pb-24 flex flex-col sm:flex-row items-center justify-center gap-4">
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
                    <button
                        id="all-exams-btn"
                        onClick={onHome}
                        className="inline-flex items-center gap-3 px-10 py-4 bg-white/[0.04] border border-white/[0.1] text-text-secondary font-semibold rounded-2xl hover:bg-white/[0.07] hover:text-gt-gold hover:border-gt-gold/25 transition-all cursor-pointer"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        All Exams
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ───────────────────────── Main App ───────────────────────── */
export default function App() {
    const [screen, setScreen] = useState("start");
    const [selectedExam, setSelectedExam] = useState(null);
    const [submittedAnswers, setSubmittedAnswers] = useState({});

    const goHome = () => {
        setSelectedExam(null);
        setSubmittedAnswers({});
        setScreen("start");
        window.scrollTo({ top: 0 });
    };

    return (
        <>
            {screen === "start" && (
                <StartScreen
                    onSelectExam={(exam) => {
                        setSelectedExam(exam);
                        setScreen("exam");
                        window.scrollTo({ top: 0 });
                    }}
                />
            )}
            {screen === "exam" && selectedExam && (
                <ExamScreen
                    examInfo={selectedExam}
                    onSubmit={(a) => {
                        setSubmittedAnswers(a);
                        setScreen("results");
                    }}
                    onBack={goHome}
                />
            )}
            {screen === "results" && selectedExam && (
                <ResultsScreen
                    examInfo={selectedExam}
                    answers={submittedAnswers}
                    onRestart={() => {
                        setSubmittedAnswers({});
                        setScreen("exam");
                        window.scrollTo({ top: 0 });
                    }}
                    onHome={goHome}
                />
            )}
        </>
    );
}
