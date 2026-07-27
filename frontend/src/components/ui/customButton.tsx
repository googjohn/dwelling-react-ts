import { Button } from "./button";
export function CustomButton({ ...props }) {
  return <Button {...props}>{props.children}</Button>
}
