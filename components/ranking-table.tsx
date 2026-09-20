import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { providers } from "@/lib/providers";
import { routes } from "@/lib/site";

export function RankingTable({
  linked = true,
}: {
  linked?: boolean;
}) {
  return (
    <div className="overflow-x-auto rounded-xl ring-1 ring-foreground/10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-14">Rank</TableHead>
            <TableHead>Provider</TableHead>
            <TableHead className="min-w-40">Best for</TableHead>
            <TableHead>Crypto rail</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {providers.map((provider) => (
            <TableRow key={provider.slug}>
              <TableCell className="font-heading font-medium">
                {provider.rank}
              </TableCell>
              <TableCell>
                {linked ? (
                  <Link
                    href={`${routes.ranking}#${provider.slug}`}
                    className="font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    {provider.name}
                  </Link>
                ) : (
                  <a
                    href={`#${provider.slug}`}
                    className="font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    {provider.name}
                  </a>
                )}
              </TableCell>
              <TableCell className="text-muted-foreground whitespace-normal">
                {provider.bestFor}
              </TableCell>
              <TableCell className="whitespace-normal">
                <Badge variant="secondary">{provider.coins.split(" (")[0]}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
