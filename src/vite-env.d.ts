/// <reference types="vite/client" />

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.JPG' {
  const value: string;
  export default value;
}