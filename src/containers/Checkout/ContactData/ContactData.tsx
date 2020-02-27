import React, { useState } from "react";

const ContactData = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState({
    street: "",
    postalCode: ""
  });

  return (
      <div>
          
      </div>
  );
};

export default ContactData;
