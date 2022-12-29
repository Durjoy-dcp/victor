export function DeleteTask(id: string, refetch: any) {
  fetch(`https://victor-server-2.vercel.app/delete/${id}`, { method: "DELETE" })
    .then((res) => res.json())
    .then((data) => {
      if (data.deletedCount > 0) {
        console.log(data);
        refetch();
      }
    });
}
