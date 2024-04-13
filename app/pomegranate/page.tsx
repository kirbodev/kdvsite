import { Button } from "@/components/ui/button";
import { IconMoodPuzzled } from "@tabler/icons-react";
import Link from "next/link";

export default function Pomegranate() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <IconMoodPuzzled size={128} />
      <h1 className="mt-4 text-3xl font-bold">
        We&apos;re not sure why you&apos;re here but this page is still under
        construction.
      </h1>
      <em className="my-4">Maybe, these will interest you?</em>
      <div className="flex gap-4">
        <Button variant="destructive" asChild>
          <Link href="https://status.kdv.one/">Status</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/pomegranate/privacy">Privacy</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/">Home</Link>
        </Button>
      </div>
    </div>
  );
}
