import { shopifyClient } from '../../shopifyClient';

export async function getProducts(context) {
  const products = await shopifyClient.product.fetchAll();

  if (context) {
    context.updateContext({ products });
  }

  return products;
}

export async function createCheckout(context) {
  const checkout = shopifyClient.checkout.createCheckout();
  console.log('checkout', checkout);
  if (context) {
    context.updateContext({ checkout })
  }

  return checkout;
}

export async function addToCart(product, context) {
  const checkout = context.checkout
    ? context.checkout
    : await createCheckout(context);

  
}