document.addEventListener('DOMContentLoaded', function () {
  var burger = document.getElementById('burgerBtn');
  var links = document.getElementById('navLinks');
  if (burger && links) {
    burger.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    if (q) {
      q.addEventListener('click', function () {
        item.classList.toggle('open');
      });
    }
  });

  // Portfolio filter (client-side show/hide, category comes from server-rendered data-cat)
  var filterBtns = document.querySelectorAll('.pf-btn');
  if (filterBtns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var cat = btn.getAttribute('data-cat');
        document.querySelectorAll('.pf-card').forEach(function (card) {
          var show = (cat === 'الكل') || (card.getAttribute('data-cat') === cat);
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }
});
