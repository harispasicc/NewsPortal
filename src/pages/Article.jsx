import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { connect, useDispatch } from 'react-redux'
import { setTopNews, clearTopNews,getNews } from '../actions/news';
import { useHistory } from 'react-router-dom';

const Article = (news) => {
    const [articles, setArticles] = useState([])
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
      dispatch(getNews()).then((res) => {
      setArticles(res.articles)
      })
    }, [dispatch])

    const BackToHome = () => {
    history.push('/')
    }

  return (
    <Container>
      <Row className='justify-content-md-center my-5'>
        <Col sm={10}>
            {articles.map((post,i) =>  {
                if (post.publishedAt === news.match.params.newsItemPublishedAt) {     
                    return <ListGroup  key={i} as="ul">
                        <ListGroup.Item as="li" className="list-group-item list-group-item-secondary">
                        <b >Source :</b> {post.source.name}
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <b>Title :</b> {post.title}
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <b> Author :</b> {post.author}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>Description :</b> {post.description}
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <b>Content :</b> {post.content} 
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <b>Published at Date :</b> {post.publishedAt}
                      </ListGroup.Item>
                      </ListGroup>
                } 
                else{return null}})} 
        </Col>
      </Row>
      <Row className='justify-content-md-end py-4'>
          <Col xs lg='8'>
            <Button data-testid='Article-1' className="btn-dark" onClick={BackToHome}> Back To Home </Button>
          </Col>
        </Row>
    </Container>
  );
};
const mapStateToProps = state => ({
  news: state.news
});

export default connect(
  mapStateToProps,
  { setTopNews, clearTopNews }
)(Article);

