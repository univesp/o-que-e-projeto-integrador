$(document).ready(function(){

  // Cards papéis
  $(".cards-container .card-papel").click(function() {
    $(this).find(".collapse").collapse('toggle');
  })
  $('.card-explicacao.collapse').on('shown.bs.collapse', function() {
    $(this).parent().addClass('aberto');
    // var quantos = $(".card-explicacao.collapse").length;
    // var abertos = $(".card-explicacao.collapse.show").length;
    // if (abertos == quantos) {
    //   $(".btn-expandir").prop('disabled', true);
    // }
    // $('.btn-recolher').prop('disabled', false);
  })
  $('.card-explicacao.collapse').on('hide.bs.collapse', function() {
    $(this).parent().removeClass('aberto');
  })
  $('.card-explicacao.collapse').on('hidden.bs.collapse', function() {
    // var abertos = $(".card-explicacao.collapse.show").length;
    // if (abertos == 0) {
    //   $('.btn-recolher').prop('disabled', true);
    // }
    // $(".btn-expandir").prop('disabled', false);
  })
  // Botões expandir/recolher
  $('.btn-expandir').click(function() {
    $('.card-papel').addClass('aberto');
    $('.card-explicacao.collapse').collapse('show');
  })
  $('.btn-recolher').click(function() {
    $('.card-explicacao.collapse').collapse('hide');
  })



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
    if ($("#abpp").isFullInViewport()) {
      $("#abpp").addClass('animate__animated animate__flipInY');
      $("#thinking").addClass('animate__animated animate__flipInY animate__delay-1s');
    }
    if ($("#duvidas-interrogacao").isFullInViewport()) {
      $("#duvidas-interrogacao").addClass('animate__animated animate__fadeInUp');
    }
    if ($("#chamada").isFullInViewport()) {
      // $("#colegas").addClass('animate__animated animate__fadeIn');
      $("#chamada").addClass('animate__animated animate__fadeInLeft');
    }
  });
}

//// animações p/ tela pequena
// function animacoesSM(){
//   $(window).on('resize scroll', function() {
//     if ($("#abpp").isFullInViewport()) {
//       $("#abpp").addClass('animate__animated animate__flipInY');
//       $("#thinking").addClass('animate__animated animate__flipInY animate__delay-1s');
//     }
//     if ($("#duvidas-ilustra").isInViewport()) {
//       $("#duvidas-interrogacao").addClass('animate__animated animate__fadeInUp');
//     }
//     if ($("#final").isInViewport()) {
//       $("#chamada").addClass('animate__animated animate__fadeInLeft animate__delay-2s');
//       $("#colegas").addClass('animate__animated animate__fadeIn');
//     }
//   });
// }



// // Muda as animações dependendo do tamanho inicial da tela
// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     animacoesSM();
//   } else {
//     animacoes();
//   }
// }
//
// var x = window.matchMedia("(max-width: 700px)")
// myFunction(x) // Call listener function at run time
// // x.addListener(myFunction)

animacoes();
