import React from 'react';
import { useParams } from 'react-router';
import { Breadcrumb, Card, Tag, Image, Row, Col } from 'antd';
import axios from 'axios';

export default function DetailOrchid() {
  const [orchid, setOrchid] = React.useState({});
  const { id } = useParams();
  const baseUrl = import.meta.env.VITE_API_URL;

  React.useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = () => {
    axios.get(`${baseUrl}/${id}`)
      .then(response => {
        setOrchid(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="container py-5">
      <Row gutter={[24, 24]}>
        <Col xs={24} md={16}>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item>{orchid.orchidName || 'Loading...'}</Breadcrumb.Item>
          </Breadcrumb>

          <Tag color="blue" className="my-3">
            {orchid.orchidName || 'Loading...'}
          </Tag>

          <Card title="Description" className="mt-3">
            <p className="text-primary fs-5">{orchid.description || 'Loading...'}</p>
            <hr />
            {orchid.isNatural ? (
              <Tag color="green">This Orchid is a natural product</Tag>
            ) : (
              <Tag color="orange">This Orchid is an industrial product</Tag>
            )}
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <div className="badge-container">
            <Tag color="purple" className="badge-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                {/* Your SVG path remains the same */}
                <path
                  fill="currentColor"
                  d="..." // (same path as before)
                />
              </svg>
            </Tag>
            <Image
              src={orchid.image}
              alt={orchid.orchidName || 'Loading...'}
              className="my-3"
              width="100%"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
