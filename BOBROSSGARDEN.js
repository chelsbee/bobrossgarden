let table, xPos;
let totalRows, season, seasonCheck, episode, title;
let bush, conifertree, deciduoustree, cloud, cirrus, cumulus, barn, grass, mountain, fence, fog, lake, path;
let conifertreeimg, bush1, bush2, mountain1, mountain2, lake1, lake2, sun1, sun2, sun3, cucloud1, cucloud2, cicloud1, cicloud2, grass1, grass2, treeimg2, fence1, fence2, barnimg, rock1, rock2, fog1, fog2, pathimg;
let mountainCount = 0;
let coniferCount = 0;
let bushCount = 0;
let deciduousCount = 0;
let cloudCount = 0;
let cirrusCount = 0;
let cumulusCount = 0;
let barnCount = 0;
let grassCount = 0;
let fenceCount = 0;
let fogCount = 0;
let lakeCount = 0;
let pathCount = 0;
let rockCount = 0;
let sunCount = 0;
let bushArray = [];
let mountainImageArray = [];
let lakeImageArray = [];
let sunImageArray = [];
let cucloudImageArray = [];
let cicloudImageArray = [];
let allcloudImageArray = [];
let grassImageArray = [];
let fenceImageArray = [];
let rockImageArray = [];
let fogImageArray = [];

let mountainInfoArray = [];
let coniferInfoArray = [];
let deciduousInfoArray = [];
let bushesInfoArray = [];
let cloudInfoArray = [];
let cirrusInfoArray = [];
let cumulusInfoArray = [];
let barnInfoArray = [];
let grassInfoArray = [];
let fenceInfoArray = [];
let fogInfoArray = [];
let lakeInfoArray = [];
let pathInfoArray = [];
let rockInfoArray = [];
let sunInfoArray = [];
let typeface;

let endText = 'The Bob Ross Garden was created by \nChelsea Birrane in collaboration with \nthe Data Garden Project\n\nVisit datagardenproject.com \nto make your own!\n\nData Source: Credit to Walt Hickey \nof FiveThirtyEight. See more of \nthe data here: \nhttps://fivethirtyeight.com/features\n/a-statistical-analysis-of-the-work-\nof-bob-ross/\n\nMore info about the garden:\nEvery episode of The Joy of Painting, \nthe famous TV show hosted by Bob Ross, \nis represented in this data. When a \npainting includes an element, for example \na tree, a tree is spawned on the timeline. \nHover over an element for specific \nepisode details and a running count of \nhow many paintings have included that \nelement so far.\n\n\n\nThis is my first coding project - \nso apologies for any bug/display issues!\n\nAll paintings were created by me for \nthis project - under the guide of \nold episodes from the show\n\nchelseabirrane.com\n@chelsea.birrane';

function preload() {
  typeface = loadFont('data/Korinna-Regular.otf');
  table = loadTable("data/BOBROSS.csv", "csv", "header");
  conifertreeimg = loadImage('data/tree.png');

  bush1 = loadImage('data/bush1.png');
  bush2 = loadImage('data/bush2.png');
  bushArray = [bush1, bush2];

  mountain1 = loadImage('data/mountain1.png');
  mountain2 = loadImage('data/mountain2.png');
  mountainImageArray = [mountain1, mountain2];


  lake1 = loadImage('data/lake1.png');
  lake2 = loadImage('data/lake2.png');
  lakeImageArray = [lake1, lake2];

  sun1 = loadImage('data/sun1.png');
  sun2 = loadImage('data/sun2.png');
  sun3 = loadImage('data/sun3.png');
  sunImageArray = [sun1, sun2, sun3];

  cucloud1 = loadImage('data/cloud1.png');
  cucloud2 = loadImage('data/cloud2.png');
  cucloudImageArray = [cucloud1, cucloud2];

  cicloud1 = loadImage('data/cloud3.png');
  cicloud2 = loadImage('data/cloud4.png');
  cicloudImageArray = [cicloud1, cicloud2];

  allcloudImageArray = [cucloud1, cucloud2, cicloud1, cicloud2];

  grass1 = loadImage('data/grass1.png');
  grass2 = loadImage('data/grass2.png');
  grassImageArray = [grass1, grass2];

  treeimg2 = loadImage('data/tree2.png');

  fence1 = loadImage('data/fence1.png');
  fence2 = loadImage('data/fence2.png');
  fenceImageArray = [fence1, fence2];

  barnimg = loadImage('data/barn.png');

  rock1 = loadImage('data/rock1.png');
  rock2 = loadImage('data/rock2.png');
  rockImageArray = [rock1, rock2];

  fog1 = loadImage('data/fog1.png');
  fog2 = loadImage('data/fog2.png');
  fogImageArray = [fog1, fog2];

  pathimg = loadImage('data/path.png');
}

