---
title: "Variational PDE Methods for Image Processing"
excerpt: "Denoising, inpainting, compressive sensing, and segmentation with variational PDE methods."
collection: portfolio
sort_date: 2016-05-31
header:
  teaser: portfolio/geodesic-active-contour.gif
---

Course project for Variational PDE Methods for Image Processing. I implemented and compared several numerical approaches for inverse imaging problems:

- Tikhonov-regularized denoising with gradient descent, finite differences, and finite elements. [Download report](/files/portfolio/report-tikhonov.pdf)
- Rudin-Osher-Fatemi denoising with gradient flow, lagged diffusivity fixed point iteration, and Chambolle projection. [Download report](/files/portfolio/report-rof.pdf)
- Split Bregman for L1-regularized denoising, inpainting, and compressive sensing. [Download report](/files/portfolio/report-split-bregman.pdf)
- Geodesic active contours and Chan-Vese segmentation models. [GAC report](/files/portfolio/report-geodesic-active-contour.pdf) | [Segmentation report](/files/portfolio/report-image-segmentation.pdf)

![Noisy image](/images/portfolio/image-noise.jpg)
![Denoised image](/images/portfolio/image-denoise.jpg)
*Noisy image and denoised image.*

![Contaminated image](/images/portfolio/image-contaminate.jpg)
![Inpainted image](/images/portfolio/image-inpaint.jpg)
*Polluted image and inpainted image.*

![Geodesic active contour segmentation](/images/portfolio/geodesic-active-contour.gif)
*Image segmentation with the geodesic active contour model.*
