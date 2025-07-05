import { useState } from "react";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);

    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("pasan más cosas");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        onChange={handleInputChange}
        name="name"
      />
      <input
        type="email"
        placeholder="email"
        onChange={handleInputChange}
        name="email"
      />
      <textarea
        type="message"
        placeholder="message"
        onChange={handleInputChange}
        name="message"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
