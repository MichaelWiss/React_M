import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';


Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('links', function() {
     return Links.find({});
  });
});

WebApp.connectHandlers
  .user(req => console.log(req));
  
