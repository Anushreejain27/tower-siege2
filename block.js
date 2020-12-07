class block{
constructor(x,y){
var options={
isStatic:false,
restitution : 0.2,
friction : 1.2,
 density : 0.01,
visiblity:255


}
this.visiblity=255
this.body=Bodies.rectangle(x,y,45,55,options)
this.width=45
this.height=55
World.add(world,this.body)
}

display(){
if (this.body.speed<3){
push()
rectMode(CENTER)
//fill("yellow")
stroke("white")
fill("black")
strokeWeight(4)
//tint(255, 126)
rect(this.body.position.x,this.body.position.y,this.width,this.height)
pop()
}
else{
World.remove(world,this.body)
push()
this.visiblity=this.visiblity-5
tint(255,this.visiblity)
rect(this.body.position.x,this.body.position.y,this.width,this.height)
pop()
}



}





















}



















