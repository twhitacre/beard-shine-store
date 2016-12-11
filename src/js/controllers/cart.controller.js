function CartController (ShopifyService, $state, ngProgressLite) {

  let vm = this;
 
  vm.removeItem = removeItem;

  init();
  ngProgressLite.start();

  function init() {
    ShopifyService.getCart().then( cart => {
      vm.products = cart.lineItems;
      vm.subtotal = cart.subtotal;
      vm.checkoutUrl = cart.checkoutUrl;
      ngProgressLite.done();
    });
  }

  function removeItem(id) {
    ShopifyService.getCart().then( cart => {
      cart.removeLineItem(id).then( cart => {
        $state.reload();
      });
    });
  } 

}

CartController.$inject = ['ShopifyService', '$state', 'ngProgressLite'];
export { CartController };