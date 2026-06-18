---
_hidden: false
title: Sequential Finite-Element-based Model Predictive Torque and Flux Control Method for IPMSM
authors:
  - Nasr, Ahmed
  - Gu, Chunyang
  - Ijaz, Salman
  - Buticchi, Giampaolo
  - Bozhko, Serhiy
  - Gerada, Chris
authors_orcid:
  - null
  - 0000-0003-1283-1701
  - 0000-0003-1483-4754
  - 0000-0003-0470-3259
  - 0000-0002-0508-7198
  - 0000-0003-4707-4480
year: 2022
doi: https://doi.org/10.1109/ceepe55110.2022.9783432
openalex_id: W4281757049
venue: 2022 5th International Conference on Energy, Electrical and Power Engineering (CEEPE)
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Control theory (sociology)
  - Torque ripple
  - Torque
  - Direct torque control
  - Model predictive control
  - Computer science
  - Stall torque
  - Weighting
  - Damping torque
  - Voltage
  - Engineering
  - Physics
  - Induction motor
  - Control (management)
---

This paper proposes an advanced sequential finite-element-based model predictive torque and flux control (SQ-FE-MPTFC) method to mitigate the torque ripple of the interior permanent magnet synchronous motor (IPMSM) while simplifying the control implementation by preselecting a reduced control set and eliminating the need for a weighting factor. This strategy optimally selects a combination of active-and zero-voltage vectors at every control cycle and obtains the switching instant based on an adjustable torque-error tolerance and the torque deviation produced by the AVV. First, considering the torque-error tolerance, it preselects two candidate AVVs among those admitted by the two-level voltage source inverter. Then, the switching instant of each candidate is decided using its predicted torque deviation to satisfy the minimum torque ripple. Among these candidates, the optimal one with its corresponding duty time is selected based on a weighting factor-less cost function that considers the flux-amplitude error. Finally, the FE-based IPMSM model is used to verify the effectiveness of the proposed method by simulations in Matlab/Simulink environment.
