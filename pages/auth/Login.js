import React from 'react'
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
    FieldArray,
    FastField
} from 'formik'
import * as Yup from 'yup';
import Link from 'next/link';
import Frontend from '../../layouts/Frontend';
import TextError from '../../components/error/TextError';

const initialValues = {
    email: '',
    password: ''
}
const onSubmit = (values, submitProps) => {
    console.log('Form data', values)
    console.log('submitProps', submitProps)
    submitProps.setSubmitting(false)
    submitProps.resetForm()
}
const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is Required'),
    password: Yup.string().required('Password is Required')
})
function Login() {
    return (
        <Frontend>
            <div className="row">
                <div className="col-4 offset-4">
                    <h4>Login Here.</h4>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                        enableReinitialize
                    >
                        {formik => {
                            console.log('Formik props', formik)
                            return (
                                <Form className="form">

                                    <div className='form-group'>
                                        <label htmlFor='email'>Email</label>
                                        <Field className="form-control" type='email' id='email' name='email' />
                                        <ErrorMessage name="email" component={TextError} />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='password'>Password</label>
                                        <Field className="form-control" type='password' id='password' name='password' />
                                        <ErrorMessage name="password" component={TextError} />
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <button className="btn btn-sm btn-success"
                                                type='submit'
                                                disabled={!formik.isValid || formik.isSubmitting}
                                            >Submit</button>
                                        </div>
                                        <div className="col-8">
                                            <Link href="/auth/Register"><a className="btn btn-sm btn-primary">Not a member? Register Here</a></Link>
                                        </div>
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>
                </div>

            </div>
        </Frontend>
    )
}

export default Login
