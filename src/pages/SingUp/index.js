import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('o email é obrigatorio'),
  password: Yup.string()
    .min(6, 'No minimo 6 caracteres')
    .required('A senha é obrigatoria'),
  name: Yup.string().required('Nome é obrigatorio'),
});

export default function SingUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="gobarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
