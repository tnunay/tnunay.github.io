---
title: "DEEP-UNDER ROV"
weight: 10
research_project: true
project_code: "Underwater Robotics"
project_status: "Ongoing"
period: "2025–2026"
summary: "A low-cost ROV and multi-modal mapping framework for safer, high-resolution documentation of underwater archaeological sites in Indonesia."
description: "DEEP-UNDER ROV develops low-cost robotic, sensing, control, and 3D reconstruction methods for underwater archaeology."
funding: "Institut Teknologi Bandung internal research funding — Riset ITB 2025 and Riset Dosen Muda ITB 2026"
lecturers:
  - name: "Hilton Tnunay"
    role: "Project lead"
    institution: "School of Electrical Engineering and Informatics, Institut Teknologi Bandung"
    scholar: "https://scholar.google.com/citations?user=zcckBDUAAAAJ&hl=en"
  - name: "Anggera Bayuwindra"
    institution: "School of Electrical Engineering and Informatics, Institut Teknologi Bandung"
    scholar: "https://scholar.google.com/citations?hl=en&user=9y_vKqsAAAAJ"
  - name: "Indra Sihar"
    institution: "School of Electrical Engineering and Informatics, Institut Teknologi Bandung"
    scholar: "https://scholar.google.com/citations?hl=en&user=X3-jFMsAAAAJ"
  - name: "Gabriella Alodia"
    institution: "Faculty of Earth Sciences and Technology, Institut Teknologi Bandung"
    scholar: "https://scholar.google.com/scholar?q=%22Gabriella+Alodia%22"
  - name: "Fickrie Muhammad"
    institution: "Faculty of Earth Sciences and Technology, Institut Teknologi Bandung"
    scholar: "https://scholar.google.com/scholar?q=%22Fickrie+Muhammad%22"
  - name: "Poerbandono"
    institution: "Faculty of Earth Sciences and Technology, Institut Teknologi Bandung"
    scholar: "https://scholar.google.com/citations?hl=en&user=X8dIE6AAAAAJ"
  - name: "Ferryanto"
    institution: "Faculty of Mechanical and Aerospace Engineering, Institut Teknologi Bandung"
    scholar: "https://scholar.google.com/scholar?q=%22Ferryanto%22+%22Institut+Teknologi+Bandung%22"
  - name: "Arnadi Murtiyoso"
    institution: "INSA Strasbourg"
    scholar: "https://scholar.google.com/citations?user=JoXowwQAAAAJ&hl=en"
  - name: "Harry Octavianus Sofian"
    institution: "Research Center for Archaeometry, BRIN"
    scholar: "https://scholar.google.com/citations?user=AoCsJoUAAAAJ&hl=en"
  - name: "Harald Sternberg"
    institution: "HafenCity University Hamburg"
    scholar: "https://scholar.google.com/citations?user=yS69h-AAAAAJ&hl=en"
students:
  - name: "Anggraini"
    role: "PhD student, FITB ITB"
  - name: "Matthew Troy Putra"
    role: "STEI ITB"
  - name: "Dwi Hadi Nugraha"
    role: "FITB ITB"
  - name: "Yayat Nurhidayat"
    role: "STEI ITB"
  - name: "Ibrahim Hanif Mulyana"
    role: "STEI ITB"
  - name: "Riswandha Mashuri"
    role: "STEI ITB"
  - name: "Wafi Abiyyu Yasin"
    role: "STEI ITB"
cover:
  image: "/images/projects/deep-under-rov/prototype.png"
showToc: true
disableAnchoredHeadings: false
---

## Project overview

DEEP-UNDER ROV stands for **Development of Experimental and Exploratory Photogrammetry for Supporting Underwater Archaeological Studies using Remotely Operated Vehicle**. The project develops an affordable robotic platform and mapping methodology for documenting submerged cultural heritage in Indonesia's shallow tropical waters.

The project is led by **Hilton Tnunay** at the School of Electrical Engineering and Informatics, Institut Teknologi Bandung.

The research responds to three practical constraints in underwater archaeology: risks to human divers, the technical difficulty of collecting reliable data underwater, and the high cost of conventional survey systems. It combines robotics, control, computer vision, hydrography, photogrammetry, acoustics, mechanics, and archaeology.

<div class="project-media-grid project-media-grid--three">
  <figure>
    <img src="/images/projects/deep-under-rov/prototype.png" alt="Low-cost DEEP-UNDER ROV prototype on a workbench">
    <figcaption>Low-cost DEEP-UNDER ROV prototype developed during the first project year.</figcaption>
  </figure>
  <figure>
    <img src="/images/projects/deep-under-rov/pool-test.png" alt="DEEP-UNDER ROV undergoing a pool test">
    <figcaption>ROV testing in a controlled pool environment.</figcaption>
  </figure>
  <figure>
    <img src="/images/projects/deep-under-rov/field-image.png" alt="Underwater image acquired during coastal testing">
    <figcaption>Image acquired during coastal field testing.</figcaption>
  </figure>
</div>

## 2025 prototype and results

