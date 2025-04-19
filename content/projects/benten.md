---
title: Benten
description: Multithreaded CLI Image Editor, mutates images into predefined variations
link: benten
startDate: 01-01-2024
tech: 
- Rust
---
\[No Longer Under Development\] Benten is a multithreaded CLI image editor
written in C++ and utilizes the ImageMagick library. Benten does not give the
user the usual granular control of a traditional editor, rather it transforms
images into predefined permutations. Each permutation is a testbed for
different algorithms, and computer vision tools.

Current permutations supported / under development (goal is to have 10):

- PixelArtTransform
- TriangleVectorTransform
- CircleAreaTransform
- AbstractBlobTransform
- ColorReducer
- Silhoutter
