---
layout: case-study
title: studQ
subtitle: A QR-powered attendance system for efficient and secure exam participation
task: Design and develop a mobile application that allows professors to manage exam attendance with QR code scanning, eliminating the need for manual ID checks while increasing speed and accuracy of student verification.
tech: Flutter | PocketBase
images:
  - src: /assets/images/studq.png
    caption: |
      In academic institutions, verifying the identity of students during exam entry has traditionally relied on manual checking of **ID cards** and **attendance lists**. This process is slow, error-prone, and stressful for professors, especially when managing large groups under time constraints.

      The studQ app addresses this problem by offering a **QR-code-based identification system**, allowing professors to verify students' presence with a quick scan instead of cross-checking physical documents.

  - caption: |
      ### How it works

      Each student, upon being added to the system, is issued a **unique, persistent QR code**. This code is sent to their email and remains the same throughout their education.

      Before the start of any exam (called an **event** in the app), professors can:

      - Create a new event, set its start time, and assign applied students  
      - Manually add or **import student data** via CSV  
      - View a detailed participant list showing full name, student ID, email, and a checkmark for attendance

  - caption: |
      ### Scanning phase

      **Scanning becomes available 30 minutes before** the event and remains active **until 30 minutes after** it begins. This window ensures structure while enforcing participation policies.

      During scanning:
      - The professor opens the event and taps the scan icon
      - The app activates the camera and awaits QR input
      - Upon successful scan:
        - If the student is **applied to the event**, they're marked as **present**
        - If the student is not applied, a **warning** is shown and access is denied

      This ensures only verified, pre-registered participants enter the exam room, saving time and improving security.

  - caption: |
      ### Key features

      - Clear **event lifecycle management** (upcoming, in progress, completed)
      - **Email dispatch** with personal QR upon student registration
      - Bulk **CSV import**
      - **Fast QR scanning** with instant feedback
      - Real-time **attendance tracking**

  - caption: |
      ### Vision for the future

      The goal is for studQ to be **fully integrated** into school systems. When students enroll and receive IDs, they are automatically registered in the app.

      Potential use cases:
      - Attendance for **lab work** or **special lectures**
      - Controlled access to **facilities**
      - Secure **participation tracking** across academic activities

      With a lightweight backend (PocketBase) and scalable Flutter frontend, studQ is ready for institutional use.
---
