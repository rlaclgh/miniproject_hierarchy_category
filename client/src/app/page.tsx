"use client";
import Categories from "@/components/categories";
import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header renderCenter={() => <div>메인 페이지</div>} />

      <Categories />
    </div>
  );
}
