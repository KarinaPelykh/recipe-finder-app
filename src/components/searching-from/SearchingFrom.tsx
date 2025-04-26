"use client";
import { Button } from "@/ui/Button";
import { CuisineSelector } from "../cuisine -selector/CuisineSelector";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const SearchingForm = () => {
  const router = useRouter();

  const [query, setQuery] = useState<string>("");

  const [option, setOption] = useState<string>("");

  const [time, setTime] = useState<string>("");

  const handelSearch = () => {
    const params = `query=${query}&option=${option}&time=${time}`;

    const searchParams = new URLSearchParams(params);

    router.push(`/recipes?${searchParams}`);
  };

  const IsFormEmpty = !query.trim() && !option && !time;

  return (
    <form className="mx-auto  py-10 px-5 bg-amber-400 rounded-3xl flex flex-col gap-7  max-w-100 h-100">
      <label className="">
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="w-full placeholder:text-black  text-black h-12 px-5 py-2.5 outline-none border-white border-2 rounded-xl"
          placeholder="dish"
          value={query}
        />
      </label>
      <label>
        <CuisineSelector setOption={setOption} />
      </label>
      <label className="mb-auto">
        <input
          onChange={(e) => setTime(e.target.value)}
          type="number"
          className="w-full placeholder:text-black  text-black h-12 px-5 py-2.5 outline-none border-white border-2 rounded-xl"
          placeholder="Preparation time"
          min={1}
          value={time}
        />
      </label>
      <Button type="button" onClick={handelSearch} IsFormEmpty={IsFormEmpty}>
        Next
      </Button>
    </form>
  );
};
