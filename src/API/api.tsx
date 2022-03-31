import axios from 'axios';

// const instance = axios.create({
//     // withCredentials: true,
//     baseURL: 'https://jsonplaceholder.typicode.com/users',
//     headers: {}
// });

export const articlesAPI = {
  getArticles(searchInputValue: string) {
    return axios
      .get(`https://api.spaceflightnewsapi.net/v3/articles/?_limit=6&_title_contains=${searchInputValue}`)
      .then(response => {
        return response.data;
      });
  }
};
