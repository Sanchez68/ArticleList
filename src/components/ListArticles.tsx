import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { requestArticles } from '../redux/redusers/articlesReducer';
import { Button, Divider, IconButton, InputBase, Paper } from '@mui/material';
import s from './ListArticles.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { ArrowForward } from '@material-ui/icons';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

import moment from 'moment';

const Hightlight = (props: any) => {
  const { filter, str } = props;
  if (!filter) return str;
  const regexp = new RegExp(filter, 'ig');
  const matchValue = str.match(regexp);
  if (matchValue) {
    console.log('matchValue', matchValue);
    console.log('str.split(regexp)', str.split(regexp));
    return str.split(regexp).map((s: string, index: number, array: Array<any>) => {
      if (index < array.length - 1) {
        const c = matchValue.shift();
        return (
          <>
            {s}
            <span className={'hightlight'}>{c}</span>
          </>
        );
      }
      return s;
    });
  }
  return str;
};

const ListArticles: React.FC = () => {
  const navigate = useNavigate();

  const { articles } = useTypeSelector(state => state.articles);
  const dispatch = useDispatch();
  const [searchInputValue, setSearchInputValue] = useState('');
  useEffect(() => {
    dispatch(requestArticles(searchInputValue));
  }, [searchInputValue]);

  const countOfCharacter = (string: string, count: number) => {
    return string.length > count ? string.slice(0, count) + '...' : string;
  };

  return (
    <div className={s.mainWrapper}>
      <div className={s.inputSearchWrapper}>
        <div>
          <p className={s.filterLabel}>Filter by keywords</p>
          <Paper className={s.paperMui} component="form" sx={{ display: 'flex', alignItems: 'center', width: 600 }}>
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search for a article..."
              value={searchInputValue}
              onChange={e => {
                setSearchInputValue(e.target.value);
              }}
              sx={{ ml: 1, flex: 1 }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          </Paper>
        </div>
      </div>
      <div className={s.result}>Result: {articles.length}</div>
      <div className={s.listWrapper}>
        {articles.map(article => (
          <div className={s.cardWrapper} key={article.id}>
            <div className={s.cardContenWrappert}>
              <img src={article.imageUrl} alt="image" />
              <div className={s.cardContent}>
                <div className={s.publishedAt}>
                  <CalendarMonthOutlinedIcon />
                  <p>{moment(article.publishedAt).format('MMMM Do, YYYY')}</p>
                </div>
                <p className={s.articleTitle}>{article.title}</p>
                {countOfCharacter(article.summary, 100)}
              </div>
              <br />
            </div>
            <Button
              className={s.forwardButton}
              onClick={() => {
                navigate(`/ArticleList/article/${article.id}`);
              }}
              endIcon={<ArrowForward />}
            >
              Read more
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListArticles;
