import Form from "./components/Form";

export default function ParentComponent() {
  const fields = [
    { name: "firstname", label: "First name", type: "text" },
    { name: "lastname", label: "Last name", type: "text" },
    { name: "email", label: "E-mail", type: "email" },
    { name: "city", label: "City", type: "text" },
    {
      name: "gender",
      label: "Gender",
      type: "select",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "others", label: "Others" },
      ],
    },
    {
      name: "material",
      label: "Material",
      type: "select",
      options: [
        { value: "unmarried", label: "Unmarried" },
        { value: "married", label: "Married" },
      ],
    },
  ];
  ///static values given to the dynamic form..........
  const initialFormValues = {
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    city: "New York",
    gender: "male",
    material: "married",
  };

  const handleSubmit1 = (data) => {
    console.log("Form data1:", data);
  };
  const handleSubmit2 = (data) => {
    console.log("Form data2:", data);
  };
  const handleSubmit3 = (data) => {
    console.log("Form data3:", data);
  };
  const handleSubmit4 = (data) => {
    console.log("Form data4:", data);
  };

  return (
    <>
      <div>
        <h1>THE MAIN PAGE </h1>
        <Form
          fields={fields}
          onSubmit={handleSubmit1}
          initialFormValues={initialFormValues}
        />
        <Form
          fields={fields}
          onSubmit={handleSubmit2}
          initialFormValues={initialFormValues}
        />
        <Form
          fields={fields}
          onSubmit={handleSubmit3}
          initialFormValues={initialFormValues}
        />
        <Form
          fields={fields}
          onSubmit={handleSubmit4}
          initialFormValues={initialFormValues}
        />
        {/* <Form
          fields={fields}
          onSubmit={handleSubmit5}
          initialFormValues={initialFormValues}
        /> */}
      </div>
    </>
  );
}
