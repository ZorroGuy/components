import React, { useState } from "react";
import {
  TextField,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";

export default function Form({ onSubmit, fields, initialFormValues }) {
  const [formData, setFormData] = useState(initialFormValues || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);

    alert("SBMIT SUCCESSFULLY");
  };
  // ``````````````````````````````````````````````````````````````````````````````````;
  return (
    <div>
      <h1 className="Heading">THE FORM</h1>
      <form onSubmit={handleSubmit}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, height: "60px", width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          {fields.map((field) => {
            const { name, label, type, options } = field;
            return (
              <div key={name}>
                {type === "select" ? (
                  <FormControl variant="filled" sx={{ m: 1, minWidth: 180 }}>
                    <InputLabel id={`label-${name}`}>{label}</InputLabel>
                    <Select
                      labelId={`label-${name}`}
                      name={name}
                      value={formData[name] || ""}
                      onChange={handleChange}
                    >
                      {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                ) : (
                  <TextField
                    id={`filled-${name}`}
                    required
                    label={label}
                    name={name}
                    type={type}
                    value={formData[name] || ""}
                    onChange={handleChange}
                  />
                )}
              </div>
            );
          })}
          <Button
            variant="contained"
            className="Submit"
            color="success"
            onClick={handleSubmit}
          >
            SUBMIT
          </Button>
        </Box>
      </form>
    </div>
  );
}

// import { TextField } from "@mui/material";
// import Box from "@mui/material/Box";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import Button from "@mui/material/Button";
// import { useState } from "react";

// export default function Form({ onSubmit, value }) {
//   //states

//   const [formData, setformData] = useState(value);
//   console.log(value);
//   console.log(formData);
//   // ----------------------

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setformData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form data", formData);
//     alert("Form submitted");
//     onSubmit(formData);
//   };

//   return (
//     <>
//       <div>
//         <h1 className="Heading">THE FORM</h1>
//         <form onSubmit={(e) => handleSubmit(e)}>
//           <Box
//             component="form"
//             sx={{
//               "& > :not(style)": { m: 2, height: "60px", width: "25ch" },
//             }}
//             noValidate
//             autoComplete="off"
//           >
//             <TextField
//               id="filled-basic"
//               required
//               label="First name"
//               name="firstname"
//               value={formData.firstname}
//               onChange={handleChange}
//             />
//             <TextField
//               id="filled-basic"
//               required
//               name="lastname"
//               label="Last  name"
//               value={formData.lastname}
//               onChange={handleChange}
//             />
//             <TextField
//               id="filled-basic"
//               label="E - mail"
//               name="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <TextField
//               id="filled-basic"
//               label="City"
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//             />
//             <FormControl variant="filled" sx={{ m: 1, minWidth: 180 }}>
//               <InputLabel id="demo-simple-select-filled-label">
//                 Gender
//               </InputLabel>
//               <Select
//                 labelId="demo-simple-select-filled-label"
//                 id="demo-simple-select-filled"
//                 required
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//               >
//                 <MenuItem value={"male"}>Male</MenuItem>
//                 <MenuItem value={"female"}>Female</MenuItem>
//                 <MenuItem value={"others"}>Others</MenuItem>
//               </Select>
//             </FormControl>
//             <FormControl variant="filled" sx={{ m: 1, minWidth: 180 }}>
//               <InputLabel id="demo-simple-select-filled-label">
//                 Material
//               </InputLabel>
//               <Select
//                 labelId="demo-simple-select-filled-label"
//                 id="demo-simple-select-filled"
//                 name="material"
//                 value={formData.material}
//                 onChange={handleChange}
//               >
//                 <MenuItem value={"unmarried"}>Unmarried</MenuItem>
//                 <MenuItem value={"married"}>Married</MenuItem>
//               </Select>
//             </FormControl>

//             <Button
//               variant="contained"
//               className="Submit"
//               color="success"
//               onClick={handleSubmit}
//             >
//               SUBMIT
//             </Button>
//           </Box>
//         </form>
//       </div>
//     </>
//   );
// }
