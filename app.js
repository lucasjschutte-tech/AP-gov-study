/* ============================================================
   AP GOV STUDY — APP LOGIC
   Navigation, FRQ Grader, SCOTUS Explorer, Units
   ============================================================ */

// ─── NAVIGATION ─────────────────────────────────────────────
function initNav() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      showPage(link.dataset.target);
    });
  });

  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => showPage(el.dataset.nav));
  });
}

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  const page = document.getElementById(id);
  if (page) page.classList.add('active');

  const navLink = document.querySelector(`.nav-link[data-target="${id}"]`);
  if (navLink) navLink.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── FRQ GRADER ─────────────────────────────────────────────
let currentFRQ = null;

function typeLabel(type) {
  const map = {
    'concept-application': 'Concept Application',
    'quantitative-analysis': 'Quantitative Analysis',
    'scotus-comparison': 'SCOTUS Comparison',
    'argument-essay': 'Argument Essay'
  };
  return map[type] || type;
}

function typeBadgeClass(type) {
  return `frq-q-type type-${type}`;
}

function renderFRQList(filter = 'all') {
  const list = document.getElementById('frq-question-list');
  list.innerHTML = '';

  const questions = filter === 'all'
    ? FRQ_QUESTIONS
    : FRQ_QUESTIONS.filter(q => q.type === filter);

  questions.forEach(q => {
    const li = document.createElement('li');
    li.className = 'frq-question-item';
    li.dataset.id = q.id;
    li.innerHTML = `
      <span class="${typeBadgeClass(q.type)}">${typeLabel(q.type)}</span>
      <div class="frq-q-title">${q.title}</div>
      <div class="frq-q-pts">${q.totalPoints} point${q.totalPoints !== 1 ? 's' : ''} · ${q.parts.length} part${q.parts.length !== 1 ? 's' : ''}</div>
    `;
    li.addEventListener('click', () => loadFRQ(q.id));
    list.appendChild(li);
  });
}

function loadFRQ(id) {
  currentFRQ = FRQ_QUESTIONS.find(q => q.id === id);
  if (!currentFRQ) return;

  // Highlight selected
  document.querySelectorAll('.frq-question-item').forEach(li => {
    li.classList.toggle('selected', parseInt(li.dataset.id) === id);
  });

  // Hide results, show write area
  document.getElementById('frq-results').classList.add('hidden');
  document.getElementById('frq-prompt-box').classList.add('hidden');
  const writeArea = document.getElementById('frq-write-area');
  writeArea.classList.remove('hidden');

  // Meta info
  document.getElementById('frq-meta').innerHTML = `
    <h3>${currentFRQ.title}</h3>
    <div class="frq-type-badge">
      <span class="${typeBadgeClass(currentFRQ.type)}">${typeLabel(currentFRQ.type)}</span>
      <span style="color:var(--gray-400);font-size:0.78rem;">· ${currentFRQ.totalPoints} points total</span>
    </div>
  `;

  // Scenario + parts
  const partsEl = document.getElementById('frq-parts');
  partsEl.innerHTML = `
    <div class="frq-scenario">${currentFRQ.scenario}</div>
    ${currentFRQ.parts.map((part, i) => `
      <div class="frq-part" id="frq-part-${i}">
        <div class="frq-part-label">
          ${part.label}
          <span class="part-pts">${part.points} pt${part.points !== 1 ? 's' : ''}</span>
        </div>
        <div class="frq-part-prompt">${part.prompt}</div>
        <textarea
          id="frq-answer-${i}"
          placeholder="Write your response here..."
          rows="${part.points > 3 ? 10 : 4}"
        ></textarea>
      </div>
    `).join('')}
  `;
}

