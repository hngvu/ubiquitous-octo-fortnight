import React from "react";
import { useParams } from "react-router";
import {
  Breadcrumb,
  Tag,
  Image,
  Row,
  Col,
  Typography,
  Space,
} from "antd";
import axios from "axios";
import GiftIcon from "../icons/GiftIcon"; // Assuming this path is correct
import { useCart } from "../hooks/useCart";

const { Title, Paragraph, Text } = Typography;

export default function ProductDetail() {
  const [orchid, setOrchid] = React.useState({});
  const { id } = useParams();
  const baseUrl = import.meta.env.VITE_API_URL;
  const { addToCart } = useCart();

  React.useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = () => {
    axios
      .get(`${baseUrl}/${id}`)
      .then((response) => {
        setOrchid(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Optionally, set an error state or display a message to the user
      });
  };

  const handleAddToCart = () => {
    addToCart({ ...orchid, price: 100 });
    console.log("Added to cart:", orchid);
  };

  const handleBuyNow = () => {
    addToCart({ ...orchid, price: 100 });
    console.log("Buying now:", orchid);
  };

  return (
    <div className="container py-5">
      <Breadcrumb className="mb-4">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/orchids">Orchids</Breadcrumb.Item>
        <Breadcrumb.Item>{orchid.orchidName || "Loading..."}</Breadcrumb.Item>
      </Breadcrumb>

      <Row gutter={[32, 32]} align="middle">
        <Col xs={24} md={12}>
          <div className="badge-container" style={{ position: "relative" }}>
            <Tag
              color="purple"
              style={{ position: "absolute", top: 10, right: 10, zIndex: 1 }}
            >
              <GiftIcon className="w-6 h-6" />
            </Tag>
            <Image
              src={orchid.image}
              alt={orchid.orchidName || "Loading..."}
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </div>
        </Col>

        <Col xs={24} md={12} style={{ textAlign: "center",  }}>
          <Space direction="vertical" size="large" style={{ marginBottom: "20px" }}>
          <Title level={1} style={{ fontFamily: "Playfair Display", fontWeight: "lighter" }}>{orchid.orchidName || "Loading..."}</Title>
          <Title level={4} style={{ color: "#18230F", fontFamily: "Lora" }}>
              $100.00
          </Title>

          <div className="flex justify-center gap-4">
            <div
            className="cursor-pointer min-w-60
              bg-white border-2 border-[#18230F] text-[#18230F] font-bold py-3 px-6 rounded-lg shadow-md
              hover:bg-gray-100 hover:border-black hover:shadow-lg
              transition-all duration-150 ease-in-out
            "
            onClick={handleAddToCart}
          >
            Add to Cart
          </div>
          <div
            className="cursor-pointer min-w-60
              bg-[#18230F] text-[#ffd700] font-bold py-3 px-6 rounded-lg shadow-lg
              hover:bg-black hover:text-[#ffe066] hover:shadow-xl
              transition-all duration-150 ease-in-out
            "
            onClick={handleBuyNow}
          >
            Buy Now
          </div>
          </div>
          </Space>
        </Col>
        
      </Row>
      <Space direction="horizontal" size="large" className="mt-3">
            <Tag color="blue" className="my-2" style={{ fontFamily: "Playfair Display" }}>
            {orchid.categoryName || "Category Name"}{" "}
          </Tag>


            {orchid.isNatural ? (
              <Tag color="green">This Orchid is a natural product</Tag>
            ) : (
              <Tag color="orange">This Orchid is an industrial product</Tag>
            )}       
          </Space>
      <Paragraph className="mt-3">
            <Text strong>Description:</Text>{" "}
            {orchid.description || "Loading description..."}
          </Paragraph>
    </div>
  );
}
