
export interface Query {
  allChats: Array<Chat>;
  allFiles: Array<File>;
  allMembers: Array<Member>;
  allMessages: Array<Message>;
  allUsers: Array<User>;
  _allChatsMeta: _QueryMeta;
  _allFilesMeta: _QueryMeta;
  _allMembersMeta: _QueryMeta;
  _allMessagesMeta: _QueryMeta;
  _allUsersMeta: _QueryMeta;
  Chat: Chat | null;
  File: File | null;
  Member: Member | null;
  Message: Message | null;
  User: User | null;
  user: User | null;
  node: Node | null;
}

export interface AllChatsQueryArgs {
  filter: ChatFilter | null;
  orderBy: ChatOrderBy | null;
  skip: number | null;
  after: string | null;
  before: string | null;
  first: number | null;
  last: number | null;
}

export interface AllFilesQueryArgs {
  filter: FileFilter | null;
  orderBy: FileOrderBy | null;
  skip: number | null;
  after: string | null;
  before: string | null;
  first: number | null;
  last: number | null;
}

export interface AllMembersQueryArgs {
  filter: MemberFilter | null;
  orderBy: MemberOrderBy | null;
  skip: number | null;
  after: string | null;
  before: string | null;
  first: number | null;
  last: number | null;
}

export interface AllMessagesQueryArgs {
  filter: MessageFilter | null;
  orderBy: MessageOrderBy | null;
  skip: number | null;
  after: string | null;
  before: string | null;
  first: number | null;
  last: number | null;
}

export interface AllUsersQueryArgs {
  filter: UserFilter | null;
  orderBy: UserOrderBy | null;
  skip: number | null;
  after: string | null;
  before: string | null;
  first: number | null;
  last: number | null;
}

export interface AllChatsMetaQueryArgs {
  filter: ChatFilter | null;
  orderBy: ChatOrderBy | null;
  skip: number | null;
  after: string | null;
  before: string | null;
  first: number | null;
  last: number | null;
}

export interface AllFilesMetaQueryArgs {
  filter: FileFilter | null;
  orderBy: FileOrderBy | null;
  skip: number | null;
  after: string | null;
  before: string | null;
  first: number | null;
  last: number | null;
}

export interface AllMembersMetaQueryArgs {
  filter: MemberFilter | null;
  orderBy: MemberOrderBy | null;
  skip: number | null;
  after: string | null;
  before: string | null;
  first: number | null;
  last: number | null;
}

export interface AllMessagesMetaQueryArgs {
  filter: MessageFilter | null;
  orderBy: MessageOrderBy | null;
  skip: number | null;
  after: string | null;
  before: string | null;
  first: number | null;
  last: number | null;
}

export interface AllUsersMetaQueryArgs {
  filter: UserFilter | null;
  orderBy: UserOrderBy | null;
  skip: number | null;
  after: string | null;
  before: string | null;
  first: number | null;
  last: number | null;
}

export interface ChatQueryArgs {
  id: string | null;
}

export interface FileQueryArgs {
  id: string | null;
  secret: string | null;
  url: string | null;
}

export interface MemberQueryArgs {
  id: string | null;
}

export interface MessageQueryArgs {
  id: string | null;
}

export interface UserQueryArgs {
  id: string | null;
}

export interface NodeQueryArgs {
  id: string;
}

export interface ChatFilter {
  AND: Array<ChatFilter>;
  OR: Array<ChatFilter>;
  createdAt: DateTime | null;
  createdAt_not: DateTime | null;
  createdAt_in: Array<DateTime>;
  createdAt_not_in: Array<DateTime>;
  createdAt_lt: DateTime | null;
  createdAt_lte: DateTime | null;
  createdAt_gt: DateTime | null;
  createdAt_gte: DateTime | null;
  id: string | null;
  id_not: string | null;
  id_in: Array<string>;
  id_not_in: Array<string>;
  id_lt: string | null;
  id_lte: string | null;
  id_gt: string | null;
  id_gte: string | null;
  id_contains: string | null;
  id_not_contains: string | null;
  id_starts_with: string | null;
  id_not_starts_with: string | null;
  id_ends_with: string | null;
  id_not_ends_with: string | null;
  updatedAt: DateTime | null;
  updatedAt_not: DateTime | null;
  updatedAt_in: Array<DateTime>;
  updatedAt_not_in: Array<DateTime>;
  updatedAt_lt: DateTime | null;
  updatedAt_lte: DateTime | null;
  updatedAt_gt: DateTime | null;
  updatedAt_gte: DateTime | null;
  members_every: MemberFilter | null;
  members_some: MemberFilter | null;
  members_none: MemberFilter | null;
  messages_every: MessageFilter | null;
  messages_some: MessageFilter | null;
  messages_none: MessageFilter | null;
}

export type DateTime = any;

