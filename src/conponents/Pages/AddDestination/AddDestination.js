import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import useAuth from "../../../hooks/useAuth";
import useDocumentTitle from "../../../hooks/useTitle";

const AddDestination = () => {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(null);
  const types = ["image/png", "image/jpeg"];
  const { storage, ref, uploadBytesResumable, getDownloadURL } = useAuth();
  const history = useHistory();
  useDocumentTitle("Add a New Destination");
  const onSubmit = (info) => {
    const imgFile = info.Img[0];
    if (imgFile && types.includes(imgFile.type)) {
      const newImage = ref(storage, imgFile.name);
      const uploadTask = uploadBytesResumable(newImage, imgFile);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progressx =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progressx);
        },
        (error) => {
          setError("Something Went wrong");
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            info.img = downloadURL;
            axios
              .post(
                "https://blooming-hollows-44421.herokuapp.com/get-destination",
                info
              )
              .then((Result) => {
                if (Result.data.acknowledged) {
                  reset();
                  history.push("/");
                }
              });
          });
        }
      );
    } else {
      setError("Please Select Image File jpeg or png");
    }
  };
  return (
    <div>
      <div className="container mx-auto mt-16 flex items-center justify-center h-full flex-col gap-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full wlg:w-1/2 flex flex-col gap-5 bg-white justify-center justify-center items-center py-8 rounded"
        >
          <h1 className="lg:text-4xl text-lg text-center font-bold text-gray-700">
            Love where you're going
          </h1>
          <input
            {...register("Location")}
            placeholder="Travel Location"
            className=" focus:outline-none w-4/5 text-sm text-black placeholder-gray-500  border-b border-gray-800 py-4"
          />
          <input
            {...register("Desc")}
            placeholder="Short Description"
            className=" focus:outline-none w-4/5 text-sm text-black placeholder-gray-500  border-b border-gray-800 py-4"
          />
          <input
            {...register("Title")}
            placeholder="Title"
            type="text"
            className=" focus:outline-none w-4/5 text-sm text-black placeholder-gray-500  border-b border-gray-800 py-4"
          />
          <input
            {...register("Duration")}
            placeholder="How long do you want to travel?"
            type="number"
            className=" focus:outline-none w-4/5 text-sm text-black placeholder-gray-500  border-b border-gray-800 py-4"
          />
          <input
            {...register("Price")}
            placeholder="How Much Cost?"
            type="number"
            className=" focus:outline-none w-4/5 text-sm text-black placeholder-gray-500  border-b border-gray-800 py-4"
          />
          <input
            {...register("Img")}
            placeholder="choose travel images "
            type="file"
            required
            className=" focus:outline-none w-4/5 text-sm text-black placeholder-gray-500  border-b border-gray-800 py-4"
          />
          {progress && (
            <span
              style={{
                width: `${progress}%`,
                height: "3px",
                background: "orange",
              }}
            ></span>
          )}

          <span>{error && error}</span>
          <button className="w-3/4 py-4 px-4 text-white rounded bg-green-400 hover:bg-green-500 text-white">
            Add New Destination
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDestination;
