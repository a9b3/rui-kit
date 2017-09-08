1. Initialize FormState with the fields you want in the form. FormState takes in
   the argument validators as part of its constructor. Each field in the
   validator object will be a field in the form.

<br />

```js
const formState = new FormState({
  validators: {
    email: (value) => {
      if (value.length <= 0) {
        throw new Error('Email cannot be empty')
      }
      return true
    },
    password: () => {
      return true
    },
  },
})
```
<br />

2. Set up the form components. Each field in FormField will be a controlled
   input referencing the value in the given formState instance.

<br />

```html
<Form
  formState={formState}
>
  <FormField
    formState={formState}
    formFieldKey={'email'}
    placeholder={'email'}
  />

  <FormField
    formState={formState}
    formFieldKey={'password'}
    placeholder={'password'}
  />
</Form>
```

<br />

3. Add the FormFieldError component. If there is a validation error this
   component will display the error message, otherwise it will be hidden.

<br />

```html
<Form
  formState={formState}
>
  // ...
  <FormFieldError
    formState={formState}
    formFieldKey={'email'}
  />
</Form>
```
