const writings = [
  {
    id: "essay-1",
    type: "letter",
    title: "Reading the Signals Before the Crisis",
    date: "2026-03-02",
    readingTime: "8 min read",
    tags: ["signals", "risk", "diagnostics", "systems"],
    summary:
      "Most breakdowns don’t begin with failure. They begin with friction—small increases in effort, workarounds, and escalation that quietly turn into drift. A simple diagnostic lens for leaders who want room to act before the organisation is cornered.",
  },
  {
    id: "essay-2",
    type: "letter",
    title: "Making Decisions Without Clarity",
    date: "2026-03-03",
    readingTime: "8 min read",
    tags: ["decision-making", "uncertainty", "judgement"],
    summary:
      "Why real decisions are usually made under incomplete information—and how to build a practical decision posture: what to stabilise, what to test, what to commit to, and what to stop.",
  },
  {
    id: "essay-3",
    type: "letter",
    title: "The Game Beneath the Behaviour",
    date: "2026-03-04",
    readingTime: "7 min read",
    tags: ["incentives", "organisations", "behaviour"],
    summary:
      "Behaviour is rarely the mystery people think it is. Incentives, constraints, and informal rules shape what becomes rational—often more than values or motivation. A clear lens for diagnosing behaviour without moralising.",
  },
  {
    id: "essay-4",
    type: "letter",
    title: "The Cost of Coordination Failure",
    date: "2026-03-05",
    readingTime: "8 min read",
    tags: ["coordination", "alignment", "organisations", "systems"],
    summary:
      "Why organisations lose energy through duplication, rework, and escalation—and how coordination failure quietly becomes a tax on performance.",
  },
  {
    id: "essay-5",
    type: "letter",
    title: "Trust Is an Output, Not a Campaign",
    date: "2026-03-06",
    readingTime: "8 min read",
    tags: ["trust", "institutions", "reliability", "systems"],
    summary:
      "Trust is not built through messaging or morale campaigns. It emerges from reliability, fairness, repair, and predictable recourse.",
  },
  {
    id: "brief-1",
    type: "brief",
    title: "Executive Brief 001 — Coordination Risk Before Financial Symptoms",
    date: "2026-03-07",
    readingTime: "5 min read",
    tags: ["board", "governance", "coordination", "risk"],
    summary:
      "A board-level diagnostic on coordination risk, alignment drag, and early structural indicators that typically appear before financial symptoms.",
  },
  {
    id: "wp-1",
    type: "working-paper",
    title:
      "Working Paper 001 — This Is Not Disengagement: Rethinking Civic Life in African Cities",
    date: "2026-03-08",
    readingTime: "12 min read",
    tags: [
      "civic engagement",
      "urban governance",
      "african cities",
      "institutions",
    ],
    summary:
      "A conceptual paper arguing that civic engagement in African cities is often misread when narrow liberal-democratic frameworks are used to interpret complex, uneven, and improvised forms of public life.",
  },
  {
    id: "wp-2",
    type: "working-paper",
    title:
      "Working Paper 002 — Trust, Reliance, and Fragmented Authority in African Cities",
    date: "2026-03-09",
    readingTime: "13 min read",
    tags: ["trust", "public authority", "urban politics", "migration"],
    summary:
      "A diagnostic note on how trust and practical reliance diverge across plural authority systems, and what those differentiated patterns reveal about institutional life in African cities.",
  },
  {
    id: "wp-3",
    type: "working-paper",
    title:
      "Working Paper 003 — From Indicators to Worlds: Measuring Civic Life Under Fragmented Authority",
    date: "2026-03-10",
    readingTime: "14 min read",
    tags: ["methodology", "measurement", "civic life", "comparative analysis"],
    summary:
      "A methodological note arguing that indicators of participation and trust must be interpreted through institutional configuration, especially in fragmented or uneven governance environments.",
  },
];

const publications = [
  {
    category: "Journal article",
    citation:
      "Bule, K. & Landau, L.B. (2025). Mobility, diversity, and speculative racial capital: Navigating inclusion and exclusion in an African urban gateway. Third World Quarterly.",
    link: "https://doi.org/10.1080/01436597.2025.2507330",
    linkLabel: "DOI",
  },
  {
    category: "Book chapter",
    citation:
      "Landau, L. & Bule, K. (2026). City-Making in Africa’s Urban Estuaries: Rescaling African Urban Policy Analysis in an Era of Mobility. In Global Urban Policy: A Framework for Analyzing State and Society. University of Michigan Press.",
    link: null,
    linkLabel: null,
  },
  {
    category: "Forthcoming chapter",
    citation:
      "Bule, K. (forthcoming, 2026). Surveying Constellations and Corridors. In Atlas of Uncertainty: Transforming African Cityscapes.",
    link: null,
    linkLabel: null,
  },
  {
    category: "Forthcoming chapter",
    citation:
      "Landau, L.B., Wellman, E.I., & Bule, K. (forthcoming, 2026). Post-colonialism and Africa’s Urban Publics: A Speculative Statement on the Archipelagic Constitution of Civic Life. In Atlas of Uncertainty: Transforming African Cityscapes.",
    link: null,
    linkLabel: null,
  },
  {
    category: "Public commentary",
    citation:
      "Kanbi, C.T. & Bule, K. (2025). Learning from Africa’s adaptation: Urban life is being built not just through infrastructure, but through improvisation and social intelligence. Nature Africa.",
    link: null,
    linkLabel: null,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  setYear();
  renderWritingShelves();
  renderResearchShelf();
  renderPublications();
  loadWriting();
  activateRevealAnimations();
  activateScrollSpy();
  activateSmoothSectionLinks();
});

function setYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

