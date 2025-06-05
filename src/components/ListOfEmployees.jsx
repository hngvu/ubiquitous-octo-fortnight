import { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Input, Image, Badge, Row, Col, message, Switch } from 'antd';
import axios from 'axios';
import { useForm, Controller } from "react-hook-form";

export default function ListOfEmployees() {
  const baseUrl = import.meta.env.VITE_API_URL_EMPL;
  const [api, setAPI] = useState([]);
  const [show, setShow] = useState(false);
  const { register, handleSubmit, formState: { errors }, control, reset } = useForm();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(baseUrl);
      const sortedData = response.data.sort((a, b) => parseInt(b.empId) - parseInt(a.empId));
      setAPI(sortedData);
    } catch (error) {
      console.error('Error fetching data:', error);
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
      message.success("Employee added successfully!");
    } catch (error) {
      console.error(error.message);
      message.error("Employee addition failed!");
    }
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'url',
      key: 'url',
      render: (url) => <Image width={100} src={url} />
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      render: (gender) => gender
        ? <Badge color="blue" text="Male" />
        : <Badge color="pink" text="Female" />
    },
    {
      title: 'Designation',
      dataIndex: 'designation',
      key: 'designation'
    }
  ];

  return (
    <div className="container py-4">
      <Row justify="start" className="mb-3">
        <Col>
          <Button type="primary" onClick={() => setShow(true)}>
            + Add New Employee
          </Button>
        </Col>
      </Row>

      <Table dataSource={api} columns={columns} rowKey="id" />

      <Modal
        title="New Employee"
        open={show}
        onCancel={() => setShow(false)}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          <Form.Item label="Name" required>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Input {...field} />}
            />
            {errors.name && <p className="text-warning">Name is required</p>}
          </Form.Item>

          <Form.Item label="Image URL" required>
            <Controller
              name="url"
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))/i,
                  message: 'Enter a valid image URL'
                }
              }}
              render={({ field }) => <Input {...field} />}
            />
            {errors.url && <p className="text-warning">{errors.url.message}</p>}
          </Form.Item>

          <Form.Item label="Designation" required>
            <Controller
              name="designation"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Input.TextArea rows={3} {...field} />}
            />
            {errors.designation && <p className="text-warning">Designation is required</p>}
          </Form.Item>

          <Form.Item label="Gender (Switch = Male)">
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <Switch
                  checked={field.value}
                  onChange={field.onChange}
                  checkedChildren="Male"
                  unCheckedChildren="Female"
                />
              )}
            />
          </Form.Item>

          <Form.Item>
            <Row justify="end" gutter={8}>
              <Col>
                <Button onClick={() => setShow(false)}>
                  Cancel
                </Button>
              </Col>
              <Col>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
