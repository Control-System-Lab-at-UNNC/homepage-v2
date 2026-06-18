---
_hidden: false
title: "RINS-Cali: A Calibration Method for RINS Mounting Errors Based on Screw Theory and Recursive Total Least Square Algorithm"
authors:
  - Yang, Mengshen
  - Jia, Fuhua
  - Hou, Xing
  - Chen, Silu
  - Rushworth, Adam
  - Yang, Guilin
authors_orcid:
  - 0000-0002-8355-2227
  - null
  - 0009-0002-5500-8803
  - 0000-0003-2548-7196
  - 0000-0003-3803-7549
  - 0000-0001-6144-3401
year: 2025
doi: https://doi.org/10.1109/aim64088.2025.11175713
openalex_id: W4414605585
venue: 
abstract_screenshot: 
keywords:
  - Inertial measurement unit
  - Calibration
  - Kinematics
  - Inertial navigation system
  - Rotation (mathematics)
  - Control theory (sociology)
  - Inertial frame of reference
  - Accelerometer
  - Mean squared error
---

Inertial Measurement Units (IMUs) are widely used in motion estimation and navigation systems, but their accuracy is often degraded by sensor biases and mounting misalignments. Rotation-aided Inertial Navigation Systems (RINS) mitigate IMU biases by introducing controlled sensor rotation; however, uncalibrated mounting errors introduce additional inaccuracies. This paper presents a novel RINS mounting error calibration framework, addressing two angular misalignments and two positional offsets between the IMU and the rotation center. The proposed method first develops a kinematic model based on screw theory to describe the relationship between IMU and motor twists, capturing the effects of misalignment on inertial measurements. A recursive total least squares (RTLS) algorithm is then employed to iteratively estimate and compensate for mounting errors. The approach is validated through both simulation and real-world experiments, demonstrating significant improvements in IMU measurement accuracy and overall system robustness. Experimental results confirm the efficiency of the proposed calibration framework, making it a practical solution for RINS applications in navigation. The code is open-source in https://github.com/ControlSystemLab/RINS-Cali.
