// function handleOnChange(changeEvent) {
//     const reader = new FileReader();
//     reader.onload = function (onLoadEvent) {
//       setImageSrc(onLoadEvent.target.result);
//       setUploadData(undefined);
//     };

//     reader.readAsDataURL(changeEvent.target.files[0]);
//   }
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const fileInput = Array.from(form.elements).find(
//       ({ name }) => name === "file"
//     );
//     const formData = new FormData();
//     for (const file of fileInput.files) {
//       formData.append("file", file);
//     }
//     formData.append("upload_preset", "sealjet");

//     const data = await fetch(
//       "https://api.cloudinary.com/v1_1/monex-solution/image/upload",
//       {
//         method: "POST",
//         body: formData,
//       }
//     ).then((r) => r.json());
//     setImage(data.secure_url);
//     let res = await axios.post(`http://localhost:3000/api/material`, {
//       params: {
//         image,
//         name,
//         description,
//       },
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });

//     setName("");
//     setDescription("");
//   };
