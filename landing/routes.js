Router.configure({
   layoutTemplate: 'landing'  //can be any template name
 });


Router.map(function () {
  this.route('home', {
    path: '/',
  });
  this.route('about');
  
});
