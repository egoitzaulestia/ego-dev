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

  const handleInputChange = (event) => {
    console.log(event);
    console.log(event.target.name);
    console.log(event.target.value);

    if (data.name.length + 1 < 3) {
      setMessage("Name must be at least 3 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
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
