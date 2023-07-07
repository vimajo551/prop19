var path, boy, Trash3, Trash1, Trash2, Trash4;
var pathImg, boyImg, Trash3Img, Trash1Img, Trash2Img, Trash4Img;
var treasureCollection = 0;
var Trash3G, Trash1G, Trash2G, Trash4Group;

//Esttados de Jogo
var PLAY = 1;
var END = 0;
var gameState = 1;

function preload() {
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png");
  Trash3Img = loadImage("trash3.png");
  Trash1Img = loadImage("trash1.png");
  Trash2Img = loadImage("trash2.png");
  Trash4Img = loadImage("trash4.png");
}

function setup() {

  //crie uma tela

  // createCanvas(window,window);
  createCanvas(windowWidth, windowHeight);
  // createCanvas(width,height);
  // createCanvas(200,200);

  //plano de fundo se movendo

  path = createSprite(width / 2, 200);
  path.addImage(pathImg);
  path.velocityY = 4;


  //crie o menino correndo
  boy = createSprite(width / 2, height - 20, 20, 20);
  boy.addAnimation("SahilRunning", boyImg);
  boy.scale = 0.08;


  Trash3G = new Group();
  Trash1G = new Group();
  Trash2G = new Group();
  Trash4Group = new Group();

}

function draw() {

  if (gameState === PLAY) {
    background(0);
    boy.x = World.mouseX;

    edges = createEdgeSprites();
    boy.collide(edges);

    //código para reiniciar o plano de fundo

    // if(path.x > height ){
    //   path.x = height/2;
    // }

    // if(path.y > height ){
    //   path.x = height/2;
    // }

    // if(path.x > height ){
    //   path.y = height;
    // }

    if (path.y > height) {
      path.y = height / 2;
    }

    createTrash3();
    createTrash1();
    createTrash2();
    createTrash4();

    if (Trash3G.isTouching(boy)) {
      Trash3G.destroyEach();
      treasureCollection = treasureCollection + 50;
    }
    else if (Trash1G.isTouching(boy)) {
      Trash1G.destroyEach();
      treasureCollection = treasureCollection + 100;

    } else if (Trash2G.isTouching(boy)) {
      Trash2G.destroyEach();
      treasureCollection = treasureCollection + 150;

    } else {
      if (Trash4Group.isTouching(boy)) {
        Trash4G.destroyEach();
        treasureCollection = treasureCollection + 200;

      }
    }

    drawSprites();
    textSize(20);
    fill(255);
    text("Tesouro: " + treasureCollection, width - 150, 30);
  }

}

function createTrash3() {
  if (World.frameCount % 200 == 0) {
    var Trash3 = createSprite(Math.round(random(50, width - 50), 40, 10, 10));
    Trash3.addImage(Trash3Img);
    Trash3.scale = 0.12;
    Trash3.velocityY = 5;
    Trash3.lifetime = 200;
    Trash3G.add(Trash3);
  }
}

function createTrash1() {
  if (World.frameCount % 320 == 0) {
    var Trash1 = createSprite(Math.round(random(50, width - 50), 40, 10, 10));
    Trash1.addImage(Trash1Img);
    Trash1.scale = 0.03;
    Trash1.velocityY = 5;
    Trash1.lifetime = 200;
    Trash1G.add(Trash1);
  }
}

function createTrash2() {
  if (World.frameCount % 410 == 0) {
    var Trash2 = createSprite(Math.round(random(50, width - 50), 40, 10, 10));
    Trash2.addImage(Trash2Img);
    Trash2.scale = 0.13;
    Trash2.velocityY = 5;
    Trash2.lifetime = 200;
    Trash2G.add(Trash2);
  }
}

function createTrash4() {
  if (World.frameCount % 530 == 0) {
    var Trash4 = createSprite(Math.round(random(50, width - 50), 40, 10, 10));
    Trash4.addImage(Trash4Img);
    Trash4.scale = 0.1;
    Trash4.velocityY = 4;
    Trash4.lifetime = 200;
    Trash4Group.add(Trash4);
  }
}