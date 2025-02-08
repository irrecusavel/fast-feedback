import Fastify from 'fastify';
import { feedbackRoutes } from './routes/feedback.routes';

const fastify = Fastify();
fastify.register(feedbackRoutes);

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});