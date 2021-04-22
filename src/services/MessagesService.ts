import { getCustomRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";
import { MessagesRepository } from "../repositories/MessagesRepository";

interface IMessagesCreate {
  admin_id?: string;
  text: string;
  user_id: string;
}

class MessagesService {
  private messagesRepository: Repository<Message>;
  constructor(){
    this.messagesRepository = getCustomRepository(MessagesRepository);
  }
  async create({ user_id, text, admin_id }: IMessagesCreate) {

    const messages = await this.messagesRepository.create({
      user_id,
      text,
      admin_id,
    });
    await this.messagesRepository.save(messages);
    return messages;
  }
  async listByUser(user_id:string){    

    const list = await this.messagesRepository.find({
      where: {user_id},
      relations: ["user"]
    })

    return list
  }
}

export { MessagesService };
