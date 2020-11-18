class Blue extends Box{
    constructor(x,y,width,height){
        super(x,y,width,height)
    }
    display(){
        fill("blue");
        super.display();
    }
}