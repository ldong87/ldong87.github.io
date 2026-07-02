---
title: "Elasticity Imaging with Deep Learning"
excerpt: "Deep learning methods for mapping tissue mechanics from displacement fields and synthetic finite-element training data."
collection: portfolio
sort_date: 2023-12-30
header:
  teaser: portfolio/elasticity-imaging-deep-learning.png
---

Deep learning was used as a surrogate route for elasticity imaging: instead of explicitly solving inverse elasticity problems from measured displacement fields, neural networks learned to infer clinically relevant mechanical information from physics-based simulation data.

The 2019 study used displacement fields from finite-element models as CNN inputs and trained classifiers to identify tumor elastic heterogeneity and nonlinear elastic response. The 2024 study extended this direction with a conditional generative adversarial network for quasi-static elastography, improving noisy shear-modulus reconstructions from synthetic displacement fields and showing how simulated data can support learning when clinical or experimental labels are limited.

Related publications:

- Patel, D., Tibrewala, R., Vega, A., Dong, L., Hugenberg, N., & Oberai, A. A. (2019). [Circumventing the solution of inverse problems in mechanics through deep learning: Application to elasticity imaging](https://doi.org/10.1016/j.cma.2019.04.045). *Computer Methods in Applied Mechanics and Engineering, 353*, 448-466.
- Mei, Y., Deng, J., Zhao, D., Xiao, C., Wang, T., Dong, L., & Zhu, X. (2024). [Toward improved accuracy in quasi-static elastography using deep learning](https://doi.org/10.32604/cmes.2023.043810). *Computer Modeling in Engineering & Sciences, 139*(1), 911-935.
