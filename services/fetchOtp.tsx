interface SendOtpResponse {
    otp: string;
    message: string;
    status: boolean;
}

const fetchOtp = async (email: string): Promise<string> => {
    try {
        const response = await fetch("http://192.168.217.33:8080/sendOtp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Corrected capitalization of "Content-Type"
            },
            body: JSON.stringify({ email }),
        });
        console.log("program is in fetchOtp component");
        if (!response.ok) {
            const errorData = await response.json();
            console.log("response: ", response); // Parse the response body
            throw new Error(errorData.message || "Something went wrong.");
        }

        const data: SendOtpResponse = await response.json();
        console.log(data)
        
        if(data.status){
            return data.otp;
        } else {
            throw new Error(data.message);
        }
    } catch (error: any) {
        console.error("fetchOtp error:", error); // Log the full error object for debugging
        throw error.message || "Network error occured.";
    }
};

export default fetchOtp;