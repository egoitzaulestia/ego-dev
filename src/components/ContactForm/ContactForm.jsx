import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const handleInputChange = ({ target: { name, value } }) => {
    // Update the form state
    const newData = { ...data, [name]: value };
    setData(newData);

    // Validation rules
    const nameOK = newData.name.trim().length >= 3;
    const emailOk = /^\S+@\S+\.\S+$/.test(newData.email);
    const messageOK = newData.message.trim().length > 0;

    if (!nameOK) {
      setMessage("Name must be at least 3 characters");
    } else if (!emailOk) {
      setMessage("Enter a valid email address");
    } else if (!messageOK) {
      setMessage("Message cannot be empty");
    } else {
      setMessage("");
    }

    setBtnDisabled(!(nameOK && emailOk && messageOK));
    // setData({
    //   ...data,
    //   [event.target.name]: event.target.value,
    // });
  };

  const clearState = () => {
    setData({ ...initialState });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Sending data... Name: ${data.name}; Email: ${data.email}; Message: ${data.message}`
    );

    // Save form data in localStorage
    localStorage.setItem("contactFromData", JSON.stringify(data));

    clearState();

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        value={data.name}
        onChange={handleInputChange}
        name="name"
      />
      <input
        type="email"
        placeholder="email"
        value={data.email}
        onChange={handleInputChange}
        name="email"
      />
      <textarea
        type="message"
        placeholder="message"
        value={data.message}
        onChange={handleInputChange}
        name="message"
      />
      <button type="submit" disabled={btnDisabled}>
        Send
      </button>
      <p>{message}</p>
    </form>
  );
};

export default ContactForm;
