import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(3, 'Name must be at least 3 characters long')
        .required('Name is required'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'You must select a size.')
        .required('You must select a size.')
//     toppings: yup
//         .string()
//         .oneOf(['pepperoni', 'mushrooms', 'onions', 'sausage', 'cheese', 'peppers'], 'At least one topping selection is required.')
//         .required('At least one topping selection is required.'),
// })

export default formSchema
