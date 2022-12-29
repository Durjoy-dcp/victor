export function DeleteTask(id: string, refetch: any) {
  fetch(`http://localhost:5000/delete/${id}`, { method: "DELETE" })
    .then((res) => res.json())
    .then((data) => {
      if (data.deletedCount > 0) {
        console.log(data);
        refetch();
      }
    });
}
