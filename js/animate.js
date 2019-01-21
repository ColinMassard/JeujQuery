

var score = 0;
var audioaccueil = new Audio('images/audioacc.mp3');
var audio = new Audio('images/audio.mp3');
var victoire = new Audio('images/Victoire.mp3');
var gameover = new Audio('images/gameover.mp3');
var bark = new Audio('images/bark.mp3');
var depart = 1;
var balles = 0;
$('selector').css( 'cursor', 'url(images/aim.png)' );

$(".accueil").click(function(){
  $(".accueil").fadeOut(4500);
  audioaccueil.play();


});


$(".rejouer").click(function(){


location.reload();
});

$("#fondjeuniv1").click(function(){
  audio.play();
  $('.bullet'+balles).hide();
  balles++;

  if (balles >= 10) {
    if (score==5) {
      $(".Defaite").hide();
      $(".Victoire").fadeIn(1500);
      victoire.play();
      setTimeout(function () {
        bark.play();
      }, 4000);
    }

    else{
    $(".Defaite").fadeIn(1500);
    gameover.play();

    setTimeout(function () {
      bark.play();
    }, 4000);
}
  }
});


$("#fondjeuniv2").click(function(){
  audio.play();
  $('.bullet'+balles).hide();
  balles++;

  if (balles >= 10) {
    if (score==12) {
      $(".Defaite").hide();
      $(".Victoire").fadeIn(1500);
      victoire.play();
      setTimeout(function () {
        bark.play();
      }, 4000);
    }

    else{
    $(".Defaite").fadeIn(1500);
    gameover.play();

    setTimeout(function () {
      bark.play();
    }, 4000);
}
  }
});

$("#fondjeuniv3").click(function(){
  audio.play();
  $('.bullet'+balles).hide();
  balles++;

  if (balles >= 10) {
    if (score==22) {
      $(".Defaite").hide();
      $(".Victoire").fadeIn(1500);
      victoire.play();
      setTimeout(function () {
        bark.play();
      }, 4000);
    }

    else{
    $(".Defaite").fadeIn(1500);
    gameover.play();

    setTimeout(function () {
      bark.play();
    }, 4000);
  }
  }
});

$(".prochainniveau2").click(function(){
  balles = 0;
  $('.bullet1').show();
  $('.bullet2').show();
  $('.bullet3').show();
  $('.bullet4').show();
  $('.bullet5').show();
  $('.bullet6').show();
  $('.bullet7').show();
  $('.bullet8').show();
  $('.bullet9').show();
  $('.bullet10').show();
  $(".niveau1").fadeOut(100);
  $(".niveau2").fadeIn(100);
  $(".Victoire").fadeOut(2000);
});

$(".prochainniveau3").click(function(){
  balles = 0;
  $('.bullet1').show();
  $('.bullet2').show();
  $('.bullet3').show();
  $('.bullet4').show();
  $('.bullet5').show();
  $('.bullet6').show();
  $('.bullet7').show();
  $('.bullet8').show();
  $('.bullet9').show();
  $('.bullet10').show();
  $(".niveau2").fadeOut(100);
  $(".niveau3").fadeIn(100);
  $(".Victoireniv2").fadeOut(2000);
});
$("#logommi1").click(function(){
  $('.bullet'+balles).hide();
  balles++;
  score ++;
  $("#target"+score).hide();
  $(".score").html("Score : "+ score);
  audio.play();
  if (score==5) {
    $(".Victoire").fadeIn(1500);
    victoire.play();
    setTimeout(function () {
      bark.play();
    }, 4000);
    if (balles >= 10) {
      if (score==5) {
        $(".Defaite").hide();
        $(".Victoire").fadeIn(1500);
        victoire.play();
        setTimeout(function () {
          bark.play();
        }, 4000);
      }

      else{
      $(".Defaite").fadeIn(1500);
      gameover.play();

      setTimeout(function () {
        bark.play();
      }, 4000);
    }
    }


  }


});

