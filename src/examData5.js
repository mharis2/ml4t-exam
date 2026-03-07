// ML4T Practice Exam 5 — 25 Multi-Select Questions
// Simulation of Actual Exam based on provided student notes and screenshots.

const examData5 = [
    // ── Q1: Supervised vs Unsupervised vs RL ──
    {
        id: 1,
        topic: "ML Foundations — Learning Types",
        question:
            "Consider the differences between supervised learning, unsupervised learning, and reinforcement learning in the context of trading. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Supervised learning requires historical labeled data (e.g., past stock prices paired with known outcomes) to train a model to predict future prices or classify market directions.",
                correct: true,
            },
            {
                id: "b",
                text: "Unsupervised learning, such as k-means clustering or PCA, operates without labeled outcomes, seeking instead to find hidden structures, groupings, or latent factors within market data.",
                correct: true,
            },
            {
                id: "c",
                text: "Reinforcement learning involves an agent taking actions (buy/sell/hold) in an environment to maximize a cumulative reward (e.g., portfolio return) over time, learning from the consequences of its actions rather than being given correct answers.",
                correct: true,
            },
            {
                id: "d",
                text: "Supervised learning is universally superior to unsupervised learning because having specific target labels always prevents overfitting.",
                correct: false,
            },
            {
                id: "e",
                text: "In finance, reinforcement learning models are completely immune to regime changes because they continually adjust to incoming data streams without bounds.",
                correct: false,
            },
        ],
        explanation:
            "Supervised learning is highly susceptible to overfitting, especially in noisy financial data — labels do not prevent this. RL models are not immune to regime changes; a policy learned in a bull market may fail catastrophically in a crash before it can adapt. RL learns from rewards (like a critic giving thumbs up/down), not from correct answers like supervised learning.",
    },

    // ── Q2: Training and Testing Data ──
    {
        id: 2,
        topic: "ML Process — Data Splitting",
        question:
            "A quantitative analyst is building a predictive model and must partition the dataset into training and testing sets. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "To accurately measure out-of-sample performance, the testing data must strictly follow the training data chronologically (e.g., train on 2010-2018, test on 2019).",
                correct: true,
            },
            {
                id: "b",
                text: "Randomly shuffling all available financial time-series data before splitting it into train/test sets perfectly preserves the validity of the test set.",
                correct: false,
            },
            {
                id: "c",
                text: "Evaluating the model multiple times on the testing set to iteratively tweak hyperparameters can lead to 'test set leakage' or overfitting the test set.",
                correct: true,
            },
            {
                id: "d",
                text: "The primary purpose of the training set is to optimize the model's internal parameters (weights/coefficients) to minimize the in-sample error.",
                correct: true,
            },
            {
                id: "e",
                text: "If a model achieves zero Root Mean Squared Error (RMSE) on the training set, it is guaranteed to perform perfectly on the testing set.",
                correct: false,
            },
        ],
        explanation:
            "Randomly shuffling financial time-series data causes lookahead bias because future data leaks into the training set. A zero training error usually indicates severe overfitting, not perfect generalization. Chronological splitting is crucial in finance. The proper approach is: training set (fit parameters) → validation set (tune hyperparameters) → test set (final evaluation ONCE).",
    },

    // ── Q3: Overfitting vs Underfitting ──
    {
        id: 3,
        topic: "Model Complexity — Fit",
        question:
            "Consider the concepts of overfitting, underfitting, and the classic polynomial curve-fitting example in machine learning. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Underfitting occurs when a model is too structurally simple to capture the underlying patterns in the data, resulting in high training error AND high testing error.",
                correct: true,
            },
            {
                id: "b",
                text: "Overfitting happens when a model becomes too complex, memorizing the training data (including its random noise) and performing poorly on unseen testing data.",
                correct: true,
            },
            {
                id: "c",
                text: "In polynomial regression, increasing the degree (e.g., M=9 for 10 data points) guarantees lower test error because the curve fits the training points perfectly.",
                correct: false,
            },
            {
                id: "d",
                text: "The generalization gap (Test Error minus Training Error) grows as a model overfits — training error decreases while test error increases.",
                correct: true,
            },
            {
                id: "e",
                text: "A model exhibiting high bias is typically associated with underfitting, while a model exhibiting high variance is typically associated with overfitting.",
                correct: true,
            },
        ],
        explanation:
            "When M=9 for N=10 data points, the polynomial passes through every training point exactly (training error = 0) but oscillates wildly between points — this is the textbook definition of overfitting. Test error skyrockets. The test error curve forms a U-shape: decreasing as the model captures true patterns, then increasing as it memorizes noise.",
    },

    // ── Q4: KNN vs Linear Regression ──
    {
        id: 4,
        topic: "Algorithms — kNN vs LinReg",
        question:
            "Compare the mechanics of k-Nearest Neighbors (kNN) and ordinary Linear Regression in terms of training time, query time, and data suitability. Evaluate the following:",
        options: [
            {
                id: "a",
                text: "Linear regression is parametric (an eager learner) and has a relatively slow 'build' phase as it calculates coefficients via matrix operations, but a very fast O(1) 'query' phase using a simple dot product.",
                correct: true,
            },
            {
                id: "b",
                text: "kNN is non-parametric (a lazy learner) with effectively zero 'build' time (just storing data), but querying is slow O(N) because it must compute the distance to every stored point.",
                correct: true,
            },
            {
                id: "c",
                text: "If the true relationship in the data is highly non-linear and the number of features is small (e.g., 1 or 2), kNN will generally outperform a simple linear regression model.",
                correct: true,
            },
            {
                id: "d",
                text: "As the number of features (dimensions) increases to 1,000, kNN queries become significantly faster and more accurate than linear regression.",
                correct: false,
            },
            {
                id: "e",
                text: "Linear regression inherently captures complex interactions between variables without the programmer explicitly adding interaction terms to the feature set.",
                correct: false,
            },
        ],
        explanation:
            "kNN suffers from the curse of dimensionality — in high dimensions, 'nearest' neighbors are no longer truly close, and performance degrades. Linear regression often wins for p ≥ 4 features even when the true relationship is non-linear. Linear regression requires manual feature engineering (e.g., adding X₁×X₂ interaction terms) to capture interactions; it cannot discover them automatically.",
    },

    // ── Q5: Curse of Dimensionality ──
    {
        id: 5,
        topic: "Data Dimensions — The Curse",
        question:
            "Consider the 'Curse of Dimensionality' and how it impacts machine learning models, particularly distance-based algorithms like kNN. Evaluate the following:",
        options: [
            {
                id: "a",
                text: "As the number of dimensions/features increases, the volume of the feature space grows exponentially, causing available data to become sparse.",
                correct: true,
            },
            {
                id: "b",
                text: "In profoundly high-dimensional spaces, the distance between the 'nearest' neighbor and the 'farthest' neighbor tends to converge, making distance metrics less informative.",
                correct: true,
            },
            {
                id: "c",
                text: "The Curse of Dimensionality implies that adding more features (even noisy ones) will always strictly improve a kNN model's out-of-sample accuracy.",
                correct: false,
            },
            {
                id: "d",
                text: "To combat the curse of dimensionality, practitioners often use dimensionality reduction techniques like PCA, or feature selection methods.",
                correct: true,
            },
            {
                id: "e",
                text: "Parametric models like linear regression are completely immune to the curse of dimensionality and can use millions of features with only 100 data rows accurately.",
                correct: false,
            },
        ],
        explanation:
            "Adding noisy features degrades kNN because the distance metric gets diluted by irrelevant dimensions — neighbors become farther away and averages over distant points introduce high bias. Linear regression with more features than data rows (p > n) cannot be uniquely solved without regularization and is highly prone to overfitting — it is NOT immune.",
    },

    // ── Q6: Boosting (Ensemble Methods) ──
    {
        id: 6,
        topic: "Ensemble — Boosting",
        question:
            "Consider Boosting algorithms (like AdaBoost or Gradient Boosting) as an ensemble learning technique. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Unlike bagging which trains models in parallel independently, boosting trains weak learners sequentially, with each new model attempting to correct the errors (residuals) of the previous sequence.",
                correct: true,
            },
            {
                id: "b",
                text: "In AdaBoost, data instances that were misclassified by the previous tree are given heavily increased weight for the next tree to focus on.",
                correct: true,
            },
            {
                id: "c",
                text: "Boosting primarily works by dramatically reducing the variance of high-complexity models (like massive, unpruned decision trees) rather than reducing bias.",
                correct: false,
            },
            {
                id: "d",
                text: "Because boosting continually focuses on the hardest-to-predict examples, it can be sensitive to outliers and noisy data, and unlike bagging, it CAN overfit if the number of trees (B) is too large.",
                correct: true,
            },
            {
                id: "e",
                text: "The final prediction in a boosting ensemble is typically a weighted sum/vote of the constituent weak learners, with a shrinkage parameter λ controlling the learning rate.",
                correct: true,
            },
        ],
        explanation:
            "Boosting primarily reduces BIAS by sequentially fitting residuals/errors of weak learners (like shallow stumps). Bagging (like Random Forests) is what primarily reduces VARIANCE by averaging many deep, high-variance trees trained independently. Key distinction: Bagging = parallel, reduces variance, cannot overfit. Boosting = sequential, reduces bias, CAN overfit.",
    },

    // ── Q7: Hedge Fund Investment Considerations ──
    {
        id: 7,
        topic: "Institutional Finance — Hedge Funds",
        question:
            "A quantitative hedge fund is considering taking a position in a mid-cap stock. Before investing, what factors would they analyze? Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Liquidity constraints: if average daily volume is too low, the fund's large order will cause significant 'market impact', driving the purchase price up against them.",
                correct: true,
            },
            {
                id: "b",
                text: "Correlation to the broader market portfolio (Beta) — many hedge funds explicitly try to hedge out market risk to construct beta-neutral portfolios that generate pure uncorrelated Alpha.",
                correct: true,
            },
            {
                id: "c",
                text: "Hedge funds uniquely avoid all use of leverage; they only invest the strict pool of capital provided by their limited partners.",
                correct: false,
            },
            {
                id: "d",
                text: "The fund would evaluate whether the stock's current market price diverges from its estimated true value — buying when price < intrinsic value (long) or selling when price > intrinsic value (short).",
                correct: true,
            },
            {
                id: "e",
                text: "Since hedge funds are strictly regulated under the same rules as mutual funds, they cannot short sell stocks or use complex strategies under any circumstances.",
                correct: false,
            },
        ],
        explanation:
            "Hedge funds are known for leveraging their positions extensively (often 20-30x for beta-neutral strategies) to amplify the small excess returns from stock selection. They are lightly regulated (catering to accredited investors only) and absolutely use short selling as a core mechanic — the original 'hedge' is going long AND short simultaneously.",
    },

    // ── Q8: Probability — Product Rule & Sum Rule ──
    {
        id: 8,
        topic: "Probability — Core Rules",
        question:
            "Consider fundamental probability rules required for quantitative finance and probabilistic ML. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "The Sum Rule (marginalization) for any two events A and B states: P(A or B) = P(A) + P(B) − P(A and B).",
                correct: true,
            },
            {
                id: "b",
                text: "If events A and B are mutually exclusive, their joint probability P(A and B) is equal to 1.",
                correct: false,
            },
            {
                id: "c",
                text: "The Product Rule for independent events states: P(A and B) = P(A) × P(B).",
                correct: true,
            },
            {
                id: "d",
                text: "For dependent events, the Product Rule is expressed using conditional probability: P(A and B) = P(A) × P(B | A), which is the basis for deriving Bayes' Theorem.",
                correct: true,
            },
            {
                id: "e",
                text: "If the probability of the market going up is 0.6 and the probability of a tech stock going up is 0.5, the absolute maximum joint probability of both going up is 1.1.",
                correct: false,
            },
        ],
        explanation:
            "Mutually exclusive events cannot happen at the same time, so P(A and B) = 0, not 1. Probabilities can never exceed 1.0. The Sum Rule and Product Rule are the two foundational rules of probability — Bayes' Theorem is derived directly from the Product Rule: P(Y|X) = P(X|Y) · P(Y) / P(X).",
    },

    // ── Q9: Basic Variance and Error Measurement ──
    {
        id: 9,
        topic: "Statistics — Error & Variance",
        question:
            "A quantitative evaluation of a trading model involves variance, error metrics, and statistical inference. Evaluate these statements:",
        options: [
            {
                id: "a",
                text: "Variance measures the dispersion of a set of data points around their mean; it is calculated as the average of the squared differences from the mean.",
                correct: true,
            },
            {
                id: "b",
                text: "Standard deviation is simply the square root of the variance and is measured in the same units as the original data (e.g., percentage return).",
                correct: true,
            },
            {
                id: "c",
                text: "Root Mean Square Error (RMSE) penalizes large prediction errors more heavily than small ones because the errors are squared before being averaged.",
                correct: true,
            },
            {
                id: "d",
                text: "Expected Test MSE can be mathematically decomposed into three additive components: Bias², Variance, and Irreducible Error (noise).",
                correct: true,
            },
            {
                id: "e",
                text: "A low variance ALWAYS implies the model's predictions are highly accurate and perfectly centered on the true target value.",
                correct: false,
            },
        ],
        explanation:
            "Low variance simply means the predictions are tightly clustered together, not necessarily accurate. If the predictions are clustered tightly around the wrong value, the model has low variance but high bias (inaccurate). This is the core of the bias-variance tradeoff: Bias² + Variance + Irreducible Error.",
    },

    // ── Q10: Real-World ML Challenges in Finance ──
    {
        id: 10,
        topic: "ML in Finance — Practical Challenges",
        question:
            "Applying Machine Learning to financial markets is notoriously difficult. Evaluate the following challenges ML models face in the real world:",
        options: [
            {
                id: "a",
                text: "Not having enough data: Monthly macroeconomic data (like CPI) yields only 12 data points a year, making complex models highly prone to overfitting due to 'the small data problem.'",
                correct: true,
            },
            {
                id: "b",
                text: "Look-ahead bias / Data Leakage: Training a model using Q3 earnings reported 40 days after quarter-end AS IF it were available on the quarter-end date.",
                correct: true,
            },
            {
                id: "c",
                text: "Non-stationarity (Adaptive Markets): The statistical properties of financial markets change over time as successful strategies get arbitraged away, regulations shift, and new market participants enter.",
                correct: true,
            },
            {
                id: "d",
                text: "Low Signal-to-Noise Ratio: Financial data is extremely noisy; genuine predictive signals are tiny compared to the randomness of daily market fluctuations — making simple models often beat complex ones.",
                correct: true,
            },
            {
                id: "e",
                text: "Because of these challenges, utilizing a 1,000-layer neural network on raw stock prices is generally considered the safest and most robust baseline model to start with.",
                correct: false,
            },
        ],
        explanation:
            "Because of low signal-to-noise and limited data history, using massive complex models immediately leads to extreme overfitting. Simple, robust, interpretable models (like ridge regression or random forests) are the preferred starting point. Domain knowledge is your best defense against overfitting — use economic intuition to curate inputs.",
    },

    // ── Q11: No Free Lunch Theorem ──
    {
        id: 11,
        topic: "Theory — No Free Lunch",
        question:
            "Consider the 'No Free Lunch' Theorem in machine learning. Evaluate the following statements regarding its implications:",
        options: [
            {
                id: "a",
                text: "The theorem states that if you average the performance of any two learning algorithms across ALL possible problems, their performance is identical.",
                correct: true,
            },
            {
                id: "b",
                text: "It implies there is no universally 'best' machine learning algorithm — model choice depends on the inductive bias baked into the model architecture matching the structure of the specific problem.",
                correct: true,
            },
            {
                id: "c",
                text: "Because of this theorem, practitioners must rely on domain knowledge and empirical cross-validation to choose the right algorithm for a specific problem.",
                correct: true,
            },
            {
                id: "d",
                text: "The theorem proves that simple linear regression will always exactly tie with a deep neural network on any specific dataset involving human speech recognition.",
                correct: false,
            },
            {
                id: "e",
                text: "A practical implication for ML4T is that a linear model may beat a neural net on small tabular financial data, because assumptions (inductive bias) are mandatory for a learner to generalize.",
                correct: true,
            },
        ],
        explanation:
            "The theorem says algorithms average out across ALL CONCEIVABLE problems (including pure noise). However, on specific real-world domains (like speech recognition), some models (neural nets) perform vastly better because their built-in assumptions ALIGN with the structure of that problem. The key implication: don't cargo-cult architectures; always use cross-validation.",
    },

    // ── Q12: Short Selling Mechanics ──
    {
        id: 12,
        topic: "Market Mechanics — Short Selling",
        question:
            "A trader initiates a short position on a stock. Evaluate the mechanics and risks of short selling:",
        options: [
            {
                id: "a",
                text: "To short sell, the trader borrows shares from a broker, sells them at the current market price ('sell to open'), and hopes to buy them back later at a lower price ('buy to close').",
                correct: true,
            },
            {
                id: "b",
                text: "The maximum profit of a pure short position is capped (the stock can only drop to $0), while the theoretical maximum loss is unlimited because there is no ceiling on how high a stock price can rise.",
                correct: true,
            },
            {
                id: "c",
                text: "The theoretical maximum loss of a short position is capped at the initial margin requirement deposited by the trader; the broker absorbs any remaining losses.",
                correct: false,
            },
            {
                id: "d",
                text: "Short sellers are responsible for paying any dividends distributed by the company to the original lender of the shares during the borrowing period.",
                correct: true,
            },
            {
                id: "e",
                text: "If the stock price rises explosively, the broker may issue a 'margin call', forcing the trader to deposit more cash or buy back the shares at a colossal loss (a short squeeze scenario).",
                correct: true,
            },
        ],
        explanation:
            "The broker does NOT absorb losses — they protect themselves via margin calls and forced liquidation. Maximum long loss = 100% (stock goes to $0). Maximum short loss = theoretically infinite (stock can rise without bound). Short selling also fights the long-term upward trend of the market.",
    },

    // ── Q13: CAPM — Alpha and Beta ──
    {
        id: 13,
        topic: "CAPM — Alpha & Beta",
        question:
            "Consider the Capital Asset Pricing Model (CAPM) framework, which decomposes returns into Beta (market) and Alpha (skill). Evaluate the following:",
        options: [
            {
                id: "a",
                text: "CAPM states: Return(stock) = Alpha + Beta × Return(market) + ε, which is literally a simple linear regression of stock returns on market returns.",
                correct: true,
            },
            {
                id: "b",
                text: "Beta is the slope of that regression line and measures an asset's sensitivity to the market. A Beta of 1.5 implies the stock is 50% more volatile than the market.",
                correct: true,
            },
            {
                id: "c",
                text: "Alpha is the Y-intercept of the regression and represents excess return achieved by stock selection skill, beyond what market risk (Beta) would predict.",
                correct: true,
            },
            {
                id: "d",
                text: "Under strict CAPM in perfectly efficient markets, expected Alpha for all stocks is greater than 10% annually.",
                correct: false,
            },
            {
                id: "e",
                text: "An investor buying S&P 500 Index Funds (passive ETFs) is 'Buying Beta' — getting cheap market exposure. 'Seeking Alpha' requires active stock selection skill.",
                correct: true,
            },
        ],
        explanation:
            "Under strict CAPM in perfectly efficient markets, expected true Alpha is theoretically ZERO — all returns are compensation purely for systemic risk (Beta). On average across all stocks, Alpha = 0 because all stocks together = the market. Positive alpha in one stock is offset by negative alpha in another.",
    },

    // ── Q14: Beta-Neutral / Market-Neutral Strategies ──
    {
        id: 14,
        topic: "CAPM — Beta-Neutral Strategies",
        question:
            "A hedge fund manager wants to construct a market-neutral (beta-neutral) portfolio. Consider the following statements:",
        options: [
            {
                id: "a",
                text: "A market-neutral portfolio has a net beta of zero (Σ w_i × β_i = 0), meaning its returns are driven entirely by alpha (stock selection skill), not market direction.",
                correct: true,
            },
            {
                id: "b",
                text: "'Buying beta' refers to investing in high-beta stocks for amplified market exposure — it requires no stock-picking skill and can be achieved cheaply with a passive index fund (ETF).",
                correct: true,
            },
            {
                id: "c",
                text: "Hedge funds that use beta-neutral strategies typically use high leverage (20-30x) to amplify the small excess returns from stock selection into meaningful portfolio returns.",
                correct: true,
            },
            {
                id: "d",
                text: "In a market crash, a perfectly beta-neutral portfolio would experience the exact same severe losses as the overall broader market.",
                correct: false,
            },
            {
                id: "e",
                text: "Combining assets with low or negative correlation reduces portfolio volatility without necessarily reducing expected returns — this is the core benefit of diversification.",
                correct: true,
            },
        ],
        explanation:
            "By definition, a portfolio with net beta = 0 has zero correlation to market movements. In a massive market crash, it should theoretically experience zero market-driven losses, surviving solely on the alpha of its long/short pairings. The short positions offset the long losses from the market decline.",
    },

    // ── Q15: Sharpe Ratio & Performance Evaluation ──
    {
        id: 15,
        topic: "Performance Evaluation — Sharpe Ratio",
        question:
            "As a portfolio manager, you are evaluating performance metrics for a trading strategy. Consider the following statements:",
        options: [
            {
                id: "a",
                text: "The Sharpe Ratio is calculated as: (portfolio return − risk-free rate) / standard deviation of portfolio returns.",
                correct: true,
            },
            {
                id: "b",
                text: "To annualize the Sharpe ratio from daily returns in Python, you compute: sqrt(252) × mean(daily_returns) / std(daily_returns).",
                correct: true,
            },
            {
                id: "c",
                text: "The S&P 500's long-term Sharpe ratio is approximately 0.5, and a Sharpe ratio of 1.0 or higher is generally considered very good and rarely achieved sustainably.",
                correct: true,
            },
            {
                id: "d",
                text: "The cumulative return of a portfolio is calculated by simply summing all the daily returns together (cumulative_return = Σ daily_returns).",
                correct: false,
            },
            {
                id: "e",
                text: "The Sharpe Ratio is calculated by adding the risk-free rate to the portfolio's average return and dividing by the standard deviation.",
                correct: false,
            },
        ],
        explanation:
            "Cumulative return is calculated using a compound product: cumulative_return = Π(1 + daily_return) − 1, NOT by simply summing daily returns. The Sharpe ratio SUBTRACTS the risk-free rate from the portfolio return, it doesn't add it. These are common exam traps directly from the sample questions.",
    },

    // ── Q16: EMH (Efficient Market Hypothesis) ──
    {
        id: 16,
        topic: "Market Efficiency — EMH",
        question:
            "Eugene Fama's Efficient Market Hypothesis categorizes market efficiency into three forms. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "The Weak Form states that all past price and volume data is already reflected in the current price, rendering Technical Analysis useless for generating alpha.",
                correct: true,
            },
            {
                id: "b",
                text: "The Semi-Strong Form states that all publicly available information (earnings, news, balance sheets, filings) is priced in, rendering both Technical and Fundamental Analysis useless.",
                correct: true,
            },
            {
                id: "c",
                text: "The Strong Form states that ALL information, including non-public and insider information, is immediately reflected in the stock price.",
                correct: true,
            },
            {
                id: "d",
                text: "The general consensus among financial economists is that the Strong Form of EMH unquestionably holds true in all real-world markets.",
                correct: false,
            },
            {
                id: "e",
                text: "If a hedge fund successfully uses NLP on Twitter sentiment to predict next week's prices, they are providing evidence against the Semi-Strong form of EMH.",
                correct: true,
            },
        ],
        explanation:
            "The Strong Form of EMH is widely considered to NOT hold — the existence of profitable (illegal) insider trading proves that non-public information is NOT instantly priced in. Most evidence supports weak or semi-strong form for large-cap US stocks. Less efficient for small-cap and emerging markets. Paradox: active managers like hedge funds may be the agents who MAKE markets efficient.",
    },

    // ── Q17: Valuations — Intrinsic, Book, Market ──
    {
        id: 17,
        topic: "Stock Fundamentals — Valuations",
        question:
            "An investor is comparing the Market Capitalization, Book Value, and Intrinsic Value of a stock to decide when to buy or sell. Evaluate these valuation statements:",
        options: [
            {
                id: "a",
                text: "Book Value represents the net asset value of the company (Total Assets minus Total Liabilities = Stockholder's Equity) calculated from the balance sheet.",
                correct: true,
            },
            {
                id: "b",
                text: "Intrinsic Value can be estimated using the Discounted Cash Flow (DCF) method or the Gordon Growth Model: Intrinsic Value = Dividend / (Discount Rate − Growth Rate).",
                correct: true,
            },
            {
                id: "c",
                text: "Intrinsic Value is a precise fixed number that fluctuates exactly 1:1 with the daily stock price and is identical to the current Market Capitalization.",
                correct: false,
            },
            {
                id: "d",
                text: "A value investor typically seeks to BUY a stock when its estimated Intrinsic Value is significantly HIGHER than its current Market Price (a 'margin of safety').",
                correct: true,
            },
            {
                id: "e",
                text: "If Market Price > estimated Intrinsic Value, this represents a potential SHORT opportunity — the stock may fall to converge with its fundamental value.",
                correct: true,
            },
        ],
        explanation:
            "Intrinsic Value is an ESTIMATED calculation of a company's true fundamental worth, attempting to look PAST fluctuating daily market sentiment. It does not tick 1:1 with current price — that's the whole point. The Price-to-Book ratio (P/B < 1.0) may signal undervaluation, but can also be a 'value trap' if the underlying business is declining.",
    },

    // ── Q18: Decision Trees — Regression vs Classification ──
    {
        id: 18,
        topic: "Decision Trees — Types",
        question:
            "Consider the difference between applying Decision Trees to Regression tasks versus Classification tasks. Evaluate the following:",
        options: [
            {
                id: "a",
                text: "A Classification Tree predicts a discrete category label (e.g., 'Buy', 'Sell', 'Hold') at the leaf nodes, using impurity measures like Gini Index or Entropy to decide splits.",
                correct: true,
            },
            {
                id: "b",
                text: "A Regression Tree predicts a continuous numerical value by averaging the targets of the training data that fall in each terminal node (leaf), using RSS/variance reduction to decide splits.",
                correct: true,
            },
            {
                id: "c",
                text: "Decision trees are built using recursive binary splitting — a greedy, top-down algorithm that chooses the locally best split at each step.",
                correct: true,
            },
            {
                id: "d",
                text: "Single decision trees have high variance — small changes in the training data can produce a very different tree structure, which is the key motivation for ensemble methods.",
                correct: true,
            },
            {
                id: "e",
                text: "Only Regression Trees are prone to overfitting. A Classification Tree mathematically cannot overfit because its outputs are restricted to existing class labels.",
                correct: false,
            },
        ],
        explanation:
            "Both Regression and Classification Trees are highly prone to overfitting if grown too deep (unpruned). A classification tree can overfit by creating a leaf node for every single noise-filled training instance. Decreasing leaf_size = more leaves = more complex tree = more overfitting. This is analogous to decreasing K in kNN.",
    },

    // ── Q19: Bagging & Random Forests ──
    {
        id: 19,
        topic: "Ensemble Methods — Bagging & OOB",
        question:
            "A data scientist uses Bootstrap Aggregation (Bagging) and Random Forests. Consider the Out-Of-Bag (OOB) error and ensemble mechanics:",
        options: [
            {
                id: "a",
                text: "When creating a bootstrap sample of size N with replacement, roughly 1/3 (~36.8%) of the original training data is left out of that specific sample — these are the Out-Of-Bag (OOB) observations.",
                correct: true,
            },
            {
                id: "b",
                text: "OOB error provides a built-in estimate of out-of-sample test error without the need for a separate validation split — OOB prediction for each observation uses ONLY trees that did NOT see it during training.",
                correct: true,
            },
            {
                id: "c",
                text: "Random Forests improve upon standard bagging by randomly sampling m ≈ √p features at each split, decorrelating the trees and giving bigger variance reduction when averaged.",
                correct: true,
            },
            {
                id: "d",
                text: "Bagging reduces VARIANCE (not bias) — each tree has high variance and low bias; averaging many independent trees reduces variance without increasing bias.",
                correct: true,
            },
            {
                id: "e",
                text: "Because OOB observations are not used during training, the OOB error rate is practically guaranteed to be exactly 0% in any robust Random Forest.",
                correct: false,
            },
        ],
        explanation:
            "OOB error estimates true out-of-sample generalization error. For any real-world noisy dataset, a test error of 0% is impossible and would indicate data leakage. The key parameter for Random Forests is m (features per split): m = p → equivalent to bagging; m = √p → standard random forest. 'Ensembling is the closest thing to a free lunch in ML, much like diversification in investing.'",
    },

    // ── Q20: Parametric vs Non-Parametric Models ──
    {
        id: 20,
        topic: "Statistical Learning — Parametric vs Non-Parametric",
        question:
            "Distinguish between parametric and non-parametric machine learning models. Evaluate the following:",
        options: [
            {
                id: "a",
                text: "Parametric models assume a functional form for f(X) (e.g., Y = β₀ + β₁X₁ + ... + βₚXₚ) and only need to estimate a fixed number of coefficients.",
                correct: true,
            },
            {
                id: "b",
                text: "Non-parametric models do not assume an explicit functional form — the data itself shapes the model structure, allowing the flexibility to fit a wide array of shapes.",
                correct: true,
            },
            {
                id: "c",
                text: "Linear Regression, Ridge Regression, and Logistic Regression are examples of Parametric models; kNN and unpruned Decision Trees are examples of Non-parametric models.",
                correct: true,
            },
            {
                id: "d",
                text: "Parametric models (like Linear Regression) generally win in high dimensions or with small datasets, because their assumed form provides guiding constraints that prevent wild predictions.",
                correct: true,
            },
            {
                id: "e",
                text: "Because non-parametric models are more flexible, they generally require vastly smaller datasets to train properly compared to parametric models.",
                correct: false,
            },
        ],
        explanation:
            "Non-parametric models generally require MUCH LARGER datasets because they lack the guiding guardrails (bias) of a pre-assumed mathematical form. In sparse data regions, parametric models have an advantage because their assumed structure constrains predictions. kNN is competitive for p=1 or p=2 features, but linear regression often wins for p ≥ 4.",
    },

    // ── Q21: Bias-Variance Tradeoff in Detail ──
    {
        id: 21,
        topic: "Model Errors — Bias/Variance",
        question:
            "Evaluate scenarios mapping to Bias and Variance in financial modeling:",
        options: [
            {
                id: "a",
                text: "A linear regression attempting to fit a wildly oscillating sine wave relationship will output a straight line through the data. This represents high bias (the model is systematically wrong).",
                correct: true,
            },
            {
                id: "b",
                text: "A deep decision tree memorizing the exact noise in today's arbitrary market ticks and producing jagged, specialized rules has high variance — it changes drastically with each new dataset.",
                correct: true,
            },
            {
                id: "c",
                text: "Total expected test error is mathematically decomposed into three components: Bias², Variance, and Irreducible Noise.",
                correct: true,
            },
            {
                id: "d",
                text: "In finance, limiting model complexity (accepting slightly higher bias to massively reduce variance) is a standard defense against poor signal-to-noise ratios.",
                correct: true,
            },
            {
                id: "e",
                text: "As k increases in a kNN algorithm (e.g., from k=1 to k=N), the model's variance increases while its bias drops to zero.",
                correct: false,
            },
        ],
        explanation:
            "As k increases in kNN, the model becomes 'smoother' — averaging over more neighbors. This DECREASES variance but INCREASES bias (underfitting). At k=1, the model memorizes training data (high variance, zero training error). At k=N, it simply predicts the mean of the entire dataset (maximum bias, minimum variance).",
    },

    // ── Q22: Hedge Fund Structure & Fees ──
    {
        id: 22,
        topic: "Institutional Finance — Fund Types",
        question:
            "Compare the structure, regulation, and fee models of ETFs, Mutual Funds, and Hedge Funds. Evaluate the following:",
        options: [
            {
                id: "a",
                text: "ETFs trade throughout the day like stocks with very low fees (~0.1-1.0% AUM), while mutual funds are priced once daily at end-of-day NAV with higher fees (~0.25-2.0% AUM).",
                correct: true,
            },
            {
                id: "b",
                text: "Hedge funds typically charge '2 and 20' — a 2% annual management fee on Assets Under Management regardless of performance, plus 20% of any profits above a benchmark.",
                correct: true,
            },
            {
                id: "c",
                text: "Hedge funds are restricted to accredited investors only (wealthy individuals and institutions) and maintain very low transparency to protect their proprietary strategies.",
                correct: true,
            },
            {
                id: "d",
                text: "Hedge funds operate four main strategy types: Equity Long/Short, Arbitrage, Momentum/Direction, and Event-driven trading.",
                correct: true,
            },
            {
                id: "e",
                text: "Mutual funds, ETFs, and Hedge funds are all regulated identically under the same strict SEC rules, with the same leverage limits and advertising restrictions.",
                correct: false,
            },
        ],
        explanation:
            "Hedge funds are LIGHTLY regulated compared to ETFs and mutual funds. They can use extensive leverage, short sell freely, and historically were prohibited from advertising. Secrecy is essential because financial strategies cannot be legally protected as intellectual property — hiding the strategy is the only defense against competitors copying it.",
    },

    // ── Q23: Data Handling — Adjusted Prices & Missing Data ──
    {
        id: 23,
        topic: "Data Quirks — Practical Handling",
        question:
            "When working with stock market data in Python for backtesting, several data quirks must be handled correctly. Evaluate the following:",
        options: [
            {
                id: "a",
                text: "Adjusted close prices retroactively adjust all historical prices to account for stock splits and dividends — you should ALWAYS use adjusted prices for return calculations and backtesting.",
                correct: true,
            },
            {
                id: "b",
                text: "For missing data in financial time series, the recommended approach is: fill forward first (propagate last known price), then fill backward (to handle gaps at the start of the series).",
                correct: true,
            },
            {
                id: "c",
                text: "In a 2-for-1 stock split, 100 shares at $100 become 200 shares at $50 — total value is unchanged, but unadjusted price charts show a misleading 50% 'drop.'",
                correct: true,
            },
            {
                id: "d",
                text: "Survivorship bias occurs when you backtest only on stocks that currently exist in an index, ignoring companies that went bankrupt (like Enron or Lehman Brothers), inflating results.",
                correct: true,
            },
            {
                id: "e",
                text: "When a stock pays a dividend, the adjusted price is adjusted upward because dividends represent additional income to the shareholder.",
                correct: false,
            },
        ],
        explanation:
            "When a stock pays a dividend, the actual stock price drops by approximately the dividend amount on the ex-dividend date. The adjusted price retroactively adjusts PAST prices DOWNWARD so that the return calculation correctly captures the dividend return. If it adjusted prices upward, it would artificially inflate historical returns.",
    },

    // ── Q24: Backtesting Pitfalls ──
    {
        id: 24,
        topic: "Practical Deployment — Pitfalls",
        question:
            "A student creates a strategy yielding 800% annual returns in backtesting but loses money in live deployment. Evaluate the likely culprits:",
        options: [
            {
                id: "a",
                text: "Lookahead bias: They utilized the 'Close' price of today to calculate technical indicators generating a trade at the 'Open' of today — using data before it was actually available.",
                correct: true,
            },
            {
                id: "b",
                text: "Survivorship bias: They downloaded the current S&P 500 constituents and ran a backtest over 20 years, ignoring bankrupt companies like Enron or Lehman Brothers that were once in the index.",
                correct: true,
            },
            {
                id: "c",
                text: "Overfitting: Their algorithm had dozens of parameters tuned to perfectly isolate every historical dip and rally, failing completely on new, out-of-sample data.",
                correct: true,
            },
            {
                id: "d",
                text: "Lack of trading costs: The backtest assumed free, instant execution with no bid-ask spread and zero market impact — in reality, these costs erode much of the theoretical alpha.",
                correct: true,
            },
            {
                id: "e",
                text: "Modern Portfolio Theory guarantees this performance is impossible, since the Efficient Frontier dictates absolute caps on the returns any algorithmic strategy can ever achieve.",
                correct: false,
            },
        ],
        explanation:
            "MPT does not enforce deterministic caps on what a single algorithm might achieve. The standard real-world barriers are: lookahead bias, survivorship bias, overfitting, and trading friction (bid-ask spread, slippage, market impact). These are the universal reasons for massive backtest-to-live performance degradation.",
    },

    // ── Q25: Foundations Recap — Probability & Model Classification ──
    {
        id: 25,
        topic: "Foundations Recap",
        question:
            "Bringing together the structure of statistical learning, probability rules, and ensemble methods. Consider signals A and B in a trading model:",
        options: [
            {
                id: "a",
                text: "If P(Signal A) = 0.5 and P(Signal B) = 0.5, and they are mutually exclusive, then P(A OR B) = 1.0 using the Sum Rule (since P(A and B) = 0 for mutually exclusive events).",
                correct: true,
            },
            {
                id: "b",
                text: "If A and B are independent, P(A AND B) = 0.5 × 0.5 = 0.25 using the Product Rule.",
                correct: true,
            },
            {
                id: "c",
                text: "Ensemble methods like Bagging and Boosting typically rely on Decision Trees at their core, which are Non-parametric models (creating split thresholds rather than an explicit parametric form).",
                correct: true,
            },
            {
                id: "d",
                text: "Applying ML to finance effectively means utilizing these foundational rules over robust, non-leaky datasets — using chronological train/test splits with no lookahead bias — to find persistent, out-of-sample edges.",
                correct: true,
            },
            {
                id: "e",
                text: "Boosting and Bagging are Parametric models because they produce final predictions as weighted sums, analogous to the exact continuous coefficients used in linear regression.",
                correct: false,
            },
        ],
        explanation:
            "Boosting and Bagging normally rely on Decision Trees at their core, which are Non-parametric models. Although the final ensemble prediction is a weighted combination of tree outputs, the trees themselves do not assume a fixed functional form — they partition the feature space into rectangular regions using learned split thresholds. This makes them fundamentally non-parametric.",
    },
];

export default examData5;
