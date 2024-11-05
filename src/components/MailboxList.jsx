import { Link } from "react-router-dom";

const MailboxList = (props) => {
  return (
    <>
      <h2>Mailbox List</h2>
      <ul>
        {props.mailbox.map((currentMailbox) => (
          <li key={currentMailbox._id}>
            <Link className="mailboxList" to={`/mailboxes/${currentMailbox._id}`}>
              {`Mailbox ${currentMailbox._id}`}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MailboxList;
