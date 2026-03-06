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
                text: "Supervised learning requires historical labeled data (e.g., past stock prices or returns) to train a model to predict future prices or classify market directions.",
                correct: true,
            },
            {
                id: "b",
                text: "Unsupervised learning, such as k-means clustering or PCA, operates without labeled outcomes, seeking instead to find hidden structures, groupings, or factors within market data.",
                correct: true,
            },
            {
                id: "c",
                text: "Reinforcement learning involves an agent taking actions (buy/sell/hold) in an environment to maximize a cumulative reward (e.g., portfolio return) over time, learning from the consequences of its actions.",
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
            "Supervised learning is highly susceptible to overfitting, especially in noisy financial data. RL models are not immune to regime changes; a policy learned in a bull market may fail catastrophically in a crash before it can adapt.",
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
            "Randomly shuffling financial time-series data causes lookahead bias because future data leaks into the training set. A zero training error usually indicates severe overfitting, not perfect generalization. Chronological splitting is crucial in finance.",
    },

    // ── Q3: Overfitting vs Underfitting (and Polynomials) ──
    {
        id: 3,
        topic: "Model Complexity — Fit",
        question:
            "Consider the concepts of overfitting, underfitting, and polynomial extrapolation in machine learning. Evaluate the following statements:",
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
                text: "Adding proper regularization (such as Ridge or Lasso penalty) to a complex polynomial model helps constrain the coefficients and mitigate overfitting.",
                correct: true,
            },
            {
                id: "e",
                text: "A model exhibiting high bias is typically associated with underfitting, while a model exhibiting high variance is typically associated with overfitting.",
                correct: true,
            },
        ],
        explanation:
            "Increasing the polynomial degree to M=9 for N=10 points leads to wild oscillations (Runge's phenomenon) and extreme overfitting, driving test error up drastically. The other statements accurately describe the bias-variance tradeoff and regularization.",
    },

    // ── Q4: KNN vs Linear Regression (Mechanics) ──
    {
        id: 4,
        topic: "Algorithms — kNN vs LinReg",
        question:
            "Compare the mechanics of k-Nearest Neighbors (kNN) and ordinary Linear Regression in terms of training, querying, and data suitability. Evaluate the following:",
        options: [
            {
                id: "a",
                text: "Linear regression is parametric (an eager learner) and has a relatively slow 'build' phase as it calculates coefficients, but a very fast O(1) 'query' phase.",
                correct: true,
            },
            {
                id: "b",
                text: "kNN is non-parametric (a lazy learner) and has an effectively zero 'build' time (just storing data), but querying is slow O(N) because it must compute distance to every stored point.",
                correct: true,
            },
            {
                id: "c",
                text: "If the true relationship in the data is highly non-linear, kNN will generally outperform a simple linear regression model.",
                correct: true,
            },
            {
                id: "d",
                text: "As the number of features (dimensions) increases to 1,000, kNN queries become significantly faster than linear regression queries.",
                correct: false,
            },
            {
                id: "e",
                text: "Linear regression inherently captures complex interactions between variables without the programmer explicitly adding interaction terms to the feature set.",
                correct: false,
            },
        ],
        explanation:
            "kNN suffers from the curse of dimensionality; its query time scales poorly with features and distance metrics become less meaningful. Linear regression requires manual feature engineering to capture non-linear interactions; it cannot discover them automatically.",
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
            "Adding more features (especially noise) usually degrades kNN performance because the distance metric gets diluted. Linear regression with more features than data rows (p > n) cannot be uniquely solved without regularization and is highly prone to overfitting.",
    },

    // ── Q6: Hedge Funds & Investing Considerations ──
    {
        id: 6,
        topic: "Institutional Finance — Hedge Funds",
        question:
            "A quantitative hedge fund is considering taking a massive long position in a mid-cap stock. What factors would they analyze before investing? Evaluate:",
        options: [
            {
                id: "a",
                text: "Liquidity constraints: if average daily volume is too low, the fund's large order will cause significant 'market impact', driving the purchase price up.",
                correct: true,
            },
            {
                id: "b",
                text: "Capacity: determining the maximum amount of capital that can be deployed into the strategy before the alpha is completely eroded by trading costs.",
                correct: true,
            },
            {
                id: "c",
                text: "Hedge funds uniquely avoid all use of leverage; they only invest the strict pool of capital provided by their limited partners.",
                correct: false,
            },
            {
                id: "d",
                text: "Correlation to the broader market portfolio (Beta) — many hedge funds explicitly try to hedge out market risk to generate pure uncorrelated Alpha.",
                correct: true,
            },
            {
                id: "e",
                text: "Since hedge funds are strictly regulated under the Investment Company Act of 1940 like mutual funds, they cannot short sell the stock under any circumstances.",
                correct: false,
            },
        ],
        explanation:
            "Hedge funds are known for leveraging their positions extensively (unlike standard mutual funds) to amplify returns. They are generally loosely regulated (catering to accredited investors) and absolutely use short selling as a core mechanic.",
    },

    // ── Q7: Boosting (Ensemble Methods) ──
    {
        id: 7,
        topic: "Ensemble — Boosting",
        question:
            "Consider Boosting algorithms (like AdaBoost or Gradient Boosting) as an ensemble learning technique. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "Unlike bagging which trains models in parallel independently, boosting trains weak learners sequentially, with each new model attempting to correct the errors of the previous sequence.",
                correct: true,
            },
            {
                id: "b",
                text: "In AdaBoost, data instances that were misclassified by the previous tree are given heavily increased weight for the next tree.",
                correct: true,
            },
            {
                id: "c",
                text: "Boosting primarily works by dramatically reducing the variance of high-complexity models (like massive, unpruned decision trees) rather than reducing bias.",
                correct: false,
            },
            {
                id: "d",
                text: "Because boosting continually focuses on the hardest-to-predict examples, it can be sensitive to outliers and noisy data, sometimes leading to overfitting if not tuned properly.",
                correct: true,
            },
            {
                id: "e",
                text: "The final prediction in a boosting ensemble is typically a weighted sum/vote of the constituent weak learners.",
                correct: true,
            },
        ],
        explanation:
            "Boosting primarily reduces BIAS by sequentially fitting residuals/errors of weak learners (like shallow stumps). Bagging (like Random Forests) is what primarily reduces VARIANCE by averaging many deep, high-variance trees.",
    },

    // ── Q8: Probability: Product Rule & Sum Rule ──
    {
        id: 8,
        topic: "Probability — Core Rules",
        question:
            "Consider fundamental probability rules required for quantitative finance. Evaluate the following statements:",
        options: [
            {
                id: "a",
                text: "The Sum Rule for any two events A and B states: P(A or B) = P(A) + P(B) − P(A and B).",
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
                text: "For dependent events, the Product Rule is expressed using conditional probability: P(A and B) = P(A) × P(B | A).",
                correct: true,
            },
            {
                id: "e",
                text: "If the probability of the market going up is 0.6 and the probability of a tech stock going up is 0.5, the absolute maximum joint probability of both going up is 1.1.",
                correct: false,
            },
        ],
        explanation:
            "Mutually exclusive events cannot happen at the same time, so P(A and B) = 0. Probabilities can never exceed 1.0. The maximum joint probability P(A and B) in the example can only be 0.5 (if the tech stock rising is completely encompassed by the market rising).",
    },

    // ── Q9: Basic Variance and Error Measurement ──
    {
        id: 9,
        topic: "Statistics — Error & Variance",
        question:
            "A quantitative evaluation of a trading model involves variance, error metrics, and statistical inference. Evaluate these basic statements:",
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
                text: "Root Mean Square Error (RMSE) severely penalizes large prediction errors more than small ones because the errors are squared before being averaged.",
                correct: true,
            },
            {
                id: "d",
                text: "The F-statistic in a multiple linear regression tests the overall significance of the model, asking: 'Do all independent variables jointly have no effect?'",
                correct: true,
            },
            {
                id: "e",
                text: "A low variance ALWAYS implies the model's predictions are highly accurate and perfectly centered on the true target value.",
                correct: false,
            },
        ],
        explanation:
            "Low variance simply means the predictions are tightly clustered together, not necessarily accurate. If the predictions are clustered tightly around the wrong value, the model has low variance but high bias (inaccurate).",
    },

    // ── Q10: Data & Real-World ML Challenges ──
    {
        id: 10,
        topic: "ML in Finance — Practical Challenges",
        question:
            "Applying Machine Learning to financial markets is notoriously difficult. Evaluate the following challenges models face in the real world:",
        options: [
            {
                id: "a",
                text: "Not having enough data: Monthly macroeconomic data (like CPI) yields only 12 data points a year, making deep learning models highly prone to overfitting.",
                correct: true,
            },
            {
                id: "b",
                text: "Look-ahead bias / Data Leakage: Training a model using closing price data from Friday to make a prediction on Friday morning.",
                correct: true,
            },
            {
                id: "c",
                text: "Non-stationarity: The statistical properties of financial markets change over time due to regulations, technology, and arbitrage, invalidating old patterns.",
                correct: true,
            },
            {
                id: "d",
                text: "Low Signal-to-Noise Ratio: Financial data is extremely noisy; genuine predictive signals are tiny compared to the randomness of daily market fluctuations.",
                correct: true,
            },
            {
                id: "e",
                text: "Because of these challenges, utilizing a 1,000-layer neural network on raw stock prices is generally considered the safest and most robust baseline to start with.",
                correct: false,
            },
        ],
        explanation:
            "Because of low signal-to-noise and limited data history, using massive complex models like 1,000-layer neural networks immediately leads to extreme overfitting. Simple, robust, interpretable models (like ridge regression or random forests) are often the preferred starting point.",
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
                text: "The theorem states that if you average the performance of any two optimization algorithms across all possible problems, their performance is identical.",
                correct: true,
            },
            {
                id: "b",
                text: "It implies there is no universally 'best' machine learning algorithm for every single dataset and task.",
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
                text: "David Wolpert and William Macready introduced the No Free Lunch theorem to formally prove that assumptions (bias) are mandatory for a learner to generalize.",
                correct: true,
            },
        ],
        explanation:
            "The theorem says algorithms average out perfectly across ALL CONCEIVABLE problems (including pure noise). However, on specific real-world domains (like speech recognition), some models (neural nets) perform vastly better because their built-in assumptions ALIGN with the structure of that specific problem.",
    },

    // ── Q12: Short Selling Mechanics ──
    {
        id: 12,
        topic: "Market Mechanics — Short Selling",
        question:
            "A trader initiates a short position on a rapidly declining meme stock. Evaluate the mechanics and risks of shorting a stock:",
        options: [
            {
                id: "a",
                text: "To short sell, the trader borrows shares from a broker, sells them at the current market price, and hopes to buy them back later at a lower price.",
                correct: true,
            },
            {
                id: "b",
                text: "The maximum profit of a pure short position is 100% of the initial investment (if the stock drops exactly to $0.00).",
                correct: true,
            },
            {
                id: "c",
                text: "The theoretical maximum loss is capped at the initial margin requirement deposited by the trader; the broker covers the rest.",
                correct: false,
            },
            {
                id: "d",
                text: "Short sellers are responsible for paying any dividends distributed by the company to the original lender of the shares during the borrowing period.",
                correct: true,
            },
            {
                id: "e",
                text: "If the stock price rises explosively, the broker may issue a 'margin call', forcing the trader to deposit more cash or buy back the shares at a colossal loss (a short squeeze).",
                correct: true,
            },
        ],
        explanation:
            "The theoretical maximum loss of a short position is infinite, because there is no ceiling on how high a stock price can rise. The broker does NOT cover losses—they liquidate you via a margin call to protect themselves.",
    },

    // ── Q13: Valuations — Intrinsic, Book, Market ──
    {
        id: 13,
        topic: "Stock Fundamentals — Valuations",
        question:
            "An investor is comparing the Market Capitalization, Book Value, and Intrinsic Value of a stock to decide when to buy. Evaluate these valuation statements:",
        options: [
            {
                id: "a",
                text: "Market Capitalization is the current public valuation of the company, calculated seamlessly by multiplying the current share price by the total number of outstanding shares.",
                correct: true,
            },
            {
                id: "b",
                text: "Book Value essentially represents the net asset value of the company (Total Assets minus Total Liabilities), calculated using the balance sheet.",
                correct: true,
            },
            {
                id: "c",
                text: "Intrinsic Value is a theoretical, precise number calculated entirely through market sentiment; it fluctuates exactly 1:1 with the daily stock price tick.",
                correct: false,
            },
            {
                id: "d",
                text: "A fundamental value investor typically seeks to BUY a stock when its currently calculated Intrinsic Value is significantly HIGHER than its current Market Price.",
                correct: true,
            },
            {
                id: "e",
                text: "A 'value trap' can occur when a stock appears cheap (low Price-to-Book ratio) but is continuously declining because the underlying business is fundamentally broken.",
                correct: true,
            },
        ],
        explanation:
            "Intrinsic value is an estimated calculation of a company's true fundamental worth (often via Discounted Cash Flow), attempting to look PAST fluctuating daily market sentiment. It does not tick 1:1 with current price.",
    },

    // ── Q14: Performance Evaluation & Sharpe Ratio (From App Image) ──
    {
        id: 14,
        topic: "Performance Evaluation — Sharpe",
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
                text: "The S&P 500's long-term Sharpe ratio is approximately 0.5, and a Sharpe ratio of 1.0 or higher is generally considered very good.",
                correct: true,
            },
            {
                id: "d",
                text: "The cumulative return of a portfolio is calculated by simply summing all the daily returns together.",
                correct: false,
            },
            {
                id: "e",
                text: "The Sharpe Ratio is calculated by adding the risk-free rate to the portfolio's average return and dividing by the standard deviation.",
                correct: false,
            },
        ],
        explanation:
            "Cumulative return is calculated using a compound product = Π(1 + daily_return) - 1, NOT by simply adding them up. The Sharpe ratio subtracts the risk-free rate, it doesn't add it.",
    },

    // ── Q15: CAPM — Alpha and Beta ──
    {
        id: 15,
        topic: "CAPM — Alpha & Beta",
        question:
            "Consider the Capital Asset Pricing Model (CAPM) framework, splitting returns into Beta (market) and Alpha (skill). Evaluate:",
        options: [
            {
                id: "a",
                text: "CAPM states the expected return of an asset is equal to the risk-free rate plus a risk premium dictated by its Beta.",
                correct: true,
            },
            {
                id: "b",
                text: "Beta measures an asset's volatility and correlation relative to the benchmark market (e.g., S&P 500). A Beta of 1.5 implies the stock is 50% more volatile than the market.",
                correct: true,
            },
            {
                id: "c",
                text: "Alpha represents the excess return achieved by an active manager over the benchmark after adjusting for the risk (Beta) taken.",
                correct: true,
            },
            {
                id: "d",
                text: "Under strict interpretation of CAPM in perfectly efficient markets, expected Alpha for all stocks is greater than 10%.",
                correct: false,
            },
            {
                id: "e",
                text: "An investor heavily buying S&P 500 Index Funds (ETFs) is inherently 'Seeking Alpha' by picking the top 500 individual breakout stocks.",
                correct: false,
            },
        ],
        explanation:
            "Under a strict CAPM in perfectly efficient markets, expected true Alpha is theoretically zero, as all returns are compensated purely by systemic risk (Beta). Buying passive index funds is the ultimate approach to 'Buying Beta', entirely ignoring stock selection ('Seeking Alpha').",
    },

    // ── Q16: Beta-Neutral Strategies (From App Image) ──
    {
        id: 16,
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
                text: "In a market crash, a perfectly beta-neutral portfolio would experience the exact same severe losses as the overall broader market.",
                correct: false,
            },
            {
                id: "e",
                text: "Combining assets with slightly negative or zero correlation reduces portfolio volatility without necessarily reducing expected returns — a core benefit of diversification.",
                correct: true,
            },
        ],
        explanation:
            "By definition, a portfolio with a net beta of zero is uncorrelated to the market's movements. In a massive market crash, it should theoretically maintain its composure (experiencing zero market-driven losses), surviving solely on the alpha of its long/short pairings.",
    },

    // ── Q17: EMH (Efficient Market Hypothesis) ──
    {
        id: 17,
        topic: "Market Efficiency — EMH",
        question:
            "Eugene Fama's Efficient Market Hypothesis categorizes market efficiency into Weak, Semi-Strong, and Strong forms. Evaluate:",
        options: [
            {
                id: "a",
                text: "The Weak Form states that all past price and volume data is already reflected in the current price, rendering Technical Analysis useless for generating alpha.",
                correct: true,
            },
            {
                id: "b",
                text: "The Semi-Strong Form states that all publicly available information (earnings, news, balance sheets) is priced in, rendering Fundamental Analysis useless.",
                correct: true,
            },
            {
                id: "c",
                text: "The Strong Form states that ALL information, including non-public / insider dark data, is immediately reflected in the stock price.",
                correct: true,
            },
            {
                id: "d",
                text: "Because Congress prosecutes profitable insider trading heavily, the general market consensus is that the Strong Form of EMH is unquestionably true.",
                correct: false,
            },
            {
                id: "e",
                text: "If a hedge fund successfully uses natural language processing on Twitter sentiment to predict prices next week, they are providing evidence against the Semi-Strong form.",
                correct: true,
            },
        ],
        explanation:
            "To the contrary, the existence of highly profitable (albeit illegal) insider trading proves that non-public information IS NOT instantly priced in. Meaning, the Strong Form of EMH is widely considered to NOT hold in the real world.",
    },

    // ── Q18: Regression vs Classification Trees ──
    {
        id: 18,
        topic: "Decision Trees — Types",
        question:
            "Consider the difference between applying Decision Trees to Regression tasks versus Classification tasks. Evaluate the following:",
        options: [
            {
                id: "a",
                text: "A Classification Tree predicts a discrete category label (e.g., 'Buy', 'Sell', 'Hold') at the leaf nodes.",
                correct: true,
            },
            {
                id: "b",
                text: "A Regression Tree predicts a continuous numerical value (e.g., predicted stock price $152.40) by averaging the targets of the training data in that leaf node.",
                correct: true,
            },
            {
                id: "c",
                text: "During training, Classification Trees often use Information Gain or Gini Impurity to decide the best split variable and threshold.",
                correct: true,
            },
            {
                id: "d",
                text: "During training, Regression Trees typically use Mean Squared Error (variance reduction) to decide the optimal split.",
                correct: true,
            },
            {
                id: "e",
                text: "Only Regression Trees are prone to overfitting. A Classification Tree mathematically cannot overfit because its outputs are restricted to existing labels.",
                correct: false,
            },
        ],
        explanation:
            "Both Regression and Classification Trees are highly prone to overfitting if grown too deep (unpruned). A classification tree can overfit by creating a leaf node for every single individual noise-filled training instance, failing to generalize.",
    },

    // ── Q19: OOB Error in Bagging ──
    {
        id: 19,
        topic: "Ensemble Methods — OOB Error",
        question:
            "A data scientist is using Bootstrap Aggregating (Bagging) to create a Random Forest and wishes to estimate the test error. Consider Out-Of-Bag (OOB) error:",
        options: [
            {
                id: "a",
                text: "When creating a bootstrap sample of size N with replacement, roughly 1/3 (~36.8%) of the original training data is left out of that specific sample.",
                correct: true,
            },
            {
                id: "b",
                text: "These left-out data points are known as the 'Out-Of-Bag' (OOB) observations.",
                correct: true,
            },
            {
                id: "c",
                text: "OOB error provides a highly accurate, built-in estimate of out-of-sample test error without the need for a separate validation split or cross-validation.",
                correct: true,
            },
            {
                id: "d",
                text: "To calculate OOB error for a given observation, you predict its target using ONLY the subset of trees that did NOT see this observation during training.",
                correct: true,
            },
            {
                id: "e",
                text: "Because OOB uses data not seen during training, its error rate is practically guaranteed to be 0% in a robust Random Forest.",
                correct: false,
            },
        ],
        explanation:
            "OOB error estimates true Out-Of-Sample test generalization error. For any real-world noisy dataset, a test error of 0% is impossible and would indicate severe leakage. It's a useful accurate estimator, not a magical path to zero error.",
    },

    // ── Q20: Parametric vs Non-Parametric Details ──
    {
        id: 20,
        topic: "Statistical Learning — Parametric",
        question:
            "Distinguish between parametric and non-parametric machine learning models. Evaluate the following classification:",
        options: [
            {
                id: "a",
                text: "Parametric models make a strong assumption about the functional form f(x) (e.g., assuming it is linear).",
                correct: true,
            },
            {
                id: "b",
                text: "Non-parametric models do not make explicit assumptions about the functional form, allowing the flexibility to fit a wide array of potential shapes.",
                correct: true,
            },
            {
                id: "c",
                text: "Linear Regression, Ridge Regression, and Logistic Regression are examples of Parametric models.",
                correct: true,
            },
            {
                id: "d",
                text: "k-Nearest Neighbors (kNN) and unpruned Decision Trees are examples of Non-parametric models.",
                correct: true,
            },
            {
                id: "e",
                text: "Because non-parametric models are more flexible, they generally require vastly smaller datasets to train properly compared to parametric models.",
                correct: false,
            },
        ],
        explanation:
            "Non-parametric models generally require MUCH LARGER datasets to achieve accurate estimates, because they do not have the guiding guardrails (bias) of a pre-assumed mathematical shape to constrain them in sparse data regions.",
    },

    // ── Q21: When to Buy/Sell; Market Rigging ──
    {
        id: 21,
        topic: "Market Mechanics — Execution",
        question:
            "A trader is deciding when to buy vs sell, mindful of concepts from market microstructure ('is the stock market rigged'). Evaluate the following:",
        options: [
            {
                id: "a",
                text: "High-Frequency Trading (HFT) firms invest heavily in microwave towers and fiber-optic co-location to beat competitors to the exchange by mere microseconds.",
                correct: true,
            },
            {
                id: "b",
                text: "Front-running involves an entity seeing a large incoming order and racing to execute their own trade ahead of it to profit from the resulting price impact.",
                correct: true,
            },
            {
                id: "c",
                text: "Dark Pools are private exchanges where institutional investors can trade large blocks of stock without immediately revealing their hand to the public order book (mitigating market impact).",
                correct: true,
            },
            {
                id: "d",
                text: "In standard valuation theory, a security should be sold short when its Intrinsic Value is deeply below its current Market Price, assuming a catalyst exists.",
                correct: true,
            },
            {
                id: "e",
                text: "A 'Rigged' market refers to the legally mandated rule that HFT firms must report all trades an hour before execution to protect retail investors.",
                correct: false,
            },
        ],
        explanation:
            "There is no such rule. The 'Rigged' market argument (from Michael Lewis' Flash Boys) refers to the exact opposite—the systemic advantage HFTs have using complex order types, co-location, and payment for order flow to essentially front-run slower retail and institutional flow.",
    },

    // ── Q22: F-Statistics ──
    {
        id: 22,
        topic: "Statistics — Multi-Regression Evaluation",
        question:
            "A quant builds a multiple linear regression using 5 specific financial factors. To validate the model, they calculate the F-statistic. Evaluate:",
        options: [
            {
                id: "a",
                text: "While a t-statistic evaluates the significance of a single individual coefficient, the F-statistic evaluates the overall significance of the entire model.",
                correct: true,
            },
            {
                id: "b",
                text: "The Null Hypothesis for the F-test in regression is that ALL the slope coefficients are simultaneously equal to zero.",
                correct: true,
            },
            {
                id: "c",
                text: "If the calculated F-statistic is extremely small (p-value close to 1.0), you should comfortably reject the null hypothesis and trade on the model.",
                correct: false,
            },
            {
                id: "d",
                text: "An F-test compares the variance explained by the model to the unexplained variance (the residuals).",
                correct: true,
            },
            {
                id: "e",
                text: "If a model suffers from multicollinearity, individual t-tests might unexpectedly show insignificance while the overall F-test remains highly significant.",
                correct: true,
            },
        ],
        explanation:
            "A small F-statistic with a high p-value means the model does not explain a significant amount of variance; you FAIL to reject the null hypothesis. The model is essentially worthless, and you should not trade on it.",
    },

    // ── Q23: Bias vs Variance Check ──
    {
        id: 23,
        topic: "Model Errors — Bias/Variance",
        question:
            "Evaluate scenarios mapping to Bias and Variance in financial modeling:",
        options: [
            {
                id: "a",
                text: "A linear regression attempting to fit a wildly oscillating sine wave relationship will output a straight line. This represents high bias.",
                correct: true,
            },
            {
                id: "b",
                text: "A deep decision tree learning the exact noise in today's arbitrary market ticks and producing jagged, specialized rules represents high variance.",
                correct: true,
            },
            {
                id: "c",
                text: "Total test error is mathematically decomposed into Bias², Variance, and Irreducible Noise.",
                correct: true,
            },
            {
                id: "d",
                text: "In finance, limiting model complexity (accepting a slightly higher bias to massively reduce variance) is a standard defense against poor signal-to-noise ratios.",
                correct: true,
            },
            {
                id: "e",
                text: "As k increases in a kNN algorithm (e.g., k=1 to k=100), the model's variance increases while its bias drops to zero.",
                correct: false,
            },
        ],
        explanation:
            "As k increases in kNN, the model becomes 'smoother'—averaging out more neighbors. This DECREASES variance but INCREASES bias (underfitting). At max k (k=N), it simply predicts the mean of the entire dataset.",
    },

    // ── Q24: MPT & Lookahead Bias ──
    {
        id: 24,
        topic: "Practical Deployment — Pitfalls",
        question:
            "A student creates a strategy yielding 800% annual returns in backtesting but loses money in live deployment. Evaluate the likely culprits:",
        options: [
            {
                id: "a",
                text: "Lookahead bias: They utilized the 'High' or 'Close' price of today to calculate technical indicators generating a trade at the 'Open' of today.",
                correct: true,
            },
            {
                id: "b",
                text: "Survivorship bias: They downloaded the current S&P 500 constituents and ran a backtest over 20 years, ignoring bankrupt companies like Enron or Lehman Brothers.",
                correct: true,
            },
            {
                id: "c",
                text: "Overfitting: Their algorithm had dozens of parameters tuned to perfectly isolate every historical dip, failing completely on new, out-of-sample data.",
                correct: true,
            },
            {
                id: "d",
                text: "Lack of trading costs: The backtest assumed free, instant execution with no bid-ask spread and zero market impact on maximum positions.",
                correct: true,
            },
            {
                id: "e",
                text: "Modern Portfolio Theory guarantees this performance is impossible, since the Efficient Frontier dictates absolute caps on algorithmic returns.",
                correct: false,
            },
        ],
        explanation:
            "MPT does not enforce deterministic bounds on what a single algorithm might achieve conceptually, but standard real-world barriers like survivorship bias, trading friction, and severe lookahead/overfitting are the universal reasons for massive backtest-to-live degradation.",
    },

    // ── Q25: Book Structure & Sum/Product Probability (Combo) ──
    {
        id: 25,
        topic: "Foundations Recap",
        question:
            "Bringing together the structure of statistical learning and core probability. Consider an algorithm tracking distinct features A and B:",
        options: [
            {
                id: "a",
                text: "A non-parametric algorithm builds essentially no internal weights or functional formulas; the structure of the model is exactly the training data.",
                correct: true,
            },
            {
                id: "b",
                text: "If P(Signal A occurs) = 0.5, and P(Signal B occurs) = 0.5, and they are mutually exclusive, then P(A OR B) = 1.0 using the Sum Rule.",
                correct: true,
            },
            {
                id: "c",
                text: "If A and B are independent, P(A AND B) = 0.25 using the Product Rule.",
                correct: true,
            },
            {
                id: "d",
                text: "Applying ML to finance effectively means utilizing these foundational rules over robust, non-leaky datasets to find persistent, out-of-sample edges.",
                correct: true,
            },
            {
                id: "e",
                text: "Boosting and Bagging are Parametric models because they calculate exact continuous coefficients like linear regression.",
                correct: false,
            },
        ],
        explanation:
            "Boosting and Bagging normally rely on Decision Trees at their core, which are Non-parametric models (creating a series of split thresholds rather than an explicit functional parameter form).",
    },
];

export default examData5;
