import {
  MutationFunction,
  UseMutationOptions,
  useQuery,
  useMutation,
} from "@tanstack/react-query";
import Axios, { CustomError } from ".";
import { AxiosError, AxiosResponse } from "axios";

/**
 * 카테고리 불러오기
 */

interface GetCategoriesResponse {
  id: number;
  parentId: number;
  step: number;

  name: string;
  children: GetCategoriesResponse[];
}

const getCategories = async () => {
  const data = await Axios({
    method: "get",
    url: `/category`,
  });

  return data.data;
};

export const useGetCategories = () => {
  return useQuery<GetCategoriesResponse[]>({
    queryKey: ["category"],
    queryFn: getCategories,
  });
};

/**
 * 카테고리 생성
 */

interface CreateCategoryProps {
  name: string;
  parentId: number | null;
}

interface CreateCategoryResponse {}

const createCategory: MutationFunction<
  AxiosResponse<CreateCategoryResponse>,
  CreateCategoryProps
> = (props) => {
  const { name, parentId } = props;
  return Axios({
    method: "post",
    url: "/category",
    data: {
      parentId,
      name,
    },
  });
};

export const useCreateCategory = (
  options?: UseMutationOptions<
    AxiosResponse<CreateCategoryResponse>,
    AxiosError<CustomError>,
    CreateCategoryProps
  >
) => {
  return useMutation({
    mutationFn: createCategory,
    ...options,
  });
};
