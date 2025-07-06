import { api } from "@/shared/lib/axios";
import type { FieldType } from "@/shared/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useAuth = () => {
  const queryClient = useQueryClient();
  const key = "auth";

  const getMe = () =>
    useQuery({
      queryKey: [key],
      queryFn: () => api.get("/auth/me").then((res) => res.data),
    });

  const login = useMutation({
    mutationFn: (body: FieldType) =>
      api.post("/auth/login", body).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    },
  });

  return { login, getMe };
};
