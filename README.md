# mingle-ui

<img width="1920" alt="mingle-ui-cover" src="https://github.com/designsoo/mingle-ui/assets/77719310/6ea7a02c-aeba-4f76-9619-6509ce11a574">

mingle-ui is a comprehensive design system built with Tailwind CSS and Storybook, designed to empower developers and designers to build consistent and beautiful interfaces efficiently.

## Installation

Install mingle-ui into your project using NPM:

```bash
npm install mingle-ui
```

## Usage

You can import components from mingle-ui directly as shown below:

```typescript
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { InputField, PrimaryButton } from "mingle-ui";

interface FormValues {
  email: string;
  Password: string;
}

function LoginPage() {
  const methods = useForm<FormValues>({
    mode: 'all',
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <InputField
          label='email'
          name='email'
          placeholder='Email'
          type='email'
          errorMessage='Email is Required'
          isRequired
        />

        <InputField
          label='password'
          name='password'
          placeholder='Password'
          type='password'
          errorMessage='Password is Required'
          isRequired
        />

        <PrimaryButton>Login</PrimaryButton>
      </form>
    </FormProvider>
  );
}

export default LoginPage;
```

This ensures that all mingle-ui components render with the intended design specifications.

## Components

mingle-ui offers a wide range of components that are ready to use in your projects. To see the components available and learn how to use them, refer to the Storybook documentation provided with the package.

## License

mingle-ui is released under the MIT License. See the LICENSE file for more details.
