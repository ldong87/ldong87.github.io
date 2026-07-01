---
title: "Jigsaw Toxic Comment Classification"
excerpt: "Silver medal, top 5% of 4,551 teams, using neural and classical NLP ensembles."
collection: portfolio
sort_date: 2018-03-31
header:
  teaser: portfolio/project-placeholder.svg
---

Kaggle project for identifying and classifying toxic online comments. I won a silver medal and ranked top 5% out of 4,551 teams.

This was a multi-label classification problem evaluated by ROC AUC. The first-level learners included GRU/LSTM, textCNN, multi-column DNN, Deep Pyramid CNN, GRU/LSTM+CNN, Capsule Net, gradient boosting, logistic regression, and naive Bayes with SVM. The second-level learner was a gradient boosting model over first-level outputs. Different word embeddings were used, and Monte Carlo simulation helped search stacking weights.

[Project repo](https://github.com/ldong87/kaggle_jigsaw)
