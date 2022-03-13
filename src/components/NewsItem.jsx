import React from 'react';
import Moment from 'react-moment';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Truncate from 'react-truncate';
import { connect } from 'react-redux';
import DefaultNews from './default-news.jpg';
import { useHistory } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import './NewsItem.css'

const NewsItem = ({
  item,
}) => {

  const history = useHistory()
  const ArticlePage = () => {
    history.push(`/${item.publishedAt}`)
  }

  return (
    <Col xs={12} sm={6} md={6} lg={4} xl={4} className='my-2'>
      <Card>
        {item.urlToImage ? (
          <div
            className='urlImage'
            style={{ backgroundImage: `url(${item.urlToImage})` }}
          />
        ) : (
          <div
            className='urlImage'
            style={{ backgroundImage: `url(${DefaultNews})` }}
          />
        )}
        <Card.Body>
          <Card.Title>
            <Truncate lines={2} ellipsis={<span>...</span>}>
              {item.title}
            </Truncate>
          </Card.Title>
          <Card.Text>
            <Truncate lines={4} ellipsis={<span>...</span>}>
              {item.description}
            </Truncate>
          </Card.Text>
          <Button data-testid='NewsItem-1' className="btn-dark" onClick={ArticlePage}>
            Read full article <FaLongArrowAltRight />
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default connect()(NewsItem);
