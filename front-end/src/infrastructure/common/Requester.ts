import axios from 'axios';

export class Requester {
  private static readonly axiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    // If you need to send credentials like cookies
    withCredentials: false
  });

  static async post(url: string, data: object) {
    try {
      console.log(data);
      const response = await this.axiosInstance.post(url, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async fetch(url: string) {
    try {
      const response = await this.axiosInstance.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async put(url: string, data: object) {
    try {
      const response = await this.axiosInstance.put(url, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async delete(url: string) {
    try {
      const response = await this.axiosInstance.delete(url);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
