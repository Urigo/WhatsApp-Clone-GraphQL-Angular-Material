/* tslint:disable */


export type DateTime = any;
/* An object with an ID */
export interface Node {
  id: string; /* The id of the object. */
}

export interface Query {
  allChats: Chat[]; 
  allFiles: File[]; 
  allMembers: Member[]; 
  allMessages: Message[]; 
  allUsers: User[]; 
  _allChatsMeta: _QueryMeta; 
  _allFilesMeta: _QueryMeta; 
  _allMembersMeta: _QueryMeta; 
  _allMessagesMeta: _QueryMeta; 
  _allUsersMeta: _QueryMeta; 
  Chat?: Chat; 
  File?: File; 
  Member?: Member; 
  Message?: Message; 
  User?: User; 
  user?: User; 
  node?: Node; /* Fetches an object given its ID */
}

export interface Chat extends Node {
  createdAt: DateTime; 
  id: string; 
  members: Member[]; 
  messages: Message[]; 
  updatedAt: DateTime; 
  _membersMeta: _QueryMeta; /* Meta information about the query. */
  _messagesMeta: _QueryMeta; /* Meta information about the query. */
}
/* Represents a user */
export interface Member extends Node {
  chats: Chat[]; 
  createdAt: DateTime; 
  id: string; 
  image: string; 
  login: string; 
  messages: Message[]; 
  name: string; /* Firstname + Lastname */
  title?: string; /* Short info about a user */
  updatedAt: DateTime; 
  _chatsMeta: _QueryMeta; /* Meta information about the query. */
  _messagesMeta: _QueryMeta; /* Meta information about the query. */
}
/* Just a message */
export interface Message extends Node {
  author?: Member; 
  chat?: Chat; 
  content: string; 
  createdAt: DateTime; 
  id: string; 
  updatedAt: DateTime; 
}
/* Meta information about the query. */
export interface _QueryMeta {
  count: number; 
}

export interface File extends Node {
  contentType: string; 
  createdAt: DateTime; 
  id: string; 
  name: string; 
  secret: string; 
  size: number; 
  updatedAt: DateTime; 
  url: string; 
}

export interface User extends Node {
  createdAt: DateTime; 
  id: string; 
  updatedAt: DateTime; 
}

export interface Mutation {
  createChat?: Chat; 
  createFile?: File; 
  createMember?: Member; 
  createMessage?: Message; 
  updateChat?: Chat; 
  updateFile?: File; 
  updateMember?: Member; 
  updateMessage?: Message; 
  updateUser?: User; 
  updateOrCreateChat?: Chat; 
  updateOrCreateFile?: File; 
  updateOrCreateMember?: Member; 
  updateOrCreateMessage?: Message; 
  updateOrCreateUser?: User; 
  deleteChat?: Chat; 
  deleteFile?: File; 
  deleteMember?: Member; 
  deleteMessage?: Message; 
  deleteUser?: User; 
  addToChatOnMember?: AddToChatOnMemberPayload; 
  addToChatOnMessage?: AddToChatOnMessagePayload; 
  addToMessageOnMember?: AddToMessageOnMemberPayload; 
  removeFromChatOnMember?: RemoveFromChatOnMemberPayload; 
  removeFromChatOnMessage?: RemoveFromChatOnMessagePayload; 
  removeFromMessageOnMember?: RemoveFromMessageOnMemberPayload; 
  createUser?: User; 
}

export interface AddToChatOnMemberPayload {
  chatsChat?: Chat; 
  membersMember?: Member; 
}

export interface AddToChatOnMessagePayload {
  chatChat?: Chat; 
  messagesMessage?: Message; 
}

export interface AddToMessageOnMemberPayload {
  messagesMessage?: Message; 
  authorMember?: Member; 
}

export interface RemoveFromChatOnMemberPayload {
  chatsChat?: Chat; 
  membersMember?: Member; 
}

export interface RemoveFromChatOnMessagePayload {
  chatChat?: Chat; 
  messagesMessage?: Message; 
}

export interface RemoveFromMessageOnMemberPayload {
  messagesMessage?: Message; 
  authorMember?: Member; 
}

export interface Subscription {
  Chat?: ChatSubscriptionPayload; 
  File?: FileSubscriptionPayload; 
  Member?: MemberSubscriptionPayload; 
  Message?: MessageSubscriptionPayload; 
  User?: UserSubscriptionPayload; 
}

export interface ChatSubscriptionPayload {
  mutation: _ModelMutationType; 
  node?: Chat; 
  updatedFields: string[]; 
  previousValues?: ChatPreviousValues; 
}

export interface ChatPreviousValues {
  createdAt: DateTime; 
  id: string; 
  updatedAt: DateTime; 
}

export interface FileSubscriptionPayload {
  mutation: _ModelMutationType; 
  node?: File; 
  updatedFields: string[]; 
  previousValues?: FilePreviousValues; 
}

export interface FilePreviousValues {
  contentType: string; 
  createdAt: DateTime; 
  id: string; 
  name: string; 
  secret: string; 
  size: number; 
  updatedAt: DateTime; 
  url: string; 
}

export interface MemberSubscriptionPayload {
  mutation: _ModelMutationType; 
  node?: Member; 
  updatedFields: string[]; 
  previousValues?: MemberPreviousValues; 
}

export interface MemberPreviousValues {
  createdAt: DateTime; 
  id: string; 
  image: string; 
  login: string; 
  name: string; /* Firstname + Lastname */
  title?: string; /* Short info about a user */
  updatedAt: DateTime; 
}

export interface MessageSubscriptionPayload {
  mutation: _ModelMutationType; 
  node?: Message; 
  updatedFields: string[]; 
  previousValues?: MessagePreviousValues; 
}

export interface MessagePreviousValues {
  content: string; 
  createdAt: DateTime; 
  id: string; 
  updatedAt: DateTime; 
}

export interface UserSubscriptionPayload {
  mutation: _ModelMutationType; 
  node?: User; 
  updatedFields: string[]; 
  previousValues?: UserPreviousValues; 
}

export interface UserPreviousValues {
  createdAt: DateTime; 
  id: string; 
  updatedAt: DateTime; 
}

export interface ChatFilter {
  AND: ChatFilter[]; /* Logical AND on all given filters. */
  OR: ChatFilter[]; /* Logical OR on all given filters. */
  createdAt?: DateTime; 
  createdAt_not?: DateTime; /* All values that are not equal to given value. */
  createdAt_in: DateTime[]; /* All values that are contained in given list. */
  createdAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  createdAt_lt?: DateTime; /* All values less than the given value. */
  createdAt_lte?: DateTime; /* All values less than or equal the given value. */
  createdAt_gt?: DateTime; /* All values greater than the given value. */
  createdAt_gte?: DateTime; /* All values greater than or equal the given value. */
  id?: string; 
  id_not?: string; /* All values that are not equal to given value. */
  id_in: string[]; /* All values that are contained in given list. */
  id_not_in: string[]; /* All values that are not contained in given list. */
  id_lt?: string; /* All values less than the given value. */
  id_lte?: string; /* All values less than or equal the given value. */
  id_gt?: string; /* All values greater than the given value. */
  id_gte?: string; /* All values greater than or equal the given value. */
  id_contains?: string; /* All values containing the given string. */
  id_not_contains?: string; /* All values not containing the given string. */
  id_starts_with?: string; /* All values starting with the given string. */
  id_not_starts_with?: string; /* All values not starting with the given string. */
  id_ends_with?: string; /* All values ending with the given string. */
  id_not_ends_with?: string; /* All values not ending with the given string. */
  updatedAt?: DateTime; 
  updatedAt_not?: DateTime; /* All values that are not equal to given value. */
  updatedAt_in: DateTime[]; /* All values that are contained in given list. */
  updatedAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  updatedAt_lt?: DateTime; /* All values less than the given value. */
  updatedAt_lte?: DateTime; /* All values less than or equal the given value. */
  updatedAt_gt?: DateTime; /* All values greater than the given value. */
  updatedAt_gte?: DateTime; /* All values greater than or equal the given value. */
  members_every?: MemberFilter; 
  members_some?: MemberFilter; 
  members_none?: MemberFilter; 
  messages_every?: MessageFilter; 
  messages_some?: MessageFilter; 
  messages_none?: MessageFilter; 
}

