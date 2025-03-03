import Cookies from "js-cookie";

//async function
export async function csrfFetch(url, options = {}) {
  //set options.method to 'GET' if there is no method
  options.method = options.method || "GET";
  //set options.headers to an empty object if there is no headers
  options.headers = options.headers || {};
  
  // Always include credentials
  options.credentials = 'include';

  // Log request details
  console.log(`csrfFetch - ${options.method} request to ${url}`);
  console.log("Request options:", { ...options, body: options.body ? "BODY_DATA" : undefined });
  
  //if the options.method is not 'GET', then 'Content-Type header is set to
  //"application/json", and 'XSRF-TOKEN header value is set to "XSRF-TOKEN" cookie
  if (options.method.toUpperCase() !== "GET") {
    options.headers["Content-Type"] =
      options.headers["Content-Type"] || "application/json";
    
    const csrfToken = Cookies.get("XSRF-TOKEN");
    options.headers["XSRF-Token"] = csrfToken;
    
    console.log("CSRF Token:", csrfToken);
  }

  //call the default window's fetch with url and the options passed in
  try {
    console.log("Sending fetch request...");
    const res = await window.fetch(url, options);
    console.log(`Response received: ${res.status} ${res.statusText}`);
    
    //if the response status code is 400 or above, throw an error w/the error being the response
    if (res.status >= 400) {
      console.error(`Error response: ${res.status} ${res.statusText}`);
      return res;
    }
    
    //if the response status code is under 400, return response to next promise chain
    return res;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

// call this to get the "XSRF-TOKEN" cookie, should only be used in development
export function restoreCSRF() {
  console.log("Restoring CSRF token...");
  return csrfFetch("/api/csrf/restore")
    .then(response => {
      console.log("CSRF restore response:", response.status);
      return response;
    })
    .catch(error => {
      console.error("Error restoring CSRF token:", error);
      throw error;
    });
}