export interface MemberFilter {
  AND: Array<MemberFilter>;
  OR: Array<MemberFilter>;
  createdAt: DateTime | null;
  createdAt_not: DateTime | null;
  createdAt_in: Array<DateTime>;
  createdAt_not_in: Array<DateTime>;
  createdAt_lt: DateTime | null;
  createdAt_lte: DateTime | null;
  createdAt_gt: DateTime | null;
  createdAt_gte: DateTime | null;
  id: string | null;
  id_not: string | null;
  id_in: Array<string>;
  id_not_in: Array<string>;
  id_lt: string | null;
  id_lte: string | null;
  id_gt: string | null;
  id_gte: string | null;
  id_contains: string | null;
  id_not_contains: string | null;
  id_starts_with: string | null;
  id_not_starts_with: string | null;
  id_ends_with: string | null;
  id_not_ends_with: string | null;
  name: string | null;
  name_not: string | null;
  name_in: Array<string>;
  name_not_in: Array<string>;
  name_lt: string | null;
  name_lte: string | null;
  name_gt: string | null;
  name_gte: string | null;
  name_contains: string | null;
  name_not_contains: string | null;
  name_starts_with: string | null;
  name_not_starts_with: string | null;
  name_ends_with: string | null;
  name_not_ends_with: string | null;
  title: string | null;
  title_not: string | null;
  title_in: Array<string>;
  title_not_in: Array<string>;
  title_lt: string | null;
  title_lte: string | null;
  title_gt: string | null;
  title_gte: string | null;
  title_contains: string | null;
  title_not_contains: string | null;
  title_starts_with: string | null;
  title_not_starts_with: string | null;
  title_ends_with: string | null;
  title_not_ends_with: string | null;
  updatedAt: DateTime | null;
  updatedAt_not: DateTime | null;
  updatedAt_in: Array<DateTime>;
  updatedAt_not_in: Array<DateTime>;
  updatedAt_lt: DateTime | null;
  updatedAt_lte: DateTime | null;
  updatedAt_gt: DateTime | null;
  updatedAt_gte: DateTime | null;
  chats_every: ChatFilter | null;
  chats_some: ChatFilter | null;
  chats_none: ChatFilter | null;
  messages_every: MessageFilter | null;
  messages_some: MessageFilter | null;
  messages_none: MessageFilter | null;
}

export interface MessageFilter {
  AND: Array<MessageFilter>;
  OR: Array<MessageFilter>;
  content: string | null;
  content_not: string | null;
  content_in: Array<string>;
  content_not_in: Array<string>;
  content_lt: string | null;
  content_lte: string | null;
  content_gt: string | null;
  content_gte: string | null;
  content_contains: string | null;
  content_not_contains: string | null;
  content_starts_with: string | null;
  content_not_starts_with: string | null;
  content_ends_with: string | null;
  content_not_ends_with: string | null;
  createdAt: DateTime | null;
  createdAt_not: DateTime | null;
  createdAt_in: Array<DateTime>;
  createdAt_not_in: Array<DateTime>;
  createdAt_lt: DateTime | null;
  createdAt_lte: DateTime | null;
  createdAt_gt: DateTime | null;
  createdAt_gte: DateTime | null;
  id: string | null;
  id_not: string | null;
  id_in: Array<string>;
  id_not_in: Array<string>;
  id_lt: string | null;
  id_lte: string | null;
  id_gt: string | null;
  id_gte: string | null;
  id_contains: string | null;
  id_not_contains: string | null;
  id_starts_with: string | null;
  id_not_starts_with: string | null;
  id_ends_with: string | null;
  id_not_ends_with: string | null;
  updatedAt: DateTime | null;
  updatedAt_not: DateTime | null;
  updatedAt_in: Array<DateTime>;
  updatedAt_not_in: Array<DateTime>;
  updatedAt_lt: DateTime | null;
  updatedAt_lte: DateTime | null;
  updatedAt_gt: DateTime | null;
  updatedAt_gte: DateTime | null;
  author: MemberFilter | null;
  chat: ChatFilter | null;
}

export type ChatOrderBy = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "updatedAt_ASC" | "updatedAt_DESC";

export interface Chat extends Node {
  createdAt: DateTime;
  id: string;
  members: Array<Member>;
  messages: Array<Message>;
  updatedAt: DateTime;
  _membersMeta: _QueryMeta;
  _messagesMeta: _QueryMeta;
}

export interface MembersChatArgs {
  filter: MemberFilter | null;
  orderBy: MemberOrderBy | null;
  skip: number | null;
  after: string | null;
  before: string | null;
  first: number | null;
  last: number | null;
}

export interface MessagesChatArgs {
  filter: MessageFilter | null;
  orderBy: MessageOrderBy | null;
  skip: number | null;
  after: string | null;
  before: string | null;
  first: number | null;
  last: number | null;
}

export interface MembersMetaChatArgs {
  filter: MemberFilter | null;
  orderBy: MemberOrderBy | null;
  skip: number | null;
  after: string | null;
  before: string | null;
  first: number | null;
  last: number | null;
}

export interface MessagesMetaChatArgs {
  filter: MessageFilter | null;
  orderBy: MessageOrderBy | null;
  skip: number | null;
  after: string | null;
  before: string | null;
  first: number | null;
  last: number | null;
}

export interface Node {
  id: string;
}

export type MemberOrderBy = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "title_ASC" | "title_DESC" | "updatedAt_ASC" | "updatedAt_DESC";

export interface Member extends Node {
  chats: Array<Chat>;
  createdAt: DateTime;
  id: string;
  messages: Array<Message>;
  name: string;
  title: string | null;
  updatedAt: DateTime;
  _chatsMeta: _QueryMeta;
  _messagesMeta: _QueryMeta;
}

export interface ChatsMemberArgs {
  filter: ChatFilter | null;
  orderBy: ChatOrderBy | null;
  skip: number | null;
  after: string | null;
  before: string | null;
  first: number | null;
  last: number | null;
}

export interface MessagesMemberArgs {
  filter: MessageFilter | null;
  orderBy: MessageOrderBy | null;
  skip: number | null;
  after: string | null;
  before: string | null;
  first: number | null;
  last: number | null;
}

export interface ChatsMetaMemberArgs {
  filter: ChatFilter | null;
  orderBy: ChatOrderBy | null;
  skip: number | null;
  after: string | null;
  before: string | null;
  first: number | null;
  last: number | null;
}

