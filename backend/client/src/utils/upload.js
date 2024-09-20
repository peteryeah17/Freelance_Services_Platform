import axios from "axios";
//dd
const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "GearUp");

  try {
    const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dgmre7izv/image/upload",
        data
    );

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;