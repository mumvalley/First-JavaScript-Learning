$(document).ready(function() {
  'use strict';
  console.log('main.js を読み込み中...');

  paper.install(window); //paperの準備

  paper.setup(document.getElementById('mainCanvas')); //mainCanvasをキャンバスに

  /* 円 */
  // let c = Shape.Circle(54, 430, 50);
  // c.fillColor = 'green';

  /* 円のループ */
  // let c;
  // for(let x=25; x<420; x+=50) {
  //   for(let y=25; y<450; y+=50) {
  //     c = Shape.Circle(x, y, 20);
  //     c.fillColor = 'green';
  //   }
  // }

  let tool = new Tool();

  // Hello World
  let c = Shape.Circle(200, 200, 80); // 円
  c.fillColor = 'black'; //中を黒く塗る
  let text = new PointText(200, 200); // 新しいテキストを中央に
  text.justification = 'center'; // センタリング
  text.fillColor = 'white';
  text.fontsizer = 20;
  text.content = 'hello world';

  //イベントハンドラ
  tool.onMouseDown = function(event) {
    let c = Shape.Circle(event.point, 20);
    c.fillColor = 'green';
  }
  paper.view.draw();
});
