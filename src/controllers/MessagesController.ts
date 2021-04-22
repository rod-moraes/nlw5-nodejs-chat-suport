import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesService";

class MessagesController {
  async create(request: Request, response: Response){
    const { user_id, text, admin_id } = request.body;

    const messagesService = new MessagesService();
    const messages = await messagesService.create({ user_id, text, admin_id });
    return response.json(messages);
   
  }

  async showByUser(request: Request, response: Response){
    const {id} = request.params;

    const messagesService = new MessagesService();

    const list = await messagesService.listByUser(id);

    return response.json(list);

  }
}

export { MessagesController };
