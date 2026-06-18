---
_hidden: false
title: "6-DOF Parallel Robot under Partial Observation: Modelling, Control and Trajectory Planning"
authors:
  - Xiao, Junlin
  - Tian, Xinyu
  - Jia, Fuhua
  - Yang, Mengshen
  - Rushworth, Adam
  - Kwong, Chiew Foong
  - Ijaz, Salman
  - Chen, Silu
  - Chin-Yin, Chen
  - Yang, Guilin
authors_orcid:
  - null
  - 0009-0007-7637-7962
  - null
  - 0000-0002-8355-2227
  - 0000-0003-3803-7549
  - null
  - 0000-0003-1483-4754
  - 0000-0003-2548-7196
  - null
  - 0000-0001-6144-3401
year: 2025
doi: https://doi.org/10.1109/iciea65512.2025.11149155
openalex_id: W4414140576
venue: 
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Control theory (sociology)
  - Robustness (evolution)
  - Kinematics
  - Robot
  - Inertial measurement unit
  - Motion planning
  - Trajectory
  - Kalman filter
  - Acceleration
---

Due to the coupling characteristics of kinematics and dynamics, six-degree-of-freedom parallel robots face challenges in achieving real-time and high-precision velocity and acceleration control. The existing methods limit their applications in scenarios such as admittance control, dynamic operational environments, and multi-robot collaboration due to the excessive computational burden brought by complex models. In this paper, a novel state estimation and control method based on partial observational data is proposed. Firstly, the on-platform state estimation is accomplished precisely in real time by employing the extended Kalman Filter to integrate data from both the inertial measurement unit and the camera. Then, a direct method maps the state of the upper platform to the actuator using estimated data, eliminating the need for traditional leg length data, reducing the system cost, and shortening the response time. The feed-forward velocity control strategy is proposed to enhance the dynamic performance and robustness of the system, enabling it to quickly adapt to external changes and maintain six degrees-of-freedom of compensation for base disturbance. Finally, quintic spline trajectory planning is adopted to plan the robot motion trajectory, which significantly improves motion efficiency and reduces energy consumption. Experiments on the Stewart platform have proved the feasibility and effectiveness of the proposed method. The source code is available as open source at https://github.com/ControlSystemLab/Stewart-Control.
