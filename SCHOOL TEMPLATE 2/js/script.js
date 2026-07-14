// Small JS for mobile nav toggle and year filler
document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');
  var year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      var isHidden = nav.getAttribute('aria-hidden') === 'false' ? false : true;
      if(isHidden){
        nav.setAttribute('aria-hidden','false');
      } else {
        nav.setAttribute('aria-hidden','true');
      }
    });
  }
});
