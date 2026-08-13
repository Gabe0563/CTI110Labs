/* ============================================================
   Renders COURSES (from data.js) into the page, and wires up
   the search box. You shouldn't need to edit this file — see
   data.js to add classes or assignments.
   ============================================================ */

const ICONS = {
  Outline: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h10M4 18h16"/></svg>`,
  Reading: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h13"/></svg>`,
  Lab:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/></svg>`,
  Key:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="15" r="4"/><path d="M10.5 12.5 20 3M17 6l3 3M14 9l2 2"/></svg>`,
  Quiz:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.9.4-1.5 1-1.5 2.2M12 17h.01"/></svg>`,
  Project: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
  Default: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"/></svg>`
};

function iconFor(type) {
  return ICONS[type] || ICONS.Default;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function assignmentRow(a) {
  const flag = a.instructorOnly
    ? `<span class="instructor-flag">INSTRUCTOR</span>`
    : "";
  return `
    <a class="assignment-row" href="${escapeHtml(a.href)}" data-search="${escapeHtml((a.title + " " + a.type + " " + (a.description||"")).toLowerCase())}">
      <div class="assignment-name">
        <span class="file-icon">${iconFor(a.type)}</span>
        <div class="name-text">
          <div class="name-title">${escapeHtml(a.title)} ${flag}</div>
          ${a.description ? `<div class="name-desc">${escapeHtml(a.description)}</div>` : ""}
        </div>
      </div>
      <span class="type-badge">${escapeHtml(a.type)}</span>
      <span class="col-week">${escapeHtml(a.week ?? "—")}</span>
      <span class="col-updated">${escapeHtml(a.updated ?? "")}</span>
      <span class="open-link">Open →</span>
    </a>`;
}

function courseSection(course) {
  const rows = course.assignments.length
    ? course.assignments.map(assignmentRow).join("")
    : `<div class="empty-row">No assignments posted yet.</div>`;

  return `
    <section class="course-section" style="--accent: var(--accent-${course.accent}); --accent-soft: var(--accent-${course.accent}-soft);" data-course-id="${course.id}">
      <div class="course-head">
        <span class="course-code">${escapeHtml(course.code)}</span>
        <div class="course-titles">
          <h2>${escapeHtml(course.name)}</h2>
          <p class="course-desc">${escapeHtml(course.description || "")}</p>
        </div>
        <span class="course-path">/${escapeHtml(course.id)}</span>
      </div>
      <div class="assignment-list">
        ${course.assignments.length ? `
        <div class="assignment-header">
          <span>Name</span><span>Type</span><span>Week</span><span>Updated</span><span></span>
        </div>` : ""}
        ${rows}
      </div>
    </section>`;
}

function render() {
  const container = document.getElementById("courses");
  container.innerHTML = COURSES.map(courseSection).join("");
}

function applySearch(query) {
  const q = query.trim().toLowerCase();
  const rows = document.querySelectorAll(".assignment-row");
  const sections = document.querySelectorAll(".course-section");
  let anyVisible = false;

  rows.forEach(row => {
    const match = !q || row.dataset.search.includes(q);
    row.style.display = match ? "" : "none";
    if (match) anyVisible = true;
  });

  sections.forEach(section => {
    const visibleRows = section.querySelectorAll('.assignment-row:not([style*="display: none"])');
    section.style.display = (q && visibleRows.length === 0) ? "none" : "";
  });

  document.getElementById("empty-state").hidden = !q || anyVisible;
}

render();

document.getElementById("search").addEventListener("input", e => applySearch(e.target.value));
