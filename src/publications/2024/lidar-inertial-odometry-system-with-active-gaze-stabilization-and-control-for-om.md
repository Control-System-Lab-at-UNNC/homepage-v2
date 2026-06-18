---
_hidden: false
title: LiDAR-Inertial Odometry System with Active Gaze Stabilization and Control for Omni-Directional Wheeled Robot
authors:
  - Yang, Mengshen
  - Jia, Fuhua
  - Rushworth, Adam
  - Sun, Xu
  - Fang, Zaojun
  - Yang, Guilin
authors_orcid:
  - 0000-0002-8355-2227
  - null
  - 0000-0003-3803-7549
  - 0000-0002-2340-7095
  - 0000-0003-4025-039X
  - 0000-0001-6144-3401
year: 2024
doi: https://doi.org/10.1109/iciea61579.2024.10665033
openalex_id: W4402593697
venue: 
abstract_screenshot: 
keywords:
  - Odometry
  - Lidar
  - Computer science
  - Robot
  - Gaze
  - Computer vision
  - Artificial intelligence
  - Mobile robot
  - Inertial frame of reference
  - Robot control
  - Remote sensing
  - Geography
  - Physics
---

This paper presents an active gaze stabilization and control method for an omni-directional robot. To isolate motion from the omni-directional robot base, a gimbal motor is utilized to link the base and the LiDAR, thus the LiDAR can be stabilized and rotated independently. Hence the accuracy and robustness of LiDAR odometry are improved. To actively choose an optimal gaze angle during traversing, first the feature points are extracted; second the feature statistics are computed using Ripley K function; then a robot-centric grid map containing those information is built;finally the angle optimization is conducted utilizing grid-map and Fisher information. Several simulations are performed to verify the usefulness of the proposed grid-map, and the improvement of odometry accuracy by this approach. We demonstrate that this approach can alleviate odometry drift caused by robot base rotation and perception of texture-less areas.