export interface MemberFilter {
  AND: MemberFilter[]; /* Logical AND on all given filters. */
  OR: MemberFilter[]; /* Logical OR on all given filters. */
  createdAt?: DateTime; 
  createdAt_not?: DateTime; /* All values that are not equal to given value. */
  createdAt_in: DateTime[]; /* All values that are contained in given list. */
  createdAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  createdAt_lt?: DateTime; /* All values less than the given value. */
  createdAt_lte?: DateTime; /* All values less than or equal the given value. */
  createdAt_gt?: DateTime; /* All values greater than the given value. */
  createdAt_gte?: DateTime; /* All values greater than or equal the given value. */
  id?: string; 
  id_not?: string; /* All values that are not equal to given value. */
  id_in: string[]; /* All values that are contained in given list. */
  id_not_in: string[]; /* All values that are not contained in given list. */
  id_lt?: string; /* All values less than the given value. */
  id_lte?: string; /* All values less than or equal the given value. */
  id_gt?: string; /* All values greater than the given value. */
  id_gte?: string; /* All values greater than or equal the given value. */
  id_contains?: string; /* All values containing the given string. */
  id_not_contains?: string; /* All values not containing the given string. */
  id_starts_with?: string; /* All values starting with the given string. */
  id_not_starts_with?: string; /* All values not starting with the given string. */
  id_ends_with?: string; /* All values ending with the given string. */
  id_not_ends_with?: string; /* All values not ending with the given string. */
  image?: string; 
  image_not?: string; /* All values that are not equal to given value. */
  image_in: string[]; /* All values that are contained in given list. */
  image_not_in: string[]; /* All values that are not contained in given list. */
  image_lt?: string; /* All values less than the given value. */
  image_lte?: string; /* All values less than or equal the given value. */
  image_gt?: string; /* All values greater than the given value. */
  image_gte?: string; /* All values greater than or equal the given value. */
  image_contains?: string; /* All values containing the given string. */
  image_not_contains?: string; /* All values not containing the given string. */
  image_starts_with?: string; /* All values starting with the given string. */
  image_not_starts_with?: string; /* All values not starting with the given string. */
  image_ends_with?: string; /* All values ending with the given string. */
  image_not_ends_with?: string; /* All values not ending with the given string. */
  login?: string; 
  login_not?: string; /* All values that are not equal to given value. */
  login_in: string[]; /* All values that are contained in given list. */
  login_not_in: string[]; /* All values that are not contained in given list. */
  login_lt?: string; /* All values less than the given value. */
  login_lte?: string; /* All values less than or equal the given value. */
  login_gt?: string; /* All values greater than the given value. */
  login_gte?: string; /* All values greater than or equal the given value. */
  login_contains?: string; /* All values containing the given string. */
  login_not_contains?: string; /* All values not containing the given string. */
  login_starts_with?: string; /* All values starting with the given string. */
  login_not_starts_with?: string; /* All values not starting with the given string. */
  login_ends_with?: string; /* All values ending with the given string. */
  login_not_ends_with?: string; /* All values not ending with the given string. */
  name?: string; 
  name_not?: string; /* All values that are not equal to given value. */
  name_in: string[]; /* All values that are contained in given list. */
  name_not_in: string[]; /* All values that are not contained in given list. */
  name_lt?: string; /* All values less than the given value. */
  name_lte?: string; /* All values less than or equal the given value. */
  name_gt?: string; /* All values greater than the given value. */
  name_gte?: string; /* All values greater than or equal the given value. */
  name_contains?: string; /* All values containing the given string. */
  name_not_contains?: string; /* All values not containing the given string. */
  name_starts_with?: string; /* All values starting with the given string. */
  name_not_starts_with?: string; /* All values not starting with the given string. */
  name_ends_with?: string; /* All values ending with the given string. */
  name_not_ends_with?: string; /* All values not ending with the given string. */
  title?: string; 
  title_not?: string; /* All values that are not equal to given value. */
  title_in: string[]; /* All values that are contained in given list. */
  title_not_in: string[]; /* All values that are not contained in given list. */
  title_lt?: string; /* All values less than the given value. */
  title_lte?: string; /* All values less than or equal the given value. */
  title_gt?: string; /* All values greater than the given value. */
  title_gte?: string; /* All values greater than or equal the given value. */
  title_contains?: string; /* All values containing the given string. */
  title_not_contains?: string; /* All values not containing the given string. */
  title_starts_with?: string; /* All values starting with the given string. */
  title_not_starts_with?: string; /* All values not starting with the given string. */
  title_ends_with?: string; /* All values ending with the given string. */
  title_not_ends_with?: string; /* All values not ending with the given string. */
  updatedAt?: DateTime; 
  updatedAt_not?: DateTime; /* All values that are not equal to given value. */
  updatedAt_in: DateTime[]; /* All values that are contained in given list. */
  updatedAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  updatedAt_lt?: DateTime; /* All values less than the given value. */
  updatedAt_lte?: DateTime; /* All values less than or equal the given value. */
  updatedAt_gt?: DateTime; /* All values greater than the given value. */
  updatedAt_gte?: DateTime; /* All values greater than or equal the given value. */
  chats_every?: ChatFilter; 
  chats_some?: ChatFilter; 
  chats_none?: ChatFilter; 
  messages_every?: MessageFilter; 
  messages_some?: MessageFilter; 
  messages_none?: MessageFilter; 
}

