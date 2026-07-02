---
title: "Zillow Prize Zestimate Improvement"
excerpt: "Silver medal, top 1% of 3,779 teams, with a temporal-aware stacked learning pipeline."
collection: portfolio
sort_date: 2017-10-31
header:
  teaser: portfolio/zillow-prize.jpg
---

Kaggle Zillow Prize project to improve Zillow's Zestimate home value estimation algorithm. Our team won a silver medal, ranked top 1% of 3,779 teams, and qualified for the next round million-dollar award.

I built a meta-learning pipeline that combined gradient boosting, SVM, kNN, stochastic elastic net, fast online linear learning, genetic programming, and neural networks. The second level used gradient boosting over training features plus first-level meta-features. The Python pipeline was 1,000+ lines and used libraries including XGBoost, LightGBM, CatBoost, scikit-learn, and Vowpal Wabbit.

[Project repo](https://github.com/ldong87/kaggle_zillow_round1) | [Kaggle competition](https://www.kaggle.com/c/zillow-prize-1)
