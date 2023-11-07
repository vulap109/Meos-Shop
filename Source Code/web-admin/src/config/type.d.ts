interface IArticle {
  id: number;
  title: string;
  body: string;
}

type StateType = {
  articles: IArticle[];
};

type ActionType = {
  type: string;
  payload?: any;
};

type DispatchType = (args: ActionType) => ActionType;
