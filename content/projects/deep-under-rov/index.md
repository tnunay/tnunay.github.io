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
current_students:
  - name: "Anggraini Rizkita Puji"
    role: "PhD student, FITB ITB"
  - name: "Wafi Abiyyu Yasin"
    role: "STEI ITB"
  - name: "Ibrahim Hanif Mulyana"
    role: "STEI ITB"
  - name: "Yayat Nurhidayat"
    role: "STEI ITB"
  - name: "Muhammad Aqeel Ghani"
    role: "STEI ITB"
  - name: "Rusydi Noor Abdurrahman"
    role: "STEI ITB"
  - name: "Adli Syauqi"
    role: "STEI ITB"
graduated_students:
  - name: "Matthew Troy Putra"
    role: "STEI ITB"
  - name: "Dwi Hadi Nugraha"
    role: "FITB ITB"
  - name: "Riswandha Mashuri"
    role: "STEI ITB"
cover:
  image: "/images/projects/deep-under-rov/headline-rov.jpeg"
team_in_content: true
showToc: true
disableAnchoredHeadings: false
---

## Team and funding

{{< project-facts >}}

## Announcement

<aside class="project-announcement" aria-label="Upcoming field experiment">
  <span class="project-announcement__date">21–26 October 2026</span>
  <p><strong>Upcoming field experiment at Pramuka Island.</strong> The DEEP-UNDER ROV team will deploy the platform for field testing, underwater data collection, and mapping experiments.</p>
</aside>

## Project overview

DEEP-UNDER ROV stands for **Development of Experimental and Exploratory Photogrammetry for Supporting Underwater Archaeological Studies using Remotely Operated Vehicle**. Led by **Hilton Tnunay** at the School of Electrical Engineering and Informatics, Institut Teknologi Bandung, the project develops an affordable robotic platform and mapping methodology for documenting submerged cultural heritage in Indonesia's shallow tropical waters.

The research addresses three practical constraints in underwater archaeology: risks to human divers, the technical difficulty of collecting reliable data underwater, and the high cost of conventional survey systems. It combines robotics, control, computer vision, hydrography, photogrammetry, acoustics, mechanics, and archaeology.

### Expected outputs

- A reusable ROV platform and software for sensing, state estimation, mapping-oriented control, SLAM, and 3D reconstruction
- Calibrated multi-modal sensing methods and experimental datasets from controlled and field trials
- Geometrically consistent 3D models suitable for archaeological documentation and interpretation
- International conference and journal publications, including a Q1 journal manuscript in preparation
- Practical guidance for lower-cost underwater archaeological mapping

### Long-term direction

The project is progressing from a visual-mapping prototype toward a robust multi-modal archaeological survey platform. The longer-term direction is to support digital twins, increasingly autonomous missions, and eventually coordinated multi-vehicle surveys of underwater cultural heritage.

## Research focus

### 2025 — Platform feasibility

The first year established the feasibility of a low-cost ROV assembled from components available through the domestic supply chain. The work integrated underwater cameras and pressure sensing, tested the mechanical, electronic, and sensing systems, developed an initial visual-SLAM pipeline, and validated the platform in controlled and coastal environments.

The 2025 trials also identified the key mapping limitations: illumination changes, turbidity, vehicle motion, viewing geometry, and the absence of tightly integrated inertial and acoustic sensing. Those findings shaped the second-year programme.

### 2026 — Mapping quality and robustness

The second year shifts the emphasis from platform feasibility to reliable data acquisition and archaeologically interpretable reconstruction. The work is organised around four connected themes:

- **Hardware:** mechanical design, waterproofing, sealing, cable management, power switching, leak detection, and six-degree-of-freedom actuation
- **Control:** vehicle modelling, simulation, visual servoing, trajectory tracking, and active-perception control for stable, overlapping imagery
- **Estimation and SLAM:** stereo vision, inertial sensing, depth and acoustic integration, Kalman-based estimation, underwater camera modelling, and visual-inertial SLAM
- **3D reconstruction:** photogrammetry, point clouds, Gaussian splatting, acoustic constraints, and reconstruction-quality assessment

## Progress and milestones

<span class="project-milestone-label">September 2025</span>

### SUPRI-ROV v1.0 and feasibility testing

The first four-degree-of-freedom prototype established the basic mechanical frame, propulsion arrangement, onboard electronics, cameras, pressure sensing, and tethered operator workflow. Laboratory and pool tests confirmed that the low-cost platform could support underwater inspection and visual-mapping research.

<div class="project-media-grid project-media-grid--two">
  <figure>
    <img src="/images/projects/deep-under-rov/prototype.png" alt="SUPRI-ROV version 1 prototype on a workbench">
    <figcaption>SUPRI-ROV v1.0, completed in September 2025.</figcaption>
  </figure>
  <figure>
    <img src="/images/projects/deep-under-rov/pool-test.png" alt="DEEP-UNDER ROV undergoing a pool test">
    <figcaption>Controlled pool testing of the integrated platform.</figcaption>
  </figure>
</div>

<span class="project-milestone-label">Late 2025</span>

### Coastal validation and initial visual SLAM

Field validation at Pramuka Island demonstrated stable operation under real underwater pressure and environmental conditions at depths of up to 12 metres. The team also demonstrated camera trajectory estimation and sparse 3D reconstruction from underwater imagery.