export interface MessagesMetaMemberArgs {
  filter: MessageFilter | null;
  orderBy: MessageOrderBy | null;
  skip: number | null;
  after: string | null;
  before: string | null;
  first: number | null;
  last: number | null;
}

export type MessageOrderBy = "content_ASC" | "content_DESC" | "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "updatedAt_ASC" | "updatedAt_DESC";

export interface Message extends Node {
  author: Member | null;
  chat: Chat | null;
  content: string;
  createdAt: DateTime;
  id: string;
  updatedAt: DateTime;
}

export interface AuthorMessageArgs {
  filter: MemberFilter | null;
}

export interface ChatMessageArgs {
  filter: ChatFilter | null;
}

export interface _QueryMeta {
  count: number;
}

export interface FileFilter {
  AND: Array<FileFilter>;
  OR: Array<FileFilter>;
  contentType: string | null;
  contentType_not: string | null;
  contentType_in: Array<string>;
  contentType_not_in: Array<string>;
  contentType_lt: string | null;
  contentType_lte: string | null;
  contentType_gt: string | null;
  contentType_gte: string | null;
  contentType_contains: string | null;
  contentType_not_contains: string | null;
  contentType_starts_with: string | null;
  contentType_not_starts_with: string | null;
  contentType_ends_with: string | null;
  contentType_not_ends_with: string | null;
  createdAt: DateTime | null;
  createdAt_not: DateTime | null;
  createdAt_in: Array<DateTime>;
  createdAt_not_in: Array<DateTime>;
  createdAt_lt: DateTime | null;
  createdAt_lte: DateTime | null;
  createdAt_gt: DateTime | null;
  createdAt_gte: DateTime | null;
  id: string | null;
  id_not: string | null;
  id_in: Array<string>;
  id_not_in: Array<string>;
  id_lt: string | null;
  id_lte: string | null;
  id_gt: string | null;
  id_gte: string | null;
  id_contains: string | null;
  id_not_contains: string | null;
  id_starts_with: string | null;
  id_not_starts_with: string | null;
  id_ends_with: string | null;
  id_not_ends_with: string | null;
  name: string | null;
  name_not: string | null;
  name_in: Array<string>;
  name_not_in: Array<string>;
  name_lt: string | null;
  name_lte: string | null;
  name_gt: string | null;
  name_gte: string | null;
  name_contains: string | null;
  name_not_contains: string | null;
  name_starts_with: string | null;
  name_not_starts_with: string | null;
  name_ends_with: string | null;
  name_not_ends_with: string | null;
  secret: string | null;
  secret_not: string | null;
  secret_in: Array<string>;
  secret_not_in: Array<string>;
  secret_lt: string | null;
  secret_lte: string | null;
  secret_gt: string | null;
  secret_gte: string | null;
  secret_contains: string | null;
  secret_not_contains: string | null;
  secret_starts_with: string | null;
  secret_not_starts_with: string | null;
  secret_ends_with: string | null;
  secret_not_ends_with: string | null;
  size: number | null;
  size_not: number | null;
  size_in: Array<number>;
  size_not_in: Array<number>;
  size_lt: number | null;
  size_lte: number | null;
  size_gt: number | null;
  size_gte: number | null;
  updatedAt: DateTime | null;
  updatedAt_not: DateTime | null;
  updatedAt_in: Array<DateTime>;
  updatedAt_not_in: Array<DateTime>;
  updatedAt_lt: DateTime | null;
  updatedAt_lte: DateTime | null;
  updatedAt_gt: DateTime | null;
  updatedAt_gte: DateTime | null;
  url: string | null;
  url_not: string | null;
  url_in: Array<string>;
  url_not_in: Array<string>;
  url_lt: string | null;
  url_lte: string | null;
  url_gt: string | null;
  url_gte: string | null;
  url_contains: string | null;
  url_not_contains: string | null;
  url_starts_with: string | null;
  url_not_starts_with: string | null;
  url_ends_with: string | null;
  url_not_ends_with: string | null;
}

export type FileOrderBy = "contentType_ASC" | "contentType_DESC" | "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "secret_ASC" | "secret_DESC" | "size_ASC" | "size_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "url_ASC" | "url_DESC";

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

export interface UserFilter {
  AND: Array<UserFilter>;
  OR: Array<UserFilter>;
  createdAt: DateTime | null;
  createdAt_not: DateTime | null;
  createdAt_in: Array<DateTime>;
  createdAt_not_in: Array<DateTime>;
  createdAt_lt: DateTime | null;
  createdAt_lte: DateTime | null;
  createdAt_gt: DateTime | null;
  createdAt_gte: DateTime | null;
  id: string | null;
  id_not: string | null;
  id_in: Array<string>;
  id_not_in: Array<string>;
  id_lt: string | null;
  id_lte: string | null;
  id_gt: string | null;
  id_gte: string | null;
  id_contains: string | null;
  id_not_contains: string | null;
  id_starts_with: string | null;
  id_not_starts_with: string | null;
  id_ends_with: string | null;
  id_not_ends_with: string | null;
  updatedAt: DateTime | null;
  updatedAt_not: DateTime | null;
  updatedAt_in: Array<DateTime>;
  updatedAt_not_in: Array<DateTime>;
  updatedAt_lt: DateTime | null;
  updatedAt_lte: DateTime | null;
  updatedAt_gt: DateTime | null;
  updatedAt_gte: DateTime | null;
}

export type UserOrderBy = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "updatedAt_ASC" | "updatedAt_DESC";

export interface User extends Node {
  createdAt: DateTime;
  id: string;
  updatedAt: DateTime;
}

