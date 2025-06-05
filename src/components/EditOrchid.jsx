import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Input, Row, Switch, Image } from 'antd';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router';

export default function EditOrchid() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();
  const [api, setAPI] = useState({});
  
  const { register, handleSubmit, formState: { errors }, control, setValue } = useForm();

  useEffect(() => {
    axios.get(`${baseUrl}/${id}`)
      .then((response) => {
        setAPI(response.data);
        setValue('orchidName', response.data.orchidName);
        setValue('image', response.data.image);
        setValue('isNatural', response.data.isNatural);
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
        toast.success('Orchid edited successfully!');
        setTimeout(() => {
          navigate('/');
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
        toast.error('Failed to edit orchid.');
      });
  };

  return (
    <div className="container py-4">
      <Toaster />
      <Row gutter={[24, 24]}>
        <Col span={16}>
          <p className="lead text-primary">Edit the orchid: {api.orchidName}</p>
          <hr />
          <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
            <Form.Item label="Name" required>
              <Controller
                name="orchidName"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <Input {...field} />}
              />
              {errors.orchidName && <p className="text-warning">Name is required</p>}
            </Form.Item>

            <Form.Item label="Image URL" required>
              <Controller
                name="image"
                control={control}
                rules={{
                  required: true,
                  pattern: {
                    value: /(https?:\/\/[^\s]+)/i,
                    message: "Image must be a valid URL"
                  }
                }}
                render={({ field }) => <Input {...field} />}
              />
              {errors.image && <p className="text-warning">{errors.image.message}</p>}
            </Form.Item>

            <Form.Item label="Natural">
              <Controller
                name="isNatural"
                control={control}
                render={({ field }) => (
                  <Switch
                    checked={field.value}
                    onChange={(val) => field.onChange(val)}
                  />
                )}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </Col>

        <Col span={8}>
          {api.image && (
            <Image
              src={api.image}
              width={240}
              className="shadow-lg p-3 mb-5 bg-body-tertiary rounded"
              alt={api.orchidName}
            />
          )}
        </Col>
      </Row>
    </div>
  );
}
