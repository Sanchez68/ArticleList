export enum ArticlesActiontypes {
    SET_ARTICLES = 'SET_ARTICLES'
}

export interface ArticlesState {
    articles: any[]
}

export interface SetArticles {
    type: typeof ArticlesActiontypes.SET_ARTICLES,
    payload: any[]
}

export interface ArticleAction {
    type: string,
    payload?: any
}

export interface ArticleState {
    id: number,
    title: string,
    url:string
}
