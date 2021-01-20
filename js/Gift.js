class Gift {
    constructor() {
      this.giftStock=0
      this.image = loadImage("gift.png");
    }

    updateGiftStock(giftStock){
      this.giftStock=giftStock;
    }
    getGiftStock(){
      return this.giftStock;
    }

    display(){
      var x=80,y=100;
      imageMode(CENTER)
     if(this.giftStock!=0){
       for(var i=0;i<this.giftStock;i++){
         if(i%300==0){
           x=80;
           y=y+300;

         }
         image(this.image,x,y,50,50);
         x=x+80
       }
     }
    }
  };