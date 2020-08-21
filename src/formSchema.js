import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Name must be at least 2 characters long')
        .required('Name is required'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'You must select a size.')
        .required('You must select a size.'),
    instructions: yup
        .string()
})

export default formSchema