function renderWritingShelves() {
  const list = document.getElementById("essay-list");
  if (!list) return;

  const sorted = [...writings].sort((a, b) => (a.date < b.date ? 1 : -1));
  const letters = sorted.filter((item) => item.type === "letter");
  const briefs = sorted.filter((item) => item.type === "brief");

  const lettersHtml = letters.length
    ? `
      <div class="tier-block reveal">
        <h3 class="tier-title">Insight Letters</h3>
        <div class="tier-grid">
          ${letters.map(renderCard).join("")}
        </div>
      </div>
    `
    : "";

  const briefsHtml = briefs.length
    ? `
      <div class="tier-block tier-briefs reveal">
        <h3 class="tier-title">Executive Briefs</h3>
        <div class="tier-grid">
          ${briefs.map(renderCard).join("")}
        </div>
      </div>
    `
    : "";

  list.innerHTML = `${lettersHtml}${briefsHtml}`;
}

function renderResearchShelf() {
  const list = document.getElementById("research-list");
  if (!list) return;

  const workingPapers = [...writings]
    .filter((item) => item.type === "working-paper")
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  if (!workingPapers.length) {
    list.innerHTML =
      '<p class="section-subtitle">No working papers yet. This shelf is being built.</p>';
    return;
  }

  list.innerHTML = `
    <div class="tier-block reveal">
      <h3 class="tier-title">Working Papers</h3>
      <div class="tier-grid">
        ${workingPapers.map(renderCard).join("")}
      </div>
    </div>
  `;
}

function renderCard(item) {
  const tagsHtml = (item.tags || [])
    .map((tag) => `<span class="tag">${escapeHtml(String(tag))}</span>`)
    .join("");

  const classMap = {
    letter: "essay-card",
    brief: "essay-card brief-card",
    "working-paper": "essay-card research-card",
  };

  const cardClass = classMap[item.type] || "essay-card";

  return `
    <article class="${cardClass}">
      <h3 class="essay-title">
        <a href="essay.html?id=${encodeURIComponent(item.id)}">${escapeHtml(
          item.title,
        )}</a>
      </h3>
      <p class="essay-meta">${escapeHtml(item.date)} · ${escapeHtml(
        item.readingTime,
      )}</p>
      <p class="essay-summary">${escapeHtml(item.summary)}</p>
      <div class="tags">${tagsHtml}</div>
    </article>
  `;
}

function renderPublications() {
  const list = document.getElementById("publication-list");
  if (!list) return;

  if (!publications.length) {
    list.innerHTML =
      '<p class="section-subtitle">Publication list coming soon.</p>';
    return;
  }

  list.innerHTML = publications
    .map(
      (pub) => `
      <article class="publication-item reveal">
        <p class="publication-category">${escapeHtml(pub.category)}</p>
        <p class="publication-citation">${escapeHtml(pub.citation)}</p>
        ${
          pub.link
            ? `<p class="publication-link-wrap">
                <a class="publication-link" href="${escapeAttribute(
                  pub.link,
                )}" target="_blank" rel="noopener noreferrer">${escapeHtml(
                  pub.linkLabel || "Link",
                )}</a>
              </p>`
            : ""
        }
      </article>
    `,
    )
    .join("");
}

function loadWriting() {
  const contentEl = document.getElementById("essay-content");
  const titleEl = document.getElementById("essay-title");
  const metaEl = document.getElementById("essay-meta");
  const kickerEl = document.querySelector(".essay-kicker");

  if (!contentEl || !titleEl || !metaEl) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    titleEl.textContent = "Piece not found";
    metaEl.textContent = "";
    if (kickerEl) kickerEl.textContent = "";
    contentEl.innerHTML = "<p>This page could not be located.</p>";
    return;
  }

  const item = writings.find((entry) => entry.id === id);

  if (!item) {
    titleEl.textContent = "Piece not found";
    metaEl.textContent = "";
    if (kickerEl) kickerEl.textContent = "";
    contentEl.innerHTML = "<p>This piece does not exist yet.</p>";
    return;
  }

  document.title = `${item.title} | Kabiri Bule`;
  titleEl.textContent = item.title;
  metaEl.textContent = `${item.date} · ${item.readingTime}`;

  if (kickerEl) {
    if (item.type === "brief") kickerEl.textContent = "Executive Brief";
    else if (item.type === "working-paper")
      kickerEl.textContent = "Working Paper";
    else kickerEl.textContent = "Insight Letter";
  }

  fetch(`${item.id}.html`)
    .then((response) => {
      if (!response.ok) throw new Error("Failed to load file");
      return response.text();
    })
    .then((html) => {
      contentEl.innerHTML = html;
    })
    .catch(() => {
      contentEl.innerHTML = "<p>There was an issue loading this piece.</p>";
    });
}

function activateRevealAnimations() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  items.forEach((item) => observer.observe(item));
}

function activateScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  const sections = document.querySelectorAll(".section-anchor[id]");

  if (
    !navLinks.length ||
    !sections.length ||
    !("IntersectionObserver" in window)
  ) {
    return;
  }

  const linkMap = new Map();
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href) linkMap.set(href.slice(1), link);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = linkMap.get(entry.target.id);
        if (!link) return;

        if (entry.isIntersecting) {
          navLinks.forEach((nav) => nav.classList.remove("is-active"));
          link.classList.add("is-active");
        }
      });
    },
    {
      threshold: 0.35,
      rootMargin: "-20% 0px -55% 0px",
    },
  );

  sections.forEach((section) => observer.observe(section));
}

function activateSmoothSectionLinks() {
  const sectionLinks = document.querySelectorAll('a[href^="#"]');

  sectionLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttribute(str) {
  return String(str).replace(/"/g, "&quot;");
}
