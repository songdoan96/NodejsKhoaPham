function Car(l,g){
	this.Loai = l;
	this.Gia = g;
}
Car.prototype.info = function(){
	console.log("Ten: "+this.Loai+", "+"Gia: " + this.Gia);
}
var d = new Car("Yamaha",1000);
d.info();
