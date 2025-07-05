import { useSate } from "react";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

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
    </form>
  );
};

export default ContactForm;
