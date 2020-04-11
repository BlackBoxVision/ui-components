import React, { FC } from 'react';
import { Field, Form } from 'react-final-form';
import {
  Button,
  Card,
  CardContent,
  CardActions,
  TextField,
  Typography,
} from '@material-ui/core';

import { useStyles } from './styles';

interface AosProps {
  /**
   * Name of the animation to use
   */
  'data-aos': string;
  /**
   * Mark if animation is done only once
   */
  'data-aos-once': string | boolean;
}

export interface ContactFormProps {
  /**
   * The callback to execute when submits the form
   */
  onSubmit: any;
  /**
   * The callback to validate the user input values
   */
  validate: any;
  /**
   * Title to show in ContactForm
   */
  title?: string;
  /**
   * Subtitle to show in ContactForm
   */
  subtitle?: string;
  /**
   * Email form field label
   */
  emailLabel: string;
  /**
   * Message form field label
   */
  messageLabel: string;
  /**
   * The label of the Submit button
   */
  submitButtonLabel: string;
  /**
   * Box Shadow for the ContactForm
   */
  elevation?: number;
  /**
   * AOS properties for animation configuration
   */
  aosProps?: AosProps;
}

export const ContactForm: FC<ContactFormProps> = ({
  onSubmit,
  validate,
  title,
  subtitle,
  emailLabel,
  messageLabel,
  submitButtonLabel,
  elevation,
  aosProps,
}: ContactFormProps) => {
  const classes = useStyles();

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, submitting, errors }: any) => (
        <form {...aosProps} onSubmit={handleSubmit} className={classes.form}>
          <Card elevation={elevation}>
            <CardContent>
              <Typography
                color="secondary"
                variant="h4"
                align="left"
                gutterBottom
              >
                {title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {subtitle}
              </Typography>
              <Field
                name="email"
                type="email"
                render={({ input, meta }) => (
                  <TextField
                    {...input}
                    variant="outlined"
                    margin="normal"
                    label={emailLabel}
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                    required
                    fullWidth
                  />
                )}
              />
              <Field
                name="message"
                render={({ input, meta }) => (
                  <TextField
                    {...input}
                    className={classes.messageField}
                    rowsMax="4"
                    rows="6"
                    variant="outlined"
                    label={messageLabel}
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                    required
                    fullWidth
                    multiline
                  />
                )}
              />
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button
                type="submit"
                color="primary"
                variant="outlined"
                className={classes.submitBtn}
                disabled={submitting || Object.keys(errors).length > 0}
              >
                {submitButtonLabel}
              </Button>
            </CardActions>
          </Card>
        </form>
      )}
    />
  );
};

ContactForm.defaultProps = {
  elevation: 0,
  aosProps: {
    'data-aos': 'fade-up',
    'data-aos-once': 'true',
  },
};

ContactForm.displayName = 'ContactForm';

export default ContactForm;
