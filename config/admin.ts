export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '10f2ca9beee0ab453166c41ed95093fa'),
  },
});
