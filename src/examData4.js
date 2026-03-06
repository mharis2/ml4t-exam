// ML4T Practice Exam 4 — 25 Multi-Select Questions
// Edge cases, tricky scenarios, and applied problems from Weeks 1-7.

const examData4 = [
    // ── Q1: Supervised vs Unsupervised Evaluation ──
    {
        id: 1,
        topic: "ML Foundations — Evaluation",
        question:
            "Consider how different types of ML models are evaluated and the challenges involved. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Evaluating unsupervised models is inherently harder than supervised models because there is no ground truth — a common approach is to use learned features as inputs to a downstream supervised task.",
                correct: true,
            },
            {
                id: "b",
                text: "Self-supervised learning creates proxy tasks from unlabeled data (e.g., predict masked features) — it bridges unsupervised and supervised learning.",
                correct: true,
            },
            {
                id: "c",
                text: "PCA (Principal Component Analysis) is a dimensionality reduction technique that can extract latent factors from high-dimensional data — analogous to extracting Fama-French factors from hundreds of stock returns.",
                correct: true,
            },
            {
                id: "d",
                text: "K-means clustering groups stocks by similar behavior patterns — a form of unsupervised learning since no labeled 'correct' groupings are provided.",
                correct: true,
            },
            {
                id: "e",
                text: "Supervised learning evaluation is impossible without a large test set — accuracy can only be measured if you have at least 10,000 test samples.",
                correct: false,
            },
        ],
        explanation:
            "Supervised learning can be evaluated with much smaller test sets and through techniques like K-fold cross-validation. There's no minimum of 10,000 samples required. Even with limited data, cross-validation provides unbiased error estimates.",
    },

    // ── Q2: Epistemic vs Aleatoric Applied ──
    {
        id: 2,
        topic: "Uncertainty — Applied",
        question:
            "A trading model trained on 2015-2019 data performs poorly during the COVID-19 crash of March 2020. Consider the following analysis:",
        options: [
            {
                id: "a",
                text: "This failure is primarily due to epistemic uncertainty — the model never saw pandemic-driven market dynamics in its training data, so it lacks knowledge of this regime.",
                correct: true,
            },
            {
                id: "b",
                text: "Epistemic uncertainty CAN be reduced by adding 2020 crash data to the training set and retraining — more diverse training data reduces model uncertainty.",
                correct: true,
            },
            {
                id: "c",
                text: "Aleatoric uncertainty (irreducible noise from random order flow) cannot be reduced by adding more data or changing the model — it is inherent in the data-generating process.",
                correct: true,
            },
            {
                id: "d",
                text: "This scenario illustrates the non-stationarity challenge in financial ML: training data from stable periods may not reflect dynamics during volatility spikes or regime changes.",
                correct: true,
            },
            {
                id: "e",
                text: "The model's failure proves that ML is fundamentally unsuitable for financial markets because regimes change too unpredictably.",
                correct: false,
            },
        ],
        explanation:
            "Regime changes make financial ML HARDER but not impossible. Solutions exist: adaptive models, regime detection, ensemble methods, regular model retraining, and incorporating diverse market environments in training. Many successful quant firms use ML effectively despite regime changes.",
    },

    // ── Q3: Multiple Regression Confounding ──
    {
        id: 3,
        topic: "Regression — Confounding",
        question:
            "Consider the classic ISL example of newspaper vs. radio advertising, and analogous scenarios in finance. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "In simple regression, newspaper advertising appears significant. But in multiple regression with radio added, newspaper loses significance — because newspaper spending is correlated with radio spending.",
                correct: true,
            },
            {
                id: "b",
                text: "Newspaper was getting credit for radio's effect — this is the confounding/multicollinearity problem: correlated predictors steal significance from each other.",
                correct: true,
            },
            {
                id: "c",
                text: "In finance, momentum and short-term reversal factors are often correlated — including both in a regression may cause one to appear insignificant even if both have genuine predictive power.",
                correct: true,
            },
            {
                id: "d",
                text: "The correct approach: always check correlations between predictors before interpreting individual coefficients, and use the F-test for overall model significance.",
                correct: true,
            },
            {
                id: "e",
                text: "Multicollinearity improves coefficient estimates because correlated predictors reinforce each other's information, making the model more stable.",
                correct: false,
            },
        ],
        explanation:
            "Multicollinearity HURTS coefficient estimates. It inflates standard errors, makes individual significance tests unreliable, and produces unstable coefficients that change dramatically with small data changes. It does NOT improve estimates.",
    },

    // ── Q4: Decision Tree Variance ──
    {
        id: 4,
        topic: "Decision Trees — Instability",
        question:
            "Consider why single decision trees have high variance and how this motivates ensemble methods. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "A small change in training data can produce a completely different tree structure — this high variance is the key limitation of single decision trees.",
                correct: true,
            },
            {
                id: "b",
                text: "Decision tree splitting is a greedy algorithm — it makes the locally best split at each step but may miss globally optimal solutions.",
                correct: true,
            },
            {
                id: "c",
                text: "Decision trees naturally handle mixed variable types (numeric + categorical) without preprocessing, are highly interpretable, and can capture nonlinear relationships.",
                correct: true,
            },
            {
                id: "d",
                text: "Decreasing leaf_size (allowing more leaves) makes a decision tree MORE complex and MORE prone to overfitting — analogous to decreasing K in kNN.",
                correct: true,
            },
            {
                id: "e",
                text: "Single decision trees generally achieve higher accuracy than ensemble methods because they capture more nuanced patterns without averaging.",
                correct: false,
            },
        ],
        explanation:
            "Single trees generally achieve LOWER accuracy than ensembles. The whole point of bagging/RF/boosting is that averaging many trees outperforms any single tree. Single trees have high variance — ensembles reduce this by combining many trees.",
    },

    // ── Q5: Bagging Mechanics ──
    {
        id: 5,
        topic: "Ensemble — Bagging Deep Dive",
        question:
            "Consider the theoretical basis for why bagging works. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Each bootstrap sample is created by sampling WITH replacement from the training data, meaning some observations appear multiple times while others are excluded entirely.",
                correct: true,
            },
            {
                id: "b",
                text: "Each individual bagged tree is grown DEEP (unpruned, high variance, low bias) — the averaging across trees then reduces the variance.",
                correct: true,
            },
            {
                id: "c",
                text: "The variance reduction principle: averaging B independent estimates with variance σ² produces an average with variance σ²/B — much lower than any single estimate.",
                correct: true,
            },
            {
                id: "d",
                text: "For regression bagging, the final prediction is the AVERAGE of all B trees. For classification, it is the MAJORITY VOTE across all B trees.",
                correct: true,
            },
            {
                id: "e",
                text: "Bagging reduces both bias AND variance equally — it fundamentally changes the bias of each individual tree by averaging them.",
                correct: false,
            },
        ],
        explanation:
            "Bagging primarily reduces VARIANCE, NOT bias. Each individual tree has low bias (deep, flexible), and averaging doesn't change average bias — it only reduces variance. Boosting is the method that primarily reduces bias (by fitting residuals).",
    },

    // ── Q6: Polynomial Fit — M vs N ──
    {
        id: 6,
        topic: "Deep Learning — Overfitting Example",
        question:
            "Consider the polynomial fitting tutorial from the Deep Learning textbook. With N=10 data points generated from sin(2πx) + noise, evaluate the following:",
        options: [
            {
                id: "a",
                text: "M=0 or M=1 polynomials underfit — too rigid to capture the sinusoidal curve, resulting in high training AND test error.",
                correct: true,
            },
            {
                id: "b",
                text: "M=3 achieves a good fit — capturing the underlying structure without memorizing noise, giving low test error.",
                correct: true,
            },
            {
                id: "c",
                text: "M=9 achieves perfect training fit (E=0) by passing through all 10 points, but shows wild oscillations and terrible test error — the definition of overfitting.",
                correct: true,
            },
            {
                id: "d",
                text: "With N=100 data points instead of N=10, even M=9 can give a good fit — more data allows more complex models without overfitting.",
                correct: true,
            },
            {
                id: "e",
                text: "The M=9 polynomial generalizes well because it captures all the information in the training set perfectly — zero training error means zero test error.",
                correct: false,
            },
        ],
        explanation:
            "Zero training error does NOT mean zero test error — this is the textbook definition of overfitting. M=9 memorizes the training data (including noise) and produces wild oscillations on unseen data. Training accuracy ≠ generalization.",
    },

    // ── Q7: Weight Decay & λ ──
    {
        id: 7,
        topic: "Regularization — Weight Decay",
        question:
            "Consider L2 regularization (weight decay) as applied to neural networks and polynomial models. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "The regularized loss function is: Ẽ(w) = (1/2)Σ[y(xₙ,w) - tₙ]² + (λ/2)||w||², where ||w||² is the sum of squared weights.",
                correct: true,
            },
            {
                id: "b",
                text: "λ too small → effectively no regularization → overfitting persists (model free to use large weights to match noise).",
                correct: true,
            },
            {
                id: "c",
                text: "λ too large → weights forced too close to zero → underfitting (model too constrained to learn the actual pattern).",
                correct: true,
            },
            {
                id: "d",
                text: "In neural networks, L2 regularization is called 'weight decay' because during training, each gradient descent step shrinks all weights slightly toward zero.",
                correct: true,
            },
            {
                id: "e",
                text: "Setting λ to the maximum possible value gives the best generalization, since it maximally prevents overfitting.",
                correct: false,
            },
        ],
        explanation:
            "Maximum λ doesn't produce best generalization — it produces maximum underfitting (all weights → 0, effectively a constant prediction). The optimal λ balances bias and variance and must be selected via cross-validation, not maximized.",
    },

    // ── Q8: ML Finance Challenges Triad ──
    {
        id: 8,
        topic: "ML in Finance — Three Challenges",
        question:
            "Consider the three unique challenges of applying ML to finance vs. other domains. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Low signal-to-noise ratio: financial returns compress many causal factors into a single +/- number. Compare: Netflix recommendations (high signal) vs stock prediction (low signal).",
                correct: true,
            },
            {
                id: "b",
                text: "Small data problem: even 100 years of US monthly data = ~1,200 observations per stock, compared to Netflix's billions of data points or ImageNet's millions of labeled images.",
                correct: true,
            },
            {
                id: "c",
                text: "Non-stationarity: when successful strategies are discovered and published, they get arbitraged away (McLean & Pontiff 2016). Market rules change over time due to regime changes and adaptation.",
                correct: true,
            },
            {
                id: "d",
                text: "Due to low signal-to-noise, simple models often beat complex ones when data is limited, and more data matters more than better architecture.",
                correct: true,
            },
            {
                id: "e",
                text: "These challenges are unique to finance but don't affect model selection — you should always use the most complex model available, since complexity captures more patterns.",
                correct: false,
            },
        ],
        explanation:
            "These challenges directly affect model selection! With low SNR and small data, simpler models often beat complex ones. More complexity = more overfitting risk when data is limited and noisy. Domain knowledge and simple, robust models are often superior.",
    },

    // ── Q9: 130/30 Strategy ──
    {
        id: 9,
        topic: "Hedge Fund Strategies — Leverage",
        question:
            "Consider the 130/30 hedge fund strategy and leverage mechanics. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "In a 130/30 strategy, the fund is long 130% of capital (borrows 30% extra) and short 30% of capital — net market exposure is 100%.",
                correct: true,
            },
            {
                id: "b",
                text: "The 130/30 approach generates additional alpha by allowing the manager to short overvalued stocks while increasing long exposure to undervalued stocks.",
                correct: true,
            },
            {
                id: "c",
                text: "Hedge funds can borrow extensively to use leverage — amplifying both returns AND losses. This is a key structural difference from mutual funds and ETFs.",
                correct: true,
            },
            {
                id: "d",
                text: "The four main hedge fund strategy types are: Equity (Long/Short), Arbitrage, Momentum/Direction, and Event-Driven.",
                correct: true,
            },
            {
                id: "e",
                text: "A 130/30 strategy eliminates all market risk because the 30% short position perfectly hedges against any market decline.",
                correct: false,
            },
        ],
        explanation:
            "A 130/30 strategy has 100% NET long market exposure — it does NOT eliminate market risk. The shorts only partially offset the longs. For zero market risk, you'd need a beta-neutral portfolio (Σ wᵢβᵢ = 0), not simply 130/30.",
    },

    // ── Q10: CAGR & Rule of 72 ──
    {
        id: 10,
        topic: "Performance — Returns",
        question:
            "Consider return calculations and performance measurement. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Daily return = [Value(t) / Value(t-1)] - 1, measuring the percentage change from one trading day to the next.",
                correct: true,
            },
            {
                id: "b",
                text: "CAGR (Compound Annual Growth Rate): Ending Value = Starting Value × (1 + CAGR)^n, where n = number of years.",
                correct: true,
            },
            {
                id: "c",
                text: "Rule of 72: 72 / annual growth rate ≈ years to double. At 8% CAGR: 72/8 = 9 years to double the portfolio.",
                correct: true,
            },
            {
                id: "d",
                text: "A 7.2% CAGR doubles a portfolio in approximately 10 years: 72/7.2 = 10 years.",
                correct: true,
            },
            {
                id: "e",
                text: "CAGR measures the total cumulative return, not the annualized rate — a 50% total return over 5 years means CAGR = 50%.",
                correct: false,
            },
        ],
        explanation:
            "CAGR IS the annualized rate, not the total cumulative return. A 50% cumulative return over 5 years: CAGR = (1.50)^(1/5) - 1 ≈ 8.45%, NOT 50%. CAGR accounts for compounding, converting total return into an equivalent annual rate.",
    },

    // ── Q11: Bid-Ask & Liquidity ──
    {
        id: 11,
        topic: "Market Mechanics — Liquidity",
        question:
            "Consider bid-ask spreads and their relationship to market liquidity. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Ask price is where sellers are willing to sell; Bid price is where buyers are willing to buy; Spread = Ask − Bid represents the market maker's profit margin.",
                correct: true,
            },
            {
                id: "b",
                text: "Highly liquid markets have many market makers and intense competition, resulting in narrow spreads — reducing transaction costs for investors.",
                correct: true,
            },
            {
                id: "c",
                text: "Widening spreads can serve as an early warning sign of a liquidity crisis — as seen during the 2008 fixed income crisis when spreads widened dramatically.",
                correct: true,
            },
            {
                id: "d",
                text: "A market order 'walks through' the order book, filling at the best available prices first — for large orders, this can cause progressively worse fill prices (market impact).",
                correct: true,
            },
            {
                id: "e",
                text: "A narrow bid-ask spread indicates that the market is illiquid and there is high uncertainty about the stock's fair value.",
                correct: false,
            },
        ],
        explanation:
            "Narrow spreads indicate HIGH liquidity and LOW uncertainty — the opposite. Wide spreads signal illiquidity and high uncertainty. Competition among market makers in liquid markets drives spreads tight.",
    },

    // ── Q12: Backpropagation & SGD ──
    {
        id: 12,
        topic: "Deep Learning — Training",
        question:
            "Consider how neural networks are trained using backpropagation and gradient descent. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Forward pass: inputs flow through hidden layers to produce output and compute loss. Backward pass: loss gradients flow backward through each layer to compute parameter updates.",
                correct: true,
            },
            {
                id: "b",
                text: "Each parameter's gradient tells us: 'Which direction should I move this weight to decrease the loss?' — SGD then updates weights using these gradients, one mini-batch at a time.",
                correct: true,
            },
            {
                id: "c",
                text: "For linear models, the loss function has a closed-form solution — but for deep neural networks, this must be solved iteratively using gradient descent because the loss surface is non-convex.",
                correct: true,
            },
            {
                id: "d",
                text: "Without nonlinear activation functions, any multi-layer neural network reduces to a single linear model — the depth provides no additional representational benefit.",
                correct: true,
            },
            {
                id: "e",
                text: "Gradient descent always finds the global minimum of the loss function for neural networks, ensuring optimal model performance.",
                correct: false,
            },
        ],
        explanation:
            "Neural network loss surfaces are non-convex — gradient descent typically finds LOCAL minima or saddle points, not guaranteed global minima. In practice, good local minima work well, and techniques like random restarts, learning rate schedules, and Adam optimizer help.",
    },

    // ── Q13: Factor Model Construction ──
    {
        id: 13,
        topic: "ML — Factor Models",
        question:
            "Consider how ML and regularization are used in constructing factor models for trading. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Lasso naturally builds sparse factor models by eliminating irrelevant features — selecting only the most important factors automatically.",
                correct: true,
            },
            {
                id: "b",
                text: "Ridge handles multicollinearity well by distributing weight across correlated predictors — useful when many correlated factors (momentum, value, quality) are present.",
                correct: true,
            },
            {
                id: "c",
                text: "Adding L2 penalty (weight decay) to neural networks connects deep learning to Ridge regression — both penalize large weights to prevent overfitting.",
                correct: true,
            },
            {
                id: "d",
                text: "Domain knowledge is described as 'your best defense' against overfitting: use economic intuition to curate inputs. 'CEO last-name first letter' is cited as a NOT valid feature.",
                correct: true,
            },
            {
                id: "e",
                text: "Regularization (Ridge/Lasso) makes OLS estimates more biased but less variable — the NET effect is higher test MSE, which is acceptable for interpretability.",
                correct: false,
            },
        ],
        explanation:
            "The net effect of regularization is typically LOWER test MSE (better generalization), not higher. The small increase in bias is MORE than offset by the large decrease in variance. That's the whole point — better bias-variance tradeoff for stronger out-of-sample performance.",
    },

    // ── Q14: Fundamental Law Strategies Compared ──
    {
        id: 14,
        topic: "Active Management — Strategy Design",
        question:
            "Consider how different investment strategies relate to the Fundamental Law (IR = IC × √BR). Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Two ways to increase breadth (BR): hold more positions (diversification) OR trade more frequently (higher turnover).",
                correct: true,
            },
            {
                id: "b",
                text: "Fundamental/active strategies prioritize depth (fewer, higher-conviction positions based on niche datasets), while systematic/quant strategies prioritize breadth (many positions, high-frequency signals).",
                correct: true,
            },
            {
                id: "c",
                text: "A strategy with IC = 0.10 needs BR = 400 to achieve IR = 2.0 (since 0.10 × √400 = 0.10 × 20 = 2.0).",
                correct: true,
            },
            {
                id: "d",
                text: "Hedge fund paradox: active managers may be precisely the agents who make markets efficient — by trading on discrepancies, they eliminate those discrepancies.",
                correct: true,
            },
            {
                id: "e",
                text: "According to the Fundamental Law, a strategy with IC = 0 (zero skill) can still generate strong performance by having very large breadth (many trades).",
                correct: false,
            },
        ],
        explanation:
            "If IC = 0, then IR = 0 × √BR = 0, regardless of breadth. Zero skill means zero information ratio — no amount of trading frequency or diversification can compensate for having no predictive ability. You MUST have some skill (IC > 0).",
    },

    // ── Q15: EMH Three Forms Applied ──
    {
        id: 15,
        topic: "EMH — Applied Scenarios",
        question:
            "A trader uses three strategies: (1) a moving average crossover system, (2) a discounted cash flow model using public financials, (3) tips from a company insider. Under EMH, evaluate:",
        options: [
            {
                id: "a",
                text: "If ONLY weak-form EMH holds: Strategy 1 (technical analysis) fails, but Strategies 2 (fundamental) and 3 (insider) can still generate excess returns.",
                correct: true,
            },
            {
                id: "b",
                text: "If semi-strong EMH holds: both Strategy 1 (technical) and Strategy 2 (fundamental analysis using public info) fail, but Strategy 3 (inside information) still works.",
                correct: true,
            },
            {
                id: "c",
                text: "If strong-form EMH holds: ALL three strategies fail — even insider information is instantly reflected in prices.",
                correct: true,
            },
            {
                id: "d",
                text: "Most empirical evidence suggests the strong form does NOT hold — insider trading is profitable before detection, meaning private information does provide an edge until caught.",
                correct: true,
            },
            {
                id: "e",
                text: "Under weak-form EMH, fundamental analysis fails because all public information is already reflected in prices.",
                correct: false,
            },
        ],
        explanation:
            "Weak form says only HISTORICAL PRICE/VOLUME data is reflected — so technical analysis fails. But fundamental analysis uses additional public info (financials, news) that weak form doesn't claim is priced in. It takes SEMI-STRONG form to invalidate fundamental analysis.",
    },

    // ── Q16: Efficient Frontier Misconceptions ──
    {
        id: 16,
        topic: "MPT — Common Mistakes",
        question:
            "Consider common misconceptions about Modern Portfolio Theory and the Efficient Frontier. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Combining negatively correlated assets reduces portfolio volatility WITHOUT reducing expected return — total return is always the weighted average of individual returns, regardless of correlation.",
                correct: true,
            },
            {
                id: "b",
                text: "Long-only constraint (wᵢ ≥ 0) restricts the feasible set and may prevent reaching the unconstrained efficient frontier — hedge funds remove this constraint through short selling.",
                correct: true,
            },
            {
                id: "c",
                text: "The minimum variance portfolio is the leftmost point on the efficient frontier — it has the lowest risk of any feasible portfolio.",
                correct: true,
            },
            {
                id: "d",
                text: "Portfolio return = Σ wᵢ × Return(stockᵢ), while portfolio risk depends on both individual variances AND covariances between all stock pairs.",
                correct: true,
            },
            {
                id: "e",
                text: "Portfolios on the efficient frontier always have positive expected returns — no efficient portfolio can have negative expected return.",
                correct: false,
            },
        ],
        explanation:
            "Efficient portfolios can have low or even negative expected returns in extreme scenarios (e.g., when all available assets have negative outlook). The frontier shows the BEST return for each risk level — if all returns are negative, the 'best' is still the least negative.",
    },

    // ── Q17: Data Pipeline Priorities ──
    {
        id: 17,
        topic: "AI in Practice — Data Quality",
        question:
            "Consider the practical priorities when deploying AI in investment management. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Before any ML model, data cleansing, normalization, and outlier removal typically consume 80%+ of total project time — data quality is the critical bottleneck.",
                correct: true,
            },
            {
                id: "b",
                text: "Only ~22-28% of buy-side firms regularly use ML in decision-making, despite the hype — the gap exists partly due to data quality challenges and explainability requirements.",
                correct: true,
            },
            {
                id: "c",
                text: "Model transparency matters in trading: black-box neural networks are often rejected in favor of explainable models (Random Forest, Linear Regression) — even if slightly less accurate.",
                correct: true,
            },
            {
                id: "d",
                text: "When a human overrides an ML recommendation, that override should be captured and analyzed — it provides valuable training signal for model improvement.",
                correct: true,
            },
            {
                id: "e",
                text: "In AI-driven investment firms, the ML model should make all final trading decisions autonomously — human oversight slows down the process and adds no value.",
                correct: false,
            },
        ],
        explanation:
            "The study materials explicitly state 'AI augments human judgment — it doesn't replace it.' The AI + HI (human intelligence) model dominates. Analysts do 'smell tests' on ML outputs, and human oversight catches errors that models miss. Collaboration beats autonomy.",
    },

    // ── Q18: Correlation vs Independence ──
    {
        id: 18,
        topic: "Probability — Correlation Nuances",
        question:
            "Consider the subtle distinction between correlation, covariance, and independence. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "If two random variables are independent, their covariance is always zero — independence implies zero covariance.",
                correct: true,
            },
            {
                id: "b",
                text: "However, zero covariance does NOT always imply independence — two variables can have zero covariance but still be statistically dependent (through nonlinear relationships).",
                correct: true,
            },
            {
                id: "c",
                text: "The exception: for jointly Gaussian random variables, zero covariance DOES imply independence — this is a special property of the Gaussian distribution.",
                correct: true,
            },
            {
                id: "d",
                text: "Correlation coefficient ranges from -1 to +1 and measures linear association; +1 = perfect positive, 0 = no linear relationship, -1 = perfect negative.",
                correct: true,
            },
            {
                id: "e",
                text: "If two stocks have a correlation of 0, they must be completely independent — their prices can never move in the same direction simultaneously.",
                correct: false,
            },
        ],
        explanation:
            "Zero correlation means no LINEAR relationship, but the stocks can still have nonlinear dependencies. They CAN and WILL sometimes move in the same direction — zero correlation just means these co-movements don't follow a systematic linear pattern. Only for Gaussians does ρ=0 ⟹ independence.",
    },

    // ── Q19: Parametric vs Non-Parametric ──
    {
        id: 19,
        topic: "Statistical Learning — Model Types",
        question:
            "Compare parametric and non-parametric methods for statistical learning. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Parametric methods (e.g., linear regression) assume a functional form for f(X), estimate a small number of coefficients, and are fast to train with significance tests available.",
                correct: true,
            },
            {
                id: "b",
                text: "Non-parametric methods (e.g., kNN) make no assumed form — data shapes the fit directly. They are more flexible but require much more data and degrade in high dimensions.",
                correct: true,
            },
            {
                id: "c",
                text: "Linear regression wins over kNN in: high dimensions (p large), small datasets, and when the true relationship is linear.",
                correct: true,
            },
            {
                id: "d",
                text: "If you have 50 features (volume, momentum, various technical indicators), tree-based methods or linear regression will typically outperform kNN.",
                correct: true,
            },
            {
                id: "e",
                text: "Non-parametric methods like kNN are always superior because they don't make assumptions — assumptions always hurt model performance.",
                correct: false,
            },
        ],
        explanation:
            "Correct assumptions HELP, not hurt. If the true relationship IS linear, assuming linearity (parametric) directly fits the right model and outperforms kNN. Assumptions only hurt when they're WRONG. This is the bias-variance tradeoff — assumptions reduce variance at the cost of potential bias.",
    },

    // ── Q20: Prediction vs Inference ──
    {
        id: 20,
        topic: "Statistical Learning — Goals",
        question:
            "Consider the two primary goals of statistical learning: prediction and inference. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Prediction goal: get the most accurate ŷ possible — you don't care about which features matter or how they relate, only about minimizing prediction error.",
                correct: true,
            },
            {
                id: "b",
                text: "Inference goal: understand WHICH features matter and HOW they relate to Y — interpretability matters, and you want to explain the relationship, not just predict.",
                correct: true,
            },
            {
                id: "c",
                text: "Predicting next-day price moves is a prediction task, while building a factor model to explain the sources of alpha is an inference task.",
                correct: true,
            },
            {
                id: "d",
                text: "For prediction, complex black-box models (neural networks, random forests) are acceptable. For inference, simpler interpretable models (linear regression) are often preferred.",
                correct: true,
            },
            {
                id: "e",
                text: "The best model for prediction is always the best model for inference — accuracy and interpretability are always perfectly aligned.",
                correct: false,
            },
        ],
        explanation:
            "There is a well-known tradeoff between accuracy and interpretability. Complex models (neural nets) often predict better but are harder to interpret. Simple models (linear regression) are easier to interpret but may predict worse. The best model depends on the goal.",
    },

    // ── Q21: HFT & Algo Execution ──
    {
        id: 21,
        topic: "Market Mechanics — HFT",
        question:
            "Consider high-frequency trading (HFT) and algorithmic execution. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "HFT's competitive advantage is speed — measured in milliseconds. Firms invest in co-location (physically placing servers near exchange matching engines) to minimize latency.",
                correct: true,
            },
            {
                id: "b",
                text: "ML models can predict market impact to normalize order difficulty across brokers — helping algo wheels fairly compare broker performance.",
                correct: true,
            },
            {
                id: "c",
                text: "When an ML model recommends an execution algorithm but the trader overrides it, the override itself is logged — providing valuable training signal for future model improvement.",
                correct: true,
            },
            {
                id: "d",
                text: "Practical ML priority: 'peer review everything' — have non-model builders challenge the model's data, features, and assumptions to catch errors and biases.",
                correct: true,
            },
            {
                id: "e",
                text: "HFT firms generate most of their profits from placing large, long-term directional bets on the market — speed is only needed for market monitoring, not execution.",
                correct: false,
            },
        ],
        explanation:
            "HFT firms profit from extremely rapid, small-margin trades executed in milliseconds — NOT from large directional bets. Speed IS the competitive advantage for execution, not just monitoring. HFT strategies include market making, arbitrage, and statistical patterns at very short time horizons.",
    },

    // ── Q22: Ensembling as Free Lunch ──
    {
        id: 22,
        topic: "ML Best Practices — Ensembling",
        question:
            "Consider when and why ensembling is effective in ML. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "'Ensembling is the closest thing to a free lunch in ML, much like diversification in investing' — both work because combining uncorrelated predictions reduces overall error.",
                correct: true,
            },
            {
                id: "b",
                text: "In earnings forecast accuracy research: nonlinear ML > linear ML > traditional models, and ensembling always helps across all model types.",
                correct: true,
            },
            {
                id: "c",
                text: "ML for crash/distress prediction: ML methods (logistic regression, RF, gradient boosting) outperform traditional metrics like leverage and distance-to-default.",
                correct: true,
            },
            {
                id: "d",
                text: "NLP-based word embeddings can capture investment slang and are especially useful in non-English markets where standard financial dictionaries don't apply.",
                correct: true,
            },
            {
                id: "e",
                text: "Ensembling only works when all component models are identical — using different model types (e.g., RF + linear + boosting together) reduces effectiveness.",
                correct: false,
            },
        ],
        explanation:
            "Ensembling works BETTER with diverse model types. The whole principle: uncorrelated errors cancel out. Different model types (RF, linear, boosting) make different types of errors, providing greater error reduction when combined. Identical models provide less benefit.",
    },

    // ── Q23: Standardization for Regularization ──
    {
        id: 23,
        topic: "Regularization — Preprocessing",
        question:
            "Consider why feature standardization is crucial when applying regularization methods. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Ridge and Lasso penalties depend on coefficient magnitude — if features are on different scales, the penalty unfairly penalizes predictors measured in larger units.",
                correct: true,
            },
            {
                id: "b",
                text: "Standardization transforms each feature to mean=0 and std=1, ensuring all features are penalized equally regardless of their original measurement scale.",
                correct: true,
            },
            {
                id: "c",
                text: "Without standardization, a feature measured in dollars (range: 0-1,000,000) would have a much smaller coefficient than one measured in percentages (0-100), even if equally important.",
                correct: true,
            },
            {
                id: "d",
                text: "Both Ridge and Lasso require standardized predictors, and λ is selecting via cross-validation on the validation set — never by minimizing training error.",
                correct: true,
            },
            {
                id: "e",
                text: "OLS (ordinary least squares without regularization) also requires standardized features — otherwise coefficients are uninterpretable.",
                correct: false,
            },
        ],
        explanation:
            "OLS does NOT require standardization for the model to work correctly. OLS coefficients adjust naturally for feature scale, and you can interpret them as 'change in Y per one-unit change in X.' Standardization is specifically needed for Ridge/Lasso because their penalties depend on coefficient size.",
    },

    // ── Q24: Performance Attribution ──
    {
        id: 24,
        topic: "ML Explainability — Attribution",
        question:
            "Consider how ML model performance can be attributed to different sources. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Partial dependence response plots show how model output changes as one feature varies, holding others constant — decomposing the effect into linear vs nonlinear components.",
                correct: true,
            },
            {
                id: "b",
                text: "Performance attribution answers: how much return came from linear factor exposure vs interaction effects vs nonlinear effects? This helps identify the source of alpha.",
                correct: true,
            },
            {
                id: "c",
                text: "SHAP values use game theory to measure the marginal contribution of each feature to each prediction — they are the most informative but computationally expensive feature importance method.",
                correct: true,
            },
            {
                id: "d",
                text: "Drop-column feature importance: remove one feature at a time, retrain the model, and measure accuracy change — accurate but expensive because it requires retraining for each feature.",
                correct: true,
            },
            {
                id: "e",
                text: "Built-in Random Forest feature importance (Gini decrease) and SHAP values always produce identical feature rankings — they measure the same thing differently.",
                correct: false,
            },
        ],
        explanation:
            "Built-in RF importance and SHAP values can produce DIFFERENT rankings. Gini importance can be biased toward features with more categories or continuous features. SHAP provides theoretically justified, consistent attributions. They measure different things and may disagree.",
    },

    // ── Q25: ML Algorithm Speed Comparison ──
    {
        id: 25,
        topic: "ML Algorithms — Practical Tradeoffs",
        question:
            "Consider the practical computational tradeoffs between ML algorithms. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "kNN has NO training phase (lazy learner — just stores data) but has SLOW query time because it must search through all training data for each prediction.",
                correct: true,
            },
            {
                id: "b",
                text: "Decision trees have slow training time (recursive splitting) but FAST query time (just follow the if/else splits from root to leaf).",
                correct: true,
            },
            {
                id: "c",
                text: "Linear regression has moderate training time (matrix operations) but VERY FAST query time (just a dot product: ŷ = Xβ̂).",
                correct: true,
            },
            {
                id: "d",
                text: "Linear regression can overfit when adding too many features, especially when the number of predictors p approaches the number of observations n.",
                correct: true,
            },
            {
                id: "e",
                text: "Ensemble methods are both faster and more accurate than individual models — combining trees reduces both computation time and prediction error simultaneously.",
                correct: false,
            },
        ],
        explanation:
            "Ensemble methods are slower, NOT faster. Training B trees takes B times longer than one tree. Query time also increases. The benefit is accuracy (lower error), not speed. This is a key fact from the study guide: ensembles reduce error but increase computational cost.",
    },
];

export default examData4;