$("#logommi2").click(function(){
  $('.bullet'+balles).hide();
  balles++;
  score ++;
    $("#target"+score).hide();
  $(".score").html("Score : "+ score);
  audio.play();
  if (score==5) {
    $(".Victoire").fadeIn(1500);
    victoire.play();
    //alert("GAGNÉ");
  }
  if (balles >= 10) {
    if (score==5) {
      $(".Defaite").hide();
      $(".Victoire").fadeIn(1500);
      victoire.play();
      setTimeout(function () {
        bark.play();
      }, 4000);
    }

    else{
    $(".Defaite").fadeIn(1500);
    gameover.play();

    setTimeout(function () {
      bark.play();
    }, 4000);
}
  }
});

$("#logommi3").click(function(){
  $('.bullet'+balles).hide();
  balles++;
  score ++;
    $("#target"+score).hide();
  $(".score").html("Score : "+ score);
  audio.play();
  if (score==5) {
    $(".Victoire").fadeIn(1500);
    victoire.play();
    //alert("GAGNÉ");
  }
  if (balles >= 10) {
    if (score==5) {
      $(".Defaite").hide();
      $(".Victoire").fadeIn(1500);
      victoire.play();
      setTimeout(function () {
        bark.play();
      }, 4000);
    }

    else{
    $(".Defaite").fadeIn(1500);
    gameover.play();

    setTimeout(function () {
      bark.play();
    }, 4000);
}
  }
});

$("#logommi4").click(function(){
  $('.bullet'+balles).hide();
  balles++;
  score ++;
    $("#target"+score).hide();
  $(".score").html("Score : "+ score);
  audio.play();
  if (score==5) {
    $(".Victoire").fadeIn(1500);
    victoire.play();
    //alert("GAGNÉ");
  }
  if (balles >= 10) {
    if (score==5) {
      $(".Defaite").hide();
      $(".Victoire").fadeIn(1500);
      victoire.play();
      setTimeout(function () {
        bark.play();
      }, 4000);
    }

    else{
    $(".Defaite").fadeIn(1500);
    gameover.play();

    setTimeout(function () {
      bark.play();
    }, 4000);
}
  }
});

$("#logommi5").click(function(){
  $('.bullet'+balles).hide();
  balles++;
  score ++;
    $("#target"+score).hide();
  $(".score").html("Score : "+ score);
  audio.play();
  if (score==5) {
    $(".Victoire").fadeIn(1500);
    victoire.play();
    //alert("GAGNÉ");
  }
  if (balles >= 10) {
    if (score==5) {
      $(".Defaite").hide();
      $(".Victoire").fadeIn(1500);
      victoire.play();
      setTimeout(function () {
        bark.play();
      }, 4000);
    }

    else{
    $(".Defaite").fadeIn(1500);
    gameover.play();

    setTimeout(function () {
      bark.play();
    }, 4000);
}
  }
});

$("#logommi6").click(function(){
  $('.bullet'+balles).hide();
  balles++;
  score ++;
    $("#target"+score).hide();
  $(".score").html("Score : "+ score);
  audio.play();
  if (score==12) {
    $(".Victoireniv2").fadeIn(1500);
    victoire.play();
    //alert("GAGNÉ");
  }
});
$("#logommi7").click(function(){
  $('.bullet'+balles).hide();
  balles++;
  score ++;
    $("#target"+score).hide();
  $(".score").html("Score : "+ score);
  audio.play();
  if (score==12) {
    $(".Victoireniv2").fadeIn(1500);
    victoire.play();
    //alert("GAGNÉ");
  }
});
$("#logommi8").click(function(){
  $('.bullet'+balles).hide();
  balles++;
  score ++;
    $("#target"+score).hide();
  $(".score").html("Score : "+ score);
  audio.play();
  if (score==12) {
    $(".Victoireniv2").fadeIn(1500);
    victoire.play();
    //alert("GAGNÉ");
  }
});
$("#logommi9").click(function(){
  $('.bullet'+balles).hide();
  balles++;
  score ++;
    $("#target"+score).hide();
  $(".score").html("Score : "+ score);
  audio.play();
  if (score==12) {
    $(".Victoireniv2").fadeIn(1500);
    victoire.play();
    //alert("GAGNÉ");
  }
});
$("#logommi10").click(function(){
  $('.bullet'+balles).hide();
  balles++;
  score ++;
    $("#target"+score).hide();
  $(".score").html("Score : "+ score);

  audio.play();
  if (score==12) {
    $(".Victoireniv2").fadeIn(1500);
    victoire.play();
    //alert("GAGNÉ");
  }
});

