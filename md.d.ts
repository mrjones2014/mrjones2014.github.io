// types/mdx.d.ts
declare module "*.md" {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}
