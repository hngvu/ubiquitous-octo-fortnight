import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Input, Switch, Image, message, Badge, Space } from 'antd';
import axios from 'axios';
import { Controller, useForm } from "react-hook-form";
import { Link } from 'react-router';

export default function ListOfOrchids() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [api, setAPI] = useState([]);
  const [show, setShow] = useState(false);
  const { register, handleSubmit, formState: { errors }, control, reset } = useForm();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(baseUrl);
      const sortedData = response.data.sort((a, b) => parseInt(b.id) - parseInt(a.id));
      setAPI(sortedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this orchid?")) return;
    try {
      await axios.delete(`${baseUrl}/${id}`);
      fetchData();
      message.success("Orchid deleted successfully!");
    } catch (error) {
      console.error(error.message);
      message.error("Failed to delete orchid.");
    }
  };

  const onSubmit = async (data) => {
    try {
      await axios.post(baseUrl, data, {
        headers: { 'Content-Type': 'application/json' }
      });
      setShow(false);
      fetchData();
      reset();
      message.success("Orchid added successfully!");
    } catch (error) {
      console.error(error.message);
      message.error("Failed to add orchid.");
    }
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (img) => <Image width={40} src={img} />
    },
    {
      title: 'Orchid Name',
      dataIndex: 'orchidName',
      key: 'orchidName'
    },
    {
      title: 'Original',
      dataIndex: 'isNatural',
      key: 'isNatural',
      render: (val) =>
        val
          ? <Badge color="green" text="Natural" />
          : <Badge color="gold" text="Industry" />
    },
    {
      title: (
        <Button type="primary" onClick={() => setShow(true)}>
          + Add Orchid
        </Button>
      ),
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/edit/${record.id}`}>
            <Button type="link">Edit</Button>
          </Link>
          <Button type="link" danger onClick={() => handleDelete(record.id)}>Delete</Button>
        </Space>
      )
    }
  ];

  return (
    <div className="container py-4">
      <Table dataSource={api} columns={columns} rowKey="id" pagination={{ pageSize: 8 }} />

      <Modal
        title="New Orchid"
        open={show}
        onCancel={() => setShow(false)}
        footer={null}
        destroyOnClose
      >
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          <Form.Item label="Orchid Name" required>
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
                  value: /https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg)/i,
                  message: 'Enter a valid image URL'
                }
              }}
              render={({ field }) => <Input {...field} />}
            />
            {errors.image && <p className="text-warning">{errors.image.message || 'Image is required'}</p>}
          </Form.Item>

          <Form.Item label="Natural Orchid?">
            <Controller
              name="isNatural"
              control={control}
              render={({ field }) => (
                <Switch checked={field.value} onChange={field.onChange} />
              )}
            />
          </Form.Item>

          <Form.Item>
            <Space style={{ float: 'right' }}>
              <Button onClick={() => setShow(false)}>Cancel</Button>
              <Button type="primary" htmlType="submit">Save</Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
