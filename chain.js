class Chain {
    constructor(body1,body2){
    var options={bodyA:body1,bodyB:body2}
    this.Chain=Constraint.create(options);
    World.add(world,this.Chain);
    }
    display(){
        var pointA = this.Chain.bodyA.position
        var pointB = this.Chain.bodyB.position
        line (pointA.x,pointA.y,pointB.x,pointB.y)
    }
}