/* ============================================================
   COURSE HUB — DATA FILE
   ============================================================
   This is the ONLY file you need to edit to add a class or an
   assignment. No HTML or CSS knowledge required — just follow
   the pattern below.

   HOW THIS REPO IS ORGANIZED
   -----------------------------
   This repo (CTI110Labs) is BOTH the CTI110 class site AND the
   homepage/hub for all your classes. Recommended structure:

     - Each class gets its OWN GitHub repo with its own GitHub
       Pages site (e.g., "CTI110Labs", "Windows11Labs", …).
     - This repo's homepage (this hub) links to CTI110's own
       files locally, AND links out to your other class repos
       by their live Pages URL.

   ADDING AN ASSIGNMENT TO *THIS* CLASS (CTI110)
   -------------------------------------------------
   1. Add the file to this repo (same way you added
      Chapter1LabAssignment.html — Add file → Upload files).
   2. Copy an assignment block below, edit it, and set "href"
      to just the filename (e.g., "Chapter2LabAssignment.html")
      since the file lives right here in this same repo.

   ADDING A WHOLE NEW CLASS (its own repo)
   -------------------------------------------
   1. Create a new repo (e.g., "Windows11Labs"), enable GitHub
      Pages on it the same way this repo is set up.
   2. Push that class's files to it.
   3. Copy a whole course { ... } block below, edit it, and set
      each assignment's "href" to the FULL live URL, e.g.:
        https://gabe0563.github.io/Windows11Labs/Lab1.html
      (Full URLs are required here since the file lives in a
      different repo than this hub page.)

   ⚠️ A NOTE ON PRIVATE / INSTRUCTOR-ONLY FILES
   -----------------------------------------------
   GitHub Pages on the free plan is PUBLIC — anyone with the
   link can see or download anything in these repos, even if
   it's not listed on this page. The "instructorOnly" flag below
   only ADDS A LABEL — it does not hide or protect the file.
   Keep answer keys, rubrics, or test banks in your LMS instead.
   ============================================================ */

const COURSES = [
  {
    id: "cti110",
    code: "CTI 110",
    name: "IT Foundations",                 // ← edit to your real course title if different
    accent: "teal",
    description: "A place to learn IT foundations.",  // pulled from your repo's About text — edit as you like
    assignments: [
      {
        title: "Chapter 1 Lab Assignment",
        description: "Hello World and basic HTML tags",
        type: "Lab",
        week: "1",
        updated: "2026-07-28",              // ← set to the real date if you want it exact
        href: "Chapter1LabAssignment.html",  // lives right here in this repo
        instructorOnly: false
      },
      {
        title: "Chapter 1 Troubleshooting",
        description: "Diagnosing and fixing common issues",
        type: "Lab",
        week: "1",
        updated: "2026-07-28",
        href: "Chapter1_TroubleShooting.html",
        instructorOnly: false
      },
     
    ]
  },

  /* ------------------------------------------------------------
     EXAMPLE: a second class living in its OWN separate repo.
     Once you create and deploy "Windows11Labs" (or whatever you
     name it), replace these placeholder URLs with the real ones.
     ------------------------------------------------------------ */
  {
    id: "windows11",
    code: "NOS 130",
    name: "Introduction to Windows 11",
    accent: "indigo",
    description: "Hardware, file/memory management, configuration, and utilities at the support level.",
    assignments: [
     {
       title: "Tentative Schedule — Fall 2026",
       description: "Course schedule",
       type: "Schedule",
       week: "—",
        updated: "2026-08-13",
        href: "NOS_130_Tentative_Schedule_FA26.docx",
        reinstructorOnly: false
},
      {
        title: "Chapter 1 Deep Dive Supplement",
        description: "Lecture notes beyond the textbook",
        type: "Reading",
        week: "1",
        updated: "2026-08-03",
        href: "https://gabe0563.github.io/Windows11Labs/Chapter1_Deep_Dive_Supplement.md", // ← placeholder
        instructorOnly: false
      },
        {
        title: "Chapter 1 Quiz",
        description: "15 questions, instant feedback",
        type: "Quiz",
        week: "1",
        updated: "2026-08-13",
        href: "Chapter1_Quiz.html",   // or the full URL if it's in a different repo
        instructorOnly: false
      },
      {
        title: "Lab 1 Answer Key & Rubric",
        description: "Grading guide — instructor use",
        type: "Key",
        week: "1",
        updated: "2026-08-06",
        href: "#",   // ← do NOT host this on GitHub Pages — see the privacy note above. Point this at your LMS instead.
        instructorOnly: true
      }
    ]
  }
];
