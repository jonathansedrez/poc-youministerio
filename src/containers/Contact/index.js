import React, { useState } from 'react';
import useForm from 'react-hook-form';

import { baptismForm } from '../../api';
import SEO from '../../components/SEO';
import Navigation from '../../components/Navigation';
import Map from '../../components/Map';
import {
  Form,
  Input,
  ButtonSubmit,
  ErrorMessage,
  Wrapper,
  Title,
  Error,
  Success,
} from './styles';

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

  const [hasError, setError] = useState(false);
  const [hasSuccess, setSuccess] = useState(false);

  const onSubmit = async fields => {
    try {
      await baptismForm(fields);
      console.log('enviado');
      setSuccess(true);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <SEO title="Contato" meta={meta}>
      <Navigation />
      {hasError && <Error>Houve um erro ao enviar formulário!</Error>}
      {hasSuccess && <Success>Enviado com sucesso!</Success>}
      <Map />
      <Wrapper>
        <Title>Fale conosco!</Title>
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
              {errors.name.type === 'required' && 'Campo obrigatório'}
              {errors.name.type === 'maxLength' &&
                'Your input exceed maxLength'}
              }
            </ErrorMessage>
          )}
          <Input
            type="text"
            placeholder="Mensagem"
            name="message"
            error={errors.message}
            message
            ref={register({ required: true, maxLength: 255 })}
          />
          {errors.message && (
            <ErrorMessage>
              {errors.message.type === 'required' && 'Campo obrigatório'}
              {errors.message.type === 'maxLength' &&
                'Sua mensagem excdeu o valor'}
              }
            </ErrorMessage>
          )}
          <ButtonSubmit type="submit">Enviar</ButtonSubmit>
        </Form>
      </Wrapper>
    </SEO>
  );
};

export default Contact;
