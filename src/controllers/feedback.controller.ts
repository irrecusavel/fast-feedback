import { prisma } from '../utils/prisma';
import {
  createFeedbackSchema,
  updateFeedbackSchema,
} from '../schemas/feedback.schema';
import { FastifyReply, FastifyRequest } from 'fastify';

export class FeedbackController {
  static async createFeedback(request: FastifyRequest, reply: FastifyReply) {
    const { type, message } = createFeedbackSchema.parse(request.body);

    const feedback = await prisma.feedback.create({
      data: { type, message },
    });

    return reply.status(201).send(feedback);
  }

  static async listFeedbacks(_request: FastifyRequest, reply: FastifyReply) {
    const feedbacks = await prisma.feedback.findMany();
    return reply.send(feedbacks);
  }

  static async updateFeedback(
    request: FastifyRequest<{ Body: { status: string } }>,
    reply: FastifyReply
  ) {
    const { id } = request.params as { id: string };

    updateFeedbackSchema.parse(request.body);
    const feedback = await prisma.feedback.update({
      where: { id: Number(id) },
      data: { status: request.body.status },
    });

    return reply.send(feedback);
  }

  static async deleteFeedback(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };

    await prisma.feedback.delete({
      where: { id: Number(id) },
    });

    return reply.status(200).send({
      message: "Feedback deleted successfully",
    });
  }
}