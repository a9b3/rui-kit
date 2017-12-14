// import {withKnobs, text}        from '@storybook/addon-knobs'
// import {storiesOf}              from '@storybook/react'
// import React                    from 'react'
//
// import {Form, FormField, types} from '../index.js'
//
// const NameFormFieldRender = createFormFieldRender({
//   label: 'Name',
// })
//
// class ExampleForm extends React.Component {
//   handleSubmit = (data) => {
//     alert(JSON.stringify(data, '  '))
//   }
//
//   render() {
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <FormField
//           path='name'
//           type={types.VALUE}
//           fieldArgs={{
//             initialValue: 'hi',
//             validate    : (value, all) => {
//               if (value.length < 4) {
//                 return 'length must be more than 4'
//               }
//             },
//           }}
//           render={
//             ({getInputProps, formStateField}) => {
//               return <div>
//                 {formStateField.error}
//                 <label>Name</label>
//                 <input {...getInputProps()} />
//               </div>
//             }
//           }
//         />
//         <button type='submit'>Submit</button>
//       </Form>
//     )
//   }
// }
//
// storiesOf('Form2', module)
//   .addDecorator(withKnobs)
//   .add('default', () => {
//     return <ExampleForm />
//   })
