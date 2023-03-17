export async function fetchBooks() {
  const response =  await fetch(
    ' https://books-api.nomadcoders.workers.dev/lists'
  );
  return await response.json()
}