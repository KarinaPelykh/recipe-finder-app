"use client";

import { Button } from "@/ui/Button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="container pb-10 tablet:pb-12 desktop:pb-14">
      <div className="mx-auto">
        <h2 className="mb-10">Something went wrong!</h2>
        <Button type="button" onClick={() => router.push("/")}>
          to Home
        </Button>
      </div>
    </section>
  );
}
