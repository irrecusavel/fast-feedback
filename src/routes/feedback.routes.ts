import { FastifyPluginAsync } from 'fastify';
import { FeedbackController } from '../controllers/feedback.controller';

const feedbackRoutes: FastifyPluginAsync = async (fastify) => {
    fastify.post('/feedback', FeedbackController.createFeedback);
    fastify.get('/feedback', FeedbackController.listFeedbacks);
    fastify.put('/feedback/:id', FeedbackController.updateFeedback);
    fastify.delete('/feedback/:id', FeedbackController.deleteFeedback);
};

export { feedbackRoutes };