import Link from "next/link";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-4 py-24 text-center">
      <p className="text-sm text-muted-foreground">404</p>
      <h1 className="mt-2 font-heading text-3xl font-semibold">
        That page is not on this ranking
      </h1>
      <p className="mt-3 text-muted-foreground">
        The comparison lives on a handful of URLs. Try the top 10 article or
        the hub.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Button nativeButton={false} render={<Link href={routes.home} />}>
          Go to rankings
        </Button>
        <Button
          variant="outline"
          nativeButton={false}
          render={<Link href={routes.ranking} />}
        >
          Top 10 article
        </Button>
      </div>
    </main>
  );
}
