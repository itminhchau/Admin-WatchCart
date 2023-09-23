import { Button, TextField } from '@mui/material';
import { toBase64 } from 'constants/convertBase64';
import { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';

InputFieldImage.propTypes = {};

function InputFieldImage({ name, label, form, checkReset }) {
  const [nameImg, setNameImg] = useState();

  const handleFileChange = async (event) => {
    const file = event.target.files;
    const data = file[0];
    setNameImg(data.name.toString());
    let imageBase64 = await toBase64(data);
    // let urlImage = URL.createObjectURL(file);

    form.setValue('image', imageBase64);
  };
  useEffect(() => {
    setNameImg('');
  }, [checkReset]);
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState: { invalid, error } }) => {
        return (
          <>
            <input
              {...field}
              type="file"
              accept="image/*"
              style={{ width: 0, height: 0, opacity: 0, position: 'absolute', top: '-1000px' }}
              id="file-input"
              onChange={(e) => {
                field.onChange(e);
                handleFileChange(e); // Gọi hàm handleFileChange để cập nhật giá trị
              }}
            />
            <label
              htmlFor="file-input"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'start',
                gap: '2px',
              }}
            >
              <TextField
                variant="outlined"
                size="small"
                label={label}
                value={nameImg ? nameImg : ''}
                InputProps={{
                  readOnly: true,
                }}
                error={invalid}
                helperText={error?.message}
              />
              <Button variant="contained" component="span" color="primary">
                choose file
              </Button>
            </label>
          </>
        );
      }}
    />
  );
}

export default InputFieldImage;
