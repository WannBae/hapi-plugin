const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const notesPlugin = require('./notesPlugin');
const otherPlugin = require('./otherPlugin');

// const init = async () => {
//   const server = Hapi.server();
//   //registrasi satu plugin
//   await server.register({
//     plugin: notesPlugin,
//     options: { notes: [] },
//   },
//   {
//     plugin: otherPlugin,
//     // options:{} berikan nilai options jika dibutuhkan
//   });
//   await server.start();
//   console.log(`Server Berjalan Pada ${server.info.uri}`);
// };

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
