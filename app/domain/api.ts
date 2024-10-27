export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export const parseApiResponse = async (response: Response) => {
  if (response.ok) {
    return {
      success: true,
      data: await response.json()
    };
  }

  return {
    success: false,
    error: await response.text()
  };
};
