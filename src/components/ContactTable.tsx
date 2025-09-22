import { Contact } from "../models/Contact";
import "./ContactTable.css";

interface ContactTableProps {
  contacts: Contact[];
}

const ContactTable = ({ contacts }: ContactTableProps) => {
  return (
    <>
      <table className="table">
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

export default ContactTable;
