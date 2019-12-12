import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/tree/";

export function getTree() {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}