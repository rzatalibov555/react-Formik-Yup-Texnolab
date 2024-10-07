import * as yup from "yup"


export const RegisterFormSchemas = yup.object().shape({

    email: yup.string().email("Invalid email").required("Email required"),

    username: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Username required'),

    age: yup.number().positive("Age must be positive number!").integer("age must be integer").required("Age required"),

    password: yup.string().required("Password required"),

    confirm_password: yup.string()
    .required("Confirm_password required")
    .oneOf([yup.ref("password")], "Password not match"),

    term: yup.boolean().required("Must agree on term")

})