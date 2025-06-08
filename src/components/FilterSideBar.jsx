import React from "react";
import { Checkbox, Divider, Radio, Typography, Slider } from "antd";

const { Title } = Typography;

const FilterSideBar = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-64">
      <Title level={4} style={{ marginBottom: 16 }}>Filter Orchids</Title>

      {/* Category Filter */}
      <div className="mb-6">
        <Title level={5}>Category</Title>
        <Checkbox.Group
          options={["Phalaenopsis", "Dendrobium", "Cattleya", "Vanda"]}
          defaultValue={[]}
        />
      </div>

      <Divider />

      {/* Is Natural Filter */}
      <div className="mb-6">
        <Title level={5}>Type</Title>
        <Radio.Group defaultValue="any" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Radio value="any">Any</Radio>
          <Radio value="natural">Natural</Radio>
          <Radio value="artificial">Artificial</Radio>
        </Radio.Group>
      </div>

      <Divider />

      {/* Price Filter */}
      <div className="mb-4">
        <Title level={5}>Price Range</Title>
        <Slider
          range
          defaultValue={[20, 100]}
          min={0}
          max={200}
          tooltip={{ formatter: (val) => `$${val}` }}
        />
      </div>
    </div>
  );
};

export default FilterSideBar;
