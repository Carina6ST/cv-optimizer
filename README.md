# CV Optimizer (Educational Project)

> A simple full‑stack playground for experimenting with CV/resumé analysis, optimization and job‑description matching. This repository contains a **frontend** and a **backend** so you can iterate quickly and learn step‑by‑step.

> **Status:** Work in progress (WIP). Contributions and suggestions are welcome.

---

## Table of Contents

* [Overview](#overview)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Backend — Run locally](#backend--run-locally)
  * [Frontend — Run locally](#frontend--run-locally)
* [Environment Variables](#environment-variables)
* [API (work in progress)](#api-work-in-progress)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)

---

🔗 Quick Links
- **Code Repository (this repo):** [CV Optimizer GitHub](https://github.com/Carina6ST/cv-optimizer)  
- **Jira Board:** [COW Project Board](https://cristinaaateaca.atlassian.net/jira/software/projects/COW/boards/67)  

---
## Overview

**CV Optimizer** is an educational project that aims to:

* parse or ingest a CV/Resumé (PDF/DOCX/text),
* allow basic editing/cleanup or keyword highlighting,
* (optionally) compare the CV against a given Job Description (JD),
* and surface suggestions for improving alignment.

You can use this codebase to prototype ideas around ATS friendliness, keyword coverage, and formatting.

> Note: exact functionality depends on the modules you enable in `backend/` and `frontend/`. See the **Roadmap** below.

---

## Features

**Current:**
- ✅ Separate frontend and backend for clean development.
- ✅ CV upload and text parsing (PDF/DOCX).
- ✅ JD input and keyword coverage scoring.
- ✅ Results view with suggestions.
- ✅ Basic auth stub with Firebase config.  

**Planned:**
- ☐ Stripe payments for premium features.
- ☐ Export optimized CV (Markdown/PDF).
- ☐ Full usability testing (planned but not completed).
- ☐ Docker/Compose setup for easy local dev. 

---

## Tech Stack

**Frontend**  
- React.js + Tailwind CSS  
- Vite dev server (`npm run dev`)  

**Backend**  
- Python 3.x with Flask REST API  
- Key libraries: `pdfplumber`, `python-docx`, `spaCy`, `NLTK`  

**Other Tools**  
- Firebase (auth stub, planned DB config)  
- Stripe (planned, not integrated)  
- Deployment: Render/Vercel  
- Version control: GitHub  

**Team Roles**  
- **Carina (Project Lead & Tester):** planning, Jira tracking, QA, documentation.  
- **Cristina (Backend Developer):** Flask endpoints and parsing logic.  
- **Atanaska (Frontend Developer):** React/Tailwind UI and results view.  
  
---

## Project Structure

```
cv-optimizer/
├── backend/            # Python backend (APIs, CV parsing, JD matching, etc.)
│   ├── app.py | main.py
│   ├── requirements.txt
│   └── ...
├── frontend/           # JavaScript frontend (UI)
│   ├── package.json
│   └── ...
├── .gitignore
└── README.md
```

---

## Getting Started

### Prerequisites

* **Git**
* **Python** ≥ 3.10
* **Node.js** ≥ 18 and **npm** (or **pnpm/yarn**)

> Windows users: run commands in **PowerShell**; macOS/Linux in **Terminal**.

### Backend — Run locally

```bash
cd backend
# (1) Create and activate a virtual environment
python -m venv .venv
# macOS/Linux
source .venv/bin/activate
# Windows PowerShell
.\.venv\Scripts\Activate.ps1

# (2) Install dependencies (edit if you don’t use requirements.txt)
pip install -r requirements.txt

# (3) Run the dev server
# If FastAPI (Uvicorn):
uvicorn app:app --reload --port 8000
# or, if the entrypoint is main.py with "app":
uvicorn main:app --reload --port 8000

# If Flask (example):
# $env:FLASK_APP="app.py"      # PowerShell
# export FLASK_APP=app.py       # macOS/Linux
# flask run --port 8000
```

The backend should now be available at: `http://localhost:8000`.

### Frontend — Run locally

```bash
cd frontend
npm install
# Start dev server (Vite/CRA)
npm run dev    # Vite (usually http://localhost:5173)
# or
npm start      # CRA (usually http://localhost:3000)
```

> Make sure the frontend knows how to reach the backend (see **Environment Variables**).

---

## Environment Variables

Create a `.env` file for each part as needed.

**backend/.env** (examples)

```
# LLM provider(s), if you use any
OPENAI_API_KEY=your_key
GROQ_API_KEY=your_key

# Optional config
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
```

**frontend/.env** (examples)

```
# Base URL of the backend API
VITE_API_URL=http://localhost:8000
```

> Never commit real secrets. `.env` files should be listed in `.gitignore`.

---

## API (current)

POST /api/parse-cv → upload CV; returns extracted text.

POST /api/score → CV + JD text; returns coverage score and keyword lists.

GET /api/health → simple health check.

>Document any real endpoints you implement.

---

## Roadmap

* [ ] Expand NLP keyword matching (better accuracy with spaCy pipelines).
* [ ] Add CV export options (Markdown/PDF).
* [ ] Stripe payments for premium features.
* [ ] Usability testing with 30+ users.
* [ ] Docker setup for quick local dev.
* [ ] CI pipeline with GitHub Actions.

---

## Contributing

1. Create a branch: git checkout -b feature/short-name
2. Commit small, focused changes.
3. Open a Pull Request into main.

---

## License

No license yet. Consider adding LICENSE (MIT recommended).

---

### Notes

This README documents both the current MVP and the planned roadmap. It supports the coursework portfolio by linking code, Jira board, diagrams, and project planning artefacts.And this repository and README were organised by **Carina Nazarenco** (Project Lead & Tester) as part of the coursework portfolio. The structure, documentation, and artefact links are intentionally designed to demonstrate planning, coordination, and delivery of the CV Optimizer project.  
