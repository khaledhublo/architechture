function buildQuery() {}

function getServerUrl() {}

function isValidMethod() {}

function isValidParams() {}

function sendRequest() {}

export async function SomeHTTPRequest({
  url = requiredParam("url"),
  method = requiredParam("method"),
  params = requiredParam("params"),
  options = {}
}) {
  isValidMethod(method);
  isValidParams(params);
  getServerUrl(url);
  let query = buildQuery(params);
  sendRequest(query, options);
}
