
export const PostEmail = async (name, email, address) => {
    console.log("her");
    const h = { Name: name, Email: email, address: address };
    
    try {
        const response = await fetch('http://localhost:8080/Email', {
            method: 'POST',
            body: JSON.stringify(h),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const emailData = await response.json();
        return emailData;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
}
