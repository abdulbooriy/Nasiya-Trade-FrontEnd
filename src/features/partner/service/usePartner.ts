import { api } from "@/shared/lib/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export interface IParams {
  page?: string;
  limit?: string;
  order?: string;
  search?: string;
  role: string;
}

export const usePartner = () => {
  const queryClient = useQueryClient();
  const key = "partner";

  const getPartners = (params: IParams) =>
    useQuery({
      queryKey: [key, params],
      queryFn: () => api.get("/partner", { params }).then((res) => res.data),
    });

  const createPartners = useMutation({
    mutationFn: (body: any) =>
      api.post("/partner", body).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    },
  });

  return { getPartners, createPartners };
};
