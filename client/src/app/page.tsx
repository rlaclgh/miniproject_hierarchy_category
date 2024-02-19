"use client";
import Categories from "@/components/categories";
import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header renderCenter={() => <div>카테고리 데이터</div>} />

      <Categories />
    </div>
  );
}
