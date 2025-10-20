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
  },
} as const;

export default routes;
