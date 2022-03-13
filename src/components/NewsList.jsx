import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import NewsItem from './NewsItem';

const NewsList = ({ newsItems, loading, newsItemsTotal, theme, loadMore }) => {
  return (
    <Container className='news-list'>

      {newsItemsTotal !== null && (
        <Row className='justify-content-md-center mb-4'>
          {newsItems.map((item, i) => (
            <NewsItem  key={i} item={item} />
          ))}
        </Row>
      )}

      {loading && (
        <Row className='justify-content-md-center py-4'>
          <Col  className='text-center'>
            <Spinner animation='border' size='lg' />
          </Col>
        </Row>
      )}

      {newsItems.length < newsItemsTotal && !loading && (
        <Row className='justify-content-md-center py-2'>
          <Col xs={12} sm={12} className='text-center'>
            <Button className='py-2' variant={theme} onClick={loadMore}>
              Load More 
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default NewsList;
