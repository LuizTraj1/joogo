var tela;
var largura;
var altura;
var xMenu;
var yMenu1;
var yMenu2;
var yMenu3;
var yvoltar;
var xvoltar;
var alturaVoltar;
var larguraVoltar;
const audio = new Audio('inicio.mp3');


function setup() {
  tela = 1;
  largura = 320;
  altura = 50;
  xMenu = 150;
  yMenu1 = 95;
  yMenu2 = 150;
  yMenu3 = 210
  yvoltar = 250
  xvoltar = 500
  alturaVoltar = 30
  larguraVoltar = 70
  audio.play();
}
function draw() {

  textStyle(NORMAL);
  // tela do menu
  if (tela == 1) {
    createCanvas(600, 400)
    textAlign(CENTER);
    textSize(26);



    //botão "Jogar"
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura) {
      stroke(200);
      noFill();
      rect(xMenu, yMenu1, largura, altura, 40);
      if (mouseIsPressed) {
        window.location.href = 'Jogo/jogo.html'


        // tela = 2;

      }
    }

    

    //botão "informações"
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura) {
      noFill(240);
      stroke(200);
      rect(xMenu, yMenu2, largura, altura, 40);
      if (mouseIsPressed) {
        tela = 3;
        text("Informação", 300, 180);

      }
    }

    
    //botão "Creditos" 
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura) {
      noFill(240);
      stroke(200);
      rect(xMenu, yMenu3, largura, altura, 40);
      if (mouseIsPressed) {
        tela = 4;
        text("Creditos", 300, 200);

      }
    }

    


  }

  // informações sobre o jogo


  //instruções 
  else if (tela == 3) {
    createCanvas(600, 300);
    background(20);
    textAlign(CENTER);
    textSize(10);
    fill(240);
    noStroke();
    text(" > Pressione espaço para inciar o jogo", width / 2, height / 2 - 50);
    text(" > Consiga o maximo de pontos no score, e bata seus recordes", width / 2, height / 2);
    text(" > Caso o gatinho venha a colidir, aperte em voltar para reiniciar o jogo", width / 2, height / 2 + 50);

    if (mouseX > xvoltar && mouseX < xvoltar + larguraVoltar && mouseY > yvoltar && mouseY < yvoltar + alturaVoltar) {
      fill(0);
      stroke(200);
      rect(xvoltar, yvoltar, larguraVoltar, alturaVoltar, 40);
      if (mouseIsPressed) {
        tela = 1;

        text("Voltar", 535, 270);

      }
    }

    fill(240);
    noStroke();
    text("Voltar", 535, 270);


  }
  //creditos
  else if (tela == 4) {
    createCanvas(600, 300);
    background(20);
    textAlign(CENTER);
    textSize(20);
    fill(240);
    noStroke();
    text("Cat Adventure fase beta", width / 2, height / 2 - 50);

    textSize(10);
    text("Criado por: LUIZ FERNANDO PEREIRA TRAJANO", width / 2, height / 2);

    text("Orientador: Prof. Rummenigge Dantas", width / 2, height / 2 + 100);

    text("Turma 3B de Lop ", width / 2, height / 2 + 50);



    if (mouseX > xvoltar && mouseX < xvoltar + larguraVoltar && mouseY > yvoltar && mouseY < yvoltar + alturaVoltar) {
      fill(0);
      stroke(200);
      rect(xvoltar, yvoltar, larguraVoltar, alturaVoltar, 40);
      if (mouseIsPressed) {
        tela = 1;

        text("Voltar", 535, 270);

      }
    }

    fill(240);
    noStroke();
    text("Voltar", 535, 270);




  }


}