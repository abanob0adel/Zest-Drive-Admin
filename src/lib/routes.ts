const routes = {
  Auth: {
    Login: "/login",
  },
  Dashboard: {
    Home: "/",
    Brand: {
      Main: "/brands",
      Add: "/brands/add",
      Edit: (slug: string) => `/brands/edit/${slug}`,
    },
    Car: {
      Main: "/car",
      Add: "/car/add",
      Edit: (slug: string) => `/car/edit/${slug}`,
    },
  },
} as const;

export default routes;
