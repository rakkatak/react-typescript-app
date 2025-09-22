import { Contact } from "../models/Contact";
import axios from "axios";

/**
 * Function that accepts the contact url and sets the contacts within the callback method.
 *
 * Using the axios get method rather than the native fetch method due to:
 *   - eliminating the nead to call res.json() to parse the json response
 *   - treating non-2xx responses as errors, caught by catch()
 *   - the built in configuration to abort a request that times out
 *
 * @param jsonUrl - The url for retrieving a contact list (i.e. GET) and returning a response format: { code :, meta:, data: }
 *                  Note: data contains the contact array
 * @param setContacts - The contacts setter method, which is called in the callback method upon successful return of data
 */
export function getContacts(
  jsonUrl: string,
  setContacts: (contacts: Contact[]) => void,
  setErrorMsg: (errorMessage: string) => void
) {
  var contacts: Contact[] = [];
  axios
    .get(jsonUrl, { timeout: 5000 })
    .then((res) => {
      contacts = res.data.data;
      if (res.data && res.data.data) {
        setContacts(contacts);
        setErrorMsg("");
      } else {
        const errorMsg: string =
          "An error occurred. The provided url is invalid.";
        setErrorMsg(errorMsg);
        console.log(errorMsg);
      }
    })
    .catch((error) => {
      const errorMsg: string =
        "Error calling the contacts endpoint. [" + error + "]";
      setErrorMsg(errorMsg);
    });
}
