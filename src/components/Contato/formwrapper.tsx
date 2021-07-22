import { Field } from "./field";
import { Form } from "./styles/form";
import { SendButton } from './styles/sendbutton';

export function FormWrapper() {
  return (
    <Form>
      <Field title="Nome" />
      <Field title="E-mail" />
      <Field title="Telefone" />
      <Field title="Mensagem" />
      <SendButton>Enviar</SendButton>
    </Form>
  );
}
