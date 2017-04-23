import Hapi from 'hapi';

const server = new Hapi.Server();

server.connection({
  port: 8080
});

server.start(err => {

  if (err) {

    // Fancy error handling here
    console.error('Error was handled!');
    console.error(err);

  }

  console.log(`Server started at ${ server.info.uri }`);

});

// Route: Hello World
server.route({
  method: 'GET',
  path: '/hello',
  handler: (request, reply) => {
    reply('<h1>Hello World!</h1>');
  }
});