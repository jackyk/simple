import { Template } from 'meteor/templating';
import{ Tasks } from 'meteor/templating'; 

import './body.html';
 
Template.body.helpers({
  tasks(){
    return Tasks.find({});
  }
});