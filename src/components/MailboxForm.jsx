import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  boxholder: "",
  boxSize: "Small",
};

const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data", formData);
    props.addMailbox(formData);
    setFormData(initialState);
    navigate("/mailboxes");
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
    console.log("target:", target);
  };
  return (
    <main>
      <h2>New Mailbox</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="boxholder">Enter a Boxholder:</label>
        <input
          type="text"
          id="boxholder"
          name="boxholder"
          placeholder="Boxholder Name"
          value={formData.boxholder}
          onChange={handleChange}
        />
        <label htmlFor="boxSize">Select a Box Size:</label>
        <select
          id="boxSize"
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
};

export default MailboxForm;
