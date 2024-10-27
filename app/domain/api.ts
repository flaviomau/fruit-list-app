export interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export const parseApiResponse = async (response: Response) => {
  if (response.ok) {
    return {
      data: await response.json()
    };
  }

  return {
    error: await response.text()
  };
};
