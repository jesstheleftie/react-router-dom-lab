import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  console.log(props);
  const { mailboxId } = useParams();
  console.log("mailboxId:", mailboxId);
  const selectedBox = props.mailbox.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  if (!selectedBox) {
    return <h2>Mailbox Not Found!</h2>;
  }
  console.log("Mailbox Object:", selectedBox);
  return (
    <>
      <h2>Details</h2>
      <dl>
        <div className="boxholderContainer">
          <dt>Mailbox ID:</dt>
          <dd>{selectedBox._id}</dd>
        </div>
        <div className="boxholderContainer">
          <dt>Boxholder:</dt>
          <dd>{selectedBox.boxholder}</dd>
        </div>
        <div className="boxholderContainer">
          <dt>Box Size:</dt>
          <dd>{selectedBox.boxSize}</dd>
        </div>
      </dl>
    </>
  );
};

export default MailboxDetails;
