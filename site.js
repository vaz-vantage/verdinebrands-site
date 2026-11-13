(function () {
  var header = document.querySelector('.header');
  function onScroll() { header.classList.toggle('is-solid', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var items = [].slice.call(document.querySelectorAll('.rv'));
  function showAll() { items.forEach(function (el) { el.classList.add('in'); }); }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -5% 0px', threshold: 0.05 });
    items.forEach(function (el) { io.observe(el); });
    setTimeout(showAll, 3500);
    window.addEventListener('beforeprint', showAll);
  } else { showAll(); }

  [].forEach.call(document.querySelectorAll('[data-year]'), function (el) { el.textContent = new Date().getFullYear(); });
})();
