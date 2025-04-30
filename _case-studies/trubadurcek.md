---
layout: case-study
title: Trubadurček
subtitle: A system for automatic generation and evaluation of elementary school level rhythmic ear-training exercises
task: Create a system that enables the automatic generation and evaluation of rhythmic dictation exercises with different types of exercises. Evaluate the system and identify the key advantages and disadvantages of individual types of exercises for the lower music school level in the Slovenian music education system.
link: https://repozitorij.uni-lj.si/Dokument.php?id=161140
images:
  - src: /assets/images/trubadurcek-home.png
    caption: |
      After logging into the app, users are greeted with a simple and intuitive interface where they can immediately choose a **rhythmic training game** and set their **preferred difficulty**.  
      The app was designed to **minimize friction** and allow young learners to quickly jump into practice, ensuring a **smooth first impression** crucial for educational tools.

      - **Quick registration/login** flow
      - **Game selection** made effortless
      - **22 difficulty levels** carefully aligned with the Slovenian elementary music school curriculum
  - src: /assets/images/trubadurcek-games.png
    caption: |
      Trubadurček offers three distinct types of exercises, each targeting a different aspect of rhythmic skills:

      - **Rhythmic Dictation**: Listen to a rhythm and **write it down** using a simplified music notation interface.
      - **Rhythmic Quiz**: Listen and **choose the correct rhythm** from multiple options, designed for faster recognition and memory.
      - **Play the Rhythm**: Read a rhythm from sheet music and **tap it out** accurately with the help of a metronome.

      Each game includes **gamified elements** like points, timers, and limited attempts to encourage engagement and replayability.

  - src: /assets/images/trubadurcek-schema.png
    caption: |
      The Trubadurček platform is built with a **modern client-server architecture**:

      - **Frontend**: Built in **React Native** for cross-platform mobile and web compatibility.
      - **Backend**: Powered by a **Laravel**-based REST API that handles exercise generation, result storage, and user management.
      - **Music rendering**: Done using **VexFlow**, an open-source library for musical notation.
      - **Database**: **MySQL** database for user profiles, results, and rhythm patterns.

      This modular structure allows **independent updates** to the client or server, **scalability**, and **easy maintenance**.

  - src: /assets/images/trubadurcek-flowchart.png
    caption: |
      The flow of the application is designed to be **child-friendly** and **encourage regular practice**:

      1. **Log In / Register**  
      2. **Select Game Type**  
      3. **Choose Difficulty Level** (out of 22 levels)
      4. **Play the Game** (Immediate feedback after each exercise)
      5. **View Results** and receive encouragement
      6. **Optional Replay**: Players are motivated to improve their score and reduce errors.

      Each step was **carefully tested with children** during real-world experiments to ensure an optimal and enjoyable learning experience.
---
