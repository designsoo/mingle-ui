interface CategoryProps {
  children: string;
}

const Category = ({ children }: CategoryProps) => {
  return (
    <div className='color-border-category h-7 rounded border px-2 flexbox-row'>
      <span className='color-text-primary inline-block min-w-12 text-center text-base-12'>
        {children}
      </span>
    </div>
  );
};

export default Category;
