'use strict';
// Progressive enhancement: links, gallery images and FAQs work without JavaScript.
document.documentElement.classList.add('js');
document.getElementById('year').textContent = new Date().getFullYear();
const menu = document.querySelector('.menu');
const navigation = document.getElementById('navigation');
menu.hidden = false;
function closeMenu() { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => {
  const open = !navigation.classList.contains('open');
  navigation.classList.toggle('open', open);
  menu.setAttribute('aria-expanded', String(open));
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menu.focus(); } });
const items = Array.from(document.querySelectorAll('.gallery-item'));
const filters = document.querySelector('.filters');
const count = document.querySelector('.gallery-count');
filters.hidden = false;
count.hidden = false;
filters.addEventListener('click', event => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  items.forEach(item => { item.hidden = button.dataset.filter !== 'all' && item.dataset.category !== button.dataset.filter; });
  count.textContent = `${items.filter(item => !item.hidden).length} images`;
});
const viewer = document.querySelector('.lightbox');
const largeImage = document.getElementById('large-image');
const caption = document.getElementById('image-caption');
const imageNumber = document.getElementById('image-number');
let activeImage = 0;
let imageOpener = null;
function visibleImages() { return items.filter(item => !item.hidden); }
function showImage(index) {
  const visible = visibleImages();
  activeImage = (index + visible.length) % visible.length;
  const item = visible[activeImage];
  largeImage.src = item.querySelector('a').href;
  largeImage.alt = item.querySelector('img').alt;
  caption.textContent = item.querySelector('figcaption').firstChild.textContent;
  imageNumber.textContent = `${activeImage + 1} / ${visible.length}`;
}
if (typeof viewer.showModal === 'function') {
  document.querySelector('.gallery-grid').addEventListener('click', event => {
    const link = event.target.closest('.gallery-open');
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    imageOpener = link;
    showImage(visibleImages().indexOf(link.closest('.gallery-item')));
    viewer.showModal();
    document.body.classList.add('viewer-open');
    document.getElementById('close-image').focus();
  });
  document.getElementById('close-image').addEventListener('click', () => viewer.close());
  document.getElementById('previous-image').addEventListener('click', () => showImage(activeImage - 1));
  document.getElementById('next-image').addEventListener('click', () => showImage(activeImage + 1));
  viewer.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); showImage(activeImage + (event.key === 'ArrowLeft' ? -1 : 1)); }
  });
  viewer.addEventListener('click', event => { if (event.target === viewer) { const bounds = viewer.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) viewer.close(); } });
  viewer.addEventListener('close', () => { document.body.classList.remove('viewer-open'); if (imageOpener) imageOpener.focus(); largeImage.removeAttribute('src'); });
}
const quoteForm = document.getElementById('quote-form');
quoteForm.hidden = false;
quoteForm.addEventListener('submit', event => {
  event.preventDefault();
  const fields = new FormData(quoteForm);
  const customerName = String(fields.get('customerName') || '').trim();
  const vehicle = String(fields.get('vehicle') || '').trim();
  const windows = String(fields.get('windows') || '').trim();
  const notes = String(fields.get('notes') || '').trim();
  if (!customerName || !vehicle || !windows) { quoteForm.reportValidity(); return; }
  const message = `Hello ProVent AutoFilm, I would like a window tinting quotation.\n\nName: ${customerName}\nVehicle make and model: ${vehicle}\nWindows to tint: ${windows}${notes ? `\nAdditional details: ${notes}` : ''}\n\nI can attach a photograph of my vehicle here.`;
  window.location.assign(`https://wa.me/35056020548?text=${encodeURIComponent(message)}`);
});
