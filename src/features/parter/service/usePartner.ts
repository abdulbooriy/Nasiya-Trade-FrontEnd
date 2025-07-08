import { partner } from "@/shared/keys";
import { api } from "@/shared/lib/axios";
import type { IParams } from "@/shared/types";
import {
  useQuery,
  useMutation,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";

export const usePartner = () => {
  const queryClient = useQueryClient();

  const getPartners = (params: IParams) =>
    useQuery({
      queryKey: [partner, params],
      queryFn: () => api.get("/partner", { params }).then((res) => res.data),
      placeholderData: keepPreviousData,
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
    });

  const getPartner = (id: string) =>
    useQuery({
      queryKey: [partner, id],
      queryFn: () => api.get(`/partner/${id}`).then((res) => res.data),
    });

  const createPartner = useMutation({
    mutationFn: (body: any) =>
      api.post("/partner", body).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [partner] });
    },
  });

  const updatePartner = useMutation({
    mutationFn: ({ body, id }: { body: any; id: string }) =>
      api.patch(`/partner/${id}`, body).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [partner] });
    },
  });

  return { getPartners, createPartner, updatePartner, getPartner };
};
