import React, { useRef, useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import { Container, Input } from './styles';

function AvatarInput({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);
  const [preview, setPreview] = useState(defaultValue);

  const handlePreview = useCallback((e) => {
    const file = e.target.files?.[0];

    if (!file) setPreview(null);

    const previewURL = URL.createObjectURL(file);

    setPreview(previewURL);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_, value) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container
        onClick={() => inputRef.current.click()}
        preview={preview && preview}
      >
        {!preview && 'Avatar Upload'}
      </Container>
      <Input type="file" ref={inputRef} onChange={handlePreview} {...rest} />
    </>
  );
}

AvatarInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AvatarInput;
