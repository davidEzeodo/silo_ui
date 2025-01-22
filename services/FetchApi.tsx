type FetchAPIMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface FetchAPIOptions {
  method: FetchAPIMethod;
  url: string;
  headers?: Record<string, string>;
  body?: any;
  queryParams?: Record<string, string | number>;
  isFormData?: boolean;
}

async function fetchAPI<T>(options: FetchAPIOptions): Promise<T> {
  const { method, url, headers, body, queryParams, isFormData } = options;

  // Append query parameters to the URL if provided
  const queryString = queryParams
    ? `?${new URLSearchParams(queryParams as Record<string, string>)}`
    : "";

  const fetchHeaders = isFormData
    ? headers
    : {
      "Content-Type": "application/json",
      ...headers,
    }

  const fetchBody = isFormData ? body : body ? JSON.stringify(body) : undefined;

  const response = await fetch(url + queryString, {
    method,
    headers: fetchHeaders,
    body: fetchBody,
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(
        errorResponse.message || `Request failed with status ${response.status}`
    );
}
  return response.json() as Promise<T>;
}
export default fetchAPI;