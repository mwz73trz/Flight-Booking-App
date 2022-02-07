const BASE_URL = "http://localhost:8000/api/";

const tryCatchFetch = async (url, init) => {
  try {
    const response = await fetch(url, init);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(
        `Bad response: ${response.status} ${response.statusText}`
      );
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};

const fetchFlights = async () => {
  const url = `${BASE_URL}flights/`;
  return await tryCatchFetch(url);
};

const fetchPassengers = async () => {
  const url = `${BASE_URL}passengers/`;
  return await tryCatchFetch(url);
};

const myExports = {
  fetchFlights,
  fetchPassengers,
};

export default myExports;
