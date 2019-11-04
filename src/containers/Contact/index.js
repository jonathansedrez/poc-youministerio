import React from 'react';
import useForm from 'react-hook-form';

import { baptismForm } from '../../api';
import SEO from '../../components/SEO';
import Navigation from '../../components/Navigation';
import { Form, Input, ButtonSubmit, ErrorMessage } from './styles';

const meta = [
  {
    property: `og:title`,
    content: 'You Ministerio | Fale conosco',
  },
  {
    name: `description`,
    content: 'Fale conosco',
  },
  {
    property: `og:description`,
    content: 'Fale conosco',
  },
];

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async fields => {
    console.log(fields);
    const { data } = await baptismForm(fields);
    console.log(data);
  };

  return (
    <SEO title="Contato" meta={meta}>
      <Navigation />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Nome"
          name="name"
          error={errors.name}
          ref={register({
            required: { value: true, message: 'Campo obrigatório' },
          })}
        />
        {errors.name && (
          <ErrorMessage>
            {errors.name.type === 'required' && 'Your input is required'}
            {errors.name.type === 'maxLength' && 'Your input exceed maxLength'}}
          </ErrorMessage>
        )}
        <Input
          type="text"
          placeholder="Mensagem"
          name="message"
          error={errors.message}
          ref={register({ required: true, maxLength: 100 })}
        />
        {errors.message && (
          <ErrorMessage>
            {errors.message.type === 'required' && 'Your input is required'}
            {errors.message.type === 'maxLength' &&
              'Your input exceed maxLength'}
            }
          </ErrorMessage>
        )}
        {/* <Input
          type="text"
          placeholder="Email"
          name="email"
          error={errors.email}
          ref={register({
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
        {errors.email && (
          <ErrorMessage>
            {errors.email.type === 'required' && 'Your input is required'}
            {errors.email.type === 'pattern' && 'Email invalido'}}
          </ErrorMessage>
        )} */}

        <ButtonSubmit type="submit">Enviar</ButtonSubmit>
      </Form>
    </SEO>
  );
};

export default Contact;
