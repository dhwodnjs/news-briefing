export interface IArticle {
  id: number;
  title: string;
  theme: string;
  image: string;
  content: string;
  tags?: string[];
  press: string;
}

export interface IHeadline {
  id: number;
  title: string;
  image: string;
  tags?: string[];
}

export interface IThemeArticles {
  theme: string;
  articles: IArticle[];
}

export const DArticle: IArticle = {
  id: 0,
  title: "test",
  theme: "test",
  image: process.env.PUBLIC_URL + `/image/image1.jpg`,
  content: "test",
  tags: ["test1", "test2", "test3"],
  press: "test",
};

export const DThemeArticles: IThemeArticles = {
  theme: "test",
  articles: [DArticle, DArticle, DArticle, DArticle, DArticle],
};
