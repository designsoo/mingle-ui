interface CategoryProps {
  children: string;
}

const Category = ({ children }: CategoryProps) => {
  return (
    <div className='h-7 rounded border px-2 flexbox-row color-border-category'>
      <span className='inline-block min-w-12 text-center text-base-12 color-text-primary'>
        {children}
      </span>
    </div>
  );
};

export default Category;
