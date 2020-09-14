import React from "react";
import { useForm } from "react-hook-form";
import "../App.css";

import { Form, Input, FormGroup, Label, Button } from "reactstrap";

type Inputs = {
  username: string;
  address: string;
  phoneNumber: string;
  birthNumber: string;
  personalEmail: string;
};

function DPform() {
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Form className="dp-form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Formulář DPFO</h1>
      <h2 className="text-center">Osobní údaje</h2>
      <FormGroup>
        <Label>Jméno a příjmení</Label>
        <Input
          type="text"
          id="username"
          name="username"
          placeholder="Jméno a příjmení"
          ref={register({ required: "This is a required" })}
        />
        {errors.username && <p>{errors.username.message}</p>}
      </FormGroup>
      <FormGroup>
        <Label>Adresa trvalého bydliště</Label>
        <Input
          type="text"
          name="address"
          placeholder="Adresa trvalého bydliště"
          ref={register({ required: "This is a required" })}
        />
        {errors.address && <p>{errors.address.message}</p>}
      </FormGroup>
      <FormGroup>
        <Label>Telefonní číslo</Label>
        <Input
          type="text"
          name="phoneNumber"
          placeholder="Telefonní číslo"
          ref={register({ required: "This is a required" })}
        />
        {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
      </FormGroup>
      <FormGroup>
        <Label>Rodné číslo</Label>
        <Input
          type="text"
          name="birthNumber"
          placeholder="Rodné číslo"
          ref={register({ required: "This is a required" })}
        />
        {errors.birthNumber && <p>{errors.birthNumber.message}</p>}
      </FormGroup>

      <FormGroup>
        <Label>Osobní email</Label>
        <Input
          type="email"
          name="personalEmail"
          placeholder="Osobní email"
          ref={register({ required: "This is a required" })}
        />
        {errors.personalEmail && <p>{errors.personalEmail.message}</p>}
      </FormGroup>
        <Button className="btn-lg btn-dark btn-block">
          Submit
        </Button>
    </Form>
  );
}

export default DPform;
