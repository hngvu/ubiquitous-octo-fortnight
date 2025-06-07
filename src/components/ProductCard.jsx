import { Card } from "antd";
import { Link } from "react-router";

const ProductCard = ({ id, name, price, image }) => {
  return (
    <Card
      hoverable
      cover={
        <Link to={`/orchids/${id}`}>
          <img
            alt={name}
            src={image}
            className="w-full h-66 object-contain bg-[#f6f6f6] rounded-lg"
          />
        </Link>
      }
    >
      <Card.Meta
        title={name}
        description={
          <>
            <div>
              {price == null ? (
                <span style={{ color: "red" }}>Price on request</span>
              ) : (
                <span style={{ color: "green" }}>${price}</span>
              )}
            </div>
          </>
        }
      />
    </Card>
  );
};

export default ProductCard;