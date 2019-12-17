$(function() {
  // 01. Handle sidebar submenus
  const menuLinks = $('.sidebar__menu-link');
  menuLinks.on('click', function() {
    $(this).toggleClass('active');
    $(this)
      .parent('.sidebar__menu-item')
      .siblings()
      .children('.sidebar__menu-link')
      .removeClass('active');
  });
});
