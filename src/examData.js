// ML4T Practice Exam 1 — 25 Multi-Select Questions
// Each question has exactly 5 sub-answers. Each sub-answer is either True or False.
// Mapped strictly to study guide content from Weeks 1-7.

const examData = [
    // ── Q1: ML Foundations — Three Types of ML ──
    {
        id: 1,
        topic: "ML Foundations",
        question:
            "Consider the three main types of machine learning. Evaluate each statement as true or false:",
        options: [
            {
                id: "a",
                text: "In supervised learning, the model is trained on labeled input-output pairs (X, y) and learns a function f(X) → y.",
                correct: true,
            },
            {
                id: "b",
                text: "Unsupervised learning discovers hidden patterns or structures in data without labeled outcomes.",
                correct: true,
            },
            {
                id: "c",
                text: "Reinforcement learning provides the agent with the correct action at each step, similar to supervised learning with a teacher.",
                correct: false,
            },
            {
                id: "d",
                text: "In reinforcement learning, the agent learns from reward signals and the cycle is: Sense → Think → Act.",
                correct: true,
            },
            {
                id: "e",
                text: "Clustering stocks by similar behavior patterns is an example of supervised learning.",
                correct: false,
            },
        ],
        explanation:
            "Supervised learning uses labeled data. Unsupervised learning finds structure without labels. RL learns from rewards (like a critic giving thumbs up/down), NOT from correct answers like supervised learning. Clustering is unsupervised.",
    },

    // ── Q2: Overfitting and Bias-Variance Tradeoff ──
    {
        id: 2,
        topic: "Statistical Learning & Bias-Variance",
        question:
            "You are evaluating a machine learning model's performance on training and test data. Consider the following statements about overfitting, underfitting, and the bias-variance tradeoff:",
        options: [
            {
                id: "a",
                text: "Overfitting occurs when a model has low training error but high test error — the model memorized noise instead of learning the signal.",
                correct: true,
            },
            {
                id: "b",
                text: "Underfitting is characterized by high error on BOTH training and test data, indicating the model is too simple.",
                correct: true,
            },
            {
                id: "c",
                text: "The expected test MSE can be decomposed as: Bias² + Variance + Irreducible Error.",
                correct: true,
            },
            {
                id: "d",
                text: "Increasing model flexibility always decreases both bias and variance simultaneously.",
                correct: false,
            },
            {
                id: "e",
                text: "The generalization gap is defined as Training Error minus Test Error.",
                correct: false,
            },
        ],
        explanation:
            "Increasing flexibility decreases bias but INCREASES variance — this is the tradeoff. Generalization gap = Test Error − Training Error (not the reverse). A, B, and C are fundamental definitions from the bias-variance framework.",
    },

    // ── Q3: kNN Properties ──
    {
        id: 3,
        topic: "kNN & Model Comparison",
        question:
            "You are using a K-Nearest Neighbors (kNN) model for a trading signal prediction task. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Decreasing K in kNN leads to a more flexible model with lower bias but higher variance, increasing the risk of overfitting.",
                correct: true,
            },
            {
                id: "b",
                text: "kNN with K=1 achieves 100% training accuracy by memorizing all training data points.",
                correct: true,
            },
            {
                id: "c",
                text: "kNN is a parametric method because it stores the training data as its parameters.",
                correct: false,
            },
            {
                id: "d",
                text: "In high-dimensional feature spaces (many predictors), kNN suffers from the curse of dimensionality, where neighbors become far away and predictions degrade.",
                correct: true,
            },
            {
                id: "e",
                text: "kNN generally outperforms linear regression when the number of features p is large (e.g., p ≥ 4), even when the true relationship is non-linear.",
                correct: false,
            },
        ],
        explanation:
            "kNN is a non-parametric (lazy) learner — it stores data, not parameters. K=1 memorizes perfectly but overfits. In high dimensions (p ≥ 4), even when the true relationship is nonlinear, linear regression often wins due to the curse of dimensionality.",
    },

    // ── Q4: Linear Regression Fundamentals ──
    {
        id: 4,
        topic: "Statistical Learning — Regression",
        question:
            "You have fit a multiple linear regression model Y = β₀ + β₁X₁ + β₂X₂ + ... + βₚXₚ + ε to financial data. Consider the following statements:",
        options: [
            {
                id: "a",
                text: "R² measures the proportion of variance in Y explained by the predictors and ranges between 0 and 1.",
                correct: true,
            },
            {
                id: "b",
                text: "A high R² value guarantees that the model will generalize well to new data.",
                correct: false,
            },
            {
                id: "c",
                text: "The F-statistic tests whether at least one predictor in the model is useful for predicting Y.",
                correct: true,
            },
            {
                id: "d",
                text: "If the F-statistic is approximately 1, this suggests that at least one predictor is statistically significant.",
                correct: false,
            },
            {
                id: "e",
                text: "Each regression coefficient β̂ᵢ represents the average effect on Y of a one-unit increase in Xᵢ, holding all other predictors constant.",
                correct: true,
            },
        ],
        explanation:
            "High R² can result from overfitting (model memorizing noise). F ≈ 1 means NO predictors explain Y above chance; F >> 1 means at least one is significant. R² ranges 0-1 and coefficients measure partial effects (holding others constant).",
    },

    // ── Q5: Multicollinearity and Interaction Terms ──
    {
        id: 5,
        topic: "Statistical Learning — Extensions",
        question:
            "Consider multicollinearity and interaction terms in the context of multiple linear regression. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Multicollinearity occurs when predictor variables are highly correlated with each other, which can cause individual predictors to lose statistical significance even though they may be collectively important.",
                correct: true,
            },
            {
                id: "b",
                text: "In the ISL textbook's newspaper advertising example, newspaper advertising appears significant in simple linear regression but loses significance in multiple regression because newspaper spending is correlated with radio spending.",
                correct: true,
            },
            {
                id: "c",
                text: "The hierarchical principle states that if you include an interaction term X₁×X₂ in a model, you must also include the main effects X₁ and X₂, even if they are not individually significant.",
                correct: true,
            },
            {
                id: "d",
                text: "Adding an interaction term X₁×X₂ to a regression means that the effect of X₁ on Y no longer depends on the value of X₂.",
                correct: false,
            },
            {
                id: "e",
                text: "For a qualitative predictor with k levels, you should create exactly k dummy variables to encode it in a regression model.",
                correct: false,
            },
        ],
        explanation:
            "Interaction X₁×X₂ means the slope for X₁ DOES depend on X₂ (that's the whole point). For k-level qualitative predictors, you create k−1 dummy variables (one level is the baseline). A, B, C are correctly stated concepts from ISL Ch. 3.",
    },

    // ── Q6: Decision Trees ──
    {
        id: 6,
        topic: "Decision Trees",
        question:
            "You are building a decision tree model for predicting stock returns. Consider the following statements about decision trees:",
        options: [
            {
                id: "a",
                text: "Regression trees use recursive binary splitting, choosing the predictor and cutpoint that minimize the residual sum of squares (RSS) at each step.",
                correct: true,
            },
            {
                id: "b",
                text: "Recursive binary splitting is a globally optimal algorithm that finds the best possible tree structure.",
                correct: false,
            },
            {
                id: "c",
                text: "Classification trees use impurity measures such as the Gini index or entropy to evaluate splits, where smaller values indicate purer (less mixed) nodes.",
                correct: true,
            },
            {
                id: "d",
                text: "Decreasing the minimum leaf size in a decision tree leads to a more complex tree with more leaves, increasing the risk of overfitting.",
                correct: true,
            },
            {
                id: "e",
                text: "Single decision trees are preferred over ensemble methods because they have lower variance and higher prediction accuracy.",
                correct: false,
            },
        ],
        explanation:
            "Recursive binary splitting is GREEDY (locally optimal), not globally optimal. Single trees have HIGH variance — this is the key motivation for ensemble methods. Smaller leaf size = more leaves = more overfitting. Gini and entropy measure node purity.",
    },

    // ── Q7: Bagging and Random Forests ──
    {
        id: 7,
        topic: "Ensemble Learners — Bagging & RF",
        question:
            "You are comparing bagging and random forest methods for a financial prediction task. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Bagging reduces variance by training multiple full (unpruned) trees on bootstrap samples and averaging their predictions.",
                correct: true,
            },
            {
                id: "b",
                text: "In random forests, at each split, only a random subset of m features (typically m ≈ √p) is considered as split candidates, which decorrelates the trees.",
                correct: true,
            },
            {
                id: "c",
                text: "When m = p (all features considered at each split), a random forest is equivalent to bagging.",
                correct: true,
            },
            {
                id: "d",
                text: "The Out-of-Bag (OOB) error estimate uses approximately one-third of observations that were not included in each bootstrap sample, serving as a built-in validation set.",
                correct: true,
            },
            {
                id: "e",
                text: "Ensemble methods such as bagging and random forests are faster to train and produce more interpretable models than single decision trees.",
                correct: false,
            },
        ],
        explanation:
            "Ensembles are NOT faster (they train many trees) and NOT more interpretable (you lose the single-tree flowchart). They reduce variance. OOB uses ~1/3 held-out observations. RF with m=p degenerates to bagging. All other statements are correct per ISL Ch. 8.2.",
    },

    // ── Q8: Boosting ──
    {
        id: 8,
        topic: "Ensemble Learners — Boosting",
        question:
            "Consider the boosting algorithm for building ensemble models. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Unlike bagging, boosting trains trees sequentially, where each new tree is fit to the residuals of the current model.",
                correct: true,
            },
            {
                id: "b",
                text: "Boosting primarily reduces bias by slowly correcting the errors of the previous model, using a small learning rate (shrinkage parameter λ).",
                correct: true,
            },
            {
                id: "c",
                text: "Boosting cannot overfit regardless of the number of trees B, similar to bagging.",
                correct: false,
            },
            {
                id: "d",
                text: "The three key tuning parameters in gradient boosting are: B (number of trees), λ (shrinkage/learning rate), and d (tree depth per step).",
                correct: true,
            },
            {
                id: "e",
                text: "Bagging and boosting both build trees independently in parallel, but boosting uses smaller trees.",
                correct: false,
            },
        ],
        explanation:
            "Boosting CAN overfit if B is too large — unlike bagging, which generally does not. Boosting trees are SEQUENTIAL and DEPENDENT (not parallel/independent). Each tree fits residuals of the current model. Shrinkage λ controls learning speed.",
    },

    // ── Q9: Probability Foundations — Bayes' Theorem ──
    {
        id: 9,
        topic: "Probability Foundations",
        question:
            "Consider Bayes' theorem and its components in the context of probabilistic machine learning. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Bayes' theorem states: p(Y|X) = p(X|Y) · p(Y) / p(X), where p(Y) is the prior and p(Y|X) is the posterior.",
                correct: true,
            },
            {
                id: "b",
                text: "In the base rate (cancer screening) problem, even with a 90% accurate test, a positive result for a rare disease (1% prevalence) yields only about a 23% chance of actually having the disease.",
                correct: true,
            },
            {
                id: "c",
                text: "The evidence term p(X) in Bayes' theorem is a normalizing constant that ensures posterior probabilities sum to 1.",
                correct: true,
            },
            {
                id: "d",
                text: "Aleatoric uncertainty (irreducible noise in the data) can be eliminated by collecting more training data.",
                correct: false,
            },
            {
                id: "e",
                text: "Epistemic uncertainty arises from model limitations or insufficient data and CAN be reduced with more data or a better model.",
                correct: true,
            },
        ],
        explanation:
            "Aleatoric uncertainty is IRREDUCIBLE — it's inherent randomness in the world (market microstructure noise). Epistemic = model uncertainty, reducible with more data. The base rate problem illustrates how low priors dominate: rare events always have high false positive rates.",
    },

    // ── Q10: Covariance, Variance, and Portfolio Risk ──
    {
        id: 10,
        topic: "Probability & Portfolio Risk",
        question:
            "Consider variance, covariance, and their role in portfolio construction. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "If two random variables are independent, their covariance is zero.",
                correct: true,
            },
            {
                id: "b",
                text: "If the covariance of two variables is zero, they must be independent.",
                correct: false,
            },
            {
                id: "c",
                text: "Negative covariance between portfolio assets reduces total portfolio variance because losses in one asset are offset by gains in the other.",
                correct: true,
            },
            {
                id: "d",
                text: "The variance of a two-asset portfolio is: var[portfolio] = w₁²var[x] + w₂²var[y] + 2·w₁·w₂·cov[x,y].",
                correct: true,
            },
            {
                id: "e",
                text: "For continuous random variables, the probability of any single exact value is always greater than zero.",
                correct: false,
            },
        ],
        explanation:
            "Zero covariance does NOT imply independence (only for Gaussian distributions). For continuous PDFs, the probability of any exact single value = 0 (only intervals have non-zero probability). The portfolio variance formula and negative covariance benefits are key concepts.",
    },

    // ── Q11: ML Challenges in Finance ──
    {
        id: 11,
        topic: "AI & Big Data in Investments",
        question:
            "Machine learning in finance faces unique challenges compared to other domains. Consider the following statements:",
        options: [
            {
                id: "a",
                text: "Financial data has a low signal-to-noise ratio because many causal factors (macro, micro, behavioral) compress into a single return number.",
                correct: true,
            },
            {
                id: "b",
                text: "Financial markets are non-stationary — strategies decay as they are discovered and arbitraged away, and the rules governing returns change over time.",
                correct: true,
            },
            {
                id: "c",
                text: "The financial domain offers abundant labeled data comparable to image recognition or natural language processing tasks.",
                correct: false,
            },
            {
                id: "d",
                text: "Lookahead bias occurs when a feature uses data before it was actually available — for example, using Q3 earnings reported 40 days after quarter-end as if available on the quarter-end date.",
                correct: true,
            },
            {
                id: "e",
                text: "In finance, more complex models (e.g., deep neural networks) always outperform simpler models because they can capture more patterns in the data.",
                correct: false,
            },
        ],
        explanation:
            "Finance has SMALL data compared to NLP/vision (100 years of monthly data = ~1,200 obs per stock). Simple models often beat complex ones with limited data. Non-stationarity (adaptive markets) means strategies decay. Lookahead bias is a critical form of data leakage.",
    },

    // ── Q12: Overfitting Defenses and SHAP ──
    {
        id: 12,
        topic: "AI in Investments — Overfitting & Explainability",
        question:
            "You are developing a machine learning model for cross-sectional return prediction. Consider the following statements about overfitting defenses and model explainability:",
        options: [
            {
                id: "a",
                text: "Cross-validation, regularization, early stopping, feature selection, and ensembling are all standard defenses against overfitting.",
                correct: true,
            },
            {
                id: "b",
                text: "SHAP values measure the marginal contribution of each feature to a model's prediction and can be used to verify that feature relationships make economic sense.",
                correct: true,
            },
            {
                id: "c",
                text: "Ensembling is described as 'the closest thing to a free lunch in ML, much like diversification in investing' because it almost always outperforms individual models.",
                correct: true,
            },
            {
                id: "d",
                text: "Data leakage in features occurs when a feature is informative in backtesting but was not actually available at decision time in production.",
                correct: true,
            },
            {
                id: "e",
                text: "Domain knowledge is relatively unimportant for preventing overfitting in finance — purely data-driven feature selection is sufficient.",
                correct: false,
            },
        ],
        explanation:
            "Domain knowledge is described as 'your best defense' against overfitting in finance. Using economic intuition to curate inputs dramatically reduces overfitting (e.g., 'CEO last-name first letter' is not a valid feature). All other statements are directly from the study materials.",
    },

    // ── Q13: Hedge Fund Structure ──
    {
        id: 13,
        topic: "Hedge Funds — Structure",
        question:
            "Compare the structures of ETFs, mutual funds, and hedge funds. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Hedge funds typically charge '2 and 20' — 2% of assets under management plus 20% of profits.",
                correct: true,
            },
            {
                id: "b",
                text: "ETFs are traded throughout the day like stocks, while mutual funds are priced only at end-of-day NAV.",
                correct: true,
            },
            {
                id: "c",
                text: "Hedge funds are open to all retail investors and are required to publicly disclose their holdings.",
                correct: false,
            },
            {
                id: "d",
                text: "Hedge funds use extensive leverage to amplify returns, while ETFs and mutual funds have limited leverage.",
                correct: true,
            },
            {
                id: "e",
                text: "A 130/30 strategy means the fund is long 130% of capital and short 30% of capital, resulting in 100% net market exposure.",
                correct: true,
            },
        ],
        explanation:
            "Hedge funds are restricted to accredited investors only (wealthy institutions/individuals) and have very LOW transparency (secretive, not publicly traded). They cannot legally protect strategies so secrecy prevents copying. All other statements are correct.",
    },

    // ── Q14: Sharpe Ratio and Performance Metrics ──
    {
        id: 14,
        topic: "Performance Evaluation",
        question:
            "As a portfolio manager, you are evaluating performance metrics for a trading strategy. Consider the following statements:",
        options: [
            {
                id: "a",
                text: "The Sharpe Ratio is calculated as (portfolio return − risk-free rate) / standard deviation of portfolio returns.",
                correct: true,
            },
            {
                id: "b",
                text: "To annualize the Sharpe ratio from daily returns in Python, you compute: sqrt(252) × mean(daily_returns) / std(daily_returns).",
                correct: true,
            },
            {
                id: "c",
                text: "The S&P 500's long-term Sharpe ratio is approximately 0.5, and a Sharpe ratio of 1.0 or higher is considered very good.",
                correct: true,
            },
            {
                id: "d",
                text: "The cumulative return of a portfolio is calculated by simply summing all the daily returns.",
                correct: false,
            },
            {
                id: "e",
                text: "The Sharpe Ratio is calculated by adding the risk-free rate to the portfolio's average return and dividing by the standard deviation.",
                correct: false,
            },
        ],
        explanation:
            "Cumulative return uses compounding (product of (1 + daily_return)), NOT simple addition. The Sharpe formula SUBTRACTS the risk-free rate (not adds). These mirror the exact sample questions from the exam instructions document.",
    },

    // ── Q15: Short Selling and Order Types ──
    {
        id: 15,
        topic: "Market Mechanics",
        question:
            "You are studying market mechanics and trading strategies at a hedge fund. Evaluate the following statements about short selling and order types:",
        options: [
            {
                id: "a",
                text: "In short selling, you 'sell to open' by borrowing shares and selling them, then later 'buy to close' by repurchasing at (hopefully) a lower price.",
                correct: true,
            },
            {
                id: "b",
                text: "The maximum loss from a long stock position is 100% (stock goes to zero), while the maximum loss from a short position is theoretically unlimited.",
                correct: true,
            },
            {
                id: "c",
                text: "A limit order executes only at a specified price or better, while a market order executes immediately at the current market price.",
                correct: true,
            },
            {
                id: "d",
                text: "The bid-ask spread represents the profit margin for market makers, and narrower spreads indicate lower market liquidity.",
                correct: false,
            },
            {
                id: "e",
                text: "In the order book, if there are significantly more shares on the ask (sell) side than the bid (buy) side, the price is likely to decline.",
                correct: true,
            },
        ],
        explanation:
            "Narrower spreads indicate HIGHER liquidity (more market makers competing drives spreads down). WIDER spreads indicate lower liquidity — widening spreads are an early warning sign of a liquidity crisis. All other statements are correctly stated.",
    },

    // ── Q16: CAPM — Alpha and Beta ──
    {
        id: 16,
        topic: "CAPM",
        question:
            "Consider the Capital Asset Pricing Model (CAPM) and its components. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "In CAPM, a stock's return is decomposed as: Return(stock) = Alpha + Beta × Return(market) + ε, which is essentially a simple linear regression.",
                correct: true,
            },
            {
                id: "b",
                text: "Alpha (α) represents the Y-intercept of the regression and measures a stock's performance beyond what market risk predicts — positive alpha indicates outperformance.",
                correct: true,
            },
            {
                id: "c",
                text: "A stock with Beta > 1.0 is more volatile than the market, while Beta < 1.0 indicates the stock is less volatile than the market.",
                correct: true,
            },
            {
                id: "d",
                text: "On average across all stocks, alpha is positive because stock markets tend to go up over time.",
                correct: false,
            },
            {
                id: "e",
                text: "A portfolio's beta is calculated as the weighted average of individual stock betas: Beta(portfolio) = Σ wᵢ × Betaᵢ.",
                correct: true,
            },
        ],
        explanation:
            "On average across ALL stocks, alpha = 0 (because all stocks together ARE the market). Any stock with positive alpha is offset by another with negative alpha. The long-term upward trend is captured by market return, not alpha.",
    },

    // ── Q17: Market-Neutral Strategy ──
    {
        id: 17,
        topic: "CAPM — Beta-Neutral Strategies",
        question:
            "A hedge fund manager wants to construct a market-neutral (beta-neutral) portfolio. Consider the following statements:",
        options: [
            {
                id: "a",
                text: "A market-neutral portfolio has a net beta of zero (Σ wᵢ × βᵢ = 0), meaning its returns are driven entirely by alpha (stock selection skill), not market direction.",
                correct: true,
            },
            {
                id: "b",
                text: "'Buying beta' refers to investing in high-beta stocks for amplified market exposure — it requires no stock-picking skill and can be achieved cheaply with an index fund.",
                correct: true,
            },
            {
                id: "c",
                text: "Hedge funds that use beta-neutral strategies typically use high leverage (20-30x) to amplify the small excess returns from stock selection.",
                correct: true,
            },
            {
                id: "d",
                text: "In a market crash, a beta-neutral portfolio would experience the same losses as the overall market.",
                correct: false,
            },
            {
                id: "e",
                text: "Combining assets with negative correlation reduces portfolio volatility without reducing expected returns — this is the core benefit of diversification.",
                correct: true,
            },
        ],
        explanation:
            "A beta-neutral portfolio has zero net market exposure, so in a crash, the short positions offset long losses — it would NOT experience the same losses as the market. That's the entire point of hedging. All other statements are correct per the study guide.",
    },

    // ── Q18: Efficient Market Hypothesis (EMH) ──
    {
        id: 18,
        topic: "EMH",
        question:
            "Consider the Efficient Market Hypothesis (EMH) and its three forms. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "The weak form of EMH states that prices reflect all historical price and volume data, implying that technical analysis cannot generate excess returns.",
                correct: true,
            },
            {
                id: "b",
                text: "Under the semi-strong form, prices reflect all publicly available information, meaning both technical and fundamental analysis fail to generate excess returns.",
                correct: true,
            },
            {
                id: "c",
                text: "The strong form of EMH asserts that prices reflect ALL information including insider information — most evidence suggests this form holds true.",
                correct: false,
            },
            {
                id: "d",
                text: "If the weak form is correct, fundamental analysis can still work because original research can create an information advantage beyond what price history reveals.",
                correct: true,
            },
            {
                id: "e",
                text: "Active managers like hedge funds may paradoxically be the agents who MAKE markets efficient by immediately trading on any price discrepancy.",
                correct: true,
            },
        ],
        explanation:
            "Most evidence suggests the strong form does NOT hold — insider trading IS profitable before detection. Active managers contribute to efficiency by competing discrepancies away. Weak form only invalidates technical analysis; fundamental analysis can still work.",
    },

    // ── Q19: Information Ratio (IR = IC × √BR) ──
    {
        id: 19,
        topic: "Fundamental Law of Active Management",
        question:
            "Consider the Fundamental Law of Active Portfolio Management: IR = IC × √BR. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "The Information Ratio (IR) measures risk-adjusted active return, calculated as Mean(alpha) / Std(alpha).",
                correct: true,
            },
            {
                id: "b",
                text: "The Information Coefficient (IC) measures a manager's skill — it is the correlation of predictions with actual outcomes.",
                correct: true,
            },
            {
                id: "c",
                text: "To double the Information Ratio at the same skill level (IC), a manager needs to make four times as many independent investment decisions (4× BR).",
                correct: true,
            },
            {
                id: "d",
                text: "Warren Buffett's success can be attributed to very high IC with narrow breadth, while Renaissance Technologies uses modest IC with enormous breadth — both strategies can succeed.",
                correct: true,
            },
            {
                id: "e",
                text: "To double the Information Ratio at the same IC, a manager only needs to double the number of independent trades (2× BR).",
                correct: false,
            },
        ],
        explanation:
            "Since IR = IC × √BR, doubling IR requires √BR to double, which means BR must quadruple (4×), not just double (2×). Options A-D are correct per the study materials. Buffett = high IC, narrow BR; RenTec = modest IC, enormous BR.",
    },

    // ── Q20: Company Valuation Methods ──
    {
        id: 20,
        topic: "Valuation",
        question:
            "Hedge funds estimate the true value of stocks to identify trading opportunities. Consider these valuation methods and statements:",
        options: [
            {
                id: "a",
                text: "Book Value = Total Assets − Total Liabilities, and a Price-to-Book ratio below 1.0 may signal an undervalued stock (or a company in distress).",
                correct: true,
            },
            {
                id: "b",
                text: "The Gordon Growth Model calculates intrinsic value as: Intrinsic Value = Dividend / (Discount Rate − Growth Rate), assuming perpetual dividend growth.",
                correct: true,
            },
            {
                id: "c",
                text: "In discounted cash flow (DCF) analysis, the discount rate represents the opportunity cost — the return you could earn on an alternative investment of equal risk.",
                correct: true,
            },
            {
                id: "d",
                text: "A company with a P/E ratio significantly above its historical average is always overvalued and should be shorted.",
                correct: false,
            },
            {
                id: "e",
                text: "The time value of money principle states that money received today is worth less than the same amount received in the future.",
                correct: false,
            },
        ],
        explanation:
            "High P/E may reflect expected future growth, not necessarily overvaluation. The time value of money says money TODAY is worth MORE than money in the future (because today's money can be invested). The Gordon Growth Model, book value, and DCF definitions are correct.",
    },

    // ── Q21: Data Handling — Adjusted Prices and Survivorship Bias ──
    {
        id: 21,
        topic: "Data Quirks",
        question:
            "You are preparing historical stock data for backtesting a trading strategy. Consider the following statements about data handling:",
        options: [
            {
                id: "a",
                text: "Adjusted close prices should always be used for backtesting because they account for stock splits and dividends, while actual close prices show misleading drops on split dates.",
                correct: true,
            },
            {
                id: "b",
                text: "In a 2-for-1 stock split, the number of shares doubles and the price halves, but the total value of the position is unchanged.",
                correct: true,
            },
            {
                id: "c",
                text: "Survivorship bias occurs when only stocks that survived to the end of the study period are included, which artificially inflates measured backtest returns.",
                correct: true,
            },
            {
                id: "d",
                text: "The recommended approach for handling missing data in stock prices is to fill backward first, then fill forward.",
                correct: false,
            },
            {
                id: "e",
                text: "Approximately 70% of hedge funds from 10 years ago no longer exist, illustrating why survivorship bias is a major concern in financial backtesting.",
                correct: true,
            },
        ],
        explanation:
            "The correct order for filling missing data is fill FORWARD first (propagate last known price), THEN fill backward (to handle gaps at the start of the series). The reverse order is incorrect. All other statements about adjusted prices, splits, and survivorship bias are correct.",
    },

    // ── Q22: Deep Learning — Neural Networks ──
    {
        id: 22,
        topic: "Deep Learning Fundamentals",
        question:
            "Consider the fundamentals of deep learning and neural network architecture. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Without nonlinear activation functions, a multi-layer neural network reduces to a single linear model — the depth provides no additional representational benefit.",
                correct: true,
            },
            {
                id: "b",
                text: "Backpropagation is an efficient algorithm for computing gradients, where errors flow backward through the network from the output to the input layers.",
                correct: true,
            },
            {
                id: "c",
                text: "ReLU (Rectified Linear Unit), defined as max(0, a), is the most commonly used activation function in modern neural networks.",
                correct: true,
            },
            {
                id: "d",
                text: "Each hidden layer in a deep network learns increasingly abstract representations of the data — early layers learn basic patterns while later layers capture complex structures.",
                correct: true,
            },
            {
                id: "e",
                text: "In the polynomial fitting example, a model with degree M=9 trained on 10 data points achieves both perfect training fit AND excellent generalization to new data.",
                correct: false,
            },
        ],
        explanation:
            "M=9 on 10 points achieves perfect training fit (E=0) but TERRIBLE generalization — wild oscillations and high test error. This is the textbook definition of overfitting. All other statements about activation functions, backprop, and representation learning are correct.",
    },

    // ── Q23: Regularization — Ridge vs Lasso ──
    {
        id: 23,
        topic: "Regularization",
        question:
            "You are deciding between Ridge (L2) and Lasso (L1) regularization for a financial factor model with many correlated predictors. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Ridge regression adds a penalty of λ × Σβⱼ² to the loss function, which shrinks all coefficients toward zero but never sets any coefficient to exactly zero.",
                correct: true,
            },
            {
                id: "b",
                text: "Lasso regression uses an L1 penalty (λ × Σ|βⱼ|) and can set some coefficients to exactly zero, performing automatic feature selection.",
                correct: true,
            },
            {
                id: "c",
                text: "When λ = 0 in Ridge regression, it is equivalent to ordinary least squares (OLS) with no regularization.",
                correct: true,
            },
            {
                id: "d",
                text: "Ridge regression is generally preferred over Lasso when the goal is to build a sparse model with few predictors for maximum interpretability.",
                correct: false,
            },
            {
                id: "e",
                text: "Both Ridge and Lasso require features to be standardized (mean=0, std=1) before application because the penalty depends on coefficient magnitude.",
                correct: true,
            },
        ],
        explanation:
            "Lasso (not Ridge) is preferred for sparse, interpretable models because it sets coefficients to exactly zero. Ridge keeps ALL predictors. Ridge is preferred when many small effects or correlated predictors exist. Both require standardized features.",
    },

    // ── Q24: Alternative Data and ML Applications ──
    {
        id: 24,
        topic: "Alternative Data & AI in Practice",
        question:
            "Consider the use of alternative data and AI in investment research. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Alternative data includes non-traditional sources such as satellite imagery, social media sentiment, web scraping, credit card transactions, and mobile foot traffic data.",
                correct: true,
            },
            {
                id: "b",
                text: "Goldman Sachs advocates a 'pull' approach where the investment question drives data selection, rather than a 'push' approach where available data drives the analysis.",
                correct: true,
            },
            {
                id: "c",
                text: "The most time-consuming part of AI in investments is typically building sophisticated models, not data preparation and cleaning.",
                correct: false,
            },
            {
                id: "d",
                text: "Systematic/quantitative strategies prioritize breadth (many positions) and apply high-frequency signals to thousands of stocks, while fundamental strategies prioritize depth (fewer, higher-conviction positions).",
                correct: true,
            },
            {
                id: "e",
                text: "AI fully replaces human judgment in investments — data scientists alone can build successful trading strategies without domain expertise from investment analysts.",
                correct: false,
            },
        ],
        explanation:
            "Data preparation (ingestion, cleaning, curation, feature construction) consumes the most time — not model building. AI augments human judgment; neither data scientists nor analysts can succeed alone. The 'AI + HI' (human intelligence) model dominates.",
    },

    // ── Q25: Efficient Frontier and Portfolio Optimization ──
    {
        id: 25,
        topic: "Portfolio Management & MPT",
        question:
            "Consider Modern Portfolio Theory (MPT) and the efficient frontier as described by Markowitz (1952). Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "The efficient frontier represents the set of portfolios offering the maximum return for each level of risk, and portfolios below the frontier are suboptimal.",
                correct: true,
            },
            {
                id: "b",
                text: "The optimal portfolio on the efficient frontier is the tangency portfolio, which maximizes the Sharpe ratio — visualized as the steepest ray from the origin to the frontier.",
                correct: true,
            },
            {
                id: "c",
                text: "Diversification reduces specific (company-level) risk but does NOT eliminate systematic (market-wide) risk, and adding stocks beyond approximately 20-40 provides diminishing risk reduction.",
                correct: true,
            },
            {
                id: "d",
                text: "Combining two assets with a correlation of +1.0 provides maximum diversification benefit and significantly reduces portfolio volatility.",
                correct: false,
            },
            {
                id: "e",
                text: "In portfolio optimization, the decision variables are portfolio weights (wᵢ), and typical constraints include requiring all weights to sum to 1 (Σwᵢ = 1).",
                correct: true,
            },
        ],
        explanation:
            "Correlation of +1.0 provides ZERO diversification benefit — assets move in perfect lockstep. Maximum diversification comes from negatively correlated assets (ρ close to -1.0). All other statements about the efficient frontier, tangency portfolio, and optimization constraints are correct per MPT.",
    },
];

export default examData;
