---
title: "Biomechanical Imaging with PDE-Constrained Optimization"
excerpt: "Adjoint-based inverse elasticity and adaptive meshing for biological tissue property recovery."
collection: portfolio
sort_date: 2017-08-29
header:
  teaser: portfolio/inclusion-mesh-seq.gif
---

At SCOREC, I implemented adjoint-based PDE-constrained optimization algorithms for large-scale simulation with FEniCS in Python. I also developed Split Bregman methods for L1-regularized nonlinear PDE-constrained optimization and applied them to recover material parameters in biological tissues from measured displacement fields.

Applications included OCT and ultrasound-based elasticity imaging, adaptive meshes, spatial domain decomposition, and continuation strategies for linear and nonlinear tissue models.

![Adaptive mesh sequence](/images/portfolio/inclusion-mesh-seq.gif)
*Mesh adaptivity of a stiff inclusion in a homogeneous tissue-mimicking phantom.*

![Breast tumor histology ROI](/images/portfolio/breast-histology-roi.png)
*H&E histology of a malignant breast tumor tissue. The black circle is the region of interest.*

![Breast tumor mesh and modulus distribution](/images/portfolio/breast-tumor-mesh-volume.gif)
*Mesh adaptivity and shear modulus distribution of malignant breast tumor tissue ex vivo. Both elliptical tumor tissues have soft necrosis centers.*

![Fingertip OCT image](/images/portfolio/fingertip-oct.png)
*OCT en-face image of fingertip tissue. The B-scan and recovered shear modulus distribution show the triple-layer tissue structure and sweat glands.*

![Fingertip elastography](/images/portfolio/fingertip-elastography.gif)
*3D shear modulus distribution of fingertip tissue in vivo. The three stiff ridges are more-compressed tissue under bulged fingerprints.*

![Mouse tumor B-mode image](/images/portfolio/mouse-tumor-bmode.png)
*Tumor evolution on days 11, 15, 18, 21, 25, and 28. The ultrasound B-mode regions of interest are shaded in green.*

![Mouse tumor shear modulus recovery](/images/portfolio/mouse-tumor-shear-modulus.png)
*Recovered shear modulus distributions for the same tumor-evolution sequence.*

Related publications:

- Dong, L., Wijesinghe, P., Dantuono, J. T., Sampson, D. D., Munro, P. R. T., Kennedy, B. F., & Oberai, A. A. (2016). [Quantitative compression optical coherence elastography as an inverse elasticity problem](https://doi.org/10.1109/JSTQE.2015.2512597). *IEEE Journal of Selected Topics in Quantum Electronics, 22*(3), 277-287.
- Dong, L., Wijesinghe, P., Sampson, D. D., Kennedy, B. F., Munro, P. R. T., & Oberai, A. A. (2019). [Volumetric quantitative optical coherence elastography with an iterative inversion method](https://doi.org/10.1364/BOE.10.000384). *Biomedical Optics Express, 10*(2), 384-398.
