import { useState } from "react";
import useAuth from "./useAuth";

const useStorage = (imgFile) => {
  const [uploadError, setUploadError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [imgurl, setImgUrl] = useState();
  const { storage, ref, uploadBytesResumable, getDownloadURL } = useAuth();
  const newImage = ref(storage, imgFile.name);
  const uploadTask = uploadBytesResumable(newImage, imgFile);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(progress);
      setProgress(progress);
    },
    (error) => {
      setUploadError("something Went Wrong");
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        setImgUrl(downloadURL);
      });
    }
  );
  return { imgurl, uploadError, progress };
};

export default useStorage;
