---
_hidden: false
title: A Smart Cache Content Update Policy Based on Deep Reinforcement Learning
authors:
  - Li, Lincan
  - Kwong, Chiew Foong
  - Liu, Qianyu
  - Wang, Jing
authors_orcid:
  - 0000-0002-3774-8878
  - 0000-0001-7857-511X
  - 0000-0002-2660-7287
  - 0000-0002-4627-6307
year: 2020
doi: https://doi.org/10.1155/2020/8836592
openalex_id: W3101326866
venue: Wireless Communications and Mobile Computing
abstract_screenshot: 
keywords:
  - Computer science
  - Cache
  - Markov decision process
  - Reinforcement learning
  - Latency (audio)
  - Cache algorithms
  - Smart Cache
  - Parallel computing
  - CPU cache
  - Artificial intelligence
  - Markov process
---

This paper proposes a DRL-based cache content update policy in the cache-enabled network to improve the cache hit ratio and reduce the average latency. In contrast to the existing policies, a more practical cache scenario is considered in this work, in which the content requests vary by both time and location. Considering the constraint of the limited cache capacity, the dynamic content update problem is modeled as a Markov decision process (MDP). Besides that, the deep Q-learning network (DQN) algorithm is utilised to solve the MDP problem. Specifically, the neural network is optimised to approximate the <a:math xmlns:a="http://www.w3.org/1998/Math/MathML" id="M1"> <a:mi>Q</a:mi> </a:math> value where the training data are chosen from the experience replay memory. The DQN agent derives the optimal policy for the cache decision. Compared with the existing policies, the simulation results show that our proposed policy is 56%–64% improved in terms of the cache hit ratio and 56%–59% decreased in terms of the average latency.