export interface MessageFilter {
  AND: MessageFilter[]; /* Logical AND on all given filters. */
  OR: MessageFilter[]; /* Logical OR on all given filters. */
  content?: string; 
  content_not?: string; /* All values that are not equal to given value. */
  content_in: string[]; /* All values that are contained in given list. */
  content_not_in: string[]; /* All values that are not contained in given list. */
  content_lt?: string; /* All values less than the given value. */
  content_lte?: string; /* All values less than or equal the given value. */
  content_gt?: string; /* All values greater than the given value. */
  content_gte?: string; /* All values greater than or equal the given value. */
  content_contains?: string; /* All values containing the given string. */
  content_not_contains?: string; /* All values not containing the given string. */
  content_starts_with?: string; /* All values starting with the given string. */
  content_not_starts_with?: string; /* All values not starting with the given string. */
  content_ends_with?: string; /* All values ending with the given string. */
  content_not_ends_with?: string; /* All values not ending with the given string. */
  createdAt?: DateTime; 
  createdAt_not?: DateTime; /* All values that are not equal to given value. */
  createdAt_in: DateTime[]; /* All values that are contained in given list. */
  createdAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  createdAt_lt?: DateTime; /* All values less than the given value. */
  createdAt_lte?: DateTime; /* All values less than or equal the given value. */
  createdAt_gt?: DateTime; /* All values greater than the given value. */
  createdAt_gte?: DateTime; /* All values greater than or equal the given value. */
  id?: string; 
  id_not?: string; /* All values that are not equal to given value. */
  id_in: string[]; /* All values that are contained in given list. */
  id_not_in: string[]; /* All values that are not contained in given list. */
  id_lt?: string; /* All values less than the given value. */
  id_lte?: string; /* All values less than or equal the given value. */
  id_gt?: string; /* All values greater than the given value. */
  id_gte?: string; /* All values greater than or equal the given value. */
  id_contains?: string; /* All values containing the given string. */
  id_not_contains?: string; /* All values not containing the given string. */
  id_starts_with?: string; /* All values starting with the given string. */
  id_not_starts_with?: string; /* All values not starting with the given string. */
  id_ends_with?: string; /* All values ending with the given string. */
  id_not_ends_with?: string; /* All values not ending with the given string. */
  updatedAt?: DateTime; 
  updatedAt_not?: DateTime; /* All values that are not equal to given value. */
  updatedAt_in: DateTime[]; /* All values that are contained in given list. */
  updatedAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  updatedAt_lt?: DateTime; /* All values less than the given value. */
  updatedAt_lte?: DateTime; /* All values less than or equal the given value. */
  updatedAt_gt?: DateTime; /* All values greater than the given value. */
  updatedAt_gte?: DateTime; /* All values greater than or equal the given value. */
  author?: MemberFilter; 
  chat?: ChatFilter; 
}

export interface FileFilter {
  AND: FileFilter[]; /* Logical AND on all given filters. */
  OR: FileFilter[]; /* Logical OR on all given filters. */
  contentType?: string; 
  contentType_not?: string; /* All values that are not equal to given value. */
  contentType_in: string[]; /* All values that are contained in given list. */
  contentType_not_in: string[]; /* All values that are not contained in given list. */
  contentType_lt?: string; /* All values less than the given value. */
  contentType_lte?: string; /* All values less than or equal the given value. */
  contentType_gt?: string; /* All values greater than the given value. */
  contentType_gte?: string; /* All values greater than or equal the given value. */
  contentType_contains?: string; /* All values containing the given string. */
  contentType_not_contains?: string; /* All values not containing the given string. */
  contentType_starts_with?: string; /* All values starting with the given string. */
  contentType_not_starts_with?: string; /* All values not starting with the given string. */
  contentType_ends_with?: string; /* All values ending with the given string. */
  contentType_not_ends_with?: string; /* All values not ending with the given string. */
  createdAt?: DateTime; 
  createdAt_not?: DateTime; /* All values that are not equal to given value. */
  createdAt_in: DateTime[]; /* All values that are contained in given list. */
  createdAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  createdAt_lt?: DateTime; /* All values less than the given value. */
  createdAt_lte?: DateTime; /* All values less than or equal the given value. */
  createdAt_gt?: DateTime; /* All values greater than the given value. */
  createdAt_gte?: DateTime; /* All values greater than or equal the given value. */
  id?: string; 
  id_not?: string; /* All values that are not equal to given value. */
  id_in: string[]; /* All values that are contained in given list. */
  id_not_in: string[]; /* All values that are not contained in given list. */
  id_lt?: string; /* All values less than the given value. */
  id_lte?: string; /* All values less than or equal the given value. */
  id_gt?: string; /* All values greater than the given value. */
  id_gte?: string; /* All values greater than or equal the given value. */
  id_contains?: string; /* All values containing the given string. */
  id_not_contains?: string; /* All values not containing the given string. */
  id_starts_with?: string; /* All values starting with the given string. */
  id_not_starts_with?: string; /* All values not starting with the given string. */
  id_ends_with?: string; /* All values ending with the given string. */
  id_not_ends_with?: string; /* All values not ending with the given string. */
  name?: string; 
  name_not?: string; /* All values that are not equal to given value. */
  name_in: string[]; /* All values that are contained in given list. */
  name_not_in: string[]; /* All values that are not contained in given list. */
  name_lt?: string; /* All values less than the given value. */
  name_lte?: string; /* All values less than or equal the given value. */
  name_gt?: string; /* All values greater than the given value. */
  name_gte?: string; /* All values greater than or equal the given value. */
  name_contains?: string; /* All values containing the given string. */
  name_not_contains?: string; /* All values not containing the given string. */
  name_starts_with?: string; /* All values starting with the given string. */
  name_not_starts_with?: string; /* All values not starting with the given string. */
  name_ends_with?: string; /* All values ending with the given string. */
  name_not_ends_with?: string; /* All values not ending with the given string. */
  secret?: string; 
  secret_not?: string; /* All values that are not equal to given value. */
  secret_in: string[]; /* All values that are contained in given list. */
  secret_not_in: string[]; /* All values that are not contained in given list. */
  secret_lt?: string; /* All values less than the given value. */
  secret_lte?: string; /* All values less than or equal the given value. */
  secret_gt?: string; /* All values greater than the given value. */
  secret_gte?: string; /* All values greater than or equal the given value. */
  secret_contains?: string; /* All values containing the given string. */
  secret_not_contains?: string; /* All values not containing the given string. */
  secret_starts_with?: string; /* All values starting with the given string. */
  secret_not_starts_with?: string; /* All values not starting with the given string. */
  secret_ends_with?: string; /* All values ending with the given string. */
  secret_not_ends_with?: string; /* All values not ending with the given string. */
  size?: number; 
  size_not?: number; /* All values that are not equal to given value. */
  size_in: number[]; /* All values that are contained in given list. */
  size_not_in: number[]; /* All values that are not contained in given list. */
  size_lt?: number; /* All values less than the given value. */
  size_lte?: number; /* All values less than or equal the given value. */
  size_gt?: number; /* All values greater than the given value. */
  size_gte?: number; /* All values greater than or equal the given value. */
  updatedAt?: DateTime; 
  updatedAt_not?: DateTime; /* All values that are not equal to given value. */
  updatedAt_in: DateTime[]; /* All values that are contained in given list. */
  updatedAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  updatedAt_lt?: DateTime; /* All values less than the given value. */
  updatedAt_lte?: DateTime; /* All values less than or equal the given value. */
  updatedAt_gt?: DateTime; /* All values greater than the given value. */
  updatedAt_gte?: DateTime; /* All values greater than or equal the given value. */
  url?: string; 
  url_not?: string; /* All values that are not equal to given value. */
  url_in: string[]; /* All values that are contained in given list. */
  url_not_in: string[]; /* All values that are not contained in given list. */
  url_lt?: string; /* All values less than the given value. */
  url_lte?: string; /* All values less than or equal the given value. */
  url_gt?: string; /* All values greater than the given value. */
  url_gte?: string; /* All values greater than or equal the given value. */
  url_contains?: string; /* All values containing the given string. */
  url_not_contains?: string; /* All values not containing the given string. */
  url_starts_with?: string; /* All values starting with the given string. */
  url_not_starts_with?: string; /* All values not starting with the given string. */
  url_ends_with?: string; /* All values ending with the given string. */
  url_not_ends_with?: string; /* All values not ending with the given string. */
}