function setup() {
  textAlign(CENTER);
  textFont(typeface);
  createCanvas(16000, windowHeight);
  totalRows = table.getRowCount();
  console.log(totalRows);

  imageMode(CENTER);
  conifertreeimg.resize(0, 150);
  bush1.resize(60, 0);
  bush2.resize(70, 0);
  mountain1.resize(200, 0);
  mountain2.resize(250, 0);
  lake1.resize(150, 0);
  lake2.resize(150, 0);
  sun1.resize(100, 0);
  sun2.resize(100, 0);
  sun3.resize(100, 0);
  cucloud1.resize(120, 0);
  cucloud2.resize(150, 0);
  cicloud1.resize(150, 0);
  cicloud2.resize(130, 0);
  grass1.resize(50, 0);
  grass2.resize(40, 0);
  treeimg2.resize(0, 110);
  fence1.resize(90, 0);
  fence2.resize(90, 0);
  barnimg.resize(130, 0);
  rock1.resize(40, 0);
  rock2.resize(50, 0);
  fog1.resize(110, 0);
  fog2.resize(120, 0);
  pathimg.resize(110, 0);

  seasonCheck = table.getString(1, "SEASON");

  for (let i = 0; i < totalRows; i++) {


    //MOUNTAIN INFO
    mountain = table.getString(i, "MOUNTAIN");
    if (mountain == "1") {
      mountainCount++;
    }
    var mountainInfo = {
    y:
    random(windowHeight/2.7, windowHeight/2.8),
    image:
    random(mountainImageArray),
    count:
    mountainCount
  }
  mountainInfoArray.push(mountainInfo);

  //CONIFER INFO
  conifertree = table.getString(i, "CONIFER");
  if (conifertree == "1") {
    coniferCount++;
  }
  var coniferInfo = {
  y:
  random(windowHeight/1.7, windowHeight/2.4),
  count:
  coniferCount
}
coniferInfoArray.push(coniferInfo);

//DECIDUOUS INFO
deciduoustree = table.getString(i, "DECIDUOUS");
if (deciduoustree == "1") {
  deciduousCount++;
}
var deciduousInfo = {
  y:
random(windowHeight/1.7, windowHeight/2.5),
  count:
deciduousCount
  }
deciduousInfoArray.push(deciduousInfo);

//BUSHES INFO
bush = table.getString(i, "BUSHES");
if (bush == "1") {
  bushCount++;
}
var bushesInfo = {
  y:
random(windowHeight/1.4, windowHeight/1.7),
  image:
random(bushArray),
  count:
bushCount
  }
bushesInfoArray.push(bushesInfo);

//CLOUD INFO
cloud = table.getString(i, "CLOUDS");
if (cloud == "1") {
  cloudCount++;
}
var cloudInfo = {
  y:
random(windowHeight/7, windowHeight/13),
  count:
cloudCount,
  image:
random(allcloudImageArray)
  }
cloudInfoArray.push(cloudInfo);

//CIRRUS INFO
cirrus = table.getString(i, "CIRRUS");
if (cirrus == "1") {
  cirrusCount++;
}
var cirrusInfo = {
  y:
random(windowHeight/6, windowHeight/13),
  count:
cirrusCount,
  image:
random(cicloudImageArray)
  }
cirrusInfoArray.push(cirrusInfo);

//CUMULUS INFO
cumulus = table.getString(i, "CUMULUS");
if (cumulus == "1") {
  cumulusCount++;
}
var cumulusInfo = {
  y:
random(windowHeight/5, windowHeight/13),
  count:
cumulusCount,
  image:
random(cucloudImageArray)
  }
cumulusInfoArray.push(cumulusInfo);

//BARN INFO
barn = table.getString(i, "BARN");
if (barn == "1") {
  barnCount++;
}
var barnInfo = {
  y:
random(windowHeight/1.4, windowHeight/1.5),
  count:
barnCount
  }
barnInfoArray.push(barnInfo);

//GRASS INFO
grass = table.getString(i, "GRASS");
if (grass == "1") {
  grassCount++;
}
var grassInfo = {
  y:
random(windowHeight/1.1, windowHeight/2),
  count:
grassCount,
  image:
random(grassImageArray)
  }
grassInfoArray.push(grassInfo);

//FENCE INFO
fence = table.getString(i, "FENCE");
if (fence == "1") {
  fenceCount++;
}
var fenceInfo = {
  y:
random(windowHeight/1.05, windowHeight/1.1),
  count:
fenceCount,
  image:
random(fenceImageArray)
  }
fenceInfoArray.push(fenceInfo);

//FOG INFO
fog = table.getString(i, "FOG");
if (fog == "1") {
  fogCount++;
}
var fogInfo = {
  y:
random(windowHeight/1.6, windowHeight/1.9),
  count:
fogCount,
  image:
random(fogImageArray)
  }
fogInfoArray.push(fogInfo);

//LAKE INFO
lake = table.getString(i, "LAKE");
if (lake == "1") {
  lakeCount++;
}
var lakeInfo = {
  y:
random(windowHeight/1.1, windowHeight/1.3),
  image:
random(lakeImageArray),
  count:
lakeCount
  }
lakeInfoArray.push(lakeInfo);

//PATH INFO
path = table.getString(i, "PATH");
if (path == "1") {
  pathCount++;
}
var pathInfo = {
  y:
random(windowHeight/1.05, windowHeight/1.1),
  count:
pathCount
  }
pathInfoArray.push(pathInfo);

//ROCK INFO
rock = table.getString(i, "ROCKS");
if (rock == "1") {
  rockCount++;
}
var rockInfo = {
  y:
random(windowHeight/1.4, windowHeight/1.6),
  count:
rockCount,
  image:
random(rockImageArray)
  }
rockInfoArray.push(rockInfo);

//SUN INFO
sun = table.getString(i, "SUN");
if (sun == "1") {
  sunCount++;
}
var sunInfo = {
  y:
random(windowHeight/6, windowHeight/8),
  image:
random(sunImageArray),
  count:
sunCount
  }
sunInfoArray.push(sunInfo);
}
}


