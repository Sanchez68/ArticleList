import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import s from './ListArticles.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ArticlesDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentArticle, setCurrentArticle] = useState<any>({});

  useEffect(() => {
    axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${id}`).then(res => {
      setCurrentArticle(res.data);
    });
  }, [id]);
  console.log(currentArticle);
  return (
    <div>
      <div className={s.wrapper}>
        <img src={currentArticle.imageUrl} alt="img" />
        <div className={s.detailsWrapper}>
          <div className={s.detailsContentWrapper}>
            <div className={s.detailsContent}>
              <h1>{currentArticle.title}</h1>
              <div className={s.textWrapper}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, autem dignissimos ea et fugiat illum in
                itaque neque nisi nulla optio, quam velit voluptatem. A accusamus delectus eius eligendi, est expedita
                hic inventore, minus nam necessitatibus, officiis optio temporibus totam? Alias dolor molestiae nemo
                optio quaerat quas quia similique sit suscipit! Asperiores assumenda, beatae cupiditate deserunt
                explicabo facilis fugiat id itaque laboriosam, maiores modi natus nemo nihil nobis nostrum odio quos
                similique suscipit velit voluptatibus? Eius illo iusto minus mollitia necessitatibus nobis nostrum odio
                odit quas qui saepe sapiente suscipit, voluptates. Animi blanditiis doloremque esse et nobis perferendis
                placeat quaerat repellat. Ad adipisci aliquid animi atque consequatur debitis dolor eligendi eos, ex
                fuga inventore ipsa ipsam ipsum itaque laudantium magni minus molestias odit officiis optio placeat
                porro quibusdam quisquam quod recusandae rem, tempore ut vel veritatis voluptatum. Culpa eaque eligendi
                laborum magnam nobis recusandae sequi voluptatum? Alias at autem consequatur debitis deleniti
                dignissimos dolor dolorem dolores enim exercitationem expedita in iste, maxime neque perferendis,
                possimus praesentium qui quia reprehenderit repudiandae tempora temporibus totam vitae voluptate
                voluptatem. Distinctio dolorem eligendi excepturi fugiat officiis placeat porro tempora vitae. Dolore
                esse est expedita optio quod rem similique totam vel, voluptate voluptatibus? Autem, delectus dolor
                dolore laborum maiores maxime numquam perferendis quasi qui repellat? A adipisci aliquid consequatur
                dignissimos esse est, exercitationem facere harum id illo ipsa iusto, labore maiores minima natus
                nesciunt non placeat quaerat quia quisquam quos rem sed temporibus? Animi assumenda consectetur,
                corporis dicta eius facilis fugit hic inventore itaque molestias necessitatibus nobis quibusdam, ratione
                reiciendis sunt suscipit tenetur unde velit vero, voluptatibus! A ccusamus autem delectus esse ex id
                incidunt ipsa, libero quod unde veritatis. A ab atque debitis dicta dolores enim esse eum fuga, fugiat
                iusto mollitia natus perferendis, porro quas, quos sequi velit vitae! In magnam nisi non optio! Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. At, autem dignissimos ea et fugiat illum in itaque
                neque nisi nulla optio, quam velit voluptatem. A accusamus delectus eius eligendi, est expedita hic
                inventore, minus nam necessitatibus, officiis optio temporibus totam? Alias dolor molestiae nemo optio
                quaerat quas quia similique sit suscipit! Asperiores assumenda, beatae cupiditate deserunt explicabo
                facilis fugiat id itaque laboriosam, maiores modi natus nemo nihil nobis nostrum odio quos similique
                suscipit velit voluptatibus? Eius illo iusto minus mollitia necessitatibus nobis nostrum odio odit quas
                qui saepe sapiente suscipit, voluptates. Animi blanditiis doloremque esse et nobis perferendis placeat
                quaerat repellat. Ad adipisci aliquid animi atque consequatur debitis dolor eligendi eos, ex fuga
                inventore ipsa ipsam ipsum itaque laudantium magni minus molestias odit officiis optio placeat porro
                quibusdam quisquam quod recusandae rem, tempore ut vel veritatis voluptatum. Culpa eaque eligendi
                laborum magnam nobis recusandae sequi voluptatum? Alias at autem consequatur debitis deleniti
                dignissimos dolor dolorem dolores enim exercitationem expedita in iste, maxime neque perferendis,
                possimus praesentium qui quia reprehenderit repudiandae tempora temporibus totam vitae voluptate
                voluptatem. Distinctio dolorem eligendi excepturi fugiat officiis placeat porro tempora vitae. Dolore
                esse est expedita optio quod rem similique totam vel, voluptate voluptatibus? Autem, delectus dolor
                dolore laborum maiores maxime numquam perferendis quasi qui repellat? A adipisci aliquid consequatur
                dignissimos esse est, exercitationem facere harum id illo ipsa iusto, labore maiores minima natus
                nesciunt non placeat quaerat quia quisquam quos rem sed temporibus? Animi assumenda consectetur,
                corporis dicta eius facilis fugit hic inventore itaque molestias necessitatibus nobis quibusdam, ratione
                reiciendis sunt suscipit tenetur unde velit vero, voluptatibus! A ccusamus autem delectus esse ex id
                incidunt ipsa, libero quod unde veritatis. A ab atque debitis dicta dolores enim esse eum fuga, fugiat
                iusto mollitia natus perferendis, porro quas, quos sequi velit vitae! In magnam nisi non optio! Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. At, autem dignissimos ea et fugiat illum in itaque
                neque nisi nulla optio, quam velit voluptatem.
              </div>
            </div>
            <Button
              // size="small"
              // color="black"
              className={s.backButton}
              onClick={() => {
                navigate('/');
              }}
              startIcon={<ArrowBackIcon />}
            >
              Back to homepage
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesDetails;
