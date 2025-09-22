import "./App.css";
import ContactTable from "./components/ContactTable";
import { getContacts } from "./utils/CommonUtils";
import { Contact } from "./models/Contact";
import { useEffect, useState } from "react";
import { JsonUrls } from "./utils/JsonUrls";

/*
 * Instructions:
 * This exercise is straightforward: fetch the data
 * from this url, and display it however you like. You can
 * add libraries as you see fit, or not. This should be
 * a brief exercise. There's no need to style properly, or
 * handle pagination.
 *
 * -------------------------------------------------
 * Developer Notes (Anita Katakkar, Sept. 21, 2025)
 * -------------------------------------------------
 * The App component displays the contents returned by a valid contacts API url within a table
 * (i.e. see json_url).
 *
 * If the json_url returns a non 2XX http response, an error is displayed.
 *
 */

function App() {
  const json_url = JsonUrls.GetContacts;
  // ----- TODO: Remove test code -----
  // Comment the line above and unomment one of 2 invalid json_url values below
  // for testing purposes:
  // const json_url = JsonUrls.GetContactsInvalidUrl;
  // const json_url = JsonUrls.GetContactsInvalidJson;
  // ----- TODO: Remove test code end -----
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [errorMsg, setErrorMsg] = useState("");

  // Get an array of contacts
  useEffect(() => {
    getContacts(
      json_url,
      (contacts: Contact[]) => {
        setContacts(contacts);
      },
      (errorMessage: string) => {
        setErrorMsg(errorMessage);
      }
    );
  }, [json_url]);

  console.log("contacts", contacts);

  // Render a ContactList using the contact array
  return errorMsg.length === 0 ? (
    <ContactTable contacts={contacts}></ContactTable>
  ) : (
    <div className="alert alert-danger" role="alert">
      {errorMsg}
    </div>
  );
}

export default App;
