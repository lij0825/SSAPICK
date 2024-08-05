export interface IQuestion {
  id: number;
  banCount?: number;
  skipCount?: number;
  content: string;
  category: ICategory;
  createdAt?: string;
}

export interface IQuestionNoCreatedAt {
  id: number;
  banCount?: number;
  skipCount?: number;
  content: string;
  category: ICategory;
}

export interface ICategory {
  id: number;
  name: string;
  thumbnail?: string;
}

export interface IPick {
  id: number;
  sender: IPickUser;
  receiver: IPickUser;
  question: IQuestion;
  createdAt: string;
  messageSend: boolean;
  openedHints: Array<string>;
}

export interface IPickUser {
  userId: number;
  nickname?: string;
  gender: string;
  campusName: string;
  campusSection: number;
  campusDescription: string;
  profileImage?: string;
}

export interface IPickCreate {
  receiverId: number | null;
  questionId: number;
  index: number;
  status: string;
}

export interface ICreateQuestion {
  categoryId: number;
  content: string;
}
