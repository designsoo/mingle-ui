interface LabelProps {
  htmlFor: string;
  children: string;
}

const Label = ({ htmlFor, children }: LabelProps) => {
  return (
    <label
      className='mb-2 block text-bold-18 text-neutral-200'
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default Label;
