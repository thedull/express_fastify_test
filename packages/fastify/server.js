import Fastify from 'fastify';

const fastify = Fastify({logger: false});

fastify.get('/fastify', async(request, reply) => {
    reply.code(200)
        .type('application/json')
        .send({response:'Hello, world!'});
});

fastify.listen({port: 3001}, () => console.log('Listening on http://localhost:3001/fastify/'));