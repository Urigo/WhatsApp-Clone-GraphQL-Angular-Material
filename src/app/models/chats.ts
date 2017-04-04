export namespace Inputs {
  export type chats = Chat[];
}

export namespace Outputs {
  export type select = Chat;
}

export interface Member {
  id: string;
  name: string;
}

export interface Message {
  content: string;
  author: Member;
}

export interface Chat {
  id: string;
  members: Member[];
  date: string;
  message: Message;
}
