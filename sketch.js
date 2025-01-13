let imgs = [];
let frog,dog,cat;

function preload(){
  frog = loadImage('images/frog.jpg');
  dog = loadImage('images/dog.jpg');
  cat = loadImage('images/cat.jpg');
}

function setup() {
  createCanvas(400, 400);
  background(220);
  frameRate(20);
  pixelDensity(1);
  imgs.push(frog);
  imgs.push(dog);
  imgs.push(cat);
  for(i=0;i<30;i++){
    image(frog,random(0,width),random(0,height));
    image(dog,random(0,width),random(0,height));
    image(cat,random(0,width),random(0,height));
  }
}

function draw() {
  // background(220);
  //let r = random(imgs);
  // let x = random(r.width);
  // let y = random(r.height);
  // let c = r.get(int(x),int(y));
  // fill(c);
  // noStroke();
  // rect(x,y,20,20);
  // image(frog,230,0);
  // image(dog,random(0,width),random(height));
  // image(cat,random(0,width),random(0,height));

  frog.loadPixels();
  for(let y = 0; y < frog.height; y++){
    for(let x = 0; x < frog.width; x++){
      let index = (x + y * frog.width) * 4;
      //frog.pixels[index] = random(0,255);
      frog.pixels[index + 1] = random(0,255);
      //frog.pixels[index + 2] = random(0,255);
      frog.pixels[index + 3] = random(0,255);
    }
  }
  frog.updatePixels();

  dog.loadPixels();
  for(let y = 0; y < dog.height; y++){
    for(let x = 0; x < dog.width; x++){
      let index = (x + y * dog.width) * 4;
      dog.pixels[index] = random(0,255);
      //dog.pixels[index + 1] = 0;
      //dog.pixels[index + 2] = 0;
      dog.pixels[index + 3] = random(0,255);
    }
  }
  dog.updatePixels();

  cat.loadPixels();
  for(let y = 0; y < cat.height; y++){
    for(let x = 0; x < cat.width; x++){
      let index = (x + y * cat.width) * 4;
      //cat.pixels[index] = random(0,255);
      //cat.pixels[index + 1] = random(0,255);
      cat.pixels[index + 2] = random(0,255);
      cat.pixels[index + 3] = random(0,255);
    }
  }
  cat.updatePixels();
  
  let p = random(imgs);
  image(p,random(width),random(height));

}
