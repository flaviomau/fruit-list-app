"use server";

import { ApiResponse, parseApiResponse } from "../domain/api";
import { FruitDTO } from "../domain/fruit.dto";

const getFruitList = async (): Promise<ApiResponse<Array<FruitDTO>>> => {
  try {
    const response = await fetch(
      "https://wcz3qr33kmjvzotdqt65efniv40kokon.lambda-url.us-east-2.on.aws/"
    );
    return parseApiResponse(response);
  } catch (e) {
    const error = `Unable to execute getFruitList: ${e}`;
    console.error(e);
    return {
      error
    };
  }
};

export { getFruitList };
