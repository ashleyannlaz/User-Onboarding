import * as yup from  'yup'

const formSchema = yup.object().shape({
    username: 
    yup.string()
    .trim()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters long'),
    email: 
    yup.string()
    .email('Must be a valid email address')
    .required('Email is required'),
    password: 
    yup.string()
    .trim()
    .required('Password is required')
    .min(5, 'Password must be at least 5 characters long'),
    tos: 
    yup.boolean()
    .oneOf([true], 'Must be selected.'),
})

export default formSchema