import { useEffect, useState } from 'react';
import { Button, Col, Form, Input, Row, Switch, Image, Typography, Divider } from 'antd';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Controller, set, useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router';
import { useAtom } from 'jotai';
import { adminPageTitleAtom } from '../store/atoms';

const { Title, Text } = Typography;

export default function EditOrchid() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();
  const [api, setAPI] = useState({});
  const [adminPageTitle, setAdminPageTitle] = useAtom(adminPageTitleAtom);

  const { register, handleSubmit, formState: { errors }, control, setValue } = useForm();

  useEffect(() => {
    axios.get(`${baseUrl}/${id}`)
      .then((response) => {
        const data = response.data;
        setAPI(data);
        setValue('orchidName', data.orchidName);
        setValue('image', data.image);
        setValue('isNatural', data.isNatural);
        setAdminPageTitle(data.orchidName);
        console.log(data.orchidName);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        toast.error('Failed to fetch orchid data.');
      });
  }, [id, setValue, baseUrl]);

  const onSubmit = (data) => {
    axios.put(`${baseUrl}/${id}`, data, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => {
        toast.success('Orchid updated successfully!');
        setTimeout(() => {
          navigate('/admin/products');
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
        toast.error('Failed to update orchid.');
      });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-white rounded shadow-sm">
      <Toaster />
      <Divider />

      <Row gutter={[32, 32]}>
        <Col xs={24} md={16}>
          <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
            <Form.Item label="Orchid Name" required>
              <Controller
                name="orchidName"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field }) => <Input {...field} placeholder="Enter orchid name" />}
              />
              {errors.orchidName && <Text type="warning">{errors.orchidName.message}</Text>}
            </Form.Item>

            <Form.Item label="Image URL" required>
              <Controller
                name="image"
                control={control}
                rules={{
                  required: "Image URL is required",
                  pattern: {
                    value: /(https?:\/\/[^\s]+)/i,
                    message: "Enter a valid image URL"
                  }
                }}
                render={({ field }) => <Input {...field} placeholder="https://example.com/orchid.jpg" />}
              />
              {errors.image && <Text type="warning">{errors.image.message}</Text>}
            </Form.Item>

            <Form.Item label="Is it natural?">
              <Controller
                name="isNatural"
                control={control}
                render={({ field }) => (
                  <Switch
                    checked={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </Form.Item>

            <Form.Item>
              <div className="flex gap-3">
                <Button type="primary" htmlType="submit">
                  Save Changes
                </Button>
                <Button onClick={() => navigate(-1)} type="default">
                  Cancel
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Col>

        <Col xs={24} md={8}>
          <div className="flex justify-center items-center h-full">
            {api.image ? (
              <Image
                src={api.image}
                alt={api.orchidName}
                width={240}
                className="rounded shadow"
              />
            ) : (
              <Text type="secondary">No image available</Text>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}
