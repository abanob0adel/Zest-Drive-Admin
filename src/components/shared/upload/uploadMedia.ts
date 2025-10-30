import { axios } from "@/lib/axios";

export interface UploadMediaResponse {
  url: string;
  fileName?: string;
  size?: number;
}

export const uploadMediaRequest = async (
  file: File
): Promise<UploadMediaResponse> => {
  const formData = new FormData();
  formData.append("image", file);

  const response = await axios.post("upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
