import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   }
// });


// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
//----------------------------------------------------------------------------
// Template.globalHelperExample.helpers({
// 	foods:function(){
// 		return [{
// 			selected:"no",
// 			name:"烤肉"
// 		},
// 		{
// 			selected:"yes",
// 			name:"烤鸭"
// 		},
// 		{
// 			selected:"no",
// 			name:"火锅"
// 		}];
// 	}
// });
//----------------------------------------------------------------------------
// Template.outside.events({
// 	'click button' : function(event, template){
// 		alert('outside');
// 		$('body').css('background-color','red');
// 	}
// });

// Template.inside.events({
// 	'click button' : function(event, template){
// 		alert('inside');
// 		event.stopImmediatePropagation();
// 		$('body').css('background-color','blue');
// 	}
// });
//-----------------------------------------------------------
Template.linktest.events({
	'click a':function(event,template){
		event.preventDefault();
	}
})