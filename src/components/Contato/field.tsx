import { Input } from "./styles/input";
import { Label } from './styles/label';

interface IField {
  title: string;
  textarea?: boolean;
}

export function Field({ title, textarea }: IField) {
  return (
    <>
      <Label>{title}</Label>
      <Input />
    </>
  );
}
