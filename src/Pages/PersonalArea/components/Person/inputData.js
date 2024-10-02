export const inputFirst = [
    {
      name: "firstName",
      placeholder: "First Name",
      type:'text',
      validation: { required: "Required to fill out", maxLength: 20 },
    },
    {
      name: "lastName",
      placeholder: "Last Name",
      type:'text',
      validation: {
        required: "Required to fill out",
        maxLength: 20,
        minLength: { value: 5, message: "Minimum 5 characters" },
      },
    },
    {
      name: "phone",
      placeholder: "Phone",
      type:'number',
      validation: {
        required: "Required to fill out",
        minLength: { value: 8, message: "Minimum 8 characters" },
      },
    },
  ];
  
  export const inputSecond = [
    {
      name: "email",
      placeholder: "Email",
      type:'email',
      validation: {required: "Email is required",
      pattern: {
        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        message: "Enter a valid email address",
      },
    }},
    {
      name: "data",
      placeholder: "Data birthday",
      type:"date",
      validation: {
        required: "Required to fill out",
      },
    },
    
  ];

  export const inputThird = [
    {
      name: "passwordOld",
      placeholder: "Old password",
      type:'password',
      validation: {
        required: "Required to fill out",
        maxLength: 20,
        minLength: { value: 8, message: "Minimum 8 characters" },
      },
    },
    {
      name: "passwordNew",
      placeholder: "New password",
      type:'password',
      validation: {
        required: "Required to fill out",
        maxLength: 20,
        minLength: { value: 8, message: "Minimum 8 characters" },
      },
    },
    {
      name: "passwordNewSecond",
      placeholder: "New password again",
      type:'password',
      validation: {
        required: "Required to fill out",
        minLength: { value: 8, message: "Minimum 8 characters" },
      },
    },
  ];

