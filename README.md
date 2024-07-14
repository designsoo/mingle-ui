# mingle-ui

<img width="1920" alt="mingle-ui-cover" src="https://github.com/designsoo/mingle-ui/assets/77719310/0a5445b8-365a-4204-9272-8f01fb13e914">

**mingle-ui** is a powerful design system built with Tailwind CSS and Storybook.\
It’s designed to help developers and designers create consistent, beautiful interfaces effortlessly.

## Installation

Install mingle-ui into your project using NPM:

```bash
npm install mingle-ui
```

If you are already using mingle-ui and want to update to the latest version, use the following command:

```bash
npm install mingle-ui@latest
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

<a href='https://6669e8d86796066d6df5993c-srbezslies.chromatic.com/?path=/docs/stories-introduction--docs' target='_blank'>
  🔗 Mingle Design System - Storybook
</a>

## License

mingle-ui is released under the MIT License.