export interface Mutation {
  createChat: Chat | null;
  createFile: File | null;
  createMember: Member | null;
  createMessage: Message | null;
  updateChat: Chat | null;
  updateFile: File | null;
  updateMember: Member | null;
  updateMessage: Message | null;
  updateUser: User | null;
  updateOrCreateChat: Chat | null;
  updateOrCreateFile: File | null;
  updateOrCreateMember: Member | null;
  updateOrCreateMessage: Message | null;
  updateOrCreateUser: User | null;
  deleteChat: Chat | null;
  deleteFile: File | null;
  deleteMember: Member | null;
  deleteMessage: Message | null;
  deleteUser: User | null;
  addToChatOnMember: AddToChatOnMemberPayload | null;
  addToChatOnMessage: AddToChatOnMessagePayload | null;
  addToMessageOnMember: AddToMessageOnMemberPayload | null;
  removeFromChatOnMember: RemoveFromChatOnMemberPayload | null;
  removeFromChatOnMessage: RemoveFromChatOnMessagePayload | null;
  removeFromMessageOnMember: RemoveFromMessageOnMemberPayload | null;
  createUser: User | null;
}

export interface CreateChatMutationArgs {
  membersIds: Array<string>;
  members: Array<ChatmembersMember>;
  messagesIds: Array<string>;
  messages: Array<ChatmessagesMessage>;
}

export interface CreateFileMutationArgs {
  name: string;
}

export interface CreateMemberMutationArgs {
  name: string;
  title: string | null;
  chatsIds: Array<string>;
  chats: Array<MemberchatsChat>;
  messagesIds: Array<string>;
  messages: Array<MembermessagesMessage>;
}

export interface CreateMessageMutationArgs {
  content: string;
  authorId: string | null;
  author: MessageauthorMember | null;
  chatId: string | null;
  chat: MessagechatChat | null;
}

export interface UpdateChatMutationArgs {
  id: string;
  membersIds: Array<string>;
  members: Array<ChatmembersMember>;
  messagesIds: Array<string>;
  messages: Array<ChatmessagesMessage>;
}

export interface UpdateFileMutationArgs {
  id: string;
  name: string | null;
}

export interface UpdateMemberMutationArgs {
  id: string;
  name: string | null;
  title: string | null;
  chatsIds: Array<string>;
  chats: Array<MemberchatsChat>;
  messagesIds: Array<string>;
  messages: Array<MembermessagesMessage>;
}

