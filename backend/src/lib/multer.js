import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

export default upload;



// const formData = new FormData();
// formData.append("profilePic", file);

// await fetch("/api/auth/update-profile", {
//   method: "PUT",
//   body: formData,
//   // Authorization یا Cookie در صورت نیاز
// });