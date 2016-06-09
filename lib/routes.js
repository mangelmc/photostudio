//ID=new ReactiveVar("-1");

Router.configure({
	layoutTemplate:"principal"
});
Router.route("/",function(req,res){
	this.render("home");
});

Router.route("/foro",function(){
 	this.render("foro");
});
Router.route("/galery",function(){
 	this.render("galery");
});
Router.route("/about",function(){
 	this.render("about");
});
Router.route("/contact",function(){
 	this.render("contact");
});

Router.route("/uploads",function(){
	//eteor.subscribe("users");
 	this.render("uploads");
});