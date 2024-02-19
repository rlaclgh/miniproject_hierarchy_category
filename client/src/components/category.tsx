import PlusSVG from "@/public/plus.svg";
import MinusSVG from "@/public/minus.svg";
import { useState } from "react";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateCategory } from "@/query/category";

interface CategoryProps {
  id: number;
  parentId: number;
  step: number;
  name: string;
  children: CategoryProps[];
}
const Category = (props: CategoryProps) => {
  const { id, parentId, name, step, children } = props;

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

  return (
    <>
      <div className="flex gap-2 items-center">
        <div>{">".repeat(step)}</div>
        <div>{name}</div>
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
          <div>{">".repeat(step + 1)}</div>
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
                parentId: id,
                name: newName,
              });
            }}
          >
            생성
          </div>
        </div>
      )}

      {children.map((category) => {
        return <Category {...category} key={category.id} />;
      })}
    </>
  );
};

export default Category;
