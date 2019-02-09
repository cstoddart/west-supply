import Client from 'shopify-buy';

export const shopifyClient = Client.buildClient({
  domain: 'west-supply.myshopify.com',
  storefrontAccessToken: '7fba78a00756e2fbca9c8b07cf7db441',
});