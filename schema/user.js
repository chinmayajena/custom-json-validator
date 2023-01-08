import ajvInstance from "./ajv-instance.js";

const schema = {
  type: "object",
  properties: {
    firstName: { type: "string", minLength: 3 },
    email: { type: "string", format: "email" },
    dob: { type: "string", format: "date" },
    countryCode: {
      type: "string",
      enum: ["US", "CA"],
    },
  },
  required: ["firstName", "email", "dob", "countryCode"],
};

export default ajvInstance.compile(schema);
