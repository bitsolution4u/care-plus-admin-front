'use client';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

const styles = {
  dropzoneContainer: {
    width: 300,
    height: 200,
    border: '2px dashed #aaa',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    padding: '10px 5px',
    objectFit: 'contain',
  },
};

const SinngleImgUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setSelectedImage(event.target.result);
      setIsImageUploaded(true);
    };

    reader.readAsDataURL(file);
  };

  const handleChange = () => {
    setSelectedImage(null);
    setIsImageUploaded(false);
  };

  return (
    <>
      <Dropzone onDrop={handleDrop} accept="image/*" multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <div style={styles.dropzoneContainer} {...getRootProps()}>
            <input {...getInputProps({ disabled: isImageUploaded })} />
            {selectedImage ? (
              <>
                <Image
                  width={200}
                  height={200}
                  style={styles.image}
                  src={selectedImage}
                  alt="Uploaded"
                />
              </>
            ) : (
              <div>Drop or click to upload an image</div>
            )}
          </div>
        )}
      </Dropzone>
      <Box sx={{ marginTop: 3 }}>
        <Button
          size="small"
          variant="contained"
          color="success"
          sx={{ mr: 2 }}
          onClick={handleChange}
        >
          Change
        </Button>
        <Button
          onClick={handleChange}
          size="small"
          variant="contained"
          color="warning"
        >
          Remove
        </Button>
      </Box>
    </>
  );
};

export default SinngleImgUpload;
