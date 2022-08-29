# Express vs Fastify
This is a basic test between a "Hello, world!" written
in Express vs Fastify in order to get an idea of 
their performance.

## How to run
1. `npm i` at the root of the project.
1. Run express on a terminal: `npm start -w express`
1. Run the load test for express on other terminal 
`npm run test:load -w express`.
1. In order to test fastify stop the express server and 
repeat previous steps for the `fastify` workspace
i.e. `npm start -w fastify` -- `npm run test:load -w fastify` in two different terminals.

### Credit 
Gabriel Trujillo (joaqt23@gmail.com)