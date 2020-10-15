
export const fetchData = async () => {
  const endpoint = 'http://localhost:5555/data';
  const data = await (await fetch(endpoint)).json();

  return data;
}