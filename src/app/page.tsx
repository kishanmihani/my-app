import Image from "next/image";
import { columns ,columnDefwithGrouping} from "./column";
import { DataTable } from "@/components/ui/data-table";
import getUsers from "./services/index";
export default async function Home() {
  const data = await getUsers();
  return (
    <section  >
      <div className="container">
     
      <main className="flex min-h-screen flex-col items-center justify-between">
      <DataTable columns={columns} data={data} />
    </main>
    </div>
    </section>
  );
}
