# chatbot-setup
# **BeyondChats UI/UX Setup Workflow**

This project implements a mobile-responsive UI/UX for setting up a chatbot for new businesses through BeyondChats. The application allows users to go through a multi-step process for registration, organization setup, and chatbot integration.

## **Project Overview**

The project is divided into several sections for an efficient setup experience:

1. **User Registration**: Users can register by providing their name, email, and password. They can also continue with Google. Email verification is required for a genuine registration.

2. **Setup Organization**: Users enter their company details, such as name, website URL, and description. They can auto-fetch the meta-description from the website URL (if available) and review the scraped pages for chatbot training.

3. **Chatbot Integration & Testing**: 
   - Users can test the chatbot on their website.
   - Users can integrate the chatbot into their website by following simple instructions or by emailing instructions to their developer.
   - The UI provides feedback for successful and failed integrations.

## **Technologies Used**

- **HTML5**: The structure and content of the webpage.
- **CSS3**: Styling and layout, with media queries for mobile responsiveness.
- **JavaScript**: Functionality for handling user interactions and dynamic content loading.
- **Responsive Design**: Optimized for both desktop and mobile screens, ensuring a smooth experience on all devices.
- **UI/UX best practices**: To ensure an intuitive and interactive user experience.

## **Features**

- **Registration Form**: Name, email, and password input fields. Option to continue with Google.
- **Email Verification**: Verification code input after registration.
- **Organization Setup**: Input fields for company name, website URL, and description.
- **Web Scraping and Data Display**: Lists scraped pages and allows users to view the data chunks.
- **Chatbot Integration**: Buttons to test and integrate the chatbot on the user's website with detailed instructions.

## **Mobile-Friendly**

- The UI is designed to be **mobile-responsive** using **media queries**.
- Mobile-specific optimizations for **buttons, input fields, and layout** make the interface touch-friendly and user-friendly on smaller screens.
- Larger touch areas for buttons and inputs for easy interaction.
- Optimized content scaling to avoid overflow or zooming on mobile devices.

## **Instructions to Run the Project**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/beyondchats-setup.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd beyondchats-setup
   ```

3. **Open the project in your browser**:
   - Open the `index.html` file in your browser to view the UI.

4. **Customization**:
   - Customize the website's meta description, dummy data, and other configurations in the provided files to fit your backend setup.

## **File Structure**

```plaintext
beyondchats-setup/
│
├── index.html        # Main HTML structure
├── style.css         # Styling for the app
├── app.js            # JavaScript for functionality
└── README.md         # Project documentation (this file)
```

## **Features in Detail**

### 1. **Registration Section**

- Users can input their name, email, and password to create an account.
- **Google OAuth** integration is provided for quick login.
- **Email Verification** is required for genuine registrations.

### 2. **Setup Organization**

- Input company name, website URL, and description.
- Fetch the website's meta-description automatically by clicking a button.
- View detected web pages and their training status, with the option to inspect scraped data.

### 3. **Chatbot Integration & Testing**

- **Test Chatbot**: View the chatbot's functionality on a dummy version of the user's website.
- **Integrate Chatbot**: Provides the user with integration instructions (copy-paste code or email the developer).
- **Test Integration**: Displays success or error messages with buttons to explore the admin panel or interact with the chatbot.

## **To Do / Future Improvements**

- **Backend Integration**: Link with backend API to auto-fetch meta-description and handle real-time website scraping.
- **OAuth Integration**: Implement full OAuth login for Google.
- **More Animations**: Add more interactive animations for button clicks and loading states.

## **Contributing**

If you'd like to contribute to this project, feel free to fork it, submit issues, or open pull requests. Please follow standard coding conventions and ensure the code is well-documented.

## **License**

This project is open-source and available under the MIT License.

---

Make sure to update any sections, such as the "Instructions to Run the Project" or "File Structure," based on your actual project directory structure and requirements. You can also update the links to point to the correct project repository.

