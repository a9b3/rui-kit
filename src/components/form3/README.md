# Form

Provides React components to facilitate form validation.

## Abstract

A form is interpretted as a mechanism of constructing a JSON object. Each form field is then one of the following: primitive, array or a map. The nested structure containing these values are consequently the form's schema.

The problem this library is trying to solve is how to define form schemas within a React app. The solution tries to allow runtime definition of the schema.

## API

#### ruiForm

A HOC which passes down an instance of FormState via the `formState` prop.

formState has the following instance variables and methods that are useful to the user.

|field|Type| Description|
|---|---|---|
|validationError| string| | 
|modified| boolean| | 
|find| function(path: string): FormNode| returns the formNode associated with the given path string.|

#### Form

##### Props

|Name| Type| Description|
|---|---|---|
|onSubmit| function(data: object)| Callback which will be passed the form data|

##### Example

```jsx
<Form onSubmit={(data) => {
	alert(JSON.stringify(data)
}}/>
```

#### FormField

##### Props

|Name| Type| Description|Example|
|---|---|---|---|
|path| string| Full path to the field. | `hobbies.0.name` |
|type| string| Type of field, value, array or map| 