'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const MultipleImageUploader = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleDrop = (acceptedFiles) => {
    const filesArray = Array.from(acceptedFiles);

    const imageFiles = filesArray.map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));

    setSelectedImages((prevImages) => [...prevImages, ...imageFiles]);
  };

  const handleDelete = (index) => {
    setSelectedImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: 'image/*',
    multiple: true,
  });

  const styles = {
    imageUploader: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    dropzone: {
      width: '300px',
      height: '200px',
      border: '2px dashed gray',
      borderRadius: '5px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      transition: 'border-color 0.3s ease',
    },
    activeDropzone: {
      borderColor: 'green',
    },
    imagePreview: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '14px',
      marginTop: '20px',
    },
    imageContainer: {
      position: 'relative',
    },
    squareBox: {
      maxWidth: '200px',
    },
    selectedImg: {
      border: '1px solid #ddd',
      objectFit: 'contain',
      padding: '10px 5px',
    },
    deleteButton: {
      position: 'absolute',
      top: '-10px',
      right: '-6px',
      fontWeight: '600',
      background: 'transparent',
      border: 'none',
      color: 'red',
      fontSize: '24px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.imageUploader}>
      <div
        style={{
          ...styles.dropzone,
          ...(isDragActive ? styles.activeDropzone : {}),
        }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drop or click to upload images</p>
        )}
      </div>
      <div style={styles.imagePreview}>
        {selectedImages.map((image, index) => (
          <div style={styles.imageContainer} key={index}>
            <div style={styles.squareBox}>
              <Image
                style={styles.selectedImg}
                width={200}
                height={150}
                src={image.url}
                alt="Uploaded"
              />
            </div>
            <button
              style={styles.deleteButton}
              onClick={() => handleDelete(index)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleImageUploader;
