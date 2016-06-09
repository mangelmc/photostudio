URL=new ReactiveVar("");
 Uploader.finished = function(index, fileInfo, templateContext) {
 	URL.set(fileInfo.url);
 	//console.log(fileInfo);   
 }

Template.uploads.helpers({
	cliente:function(){

		//Facebook, Twitter, Google +, Linkedin, otros serivioc Auth
		if(Accounts.user().profile.name!=undefined)
		{
			return Accounts.user().profile.name;	
		}else{
			//desde nuestro propio registro
			return "FALLO!";
			//Accounts.user().profile.name;
		}
	},
	URL(){
		return URL.get();
	}
});

Template.uploads.events({
	"click #btnsend":function(e)
	{
		e.preventDefault();
		var r=$("#formupload").serializeObject();
		//var title=e.target.title.value;
		console.log(r);
		PEDIDOS.insert(r);
		
	}
});

