import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ATHLETE } from "../../utils/mutations";
import "./NewAthlete.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddAthlete = () => {
  const [athleteFormData, setAthleteFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    notes: "",
    injuryReport: "",
  });

  const [addAthlete, { error }] = useMutation(ADD_ATHLETE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(athleteFormData);
      const { data } = await addAthlete({
        variables: {
          athlete: { ...athleteFormData },
        },
      });
      console.log(data);
      window.location.replace("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "phoneNumber") {
      setAthleteFormData({ ...athleteFormData, [name]: parseInt(value) });
    } else {
      setAthleteFormData({ ...athleteFormData, [name]: value });
    }
  };

  return (
    <Form className='newAthlete' onSubmit={handleFormSubmit}>
      <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          name='firstName'
          onChange={handleInputChange}
          value={athleteFormData.firstName}
          required
          type='name'
          placeholder='Athlete First Name'
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          name='lastName'
          onChange={handleInputChange}
          value={athleteFormData.lastName}
          type='name'
          placeholder='Athlete Last Name'
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          name='email'
          onChange={handleInputChange}
          value={athleteFormData.email}
          type='email'
          placeholder='athlete@athlete.com'
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Notes</Form.Label>
        <Form.Control
          name='notes'
          onChange={handleInputChange}
          value={athleteFormData.notes}
          as='textarea'
          rows={3}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Injury Report</Form.Label>
        <Form.Control
          name='injuryReport'
          onChange={handleInputChange}
          value={athleteFormData.injuryReport}
          as='textarea'
          rows={1}
        />
      </Form.Group>
      <Button variant='danger' type='submit'>
        Add Athlete
      </Button>
    </Form>
  );
};

export default AddAthlete;
