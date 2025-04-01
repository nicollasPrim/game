class Obj{
   constructor(x,y,w,h,a){
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.a = a

   }

    draw(){
        let img = new Image()
        img.src = this.a
        des.drawImage(img, this.x, this. y, this.w, this.h) 
    }
}

class Car extends Obj{
    dir = 0
    vida = 5
    pontos = 0
    invencivel = false
    move(){
    
        if(this.x <= 0){
            this.x = 0
        }else if(this.x >= 500){
            this.x = 500
        }

        this.x += this.dir
    }
    point(objeto) {
        if ((objeto.y >= 680) && (objeto.y <= 684)) {
            return true
        } else {
            false
        }
    }

    colid(objeto) {
        if (!this.invencivel && 
            (this.x < objeto.x + objeto.w) &&
            (this.x + this.w > objeto.x) &&
            (this.y < objeto.y + objeto.h) &&
            (this.y + this.h > objeto.y)) {
            return true;
        }
        return false;
    }

    inPitStop = false
    pitStopProgresso = 0
    pitStopDuracao = 3000
}

class PitStop extends Obj {
    move() {
        this.y += this.speed;
    }
    recomeca() {
        this.y = -1300;
        this.x = Math.random() * 500;
    }
}

class Carro2 extends Obj {
    constructor(x, y, w, h, a, speed) {
        super(x, y, w, h, a);
        this.speed = speed; 
        this.justRespawned = false;
    }
    
    move(){
        if(this.y >= 1100){
            this.y = -160;
            this.x = Math.random() * 500;
            this.justRespawned = true; 
        }
        this.y += this.speed;
    }

    recomeca() {
        this.y = -110;
        this.x = Math.random() * 458;
        this.justRespawned = false; 
    }
}

class Carro3 extends Obj {
    constructor(x, y, w, h, a) {
        super(x, y, w, h, a);
        this.speed = 6; 
        this.justRespawned = false;
    }
    
    move(){
        if(this.y >= 1100){
            this.y = -160;
            this.x = Math.random() * 500;
            this.justRespawned = true; 
        }
        this.y += this.speed;
    }

    recomeca() {
        this.y = -110;
        this.x = Math.random() * 458;
        this.justRespawned = false; 
    }
}

class Carro4 extends Obj {
    constructor(x, y, w, h, a) {
        super(x, y, w, h, a);
        this.speed = 5; 
        this.justRespawned = false;
    }
    
    move(){
        if(this.y >= 1100){
            this.y = -160;
            this.x = Math.random() * 500;
            this.justRespawned = true; 
        }
        this.y += this.speed;
    }

    recomeca() {
        this.y = -110;
        this.x = Math.random() * 458;
        this.justRespawned = false; 
    }
}
class Estrada extends Obj {
    des_estrada() {
        des.fillStyle = this.a
        des.fillRect(this.x, this.y, this.w, this.h)
    }

    mov_est() {
        this.y += 8
        if (this.y >= 900) {
            this.y = 10
        }
    }
}

class Text {
    des_text(text, x, y, cor, font) {
        des.fillStyle = cor
        des.lineWidht = '5'
        des.font = font
        des.fillText(text, x, y)
    }
}