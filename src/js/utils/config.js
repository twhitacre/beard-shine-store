function config ($urlRouterProvider, $stateProvider, $locationProvider) {

 $stateProvider

  // Home Page
  .state('layout', {
    abstract: true,
    templateUrl: 'templates/layouts/layout.html',
    controller: 'LayoutController as vm'
  })
    .state('layout.home', {
    url: '/',
    templateUrl: 'templates/pages/home.html',
    controller: 'ShopController as vm'
  })

  // Interior Pages
  .state('layout.faq', {
    url: '/faq',
    templateUrl: 'templates/pages/faq.html'
  })

  // Product Pages
  .state('layout.shop', {
    url: '/shop',
    templateUrl: 'templates/products/shop.html',
    controller: 'ShopController as vm'
  })
  .state('layout.single', {
    url: '/product/:id',
    templateUrl: 'templates/products/single.html',
    controller: 'ProductController as vm'
  })

  // Cart Pages
  .state('layout.cart', {
    url: '/cart',
    templateUrl: 'templates/products/cart.html',
    controller: 'CartController as vm'
  })


 $urlRouterProvider.otherwise('/');

  // Use HTML5 Mode if not on localhost
  if (window.location.href.indexOf("localhost") < 0) {
    $locationProvider.html5Mode(true);
  }

}

config.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];
export { config };