export interface UserFilter {
  AND: UserFilter[]; /* Logical AND on all given filters. */
  OR: UserFilter[]; /* Logical OR on all given filters. */
  createdAt?: DateTime; 
  createdAt_not?: DateTime; /* All values that are not equal to given value. */
  createdAt_in: DateTime[]; /* All values that are contained in given list. */
  createdAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  createdAt_lt?: DateTime; /* All values less than the given value. */
  createdAt_lte?: DateTime; /* All values less than or equal the given value. */
  createdAt_gt?: DateTime; /* All values greater than the given value. */
  createdAt_gte?: DateTime; /* All values greater than or equal the given value. */
  id?: string; 
  id_not?: string; /* All values that are not equal to given value. */
  id_in: string[]; /* All values that are contained in given list. */
  id_not_in: string[]; /* All values that are not contained in given list. */
  id_lt?: string; /* All values less than the given value. */
  id_lte?: string; /* All values less than or equal the given value. */
  id_gt?: string; /* All values greater than the given value. */
  id_gte?: string; /* All values greater than or equal the given value. */
  id_contains?: string; /* All values containing the given string. */
  id_not_contains?: string; /* All values not containing the given string. */
  id_starts_with?: string; /* All values starting with the given string. */
  id_not_starts_with?: string; /* All values not starting with the given string. */
  id_ends_with?: string; /* All values ending with the given string. */
  id_not_ends_with?: string; /* All values not ending with the given string. */
  updatedAt?: DateTime; 
  updatedAt_not?: DateTime; /* All values that are not equal to given value. */
  updatedAt_in: DateTime[]; /* All values that are contained in given list. */
  updatedAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  updatedAt_lt?: DateTime; /* All values less than the given value. */
  updatedAt_lte?: DateTime; /* All values less than or equal the given value. */
  updatedAt_gt?: DateTime; /* All values greater than the given value. */
  updatedAt_gte?: DateTime; /* All values greater than or equal the given value. */
}

export interface ChatmembersMember {
  image: string; 
  login?: string; 
  name: string; /* Firstname + Lastname */
  title?: string; /* Short info about a user */
  chatsIds: string[]; 
  chats: MemberchatsChat[]; 
  messagesIds: string[]; 
  messages: MembermessagesMessage[]; 
}

export interface MemberchatsChat {
  membersIds: string[]; 
  members: ChatmembersMember[]; 
  messagesIds: string[]; 
  messages: ChatmessagesMessage[]; 
}

export interface ChatmessagesMessage {
  content: string; 
  authorId?: string; 
  author?: MessageauthorMember; 
}

export interface MessageauthorMember {
  image: string; 
  login?: string; 
  name: string; /* Firstname + Lastname */
  title?: string; /* Short info about a user */
  chatsIds: string[]; 
  chats: MemberchatsChat[]; 
  messagesIds: string[]; 
  messages: MembermessagesMessage[]; 
}

export interface MembermessagesMessage {
  content: string; 
  chatId?: string; 
  chat?: MessagechatChat; 
}

export interface MessagechatChat {
  membersIds: string[]; 
  members: ChatmembersMember[]; 
  messagesIds: string[]; 
  messages: ChatmessagesMessage[]; 
}

export interface UpdateChat {
  id: string; 
  membersIds: string[]; 
  members: ChatmembersMember[]; 
  messagesIds: string[]; 
  messages: ChatmessagesMessage[]; 
}

export interface CreateChat {
  membersIds: string[]; 
  members: ChatmembersMember[]; 
  messagesIds: string[]; 
  messages: ChatmessagesMessage[]; 
}

export interface UpdateFile {
  id: string; 
  name?: string; 
}

export interface CreateFile {
  name: string; 
}

export interface UpdateMember {
  id: string; 
  image?: string; 
  login?: string; 
  name?: string; /* Firstname + Lastname */
  title?: string; /* Short info about a user */
  chatsIds: string[]; 
  chats: MemberchatsChat[]; 
  messagesIds: string[]; 
  messages: MembermessagesMessage[]; 
}

export interface CreateMember {
  image: string; 
  login?: string; 
  name: string; /* Firstname + Lastname */
  title?: string; /* Short info about a user */
  chatsIds: string[]; 
  chats: MemberchatsChat[]; 
  messagesIds: string[]; 
  messages: MembermessagesMessage[]; 
}

export interface UpdateMessage {
  content?: string; 
  id: string; 
  authorId?: string; 
  author?: MessageauthorMember; 
  chatId?: string; 
  chat?: MessagechatChat; 
}

export interface CreateMessage {
  content: string; 
  authorId?: string; 
  author?: MessageauthorMember; 
  chatId?: string; 
  chat?: MessagechatChat; 
}

export interface UpdateUser {
  id: string; 
}

export interface ChatSubscriptionFilter {
  AND: ChatSubscriptionFilter[]; /* Logical AND on all given filters. */
  OR: ChatSubscriptionFilter[]; /* Logical OR on all given filters. */
  mutation_in: _ModelMutationType[]; /* The subscription event gets dispatched when it&#x27;s listed in mutation_in */
  updatedFields_contains?: string; /* The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains_every: string[]; /* The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_some: string[]; /* The subscription event gets only dispatched when some of the field names included in this list have been updated */
  node?: ChatSubscriptionFilterNode; 
}

export interface ChatSubscriptionFilterNode {
  createdAt?: DateTime; 
  createdAt_not?: DateTime; /* All values that are not equal to given value. */
  createdAt_in: DateTime[]; /* All values that are contained in given list. */
  createdAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  createdAt_lt?: DateTime; /* All values less than the given value. */
  createdAt_lte?: DateTime; /* All values less than or equal the given value. */
  createdAt_gt?: DateTime; /* All values greater than the given value. */
  createdAt_gte?: DateTime; /* All values greater than or equal the given value. */
  id?: string; 
  id_not?: string; /* All values that are not equal to given value. */
  id_in: string[]; /* All values that are contained in given list. */
  id_not_in: string[]; /* All values that are not contained in given list. */
  id_lt?: string; /* All values less than the given value. */
  id_lte?: string; /* All values less than or equal the given value. */
  id_gt?: string; /* All values greater than the given value. */
  id_gte?: string; /* All values greater than or equal the given value. */
  id_contains?: string; /* All values containing the given string. */
  id_not_contains?: string; /* All values not containing the given string. */
  id_starts_with?: string; /* All values starting with the given string. */
  id_not_starts_with?: string; /* All values not starting with the given string. */
  id_ends_with?: string; /* All values ending with the given string. */
  id_not_ends_with?: string; /* All values not ending with the given string. */
  updatedAt?: DateTime; 
  updatedAt_not?: DateTime; /* All values that are not equal to given value. */
  updatedAt_in: DateTime[]; /* All values that are contained in given list. */
  updatedAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  updatedAt_lt?: DateTime; /* All values less than the given value. */
  updatedAt_lte?: DateTime; /* All values less than or equal the given value. */
  updatedAt_gt?: DateTime; /* All values greater than the given value. */
  updatedAt_gte?: DateTime; /* All values greater than or equal the given value. */
  members_every?: MemberFilter; 
  members_some?: MemberFilter; 
  members_none?: MemberFilter; 
  messages_every?: MessageFilter; 
  messages_some?: MessageFilter; 
  messages_none?: MessageFilter; 
}

export interface FileSubscriptionFilter {
  AND: FileSubscriptionFilter[]; /* Logical AND on all given filters. */
  OR: FileSubscriptionFilter[]; /* Logical OR on all given filters. */
  mutation_in: _ModelMutationType[]; /* The subscription event gets dispatched when it&#x27;s listed in mutation_in */
  updatedFields_contains?: string; /* The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains_every: string[]; /* The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_some: string[]; /* The subscription event gets only dispatched when some of the field names included in this list have been updated */
  node?: FileSubscriptionFilterNode; 
}

