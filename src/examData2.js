// ML4T Practice Exam 2 — 25 Multi-Select Questions
// Different angles on all topics from Weeks 1-7. No overlap with Exam 1.

const examData2 = [
    // ── Q1: Tom Mitchell's Definition & ERM ──
    {
        id: 1,
        topic: "ML Foundations",
        question:
            "Consider Tom Mitchell's definition of machine learning and the concept of Empirical Risk Minimization (ERM). Evaluate each statement:",
        options: [
            {
                id: "a",
                text: "Tom Mitchell defined ML as: 'A computer program learns from experience E with respect to task T and performance measure P, if performance at T improves with E.'",
                correct: true,
            },
            {
                id: "b",
                text: "ERM finds model parameters θ* that minimize the average loss on the training data: θ* = argmin_θ (1/N) Σ loss(y_n, f(x_n; θ)).",
                correct: true,
            },
            {
                id: "c",
                text: "For Gaussian output distributions, minimizing the negative log-likelihood (NLL) is equivalent to minimizing Mean Squared Error (MSE).",
                correct: true,
            },
            {
                id: "d",
                text: "ERM is guaranteed to find models that generalize well to unseen data, as long as the training set is large enough.",
                correct: false,
            },
            {
                id: "e",
                text: "The No Free Lunch theorem states that a single best model exists for all problems, and cross-validation will always find it.",
                correct: false,
            },
        ],
        explanation:
            "ERM minimizes training loss but does NOT guarantee generalization — it can overfit, especially with small/noisy financial data. No Free Lunch says no single model is best for ALL problems; model choice depends on inductive bias and the specific dataset.",
    },

    // ── Q2: Feature Engineering & Design Matrix ──
    {
        id: 2,
        topic: "ML Foundations — Data",
        question:
            "Consider how data is structured and prepared for machine learning in finance. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "The design matrix is an N×D matrix where rows represent individual data samples and columns represent features (predictors).",
                correct: true,
            },
            {
                id: "b",
                text: "One-hot encoding converts categorical variables (e.g., sector = 'Tech') into binary vectors and is required for linear models.",
                correct: true,
            },
            {
                id: "c",
                text: "Feature engineering transforms raw inputs into informative features — examples include polynomial expansion, log-returns, and moving averages.",
                correct: true,
            },
            {
                id: "d",
                text: "In supervised learning, features (X) are also called covariates or predictors, while the output (y) is called the label, target, or response.",
                correct: true,
            },
            {
                id: "e",
                text: "Raw stock prices should be used directly as features without any transformation, since transformations lose information.",
                correct: false,
            },
        ],
        explanation:
            "Raw prices are not stationary and contain scale effects — you almost always transform them into returns, log-returns, or standardized features. Feature engineering is critical and raw inputs rarely work well. All other definitions are correct from the study materials.",
    },

    // ── Q3: Reinforcement Learning Components ──
    {
        id: 3,
        topic: "Reinforcement Learning",
        question:
            "Consider the reinforcement learning (RL) framework as applied to a trading algorithm. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "The agent is the trading algorithm, the environment is the market, the state includes variables like Bollinger band value and current position, and actions include Buy/Sell/Hold.",
                correct: true,
            },
            {
                id: "b",
                text: "The reward signal in a trading RL agent could be the daily P&L, which provides feedback on each action taken.",
                correct: true,
            },
            {
                id: "c",
                text: "The credit assignment problem in RL refers to the difficulty of determining which past action caused the current reward — like chess where you only learn win/loss at the end.",
                correct: true,
            },
            {
                id: "d",
                text: "A policy π(s) maps states to actions (or probability distributions over actions), and the goal of RL is to find the policy that maximizes cumulative discounted reward.",
                correct: true,
            },
            {
                id: "e",
                text: "Reinforcement learning requires a large dataset of labeled input-output pairs — the agent cannot learn without explicit correct answers for each state.",
                correct: false,
            },
        ],
        explanation:
            "RL does NOT require labeled pairs — that's supervised learning. RL learns from reward signals only (like a critic giving thumbs up/down). This is the fundamental distinction. All other RL component definitions are correct per the study guide.",
    },

    // ── Q4: MLE & Loss Functions ──
    {
        id: 4,
        topic: "Statistical Learning — Estimation",
        question:
            "Consider Maximum Likelihood Estimation (MLE) and different loss functions used in machine learning. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Classification tasks commonly use 0-1 loss (misclassification rate) or cross-entropy loss, while regression tasks use MSE.",
                correct: true,
            },
            {
                id: "b",
                text: "RSS (Residual Sum of Squares) = Σ(yᵢ - ŷᵢ)² measures total deviation of predictions from actual values, and OLS minimizes this quantity.",
                correct: true,
            },
            {
                id: "c",
                text: "RSE (Residual Standard Error) = sqrt(RSS / (n-2)) measures the average deviation of actual values from the regression line, in units of Y.",
                correct: true,
            },
            {
                id: "d",
                text: "TSS (Total Sum of Squares) = Σ(yᵢ - ȳ)² measures the total variability in Y before regression, and R² = (TSS - RSS) / TSS.",
                correct: true,
            },
            {
                id: "e",
                text: "Training MSE always increases as model complexity increases, which is why simpler models always produce better results.",
                correct: false,
            },
        ],
        explanation:
            "Training MSE always DECREASES as complexity increases (mode flexible models fit training data better). It's TEST MSE that forms the U-shape. Simpler models are NOT always better — the optimal model balances bias and variance.",
    },

    // ── Q5: Statistical Significance ──
    {
        id: 5,
        topic: "Regression — Inference",
        question:
            "You have run a linear regression on financial data and are evaluating statistical significance. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "The t-statistic for a coefficient is calculated as β̂₁ / SE(β̂₁) and tests whether the coefficient is significantly different from zero.",
                correct: true,
            },
            {
                id: "b",
                text: "A p-value < 0.05 indicates that the predictor is statistically significant — there is less than a 5% chance of seeing this result if the true coefficient were zero.",
                correct: true,
            },
            {
                id: "c",
                text: "The 95% confidence interval for β₁ is approximately β̂₁ ± 2 × SE(β̂₁), meaning we are 95% confident the true parameter falls in this range.",
                correct: true,
            },
            {
                id: "d",
                text: "With many predictors, individual t-tests can produce false positives — the F-test is the correct overall test for whether ANY predictor is useful.",
                correct: true,
            },
            {
                id: "e",
                text: "A statistically significant predictor (p < 0.05) always guarantees economically meaningful predictive power for trading.",
                correct: false,
            },
        ],
        explanation:
            "Statistical significance ≠ economic significance. A predictor can be statistically significant but have tiny effect size, especially with large datasets. In finance with low signal-to-noise ratios, many 'significant' features are useless in practice.",
    },

    // ── Q6: Polynomial Regression ──
    {
        id: 6,
        topic: "Regression — Non-linearity",
        question:
            "Consider polynomial regression and how it extends the linear regression framework. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "The model Y = β₀ + β₁X + β₂X² + ε is still technically a linear model because it is linear in the coefficients (β₀, β₁, β₂), even though it's nonlinear in X.",
                correct: true,
            },
            {
                id: "b",
                text: "If a residual plot from a linear regression shows a U-shaped or systematic pattern, this suggests adding polynomial terms may improve the fit.",
                correct: true,
            },
            {
                id: "c",
                text: "Interaction terms between qualitative and quantitative predictors create different slopes for different groups — without interaction, groups have the same slope but different intercepts (parallel lines).",
                correct: true,
            },
            {
                id: "d",
                text: "Adding higher-order polynomial terms always improves model performance on new data because it captures more patterns.",
                correct: false,
            },
            {
                id: "e",
                text: "The effect of earnings surprise on returns may be stronger for small-cap stocks than large-cap stocks — this is an example of an interaction effect between earnings surprise and market cap.",
                correct: true,
            },
        ],
        explanation:
            "Higher polynomial terms capture more training patterns but can OVERFIT — the M=9 polynomial example shows perfect training fit but terrible generalization. Adding complexity without regularization or validation leads to overfitting.",
    },

    // ── Q7: Tree Pruning & Cost Complexity ──
    {
        id: 7,
        topic: "Decision Trees — Pruning",
        question:
            "Consider cost complexity pruning for decision trees. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Cost complexity pruning minimizes: RSS + α × |T|, where |T| is the number of terminal nodes and α is the complexity penalty parameter.",
                correct: true,
            },
            {
                id: "b",
                text: "When α = 0, the penalty term vanishes and the algorithm keeps the full (unpruned) tree, which is most prone to overfitting.",
                correct: true,
            },
            {
                id: "c",
                text: "As α increases, more branches are pruned away, reducing complexity and variance at the cost of increased bias.",
                correct: true,
            },
            {
                id: "d",
                text: "The optimal α is selected using K-fold cross-validation on the training data — the value that gives the lowest average test error is chosen.",
                correct: true,
            },
            {
                id: "e",
                text: "Pruning grows the tree from scratch using α as a constraint — it does not start with a fully grown tree.",
                correct: false,
            },
        ],
        explanation:
            "Pruning starts with a fully grown (large) tree and then removes branches. It does NOT grow from scratch with α. The process: grow large tree first, then prune back using the penalty. All other statements are correct.",
    },

    // ── Q8: OOB Error & Variable Importance ──
    {
        id: 8,
        topic: "Ensemble Methods — Diagnostics",
        question:
            "Consider Out-of-Bag (OOB) error estimation and variable importance in ensemble methods. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Each bootstrap sample uses approximately 2/3 of the original observations, leaving ~1/3 out-of-bag (OOB) for validation.",
                correct: true,
            },
            {
                id: "b",
                text: "OOB error is effectively equivalent to leave-one-out cross-validation error and is computationally efficient because it uses data already excluded from each tree's training.",
                correct: true,
            },
            {
                id: "c",
                text: "Variable importance is measured by computing the total RSS decrease (regression) or Gini index decrease (classification) across all splits in all B trees for each predictor.",
                correct: true,
            },
            {
                id: "d",
                text: "Bagging sacrifices the interpretability of a single decision tree, but variable importance plots partially recover which predictors matter most.",
                correct: true,
            },
            {
                id: "e",
                text: "OOB error estimation requires setting aside a separate validation set before training the ensemble.",
                correct: false,
            },
        ],
        explanation:
            "OOB error does NOT require a separate validation set — that's the whole point. The ~1/3 of data excluded from each bootstrap sample serves as a built-in validation set automatically. No additional data splitting is needed.",
    },

    // ── Q9: Boosting vs Bagging Deep Comparison ──
    {
        id: 9,
        topic: "Ensemble Methods — Comparison",
        question:
            "Compare and contrast the three main ensemble methods: Bagging, Random Forests, and Boosting. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Bagging and Random Forests build trees in parallel and independently, while Boosting builds trees sequentially where each tree depends on the previous one.",
                correct: true,
            },
            {
                id: "b",
                text: "Random Forests improve upon Bagging by randomly sampling m features at each split, decorrelating the trees and enabling greater variance reduction when averaged.",
                correct: true,
            },
            {
                id: "c",
                text: "Boosting uses small/shallow trees (stumps) and a shrinkage parameter λ that controls the learning rate — small λ learns slowly and typically needs a large number of trees B.",
                correct: true,
            },
            {
                id: "d",
                text: "Unlike Bagging and Random Forests, Boosting can overfit if the number of trees B is too large because it sequentially fits noise in the residuals.",
                correct: true,
            },
            {
                id: "e",
                text: "Boosting primarily reduces variance like Bagging, while Random Forests primarily reduce bias.",
                correct: false,
            },
        ],
        explanation:
            "This is reversed. Boosting primarily reduces BIAS (by sequentially correcting errors/residuals). Bagging and Random Forests primarily reduce VARIANCE (by averaging independent trees). This is a critical distinction.",
    },

    // ── Q10: Sum Rule & Product Rule ──
    {
        id: 10,
        topic: "Probability Foundations",
        question:
            "Consider the two fundamental rules of probability that derive everything else. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "The Sum Rule (marginalization) states: p(X) = Σ_Y p(X, Y) for discrete variables, which means 'to get the probability of X alone, sum over all possible values of Y.'",
                correct: true,
            },
            {
                id: "b",
                text: "The Product Rule states: p(X, Y) = p(Y|X) · p(X), meaning joint probability equals conditional times marginal.",
                correct: true,
            },
            {
                id: "c",
                text: "Bayes' theorem is derived directly from the product rule by rearranging: p(Y|X) = p(X|Y) · p(Y) / p(X).",
                correct: true,
            },
            {
                id: "d",
                text: "In Bayesian reasoning applied to trading, the prior p(Y) is your thesis before earnings, and the posterior p(Y|X) is your updated view after reading the earnings call transcript.",
                correct: true,
            },
            {
                id: "e",
                text: "The Sum Rule and Product Rule only apply to discrete random variables and cannot be extended to continuous distributions.",
                correct: false,
            },
        ],
        explanation:
            "Both rules extend to continuous variables using integrals instead of sums: p(x) = ∫ p(x,y) dy for marginalization. The rules are universal to all probability theory. All other statements are correctly stated.",
    },

    // ── Q11: Probability Distributions ──
    {
        id: 11,
        topic: "Probability — Distributions",
        question:
            "Consider common probability distributions and their properties. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "The Gaussian (Normal) distribution N(x|μ, σ²) is the workhorse of ML and arises naturally from the Central Limit Theorem.",
                correct: true,
            },
            {
                id: "b",
                text: "The Laplace distribution is similar to a Gaussian but has heavier tails, making it potentially better for modeling financial return distributions with fat tails.",
                correct: true,
            },
            {
                id: "c",
                text: "The Exponential distribution p(x|λ) = λ·exp(-λx) models wait times and durations between events.",
                correct: true,
            },
            {
                id: "d",
                text: "A probability density function (PDF) must satisfy: p(x) ≥ 0 for all x, and ∫p(x)dx = 1 (integrates to 1 over the entire range).",
                correct: true,
            },
            {
                id: "e",
                text: "For a continuous random variable with PDF p(x), the probability of X being exactly equal to any specific value a is equal to p(a).",
                correct: false,
            },
        ],
        explanation:
            "For continuous variables, P(X = a) = 0 always. The PDF value p(a) is a density, not a probability. Only intervals have non-zero probability: P(a < X < b) = ∫_a^b p(x)dx. This is a fundamental property of continuous distributions.",
    },

    // ── Q12: Nonlinear & Interaction Effects in Finance ──
    {
        id: 12,
        topic: "AI in Investments — ML Advantages",
        question:
            "Robeco's research identifies specific advantages of ML over linear models in finance. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "ML's fundamental advantage is capturing nonlinear and interaction effects that linear models (OLS, factor models) miss entirely.",
                correct: true,
            },
            {
                id: "b",
                text: "An interaction effect example from the study materials: if an accounting red flag is present, earnings quality doesn't matter — the stock drops regardless. A linear model treats earnings and red flags independently and misses this interaction.",
                correct: true,
            },
            {
                id: "c",
                text: "Gu, Kelly, and Xiu (2020) showed that a neural network long-short strategy achieved a Sharpe ratio of 1.35 vs 0.61 for OLS, with interaction effects being the primary driver of outperformance.",
                correct: true,
            },
            {
                id: "d",
                text: "A CDS (credit default swap) spread has a nonlinear relationship with equity returns because equity is effectively a call option on firm assets — linear models cannot capture this curve.",
                correct: true,
            },
            {
                id: "e",
                text: "Interaction effects are only useful for very small datasets where individual features lack predictive power — they provide no benefit with large datasets.",
                correct: false,
            },
        ],
        explanation:
            "Interaction effects are valuable especially with LARGER datasets. The Gu et al. study used extensive data and found interactions were the PRIMARY driver of ML's edge. Interactions capture how features combine — this is fundamental, not a small-sample artifact.",
    },

    // ── Q13: Data Leakage Types ──
    {
        id: 13,
        topic: "ML Pitfalls — Data Leakage",
        question:
            "Consider the different types of data leakage and how to prevent them in financial ML. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Leakage in data occurs when test set information bleeds into the training set, such as using overlapping time windows. Fix: strict chronological splits with a gap period between train and validation sets.",
                correct: true,
            },
            {
                id: "b",
                text: "Leakage in features occurs when a feature is informative in backtesting but unavailable at production time — the feature looks predictive but can't actually be used in live trading.",
                correct: true,
            },
            {
                id: "c",
                text: "Lookahead bias is a specific form of data leakage where future information is used as if available today — for example, using Q3 earnings reported 40 days after quarter-end as if available on the quarter-end date.",
                correct: true,
            },
            {
                id: "d",
                text: "The implementation gap refers to ML finding alpha in small/micro-cap stocks that are illiquid and costly to trade at scale, making backtested profits unrealizable.",
                correct: true,
            },
            {
                id: "e",
                text: "Cross-validation in financial time series should use random k-fold splits (shuffling the data) to ensure each fold is representative.",
                correct: false,
            },
        ],
        explanation:
            "Random k-fold is WRONG for time series. Financial data has temporal dependence — random shuffling introduces lookahead bias (future data leaks into training). You must use chronological splits (walk-forward validation) with gap periods.",
    },

    // ── Q14: Goldman Sachs Pull Approach ──
    {
        id: 14,
        topic: "Alternative Data — Strategy",
        question:
            "Consider Goldman Sachs's framework for using alternative data and AI in investment research. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "The 'pull' approach starts from the investment question and pulls in relevant data, rather than starting from available data and searching for a question ('push' approach).",
                correct: true,
            },
            {
                id: "b",
                text: "Investment horizon matters for alt data: intraday news sentiment helps high-frequency trading but adds little value to a portfolio manager with a multi-month horizon.",
                correct: true,
            },
            {
                id: "c",
                text: "The most time-consuming part of AI in investments is data preparation: ingestion, cleaning, curation, and feature construction — not model building.",
                correct: true,
            },
            {
                id: "d",
                text: "The 'AI + HI (human intelligence)' model dominates: data scientists scale and automate analyst intuition, while analysts do 'smell tests' on ML outputs.",
                correct: true,
            },
            {
                id: "e",
                text: "Goldman Sachs recommends the 'push' approach: start with whatever alternative data is available, then look for investment questions it might answer.",
                correct: false,
            },
        ],
        explanation:
            "Goldman explicitly recommends the PULL approach (start with the question), NOT the push approach. The wrong approach: 'We have satellite data, what can we do with it?' The right approach: 'We want to predict retail traffic, what data can help?'",
    },

    // ── Q15: Market Structure — NYSE vs NASDAQ ──
    {
        id: 15,
        topic: "Market Mechanics — Structure",
        question:
            "Consider the structure of stock exchanges and market making. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "NYSE uses a physical trading floor with market makers called specialists, while NASDAQ is fully electronic with no floor.",
                correct: true,
            },
            {
                id: "b",
                text: "The flow of a trade: Investors → Brokerage firms → Specialists/Market makers → Exchange.",
                correct: true,
            },
            {
                id: "c",
                text: "Dark pools are informal exchanges between brokerage firms used to clear trades internally, avoiding public exchange fees and minimizing market impact on large orders.",
                correct: true,
            },
            {
                id: "d",
                text: "Front running — trading ahead of clients using knowledge of pending orders — is illegal but was historically common among brokers.",
                correct: true,
            },
            {
                id: "e",
                text: "On the NYSE, all orders must be executed by a single designated specialist, and electronic trading is not permitted.",
                correct: false,
            },
        ],
        explanation:
            "NYSE has evolved significantly and now uses extensive electronic trading alongside its physical floor. The description of specialists is historical — modern NYSE is largely electronic with designated market makers. Electronic trading is very much permitted.",
    },

    // ── Q16: Arbitrage Strategies ──
    {
        id: 16,
        topic: "Hedge Fund Strategies — Arbitrage",
        question:
            "Consider the different types of arbitrage strategies used by hedge funds. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Pure arbitrage involves buying an asset cheaply in one market and simultaneously selling it expensively in another — it is theoretically risk-free profit.",
                correct: true,
            },
            {
                id: "b",
                text: "Statistical arbitrage exploits temporary price divergences from estimated true value: short when market price > intrinsic value, go long when market price < intrinsic value.",
                correct: true,
            },
            {
                id: "c",
                text: "Regression to the mean is the tendency of volatile assets driven from true value to eventually return — this is the basis for mean-reversion trading strategies.",
                correct: true,
            },
            {
                id: "d",
                text: "Value investing (Buffett style) involves buying stocks at a 'margin of safety' below estimated intrinsic value, then waiting for the market to recognize the value.",
                correct: true,
            },
            {
                id: "e",
                text: "Statistical arbitrage is risk-free because the estimated true value is always accurate, guaranteeing eventual profit on every trade.",
                correct: false,
            },
        ],
        explanation:
            "Statistical arbitrage is NOT risk-free — unlike pure arbitrage, the estimated 'true value' may be wrong, and prices may diverge further before converging. Only pure arbitrage (buying/selling identical assets simultaneously) is theoretically risk-free.",
    },

    // ── Q17: CAPM Regression Details ──
    {
        id: 17,
        topic: "CAPM — Regression",
        question:
            "Consider how CAPM is applied as a regression model. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "CAPM equation Return(stock) = α + β × Return(market) + ε is literally a simple linear regression of stock returns on market returns.",
                correct: true,
            },
            {
                id: "b",
                text: "The residual ε in the CAPM equation represents company-specific return (idiosyncratic risk) that can be diversified away by holding many stocks.",
                correct: true,
            },
            {
                id: "c",
                text: "ExxonMobil with β ≈ 0.77 is slightly less volatile than the market, while a small speculative biotech might have β of 1.5–3.0.",
                correct: true,
            },
            {
                id: "d",
                text: "A Gold ETF can have negative beta, meaning it tends to move opposite to the market — acting as a safe-haven asset during market declines.",
                correct: true,
            },
            {
                id: "e",
                text: "'Seeking alpha' means finding stocks with high beta, since high-beta stocks always outperform the market over time.",
                correct: false,
            },
        ],
        explanation:
            "'Seeking alpha' means finding stocks with genuine EXCESS return above what market risk predicts — it's about stock selection skill, not high beta. High beta just amplifies market exposure (both up AND down) and requires no skill. 'Buying beta' is cheap via index funds.",
    },

    // ── Q18: Beta-Neutral Portfolio Math ──
    {
        id: 18,
        topic: "CAPM — Portfolio Construction",
        question:
            "A hedge fund manager constructs a portfolio with XOM (β=0.77) long and SPY (β=1.0) short. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "If the manager is 50% long XOM and 50% short SPY, the net portfolio beta is 0.5 × 0.77 + (-0.5) × 1.0 = -0.115, meaning the portfolio has slight net short market exposure.",
                correct: true,
            },
            {
                id: "b",
                text: "To achieve a perfectly beta-neutral portfolio (β = 0), the manager would need to adjust weights — holding approximately 56% XOM long and 44% SPY short.",
                correct: true,
            },
            {
                id: "c",
                text: "Market exposure (buying beta) provides no alpha — it can be achieved cheaply with any index fund. The value of a hedge fund is in stock selection (alpha generation).",
                correct: true,
            },
            {
                id: "d",
                text: "Hedge funds use 20-30x leverage on beta-neutral portfolios because the excess returns from stock selection are small (fractions of a percent per trade) and need amplification.",
                correct: true,
            },
            {
                id: "e",
                text: "A beta-neutral portfolio guarantees positive returns regardless of market conditions, since market risk is completely eliminated.",
                correct: false,
            },
        ],
        explanation:
            "Beta-neutral eliminates market DIRECTION risk, but does NOT guarantee positive returns. The portfolio still depends on stock selection (alpha). If the manager picks wrong stocks (negative alpha), the portfolio loses money even with zero market exposure.",
    },

    // ── Q19: EMH — Practical Implications ──
    {
        id: 19,
        topic: "EMH — Deep Dive",
        question:
            "Consider the practical implications of the Efficient Market Hypothesis for different types of analysis. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Most evidence supports weak or semi-strong form EMH for large-cap US stocks (NYSE), but markets are less efficient for small-cap, emerging markets, and complex instruments.",
                correct: true,
            },
            {
                id: "b",
                text: "Under semi-strong EMH, both technical analysis (price patterns) and fundamental analysis (financial statements) fail to generate excess returns because all public information is already priced in.",
                correct: true,
            },
            {
                id: "c",
                text: "Most evidence suggests the strong form does NOT hold — insider trading IS profitable before detection, meaning private information provides an edge.",
                correct: true,
            },
            {
                id: "d",
                text: "Most hedge fund criminality involves trading on inside information, which violates the boundary between semi-strong and strong form efficiency.",
                correct: true,
            },
            {
                id: "e",
                text: "If the weak form of EMH holds, no form of analysis — technical, fundamental, or insider — can generate excess returns.",
                correct: false,
            },
        ],
        explanation:
            "Weak form only invalidates TECHNICAL analysis (historical price/volume patterns). Fundamental analysis CAN still work under weak form because original research creates information beyond price history. Only semi-strong form invalidates fundamental analysis too.",
    },

    // ── Q20: Systematic vs Specific Risk ──
    {
        id: 20,
        topic: "Portfolio Management — Risk",
        question:
            "Consider the distinction between systematic and specific risk in portfolio management. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Systematic risk is market-wide risk that affects all stocks and CANNOT be diversified away — examples include interest rate changes and recessions.",
                correct: true,
            },
            {
                id: "b",
                text: "Specific risk is company-level risk that CAN be reduced through diversification — examples include a CEO resignation or a product recall.",
                correct: true,
            },
            {
                id: "c",
                text: "Adding stocks beyond approximately 20-40 provides diminishing additional specific risk reduction — the remaining risk is mostly systematic.",
                correct: true,
            },
            {
                id: "d",
                text: "The Sharpe ratio on a scatter plot equals the slope of the ray from the origin to the portfolio point — the steeper the ray, the higher the Sharpe ratio.",
                correct: true,
            },
            {
                id: "e",
                text: "Diversification eliminates both systematic and specific risk, making a well-diversified portfolio completely risk-free.",
                correct: false,
            },
        ],
        explanation:
            "Diversification only eliminates specific (idiosyncratic) risk. Systematic (market-wide) risk CANNOT be diversified away no matter how many stocks you hold. A well-diversified portfolio still carries full market risk.",
    },

    // ── Q21: Adjusted Prices — Dividends & Splits ──
    {
        id: 21,
        topic: "Data Quirks — Prices",
        question:
            "Consider how stock splits and dividends affect price data and backtesting. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "On a 2-for-1 split, the actual close price shows a sudden 50% drop, but the total position value is unchanged because shares doubled.",
                correct: true,
            },
            {
                id: "b",
                text: "Adjusted close prices retroactively modify ALL historical prices to account for splits and dividends, creating a smooth series suitable for backtesting.",
                correct: true,
            },
            {
                id: "c",
                text: "IBM's actual price showed a dramatic drop from ~$300 to ~$75 in 1979 — this was a 4-for-1 stock split, NOT a loss. Adjusted prices show a continuous trend.",
                correct: true,
            },
            {
                id: "d",
                text: "When a company declares a dividend, the stock price drops by approximately the dividend amount on the ex-dividend date. Adjusted prices incorporate this return.",
                correct: true,
            },
            {
                id: "e",
                text: "For live trading execution (placing actual buy/sell orders), you should use adjusted close prices rather than actual close prices.",
                correct: false,
            },
        ],
        explanation:
            "For actual trade execution and order placement, you use ACTUAL prices (the real market price). Adjusted prices are for backtesting and return calculation only. You can't place a trade at an adjusted price — exchanges only know actual prices.",
    },

    // ── Q22: Neural Network Architecture ──
    {
        id: 22,
        topic: "Deep Learning — Architecture",
        question:
            "Consider the fundamental architecture of neural networks. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "A single neuron computes: pre-activation a = Σ wᵢxᵢ (weighted sum), then output y = f(a) where f is a nonlinear activation function.",
                correct: true,
            },
            {
                id: "b",
                text: "The step function (Perceptron activation): 0 if a ≤ 0, 1 if a > 0 — it is NOT differentiable and therefore cannot use gradient descent for training.",
                correct: true,
            },
            {
                id: "c",
                text: "Sigmoid produces a smooth S-curve between 0 and 1, Tanh produces output between -1 and 1, and ReLU = max(0, a) is the most commonly used activation today.",
                correct: true,
            },
            {
                id: "d",
                text: "In the brief history of ML: Perceptrons (1960s) failed for non-linearly separable problems like XOR, until Backpropagation (1986) enabled training multi-layer networks.",
                correct: true,
            },
            {
                id: "e",
                text: "Deeper networks with more hidden layers always produce better results because each additional layer learns more abstract features — there is no downside to adding layers.",
                correct: false,
            },
        ],
        explanation:
            "More layers can lead to overfitting (especially with small data), vanishing/exploding gradients, and increased training time. Depth is only beneficial with sufficient data and proper regularization. The M=9 polynomial analogy: more complexity ≠ better performance.",
    },

    // ── Q23: Hyperparameter Selection ──
    {
        id: 23,
        topic: "Model Selection",
        question:
            "Consider the process of selecting hyperparameters and evaluating models. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Hyperparameters (like polynomial order M, regularization λ, or number of hidden units) are set BEFORE training and control model complexity — they are NOT learned from data.",
                correct: true,
            },
            {
                id: "b",
                text: "In K-fold cross-validation, data is split into K equal groups, the model trains on K-1 folds and validates on 1 fold, rotating K times, and the best hyperparameter has the lowest average validation error.",
                correct: true,
            },
            {
                id: "c",
                text: "The three data splits serve different purposes: training set = fit parameters, validation set = select hyperparameters, test set = final unbiased evaluation (touch ONCE).",
                correct: true,
            },
            {
                id: "d",
                text: "Selecting hyperparameters by minimizing training error always leads to the most complex model (largest M, λ → 0) — which is maximum overfitting.",
                correct: true,
            },
            {
                id: "e",
                text: "The test set should be used iteratively during model development to check progress — this helps ensure the final model generalizes well.",
                correct: false,
            },
        ],
        explanation:
            "The test set must NEVER be used iteratively during development — that makes it a second validation set and introduces bias. Touch it ONCE for final evaluation only. If you peek at test results during development, your test error estimate becomes optimistic.",
    },

    // ── Q24: TCA & Feature Importance Methods ──
    {
        id: 24,
        topic: "AI in Trade Execution",
        question:
            "Consider Transaction Cost Analysis (TCA) and how ML is used in trade execution. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "TCA is systematic post-trade analysis to measure and improve execution quality — ML-enhanced TCA can uncover subtle patterns traditional analysis misses.",
                correct: true,
            },
            {
                id: "b",
                text: "Random Forest feature importance revealed that Trade Horizon (0.29) was the most important factor affecting trading costs, followed by Traded Value (0.17) and Historical Volatility (0.17).",
                correct: true,
            },
            {
                id: "c",
                text: "Three methods for computing feature importance: built-in RF (Gini decrease per split), drop-column (remove feature, measure accuracy drop), and SHAP values (game theory-based marginal contributions).",
                correct: true,
            },
            {
                id: "d",
                text: "An algo wheel is an automated randomized routing system that A/B tests different broker algorithms by tracking post-trade outcomes — approximately 300 orders per broker are needed to build a useful dataset.",
                correct: true,
            },
            {
                id: "e",
                text: "In the algo wheel use case, Order Horizon was initially included as a feature but later identified as endogenous — it was controlled BY the broker, so including it would let brokers game the model.",
                correct: true,
            },
        ],
        explanation:
            "All five statements are correct per Chapter 7 of the Handbook. The endogeneity issue with Order Horizon is particularly important — always check that features aren't controlled by the party being evaluated. This is a form of data leakage.",
    },

    // ── Q25: Portfolio Optimization ──
    {
        id: 25,
        topic: "MPT — Optimization",
        question:
            "Consider the components of portfolio optimization in Modern Portfolio Theory. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "The decision variables in portfolio optimization are the portfolio weights wᵢ (what percentage to allocate to each stock).",
                correct: true,
            },
            {
                id: "b",
                text: "The objective function is typically to minimize portfolio variance OR maximize the Sharpe ratio.",
                correct: true,
            },
            {
                id: "c",
                text: "Common constraints include: Σwᵢ = 1 (all capital invested), wᵢ ≥ 0 (no shorting for long-only funds), and maximum weight per position.",
                correct: true,
            },
            {
                id: "d",
                text: "The tangency portfolio is the point on the efficient frontier where the Sharpe ratio is maximized — visualized as the steepest ray from the risk-free rate to the frontier.",
                correct: true,
            },
            {
                id: "e",
                text: "Portfolio optimization always produces stable, reliable weights that perform well out-of-sample, regardless of estimation errors in expected returns and covariances.",
                correct: false,
            },
        ],
        explanation:
            "Portfolio optimization is HIGHLY sensitive to estimation errors in expected returns and covariances. Small changes in inputs can produce wildly different optimal weights — this is a well-known practical limitation of mean-variance optimization. Robust methods and constraints help mitigate this.",
    },
];

export default examData2;
