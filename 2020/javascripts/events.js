$(document).ready(function(){

  // Aciona collapse
  // $('.collapse').collapse()

  // Ajusta o scroll
  $(".collapsed").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(this).offset().top-32
    }, 500);
  });

})

// PARALLAX - Scroll com diferentes velocidades
// https://codepen.io/JTParrett/pen/BkDie
//Deixa um pouco lento....
$.fn.moveIt = function() {
  var $window = $(window);
  var instances = [];

  $(this).each(function() {
    instances.push(new moveItItem($(this)));
  });

  window.addEventListener('scroll', function() {
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst) {
      inst.update(scrollTop);
    });
  }, {
    passive: true
  });
}

var moveItItem = function(el) {
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop) {
  this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};

// Initialization
$(function() {
  $('[data-scroll-speed]').moveIt();
});


//EXECUTA FUNÇÃO BASEADO NA VISIBILIDADE DE UM ELEMENTO NA VIEWPORT
// Executa animações quando elemento entra na tela
$.fn.isInViewport = function() {
  // topo da viewport
  var viewportTop = $(window).scrollTop();
  // topo do elemento
  var elementTop = $(this).offset().top;
  //base da viewport
  var viewportBottom = viewportTop + $(window).height();
  //retorna true se:
  return elementTop < viewportBottom
};

// Executa animações quando elemento está inteiro na tela
$.fn.isFullInViewport = function() {
  // topo da viewport
  var viewportTop = $(window).scrollTop();
  // topo do elemento
  var elementTop = $(this).offset().top;
  //// altura do elemento
  var elementBottom = elementTop + $(this).outerHeight();
  //base da viewport
  var viewportBottom = viewportTop + $(window).height();
  //retorna true se:
  return elementBottom < viewportBottom
};

function animacoes(){
  $(window).on('resize scroll', function() {
    if ($("#icone1").isInViewport()) {
        $("#icone1").addClass('animate__animated animate__bounceIn');
        $("#icone2").addClass('animate__animated animate__bounceIn animate__delay-1s ');
        $("#icone3").addClass('animate__animated animate__bounceIn animate__delay-2s ');
      }
    if ($("#caixa1").isInViewport()) {
        $("#caixa1").addClass('animate__animated animate__slideInLeftG');
        $("#caixa2").addClass('animate__animated animate__slideInLeftG animate__delay-1s');
        $("#caixa3").addClass('animate__animated animate__slideInDown animate__delay-4s');
      }
    if ($("#integracao").isInViewport()) {
      $("#circulo2").addClass('animate__animated animate__fadeInLeftP');
      $("#integracao").addClass('animate__animated animate__slideInRightG animate__delay-1s visivel');
      $("#circulo1").addClass('animate__animated animate__fadeInRightP');
      $("#integracao-2").addClass('animate__animated animate__fadeIn animate__delay-1s visivel');
      $("#integracao-3").addClass('animate__animated animate__slideInLeftG animate__delay-1s visivel');
    }
    if ($("#ilustra1-container").isInViewport()) {
      $("#ilustra1").addClass('animate__animated animate__slideInUp');
      $("#ilustra2").addClass('animate__animated animate__slideInUp animate__delay-1s');
      $("#ilustra3").addClass('animate__animated animate__slideInUp animate__delay-2s');
    }
    if ($("#final").isInViewport()) {
      $("#chamada").addClass('animate__animated animate__fadeInLeft animate__delay-2s');
      $("#colegas").addClass('animate__animated animate__fadeIn');
    }
  });
}

// animações p/ tela pequena
function animacoesSM(){
  $(window).on('resize scroll', function() {
    if ($("#icone1").isInViewport()) {
        $("#icone1").addClass('animate__animated animate__bounceIn');
      }
    if ($("#icone2").isInViewport()) {
        $("#icone2").addClass('animate__animated animate__bounceIn');
      }
    if ($("#icone3").isInViewport()) {
        $("#icone3").addClass('animate__animated animate__bounceIn');
      }
    if ($("#caixa1").isInViewport()) {
        $("#caixa1").addClass('animate__animated animate__slideInLeftG');
        $("#caixa2").addClass('animate__animated animate__slideInLeftG animate__delay-1s');
        $("#caixa3").addClass('animate__animated animate__slideInDown animate__delay-4s');
      }
    if ($("#integracao").isInViewport()) {
      $("#circulo2").addClass('animate__animated animate__fadeInLeftP');
      $("#integracao").addClass('animate__animated animate__slideInRightG animate__delay-1s visivel');
      $("#circulo1").addClass('animate__animated animate__fadeInRightP');
      $("#integracao-2").addClass('animate__animated animate__fadeIn animate__delay-1s visivel');
      $("#integracao-3").addClass('animate__animated animate__slideInLeftG animate__delay-1s visivel');
    }
    if ($("#ilustra1-container").isInViewport()) {
      $("#ilustra1").addClass('animate__animated animate__slideInUp');
    }
    if ($("#ilustra2-container").isInViewport()) {
      $("#ilustra2").addClass('animate__animated animate__slideInUp');
    }
    if ($("#ilustra3-container").isInViewport()) {
      $("#ilustra3").addClass('animate__animated animate__slideInUp');
    }
    if ($("#final").isInViewport()) {
      $("#chamada").addClass('animate__animated animate__fadeInLeft animate__delay-2s');
      $("#colegas").addClass('animate__animated animate__fadeIn');
    }
  });
}



// Muda as animações dependendo do tamanho inicial da tela
function myFunction(x) {
  if (x.matches) { // If media query matches
    animacoesSM();
  } else {
    animacoes();
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
// x.addListener(myFunction)
