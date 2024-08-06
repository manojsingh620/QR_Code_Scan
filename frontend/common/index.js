const backendDomain = process.env.REACT_APP_BACKEND_URL

const SummaryApi = {
    User_Register: {
      url: `${backendDomain}/api/register`,
      method: "post",
    },
    User_Verify: {
      url: `${backendDomain}/api/verify-qrcode`,
      method: "post",
    },
}
export default SummaryApi;