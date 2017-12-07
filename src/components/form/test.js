import styles from './styles.scss'
import cx     from 'classnames'

const formState = new FormState({
  fields: {
    name: {
      validate: (value, allValue) => {
        if (value.length === 0) {
          return 'No value length'
        }
      },
    },
  },
})

const handleSubmit = async (values) => {

}

export default function Form({...rest}) {
  return <form
    onSubmit={handleSubmit}
  >
    <FormField
      component={({value, onChange, error}) => {
        return <div>
          {error}
          <input
            type='text'
            onChange={onChange}
            value={value}
            placeholder={'Enter text...'}
          />
        </div>
      }}
      name={'name'}
      formState={formState}
    />

    <button>Submit</button>
  </form>
}
