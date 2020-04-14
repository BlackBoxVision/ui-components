import React, { useState } from 'react';
import { text, number } from '@storybook/addon-knobs';

import { ContactForm } from '../../../src';
import { validateForm } from '../../utils/validations';

const submit = (values: any) =>
  new Promise((resolve) =>
    setTimeout(() => {
      alert(JSON.stringify(values, null, 4));
      resolve('ok');
    }, 1000)
  );

export const MyContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [sended, setSended] = useState(false);

  const onSubmit = async (values: any) => {
    setLoading(true);
    const res = await submit(values);
    setLoading(false);
    if (res === 'ok') {
      setError(false);
      setSended(true);
    } else {
      setError(true);
      setSended(false);
    }
  };

  return (
    <ContactForm
      onSubmit={onSubmit}
      loading={loading}
      sended={sended}
      error={error}
      validate={validateForm}
      elevation={number('Elevation', 0)}
      title={text('Title', 'Contact us!')}
      subtitle={text(
        'Subtitle',
        'Complete the form if you are looking for incredible solutions!'
      )}
      emailLabel={text('Email label', 'Email')}
      messageLabel={text('Message label', 'Message')}
      submitButtonLabel={text('Send', 'Send')}
      retryButtonLabel={text('Retry', 'Retry')}
    />
  );
};
