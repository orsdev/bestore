export const baseEndpoint =
  process.env.Base_Endpoint ?? "https://fake-store-api.mock.beeceptor.com/api";

export const appRoutes = {
  index: () => "/",
  product: (productId: string) => `/shop/${productId}`,
};

export const proxyRoutes = {
  getProducts: (query?: string) => `/api/products${query}`,
};
