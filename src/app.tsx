import { FileDown, MoreHorizontal, Plus, Search } from "lucide-react";
import { Header } from "./components/header";
import { Tabs } from "./components/tabs";
import { Button } from "./components/ui/button";
import { Control, Input } from "./components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table";
import { Pagination } from "./components/pagination";

export function App() {

  return (
    <div className="py-10 space-y-8">
      <section>
        <Header />
        <Tabs />
      </section>
      <main className="max-w-6xl mx-auto space-y-5">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold">Tags</h1>
          <Button variant="primary">
            <Plus className="size-3" />
            Create new
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <Input variant="filter">
            <Search className="size-3" />
            <Control placeholder="Search tags" />
          </Input>
          <Button>
            <FileDown className="size-3" />
            Export
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Tag</TableHead>
              <TableHead>Amount of videos</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              Array.from({length:15}).map((item, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell></TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-medium">React</span>
                        <span className="text-xs text-zinc-500">OI43OI53I4O-K3KJ4H5-34JH5-32KJ4HK2J3</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-zinc-300">
                      25 vídeo(s)
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="icon">
                        <MoreHorizontal className="size-3"></MoreHorizontal>
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
        <Pagination pages={0} items={0} page={0} />
      </main>
    </div>
  )
}

