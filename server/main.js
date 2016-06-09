import { Meteor } from 'meteor/meteor';

//file:/server/init.js
Meteor.startup(function () {
  UploadServer.init({
    tmpDir: process.cwd() + '../../../../../../.tmp/',
    uploadDir: process.cwd() + '../../../../../../.uploads/',
    checkCreateDirectories: true,
    
    finished: function(fileInfo, formFields) {
      // perform a disk operation
    },
  });

  /*Meteor.publish("users",function(){
		return Meteor.users.find();
	})*/
});