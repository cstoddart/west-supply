import { shopifyClient } from '../../shopifyClient';

export async function getCart(context) {
  const checkoutId = localStorage.getItem('checkoutId');
  if (checkoutId) {
    const checkout = await shopifyClient.checkout.fetch(checkoutId);
    context.updateContext({ checkout });
    return checkout;
  }
  const checkout = await shopifyClient.checkout.create();
  context.updateContext({ checkout });
  localStorage.setItem('checkoutId', checkout.id);
  return checkout;
}

export async function addToCart(productId, context) {
  const { id: checkoutId } = context.checkout.id
    ? context.checkout
    : await getCart(context);
  const checkout = await shopifyClient.checkout.addLineItems(checkoutId, [{
    variantId: productId,
    quantity: 1, // TODO: add instead of set to 1
  }]);
  context.updateContext({ checkout });
  return checkout;
}

export async function removeFromCart(productIds, context) {
  const { id: checkoutId } = context.checkout.id
    ? context.checkout
    : await getCart(context);
  console.log('CONTEXT', context);
  console.log('CHECKOUT ID', checkoutId);
   const checkout = await shopifyClient.checkout.removeLineItems(checkoutId, productIds);
   context.updateContext({ checkout });
   return checkout;
}