export interface UpdateMessageMutationArgs {
  content: string | null;
  id: string;
  authorId: string | null;
  author: MessageauthorMember | null;
  chatId: string | null;
  chat: MessagechatChat | null;
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

export interface ChatmembersMember {
  name: string;
  title: string | null;
  chatsIds: Array<string>;
  chats: Array<ChatmembersMemberchatsChat>;
  messagesIds: Array<string>;
  messages: Array<ChatmembersMembermessagesMessage>;
}

export interface ChatmembersMemberchatsChat {
  membersIds: Array<string>;
  members: Array<ChatmembersMemberchatsChatmembersMember>;
  messagesIds: Array<string>;
  messages: Array<ChatmembersMemberchatsChatmessagesMessage>;
}

export interface ChatmembersMemberchatsChatmembersMember {
  name: string;
  title: string | null;
  chatsIds: Array<string>;
  messagesIds: Array<string>;
}

export interface ChatmembersMemberchatsChatmessagesMessage {
  content: string;
  authorId: string | null;
  chatId: string | null;
}

export interface ChatmembersMembermessagesMessage {
  content: string;
  chatId: string | null;
  chat: ChatmembersMembermessagesMessagechatChat | null;
}

export interface ChatmembersMembermessagesMessagechatChat {
  membersIds: Array<string>;
  messagesIds: Array<string>;
}

export interface ChatmessagesMessage {
  content: string;
  authorId: string | null;
  author: ChatmessagesMessageauthorMember | null;
}

export interface ChatmessagesMessageauthorMember {
  name: string;
  title: string | null;
  chatsIds: Array<string>;
  chats: Array<ChatmessagesMessageauthorMemberchatsChat>;
  messagesIds: Array<string>;
  messages: Array<ChatmessagesMessageauthorMembermessagesMessage>;
}

export interface ChatmessagesMessageauthorMemberchatsChat {
  membersIds: Array<string>;
  messagesIds: Array<string>;
}

export interface ChatmessagesMessageauthorMembermessagesMessage {
  content: string;
  authorId: string | null;
  chatId: string | null;
}

export interface MemberchatsChat {
  membersIds: Array<string>;
  members: Array<MemberchatsChatmembersMember>;
  messagesIds: Array<string>;
  messages: Array<MemberchatsChatmessagesMessage>;
}

export interface MemberchatsChatmembersMember {
  name: string;
  title: string | null;
  chatsIds: Array<string>;
  chats: Array<MemberchatsChatmembersMemberchatsChat>;
  messagesIds: Array<string>;
  messages: Array<MemberchatsChatmembersMembermessagesMessage>;
}

export interface MemberchatsChatmembersMemberchatsChat {
  membersIds: Array<string>;
  messagesIds: Array<string>;
}

export interface MemberchatsChatmembersMembermessagesMessage {
  content: string;
  authorId: string | null;
  chatId: string | null;
}

export interface MemberchatsChatmessagesMessage {
  content: string;
  authorId: string | null;
  author: MemberchatsChatmessagesMessageauthorMember | null;
}

export interface MemberchatsChatmessagesMessageauthorMember {
  name: string;
  title: string | null;
  chatsIds: Array<string>;
  messagesIds: Array<string>;
}

export interface MembermessagesMessage {
  content: string;
  chatId: string | null;
  chat: MembermessagesMessagechatChat | null;
}

export interface MembermessagesMessagechatChat {
  membersIds: Array<string>;
  members: Array<MembermessagesMessagechatChatmembersMember>;
  messagesIds: Array<string>;
  messages: Array<MembermessagesMessagechatChatmessagesMessage>;
}

export interface MembermessagesMessagechatChatmembersMember {
  name: string;
  title: string | null;
  chatsIds: Array<string>;
  messagesIds: Array<string>;
}

export interface MembermessagesMessagechatChatmessagesMessage {
  content: string;
  authorId: string | null;
  chatId: string | null;
}

export interface MessageauthorMember {
  name: string;
  title: string | null;
  chatsIds: Array<string>;
  chats: Array<MessageauthorMemberchatsChat>;
  messagesIds: Array<string>;
  messages: Array<MessageauthorMembermessagesMessage>;
}

export interface MessageauthorMemberchatsChat {
  membersIds: Array<string>;
  members: Array<MessageauthorMemberchatsChatmembersMember>;
  messagesIds: Array<string>;
  messages: Array<MessageauthorMemberchatsChatmessagesMessage>;
}

export interface MessageauthorMemberchatsChatmembersMember {
  name: string;
  title: string | null;
  chatsIds: Array<string>;
  messagesIds: Array<string>;
}

export interface MessageauthorMemberchatsChatmessagesMessage {
  content: string;
  authorId: string | null;
  chatId: string | null;
}

export interface MessageauthorMembermessagesMessage {
  content: string;
  chatId: string | null;
  chat: MessageauthorMembermessagesMessagechatChat | null;
}

export interface MessageauthorMembermessagesMessagechatChat {
  membersIds: Array<string>;
  messagesIds: Array<string>;
}

export interface MessagechatChat {
  membersIds: Array<string>;
  members: Array<MessagechatChatmembersMember>;
  messagesIds: Array<string>;
  messages: Array<MessagechatChatmessagesMessage>;
}

export interface MessagechatChatmembersMember {
  name: string;
  title: string | null;
  chatsIds: Array<string>;
  chats: Array<MessagechatChatmembersMemberchatsChat>;
  messagesIds: Array<string>;
  messages: Array<MessagechatChatmembersMembermessagesMessage>;
}

export interface MessagechatChatmembersMemberchatsChat {
  membersIds: Array<string>;
  messagesIds: Array<string>;
}

export interface MessagechatChatmembersMembermessagesMessage {
  content: string;
  authorId: string | null;
  chatId: string | null;
}

export interface MessagechatChatmessagesMessage {
  content: string;
  authorId: string | null;
  author: MessagechatChatmessagesMessageauthorMember | null;
}

export interface MessagechatChatmessagesMessageauthorMember {
  name: string;
  title: string | null;
  chatsIds: Array<string>;
  messagesIds: Array<string>;
}

export interface UpdateChat {
  id: string;
  membersIds: Array<string>;
  members: Array<ChatmembersMember>;
  messagesIds: Array<string>;
  messages: Array<ChatmessagesMessage>;
}

export interface CreateChat {
  membersIds: Array<string>;
  members: Array<ChatmembersMember>;
  messagesIds: Array<string>;
  messages: Array<ChatmessagesMessage>;
}

export interface UpdateFile {
  id: string;
  name: string | null;
}

export interface CreateFile {
  name: string;
}

export interface UpdateMember {
  id: string;
  name: string | null;
  title: string | null;
  chatsIds: Array<string>;
  chats: Array<MemberchatsChat>;
  messagesIds: Array<string>;
  messages: Array<MembermessagesMessage>;
}

export interface CreateMember {
  name: string;
  title: string | null;
  chatsIds: Array<string>;
  chats: Array<MemberchatsChat>;
  messagesIds: Array<string>;
  messages: Array<MembermessagesMessage>;
}

export interface UpdateMessage {
  content: string | null;
  id: string;
  authorId: string | null;
  author: MessageauthorMember | null;
  chatId: string | null;
  chat: MessagechatChat | null;
}

export interface CreateMessage {
  content: string;
  authorId: string | null;
  author: MessageauthorMember | null;
  chatId: string | null;
  chat: MessagechatChat | null;
}

export interface UpdateUser {
  id: string;
}

export interface AddToChatOnMemberPayload {
  chatsChat: Chat | null;
  membersMember: Member | null;
}

export interface AddToChatOnMessagePayload {
  chatChat: Chat | null;
  messagesMessage: Message | null;
}

export interface AddToMessageOnMemberPayload {
  messagesMessage: Message | null;
  authorMember: Member | null;
}

export interface RemoveFromChatOnMemberPayload {
  chatsChat: Chat | null;
  membersMember: Member | null;
}

export interface RemoveFromChatOnMessagePayload {
  chatChat: Chat | null;
  messagesMessage: Message | null;
}

export interface RemoveFromMessageOnMemberPayload {
  messagesMessage: Message | null;
  authorMember: Member | null;
}

export interface Subscription {
  Chat: ChatSubscriptionPayload | null;
  File: FileSubscriptionPayload | null;
  Member: MemberSubscriptionPayload | null;
  Message: MessageSubscriptionPayload | null;
  User: UserSubscriptionPayload | null;
}

export interface ChatSubscriptionArgs {
  filter: ChatSubscriptionFilter | null;
}

export interface FileSubscriptionArgs {
  filter: FileSubscriptionFilter | null;
}

export interface MemberSubscriptionArgs {
  filter: MemberSubscriptionFilter | null;
}

export interface MessageSubscriptionArgs {
  filter: MessageSubscriptionFilter | null;
}

export interface UserSubscriptionArgs {
  filter: UserSubscriptionFilter | null;
}

export interface ChatSubscriptionFilter {
  AND: Array<ChatSubscriptionFilter>;
  OR: Array<ChatSubscriptionFilter>;
  mutation_in: Array<_ModelMutationType>;
  updatedFields_contains: string | null;
  updatedFields_contains_every: Array<string>;
  updatedFields_contains_some: Array<string>;
  node: ChatSubscriptionFilterNode | null;
}

export type _ModelMutationType = "CREATED" | "UPDATED" | "DELETED";

export interface ChatSubscriptionFilterNode {
  createdAt: DateTime | null;
  createdAt_not: DateTime | null;
  createdAt_in: Array<DateTime>;
  createdAt_not_in: Array<DateTime>;
  createdAt_lt: DateTime | null;
  createdAt_lte: DateTime | null;
  createdAt_gt: DateTime | null;
  createdAt_gte: DateTime | null;
  id: string | null;
  id_not: string | null;
  id_in: Array<string>;
  id_not_in: Array<string>;
  id_lt: string | null;
  id_lte: string | null;
  id_gt: string | null;
  id_gte: string | null;
  id_contains: string | null;
  id_not_contains: string | null;
  id_starts_with: string | null;
  id_not_starts_with: string | null;
  id_ends_with: string | null;
  id_not_ends_with: string | null;
  updatedAt: DateTime | null;
  updatedAt_not: DateTime | null;
  updatedAt_in: Array<DateTime>;
  updatedAt_not_in: Array<DateTime>;
  updatedAt_lt: DateTime | null;
  updatedAt_lte: DateTime | null;
  updatedAt_gt: DateTime | null;
  updatedAt_gte: DateTime | null;
  members_every: MemberFilter | null;
  members_some: MemberFilter | null;
  members_none: MemberFilter | null;
  messages_every: MessageFilter | null;
  messages_some: MessageFilter | null;
  messages_none: MessageFilter | null;
}

export interface ChatSubscriptionPayload {
  mutation: _ModelMutationType;
  node: Chat | null;
  updatedFields: Array<string>;
  previousValues: ChatPreviousValues | null;
}

export interface ChatPreviousValues {
  createdAt: DateTime;
  id: string;
  updatedAt: DateTime;
}

export interface FileSubscriptionFilter {
  AND: Array<FileSubscriptionFilter>;
  OR: Array<FileSubscriptionFilter>;
  mutation_in: Array<_ModelMutationType>;
  updatedFields_contains: string | null;
  updatedFields_contains_every: Array<string>;
  updatedFields_contains_some: Array<string>;
  node: FileSubscriptionFilterNode | null;
}

export interface FileSubscriptionFilterNode {
  contentType: string | null;
  contentType_not: string | null;
  contentType_in: Array<string>;
  contentType_not_in: Array<string>;
  contentType_lt: string | null;
  contentType_lte: string | null;
  contentType_gt: string | null;
  contentType_gte: string | null;
  contentType_contains: string | null;
  contentType_not_contains: string | null;
  contentType_starts_with: string | null;
  contentType_not_starts_with: string | null;
  contentType_ends_with: string | null;
  contentType_not_ends_with: string | null;
  createdAt: DateTime | null;
  createdAt_not: DateTime | null;
  createdAt_in: Array<DateTime>;
  createdAt_not_in: Array<DateTime>;
  createdAt_lt: DateTime | null;
  createdAt_lte: DateTime | null;
  createdAt_gt: DateTime | null;
  createdAt_gte: DateTime | null;
  id: string | null;
  id_not: string | null;
  id_in: Array<string>;
  id_not_in: Array<string>;
  id_lt: string | null;
  id_lte: string | null;
  id_gt: string | null;
  id_gte: string | null;
  id_contains: string | null;
  id_not_contains: string | null;
  id_starts_with: string | null;
  id_not_starts_with: string | null;
  id_ends_with: string | null;
  id_not_ends_with: string | null;
  name: string | null;
  name_not: string | null;
  name_in: Array<string>;
  name_not_in: Array<string>;
  name_lt: string | null;
  name_lte: string | null;
  name_gt: string | null;
  name_gte: string | null;
  name_contains: string | null;
  name_not_contains: string | null;
  name_starts_with: string | null;
  name_not_starts_with: string | null;
  name_ends_with: string | null;
  name_not_ends_with: string | null;
  secret: string | null;
  secret_not: string | null;
  secret_in: Array<string>;
  secret_not_in: Array<string>;
  secret_lt: string | null;
  secret_lte: string | null;
  secret_gt: string | null;
  secret_gte: string | null;
  secret_contains: string | null;
  secret_not_contains: string | null;
  secret_starts_with: string | null;
  secret_not_starts_with: string | null;
  secret_ends_with: string | null;
  secret_not_ends_with: string | null;
  size: number | null;
  size_not: number | null;
  size_in: Array<number>;
  size_not_in: Array<number>;
  size_lt: number | null;
  size_lte: number | null;
  size_gt: number | null;
  size_gte: number | null;
  updatedAt: DateTime | null;
  updatedAt_not: DateTime | null;
  updatedAt_in: Array<DateTime>;
  updatedAt_not_in: Array<DateTime>;
  updatedAt_lt: DateTime | null;
  updatedAt_lte: DateTime | null;
  updatedAt_gt: DateTime | null;
  updatedAt_gte: DateTime | null;
  url: string | null;
  url_not: string | null;
  url_in: Array<string>;
  url_not_in: Array<string>;
  url_lt: string | null;
  url_lte: string | null;
  url_gt: string | null;
  url_gte: string | null;
  url_contains: string | null;
  url_not_contains: string | null;
  url_starts_with: string | null;
  url_not_starts_with: string | null;
  url_ends_with: string | null;
  url_not_ends_with: string | null;
}

export interface FileSubscriptionPayload {
  mutation: _ModelMutationType;
  node: File | null;
  updatedFields: Array<string>;
  previousValues: FilePreviousValues | null;
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

export interface MemberSubscriptionFilter {
  AND: Array<MemberSubscriptionFilter>;
  OR: Array<MemberSubscriptionFilter>;
  mutation_in: Array<_ModelMutationType>;
  updatedFields_contains: string | null;
  updatedFields_contains_every: Array<string>;
  updatedFields_contains_some: Array<string>;
  node: MemberSubscriptionFilterNode | null;
}

export interface MemberSubscriptionFilterNode {
  createdAt: DateTime | null;
  createdAt_not: DateTime | null;
  createdAt_in: Array<DateTime>;
  createdAt_not_in: Array<DateTime>;
  createdAt_lt: DateTime | null;
  createdAt_lte: DateTime | null;
  createdAt_gt: DateTime | null;
  createdAt_gte: DateTime | null;
  id: string | null;
  id_not: string | null;
  id_in: Array<string>;
  id_not_in: Array<string>;
  id_lt: string | null;
  id_lte: string | null;
  id_gt: string | null;
  id_gte: string | null;
  id_contains: string | null;
  id_not_contains: string | null;
  id_starts_with: string | null;
  id_not_starts_with: string | null;
  id_ends_with: string | null;
  id_not_ends_with: string | null;
  name: string | null;
  name_not: string | null;
  name_in: Array<string>;
  name_not_in: Array<string>;
  name_lt: string | null;
  name_lte: string | null;
  name_gt: string | null;
  name_gte: string | null;
  name_contains: string | null;
  name_not_contains: string | null;
  name_starts_with: string | null;
  name_not_starts_with: string | null;
  name_ends_with: string | null;
  name_not_ends_with: string | null;
  title: string | null;
  title_not: string | null;
  title_in: Array<string>;
  title_not_in: Array<string>;
  title_lt: string | null;
  title_lte: string | null;
  title_gt: string | null;
  title_gte: string | null;
  title_contains: string | null;
  title_not_contains: string | null;
  title_starts_with: string | null;
  title_not_starts_with: string | null;
  title_ends_with: string | null;
  title_not_ends_with: string | null;
  updatedAt: DateTime | null;
  updatedAt_not: DateTime | null;
  updatedAt_in: Array<DateTime>;
  updatedAt_not_in: Array<DateTime>;
  updatedAt_lt: DateTime | null;
  updatedAt_lte: DateTime | null;
  updatedAt_gt: DateTime | null;
  updatedAt_gte: DateTime | null;
  chats_every: ChatFilter | null;
  chats_some: ChatFilter | null;
  chats_none: ChatFilter | null;
  messages_every: MessageFilter | null;
  messages_some: MessageFilter | null;
  messages_none: MessageFilter | null;
}

export interface MemberSubscriptionPayload {
  mutation: _ModelMutationType;
  node: Member | null;
  updatedFields: Array<string>;
  previousValues: MemberPreviousValues | null;
}

export interface MemberPreviousValues {
  createdAt: DateTime;
  id: string;
  name: string;
  title: string | null;
  updatedAt: DateTime;
}

export interface MessageSubscriptionFilter {
  AND: Array<MessageSubscriptionFilter>;
  OR: Array<MessageSubscriptionFilter>;
  mutation_in: Array<_ModelMutationType>;
  updatedFields_contains: string | null;
  updatedFields_contains_every: Array<string>;
  updatedFields_contains_some: Array<string>;
  node: MessageSubscriptionFilterNode | null;
}

export interface MessageSubscriptionFilterNode {
  content: string | null;
  content_not: string | null;
  content_in: Array<string>;
  content_not_in: Array<string>;
  content_lt: string | null;
  content_lte: string | null;
  content_gt: string | null;
  content_gte: string | null;
  content_contains: string | null;
  content_not_contains: string | null;
  content_starts_with: string | null;
  content_not_starts_with: string | null;
  content_ends_with: string | null;
  content_not_ends_with: string | null;
  createdAt: DateTime | null;
  createdAt_not: DateTime | null;
  createdAt_in: Array<DateTime>;
  createdAt_not_in: Array<DateTime>;
  createdAt_lt: DateTime | null;
  createdAt_lte: DateTime | null;
  createdAt_gt: DateTime | null;
  createdAt_gte: DateTime | null;
  id: string | null;
  id_not: string | null;
  id_in: Array<string>;
  id_not_in: Array<string>;
  id_lt: string | null;
  id_lte: string | null;
  id_gt: string | null;
  id_gte: string | null;
  id_contains: string | null;
  id_not_contains: string | null;
  id_starts_with: string | null;
  id_not_starts_with: string | null;
  id_ends_with: string | null;
  id_not_ends_with: string | null;
  updatedAt: DateTime | null;
  updatedAt_not: DateTime | null;
  updatedAt_in: Array<DateTime>;
  updatedAt_not_in: Array<DateTime>;
  updatedAt_lt: DateTime | null;
  updatedAt_lte: DateTime | null;
  updatedAt_gt: DateTime | null;
  updatedAt_gte: DateTime | null;
  author: MemberFilter | null;
  chat: ChatFilter | null;
}

export interface MessageSubscriptionPayload {
  mutation: _ModelMutationType;
  node: Message | null;
  updatedFields: Array<string>;
  previousValues: MessagePreviousValues | null;
}

export interface MessagePreviousValues {
  content: string;
  createdAt: DateTime;
  id: string;
  updatedAt: DateTime;
}

export interface UserSubscriptionFilter {
  AND: Array<UserSubscriptionFilter>;
  OR: Array<UserSubscriptionFilter>;
  mutation_in: Array<_ModelMutationType>;
  updatedFields_contains: string | null;
  updatedFields_contains_every: Array<string>;
  updatedFields_contains_some: Array<string>;
  node: UserSubscriptionFilterNode | null;
}

export interface UserSubscriptionFilterNode {
  createdAt: DateTime | null;
  createdAt_not: DateTime | null;
  createdAt_in: Array<DateTime>;
  createdAt_not_in: Array<DateTime>;
  createdAt_lt: DateTime | null;
  createdAt_lte: DateTime | null;
  createdAt_gt: DateTime | null;
  createdAt_gte: DateTime | null;
  id: string | null;
  id_not: string | null;
  id_in: Array<string>;
  id_not_in: Array<string>;
  id_lt: string | null;
  id_lte: string | null;
  id_gt: string | null;
  id_gte: string | null;
  id_contains: string | null;
  id_not_contains: string | null;
  id_starts_with: string | null;
  id_not_starts_with: string | null;
  id_ends_with: string | null;
  id_not_ends_with: string | null;
  updatedAt: DateTime | null;
  updatedAt_not: DateTime | null;
  updatedAt_in: Array<DateTime>;
  updatedAt_not_in: Array<DateTime>;
  updatedAt_lt: DateTime | null;
  updatedAt_lte: DateTime | null;
  updatedAt_gt: DateTime | null;
  updatedAt_gte: DateTime | null;
}

export interface UserSubscriptionPayload {
  mutation: _ModelMutationType;
  node: User | null;
  updatedFields: Array<string>;
  previousValues: UserPreviousValues | null;
}

export interface UserPreviousValues {
  createdAt: DateTime;
  id: string;
  updatedAt: DateTime;
}

export type BigDecimal = any;

export type BigInt = any;

export type Long = any;

export namespace GetAllChatsQuery {
  export type Variables = {
      member: string;
  }