export interface FileSubscriptionFilterNode {
  contentType?: string; 
  contentType_not?: string; /* All values that are not equal to given value. */
  contentType_in: string[]; /* All values that are contained in given list. */
  contentType_not_in: string[]; /* All values that are not contained in given list. */
  contentType_lt?: string; /* All values less than the given value. */
  contentType_lte?: string; /* All values less than or equal the given value. */
  contentType_gt?: string; /* All values greater than the given value. */
  contentType_gte?: string; /* All values greater than or equal the given value. */
  contentType_contains?: string; /* All values containing the given string. */
  contentType_not_contains?: string; /* All values not containing the given string. */
  contentType_starts_with?: string; /* All values starting with the given string. */
  contentType_not_starts_with?: string; /* All values not starting with the given string. */
  contentType_ends_with?: string; /* All values ending with the given string. */
  contentType_not_ends_with?: string; /* All values not ending with the given string. */
  createdAt?: DateTime; 
  createdAt_not?: DateTime; /* All values that are not equal to given value. */
  createdAt_in: DateTime[]; /* All values that are contained in given list. */
  createdAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  createdAt_lt?: DateTime; /* All values less than the given value. */
  createdAt_lte?: DateTime; /* All values less than or equal the given value. */
  createdAt_gt?: DateTime; /* All values greater than the given value. */
  createdAt_gte?: DateTime; /* All values greater than or equal the given value. */
  id?: string; 
  id_not?: string; /* All values that are not equal to given value. */
  id_in: string[]; /* All values that are contained in given list. */
  id_not_in: string[]; /* All values that are not contained in given list. */
  id_lt?: string; /* All values less than the given value. */
  id_lte?: string; /* All values less than or equal the given value. */
  id_gt?: string; /* All values greater than the given value. */
  id_gte?: string; /* All values greater than or equal the given value. */
  id_contains?: string; /* All values containing the given string. */
  id_not_contains?: string; /* All values not containing the given string. */
  id_starts_with?: string; /* All values starting with the given string. */
  id_not_starts_with?: string; /* All values not starting with the given string. */
  id_ends_with?: string; /* All values ending with the given string. */
  id_not_ends_with?: string; /* All values not ending with the given string. */
  name?: string; 
  name_not?: string; /* All values that are not equal to given value. */
  name_in: string[]; /* All values that are contained in given list. */
  name_not_in: string[]; /* All values that are not contained in given list. */
  name_lt?: string; /* All values less than the given value. */
  name_lte?: string; /* All values less than or equal the given value. */
  name_gt?: string; /* All values greater than the given value. */
  name_gte?: string; /* All values greater than or equal the given value. */
  name_contains?: string; /* All values containing the given string. */
  name_not_contains?: string; /* All values not containing the given string. */
  name_starts_with?: string; /* All values starting with the given string. */
  name_not_starts_with?: string; /* All values not starting with the given string. */
  name_ends_with?: string; /* All values ending with the given string. */
  name_not_ends_with?: string; /* All values not ending with the given string. */
  secret?: string; 
  secret_not?: string; /* All values that are not equal to given value. */
  secret_in: string[]; /* All values that are contained in given list. */
  secret_not_in: string[]; /* All values that are not contained in given list. */
  secret_lt?: string; /* All values less than the given value. */
  secret_lte?: string; /* All values less than or equal the given value. */
  secret_gt?: string; /* All values greater than the given value. */
  secret_gte?: string; /* All values greater than or equal the given value. */
  secret_contains?: string; /* All values containing the given string. */
  secret_not_contains?: string; /* All values not containing the given string. */
  secret_starts_with?: string; /* All values starting with the given string. */
  secret_not_starts_with?: string; /* All values not starting with the given string. */
  secret_ends_with?: string; /* All values ending with the given string. */
  secret_not_ends_with?: string; /* All values not ending with the given string. */
  size?: number; 
  size_not?: number; /* All values that are not equal to given value. */
  size_in: number[]; /* All values that are contained in given list. */
  size_not_in: number[]; /* All values that are not contained in given list. */
  size_lt?: number; /* All values less than the given value. */
  size_lte?: number; /* All values less than or equal the given value. */
  size_gt?: number; /* All values greater than the given value. */
  size_gte?: number; /* All values greater than or equal the given value. */
  updatedAt?: DateTime; 
  updatedAt_not?: DateTime; /* All values that are not equal to given value. */
  updatedAt_in: DateTime[]; /* All values that are contained in given list. */
  updatedAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  updatedAt_lt?: DateTime; /* All values less than the given value. */
  updatedAt_lte?: DateTime; /* All values less than or equal the given value. */
  updatedAt_gt?: DateTime; /* All values greater than the given value. */
  updatedAt_gte?: DateTime; /* All values greater than or equal the given value. */
  url?: string; 
  url_not?: string; /* All values that are not equal to given value. */
  url_in: string[]; /* All values that are contained in given list. */
  url_not_in: string[]; /* All values that are not contained in given list. */
  url_lt?: string; /* All values less than the given value. */
  url_lte?: string; /* All values less than or equal the given value. */
  url_gt?: string; /* All values greater than the given value. */
  url_gte?: string; /* All values greater than or equal the given value. */
  url_contains?: string; /* All values containing the given string. */
  url_not_contains?: string; /* All values not containing the given string. */
  url_starts_with?: string; /* All values starting with the given string. */
  url_not_starts_with?: string; /* All values not starting with the given string. */
  url_ends_with?: string; /* All values ending with the given string. */
  url_not_ends_with?: string; /* All values not ending with the given string. */
}

export interface MemberSubscriptionFilter {
  AND: MemberSubscriptionFilter[]; /* Logical AND on all given filters. */
  OR: MemberSubscriptionFilter[]; /* Logical OR on all given filters. */
  mutation_in: _ModelMutationType[]; /* The subscription event gets dispatched when it&#x27;s listed in mutation_in */
  updatedFields_contains?: string; /* The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains_every: string[]; /* The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_some: string[]; /* The subscription event gets only dispatched when some of the field names included in this list have been updated */
  node?: MemberSubscriptionFilterNode; 
}

