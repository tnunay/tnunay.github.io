---
title: "DEEP-UNDER ROV"
weight: 10
research_project: true
project_code: "Underwater Robotics"
project_status: "Ongoing"
period: "2025–2026"
summary: "A low-cost ROV and multi-modal mapping framework for safer, high-resolution documentation of underwater archaeological sites in Indonesia."
description: "DEEP-UNDER ROV develops low-cost robotic, sensing, control, and 3D reconstruction methods for underwater archaeology."
funding: "Institut Teknologi Bandung internal research funding (2025 funded; 2026 proposal)"
lecturers:
  - name: "Hilton Tnunay"
    institution: "School of Electrical Engineering and Informatics, Institut Teknologi Bandung"
  - name: "Anggera Bayuwindra"
    institution: "School of Electrical Engineering and Informatics, Institut Teknologi Bandung"
  - name: "Indra Sihar"
    institution: "School of Electrical Engineering and Informatics, Institut Teknologi Bandung"
  - name: "Gabriella Alodia"
    institution: "Faculty of Earth Sciences and Technology, Institut Teknologi Bandung"
  - name: "Fickrie Muhammad"
    institution: "Faculty of Earth Sciences and Technology, Institut Teknologi Bandung"
  - name: "Poerbandono"
    institution: "Faculty of Earth Sciences and Technology, Institut Teknologi Bandung"
  - name: "Ferryanto"
    institution: "Faculty of Mechanical and Aerospace Engineering, Institut Teknologi Bandung"
  - name: "Anggraini"
    institution: "Faculty of Earth Sciences and Technology, Institut Teknologi Bandung"
  - name: "Arnadi Murtiyoso"
    institution: "INSA Strasbourg"
  - name: "Harry Octavianus Sofian"
    institution: "Research Center for Archaeometry, BRIN"
  - name: "Harald Sternberg"
    institution: "HafenCity University Hamburg"
students:
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

Public demonstration and field-test videos will be added here when they are available for release.

## Gallery

The current images document the 2025 prototype, pool testing, coastal image acquisition, and the initial visual-SLAM results. Future updates will add hardware integration, calibration experiments, team activities, field deployments, and dense reconstruction results.
