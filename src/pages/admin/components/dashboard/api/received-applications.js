import axios from "axios";

export const noOfJobApplicationsReceived = async() => {
    const token = await window.Clerk.session.getToken();
    try {
        const response = await axios.get('https://aidf-back-end-production.up.railway.app/jobApplications/received', {
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error);
    }
}