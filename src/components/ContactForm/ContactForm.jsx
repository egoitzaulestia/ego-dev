import { useSate } from "react";

const ContactForm = () => {
  //   const [data, setData] = useState({
  //     name: "",
  //     email: "",
  //   });

  const handleInputChange = () => {
    console.log("pasan cosas");
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
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
