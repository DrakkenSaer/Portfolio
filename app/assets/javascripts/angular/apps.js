(function(){
  var app = angular.module('portfolio', []);

  app.controller("HomeController", function(){
  });

  app.controller("JobsController", function(){
    this.jobs = jobs;
  });
  
  var jobs = [];

  app.controller("MessagesController", function(){
  });
  
  app.controller("PhotosController", function(){
  });

  app.controller("ProjectsController", function(){
  });
  
  app.controller("ResumeController", function(){
  });  

  app.controller("LoginController", function(){
  });
  
  app.controller("PortfolioController", function(){
  });
})();