function gradeFRQ() {
  if (!currentFRQ) return;

  const results = currentFRQ.parts.map((part, i) => {
    const answer = (document.getElementById(`frq-answer-${i}`)?.value || '').toLowerCase().trim();
    const wordCount = answer.split(/\s+/).filter(Boolean).length;

    // Score based on keyword matching + minimum length
    let score = 0;
    let matchedKeywords = [];

    if (answer.length > 0 && wordCount >= 10) {
      const matches = part.keywords.filter(kw => answer.includes(kw.toLowerCase()));
      matchedKeywords = matches;

      const ratio = matches.length / part.keywords.length;

      if (part.label === 'Essay') {
        // Essay: multi-point rubric
        if (ratio >= 0.35 && wordCount >= 200) score = part.points;
        else if (ratio >= 0.25 && wordCount >= 120) score = Math.ceil(part.points * 0.65);
        else if (ratio >= 0.15 && wordCount >= 60) score = Math.ceil(part.points * 0.35);
        else score = 1;
      } else {
        // Single-point parts
        if (ratio >= 0.25 || matches.length >= 2) score = part.points;
        else if (ratio >= 0.1 || matches.length >= 1) score = Math.ceil(part.points * 0.5);
        else score = 0;
      }
    }

    return { part, score, matched: matchedKeywords, answer };
  });

  displayResults(results);
}

