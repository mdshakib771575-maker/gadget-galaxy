import toast from "react-hot-toast";

type ImgbbResponse = {
  success: boolean;
  data: {
    url: string;
  };
};

export const uploadImage = async (
  imageFile: File
): Promise<string | undefined> => {
  try {
    const formData = new FormData();
    formData.append("image", imageFile);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data: ImgbbResponse = await response.json();

    if (data.success) {
      return data.data.url;
    }

    toast.error("Image upload failed");
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong while uploading the image.");
  }
};