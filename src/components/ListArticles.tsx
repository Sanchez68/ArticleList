import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { requestArticles } from '../redux/redusers/articlesReducer';
import { Button, Divider, IconButton, InputBase, Paper } from '@mui/material';
import s from './ListArticles.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { ArrowForward } from '@material-ui/icons';
import moment from 'moment';

const ListArticles: React.FC = () => {
  const navigate = useNavigate();

  const { articles } = useTypeSelector(state => state.articles);
  const dispatch = useDispatch();
  console.log(articles);
  const [searchInputValue, setSearchInputValue] = useState('');
  console.log(searchInputValue);
  useEffect(() => {
    dispatch(requestArticles(searchInputValue));
  }, [searchInputValue]);

  const countOfCharacter = (string: string) => {
    return string.length > 140 ? string.slice(0, 140) + ' ...' : string;
  };

  return (
    <div className={s.mainWrapper}>
      <div className={s.inputSearchWrapper}>
        <div>
          <p className={s.filterLabel}>Filter by keywords</p>
          <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
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
              <div></div>
              <div className={s.cardContent}>
                {moment(article.publishedAt).format('MMMM Do, YYYY')} <br />
                <h2>{article.title}</h2>
                {countOfCharacter(article.summary)}
              </div>
              <br />
            </div>
            <Button
              className={s.forwardButton}
              onClick={() => {
                navigate(`/article/${article.id}`);
              }}
              endIcon={<ArrowForward />}
            >
              Read more
            </Button>
          </div>
        ))}
      </div>
      {/*<div className={s.listWrapper}>*/}
      {/*  {articles.map(article => (*/}
      {/*    <Link className={s.cardWrapper} key={article.id} to={`article/${article.id}`}>*/}
      {/*      <Card className={s.cardWidth}>*/}
      {/*        <CardActionArea>*/}
      {/*          <CardMedia*/}
      {/*            component="img"*/}
      {/*            height="140"*/}
      {/*            image={article.imageUrl}*/}
      {/*            alt="something wrong, img not connected"*/}
      {/*          />*/}
      {/*          <CardContent>*/}
      {/*            <Typography gutterBottom variant="h5" component="div">*/}
      {/*              {article.title}*/}
      {/*            </Typography>*/}
      {/*            <Typography variant="body2" color="text.secondary">*/}
      {/*              {article.publishedAt} <br />*/}
      {/*              {article.summary}*/}
      {/*            </Typography>*/}
      {/*          </CardContent>*/}
      {/*        </CardActionArea>*/}
      {/*        <CardActions>*/}
      {/*          <Button className={s.readMoreWrapper} size="small" color="primary">*/}
      {/*            Read more*/}
      {/*          </Button>*/}
      {/*        </CardActions>*/}
      {/*      </Card>*/}
      {/*    </Link>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </div>
  );
};

export default ListArticles;
