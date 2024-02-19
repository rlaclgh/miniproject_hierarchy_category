"use client";

const ProjectDescription = () => {
  return (
    <div className="flex items-center h-full flex-col">
      <div className="w-120">
        <div className="text-5xl mb-10 mt-10">
          miniproject_hierarchy_category
        </div>
        <div className="text-2xl my-2">1. 프로젝트 설명</div>
        <div className="text-xl my-2">
          1.1 category table을 계층으로 관리합니다.
        </div>
        <div className="text-xl my-2">
          1.2 계층으로 관리해 depth의 제한이 없습니다.
        </div>
        <div className="text-xl my-2">
          1.3 재귀를 사용해 category를 불러옵니다.
        </div>

        <img src="miniproject_hierarchy_category.png" width={400} />
      </div>
    </div>
  );
};

export default ProjectDescription;
