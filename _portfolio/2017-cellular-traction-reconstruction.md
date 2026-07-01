---
title: "Cellular Traction Reconstruction"
excerpt: "Adjoint-based nonlinear inverse mechanics for recovering HUVEC surface tractions."
collection: portfolio
sort_date: 2017-08-28
header:
  teaser: portfolio/cellular-traction.gif
---

I developed and implemented FORTRAN algorithms for evaluating cellular tractions from experimentally measured displacement fields. The inverse problem was posed as PDE-constrained minimization and solved with adjoint equations, considering both geometric and material nonlinearity.

The HUVEC experimental data came from Christopher Chen's group.

![Measured HUVEC displacement](/images/portfolio/huvec-displacement.jpg)
*Measured displacement around HUVEC.*

![Recovered HUVEC traction](/images/portfolio/cellular-traction.gif)
*Recovered traction on the surface of HUVEC.*

Related publications:

- Dong, L., & Oberai, A. A. (2017). [Recovery of cellular traction in three-dimensional nonlinear hyperelastic matrices](https://doi.org/10.1016/j.cma.2016.05.020). *Computer Methods in Applied Mechanics and Engineering, 314*, 296-313.
- Song, D., Dong, L., Gupta, M., Li, L., Klaas, O., Loghin, A., Beall, M., Chen, C. S., & Oberai, A. A. (2020). [Recovery of tractions exerted by single cells in three-dimensional nonlinear matrices](https://doi.org/10.1115/1.4046974). *Journal of Biomechanical Engineering, 142*(8).
- Yoon, C., Choi, C., Stapleton, S., Mirabella, T., Howes, C., Dong, L., King, J., Yang, J., Oberai, A. A., Eyckmans, J., & Chen, C. S. (2019). [Myosin IIA-mediated forces regulate multicellular integrity during vascular sprouting](https://doi.org/10.1091/mbc.E19-02-0076). *Molecular Biology of the Cell, 30*(16), 1974-1984.
