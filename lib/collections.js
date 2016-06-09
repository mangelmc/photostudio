PEDIDOS = new Mongo.Collection("Pedidos");
PEDIDOS.allow({
	"insert":function(){	
		return true;
	}
});

var Schemas={}
Schemas.PEDIDOS=new SimpleSchema({
		image:
		{
			type:String,
			label:"url"
		},
		current_date:{
			type:Date,
			label:"Fecha",
			autoValue:function(){
				return new Date();
			}
		},
		cliente:{
			type:String,
			label:"cliente",
			autoValue:function()
			{
				return Accounts.user().profile.name;
			}
			
		},
		recorte:{
			type:String,
			label:"recorte"
		},
		saturacion:{
			type:String,
			label:"saturacion"
		},
		brillo:{
			type:String,
			label:"brillo"
		},
		sombra:{
			type:String,
			label:"sombra"
		},
		retoque:{
			type:String,
			label:"retoque"
		},
});
PEDIDOS.attachSchema(Schemas.PEDIDOS);

PEDIDOS.helpers({
		cliente(){
			var aux=Meteor.users.findOne({_id:this.cliente});
			if(aux!=undefined)
			{
				if(aux.name!=undefined)
				{
					return 	aux.username
				}else{
					return aux.profile.name;
				}
			}else{
				return "FALLO!";

			}
			
		}
	});