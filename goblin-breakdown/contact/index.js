// Retrieve the JSON object containing the UK address and phone number
const getContactDetails = async (api) => {};

// Format the address in the desired UK address format
const formatAddress = (address) => {};

// Format the phone number in the desired UK phone number format

// Generate HTML code to display the formatted address and phone number on the page

//1. Parse the JSON object to retrieve the address and phone number.

//2. Extract the relevant fields from the JSON object such as street, city, postcode, and phone number.

//3. Format the address components into a standard UK address format.

//4. Create an HTML structure for displaying the address and phone number.

//5. Insert the formatted address into the HTML structure.

//6. Insert the phone number into the HTML structure.

//7. Set appropriate HTML tags for better accessibility and presentation.

//8. Apply any necessary CSS styles to enhance the visual layout.

//9. Append the final HTML structure to the desired element in the webpage.

//10. Test the output to ensure the address and phone number are displayed correctly.

// Retrieve the JSON object containing the UK address and phone number
const getContactDetails = async (api) => {
  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error("Failed to fetch contact details");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching contact details:", error);
    return null;
  }
};

// Format the address in the desired UK address format
const formatAddress = (address) => {
  if (!address) return "Invalid address";
  const { street, city, postcode } = address;
  return `${street}, ${city}, ${postcode}`;
};

// Format the phone number in the desired UK phone number format
const formatPhoneNumber = (phoneNumber) => {
  if (!phoneNumber) return "Invalid phone number";
  // Example: Convert "441234567890" to "+44 1234 567 890"
  return phoneNumber.replace(/^44(\d{4})(\d{3})(\d{3})$/, "+44 $1 $2 $3");
};

// Generate HTML code to display the formatted address and phone number on the page
const generateHTML = (address, phoneNumber) => {
  const container = document.createElement("div");
  container.innerHTML = `
        <address>
            <p><strong>Address:</strong> ${formatAddress(address)}</p>
        </address>
        <p><strong>Phone:</strong> ${formatPhoneNumber(phoneNumber)}</p>
    `;
  container.style.border = "1px solid #ccc";
  container.style.padding = "10px";
  container.style.margin = "10px";
  container.style.fontFamily = "Arial, sans-serif";
  container.style.backgroundColor = "#f9f9f9";
  return container;
};

// Main function to process and display the contact details
const displayContactDetails = async (api, targetElementId) => {
  const contactDetails = await getContactDetails(api);
  if (!contactDetails) return;

  const { address, phoneNumber } = contactDetails;
  const formattedHTML = generateHTML(address, phoneNumber);

  const targetElement = document.getElementById(targetElementId);
  if (targetElement) {
    targetElement.appendChild(formattedHTML);
  } else {
    console.error("Target element not found");
  }
};

// Example usage:
// Provide the API URL and the ID of the target HTML element to append the contact details
const apiURL = "https://example.com/api/contact-details";
const targetElementId = "contact-info";

displayContactDetails(apiURL, targetElementId);
