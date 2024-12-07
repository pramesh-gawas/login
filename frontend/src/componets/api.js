import { API_URL } from "./utils";

export const CreateTask = async (taskObj) => {
  const url = `${API_URL}/register`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(taskObj),
  };
  try {
    const result = await fetch(url, options);
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const CreateLog = async (taskObj) => {
  const url = `${API_URL}/login`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(taskObj),
  };
  try {
    const result = await fetch(url, options);
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const GetAllTask = async () => {
  const url = `${API_URL}/list`;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  };
  try {
    const result = await fetch(url, options);
    const data = await result.json();

    return data;
  } catch (error) {
    return error;
  }
};

export const DeleteTaskById = async (id) => {
  const url = `${API_URL}/${id}`;

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "Application/json",
    },
  };
  try {
    const result = await fetch(url, options);
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const UpdateTaskById = async (id, obj) => {
  const url = `${API_URL}/update/${id}`;
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(obj),
  };
  try {
    const result = await fetch(url, options);
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const CreatePost = async (taskObj) => {
  const url = `${API_URL}/post`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(taskObj),
  };
  try {
    const result = await fetch(url, options);
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};