<div class="project-media-grid project-media-grid--three">
  <figure>
    <img src="/images/projects/deep-under-rov/field-image.png" alt="Underwater image acquired during coastal testing">
    <figcaption>Coastal imagery used to evaluate underwater visibility and feature quality.</figcaption>
  </figure>
  <figure>
    <img src="/images/projects/deep-under-rov/visual-features.png" alt="Underwater image with extracted visual features">
    <figcaption>Feature extraction for underwater localisation.</figcaption>
  </figure>
  <figure>
    <img src="/images/projects/deep-under-rov/slam-reconstruction.png" alt="Estimated camera trajectory and sparse point cloud">
    <figcaption>Initial visual-SLAM trajectory and sparse reconstruction.</figcaption>
  </figure>
</div>

<span class="project-milestone-label">January 2026</span>

### SUPRI-ROV v2.0 hardware refinement

The second four-degree-of-freedom iteration refined the enclosure, sealing, component layout, and electrical integration. This version provided the transition from the initial feasibility platform to a system designed for repeated experiments.

<figure class="project-wide-media">
  <img src="/images/projects/deep-under-rov/progress-2026/supri-rov-v2.png" alt="SUPRI-ROV version 2 on a testing bench">
  <figcaption>SUPRI-ROV v2.0 during system integration in January 2026.</figcaption>
</figure>

<span class="project-milestone-label">May 2026</span>

### SUPRI-ROV v3.0 and six-degree-of-freedom operation

The current platform expands motion capability to six degrees of freedom and improves sealing, cable management, power switching, leak detection, fibre-optic communication, and ground-control integration. These mechanical and electrical changes support more stable image acquisition and a wider range of survey trajectories.

<div class="project-media-grid project-media-grid--two">
  <figure>
    <img src="/images/projects/deep-under-rov/headline-rov.jpeg" alt="DEEP-UNDER ROV team preparing the vehicle for field operation">
    <figcaption>Field preparation of the current DEEP-UNDER ROV platform.</figcaption>
  </figure>
  <figure>
    <img src="/images/projects/deep-under-rov/progress-2026/supri-rov-v3.jpeg" alt="SUPRI-ROV version 3 operating underwater">
    <figcaption>SUPRI-ROV v3.0, the current six-degree-of-freedom platform.</figcaption>
  </figure>
</div>

<span class="project-milestone-label">June–August 2026</span>

### Control, estimation, SLAM, and reconstruction

The team developed a Gazebo and ROS 2 simulator for vehicle testing, stereo-enhanced image-based visual servoing for stable image acquisition, and a visual-inertial Kalman estimator for vehicle velocity. A PINAX underwater camera model was integrated into a stereo visual-inertial SLAM pipeline to account for refraction, then evaluated through pool tests at Saraga.

Visual-SLAM and Gaussian-splatting experiments used data from Saraga Pool and Pramuka Island, including reconstruction of an ADCP support frame. This stage connects mapping-aware vehicle motion, state estimation, SLAM, and dense scene reconstruction.

<figure class="project-wide-media">
  <img src="/images/projects/deep-under-rov/progress-2026/system-architecture.png" alt="SUPRI-ROV vehicle and ground-control system architecture">
  <figcaption>Vehicle, fibre-optic communication, and ground-control architecture.</figcaption>
</figure>

<figure class="project-wide-media">
  <img src="/images/projects/deep-under-rov/3d-reconstruction.jpeg" alt="Three-dimensional point-cloud reconstruction of an underwater structure">
  <figcaption>Three-dimensional point-cloud reconstruction produced from underwater imagery.</figcaption>
</figure>

<span class="project-milestone-label">October–November 2026</span>

### Pramuka Island mission and project completion

The field experiment scheduled for **21–26 October 2026** will test the current platform and mapping workflow at Pramuka Island. The programme includes underwater data collection, positioning and reconstruction experiments, and preparation of the evidence needed for the final 2026 research outputs and journal manuscript.

## Documentation

### Simulation and progress-report videos

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

### Field, SLAM, and reconstruction recordings

<div class="project-video-grid">
  <figure>
    <video controls preload="metadata" poster="/images/projects/deep-under-rov/field-videos/slam-rov1-poster.jpg">
      <source src="/images/projects/deep-under-rov/field-videos/slam-rov1.mp4" type="video/mp4">
    </video>
    <figcaption>ROV visual-SLAM processing with tracked features, estimated trajectory, and sparse mapping results.</figcaption>
  </figure>
  <figure>
    <video controls preload="metadata" poster="/images/projects/deep-under-rov/field-videos/stereo-slam-poster.jpg">
      <source src="/images/projects/deep-under-rov/field-videos/stereo-slam.mp4" type="video/mp4">
    </video>
    <figcaption>Stereo visual-SLAM processing with rectified underwater views and reconstructed vehicle trajectory.</figcaption>
  </figure>
  <figure>
    <video controls preload="metadata" poster="/images/projects/deep-under-rov/field-videos/splatting-poster.jpg">
      <source src="/images/projects/deep-under-rov/field-videos/splatting.mp4" type="video/mp4">
    </video>
    <figcaption>Underwater scene rendered through the Gaussian-splatting reconstruction workflow.</figcaption>
  </figure>
</div>

## Publications

### Conference paper

- **“Stereo-enhanced Image-based Visual Servoing for Low-cost U-ROV”** — accepted and presented at the 2026 IEEE Asian Control Conference (ASCC) in Bali.

### Workshop submission

- A visual-inertial stereo-SLAM method incorporating the PINAX underwater camera model — submitted to the ROSE Workshop at IROS 2026.

### Manuscript in preparation

- A Q1 journal manuscript on the integrated underwater mapping research is in preparation as part of the 2026 project outputs.
