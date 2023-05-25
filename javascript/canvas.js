
function make() {

    const frm = document.forms['frm'];
    const img = document.getElementById("logo"); 
    frm.remove();
    img.remove();

    draw();
}

function draw() {

    var canvas = document.getElementById("profile");
    var ctx = canvas.getContext("2d");

    var sources = {
      image1: "images/background.png",
      image2: "images/logo.png",
      image3: tsc,
      image4: sac,
      image5: sact,
      image6: isc
    };
  
    loadImages(sources, function(images) {

    ctx.drawImage(images.image1, -30, 0, 880, 1300);

    ctx.drawImage(images.image2, 150, 0, 500, 500);

    ctx.font = "bold 16px SUITE-Regulr";
    ctx.fillText("Copyright © 2019 HEILENDE BAUM CO.LTD All rights resrtved.", 150, 1210);

    var boxwidth = 150;
    var boxheight = 270;

    var b = 1050;
    var c = 840;
    ctx.font = "26px TheJamsil5Bold";

    roundRect(ctx, 20, 800, boxwidth, boxheight, 15);
    ctx.fillStyle = 'black';
    ctx.fillText(cnOne, 130, c);
    ctx.fillText("탄생 컬러", 40, b);
    roundRect(ctx, 220, 800, boxwidth, boxheight, 15);
    ctx.fillStyle = 'black';
    ctx.fillText("생애 컬러1", 240, b);
    ctx.fillText(cnTwo, 330, c);
    roundRect(ctx, 420, 800, boxwidth, boxheight, 15);
    ctx.fillStyle = 'black';
    ctx.fillText("생애 컬러2", 440, b);
    ctx.fillText(cnThree, 530, c);
    roundRect(ctx, 620, 800, boxwidth, boxheight, 15);
    ctx.fillStyle = 'black';
    ctx.fillText("인생 컬러", 640, b);
    ctx.fillText(cnFour, 730, c);

    ctx.shadowColor = "rgba(0,0,0,1)";
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 5;
    ctx.drawImage(images.image3, -10, 840, 200, 170);
    ctx.drawImage(images.image4, 190, 840, 200, 170);
    ctx.drawImage(images.image5, 390, 840, 200, 170);
    ctx.drawImage(images.image6, 590, 840, 200, 170);

    });

    ctx.fillStyle = 'white'; 

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";


    var a = 600;

    ctx.font = "bold 150px yg-jalnan";
    ctx.fillText(username, 100, a);

    ctx.font = "60px serif";
    ctx.fillText("님", 550, a);

    ctx.font = "bold 100px yg-jalnan";
    ctx.fillText("인생컬러", 330, 700);

}

function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;

    for(var src in sources) {
      numImages++;
    }
    for(var src in sources) {
      images[src] = new Image();
      images[src].onload = function() {
        if(++loadedImages >= numImages) {
          callback(images);
        }
      };
      images[src].src = sources[src];
    }
}

function roundRect(ctx, x, y, width, height, radius) {
  var r = x + width;
  var b = y + height;
  ctx.beginPath();
  ctx.moveTo(x+radius, y);
  ctx.lineTo(r-radius, y);
  ctx.arcTo(r, y, r, y+radius, radius);
  ctx.lineTo(r, y+height-radius);
  ctx.arcTo(r, b, r-radius, b, radius);
  ctx.lineTo(x+radius, b);
  ctx.arcTo(x, b, x, b-radius, radius);
  ctx.lineTo(x, y+radius);
  ctx.arcTo(x, y, x+radius, y, radius);
  ctx.closePath();
  
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.stroke();
}