function draw() {
  // BACKGROUND COLOUR
  push();
  noStroke();
  fill(128, 215, 154);
  rect(0, 0, 16000, windowHeight);
  fill(191, 236, 255);
  rect(0, 0, 16000, windowHeight/2.5);
  pop();
  // TEXT PLACEMENT CONTROL
  let textLineOne = windowHeight/4.2;
  let textLineTwo = (windowHeight/4.2)+13;

  //TEXT
  push();
  textAlign('LEFT');
  text('Welcome to the Bob Ross Garden', 20, 40);
  text('Hover over elements for more information,\nand scroll to the end for more details', 20, 60);
  pop();

  for (let i = 0; i < totalRows; i++) {
    xPos = i*39;
    season = table.getString(i, "SEASON");
    episode = table.getString(i, "EPISODE");
    title = table.getString(i, "TITLE");

    //SEASON INDICATOR

    if (seasonCheck!=season) {
      fill(255);
      noStroke();
      text(season, xPos+20, 20);
      rect(xPos, 0, 5, windowHeight);
    }
    //end text
    push();
    seasonCheck = season;
    if (seasonCheck=="END") {
        textAlign('LEFT');
      fill(0);
      text(endText, xPos+30, 40);
    }
pop();
    fill(0);
    // MOUNTAINS
    mountain = table.getString(i, "MOUNTAIN");
    if (mountain == "1") {
      image(mountainInfoArray[i].image, xPos, mountainInfoArray[i].y);
    }
    //HOVER FOR MOUNTAIN
    if (mountain == "1" && mouseX >= xPos-20 && mouseX <= xPos+20 && mouseY >= mountainInfoArray[i].y -30 && mouseY <= mountainInfoArray[i].y +30) {
      text("Mountain Occurance #" + mountainInfoArray[i].count, mouseX, textLineOne);
      text(season + " " + episode + " " + title, mouseX, textLineTwo);
    }


    // CONIFER TREES
    conifertree = table.getString(i, "CONIFER");
    if (conifertree == "1") {
      image(conifertreeimg, xPos, coniferInfoArray[i].y);
    }
    //HOVER FOR CONIFER
    if (conifertree == "1" && mouseX >= xPos-19 && mouseX <= xPos+19 && mouseY >= coniferInfoArray[i].y -40 && mouseY <= coniferInfoArray[i].y +40) {
      text("Conifer Tree Occurance #" + coniferInfoArray[i].count, mouseX, textLineOne);
      text(season + " " + episode + " " + title, mouseX, textLineTwo);
    }


    // DECIDUOUS TREES - REPLACE IMAGE!
    deciduoustree = table.getString(i, "DECIDUOUS");
    if (deciduoustree == "1") {
      image(treeimg2, xPos, deciduousInfoArray[i].y);
    }
    //HOVER FOR DECIDUOUS
    if (deciduoustree == "1" && mouseX >= xPos-19 && mouseX <= xPos+19 && mouseY >= deciduousInfoArray[i].y -40 && mouseY <= deciduousInfoArray[i].y +40) {
      text("Deciduous Tree Occurance #" + deciduousInfoArray[i].count, mouseX, textLineOne);
      text(season + " " + episode + " " + title, mouseX, textLineTwo);
    }


    // BUSHES
    bush = table.getString(i, "BUSHES");
    if (bush == "1") {
      image(bushesInfoArray[i].image, xPos, bushesInfoArray[i].y);
    }
    //HOVER FOR BUSHES
    if (bush == "1" && mouseX >= xPos-15 && mouseX <= xPos+15 && mouseY >= bushesInfoArray[i].y -15 && mouseY <= bushesInfoArray[i].y +15) {
      text("Bush Occurance #" + bushesInfoArray[i].count, mouseX, textLineOne);
      text(season + " " + episode + " " + title, mouseX, textLineTwo);
    }


    // CLOUDS (REGULAR)

    cloud = table.getString(i, "CLOUDS");
    if (cloud == "1") {
      image(cloudInfoArray[i].image, xPos, cloudInfoArray[i].y);
    }
    //HOVER FOR CLOUD
    if (cloud == "1" && mouseX >= xPos-30 && mouseX <= xPos+30 && mouseY >= cloudInfoArray[i].y -30 && mouseY <= cloudInfoArray[i].y +30) {
      text("Unspecified Cloud Occurance #" + cloudInfoArray[i].count, mouseX, textLineOne);
      text(season + " " + episode + " " + title, mouseX, textLineTwo);
    }

    // CIRRUS CLOUDS

    cirrus = table.getString(i, "CIRRUS");
    if (cirrus == "1") {
      image(cirrusInfoArray[i].image, xPos, cirrusInfoArray[i].y);
    }
    //HOVER FOR CIRRUS
    if (cirrus == "1" && mouseX >= xPos-30 && mouseX <= xPos+30 && mouseY >= cirrusInfoArray[i].y -15 && mouseY <= cirrusInfoArray[i].y +15) {
      text("Cirrus Cloud Occurance #" + cirrusInfoArray[i].count, mouseX, textLineOne);
      text(season + " " + episode + " " + title, mouseX, textLineTwo);
    }


    // CUMULUS CLOUDS
    cumulus = table.getString(i, "CUMULUS");
    if (cumulus == "1") {
      image(cumulusInfoArray[i].image, xPos, cumulusInfoArray[i].y);
    }
    //HOVER FOR CUMULUS
    if (cumulus == "1" && mouseX >= xPos-30 && mouseX <= xPos+30 && mouseY >= cumulusInfoArray[i].y -15 && mouseY <= cumulusInfoArray[i].y +15) {
      text("Cumulus Cloud Occurance #" + cumulusInfoArray[i].count, mouseX, textLineOne);
      text(season + " " + episode + " " + title, mouseX, textLineTwo);
    }


    // BARNS
    barn = table.getString(i, "BARN");
    if (barn == "1") {
      image(barnimg, xPos, barnInfoArray[i].y);
    }
    //HOVER FOR BARN
    if (barn == "1" && mouseX >= xPos-30 && mouseX <= xPos+30 && mouseY >= barnInfoArray[i].y -30 && mouseY <= barnInfoArray[i].y +30) {
      text("Barn Occurance #" + barnInfoArray[i].count, mouseX, textLineOne);
      text(season + " " + episode + " " + title, mouseX, textLineTwo);
    }

    //GRASS

    grass = table.getString(i, "GRASS");
    if (grass == "1") {
      image(grassInfoArray[i].image, xPos, grassInfoArray[i].y);
    }
    //HOVER FOR GRASS
    if (grass == "1" && mouseX >= xPos-30 && mouseX <= xPos+30 && mouseY >= grassInfoArray[i].y -30 && mouseY <= grassInfoArray[i].y +30) {
      text("Grass Occurance #" + grassInfoArray[i].count, mouseX, textLineOne);
      text(season + " " + episode + " " + title, mouseX, textLineTwo);
    }

    //FENCE

    fence = table.getString(i, "FENCE");
    if (fence == "1") {
      image(fenceInfoArray[i].image, xPos, fenceInfoArray[i].y);
    }
    //HOVER FOR FENCE
    if (fence == "1" && mouseX >= xPos-30 && mouseX <= xPos+30 && mouseY >= fenceInfoArray[i].y -30 && mouseY <= fenceInfoArray[i].y +30) {
      text("Fence Occurance #" + fenceInfoArray[i].count, mouseX, textLineOne);
      text(season + " " + episode + " " + title, mouseX, textLineTwo);
    }

    //FOG

    fog = table.getString(i, "FOG");
    if (fog == "1") {
      image(fogInfoArray[i].image, xPos, fogInfoArray[i].y);
    }
    //HOVER FOR FOG
    if (fog == "1" && mouseX >= xPos-30 && mouseX <= xPos+30 && mouseY >= fogInfoArray[i].y -30 && mouseY <= fogInfoArray[i].y +30) {
      text("Fog Occurance #" + fogInfoArray[i].count, mouseX, textLineOne);
      text(season + " " + episode + " " + title, mouseX, textLineTwo);
    }


    //LAKE

    lake = table.getString(i, "LAKE");
    if (lake == "1") {
      image(lakeInfoArray[i].image, xPos, lakeInfoArray[i].y);
    }
    //HOVER FOR LAKE
    if (lake == "1" && mouseX >= xPos-30 && mouseX <= xPos+30 && mouseY >= lakeInfoArray[i].y -30 && mouseY <= lakeInfoArray[i].y +30) {
      text("Lake Occurance #" + lakeInfoArray[i].count, mouseX, textLineOne);
      text(season + " " + episode + " " + title, mouseX, textLineTwo);
    }

    //PATH

    path = table.getString(i, "PATH");
    if (path == "1") {
      image(pathimg, xPos, pathInfoArray[i].y);
    }
    //HOVER FOR PATH
    if (path == "1" && mouseX >= xPos-30 && mouseX <= xPos+30 && mouseY >= pathInfoArray[i].y -30 && mouseY <= pathInfoArray[i].y +30) {
      text("Path Occurance #" + pathInfoArray[i].count, mouseX, textLineOne);
      text(season + " " + episode + " " + title, mouseX, textLineTwo);
    }

    //ROCK

    rock = table.getString(i, "ROCKS");
    if (rock == "1") {
      image(rockInfoArray[i].image, xPos, rockInfoArray[i].y);
    }
    //HOVER FOR ROCK
    if (rock == "1" && mouseX >= xPos-30 && mouseX <= xPos+30 && mouseY >= rockInfoArray[i].y -30 && mouseY <= rockInfoArray[i].y +30) {
      text("Rock Occurance #" + rockInfoArray[i].count, mouseX, textLineOne);
      text(season + " " + episode + " " + title, mouseX, textLineTwo);
    }

    //SUN

    sun = table.getString(i, "SUN");
    if (sun == "1") {
      image(sunInfoArray[i].image, xPos, sunInfoArray[i].y);
    }
    //HOVER FOR SUN
    if (sun == "1" && mouseX >= xPos-30 && mouseX <= xPos+30 && mouseY >= sunInfoArray[i].y -30 && mouseY <= sunInfoArray[i].y +30) {
      text("Sun Occurance #" + sunInfoArray[i].count, mouseX, textLineOne);
      text(season + " " + episode + " " + title, mouseX, textLineTwo);
    }
  }
  // noLoop();
}
