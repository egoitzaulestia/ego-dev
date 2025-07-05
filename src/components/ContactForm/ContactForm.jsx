import { useState } from "react";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    console.log(event);
    console.log(event.target.name);
    console.log(event.target.value);

    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Sending data... Name: ${data.name}; Email: ${data.email}; Message: ${data.message}`
    );

    // setData({
    //   name: "",
    //   email: "",
    // });
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
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
