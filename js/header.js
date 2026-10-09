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

  // ============================================================
  // Global Twemoji flag support for Windows & cross-platform
  // ============================================================
  function parseAll(root) {
    if (window.twemoji) {
      var target = root || document.body;
      if (target) {
        window.twemoji.parse(target, { folder: 'svg', ext: '.svg' });
      }
    }
  }

  function setupTwemoji() {
    if (!window.twemoji) {
      var script = document.createElement('script');
      script.src = 'https://unpkg.com/twemoji@latest/dist/twemoji.min.js';
      script.crossOrigin = 'anonymous';
      script.onload = function() {
        parseAll();
        observeDOM();
      };
      document.head.appendChild(script);
    } else {
      parseAll();
      observeDOM();
    }
  }

  function observeDOM() {
    if (!window.MutationObserver || !document.body) return;
    var timer = null;
    var observer = new MutationObserver(function(mutations) {
      var hasNewText = false;
      for (var i = 0; i < mutations.length; i++) {
        var m = mutations[i];
        if (m.addedNodes && m.addedNodes.length > 0) {
          for (var j = 0; j < m.addedNodes.length; j++) {
            var node = m.addedNodes[j];
            if (node.nodeType === 1 && !node.classList.contains('emoji')) {
              hasNewText = true;
              break;
            }
          }
        }
        if (hasNewText) break;
      }
      if (hasNewText) {
        clearTimeout(timer);
        timer = setTimeout(function() {
          parseAll();
        }, 60);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupTwemoji);
  } else {
    setupTwemoji();
  }
  window.addEventListener('load', function() { parseAll(); });
  window.parseEmojis = parseAll;
})();