function displayResults(results) {
  const total = results.reduce((s, r) => s + r.score, 0);
  const maxTotal = currentFRQ.totalPoints;
  const pct = maxTotal > 0 ? total / maxTotal : 0;

  const scoreClass = pct >= 0.75 ? 'score-high' : pct >= 0.5 ? 'score-mid' : 'score-low';
  const scoreMsg = pct >= 0.75
    ? 'Strong response! Review model answers to perfect your answer.'
    : pct >= 0.5
    ? 'Partial credit. Expand your explanations and use more AP Gov terminology.'
    : 'Needs improvement. Study the model answers and key terms below.';

  document.getElementById('score-display').innerHTML = `
    <div class="score-circle ${scoreClass}">
      <span class="score-n">${total}</span>
      <span class="score-d">out of ${maxTotal}</span>
    </div>
    <div class="score-summary">
      <h4>${Math.round(pct * 100)}% — ${pct >= 0.75 ? 'Excellent' : pct >= 0.5 ? 'Developing' : 'Beginning'}</h4>
      <p>${scoreMsg}</p>
    </div>
  `;

  const breakdown = document.getElementById('score-breakdown');
  breakdown.innerHTML = results.map(r => {
    const partPct = r.part.points > 0 ? r.score / r.part.points : 0;
    const statusClass = partPct >= 1 ? 'earned' : partPct > 0 ? 'partial' : 'missed';
    const statusLabel = partPct >= 1 ? `${r.score}/${r.part.points} pt` : partPct > 0 ? `${r.score}/${r.part.points} pt (partial)` : `0/${r.part.points} pt`;
    const noAnswer = !r.answer || r.answer.trim().length < 5;

    return `
      <div class="score-part ${statusClass}">
        <div class="score-part-header">
          <span class="score-part-label">${r.part.label}: ${r.part.prompt.substring(0, 70)}...</span>
          <span class="score-part-pts">${statusLabel}</span>
        </div>
        <div class="score-feedback">
          ${noAnswer
            ? '<em>No response provided.</em>'
            : r.matched.length > 0
            ? `Key terms identified: <strong>${r.matched.slice(0, 5).join(', ')}</strong>.`
            : 'No key AP Gov terms identified. Use more specific vocabulary.'
          }
        </div>
        <div class="score-model-answer">
          <strong>Model Answer:</strong> ${r.part.modelAnswer}
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('frq-write-area').classList.add('hidden');
  document.getElementById('frq-results').classList.remove('hidden');
}

function initFRQ() {
  renderFRQList();

  document.getElementById('frq-type-filter').addEventListener('change', e => {
    renderFRQList(e.target.value);
  });

  document.getElementById('frq-grade-btn').addEventListener('click', gradeFRQ);

  document.getElementById('frq-reset-btn').addEventListener('click', () => {
    if (currentFRQ) loadFRQ(currentFRQ.id);
  });

  document.getElementById('frq-retry-btn').addEventListener('click', () => {
    if (currentFRQ) loadFRQ(currentFRQ.id);
  });

  document.getElementById('frq-new-btn').addEventListener('click', () => {
    currentFRQ = null;
    document.querySelectorAll('.frq-question-item').forEach(li => li.classList.remove('selected'));
    document.getElementById('frq-results').classList.add('hidden');
    document.getElementById('frq-write-area').classList.add('hidden');
    document.getElementById('frq-prompt-box').classList.remove('hidden');
  });
}

// ─── SCOTUS EXPLORER ────────────────────────────────────────
function renderSCOTUSCards(cases) {
  const grid = document.getElementById('scotus-grid');
  grid.innerHTML = '';

  if (cases.length === 0) {
    grid.innerHTML = '<p style="color:var(--gray-400);grid-column:1/-1;text-align:center;padding:2rem;">No cases match your search.</p>';
    return;
  }

  cases.forEach(c => {
    const card = document.createElement('div');
    card.className = 'case-card';
    card.innerHTML = `
      <div class="case-year">${c.year}</div>
      <div class="case-name">${c.name}</div>
      <div class="case-topic">${c.topic}</div>
      <div class="case-holding">${c.holding.substring(0, 120)}...</div>
      <div class="case-tags">
        <span class="case-tag unit-${c.unit}">Unit ${c.unit}</span>
        ${c.tags.slice(0, 2).map(t => `<span class="case-tag">${t}</span>`).join('')}
      </div>
    `;
    card.addEventListener('click', () => openCaseModal(c));
    grid.appendChild(card);
  });
}

function openCaseModal(c) {
  const modal = document.getElementById('case-modal');
  const content = document.getElementById('modal-content');

  const verdictClass = c.verdict || 'government-power';
  const verdictLabel = {
    'civil-liberties': '⚖️ Civil Liberties Protected',
    'government-power': '🏛️ Government Power Upheld',
    'individual-rights': '🗽 Individual Rights Expanded'
  }[verdictClass] || 'Landmark Decision';

  content.innerHTML = `
    <button class="modal-close" id="modal-close-btn">✕</button>
    <div class="modal-case-year">${c.year} · ${c.citation} · ${c.decision || ''}</div>
    <div class="modal-case-name">${c.name}</div>
    <div class="case-tags" style="margin-bottom:1rem;">
      <span class="case-tag unit-${c.unit}">Unit ${c.unit}</span>
      ${c.tags.map(t => `<span class="case-tag">${t}</span>`).join('')}
    </div>
    <span class="verdict-banner ${verdictClass}">${verdictLabel}</span>

    <div class="modal-section">
      <h4>Background</h4>
      <p>${c.background}</p>
    </div>
    <div class="modal-section">
      <h4>Constitutional Question</h4>
      <p>${c.question}</p>
    </div>
    <div class="modal-section">
      <h4>Holding</h4>
      <p>${c.holding}</p>
    </div>
    <div class="modal-section">
      <h4>Significance</h4>
      <ul>${c.significance.map(s => `<li>${s}</li>`).join('')}</ul>
    </div>
    <div class="exam-tip">${c.examTip}</div>
  `;

  modal.classList.remove('hidden');

  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
}

function closeModal() {
  document.getElementById('case-modal').classList.add('hidden');
}

function initSCOTUS() {
  renderSCOTUSCards(SCOTUS_CASES);

  // Search
  const searchInput = document.getElementById('scotus-search');
  searchInput.addEventListener('input', filterCases);

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterCases();
    });
  });

  // Close modal on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

function filterCases() {
  const query = document.getElementById('scotus-search').value.toLowerCase();
  const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';

  let filtered = SCOTUS_CASES;

  if (activeFilter !== 'all') {
    filtered = filtered.filter(c => c.unit === parseInt(activeFilter));
  }

  if (query) {
    filtered = filtered.filter(c =>
      c.name.toLowerCase().includes(query) ||
      c.topic.toLowerCase().includes(query) ||
      c.tags.some(t => t.toLowerCase().includes(query)) ||
      c.holding.toLowerCase().includes(query) ||
      c.background.toLowerCase().includes(query) ||
      String(c.year).includes(query)
    );
  }

  renderSCOTUSCards(filtered);
}

// ─── UNITS PAGE ──────────────────────────────────────────────
function initUnits() {
  const grid = document.getElementById('units-grid');
  UNIT_DATA.forEach(u => {
    const card = document.createElement('div');
    card.className = 'unit-card';
    card.innerHTML = `
      <div class="unit-header ${u.colorClass}">
        <div>
          <div class="unit-num">Unit ${u.unit} · ${u.examWeight}</div>
          <div class="unit-title">${u.icon} ${u.title}</div>
        </div>
      </div>
      <div class="unit-body">
        <h4>Key Topics</h4>
        <ul class="unit-topics">
          ${u.topics.map(t => `<li>${t}</li>`).join('')}
        </ul>
        <div class="unit-tip">${u.tip}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ─── INIT ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initFRQ();
  initSCOTUS();
  initUnits();
});