The first project year established the feasibility of a low-cost ROV assembled from components available through the domestic supply chain. The prototype integrated underwater cameras and pressure sensing for visual mapping missions, with a modular platform intended for expansion to inertial and acoustic sensing.

The 2025 phase produced four principal results:

- A functional low-cost ROV platform for shallow-water archaeological inspection
- Laboratory and pool testing of the integrated mechanical, electronic, and sensing systems
- An underwater visual simultaneous localisation and mapping (visual-SLAM) pipeline for camera pose estimation and sparse three-dimensional reconstruction
- Field validation at Pramuka Island at depths of up to 12 metres, where the platform remained stable under real underwater pressure and environmental conditions

<div class="project-media-grid project-media-grid--two">
  <figure>
    <img src="/images/projects/deep-under-rov/visual-features.png" alt="Underwater visual-SLAM image with extracted feature points">
    <figcaption>Underwater camera data with visual features extracted for localisation.</figcaption>
  </figure>
  <figure>
    <img src="/images/projects/deep-under-rov/slam-reconstruction.png" alt="Camera trajectory and sparse point-cloud reconstruction">
    <figcaption>Estimated camera trajectory and sparse point-cloud reconstruction.</figcaption>
  </figure>
</div>

The trials also identified the main limitation for archaeological mapping: sensing quality. Vision-only data were affected by illumination, turbidity, vehicle motion, and viewing geometry; acoustic data had not yet been systematically integrated; and dense reconstruction of an archaeological object was not completed during the first year. These findings directly shaped the second-year programme.

## 2026 research focus

The second year shifts the emphasis from platform feasibility to data quality and methodological robustness. The goal is to generate geometrically consistent and archaeologically interpretable 3D models under representative underwater conditions.

The work is organised into three work packages:

### Multi-modal integration and calibration

Visual, inertial, depth, and acoustic sensors are integrated into common spatial and temporal frames. The work includes sensor synchronisation, intrinsic and extrinsic calibration, and tightly coupled multi-sensor state estimation. This package is led by Hilton Tnunay, Fickrie Muhammad, and Indra Sihar.

### Active-perception control and navigation

The ROV's motion is designed not only for stability and trajectory tracking, but also to improve image quality, viewing geometry, sensor coverage, overlap, and standoff distance for 3D reconstruction. This package includes control-oriented vehicle modelling and multi-sensor-driven navigation, led by Anggera Bayuwindra and Ferryanto.

### Dense 3D reconstruction

Visual and acoustic observations are combined to improve robustness, scale consistency, and completeness when visibility or texture is poor. Reconstruction quality is assessed through geometric completeness, surface continuity, and suitability for archaeological interpretation. This package is led by Gabriella Alodia, Arnadi Murtiyoso, and Harry Octavianus Sofian.

## Progress update — August 2026

The August 2026 progress review records a transition from the initial prototype to a more capable research platform called **SUPRI-ROV**. Three design iterations have been completed: SUPRI-ROV v1.0 in September 2025, v2.0 in January 2026, and the current v3.0 in May 2026. The first two versions provided four degrees of freedom; v3.0 expands the platform to six degrees of freedom and incorporates improved sealing, cable management, power switching, and leak detection.

<div class="project-media-grid project-media-grid--three">
  <figure>
    <img src="/images/projects/deep-under-rov/prototype.png" alt="SUPRI-ROV version 1 prototype">
    <figcaption>SUPRI-ROV v1.0 — September 2025.</figcaption>
  </figure>
  <figure>
    <img src="/images/projects/deep-under-rov/progress-2026/supri-rov-v2.png" alt="SUPRI-ROV version 2 on a testing bench">
    <figcaption>SUPRI-ROV v2.0 — January 2026.</figcaption>
  </figure>
  <figure>
    <img src="/images/projects/deep-under-rov/progress-2026/supri-rov-v3.jpeg" alt="SUPRI-ROV version 3 operating underwater in a pool">
    <figcaption>SUPRI-ROV v3.0 — May 2026, the current six-degree-of-freedom platform.</figcaption>
  </figure>
</div>

### Control, estimation, and simulation

- A Gazebo and ROS 2 simulator now supports development and testing of the SUPRI vehicle before deployment.
- Stereo-enhanced image-based visual servoing was developed to stabilise image acquisition in turbid, shallow tropical waters. The work was accepted and presented at IEEE ASCC 2026 in Bali as **“Stereo-enhanced Image-based Visual Servoing for Low-cost U-ROV.”**
- A visual-inertial Kalman-based estimator combines stereo image features with inertial measurements to estimate vehicle velocity where conventional underwater localisation is impractical or expensive.

<figure class="project-wide-media">
  <img src="/images/projects/deep-under-rov/progress-2026/system-architecture.png" alt="SUPRI-ROV vehicle and ground-control system architecture">
  <figcaption>Vehicle, fibre-optic communication, and ground-control architecture developed for SUPRI-ROV.</figcaption>
</figure>

### Visual SLAM and three-dimensional reconstruction

