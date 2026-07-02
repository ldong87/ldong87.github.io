---
title: "Inclusive Images Challenge"
excerpt: "Top 88 of 468 teams in a large-scale image labeling competition with distribution shift."
collection: portfolio
sort_date: 2018-11-30
header:
  teaser: portfolio/inclusive-images-challenge.jpg
---

Kaggle project for object labeling in images. I ranked top 88 out of 468 teams. The dataset included more than 500GB of images, 8.4 million human labels, 15.3 million machine labels, 14.6 million bounding boxes, and over 7,000 classes.

The main challenge was severe label imbalance and different label distributions between training and test data. I trained an SE-ResNeXt101 model on Google Cloud Platform using 96 CPUs and 8 V100 GPUs.

[Project repo](https://github.com/ldong87/kaggle_inclusive_image_competition) | [Kaggle competition](https://www.kaggle.com/c/inclusive-images-challenge)
