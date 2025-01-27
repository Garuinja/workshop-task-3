let imgs = [];
let frog,dog,cat,bird;
let cubephoto;
let tintphoto;
let alttint;
let disent;

function preload(){
  frog = loadImage('images/frog.jpg');
  dog = loadImage('images/dog.jpg');
  cat = loadImage('images/cat.jpg');
  bird = loadImage('images/bird.jpg');
}

function setup() {
  createCanvas(400, 400);
  background(220);
  frameRate(10)
  imgs.push(frog);
  imgs.push(dog);
  imgs.push(cat);
  imgs.push(bird);
  cubephoto = random(imgs);
  tintphoto = random(imgs);
  alttint = random(imgs);
  disent = random(imgs)
}

function draw() {
  // background(220);
  let red = random(0, 255);
  let green = random(0, 255);
  let blue = random(0, 255);
  tint(red,green, blue);
  image(tintphoto,0,0)
  // for(i = 0; i < final.length; i++){
  //   image(final[0], final[1], final[2]);
  //   pixeldisent(dog);
  //   pixeldisent(cat);
  //   pixeldisent(frog);
  //   pixeldisent(bird);
  //   final.splice(0, 3);
  // }


  red = random(0, 255);
  green = random(0, 255);
  blue = random(0, 255);
  tint(red,green, blue);
  image(alttint,0,200);

  image(disent,233,200);
  disent.loadPixels();
  for(let y = 0; y < disent.height; y++){
    for(let x = 0; x < disent.width; x++){
      let index = (x + y * disent.width) * 4;
      //cat.pixels[index] = random(0,255);
      //cat.pixels[index + 1] = random(0,255);
      disent.pixels[index + 2] = random(0,255);
      disent.pixels[index + 3] = random(0,255);
    }
  }
  disent.updatePixels();

  // image(bird,201,0);
  // let x = random(bird.width);
  // let y = random(bird.height);
  // let c = bird.get(int(x), int(y));
  // fill(c);
  // noStroke();
  // rect(x+201,y,20,20);

  let w = random(cubephoto.width);
  let h = random(cubephoto.height);
  let f = cubephoto.get(int(w), int(h));
  fill(f);
  noStroke();
  rect(w+201,h,20,20);

  // let dif = random(test);
  // text(dif, 300, 395);

}