import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onBlur"
  });
  const onSubmit = data => {
    setData(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            id = 'fistName'
            name="firstName"
            placeholder="bill"
            ref={register({ required: true, maxLength: 3 })}
            data-testid = 'first-name'
          />
          {errors.firstName && (
            <p data-testid = 'first-name-error'>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            id = 'lastName'
            name="lastName"
            placeholder="luo"
            ref={register({ required: true })}
            data-testid = 'last-name'
          />
          {errors.lastName && (
            <p data-testid = 'last-name-error'>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email*
          </label>
          <input id = 'email' name="email" ref={register({ required: true })} data-testid ='email' />
          {errors.email && (
            <p data-testid = 'email-error'>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" ref={register({ required: false })} data-testid = 'message'/>
        </div>
        {data && (
          <pre data-testid = 'data-displayed' style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input data-testid = 'submit-button' type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
