import React, { useState } from 'react'
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
    FieldArray,
    FastField
} from 'formik'
import * as Yup from 'yup'
import TextError from '../components/error/TextError';
import Frontend from '../layouts/Frontend';

const initialValues = {
    name: 'Vishwas',
    email: '',
    message: ''
}

const savedValues = {
    name: 'Vishwas',
    email: 'v@example.com',
    message: 'Enter Message',
}

const onSubmit = (values, submitProps) => {
    console.log('Form data', values)
    console.log('submitProps', submitProps)
    submitProps.setSubmitting(false)
    submitProps.resetForm()
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
    message: Yup.string().required('Required')
})

function YoutubeForm() {
    const [formValues, setFormValues] = useState(null)
    return (
        <Frontend>
            <div className="row">
                <div className="col-6">
                    <h4>Check with us....</h4>
                    <Formik
                        initialValues={formValues || initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                        enableReinitialize
                    >
                        {formik => {
                            console.log('Formik props', formik)
                            return (
                                <Form className="form">
                                    <div className='form-group'>
                                        <label htmlFor='name'>Name</label>
                                        <Field className="form-control" type='text' id='name' name='name' />
                                        <ErrorMessage name='name' component={TextError} />
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor='email'>Email</label>
                                        <Field className="form-control" type='email' id='email' name='email' />
                                        <ErrorMessage name="email" component={TextError} />
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor='message'>Message</label>
                                        <Field className="form-control" type='message' id='message' name='message' />
                                        <ErrorMessage name="message" component={TextError} />
                                    </div>

                                    <button className="btn btn-sm btn-success" type='button' onClick={() => setFormValues(savedValues)}>
                                        Load saved data </button>
                                    <button className="btn btn-sm btn-success" type='reset'>Reset</button>
                                    <button className="btn btn-sm btn-success"
                                        type='submit'
                                        disabled={!formik.isValid || formik.isSubmitting}
                                    >Submit</button>
                                </Form>
                            )
                        }}
                    </Formik>
                </div>
                <div className="col-6">
                    <div className="card-deck">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Contact Us Here</h4>
                            </div>
                            <img src="/images/contact_page.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Frontend>
    )
}

export default YoutubeForm