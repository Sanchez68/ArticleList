import { articlesAPI } from '../../API/api';
import { ArticleAction, ArticlesActiontypes, ArticlesState, SetArticles } from '../../types/articles';
import { Dispatch } from 'redux';

let initialState: ArticlesState = {
  articles: []
};

export const articlesReducer = (state = initialState, action: ArticleAction): ArticlesState => {
  switch (action.type) {
    case ArticlesActiontypes.SET_ARTICLES: {
      console.log(action.payload, 'payload');
      return {
        ...state,
        articles: action.payload
      };
    }
    default:
      return state;
  }
};

export const setArticles = (payload: SetArticles) => ({
  type: ArticlesActiontypes.SET_ARTICLES,
  payload
});

export const requestArticles = (searchInputValue: string) => {
  return async (dispatch: Dispatch<ArticleAction>) => {
    try {
      const response = await articlesAPI.getArticles(searchInputValue);
      dispatch(setArticles(response));
    } catch (e) {
      alert('Err');
    }
  };
};

export default articlesReducer;
