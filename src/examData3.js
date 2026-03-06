// ML4T Practice Exam 3 — 25 Multi-Select Questions
// Deeper conceptual questions and application scenarios from Weeks 1-7.

const examData3 = [
    // ── Q1: Generalization Gap & Cross-Validation ──
    {
        id: 1,
        topic: "Statistical Learning — Generalization",
        question:
            "You trained a neural network and observe Training MSE = 0.02 and Test MSE = 0.45. Consider the following statements about this scenario:",
        options: [
            {
                id: "a",
                text: "The generalization gap = Test Error − Train Error = 0.43, indicating severe overfitting — the model memorized training noise instead of learning the signal.",
                correct: true,
            },
            {
                id: "b",
                text: "To reduce overfitting, you could add L2 regularization (weight decay), increase training data, or reduce model complexity (fewer layers/neurons).",
                correct: true,
            },
            {
                id: "c",
                text: "Cross-validation (train on K-1 folds, validate on 1 fold, rotate K times) would have detected this overfitting during model development, before final evaluation.",
                correct: true,
            },
            {
                id: "d",
                text: "Increasing model complexity further would likely decrease the test MSE, since the model needs more capacity to learn the underlying pattern.",
                correct: false,
            },
            {
                id: "e",
                text: "The irreducible error (aleatoric uncertainty) sets a floor on prediction performance — no model can achieve test MSE below this level regardless of complexity or data size.",
                correct: true,
            },
        ],
        explanation:
            "With a generalization gap of 0.43, increasing complexity would make overfitting WORSE, not better. The model already has too much capacity relative to the data. Solutions: regularize, simplify, or get more data.",
    },

    // ── Q2: kNN Behavior & Dimensionality ──
    {
        id: 2,
        topic: "kNN — Curse of Dimensionality",
        question:
            "Consider kNN regression with varying K values and feature dimensions. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "kNN with K=1 achieves 100% training accuracy by memorizing every data point — each test query returns the exact nearest training example's label.",
                correct: true,
            },
            {
                id: "b",
                text: "kNN is competitive with linear regression for p=1 or p=2 features, but linear regression often wins for p ≥ 4 even when the true relationship is nonlinear — due to the curse of dimensionality.",
                correct: true,
            },
            {
                id: "c",
                text: "kNN is a 'lazy learner' — it has no training phase (just stores data) but has slow query time because it must search through all training data for each prediction.",
                correct: true,
            },
            {
                id: "d",
                text: "When the true relationship between X and Y is perfectly linear, kNN is still the preferred model because it makes fewer assumptions.",
                correct: false,
            },
            {
                id: "e",
                text: "As the number of features p grows large, the 'nearest' neighbors become progressively farther away in high-dimensional space — predictions average over distant, dissimilar points, increasing bias.",
                correct: true,
            },
        ],
        explanation:
            "When the relationship is truly linear, linear regression directly fits the correct functional form and outperforms kNN, which must approximate the linear surface from neighbors and incurs unnecessary variance. Fewer assumptions ≠ better model.",
    },

    // ── Q3: Dummy Variables & Hierarchical Principle ──
    {
        id: 3,
        topic: "Regression — Qualitative Predictors",
        question:
            "Consider how qualitative (categorical) predictors are handled in linear regression. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "For a qualitative predictor with k levels (e.g., region = East/South/West), you create k-1 dummy variables — one level serves as the baseline.",
                correct: true,
            },
            {
                id: "b",
                text: "The F-test is used to determine whether a multi-level qualitative predictor matters overall, rather than testing each dummy individually.",
                correct: true,
            },
            {
                id: "c",
                text: "The hierarchical principle states: if you include an interaction term X₁×X₂, you MUST also include the main effects X₁ and X₂, even if they are not individually significant.",
                correct: true,
            },
            {
                id: "d",
                text: "Common qualitative predictors in finance include sector, exchange, country, and credit rating category (investment-grade vs high-yield), all encoded as dummies.",
                correct: true,
            },
            {
                id: "e",
                text: "For a binary qualitative predictor (e.g., owns house: yes/no), you need two dummy variables — one for 'yes' and one for 'no'.",
                correct: false,
            },
        ],
        explanation:
            "For a binary predictor you need only ONE dummy variable (x=1 for yes, x=0 for no). The 'no' case is captured by the baseline (intercept β₀). Using two dummies creates perfect multicollinearity (they always sum to 1).",
    },

    // ── Q4: Classification Trees — Impurity ──
    {
        id: 4,
        topic: "Decision Trees — Classification",
        question:
            "Consider how classification trees make splits and measure node purity. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Regression trees minimize RSS at each split, while classification trees use impurity measures like the Gini Index or Entropy.",
                correct: true,
            },
            {
                id: "b",
                text: "Gini Index G = Σ p̂ₘₖ(1 - p̂ₘₖ) is small when nodes are 'pure' — meaning one class dominates the region.",
                correct: true,
            },
            {
                id: "c",
                text: "Entropy D = -Σ p̂ₘₖ log(p̂ₘₖ) is another purity measure — like Gini, it is minimized when classification is clear (one class dominates).",
                correct: true,
            },
            {
                id: "d",
                text: "When pruning a classification tree for final evaluation, classification error rate is used instead of Gini or Entropy — even though Gini/Entropy are used during tree building.",
                correct: true,
            },
            {
                id: "e",
                text: "Decision trees cannot handle qualitative predictors natively — all categorical variables must be converted to dummy variables before building the tree.",
                correct: false,
            },
        ],
        explanation:
            "Decision trees handle qualitative predictors NATIVELY — this is listed as a major advantage. Trees can split on categories directly without dummy encoding, unlike linear regression which requires it.",
    },

    // ── Q5: Random Forest — m Parameter ──
    {
        id: 5,
        topic: "Random Forests — Tuning",
        question:
            "Consider the key parameter m (number of features at each split) in Random Forests. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "The typical choice for m is approximately √p (square root of total predictors), which controls how many randomly chosen features are considered at each split.",
                correct: true,
            },
            {
                id: "b",
                text: "When m = p (all features available at each split), Random Forest degenerates to standard Bagging — since there is no feature randomization.",
                correct: true,
            },
            {
                id: "c",
                text: "The purpose of restricting to m < p features is to decorrelate the trees — preventing all trees from using the same dominant predictor at the top split.",
                correct: true,
            },
            {
                id: "d",
                text: "Random Forests generally achieve lower test error than Bagging because averaging decorrelated trees provides greater variance reduction than averaging correlated trees.",
                correct: true,
            },
            {
                id: "e",
                text: "Random Forests choose the best m features once before training begins and use only those features for all trees — the rest are permanently excluded.",
                correct: false,
            },
        ],
        explanation:
            "Random Forests randomly sample m features AT EACH SPLIT of each tree — not once upfront. Different splits in different trees consider different random subsets. This per-split randomization is what creates decorrelated trees.",
    },

    // ── Q6: Boosting Tuning Parameters ──
    {
        id: 6,
        topic: "Boosting — Parameters",
        question:
            "Consider the three tuning parameters of gradient boosting. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "B (number of trees) controls total iterations — too large a B can cause overfitting because boosting sequentially fits noise in the residuals.",
                correct: true,
            },
            {
                id: "b",
                text: "λ (shrinkage/learning rate, e.g., 0.01) controls how much each tree contributes — very small λ requires a very large B but typically produces better results.",
                correct: true,
            },
            {
                id: "c",
                text: "d (tree depth / number of splits) controls complexity per iteration — too large a d causes overfitting within individual trees.",
                correct: true,
            },
            {
                id: "d",
                text: "Boosting fits RESIDUALS of the current model at each step, slowly improving predictions — this is why it primarily reduces bias rather than variance.",
                correct: true,
            },
            {
                id: "e",
                text: "Like Bagging, increasing B in Boosting cannot cause overfitting — more trees always improve or maintain performance.",
                correct: false,
            },
        ],
        explanation:
            "This is a key distinction: Bagging does NOT overfit with more trees (averaging independent estimates doesn't hurt), but Boosting CAN overfit with too many trees because it sequentially fits residuals, eventually fitting noise. B must be tuned via CV.",
    },

    // ── Q7: Bayes' Theorem — Base Rate ──
    {
        id: 7,
        topic: "Probability — Bayes' Theorem",
        question:
            "Consider Bayes' theorem applied to a rare-event prediction problem. A model predicts market crashes with 90% accuracy (true positive) and a 3% false positive rate. Historically, crashes occur in 1% of periods. Evaluate:",
        options: [
            {
                id: "a",
                text: "If the model signals 'crash,' the actual probability of a crash is approximately 23% — much lower than the 90% accuracy suggests, due to the low base rate.",
                correct: true,
            },
            {
                id: "b",
                text: "This demonstrates that low prior probability (base rate) dominates — even with a good model, rare event predictions always have high false positive rates.",
                correct: true,
            },
            {
                id: "c",
                text: "In Bayes' theorem, the prior p(Y) represents the pre-data belief (1% crash rate), the likelihood p(X|Y) represents model accuracy (90%), and the posterior p(Y|X) is the updated belief (~23%).",
                correct: true,
            },
            {
                id: "d",
                text: "The evidence p(X) in Bayes' theorem is a normalizing constant that ensures probabilities sum to 1 across all possible outcomes.",
                correct: true,
            },
            {
                id: "e",
                text: "A 90% accurate crash prediction model will correctly classify 90% of all periods, making it highly reliable for trading decisions.",
                correct: false,
            },
        ],
        explanation:
            "90% accuracy for detecting crashes does NOT mean 90% of signals are correct. Because crashes are rare (1%), most 'crash' signals will be false positives. The ~23% posterior shows that 77% of alarm signals are false. Base rates dominate rare-event prediction.",
    },

    // ── Q8: Covariance & Portfolio Variance ──
    {
        id: 8,
        topic: "Portfolio Risk — Covariance",
        question:
            "Consider the relationship between covariance, correlation, and portfolio risk. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "The portfolio variance with two assets is: var(portfolio) = w₁²var(x) + w₂²var(y) + 2·w₁·w₂·cov(x,y), showing that covariance directly affects total risk.",
                correct: true,
            },
            {
                id: "b",
                text: "Negative covariance (anticorrelated assets) reduces portfolio variance below what either asset would achieve alone — this is the 'magic' of diversification.",
                correct: true,
            },
            {
                id: "c",
                text: "Independent variables have covariance = 0, but covariance = 0 does NOT always mean independence — unless the variables are jointly Gaussian.",
                correct: true,
            },
            {
                id: "d",
                text: "If two stocks are highly correlated (ρ = 0.9), combining them provides substantial diversification benefit because portfolio return equals the weighted average.",
                correct: false,
            },
            {
                id: "e",
                text: "Variance measures spread around the mean (risk/volatility²), while Expectation E[f] = Σ p(x)f(x) measures the weighted average (mean return).",
                correct: true,
            },
        ],
        explanation:
            "Highly correlated stocks (ρ = 0.9) provide LITTLE diversification benefit. Diversification works because of low or negative correlations. Portfolio return is the weighted average (unchanged), but risk reduction only comes from low/negative correlation between components.",
    },

    // ── Q9: Fund Type Comparison ──
    {
        id: 9,
        topic: "Fund Types — ETF/Mutual/Hedge",
        question:
            "Compare the three main investment fund types. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "ETFs trade throughout the day like stocks, have the lowest fees (~0.1-1.0% AUM), and are available to anyone — they are SEC regulated with high transparency.",
                correct: true,
            },
            {
                id: "b",
                text: "Mutual funds cannot be traded throughout the day — they settle at end-of-day NAV (Net Asset Value). They charge ~0.25-2.0% AUM with no performance fee.",
                correct: true,
            },
            {
                id: "c",
                text: "Hedge funds charge '2 and 20' (2% AUM + 20% profits), are only available to accredited investors, use extensive leverage, and advertising is historically prohibited.",
                correct: true,
            },
            {
                id: "d",
                text: "Hedge funds maintain very low transparency (secretive) because they cannot legally protect financial strategies via IP law — secrecy is their only defense against competitors copying strategies.",
                correct: true,
            },
            {
                id: "e",
                text: "Hedge fund fee example: if the portfolio earns 10%, the total fee = 2% + 20% × 10% = 4% — leaving the investor with 6%.",
                correct: false,
            },
        ],
        explanation:
            "The fee calculation is wrong. The 20% is typically on profits AFTER subtracting the management fee: Total = 2% + 20% × (10% - 2%) = 2% + 1.6% = 3.6%. The 20% is on NET profits (above the management fee), not gross return.",
    },

    // ── Q10: Sharpe Ratio Mechanics ──
    {
        id: 10,
        topic: "Performance — Sharpe Ratio",
        question:
            "Consider the Sharpe Ratio and related performance metrics. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Sharpe Ratio = (r_portfolio - r_risk_free) / std(r_portfolio), where the numerator is excess return and the denominator is total risk.",
                correct: true,
            },
            {
                id: "b",
                text: "In Python with daily returns: annualized Sharpe = √252 × daily_returns.mean() / daily_returns.std(), where 252 is the number of trading days per year.",
                correct: true,
            },
            {
                id: "c",
                text: "The S&P 500 long-term Sharpe ratio is approximately 0.5, and a Sharpe ≥ 1.0 is considered very good and is rarely achieved sustainably.",
                correct: true,
            },
            {
                id: "d",
                text: "Drawdown measures the maximum percentage decline from a peak to a subsequent trough — hedge funds care deeply about this metric.",
                correct: true,
            },
            {
                id: "e",
                text: "The Sortino Ratio is identical to the Sharpe Ratio — both penalize upside and downside volatility equally.",
                correct: false,
            },
        ],
        explanation:
            "The Sortino Ratio differs from Sharpe by penalizing ONLY downside volatility, not upside. An asset with occasional large gains has high Sharpe penalty but low Sortino penalty. Sortino is better for asymmetric return distributions.",
    },

    // ── Q11: Short Selling Risks ──
    {
        id: 11,
        topic: "Trading — Short Selling",
        question:
            "Consider the mechanics and risks of short selling. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Short selling: borrow shares → sell them ('sell to open') → wait for price decline → buy back at lower price ('buy to close') → return shares to lender.",
                correct: true,
            },
            {
                id: "b",
                text: "The profit from short selling = sale price - repurchase price - rebate (interest paid to the share lender).",
                correct: true,
            },
            {
                id: "c",
                text: "Maximum loss when long a stock is 100% (stock drops to $0), but maximum short loss is theoretically unlimited because the stock price can rise without bound.",
                correct: true,
            },
            {
                id: "d",
                text: "The long-term upward trend of stock markets means shorting 'fights the trend,' making short positions structurally disadvantaged over time.",
                correct: true,
            },
            {
                id: "e",
                text: "Short selling is risk-free when used in a market-neutral portfolio because the long positions offset any short losses.",
                correct: false,
            },
        ],
        explanation:
            "Short selling is never risk-free, even in a market-neutral portfolio. If you short a stock that rises dramatically (e.g., a short squeeze), losses on the short can exceed gains on the long positions. Market neutrality reduces market DIRECTION risk, not individual stock risk.",
    },

    // ── Q12: Neural Network History ──
    {
        id: 12,
        topic: "Deep Learning — History",
        question:
            "Consider the history of neural networks and deep learning. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Perceptrons (Rosenblatt, 1962) were single-layer networks with step function activation — guaranteed to converge for linearly separable problems but failed for XOR (Minsky, 1969).",
                correct: true,
            },
            {
                id: "b",
                text: "Backpropagation (Rumelhart et al., 1986) enabled efficient gradient computation in multi-layer networks, requiring differentiable activation functions and enabling stochastic gradient descent.",
                correct: true,
            },
            {
                id: "c",
                text: "The 2012+ deep learning revolution was enabled by GPUs — AlexNet winning ImageNet 2012 marked the turning point, and model scale grew exponentially (GPT-4: ~1 trillion parameters).",
                correct: true,
            },
            {
                id: "d",
                text: "Transfer learning = pre-train on a massive general dataset, then fine-tune on a specific task — useful when labeled data for the target task is scarce.",
                correct: true,
            },
            {
                id: "e",
                text: "Perceptrons could solve the XOR problem because XOR is linearly separable in the input space.",
                correct: false,
            },
        ],
        explanation:
            "XOR is NOT linearly separable — it cannot be separated by a single line in 2D space. This was precisely the limitation that Minsky identified, leading to the first 'AI winter.' Multi-layer networks with hidden layers (enabled by backpropagation) solved XOR.",
    },

    // ── Q13: SHAP & Explainability ──
    {
        id: 13,
        topic: "ML Explainability",
        question:
            "Consider model explainability and SHAP values in the context of financial ML. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "SHAP (SHapley Additive exPlanations) measures the marginal contribution of each feature to a prediction, based on cooperative game theory.",
                correct: true,
            },
            {
                id: "b",
                text: "Asset owners demand attribution (why did the model make this trade?), making explainability a practical requirement, not just an academic concern.",
                correct: true,
            },
            {
                id: "c",
                text: "SHAP values can be used to verify that feature relationships make economic sense — for example, high leverage should correlate with higher crash probability.",
                correct: true,
            },
            {
                id: "d",
                text: "A well-explained 70% accuracy strategy often beats an unexplained 80% accuracy strategy in institutional settings — explanation builds credibility and trust.",
                correct: true,
            },
            {
                id: "e",
                text: "SHAP values tell you which features are most important globally, but they cannot provide instance-level explanations for individual predictions.",
                correct: false,
            },
        ],
        explanation:
            "SHAP values DO provide instance-level explanations — that's one of their key strengths. For each prediction, SHAP shows how much each feature contributed. They can also be aggregated for global importance. Both local and global views are available.",
    },

    // ── Q14: Alt Data Categories ──
    {
        id: 14,
        topic: "Alternative Data — Types",
        question:
            "Consider the different categories of alternative data used in investments. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Geospatial data includes satellite imagery and mobile foot traffic — for example, counting cars in Walmart parking lots to predict retail sales before earnings announcements.",
                correct: true,
            },
            {
                id: "b",
                text: "NLP/Sentiment data includes social media, news articles, and earnings call transcripts — used to gauge market sentiment before it moves prices.",
                correct: true,
            },
            {
                id: "c",
                text: "Transaction data (credit card purchases, shipping records) provides real-time consumer spending signals that lead official economic statistics.",
                correct: true,
            },
            {
                id: "d",
                text: "Systematic/quantitative strategies prioritize breadth (many positions) and use high-frequency signals applied to thousands of stocks simultaneously.",
                correct: true,
            },
            {
                id: "e",
                text: "Alternative data is defined as any data in a structured format, like price, earnings, and P/E ratios from financial databases.",
                correct: false,
            },
        ],
        explanation:
            "Alternative data is defined as data in a NON-structured format — the opposite. Price, earnings, P/E ratios are TRADITIONAL structured data. Alt data includes unstructured sources like satellite images, social media text, web scraping results, etc.",
    },

    // ── Q15: Missing Data & Survivorship ──
    {
        id: 15,
        topic: "Data Quirks — Missing Data",
        question:
            "Consider data quality issues in financial backtesting. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "The recommended approach for missing data: fill forward first (propagate last known price), then fill backward (handles gaps at the start of the series).",
                correct: true,
            },
            {
                id: "b",
                text: "Survivorship bias occurs when a dataset only includes currently existing companies, excluding those that went bankrupt or were delisted — making historical performance look artificially good.",
                correct: true,
            },
            {
                id: "c",
                text: "When NASDAQ was halted from 12:14 PM to 3:10 PM, the correct fill method is to use the 12:13 PM value (last known) for all missing periods during the halt.",
                correct: true,
            },
            {
                id: "d",
                text: "Point-in-time data ensures that each data point was actually available when the model would have used it — preventing lookahead bias in backtesting.",
                correct: true,
            },
            {
                id: "e",
                text: "Fill backward should be applied FIRST, then fill forward — backward filling is always more accurate because it uses newer information.",
                correct: false,
            },
        ],
        explanation:
            "The correct order is fill FORWARD first, then fill backward. Forward fill is preferred because it uses information that was actually available at the time. Backward filling with newer info first would introduce lookahead bias. Fill backward is only used to handle initial gaps.",
    },

    // ── Q16: L2 Regularization Effects ──
    {
        id: 16,
        topic: "Regularization — Ridge",
        question:
            "Consider Ridge regression (L2 regularization) in detail. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Ridge minimizes: RSS + λ × Σβⱼ², adding a penalty on the squared magnitude of coefficients to prevent them from growing too large.",
                correct: true,
            },
            {
                id: "b",
                text: "Ridge keeps ALL predictors in the model — coefficients shrink towards zero but never reach exactly zero, so no automatic feature selection occurs.",
                correct: true,
            },
            {
                id: "c",
                text: "Ridge is especially effective when predictors are highly correlated (multicollinear) — it handles collinearity by distributing weight across correlated features rather than inflating individual coefficients.",
                correct: true,
            },
            {
                id: "d",
                text: "Predictors must be standardized (mean=0, std=1) before applying Ridge because the penalty depends on coefficient magnitude, which is affected by variable scale.",
                correct: true,
            },
            {
                id: "e",
                text: "Ridge regression produces sparser models than Lasso because its L2 penalty is stronger at driving coefficients to exactly zero.",
                correct: false,
            },
        ],
        explanation:
            "Ridge NEVER produces sparse models — that's exactly the opposite. Lasso (L1) creates sparsity by driving coefficients to exactly zero. Ridge shrinks all coefficients but keeps all of them non-zero. Lasso creates sparse models, Ridge does not.",
    },

    // ── Q17: Lasso Feature Selection ──
    {
        id: 17,
        topic: "Regularization — Lasso",
        question:
            "Consider the Lasso (L1 regularization) and why it creates sparse models. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Lasso minimizes: RSS + λ × Σ|βⱼ|, using the absolute value of coefficients as the penalty, rather than the squared value used by Ridge.",
                correct: true,
            },
            {
                id: "b",
                text: "Geometrically, Lasso creates zeros because the L1 constraint region is a diamond with corners at the axes — the RSS contours often intersect at a corner, setting that coefficient to exactly zero.",
                correct: true,
            },
            {
                id: "c",
                text: "The L2 constraint region (Ridge) is a circle with no corners, so the intersection with RSS contours is never exactly on an axis — coefficients never reach zero.",
                correct: true,
            },
            {
                id: "d",
                text: "Lasso is preferred when you believe only a few predictors have large effects and you want an interpretable sparse model — it automatically eliminates irrelevant features.",
                correct: true,
            },
            {
                id: "e",
                text: "Both Ridge and Lasso always outperform OLS, regardless of the dataset or relationship between predictors — there is no scenario where OLS is better.",
                correct: false,
            },
        ],
        explanation:
            "OLS CAN be better when p is small relative to n and predictors are uncorrelated — the bias introduced by regularization isn't worth the variance reduction. Ridge and Lasso outperform when OLS overfits (p ≈ n, multicollinearity). The choice depends on the problem.",
    },

    // ── Q18: IR = IC × √BR Deep Dive ──
    {
        id: 18,
        topic: "Active Management — Fundamental Law",
        question:
            "Consider the Fundamental Law of Active Portfolio Management (IR = IC × √BR) in depth. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "To DOUBLE performance (IR) at the same skill level (IC), you need FOUR TIMES as many independent trades (BR) — because √4 = 2.",
                correct: true,
            },
            {
                id: "b",
                text: "Real-world IC for top investment managers is typically 0.05-0.15 — modest but consistent skill applied across many decisions creates strong performance.",
                correct: true,
            },
            {
                id: "c",
                text: "Buffett achieves high IR through very high IC (deep analysis) with narrow breadth (few concentrated positions), while RenTec achieves it through modest IC with enormous breadth (thousands of trades).",
                correct: true,
            },
            {
                id: "d",
                text: "In the coin flip example: with $1,000 total and IC = 0.51, 1,000 × $1 bets gives Sharpe = 20.0 vs one $1,000 bet giving Sharpe = 0.63 — same expected return but dramatically better risk-adjusted.",
                correct: true,
            },
            {
                id: "e",
                text: "IR (Information Ratio) measures total portfolio return divided by total risk — it is identical to the Sharpe Ratio.",
                correct: false,
            },
        ],
        explanation:
            "IR is NOT the same as Sharpe. IR = Mean(alpha) / Std(alpha) — it measures risk-adjusted ACTIVE return (excess over benchmark), not total return. Sharpe measures total return minus risk-free rate divided by total volatility. They answer different questions.",
    },

    // ── Q19: Order Types & Order Book ──
    {
        id: 19,
        topic: "Trading — Order Types",
        question:
            "Consider the different order types and how they interact with the order book. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "A market order executes immediately at the current best available price, while a limit order executes only at a specified price or better.",
                correct: true,
            },
            {
                id: "b",
                text: "A stop loss automatically sells if the price falls a specified amount below purchase price — it's a risk management tool to limit downside.",
                correct: true,
            },
            {
                id: "c",
                text: "A trailing stop adjusts upward as the stock price rises, locking in gains — it maintains a fixed percentage or dollar distance below the highest recent price.",
                correct: true,
            },
            {
                id: "d",
                text: "If the order book shows more shares on the ask (sell) side than the bid (buy) side, it suggests likely price decline due to excess selling pressure.",
                correct: true,
            },
            {
                id: "e",
                text: "A limit buy order guarantees execution within the trading day — if the limit price is set above the current market price, it will always fill.",
                correct: false,
            },
        ],
        explanation:
            "Limit orders do NOT guarantee execution. If the price never reaches your limit (or moves away), the order may remain unfilled indefinitely. Only market orders guarantee execution (at potentially unfavorable prices). Limit orders provide price control but sacrifice execution certainty.",
    },

    // ── Q20: Ensemble Learner Properties ──
    {
        id: 20,
        topic: "Ensemble Methods — Properties",
        question:
            "Consider the general properties of ensemble learning methods. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Ensemble learners have LESS overfitting than a single learner because averaging reduces variance without increasing bias (for bagging/RF).",
                correct: true,
            },
            {
                id: "b",
                text: "Ensemble learners are NOT faster — they require training and querying multiple models, which increases computational cost.",
                correct: true,
            },
            {
                id: "c",
                text: "Ensemble learners are NOT more interpretable — averaging many trees loses the interpretability of a single decision tree.",
                correct: true,
            },
            {
                id: "d",
                text: "'Ensembling is the closest thing to a free lunch in ML, much like diversification in investing' — it almost always outperforms individual models.",
                correct: true,
            },
            {
                id: "e",
                text: "Ensemble methods make training faster because each tree only sees a subset of data, reducing total computation time proportionally.",
                correct: false,
            },
        ],
        explanation:
            "Ensemble methods do NOT make training faster — they make it SLOWER because you're training B separate models. Each tree sees a subset of data, but you train B of them. Total compute = B × (single tree compute). The benefit is accuracy, not speed.",
    },

    // ── Q21: Representation Learning ──
    {
        id: 21,
        topic: "Deep Learning — Representations",
        question:
            "Consider how deep neural networks learn hierarchical representations. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Each hidden layer learns increasingly abstract representations: e.g., Layer 1 learns edges, Layer 2 learns shapes, Layer 3 learns object parts, Layer 4 learns full objects.",
                correct: true,
            },
            {
                id: "b",
                text: "For trading, early layers might learn individual candlestick patterns while later layers learn multi-day regimes — this automatic feature extraction is why deep learning dominates when data is abundant.",
                correct: true,
            },
            {
                id: "c",
                text: "Deep learning scaling laws show: more data + more compute + bigger model = better performance, often following power laws. Compute grew 10× per year from 2012 onward.",
                correct: true,
            },
            {
                id: "d",
                text: "Large Language Models (GPT, BERT, Claude) demonstrate that the same transformer architecture works across radically different domains — text, code, reasoning.",
                correct: true,
            },
            {
                id: "e",
                text: "Representation learning is only useful for image data — for tabular financial data, manually engineered features always outperform learned representations.",
                correct: false,
            },
        ],
        explanation:
            "While manually engineered features are often competitive on small tabular data, representation learning is NOT limited to images. It applies to time series, text (NLP for sentiment), and any high-dimensional data. The study materials explicitly mention trading applications.",
    },

    // ── Q22: Valuation Methods ──
    {
        id: 22,
        topic: "Company Valuation",
        question:
            "Consider the three company valuation methods used by hedge funds. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Book Value = Total Assets − Total Liabilities = Stockholder's Equity. Price-to-Book (P/B) < 1.0 can signal undervaluation OR financial distress.",
                correct: true,
            },
            {
                id: "b",
                text: "Gordon Growth Model: Intrinsic Value = Dividend / (Discount Rate − Growth Rate). A $2 dividend, 10% discount rate, 5% growth = $2/(0.10-0.05) = $40.",
                correct: true,
            },
            {
                id: "c",
                text: "The discount rate represents the opportunity cost — the return you could earn on an alternative investment of equal risk. Money today is worth more than money in the future.",
                correct: true,
            },
            {
                id: "d",
                text: "P/E ratio compares share price to earnings per share. P/E below historical average may signal undervaluation; high P/E may signal high growth expectations or overvaluation.",
                correct: true,
            },
            {
                id: "e",
                text: "Book value always accurately represents a company's true worth because it reflects the current market value of all assets.",
                correct: false,
            },
        ],
        explanation:
            "Book value uses HISTORICAL cost, not current market value — it tends to understate true value for going concerns. In bankruptcies, forced asset sales may yield even less than book. It's an approximation, not a precise measure of worth.",
    },

    // ── Q23: Semi-Supervised & K-Prototype ──
    {
        id: 23,
        topic: "Learning Types — Semi-Supervised",
        question:
            "Consider semi-supervised learning and specialized clustering methods for trading data. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Semi-supervised learning combines a small labeled dataset with a large unlabeled dataset — useful when labeling is expensive but unlabeled data is abundant.",
                correct: true,
            },
            {
                id: "b",
                text: "In trading, commission type tags are often partially labeled — semi-supervised learning trains on the labeled portion, then extends predictions to the unlabeled majority.",
                correct: true,
            },
            {
                id: "c",
                text: "K-means works on numerical features, K-modes works on categorical features, and K-prototype (Huang 1998) combines both — useful for mixed trading data.",
                correct: true,
            },
            {
                id: "d",
                text: "NLP can extract structured tags from free-form trading instructions like 'Target this order for the close' — enabling automation of instruction parsing and compliance checking.",
                correct: true,
            },
            {
                id: "e",
                text: "Semi-supervised learning requires ALL data to be labeled — it cannot learn from unlabeled examples.",
                correct: false,
            },
        ],
        explanation:
            "The entire point of semi-supervised learning is that it DOES learn from unlabeled data. It leverages the structure in unlabeled examples along with the signal from labeled ones. If all data needed labels, it would just be supervised learning.",
    },

    // ── Q24: VWAP & Execution Algorithms ──
    {
        id: 24,
        topic: "Trade Execution — Algorithms",
        question:
            "Consider the different algorithmic trading styles and when each is appropriate. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "VWAP (Volume-Weighted Average Price) executes in proportion to market volume throughout the day — minimizing market impact for large orders.",
                correct: true,
            },
            {
                id: "b",
                text: "Implementation Shortfall minimizes the difference between the decision price (when trader decides to trade) and the average fill price — capturing the total cost of delay.",
                correct: true,
            },
            {
                id: "c",
                text: "Liquidity Seeking algorithms route orders to dark pools and alternative venues to find matching interest for large blocks without displaying the order publicly.",
                correct: true,
            },
            {
                id: "d",
                text: "In practice, Random Forest often outperforms more complex alternatives on financial datasets with mixed numeric/categorical features — start simple before adding complexity.",
                correct: true,
            },
            {
                id: "e",
                text: "VWAP always guarantees the best possible execution price because it times trades perfectly with market volume patterns.",
                correct: false,
            },
        ],
        explanation:
            "VWAP does NOT guarantee the best price — it minimizes market IMPACT by spreading execution over time proportional to volume. If the stock trends strongly intraday, VWAP may result in worse execution than aggressive early trading. It's a benchmark, not a guarantee.",
    },

    // ── Q25: Efficient Frontier & Optimization ──
    {
        id: 25,
        topic: "MPT — Efficient Frontier",
        question:
            "Consider Markowitz's Modern Portfolio Theory and the Efficient Frontier. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "The Efficient Frontier is the curve connecting all portfolios that offer maximum return for a given risk level — portfolios below the frontier are suboptimal.",
                correct: true,
            },
            {
                id: "b",
                text: "Markowitz (1952) showed that combining assets with low or negative correlations can achieve higher risk-adjusted returns than any individual asset alone.",
                correct: true,
            },
            {
                id: "c",
                text: "In the example: stocks ABC and DEF are highly correlated (ρ=0.9), providing little diversification. Adding stock GHI (ρ=−0.9 with ABC) creates a portfolio with much lower volatility.",
                correct: true,
            },
            {
                id: "d",
                text: "The tangency portfolio maximizes the Sharpe ratio — it's the point on the efficient frontier where the ray from the risk-free rate to the frontier is steepest.",
                correct: true,
            },
            {
                id: "e",
                text: "Active managers who create a portfolio below the efficient frontier are generating positive alpha, since they found a combination the theory didn't predict.",
                correct: false,
            },
        ],
        explanation:
            "A portfolio BELOW the efficient frontier is SUBOPTIMAL, not alpha-generating. Below the frontier means: same risk, lower return — the manager is failing to optimize. Positive alpha means outperforming the benchmark, which would appear ON or above the frontier.",
    },
];

export default examData3;
