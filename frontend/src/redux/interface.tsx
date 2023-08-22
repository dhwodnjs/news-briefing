export interface IArticle {
  id: number;
  title: string;
  theme: string;
  image: string;
  content: string;
  tags?: string[];
  press: string;
}

export interface IArticleDB {
  id: number;
  title: string;
  category_name: string;
  image: string;
  body: string;
  tags?: string[];
  press: string;
  content_url: string;
  date: string;
}

export interface IHeadline {
  id: number;
  title: string;
  image: string;
  tags?: string[];
  press?: string;
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
