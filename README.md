# Healthcare Dashboard

This is a **single-page responsive React application** built as part of a front-end developer skills test. The goal was to convert a provided Adobe XD template into HTML/CSS/JS, and dynamically populate the UI by making a GET request to an external API.

---

## Project Requirements (as per assignment)

- Convert **Adobe XD template** to responsive HTML using React (no Tailwind).
- Use the **Coalition Technologies Patient API** to fetch patient data.
- Display information **only for Jessica Taylor**.
- Include **a chart showing blood pressure readings** using Chart.js.
- Avoid implementing unnecessary interactions (e.g., gear icon, search, dropdowns).
- Deliver a clean and professional UI following the design mockup closely.

---

## Technologies Used

- **React.js** (Created using Create React App)
- **JavaScript (ES6+)**
- **CSS** (for styling, responsive layout)
- **Chart.js** (for the blood pressure graph)
- **Fetch API** (for async data fetching)

---

## Project Structure & Workflow

### Data Flow

1. On load, the app makes a **GET request** to:
2. The response contains multiple patient records — **only Jessica Taylor’s** data is selected and used.
3. The data is then passed down as props to different components:
- `ProfileCard` for displaying basic patient info
- `Vitals` for displaying vital signs (heart rate, respiratory rate, etc.)
- `BloodPressureChart` using Chart.js
- `DiagnosisList` and `LabResults`

### React Components

- `App.js`: Root component – manages state and API fetch
- `components/ProfileCard.js`: Patient photo, name, age, contact, etc.
- `components/Vitals.js`: Vital signs from latest diagnosis
- `components/BloodPressureChart.js`: Chart.js rendering of systolic/diastolic BP
- `components/DiagnosisList.js`: Current diagnosis with descriptions and status
- `components/LabResults.js`: Lab tests list

---

## Getting Started (For Reviewers & Developers)

### Prerequisites

- Node.js (v16+ recommended)
- npm (v7+)

### 📦 Installation

```bash
git clone https://github.com/your-username/healthcare-dashboard.git
cd healthcare-dashboard
npm install