$("#logommi11").click(function(){
  $('.bullet'+balles).hide();
  balles++;
  score ++;
    $("#target"+score).hide();
  $(".score").html("Score : "+ score);

  audio.play();
  if (score==12) {
    $(".Victoireniv2").fadeIn(1500);
    victoire.play();
    //alert("GAGNÉ");
  }
});
$("#logommi12").click(function(){
  $('.bullet'+balles).hide();
  balles++;
  score ++;
    $("#target"+score).hide();
  $(".score").html("Score : "+ score);
  audio.play();
  if (score==12) {
    $(".Victoireniv2").fadeIn(1500);
    victoire.play();
    //alert("GAGNÉ");
  }
});

$("#logommi13").click(function(){
  $('.bullet'+balles).hide();
  balles++;
  score ++;
    $("#target"+score).hide();
  $(".score").html("Score : "+ score);
  audio.play();
  if (score==22) {
    $(".Victoireniv3").fadeIn(1500);
    victoire.play();
    //alert("GAGNÉ");
  }
});

$("#logommi14").click(function(){
  $('.bullet'+balles).hide();
  balles++;
  score ++;
    $("#target"+score).hide();
  $(".score").html("Score : "+ score);
  audio.play();
  if (score==22) {
    $(".Victoireniv3").fadeIn(1500);
    victoire.play();
    //alert("GAGNÉ");
  }
});

$("#logommi15").click(function(){
  $('.bullet'+balles).hide();
  balles++;
  score ++;
    $("#target"+score).hide();
  $(".score").html("Score : "+ score);
  audio.play();
  if (score==22) {
    $(".Victoireniv3").fadeIn(1500);
    victoire.play();
    //alert("GAGNÉ");
  }
});

$("#logommi16").click(function(){
  $('.bullet'+balles).hide();
  balles++;
  score ++;
    $("#target"+score).hide();
  $(".score").html("Score : "+ score);
  audio.play();
  if (score==22) {
    $(".Victoireniv3").fadeIn(1500);
    victoire.play();
    //alert("GAGNÉ");
  }
});
$("#logommi17").click(function(){
  $('.bullet'+balles).hide();
  balles++;
  score ++;
    $("#target"+score).hide();
  $(".score").html("Score : "+ score);
  audio.play();
  if (score==22) {
    $(".Victoireniv3").fadeIn(1500);
    victoire.play();
    //alert("GAGNÉ");
  }
});
$("#logommi18").click(function(){
  $('.bullet'+balles).hide();
  balles++;
  score ++;
    $("#target"+score).hide();
  $(".score").html("Score : "+ score);
  audio.play();
  if (score==22) {
    $(".Victoireniv3").fadeIn(1500);
    victoire.play();
    //alert("GAGNÉ");
  }
});
$("#logommi19").click(function(){
  $('.bullet'+balles).hide();
  balles++;
  score ++;
    $("#target"+score).hide();
  $(".score").html("Score : "+ score);
  audio.play();
  if (score==22) {
    $(".Victoireniv3").fadeIn(1500);
    victoire.play();
    //alert("GAGNÉ");
  }
});
$("#logommi20").click(function(){
  $('.bullet'+balles).hide();
  balles++;
  score ++;
    $("#target"+score).hide();
  $(".score").html("Score : "+ score);
  audio.play();
  if (score==22) {
    $(".Victoireniv3").fadeIn(1500);
    victoire.play();
    //alert("GAGNÉ");
  }
});

$("#logommi21").click(function(){
  $('.bullet'+balles).hide();
  balles++;
  score ++;
    $("#target"+score).hide();
  $(".score").html("Score : "+ score);
  audio.play();
  if (score==22) {
    $(".Victoireniv3").fadeIn(1500);
    victoire.play();
    //alert("GAGNÉ");
  }
});
$("#logommi22").click(function(){
  $('.bullet'+balles).hide();
  balles++;
  score ++;
    $("#target"+score).hide();
  $(".score").html("Score : "+ score);
  audio.play();
  if (score==22) {
    $(".Victoireniv3").fadeIn(1500);
    victoire.play();
    //alert("GAGNÉ");
  }
});
