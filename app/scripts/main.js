$(function() {
  // 01. Handle sidebar submenus
  const menuLinks = $('.sidebar__menu-link');
  menuLinks.on('click', function() {
    const clickedItem = $(this);
    clickedItem.toggleClass('active');
    clickedItem
      .parent('.sidebar__menu-item')
      .siblings()
      .children('.sidebar__menu-link')
      .removeClass('active');
  });

  const subMenuLinks = $('.sidebar__submenu-link');
  subMenuLinks.on('click', function() {
    const clickedItem = $(this);

    clickedItem.toggleClass('active');
    clickedItem
      .parent('.sidebar__submenu-item')
      .siblings()
      .children()
      .removeClass('active');

    clickedItem
      .parents('.sidebar__menu-item')
      .siblings()
      .find('.sidebar__submenu-link')
      .removeClass('active');
  });
});
