---
_hidden: false
title: Safety-Driven AMR End-to-End Navigation Framework Based on Sparse Sensor Human Behavior Prediction
authors:
  - Jia, Fuhua
  - Yang, Kai
  - Xiao, Junlin
  - Tuo, Hu
  - Yang, Xiaoying
  - Rushworth, Adam
  - Yu, Heng
  - Cui, Tianxiang
authors_orcid:
  - null
  - 0000-0002-6540-7480
  - null
  - 0000-0003-4485-6196
  - 0000-0002-4062-6724
  - 0000-0003-3803-7549
  - 0000-0002-0305-2135
  - 0000-0002-0102-2581
year: 2025
doi: https://doi.org/10.1109/cies64955.2025.11007636
openalex_id: W4410639798
venue: 
abstract_screenshot: 
keywords:
  - End-to-end principle
  - Computer science
  - Dead end
  - Real-time computing
  - Artificial intelligence
  - Mathematics
---

Autonomous Mobile Robots (AMRs) have garnered significant attention and widespread application due to their operational efficiency. However, in human-centered environments, such as warehouses, manufacturing facilities, and public spaces, AMRs face the dual challenge of navigating autonomously while perceiving and adapting to human movements to ensure safety. This work proposes a novel safety-driven end-to-end navigation framework for AMRs that processes navigation commands and sparse data collected by onboard 2D LiDAR and IMU sensors to directly control the robot's velocity. The framework comprises two key modules: a human estimation module and a trajectory generation module. The human estimation module employs an LSTM-based architecture to estimate human positions and movement trends from sparse sensor data, generating a dynamic obstacle map. Based on these predictions, a genetic algorithm -based trajectory generation module creates safe-driven dynamic trajectories subject to dynamic constraints. This approach enables accurate forecasting of pedestrian movements, allowing the AMR to effectively avoid dynamic human obstacles, thereby enhancing its safety and practicality in real-world environments. Our contributions are threefold: dynamic human detection and prediction from sparse onboard sensor data, safety-driven dynamic trajectory planning, and extensive real-world experiments demonstrating feasibility and robustness of the proposed framework.
