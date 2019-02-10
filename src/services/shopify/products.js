import { shopifyClient } from '../../shopifyClient';

export async function getProducts(context) {
  const products = await shopifyClient.product.fetchAll()
  context.updateContext({ products });
  return products;
}
