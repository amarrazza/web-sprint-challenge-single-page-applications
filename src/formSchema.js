import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name required')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .required('Size is required'),
    roni: yup
        .boolean(),
    sausage: yup
        .boolean(),
    mushrooms: yup
        .boolean(),
    pineapple: yup
        .boolean(),
    special: yup
        .string(),
    
})

export default formSchema