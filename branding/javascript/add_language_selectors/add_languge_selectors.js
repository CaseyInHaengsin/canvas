/* add_language_selectors.js
 * by: Danny Wahl danny@instructure.com
 * Working as of 07/07/2018
 * This script adds language selectors to the
 * global and sidebar navigation.
 * This is a proof of concept and switches between
 * English (en) and Français Canadien (fr-CA).
 */

$(function() {
  var locale = ENV.LOCALE;
  console.log('locale', locale);
  var french = 'Français';
  var english = 'English';
  var translateIcon =
    '<!--// Translate Icon CC BY Icon54 (Icon54.com) //--><svg class="ic-icon-svg ic-icon-svg--translate" style="enable-background:new 0 0 24 24;" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path d="M17,20H2.5C1.122,20,0,18.878,0,17.5v-15C0,1.122,1.122,0,2.5,0h8c0.214,0,0.404,0.136,0.473,0.338l6.5,19    c0.052,0.152,0.027,0.321-0.066,0.452C17.313,19.922,17.162,20,17,20z M2.5,1C1.673,1,1,1.673,1,2.5v15C1,18.327,1.673,19,2.5,19    h13.8L10.143,1H2.5z"/></g><g><path d="M21.5,24h-8c-0.208,0-0.395-0.129-0.468-0.324l-1.5-4c-0.097-0.259,0.034-0.547,0.292-0.644    c0.259-0.096,0.547,0.034,0.644,0.292L13.847,23H21.5c0.827,0,1.5-0.673,1.5-1.5v-15C23,5.673,22.327,5,21.5,5H12    c-0.276,0-0.5-0.224-0.5-0.5S11.724,4,12,4h9.5C22.878,4,24,5.122,24,6.5v15C24,22.878,22.878,24,21.5,24z"/></g><g><path d="M13.5,24c-0.117,0-0.234-0.041-0.329-0.124c-0.208-0.182-0.229-0.498-0.047-0.706l3.5-4    c0.182-0.209,0.498-0.229,0.706-0.047c0.208,0.182,0.229,0.498,0.047,0.706l-3.5,4C13.777,23.942,13.639,24,13.5,24z"/></g><g><path d="M9.5,14c-0.206,0-0.398-0.127-0.471-0.332L7,7.987l-2.029,5.681c-0.093,0.26-0.38,0.396-0.639,0.303    c-0.26-0.093-0.396-0.379-0.303-0.639l2.5-7c0.142-0.398,0.8-0.398,0.941,0l2.5,7c0.093,0.26-0.042,0.546-0.303,0.639    C9.613,13.991,9.556,14,9.5,14z"/></g><g><path d="M8,11H6c-0.276,0-0.5-0.224-0.5-0.5S5.724,10,6,10h2c0.276,0,0.5,0.224,0.5,0.5S8.276,11,8,11z"/></g><g><path d="M21.5,11h-7c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h7c0.276,0,0.5,0.224,0.5,0.5S21.776,11,21.5,11z"/></g><g><path d="M17.5,11c-0.276,0-0.5-0.224-0.5-0.5v-1C17,9.224,17.224,9,17.5,9S18,9.224,18,9.5v1C18,10.776,17.776,11,17.5,11z"/></g><g><path d="M16,17c-0.157,0-0.311-0.073-0.408-0.21c-0.16-0.225-0.107-0.537,0.118-0.697c2.189-1.555,3.79-4.727,3.79-5.592    c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5c0,1.318-1.927,4.785-4.21,6.408C16.202,16.97,16.101,17,16,17z"/></g><g><path d="M20,18c-0.121,0-0.242-0.043-0.337-0.131c-0.363-0.332-3.558-3.283-4.126-4.681c-0.104-0.256,0.02-0.547,0.275-0.651    c0.253-0.103,0.547,0.019,0.651,0.275c0.409,1.007,2.936,3.459,3.875,4.319c0.204,0.187,0.217,0.502,0.031,0.707    C20.27,17.945,20.135,18,20,18z"/></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>';
  var toLangText = '';
  if (locale == 'en') {
    toLangText = french;
  } else {
    toLangText = english;
  }

  var insertGlobalNavIcon = function() {
    if ($('#menu').length) {
      var globalNavTranslateItem =
        '<li class="menu-item ic-app-header__menu-list-item"><a id="global_nav_translate_link" href="#" class="ic-app-header__menu-list-link translatePage"><div class="menu-item-icon-container" aria-hidden="true">' +
        translateIcon +
        '</div><div class="menu-item__text">' +
        toLangText +
        '</div></a></li>';
      $('#menu li:last-child').before(globalNavTranslateItem);
      console.log('Translator added to global menu.');
    } else {
      console.log('No global menu on this page, will not load nav translator.');
    }
  };
  insertGlobalNavIcon();

  var insertSidebarLinks = function() {
    if ($('#right-side').length) {
      var sidebarTranslateItem =
        '<a class="btn button-sidebar-wide" href="#" id="sidebar_translate_link">' +
        translateIcon +
        toLangText +
        '</a>';
      $('#right-side').append(sidebarTranslateItem);
      var sidebarIconStyle =
        '<style>#sidebar_translate_link svg {height:16px;position:relative;top:2px;margin-right:3px;}</style>';
      $('head').append(sidebarIconStyle);
      console.log('Translator added to sidebar');
    } else {
      console.log(
        'No right side on this page, will not load sidebar translator.'
      );
    }
  };
  insertSidebarLinks();

  $('#global_nav_translate_link, #sidebar_translate_link').on('click', function(
    event
  ) {
    event.preventDefault();
    if (locale == 'en') {
      changeLocale('fr-CA');
    } else {
      changeLocale('en');
    }
  });

  var changeLocale = function(toLang) {
    var toLang = toLang;
    //AJAX stuff
    $.ajax({
      type: 'PUT',
      url: '/api/v1/users/self',
      data: { 'user[locale]': toLang }
    })
      .done(function(msg) {
        location.reload();
      })
      .fail(function(msg) {
        console.log('Unable to change locale, exiting.');
        console.log(msg);
      });
  };
});
