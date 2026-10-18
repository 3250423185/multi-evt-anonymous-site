(() => {
  'use strict';
  const P = window.PROJECT;
  if (!P) return;
  const $ = id => document.getElementById(id);
  const el = (tag, className, text) => { const n = document.createElement(tag); if (className) n.className = className; if (text !== undefined) n.textContent = text; return n; };
  const text = (id, value) => { $(id).textContent = value; };
  const localAsset = value => typeof value === 'string' && /^assets\/[a-zA-Z0-9_./-]+$/.test(value) && !value.split('/').includes('..');
  const resourceUrl = value => {
    if (localAsset(value)) return value;
    try { const u = new URL(value); if (u.protocol === 'https:' && u.hostname === 'anonymous.4open.science' && /^\/(r|w)\//.test(u.pathname) && !u.username && !u.password) return u.href; } catch {}
    return '';
  };
  const icons = {
    paper: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h4M9 12h6M9 16h6"/>',
    supplement: '<rect x="5" y="5" width="14" height="16" rx="2"/><path d="M9 5V3h6v2M9 11h6M9 15h6"/>',
    code: '<path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18"/>'
  };
  function icon(type) { const span = el('span'); span.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (icons[type] || icons.paper) + '</svg>'; return span.firstElementChild; }
  function image(src, alt, className) { const img = el('img', className); if (localAsset(src)) img.src = src; img.alt = alt || ''; img.loading = 'lazy'; img.addEventListener('error', () => { img.replaceWith(el('p', 'media-error', 'This media file is unavailable. Please check the asset path.')); }, { once: true }); return img; }
  document.title = P.name + ' | Anonymous project page';
  text('project-name', P.name); text('project-subtitle', P.subtitle); text('hero-kicker', P.kicker); text('hero-summary', P.summary);
  $('draft-note').hidden = !P.showPlaceholderNotice; text('draft-text', P.placeholderNotice);
  if (localAsset(P.teaser.src)) $('teaser-image').src = P.teaser.src;
  $('teaser-image').alt = P.teaser.alt; text('teaser-label', P.teaser.label); text('teaser-caption', P.teaser.caption); text('abstract-copy', P.abstract);
  P.takeaways.forEach(t => { const box = el('div', 'takeaway'); box.append(el('span', 'eyebrow', t.label), el('h3', '', t.title), el('p', '', t.text)); $('takeaways').append(box); });
  P.resources.forEach(r => {
    const url = resourceUrl(r.href);
    const button = el(url ? 'a' : 'button', 'resource-button' + (url ? ' available' : ''));
    button.append(icon(r.icon), el('span', '', r.label));
    if (url) { button.href = url; button.target = '_blank'; button.rel = 'noopener noreferrer'; }
    else { button.type = 'button'; button.disabled = true; button.title = 'This material has not been added yet'; button.append(el('span', 'soon', 'SOON')); }
    $('hero-resources').append(button);
    const row = el('div', 'resource-row'); const symbol = el('span', 'resource-icon'); symbol.append(icon(r.icon));
    const content = el('div'); content.append(el('h3', '', r.label), el('p', '', r.detail));
    const action = el(url ? 'a' : 'span', 'resource-action', url ? 'Open material ↗' : 'Coming soon');
    if (url) { action.href = url; action.target = '_blank'; action.rel = 'noopener noreferrer'; action.setAttribute('aria-label', 'Open ' + r.label); }
    row.append(symbol, content, action); $('resource-list').append(row);
  });
  text('demos-note', P.demos.note); text('demos-intro', P.demos.intro); text('media-footnote', P.demos.footnote);
  const dialog = $('media-dialog'); let previousFocus;
  function mediaNode(item, expanded) {
    if (item.type !== 'video') return image(item.src, item.alt);
    const video = el('video');
    if (localAsset(item.src)) video.src = item.src;
    if (localAsset(item.poster)) video.poster = item.poster;
    video.preload = 'metadata'; video.playsInline = true; video.controls = expanded; video.muted = true;
    video.setAttribute('aria-label', item.alt || item.title);
    video.addEventListener('error', () => { video.replaceWith(el('p', 'media-error', 'Video unavailable. Check the MP4 path and file size.')); }, { once: true });
    return video;
  }
  function openMedia(item) { previousFocus = document.activeElement; text('dialog-title', item.title); text('dialog-caption', item.description); $('dialog-media').replaceChildren(mediaNode(item, true)); dialog.showModal(); }
  const close = () => dialog.close();
  dialog.querySelector('.close-dialog').addEventListener('click', close);
  dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) close(); } });
  dialog.addEventListener('close', () => { dialog.querySelector('video')?.pause(); $('dialog-media').replaceChildren(); previousFocus?.focus(); });
  function selectCategory(index) {
    const category = P.demos.categories[index];
    [...$('demo-tabs').children].forEach((tab, i) => { tab.setAttribute('aria-selected', String(index === i)); tab.tabIndex = i === index ? 0 : -1; });
    $('demo-panel').setAttribute('aria-labelledby', 'demo-tab-' + index); $('demo-grid').replaceChildren();
    category.items.forEach(item => {
      const card = el('article', 'demo-card'); const button = el('button', 'media-button'); button.type = 'button'; button.setAttribute('aria-label', 'Expand ' + item.title);
      const badge = el('span', 'expand-badge', item.type === 'video' ? '▷' : '↗'); badge.setAttribute('aria-hidden', 'true');
      button.append(mediaNode(item, false), badge); button.addEventListener('click', () => openMedia(item));
      card.append(button, el('span', 'demo-label', item.label), el('h3', '', item.title), el('p', '', item.description)); $('demo-grid').append(card);
    });
  }
  P.demos.categories.forEach((c, i) => {
    const tab = el('button', '', c.label); tab.type = 'button'; tab.id = 'demo-tab-' + i; tab.setAttribute('role', 'tab'); tab.setAttribute('aria-controls', 'demo-panel');
    tab.addEventListener('click', () => selectCategory(i));
    tab.addEventListener('keydown', event => {
      const count = P.demos.categories.length; let next;
      if (event.key === 'ArrowRight') next = (i + 1) % count;
      else if (event.key === 'ArrowLeft') next = (i - 1 + count) % count;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = count - 1;
      if (next !== undefined) { event.preventDefault(); selectCategory(next); $('demo-tab-' + next).focus(); }
    }); $('demo-tabs').append(tab);
  });
  if (P.demos.categories.length) selectCategory(0);
  text('method-intro', P.method.intro); text('method-caption', P.method.caption);
  if (localAsset(P.method.src)) $('method-image').src = P.method.src;
  $('method-image').alt = P.method.alt;
  P.method.steps.forEach((s, i) => { const box = el('div', 'method-step'); box.append(el('span', 'step-number', String(i + 1).padStart(2, '0')), el('h3', '', s.title), el('p', '', s.text)); $('method-steps').append(box); });
  text('results-intro', P.results.intro); text('results-note', P.results.note); text('results-caption', P.results.caption); text('limitations', P.results.limitations);
  const displayValue = v => typeof v === 'number' && Number.isFinite(v) ? String(v) : '—';
  P.results.metrics.forEach((metric, i) => {
    const panel = el('div', 'metric-panel'); panel.append(el('h3', '', metric.label), el('span', 'metric-direction', metric.direction));
    P.results.rows.forEach(row => {
      const value = row.values[i]; const missing = displayValue(value) === '—'; const node = el('div', 'metric-row' + (row.highlight ? ' highlight' : ''));
      const label = el('div', 'metric-row-label'); label.append(el('span', '', row.method), el('span', '', displayValue(value)));
      const track = el('div', 'bar-track' + (missing ? ' empty' : '')); track.setAttribute('aria-hidden', 'true');
      if (!missing) { const bar = el('div', 'bar-fill'); const max = Number(metric.max) > 0 ? Number(metric.max) : 100; bar.style.width = Math.min(100, Math.max(0, value / max * 100)) + '%'; track.append(bar); }
      node.append(label, track); panel.append(node);
    }); $('results-chart').append(panel);
  });
  const head = el('tr'); head.append(el('th', '', 'Method')); P.results.metrics.forEach(m => head.append(el('th', '', m.label + ' ' + (m.direction || ''))));
  [...head.children].forEach(th => th.scope = 'col'); $('results-table-head').append(head);
  P.results.rows.forEach(row => { const tr = el('tr', row.highlight ? 'highlight' : ''); const heading = el('th', '', row.method); heading.scope = 'row'; tr.append(heading); P.results.metrics.forEach((_, i) => tr.append(el('td', '', displayValue(row.values[i])))); $('results-table-body').append(tr); });
  function showTable(table) { $('results-chart').hidden = table; $('results-table-wrap').hidden = !table; $('chart-toggle').setAttribute('aria-pressed', String(!table)); $('table-toggle').setAttribute('aria-pressed', String(table)); }
  $('chart-toggle').addEventListener('click', () => showTable(false)); $('table-toggle').addEventListener('click', () => showTable(true));
  text('citation-text', P.citation);
  $('copy-citation').addEventListener('click', async () => {
    try { if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable'); await navigator.clipboard.writeText(P.citation); text('copy-status', 'Copied to clipboard.'); }
    catch { const selection = window.getSelection(); const range = document.createRange(); range.selectNodeContents($('citation-text')); selection.removeAllRanges(); selection.addRange(range); text('copy-status', 'Citation selected. Press Ctrl+C (or Command+C) to copy.'); }
  });
  const sections = [...document.querySelectorAll('main > section')];
  function updateProgress() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    document.querySelector('.scroll-progress').style.width = (scrollable > 0 ? Math.min(100, window.scrollY / scrollable * 100) : 0) + '%';
    let active = sections[0]?.id;
    for (const section of sections) if (section.getBoundingClientRect().top < 190) active = section.id;
    document.querySelectorAll('.page-index a').forEach(a => { const current = a.hash === '#' + active; a.classList.toggle('active', current); if (current) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); });
  }
  let scheduled = false;
  window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(() => { updateProgress(); scheduled = false; }); } }, { passive: true });
  window.addEventListener('resize', updateProgress); updateProgress();
})();
