"use server";
export async function submitForm(values: any) {
  console.log(values);

  await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: "Muhammad",
      lastName: "Ovi",
      age: 250,
      /* other user data */
    }),
  })
    .then((res) => res.json())
    .then(console.log);
}
