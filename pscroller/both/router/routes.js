/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase',
  trackPageView: true
});

Router._scrollToHash = function(hash) {
  var section = $(hash);
  if (section.length) {
    var sectionTop = section.offset().top;
    $("html, body").animate({
      scrollTop: sectionTop
    }, "slow");
  }
};

beforeHooks = {
 isLoggedIn: function(){
if (! Meteor.userId()) {
    Router.go('login');
    //this.next();
  } else {
    this.next();
  }
}};


 //Router.onBeforeAction(beforeHooks.isLoggedIn);
 Router.onBeforeAction(beforeHooks.isLoggedIn, {only: ['about']});






Router.map(function () {
  this.route('overview', {path: '/'});
this.route('register', {path: '/accounts/register'});
  this.route('login', {path: '/accounts/login'});
  
});


// onBeforeAction: function() {
//     //Session.setDefault('contactFormButtonMessage', 'Send Message');
//     Session.setDefault('contactNameError', null);
//     Session.setDefault('contactEmailError', null);
//     Session.setDefault('contactMessageError', null);   
//     this.next();
//   },

