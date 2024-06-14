# mingle-ui

![mingle-ui-cover](https://github.com/designsoo/mingle-ui/assets/77719310/a073ccdc-91dc-4fd9-b9d6-59f64420ff78)

mingle-ui is a comprehensive design system built with Tailwind CSS and Storybook, designed to empower developers and designers to build consistent and beautiful interfaces efficiently.

## Installation

Install mingle-ui into your project using NPM:

```bash
npm install mingle-ui
```

## Usage

You can import components from mingle-ui directly as shown below:

```typescript
import { Label, InputField } from "mingle-ui";

export default function LoginPage() {
  return (
    ...
      <Label htmlFor='email'>Email</Label>
      <InputField
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        errorMessage='Email is required'
        isError={false}
      />
      <Label htmlFor='password'>Password</Label>
      <InputField
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        errorMessage='Password is required'
        isError={false}
      />
    ...
  );
}
```

This ensures that all mingle-ui components render with the intended design specifications.

## Components

mingle-ui offers a wide range of components that are ready to use in your projects. To see the components available and learn how to use them, refer to the Storybook documentation provided with the package.

## License

mingle-ui is released under the MIT License. See the LICENSE file for more details.
