export type FieldType = {
  phone?: string;
  password?: string;
};

export type PartnerCreateField = {
  fullName: string;
  address: string;
  phone_primary: string;
  phone_secondary: string;
  role: string;
};

export type PaymentField = {
  comment?: string;
  amaunt?: string;
};

export interface IParams {
  page?: string;
  limit?: string;
  search?: string;
  role?: string;
  isActive?: string;
  isArchive?: boolean;
  order?: "asc" | "desc";
}
