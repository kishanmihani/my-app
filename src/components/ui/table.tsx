export const Table = ({ children }: { children: React.ReactNode }) => (
    <table className="table">{children}</table>
  );
  export const TableHeader = ({ children }: { children: React.ReactNode }) => (
    <thead>{children}</thead>
  );
  
  export const TableRow = ({ children }: { children: React.ReactNode }) => (
    <tr>{children}</tr>
  );
  
  export const TableCell = ({ children }: { children: React.ReactNode }) => (
    <td>{children}</td>
  );
  export const TableHead = ({ children }: { children: React.ReactNode }) => (
    <th>{children}</th>
  );export const TableBody = ({ children }: { children: React.ReactNode }) => (
    <tbody>{children}</tbody>
  );