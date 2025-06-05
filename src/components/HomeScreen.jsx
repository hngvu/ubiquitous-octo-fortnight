import { useEffect, useState } from 'react';
import { Card, Col, Row, Button } from 'antd';
import axios from 'axios';
import { Link } from 'react-router';

const { Meta } = Card;

export default function HomeScreen() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [api, setAPI] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(baseUrl);
      const sortedData = response.data.sort(
        (a, b) => parseInt(b.empId) - parseInt(a.empId)
      );
      setAPI(sortedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container py-4">
      <Row gutter={[24, 24]}>
        {api.map((item) => (
          <Col xs={24} sm={12} md={8} key={item.id}>
            <Card
              hoverable
              cover={
                <img
                  alt={item.orchidName}
                  src={item.image}
                  style={{ height: 350, objectFit: 'cover' }}
                />
              }
              actions={[
                <Link key="detail" to={`/detail/${item.id}`}>
                  <Button type="primary">Detail</Button>
                </Link>,
              ]}
            >
              <Meta title={item.orchidName} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
