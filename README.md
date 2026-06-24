# mingle-ui

<img width="1920" alt="mingle-ui-cover" src="https://github.com/user-attachments/assets/f4170059-7b43-4215-a6f1-7499d93886a6">

**mingle-ui** is a powerful design system built with Tailwind CSS and Storybook.\
It’s designed to help developers and designers create consistent, beautiful interfaces effortlessly.

## Installation

Install mingle-ui into your project using NPM:

```bash
npm install mingle-ui
```

mingle-ui ships `react` and `react-dom` as **peer dependencies**, so it works with the React version already installed in your project. Supported versions: **React 18 and React 19**. Make sure they are installed:

```bash
npm install react react-dom
```

If you use the form components (`InputField`, `Input`), also install `react-hook-form` (optional peer dependency):

```bash
npm install react-hook-form
```

If you are already using mingle-ui and want to update to the latest version, use the following command:

```bash
npm install mingle-ui@latest
```

## Usage

### Using with react-hook-form

To use InputField with react-hook-form, follow the example below:

```ts
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

<a href='https://mingle-ui-one.vercel.app/' target='_blank'>
  🔗 Mingle Design System - Storybook
</a>

## License

mingle-ui is released under the MIT License.
