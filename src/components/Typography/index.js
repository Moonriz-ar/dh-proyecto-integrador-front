export const Typography = ({ variant, children }) => {
  switch (variant) {
    case 'h1':
      return <h1 class="text-2xl font-bold">{children}</h1>;
    case 'h2':
      return <h2 class="text-xl font-bold">{children}</h2>;
    case 'h3':
      return <h3 class="font-bold">{children}</h3>;
    case 'h4':
      return <h4 class="text-sm font-bold">{children}</h4>;
    case 'button1':
      return <span class="text-sm font-bold">{children}</span>;
    case 'button2':
      return <span class="font-bold">{children}</span>;
    case 'body1':
      return <p class="text-sm font-medium">{children}</p>;
    case 'body2':
      return <p class="text-xs font-medium">{children}</p>;
    default:
      return <p>{children}</p>;
  }
};
