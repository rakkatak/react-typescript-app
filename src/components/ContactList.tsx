import { useEffect, useState } from "react";
import axios from "axios";

interface Contact {
  id: number;
  name: string;
  email: string;
  gender: Gender;
  status: Status;
}

enum Gender {
  male = "male",
  female = "female",
  nonBinary = "non-binary",
  transgender = "transgender",
  agender = "agender",
}

enum Status {
  inactive = "inactive",
  active = "active",
}

interface Props {
  jsonUrl: string;
}

const ContactList = ({ jsonUrl }: Props) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    axios.get(jsonUrl).then((res) => {
      setContacts(res.data.data);
      // console.log('contacts', contacts);
    });
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((item: Contact) => {
            return (
              <tr key={item.id}>
                <th>{item.id}</th>
                <th>{item.name}</th>
                <th>{item.email}</th>
                <th>{item.gender}</th>
                <th>{item.status}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ContactList;
