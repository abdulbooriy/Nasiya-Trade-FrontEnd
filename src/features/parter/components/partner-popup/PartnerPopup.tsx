import React from "react";
import { Button, Input, Modal, Form } from "antd";
import { PatternFormat } from "react-number-format";
import { usePartner } from "../../service/usePartner";
import useGetRole from "@/shared/hooks/useGetRole";
import type { PartnerCreateField } from "@/shared/types";

interface Props {
  isModalOpen: boolean;
  handleCancel: () => void;
  previousData?: any;
  user_role: string;
}

const PartnerPopup: React.FC<Props> = ({
  handleCancel,
  isModalOpen,
  previousData,
  user_role,
}) => {
  const role = useGetRole();
  const { createPartner } = usePartner();
  const { isPending } = createPartner;

  const handleSubmit = (values: PartnerCreateField) => {
    values.role = role;
    const phone_secondary = values.phone_secondary?.replace(/\s/gi, "");

    const newPartner = {
      fullName: values.fullName,
      address: values.address,
      role: values.role,
      phones: [values.phone_primary?.replace(/\s/gi, "")],
    };

    if (phone_secondary) {
      newPartner.phones.push(phone_secondary);
    }

    createPartner.mutate(newPartner, {
      onSuccess: () => {
        handleCancel();
      },
    });
  };
  return (
    <>
      <Modal
        title={
          `${user_role === "SELLER" ? "Sotuvchi " : "Mijoz "}` +
          `${previousData ? "tahrirlash" : "qo'shish"}`
        }
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}>
        <Form
          name="basic"
          initialValues={previousData}
          onFinish={handleSubmit}
          autoComplete="off"
          layout="vertical">
          <Form.Item<PartnerCreateField>
            label="Ism va Familiya"
            name="fullName"
            rules={[
              { required: true, message: "Ism va Familiyangizni kiriting!" },
            ]}>
            <Input
              placeholder="Ism va Familiyangizni kiriting"
              style={{ height: "40px" }}
            />
          </Form.Item>

          <Form.Item<PartnerCreateField>
            label="Manzil"
            name="address"
            rules={[{ required: true, message: "Manzilingizni kiriting!" }]}>
            <Input
              style={{ height: "40px" }}
              placeholder="Manzilingizni kiriting"
            />
          </Form.Item>

          <Form.Item<PartnerCreateField>
            label="Asosiy telefon raqam"
            name="phone_primary"
            rules={[
              {
                required: true,
                message: "Asosiy telefon raqamingizni kiriting!",
              },
            ]}>
            <PatternFormat
              format="+998 ## ### ## ##"
              mask={" "}
              allowEmptyFormatting
              customInput={Input}
              style={{ height: "40px" }}
            />
          </Form.Item>

          <Form.Item<PartnerCreateField>
            label="Telefon raqam"
            name="phone_secondary"
            rules={[
              { required: false, message: "Please input your password!" },
            ]}>
            <PatternFormat
              format="+998 ## ### ## ##"
              mask={" "}
              allowEmptyFormatting
              customInput={Input}
              style={{ height: "40px" }}
            />
          </Form.Item>
          <Form.Item label={null}>
            <Button
              loading={isPending}
              className="w-full -mb-5"
              type="primary"
              htmlType="submit"
              style={{ height: "40px" }}>
              Qo'shish
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default PartnerPopup;
