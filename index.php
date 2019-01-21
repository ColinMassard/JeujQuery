<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="css/style.css">
  <link rel="icon" type="image/jpeg" href="images/favicon.jpeg" />
  <title>MMI Hunt | JQuery</title>
</head>
<body>
  <div class="accueil">
    <div class="jouer">Play</div>
    <img src="images/Accueil.png" alt="Fond Accueil">
  </div>
  <div class="Victoire">
    <div class="prochainniveau2">Niveau 2</div>
    <img src="images/Victoire.png" alt="Fond Victoire">
  </div>
  <div class="Victoireniv2">
    <div class="prochainniveau3">Niveau 3</div>
    <img src="images/Victoire.png" alt="Fond Victoire">
  </div>
  <div class="Victoireniv3">
    <div class="rejouer">Rejouer</div>
    <img src="images/Victoire.png" alt="Fond Victoire">
  </div>
    <div class="Defaite">
    <div class="rejouer">Replay</div>
    <img src="images/Defaite.png" alt="Fond Victoire">
  </div>
  <div class="top"></div>
  <audio src="images/audio.mp3" id="son1" preload="auto"></audio>

  <div class="niveau1">
    <img src="images/FONDJEU.png" id="fondjeuniv1">
    <div class="balles">
      <?php
      for ($i=0; $i < 10 ; $i++) {
        echo "<img src='images/bullet.png' class='bullet".$i."'>";
      }

      ?>
    </div>
    <div class="cibles">
      <?php
      for ($j=1; $j < 6; $j++) {
        echo "<img src='images/logo.png' id='target".$j."'>";
      }
      ?>
    </div>

    <input type="checkbox" id="logommi1">
    <label for="logommi1" class="logommi"></label>

    <input type="checkbox" id="logommi2">
    <label for="logommi2" class="logommi"></label>

    <input type="checkbox" id="logommi3">
    <label for="logommi3" class="logommi"></label>

    <input type="checkbox" id="logommi4" >
    <label for="logommi4" class="logommi"></label>

    <input type="checkbox" id="logommi5">
    <label for="logommi5" class="logommi"></label>
  </div>


  <div class="niveau2">
    <img src="images/fondniv2.png" id="fondjeuniv2">
    <div class="balles">
      <?php
      for ($i=0; $i < 10 ; $i++) {
        echo "<img src='images/bullet.png' class='bullet".$i."'>";
      }

      ?>
    </div>
    <div class="cibles">
      <?php
      for ($j=6; $j < 13; $j++) {
        echo "<img src='images/logo.png' id='target".$j."'>";
      }
      ?>
    </div>

    <input type="checkbox" id="logommi6">
    <label for="logommi6" class="logommi"></label>

    <input type="checkbox" id="logommi7">
    <label for="logommi7" class="logommi"></label>

    <input type="checkbox" id="logommi8">
    <label for="logommi8" class="logommi"></label>

    <input type="checkbox" id="logommi9" >
    <label for="logommi9" class="logommi"></label>

    <input type="checkbox" id="logommi10">
    <label for="logommi10" class="logommi"></label>

    <input type="checkbox" id="logommi11">
    <label for="logommi11" class="logommi"></label>

    <input type="checkbox" id="logommi12">
    <label for="logommi12" class="logommi"></label>
  </div>

  <div class="niveau3">
    <img src="images/fondniv3.png" id="fondjeuniv3">
    <div class="balles">
      <?php
      for ($i=0; $i < 10 ; $i++) {
        echo "<img src='images/bullet.png' class='bullet".$i."'>";
      }

      ?>
    </div>
    <div class="cibles">
      <?php
      for ($j=13; $j < 23; $j++) {
        echo "<img src='images/logo.png' id='target".$j."'>";
      }
      ?>
    </div>

    <input type="checkbox" id="logommi13">
    <label for="logommi13" class="logommi"></label>

    <input type="checkbox" id="logommi14">
    <label for="logommi14" class="logommi"></label>

    <input type="checkbox" id="logommi15">
    <label for="logommi15" class="logommi"></label>

    <input type="checkbox" id="logommi16" >
    <label for="logommi16" class="logommi"></label>

    <input type="checkbox" id="logommi17">
    <label for="logommi17" class="logommi"></label>

    <input type="checkbox" id="logommi18">
    <label for="logommi18" class="logommi"></label>

    <input type="checkbox" id="logommi19">
    <label for="logommi19" class="logommi"></label>

    <input type="checkbox" id="logommi20">
    <label for="logommi20" class="logommi"></label>

    <input type="checkbox" id="logommi21" >
    <label for="logommi21" class="logommi"></label>

    <input type="checkbox" id="logommi22">
    <label for="logommi22" class="logommi"></label>


  </div>



  <div class="score">Score : 0</div>

  <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.js"></script>
  <script type="text/javascript" src="js/animate.js"></script>

</body>
</html>
