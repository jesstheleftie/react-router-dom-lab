import { useState } from "react";
import NavBar from "./components/NavBar";
import MailboxDetails from "./components/MailboxDetails";
import MailboxForm from "./components/MailboxForm";
import MailboxList from "./components/MailboxList";
import { Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";

const initialState = {
  boxholder: "Alex",
  boxSize: "Small",
};

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
  };

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<h2>Post Office</h2>} />
        <Route
          path="/mailboxes"
          element={<MailboxList mailbox={mailboxes} />}
        />
        <Route
          path="/new-mailbox"
          element={<MailboxForm addMailbox={addMailbox} />}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailbox={mailboxes} />}
        />
        <Route path="*" element={<h2>Mailbox Not Found!</h2>} />
      </Routes>
    </>
  );
};

export default App;
