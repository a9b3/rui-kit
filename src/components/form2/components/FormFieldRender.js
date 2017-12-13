import styles from './FormFieldRender.css'

export default function FormFieldRender({getInputProps, formStateField}) {
  console.log(formStateField)
  return <div>
    <label htmlFor={formStateField.path}></label>
    <input type={} />
  </div>
}
