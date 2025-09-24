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

Current (minimal):

* ✅ Separate **frontend** and **backend** to keep concerns isolated.
* ✅ Local development setup instructions for Windows/macOS/Linux.

Planned (examples):

* ☐ CV upload (PDF/DOCX) and text extraction
* ☐ JD paste/URL input
* ☐ Keyword coverage and skill matching
* ☐ Scoring & simple suggestions
* ☐ Export optimized CV (Markdown/PDF)
* ☐ Authentication (basic)
* ☐ Docker dev setup

---

## Tech Stack

> This repo is intentionally lightweight. Replace the placeholders below with what you actually use.

**Frontend**

* JavaScript (e.g., React + Vite, or vanilla).
* Package scripts typically: `npm run dev` (Vite) or `npm start` (CRA).

**Backend**

* Python 3.x (e.g., FastAPI or Flask).
* Typical entrypoints: `app.py` or `main.py` with Uvicorn/Flask runner.

> If your stack differs (e.g., Node/Express, PHP/Laravel), update this section accordingly.

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

The backend should now be available at: `http://localhost:8000` (or as configured).

### Frontend — Run locally

```bash
cd frontend
# Install dependencies
npm install
# or: pnpm install / yarn install

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

## API (work in progress)

Common endpoints you might add:

* `POST /api/parse-cv` — upload CV (PDF/DOCX); returns extracted text/structure
* `POST /api/score` — CV text + JD text ⇒ returns coverage/score
* `GET /api/health` — health check

Document any real endpoints you implement.

---

## Roadmap

* [ ] Define exact backend framework (FastAPI/Flask) and entrypoint
* [ ] Implement CV upload + parsing (e.g., pdfminer, PyMuPDF, mammoth for DOCX)
* [ ] JD input (paste/URL)
* [ ] Matching & scoring (keywords/embeddings)
* [ ] UI flows (upload, review, suggestions, export)
* [ ] Basic auth & user sessions
* [ ] Docker/Compose for one‑command local dev
* [ ] CI (lint/test) with GitHub Actions

---

## Contributing

1. Create a feature branch: `git checkout -b feature/short-name`
2. Commit small, readable changes.
3. Open a Pull Request to `main` and describe your change.

If several people worked on a commit, consider using `Co-authored-by:` trailers.

---

## License

No license specified yet. Consider adding one (e.g., MIT) as `LICENSE` in the repo root.

---

### Notes

* This README is intentionally concise and **starter‑friendly**. Replace placeholders with the real commands/files used in your project.
* If your repository layout changes, update the **Project Structure** and **Getting Started** sections accordingly.
