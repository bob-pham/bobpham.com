---
title: Intel
---

# Intel

![intel](/logos/intel_logo.png)

#### Firmware Engineer Intern
#### Sep 2022 - Sep 2023

During my internship at Intel, I worked on the firmware for a dedicated
hardware security block integrated into SoCs used in cloud networking devices.
This IP was designed to offload cryptographic operations from the CPU—ensuring
secure communication and authentication for sensitive workloads in a
high-performance environment.

My primary responsibility was implementing the SPDM (Security Protocol and Data
Model), a standard used for secure device attestation. Specifically, I was
involved in engineering and integrating the mechanism for X.509 certificate
generation directly into the firmware, which was an immensely complex and
low-level task. The X.509 format itself is intricate, with strict constraints,
and doing this in a bare-metal environment—without the luxury of a stack or
higher-level abstractions—made it particularly challenging. 

Writing this in assembly and C meant working directly with memory and managing
every detail, from bit-level encoding to error handling. With no OS or external
libraries available, I had to engineer everything from the ground up, including
building the tools to automate certificate generation, validation, and
inspection.

In addition to that, I was involved in the integration of next-gen
cryptographic algorithms into the SPDM protocol. This required a deep
understanding of both the security protocols and the hardware, ensuring the new
algorithms worked seamlessly within the firmware's tight constraints.

Some of my key contributions included:
- Designed and implemented X.509 certificate generation for SPDM attestation, using assembly and C in a bare-metal environment—without higher-level abstractions or a stack.
- Created Python tools to generate, validate, and inspect certificates, automating testing and improving team collaboration.
- Integrated next-gen cryptographic algorithms into the firmware to support cutting-edge security protocols.
- Developed a control-flow visualization tool in Python and Graphviz, allowing for real-time insight into firmware execution during simulation.
- Refined test infrastructure by implementing multithreaded execution, reducing test runtime by 80%.

The task of implementing X.509 certificate generation in such a constrained
environment was not only technically demanding but also required a great deal
of clever engineering and persistence. It was a hard challenge, but one that
taught me the value of precision, low-level problem solving, and the importance
of building robust, testable systems—even when working with hardware at the
most fundamental levels.

Through this experience, I gained hands-on expertise in secure protocols,
low-level firmware development, and cryptographic implementation. It also
reinforced my passion for working close to the metal and building systems that
are not only secure but efficient, reliable, and maintainable.