  export type Result = {
    allChats: Array<AllChats>;
  } 

  export type AllChats = {
    members: Array<Members>;
    id: string;
    date: DateTime;
    messages: Array<Messages>;
  } 

  export type Members = {
    id: string;
    name: string;
  } 

  export type Messages = {
    content: string;
    author: Author;
  } 

  export type Author = {
    id: string;
    name: string;
  } 
}

export namespace GetAllMembersQuery {
  export type Variables = {
      member: string;
  }

  export type Result = {
    allMembers: Array<AllMembers>;
  } 

  export type AllMembers = {
    id: string;
    name: string;
    title: string;
    chats: Array<Chats>;
  } 

  export type Chats = {
    id: string;
  } 
}

export namespace GetChatMembersQuery {
  export type Variables = {
      chat: string;
      member: string;
  }

  export type Result = {
    Chat: Chat;
  } 

  export type Chat = {
    members: Array<Members>;
  } 

  export type Members = {
    id: string;
    name: string;
  } 
}

export namespace GetChatMessagesQuery {
  export type Variables = {
      chat: string;
  }

  export type Result = {
    allMessages: Array<AllMessages>;
  } 

  export type AllMessages = {
    id: string;
    content: string;
    author: Author;
  } 

  export type Author = {
    id: string;
    name: string;
  } 
}

export namespace GetDeletedChatSubscription {
  export type Variables = {
      member: string;
  }