export interface MemberSubscriptionFilterNode {
  createdAt?: DateTime; 
  createdAt_not?: DateTime; /* All values that are not equal to given value. */
  createdAt_in: DateTime[]; /* All values that are contained in given list. */
  createdAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  createdAt_lt?: DateTime; /* All values less than the given value. */
  createdAt_lte?: DateTime; /* All values less than or equal the given value. */
  createdAt_gt?: DateTime; /* All values greater than the given value. */
  createdAt_gte?: DateTime; /* All values greater than or equal the given value. */
  id?: string; 
  id_not?: string; /* All values that are not equal to given value. */
  id_in: string[]; /* All values that are contained in given list. */
  id_not_in: string[]; /* All values that are not contained in given list. */
  id_lt?: string; /* All values less than the given value. */
  id_lte?: string; /* All values less than or equal the given value. */
  id_gt?: string; /* All values greater than the given value. */
  id_gte?: string; /* All values greater than or equal the given value. */
  id_contains?: string; /* All values containing the given string. */
  id_not_contains?: string; /* All values not containing the given string. */
  id_starts_with?: string; /* All values starting with the given string. */
  id_not_starts_with?: string; /* All values not starting with the given string. */
  id_ends_with?: string; /* All values ending with the given string. */
  id_not_ends_with?: string; /* All values not ending with the given string. */
  image?: string; 
  image_not?: string; /* All values that are not equal to given value. */
  image_in: string[]; /* All values that are contained in given list. */
  image_not_in: string[]; /* All values that are not contained in given list. */
  image_lt?: string; /* All values less than the given value. */
  image_lte?: string; /* All values less than or equal the given value. */
  image_gt?: string; /* All values greater than the given value. */
  image_gte?: string; /* All values greater than or equal the given value. */
  image_contains?: string; /* All values containing the given string. */
  image_not_contains?: string; /* All values not containing the given string. */
  image_starts_with?: string; /* All values starting with the given string. */
  image_not_starts_with?: string; /* All values not starting with the given string. */
  image_ends_with?: string; /* All values ending with the given string. */
  image_not_ends_with?: string; /* All values not ending with the given string. */
  login?: string; 
  login_not?: string; /* All values that are not equal to given value. */
  login_in: string[]; /* All values that are contained in given list. */
  login_not_in: string[]; /* All values that are not contained in given list. */
  login_lt?: string; /* All values less than the given value. */
  login_lte?: string; /* All values less than or equal the given value. */
  login_gt?: string; /* All values greater than the given value. */
  login_gte?: string; /* All values greater than or equal the given value. */
  login_contains?: string; /* All values containing the given string. */
  login_not_contains?: string; /* All values not containing the given string. */
  login_starts_with?: string; /* All values starting with the given string. */
  login_not_starts_with?: string; /* All values not starting with the given string. */
  login_ends_with?: string; /* All values ending with the given string. */
  login_not_ends_with?: string; /* All values not ending with the given string. */
  name?: string; 
  name_not?: string; /* All values that are not equal to given value. */
  name_in: string[]; /* All values that are contained in given list. */
  name_not_in: string[]; /* All values that are not contained in given list. */
  name_lt?: string; /* All values less than the given value. */
  name_lte?: string; /* All values less than or equal the given value. */
  name_gt?: string; /* All values greater than the given value. */
  name_gte?: string; /* All values greater than or equal the given value. */
  name_contains?: string; /* All values containing the given string. */
  name_not_contains?: string; /* All values not containing the given string. */
  name_starts_with?: string; /* All values starting with the given string. */
  name_not_starts_with?: string; /* All values not starting with the given string. */
  name_ends_with?: string; /* All values ending with the given string. */
  name_not_ends_with?: string; /* All values not ending with the given string. */
  title?: string; 
  title_not?: string; /* All values that are not equal to given value. */
  title_in: string[]; /* All values that are contained in given list. */
  title_not_in: string[]; /* All values that are not contained in given list. */
  title_lt?: string; /* All values less than the given value. */
  title_lte?: string; /* All values less than or equal the given value. */
  title_gt?: string; /* All values greater than the given value. */
  title_gte?: string; /* All values greater than or equal the given value. */
  title_contains?: string; /* All values containing the given string. */
  title_not_contains?: string; /* All values not containing the given string. */
  title_starts_with?: string; /* All values starting with the given string. */
  title_not_starts_with?: string; /* All values not starting with the given string. */
  title_ends_with?: string; /* All values ending with the given string. */
  title_not_ends_with?: string; /* All values not ending with the given string. */
  updatedAt?: DateTime; 
  updatedAt_not?: DateTime; /* All values that are not equal to given value. */
  updatedAt_in: DateTime[]; /* All values that are contained in given list. */
  updatedAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  updatedAt_lt?: DateTime; /* All values less than the given value. */
  updatedAt_lte?: DateTime; /* All values less than or equal the given value. */
  updatedAt_gt?: DateTime; /* All values greater than the given value. */
  updatedAt_gte?: DateTime; /* All values greater than or equal the given value. */
  chats_every?: ChatFilter; 
  chats_some?: ChatFilter; 
  chats_none?: ChatFilter; 
  messages_every?: MessageFilter; 
  messages_some?: MessageFilter; 
  messages_none?: MessageFilter; 
}

export interface MessageSubscriptionFilter {
  AND: MessageSubscriptionFilter[]; /* Logical AND on all given filters. */
  OR: MessageSubscriptionFilter[]; /* Logical OR on all given filters. */
  mutation_in: _ModelMutationType[]; /* The subscription event gets dispatched when it&#x27;s listed in mutation_in */
  updatedFields_contains?: string; /* The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains_every: string[]; /* The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_some: string[]; /* The subscription event gets only dispatched when some of the field names included in this list have been updated */
  node?: MessageSubscriptionFilterNode; 
}

export interface MessageSubscriptionFilterNode {
  content?: string; 
  content_not?: string; /* All values that are not equal to given value. */
  content_in: string[]; /* All values that are contained in given list. */
  content_not_in: string[]; /* All values that are not contained in given list. */
  content_lt?: string; /* All values less than the given value. */
  content_lte?: string; /* All values less than or equal the given value. */
  content_gt?: string; /* All values greater than the given value. */
  content_gte?: string; /* All values greater than or equal the given value. */
  content_contains?: string; /* All values containing the given string. */
  content_not_contains?: string; /* All values not containing the given string. */
  content_starts_with?: string; /* All values starting with the given string. */
  content_not_starts_with?: string; /* All values not starting with the given string. */
  content_ends_with?: string; /* All values ending with the given string. */
  content_not_ends_with?: string; /* All values not ending with the given string. */
  createdAt?: DateTime; 
  createdAt_not?: DateTime; /* All values that are not equal to given value. */
  createdAt_in: DateTime[]; /* All values that are contained in given list. */
  createdAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  createdAt_lt?: DateTime; /* All values less than the given value. */
  createdAt_lte?: DateTime; /* All values less than or equal the given value. */
  createdAt_gt?: DateTime; /* All values greater than the given value. */
  createdAt_gte?: DateTime; /* All values greater than or equal the given value. */
  id?: string; 
  id_not?: string; /* All values that are not equal to given value. */
  id_in: string[]; /* All values that are contained in given list. */
  id_not_in: string[]; /* All values that are not contained in given list. */
  id_lt?: string; /* All values less than the given value. */
  id_lte?: string; /* All values less than or equal the given value. */
  id_gt?: string; /* All values greater than the given value. */
  id_gte?: string; /* All values greater than or equal the given value. */
  id_contains?: string; /* All values containing the given string. */
  id_not_contains?: string; /* All values not containing the given string. */
  id_starts_with?: string; /* All values starting with the given string. */
  id_not_starts_with?: string; /* All values not starting with the given string. */
  id_ends_with?: string; /* All values ending with the given string. */
  id_not_ends_with?: string; /* All values not ending with the given string. */
  updatedAt?: DateTime; 
  updatedAt_not?: DateTime; /* All values that are not equal to given value. */
  updatedAt_in: DateTime[]; /* All values that are contained in given list. */
  updatedAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  updatedAt_lt?: DateTime; /* All values less than the given value. */
  updatedAt_lte?: DateTime; /* All values less than or equal the given value. */
  updatedAt_gt?: DateTime; /* All values greater than the given value. */
  updatedAt_gte?: DateTime; /* All values greater than or equal the given value. */
  author?: MemberFilter; 
  chat?: ChatFilter; 
}

export interface UserSubscriptionFilter {
  AND: UserSubscriptionFilter[]; /* Logical AND on all given filters. */
  OR: UserSubscriptionFilter[]; /* Logical OR on all given filters. */
  mutation_in: _ModelMutationType[]; /* The subscription event gets dispatched when it&#x27;s listed in mutation_in */
  updatedFields_contains?: string; /* The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains_every: string[]; /* The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_some: string[]; /* The subscription event gets only dispatched when some of the field names included in this list have been updated */
  node?: UserSubscriptionFilterNode; 
}