The team embedded a PINAX camera model into the visual-inertial stereo-SLAM pipeline to account for underwater refraction. Pool tests at Saraga evaluated localisation and reconstruction, and the method was submitted to the ROSE Workshop at IROS 2026. Visual-SLAM and Gaussian-splatting experiments were also conducted with data from Saraga Pool and Pramuka Island, including reconstruction of an ADCP support frame.

### Next field mission

As of the August report, the next Pramuka Island mission is planned for **21–25 October 2026**. The programme includes surveying the Poso shipwreck, testing USBL positioning, and collecting coral data. A Q1 journal manuscript is in preparation, with the 2026 project phase targeted for completion in November.

## ROV system

The platform uses a manoeuvrable frame suited to shallow-water inspection. Its research architecture includes:

- Underwater cameras for visual navigation, photogrammetry, and texture capture
- Pressure and depth sensing, with inertial and acoustic sensors incorporated into the multi-modal framework
- Onboard computation for real-time sensing, control, and navigation
- Robot Operating System 2 for communication between hardware and software modules
- A topside operator interface and tethered power and data connection

The project roadmap advances the platform from an initial visual-mapping prototype at Technology Readiness Level 2 toward multi-modal archaeological mapping methods at Technology Readiness Level 3.

## Algorithms

### Multi-sensor state estimation

The 2026 system combines visual, inertial, depth, and acoustic measurements to maintain reliable vehicle state estimates when any single sensing modality becomes degraded.

### Active-perception control

Control and navigation are coupled to mapping requirements. Vehicle speed, orientation, distance to the object, image overlap, viewpoint stability, and sensor coverage become explicit control considerations rather than after-the-fact quality checks.

### Underwater visual SLAM

The first-year visual-SLAM pipeline demonstrated camera trajectory estimation and sparse point-cloud reconstruction using coastal image data. Subsequent work extends this foundation with multi-sensor feedback and more robust acquisition strategies.

### Multi-modal 3D reconstruction

Photogrammetry provides high-resolution geometry and texture, while acoustic sensing provides complementary structure under poor visibility. Image enhancement, underwater calibration, and acoustic constraints are combined to support dense reconstruction.

## Experimental sites and evaluation

Research combines controlled laboratory experiments with targeted field trials. The archaeological case-study area is around Pramuka Island in the Seribu Islands, including the KM Tabularasa and KM Posso shipwreck sites.

The evaluation considers:

- Calibrated versus non-calibrated sensing
- Mapping-oriented versus unconstrained vehicle motion
- Visual-only versus multi-modal reconstruction
- Geometric completeness, scale consistency, and surface continuity
- Suitability of the resulting models for archaeological interpretation

## Involved students

Students from STEI and FITB ITB participate in the research and connect their undergraduate, graduate, or thesis work to the project.

| Student | School or faculty |
|---|---|
| Anggraini | PhD student, FITB ITB |
| Matthew Troy Putra | STEI ITB |
| Dwi Hadi Nugraha | FITB ITB |
| Yayat Nurhidayat | STEI ITB |
| Ibrahim Hanif Mulyana | STEI ITB |
| Riswandha Mashuri | STEI ITB |
| Wafi Abiyyu Yasin | STEI ITB |

Student identification numbers are intentionally omitted from this public page.

## Expected outputs and longer-term direction

- Reusable software for sensor integration, state estimation, mapping-oriented control, and 3D reconstruction
- Calibrated sensing and experimental datasets from controlled and limited field trials
- A Q1 journal submission targeted for November 2026 and dissemination at an international conference
- Methodological guidance for lower-cost underwater archaeological mapping
- A foundation for future digital twins and autonomous or multi-vehicle surveys of underwater cultural heritage

The project also develops collaboration among ITB's Computer Engineering, Control and Computer Systems, Hydrography, and Dynamics and Control research groups, together with INSA Strasbourg, BRIN, and HafenCity University Hamburg.

## Videos

<div class="project-video-grid">
  <figure>
    <video controls preload="metadata">
      <source src="/images/projects/deep-under-rov/progress-2026/supri-simulator.mp4" type="video/mp4">
    </video>
    <figcaption>SUPRI-ROV simulation in Gazebo and ROS 2.</figcaption>
  </figure>
  <figure>
    <video controls preload="metadata">
      <source src="/images/projects/deep-under-rov/progress-2026/visual-slam-reconstruction.mp4" type="video/mp4">
    </video>
    <figcaption>Visual-SLAM reconstruction experiment.</figcaption>
  </figure>
  <figure>
    <video controls preload="metadata">
      <source src="/images/projects/deep-under-rov/progress-2026/gaussian-splatting-reconstruction.mp4" type="video/mp4">
    </video>
    <figcaption>Gaussian-splatting reconstruction experiment.</figcaption>
  </figure>
</div>

## Gallery

The gallery documents the 2025 prototype, 2026 SUPRI-ROV evolution, pool testing, coastal image acquisition, system architecture, and visual-SLAM and reconstruction results. Future updates will add material from subsequent field deployments.
