import React from "react";
import TableView from "./table-view/TableView";
import { useParamsHook } from "@/shared/hooks/useParamsHook";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { Pagination } from "antd";
import CardView from "./card-view/CardView";

interface Props {
  data: undefined | any;
  loading: boolean;
}

const PartnerWrapper: React.FC<Props> = ({ data, loading }) => {
  const { getParam, setParam } = useParamsHook();
  const page = getParam("page") || "1";
  const matches = useMediaQuery("768");

  

  return (
    <>
      {matches ? (
        <CardView data={data?.partners} loading={loading} />
      ) : (
        <TableView data={data?.partners} loading={loading} />
      )}
      <div className="mt-6 flex justify-end">
        <Pagination
          current={Number(page)}
          onChange={(value) => setParam("page", value.toString())}
          pageSize={10}
          total={data?.total}
        />
      </div>
    </>
  );
};

export default React.memo(PartnerWrapper);
