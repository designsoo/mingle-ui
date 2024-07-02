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
import { FormProvider, useForm } from 'react-hook-form';
import { InputField, PrimaryButton } from "mingle-ui";

function LoginPage() {
  const methods = useForm({
    mode: 'all',
  });

  const onSubmit = (data) => {console.log(data)};

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <InputField
          formMethod={methods}
          name='email'
          type='email'
          placeholder='Email'
          label='Email'
          errorMessage='Email is Required'
          isRequired
        />
        <InputField
          formMethod={methods}
          name='password'
          type='password'
          placeholder='Password'
          label='Password'
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

## Storybook

<a href='https://6669e8d86796066d6df5993c-lnmdqqdtcv.chromatic.com/?path=/docs/badge-badgeemoji--docs' target='_blank'>
  🔗 Mingle Design System - Storybook
</a>

## License

mingle-ui is released under the MIT License. See the LICENSE file for more details.
