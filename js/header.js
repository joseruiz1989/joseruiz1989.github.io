/* ============================================================
   SHARED HEADER COMPONENT
   Jose Ruiz Portfolio
   Usage: include this script in each HTML page.
   Call: renderHeader('home') with the active page key.
   ============================================================ */

(function() {
  function renderHeader(activePage) {
    var pages = {
      home:         { href: 'index.html',        label: 'Home' },
      about:        { href: 'about.html',         label: 'About' },
      projects:     { href: 'projects.html',      label: 'Projects' },
      publications: { href: 'publications.html',  label: 'Publications' },
      timeline:     { href: 'timeline.html',      label: 'Timeline' },
      contact:      { href: 'contact.html',       label: 'Contact' }
    };

    function navItem(key) {
      var p = pages[key];
      var isActive = (key === activePage) ? ' active' : '';
      return '<li class="nav-item' + isActive + '"><a class="nav-link" href="' + p.href + '">' + p.label + '</a></li>';
    }

    var html = '\
<header class="header_area">\
  <div class="main_menu">\
    <nav class="navbar navbar-expand-lg navbar-light">\
      <div class="container">\
        <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt="Jose Ruiz"></a>\
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"\
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\
          <span class="icon-bar"></span>\
          <span class="icon-bar"></span>\
          <span class="icon-bar"></span>\
        </button>\
        <div class="collapse navbar-collapse offset" id="navbarSupportedContent">\
          <ul class="nav navbar-nav menu_nav justify-content-end">\
            ' + navItem('home') + '\
            ' + navItem('about') + '\
            ' + navItem('projects') + '\
            ' + navItem('publications') + '\
            ' + navItem('timeline') + '\
            ' + navItem('contact') + '\
          </ul>\
        </div>\
      </div>\
    </nav>\
  </div>\
</header>';

    var placeholder = document.getElementById('header-placeholder');
    if (placeholder) {
      placeholder.outerHTML = html;
    }
  }

  window.renderHeader = renderHeader;
})();