  export type Result = {
    Chat: Chat;
  } 

  export type Chat = {
    previousValues: PreviousValues;
  } 

  export type PreviousValues = {
    id: string;
  } 
}

export namespace GetMemberQuery {
  export type Variables = {
      name: string;
  }

  export type Result = {
    allMembers: Array<AllMembers>;
  } 

  export type AllMembers = {
    id: string;
    name: string;
  } 
}

export namespace GetNewChatMessageSubscription {
  export type Variables = {
      chats: Array<string>;
  }

  export type Result = {
    Message: Message;
  } 

  export type Message = {
    node: Node;
  } 

  export type Node = {
    id: string;
    content: string;
    chat: Chat;
  } 

  export type Chat = {
    id: string;
    date: DateTime;
  } 
}

export namespace GetNewChatSubscription {
  export type Variables = {
      member: string;
  }

  export type Result = {
    Chat: Chat;
  } 

  export type Chat = {
    node: Node;
  } 

  export type Node = {
    id: string;
    date: DateTime;
    members: Array<Members>;
  } 

  export type Members = {
    id: string;
    name: string;
  } 
}

export namespace GetNewMessageSubscription {
  export type Variables = {
      chat: string;
  }

  export type Result = {
    Message: Message;
  } 

  export type Message = {
    node: Node;
  } 

  export type Node = {
    id: string;
    content: string;
    author: Author;
  } 

  export type Author = {
    id: string;
    name: string;
  } 
}

export namespace RemoveChatMutation {
  export type Variables = {
      chat: string;
  }

  export type Result = {
    deleteChat: DeleteChat;
  } 

  export type DeleteChat = {
    id: string;
  } 
}

export namespace SendMessageMutation {
  export type Variables = {
      author: string;
      chat: string;
      content: string;
  }

  export type Result = {
    createMessage: CreateMessage;
  } 

  export type CreateMessage = {
    id: string;
    content: string;
    author: Author;
  } 

  export type Author = {
    id: string;
    name: string;
  } 
}

export namespace StartChatMutation {
  export type Variables = {
      members: Array<string>;
      author: string;
  }

  export type Result = {
    createChat: CreateChat;
  } 

  export type CreateChat = {
    id: string;
    date: DateTime;
    messages: Array<Messages>;
    members: Array<Members>;
  } 

  export type Messages = {
    content: string;
    author: Author;
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
