RegisterController = RouteController.extend({
  yieldTemplates: {
    'Header': {to: 'Header'},
    'Footer': {to: 'Footer'}
  },    
  
  
  waitOn: function () {
  },

  data: function () {
  },

  action: function () {
    this.render('Register');
    
  },
  
  onBeforeAction: function() {
     this.next();
  },
     
});
