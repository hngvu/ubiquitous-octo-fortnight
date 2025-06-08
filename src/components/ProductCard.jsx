import { Card } from "antd";
import { Link } from "react-router";

const ProductCard = ({ id, name, price, image }) => {
  return (
    <Link to={`/orchids/${id}`} className="">
      <Card
        hoverable
        className="h-3/5"
        cover={
          <img
            alt={name}
            src={image}
            className="w-full h-66 object-cover bg-[#f6f6f6] rounded-lg"
          />
        }
      >
        <Card.Meta
          className="text-center"
          title={name}
          description={
            <>
              {/* <div>
                {price == null ? (
                  <span style={{ color: "red" }}>Price on request</span>
                ) : (
                  <span style={{ color: "green" }}>${price}</span>
                )}
              </div> */}
              <span className="text-green-500 text-[Lora]">$100.00</span>
            </>
          }
        />
      </Card>
    </Link>
  );
};

export default ProductCard;
