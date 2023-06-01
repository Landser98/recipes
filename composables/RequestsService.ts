import { ElNotification } from 'element-plus'

export default function RequestsService() {
  const loading = ref(true);

  async function getRequest(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    setTimeout(() => (loading.value = false), 300);    
    return data;
  }

  async function postRequest(url: string, data: object, fileInput: any) {
    try {
      setTimeout(() => (loading.value = false), 300);

      data.file = fileInput;
      const requestOptions = {
        method: "POST",
        contentType: "application/json",
        body: JSON.stringify(data),
      };
      const response = await fetch(url, requestOptions);

      if (response.ok) {
        useRouter().push("/");
        openSuccessMessage()
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  return {
    getRequest,
    loading,
    postRequest,
  };
}


const openSuccessMessage = () => {
  ElNotification({
    title: 'Success',
  })
}