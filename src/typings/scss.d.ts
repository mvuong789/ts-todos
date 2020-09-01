declare module '*.css' {
  const content: { [className: string]: string; };
  export default content;
}

declare module '*.scss';

declare module '*.sass';

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
