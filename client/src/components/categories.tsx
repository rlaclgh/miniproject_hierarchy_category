import { useCreateCategory, useGetCategories } from "@/query/category";
import Category from "./category";
import PlusSVG from "@/public/plus.svg";
import MinusSVG from "@/public/minus.svg";
import { useState } from "react";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

const Categories = () => {
  const { data: categories, isLoading } = useGetCategories();
  const [isCreating, setIsCreating] = useState(false);

  const [newName, setNewName] = useState("");

  const queryClient = useQueryClient();

  const { mutate: createCategory } = useCreateCategory({
    onSuccess: () => {
      toast.success("카테고리를 생성했습니다.");
      queryClient.invalidateQueries({ queryKey: ["category"] });
      setNewName("");
      setIsCreating(false);
    },
  });

  if (isLoading) return <>Loading....</>;

  return (
    <div className="p-4">
      <div className="flex gap-2 items-center">
        <div>root</div>
        <div
          onClick={() => {
            setIsCreating((prev) => !prev);
          }}
        >
          {!isCreating && <PlusSVG width={20} height={20} />}
          {isCreating && <MinusSVG width={20} height={20} />}
        </div>
      </div>
      {isCreating && (
        <div className="flex gap-2 items-center">
          <div>{">".repeat(1)}</div>
          <input
            className="border-black border h-6 pl-1"
            value={newName}
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          />
          <div
            onClick={() => {
              createCategory({
                parentId: null,
                name: newName,
              });
            }}
          >
            생성
          </div>
        </div>
      )}

      {categories?.map((category) => {
        return <Category {...category} key={category.id} />;
      })}
    </div>
  );
};

export default Categories;
