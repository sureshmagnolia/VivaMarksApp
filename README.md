# Viva Marks Consolidator & Live Sync App 🎓📡

An advanced, real-time, multi-device **Viva Marks Consolidator and Evaluation System** built with React 19, Vite, PeerJS WebRTC, and Cloud Relays. Designed for university thesis defenses, project viva evaluations, and comprehensive examination panels.

---

## 🌟 Key Features

### 📘 1. Project Viva & Dissertation Module
- Comprehensive structural dissertation evaluation (Title, Literature Review, Methodology, Results, Novelty).
- Presentation & Oral Viva scoring with automatic grade calculation.
- Exportable & printable final consolidated marksheets (PDF & JSON backup).

### 📗 2. Comprehensive Viva Marks Consolidator Module
- **Dual Examiner Panel Workflow**: Examiner 1 & Examiner 2 separate evaluation slots.
- Automatic average calculation, total 100/150 conversion, and letter grade assignment (`O`, `A+`, `A`, `B`, `C`, `D`, `E`).
- **Visual Grade Distinction**:
  - **A+ Grade**: Pure Emerald Green (`#16a34a` / `#22c55e`).
  - **A Grade**: Distinct Oceanic Teal Green (`#0d9488` / `#14b8a6`).

### 📡 3. Real-Time Multi-Device Sync Engine
- **Hybrid P2P + Cloud Architecture**:
  - High-speed direct WebRTC P2P DataChannels via PeerJS.
  - Zero-Preflight Cloud Relay fallback (`ntfy.sh` + `keyvalue.immanuel.co` + `pastes.dev`) for cross-network connectivity.
- **Smart Role-Based Non-Destructive Merge**:
  - Offline work entered by Examiner 1 or Examiner 2 is **never overwritten** when rejoining a room.
  - `mergeStudentData` in `src/utils/mergeUtils.js` guarantees non-empty local marks are preserved during room sync.
- **Locked Device Roles & Conflict Detection**:
  - Device roles (Examiner 1 / Examiner 2 / Viewer) are locked during active sessions (`peerStatus !== 'disconnected'`).
  - Automatic prompt to switch roles if two devices join with conflicting examiner roles.
- **Non-Blocking Offline Banner**:
  - Examiners can continue entering marks offline seamlessly if network drops.
  - Offline notification banner automatically dismisses the exact instant connection is re-established.

### 📱 4. Mobile & Touch Optimized
- Horizontal swipeable tab navigation (`-webkit-overflow-scrolling: touch`).
- Standardized `16px` mobile touch targets preventing iOS Safari auto-zoom.
- Responsive action button grid and sticky student columns in mark tables.

---

## 🏗️ Project Architecture & File Structure

```
src/
├── App.jsx                        # Master container, top tabs, sync engine & undo/redo stack
├── ProjectVivaApp.jsx             # Module 1: Project Viva & Dissertation evaluation
├── ComprehensiveVivaApp.jsx       # Module 2: Comprehensive Viva dual-examiner panel
├── index.css                      # Global design system, glassmorphism & mobile media queries
├── components/
│   ├── SyncTab.jsx                # Module 3: Live Sync room manager & diagnostic log console
│   ├── CompExaminerTab.jsx        # Examiner 1 & 2 mark entry forms with partner role locking
│   ├── CompStudentsTab.jsx        # Comprehensive student roster manager
│   ├── CompPrintableMarklist.jsx  # Printable/Exportable final marklist
│   ├── StudentsTab.jsx            # Project Viva student roster manager
│   ├── ProjectGradesTab.jsx       # Dissertation structural evaluation tab
│   ├── PresentationVivaTab.jsx   # Oral presentation evaluation tab
│   ├── MarksTable.jsx             # Master marks table component
│   └── PrintableMarklist.jsx      # Project Viva printable marklist
└── utils/
    ├── mergeUtils.js              # Non-destructive student data merge & compression routines
    ├── gradeColors.js             # Grade badge styling rules (O, A+, A Teal, B, C, D, E)
    └── indexedDB.js               # Local storage persistence layer
```

---

## 🛠️ State & Synchronization Rules for AI Coding Assistants

1. **State Ownership**:
   - Master state (`projectDetails`, `projectStudents`, `compDetails`, `compStudents`) resides in `App.jsx`.
2. **Student Mark Merging**:
   - Always pass incoming peer/cloud packets through `mergeStudentData(prev, incoming, appType, senderRole)` instead of direct state replacement.
3. **Undo / Redo Stack**:
   - `historyIndex` must strictly reflect valid indices inside `history`.
   - Always guard `handleUndo` and `handleRedo` with null checks (`if (!targetSnapshot) return;`).
4. **Color System**:
   - All grade colors must be referenced from `src/utils/gradeColors.js`. Grade `A` is Oceanic Teal Green (`#0d9488`).

---

## 🚀 Development & Deployment Commands

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Build production bundle
npm run build

# Deploy production build to GitHub Pages (gh-pages branch)
npm run deploy
```

---

## 🌐 Live Deployments

- **VivaMarksApp**: [https://sureshmagnolia.github.io/VivaMarksApp/](https://sureshmagnolia.github.io/VivaMarksApp/)
- **viva-app**: [https://sureshmagnolia.github.io/viva-app/](https://sureshmagnolia.github.io/viva-app/)