export interface UserSubscriptionFilterNode {
  createdAt?: DateTime; 
  createdAt_not?: DateTime; /* All values that are not equal to given value. */
  createdAt_in: DateTime[]; /* All values that are contained in given list. */
  createdAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  createdAt_lt?: DateTime; /* All values less than the given value. */
  createdAt_lte?: DateTime; /* All values less than or equal the given value. */
  createdAt_gt?: DateTime; /* All values greater than the given value. */
  createdAt_gte?: DateTime; /* All values greater than or equal the given value. */
  id?: string; 
  id_not?: string; /* All values that are not equal to given value. */
  id_in: string[]; /* All values that are contained in given list. */
  id_not_in: string[]; /* All values that are not contained in given list. */
  id_lt?: string; /* All values less than the given value. */
  id_lte?: string; /* All values less than or equal the given value. */
  id_gt?: string; /* All values greater than the given value. */
  id_gte?: string; /* All values greater than or equal the given value. */
  id_contains?: string; /* All values containing the given string. */
  id_not_contains?: string; /* All values not containing the given string. */
  id_starts_with?: string; /* All values starting with the given string. */
  id_not_starts_with?: string; /* All values not starting with the given string. */
  id_ends_with?: string; /* All values ending with the given string. */
  id_not_ends_with?: string; /* All values not ending with the given string. */
  updatedAt?: DateTime; 
  updatedAt_not?: DateTime; /* All values that are not equal to given value. */
  updatedAt_in: DateTime[]; /* All values that are contained in given list. */
  updatedAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  updatedAt_lt?: DateTime; /* All values less than the given value. */
  updatedAt_lte?: DateTime; /* All values less than or equal the given value. */
  updatedAt_gt?: DateTime; /* All values greater than the given value. */
  updatedAt_gte?: DateTime; /* All values greater than or equal the given value. */
}
export interface AllChatsQueryArgs {
  filter?: ChatFilter; 
  orderBy?: ChatOrderBy; 
  skip?: number; 
  after?: string; 
  before?: string; 
  first?: number; 
  last?: number; 
}
export interface AllFilesQueryArgs {
  filter?: FileFilter; 
  orderBy?: FileOrderBy; 
  skip?: number; 
  after?: string; 
  before?: string; 
  first?: number; 
  last?: number; 
}
export interface AllMembersQueryArgs {
  filter?: MemberFilter; 
  orderBy?: MemberOrderBy; 
  skip?: number; 
  after?: string; 
  before?: string; 
  first?: number; 
  last?: number; 
}
export interface AllMessagesQueryArgs {
  filter?: MessageFilter; 
  orderBy?: MessageOrderBy; 
  skip?: number; 
  after?: string; 
  before?: string; 
  first?: number; 
  last?: number; 
}
export interface AllUsersQueryArgs {
  filter?: UserFilter; 
  orderBy?: UserOrderBy; 
  skip?: number; 
  after?: string; 
  before?: string; 
  first?: number; 
  last?: number; 
}
export interface AllChatsMetaQueryArgs {
  filter?: ChatFilter; 
  orderBy?: ChatOrderBy; 
  skip?: number; 
  after?: string; 
  before?: string; 
  first?: number; 
  last?: number; 
}
export interface AllFilesMetaQueryArgs {
  filter?: FileFilter; 
  orderBy?: FileOrderBy; 
  skip?: number; 
  after?: string; 
  before?: string; 
  first?: number; 
  last?: number; 
}
export interface AllMembersMetaQueryArgs {
  filter?: MemberFilter; 
  orderBy?: MemberOrderBy; 
  skip?: number; 
  after?: string; 
  before?: string; 
  first?: number; 
  last?: number; 
}
export interface AllMessagesMetaQueryArgs {
  filter?: MessageFilter; 
  orderBy?: MessageOrderBy; 
  skip?: number; 
  after?: string; 
  before?: string; 
  first?: number; 
  last?: number; 
}
export interface AllUsersMetaQueryArgs {
  filter?: UserFilter; 
  orderBy?: UserOrderBy; 
  skip?: number; 
  after?: string; 
  before?: string; 
  first?: number; 
  last?: number; 
}
export interface ChatQueryArgs {
  id?: string; 
}
export interface FileQueryArgs {
  id?: string; 
  secret?: string; 
  url?: string; 
}
export interface MemberQueryArgs {
  id?: string; 
}
export interface MessageQueryArgs {
  id?: string; 
}
export interface UserQueryArgs {
  id?: string; 
}
export interface NodeQueryArgs {
  id: string; /* The ID of an object */
}
export interface MembersChatArgs {
  filter?: MemberFilter; 
  orderBy?: MemberOrderBy; 
  skip?: number; 
  after?: string; 
  before?: string; 
  first?: number; 
  last?: number; 
}
export interface MessagesChatArgs {
  filter?: MessageFilter; 
  orderBy?: MessageOrderBy; 
  skip?: number; 
  after?: string; 
  before?: string; 
  first?: number; 
  last?: number; 
}
export interface MembersMetaChatArgs {
  filter?: MemberFilter; 
  orderBy?: MemberOrderBy; 
  skip?: number; 
  after?: string; 
  before?: string; 
  first?: number; 
  last?: number; 
}
export interface MessagesMetaChatArgs {
  filter?: MessageFilter; 
  orderBy?: MessageOrderBy; 
  skip?: number; 
  after?: string; 
  before?: string; 
  first?: number; 
  last?: number; 
}
export interface ChatsMemberArgs {
  filter?: ChatFilter; 
  orderBy?: ChatOrderBy; 
  skip?: number; 
  after?: string; 
  before?: string; 
  first?: number; 
  last?: number; 
}
export interface MessagesMemberArgs {
  filter?: MessageFilter; 
  orderBy?: MessageOrderBy; 
  skip?: number; 
  after?: string; 
  before?: string; 
  first?: number; 
  last?: number; 
}
export interface ChatsMetaMemberArgs {
  filter?: ChatFilter; 
  orderBy?: ChatOrderBy; 
  skip?: number; 
  after?: string; 
  before?: string; 
  first?: number; 
  last?: number; 
}
export interface MessagesMetaMemberArgs {
  filter?: MessageFilter; 
  orderBy?: MessageOrderBy; 
  skip?: number; 
  after?: string; 
  before?: string; 
  first?: number; 
  last?: number; 
}
export interface AuthorMessageArgs {
  filter?: MemberFilter; 
}
export interface ChatMessageArgs {
  filter?: ChatFilter; 
}
export interface CreateChatMutationArgs {
  membersIds: string[]; 
  members: ChatmembersMember[]; 
  messagesIds: string[]; 
  messages: ChatmessagesMessage[]; 
}
export interface CreateFileMutationArgs {
  name: string; 
}
export interface CreateMemberMutationArgs {
  image: string; 
  login?: string; 
  name: string; /* Firstname + Lastname */
  title?: string; /* Short info about a user */
  chatsIds: string[]; 
  chats: MemberchatsChat[]; 
  messagesIds: string[]; 
  messages: MembermessagesMessage[]; 
}
export interface CreateMessageMutationArgs {
  content: string; 
  authorId?: string; 
  author?: MessageauthorMember; 
  chatId?: string; 
  chat?: MessagechatChat; 
}
export interface UpdateChatMutationArgs {
  id: string; 
  membersIds: string[]; 
  members: ChatmembersMember[]; 
  messagesIds: string[]; 
  messages: ChatmessagesMessage[]; 
}
export interface UpdateFileMutationArgs {
  id: string; 
  name?: string; 
}
export interface UpdateMemberMutationArgs {
  id: string; 
  image?: string; 
  login?: string; 
  name?: string; /* Firstname + Lastname */
  title?: string; /* Short info about a user */
  chatsIds: string[]; 
  chats: MemberchatsChat[]; 
  messagesIds: string[]; 
  messages: MembermessagesMessage[]; 
}
export interface UpdateMessageMutationArgs {
  content?: string; 
  id: string; 
  authorId?: string; 
  author?: MessageauthorMember; 
  chatId?: string; 
  chat?: MessagechatChat; 
}
export interface UpdateUserMutationArgs {
  id: string; 
}
export interface UpdateOrCreateChatMutationArgs {
  update: UpdateChat; 
  create: CreateChat; 
}
export interface UpdateOrCreateFileMutationArgs {
  update: UpdateFile; 
  create: CreateFile; 
}
export interface UpdateOrCreateMemberMutationArgs {
  update: UpdateMember; 
  create: CreateMember; 
}
export interface UpdateOrCreateMessageMutationArgs {
  update: UpdateMessage; 
  create: CreateMessage; 
}
export interface UpdateOrCreateUserMutationArgs {
  update: UpdateUser; 
}
export interface DeleteChatMutationArgs {
  id: string; 
}
export interface DeleteFileMutationArgs {
  id: string; 
}
export interface DeleteMemberMutationArgs {
  id: string; 
}
export interface DeleteMessageMutationArgs {
  id: string; 
}
export interface DeleteUserMutationArgs {
  id: string; 
}
export interface AddToChatOnMemberMutationArgs {
  membersMemberId: string; 
  chatsChatId: string; 
}
export interface AddToChatOnMessageMutationArgs {
  messagesMessageId: string; 
  chatChatId: string; 
}
export interface AddToMessageOnMemberMutationArgs {
  authorMemberId: string; 
  messagesMessageId: string; 
}
export interface RemoveFromChatOnMemberMutationArgs {
  membersMemberId: string; 
  chatsChatId: string; 
}
export interface RemoveFromChatOnMessageMutationArgs {
  messagesMessageId: string; 
  chatChatId: string; 
}
export interface RemoveFromMessageOnMemberMutationArgs {
  authorMemberId: string; 
  messagesMessageId: string; 
}
export interface ChatSubscriptionArgs {
  filter?: ChatSubscriptionFilter; 
}
export interface FileSubscriptionArgs {
  filter?: FileSubscriptionFilter; 
}
export interface MemberSubscriptionArgs {
  filter?: MemberSubscriptionFilter; 
}
export interface MessageSubscriptionArgs {
  filter?: MessageSubscriptionFilter; 
}
export interface UserSubscriptionArgs {
  filter?: UserSubscriptionFilter; 
}

