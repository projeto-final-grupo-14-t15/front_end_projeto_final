import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { CssTextField, StyledParagraph } from './style';
import { StyledFieldset } from './fieldSetStyled';
import { CSSProperties } from 'react';

interface IInputProps {
  label: React.ReactNode;
  register?: UseFormRegisterReturn<string>;
  type: 'text' | 'number';
  error?: FieldError;
  fontColor?: string;
  value?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: any;
  multiline?: boolean;
  helperText?: boolean;
  controlSx?: CSSProperties;
}

const AnnouncementInput = ({
  label,
  register,
  type,
  error,
  value,
  // onChange,
  multiline,
  helperText,
  controlSx,
}: IInputProps) => {
  const loadValues = {
    houseDesc: '1'
  }

  return (
    <StyledFieldset style={controlSx}>
      <CssTextField
        fullWidth
        maxRows={5}
        helperText={
          helperText && loadValues.houseDesc?.length > 2
            ? `${loadValues.houseDesc?.length} caracteres (min:200 max:550)`
            : false
        }
        multiline={multiline ? true : false}
        value={value}
        {...register}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // onChange={(event: any) => onChange(event)}
        label={label}
        type={type}
      />
      {error ? (
        <StyledParagraph $fontColor='red'>{error.message}</StyledParagraph>
      ) : null}
    </StyledFieldset>
  );
};

export default AnnouncementInput;