export type ChatOrderBy = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "updatedAt_ASC" | "updatedAt_DESC";


export type MemberOrderBy = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "image_ASC" | "image_DESC" | "login_ASC" | "login_DESC" | "name_ASC" | "name_DESC" | "title_ASC" | "title_DESC" | "updatedAt_ASC" | "updatedAt_DESC";


export type MessageOrderBy = "content_ASC" | "content_DESC" | "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "updatedAt_ASC" | "updatedAt_DESC";


export type FileOrderBy = "contentType_ASC" | "contentType_DESC" | "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "secret_ASC" | "secret_DESC" | "size_ASC" | "size_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "url_ASC" | "url_DESC";


export type UserOrderBy = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "updatedAt_ASC" | "updatedAt_DESC";


export type _ModelMutationType = "CREATED" | "UPDATED" | "DELETED";

export namespace GetAllChats {
  export type Variables = {
    member: string;
  }

  export type Query = {
    allChats: AllChats[]; 
  } 

  export type AllChats = {
    members: Members[]; 
    id: string; 
    date: DateTime; 
    messages: Messages[]; 
  } 

  export type Members = {
    id: string; 
    name: string; 
  } 

  export type Messages = {
    content: string; 
    author?: Author; 
  } 

  export type Author = {
    id: string; 
    name: string; 
  } 
}
export namespace GetAllMembers {
  export type Variables = {
    member: string;
  }

  export type Query = {
    allMembers: AllMembers[]; 
  } 

  export type AllMembers = {
    id: string; 
    name: string; 
    title?: string; 
    chats: Chats[]; 
  } 

  export type Chats = {
    id: string; 
  } 
}
export namespace GetChatMembers {
  export type Variables = {
    chat: string;
    member: string;
  }

  export type Query = {
    Chat?: Chat; 
  } 

  export type Chat = {
    members: Members[]; 
  } 

  export type Members = {
    id: string; 
    name: string; 
  } 
}
export namespace GetChatMessages {
  export type Variables = {
    chat: string;
  }

  export type Query = {
    allMessages: AllMessages[]; 
  } 

  export type AllMessages = {
    id: string; 
    content: string; 
    author?: Author; 
  } 

  export type Author = {
    id: string; 
    name: string; 
  } 
}
export namespace GetDeletedChat {
  export type Variables = {
    member: string;
  }

  export type Subscription = {
    Chat?: Chat; 
  } 

  export type Chat = {
    previousValues?: PreviousValues; 
  } 

  export type PreviousValues = {
    id: string; 
  } 
}
export namespace GetMember {
  export type Variables = {
    name: string;
  }

  export type Query = {
    allMembers: AllMembers[]; 
  } 

  export type AllMembers = {
    id: string; 
    name: string; 
  } 
}
export namespace GetNewChatMessage {
  export type Variables = {
    chats: string[];
  }

  export type Subscription = {
    Message?: Message; 
  } 

  export type Message = {
    node?: Node; 
  } 

  export type Node = {
    id: string; 
    content: string; 
    chat?: Chat; 
  } 

  export type Chat = {
    id: string; 
    date: DateTime; 
  } 
}
export namespace GetNewChat {
  export type Variables = {
    member: string;
  }

  export type Subscription = {
    Chat?: Chat; 
  } 

  export type Chat = {
    node?: Node; 
  } 

  export type Node = {
    id: string; 
    date: DateTime; 
    members: Members[]; 
  } 

  export type Members = {
    id: string; 
    name: string; 
  } 
}
export namespace GetNewMessage {
  export type Variables = {
    chat: string;
  }

  export type Subscription = {
    Message?: Message; 
  } 

  export type Message = {
    node?: Node; 
  } 

  export type Node = {
    id: string; 
    content: string; 
    author?: Author; 
  } 

  export type Author = {
    id: string; 
    name: string; 
  } 
}
export namespace RemoveChat {
  export type Variables = {
    chat: string;
  }

  export type Mutation = {
    deleteChat?: DeleteChat; 
  } 

  export type DeleteChat = {
    id: string; 
  } 
}
export namespace SendMessage {
  export type Variables = {
    author: string;
    chat: string;
    content: string;
  }

  export type Mutation = {
    createMessage?: CreateMessage; 
  } 

  export type CreateMessage = {
    id: string; 
    content: string; 
    author?: Author; 
  } 

  export type Author = {
    id: string; 
    name: string; 
  } 
}
export namespace StartChat {
  export type Variables = {
    members: string[];
    author: string;
  }

  export type Mutation = {
    createChat?: CreateChat; 
  } 

  export type CreateChat = {
    id: string; 
    date: DateTime; 
    messages: Messages[]; 
    members: Members[]; 
  } 

  export type Messages = {
    content: string; 
    author?: Author; 
  } 

  export type Author = {
    id: string; 
    name: string; 
  } 

  export type Members = {
    id: string; 
    name: string; 
  } 
}
