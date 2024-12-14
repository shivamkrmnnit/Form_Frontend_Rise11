## Claim Form Application
 LIVE - https://form-frontend-rise11.vercel.app/

## Overview

The Claim Form Application is a web-based tool designed to allow users to file claims efficiently and securely. It features a user-friendly interface for inputting claim details, selecting relevant options, and uploading necessary documents.

## Features

- **Claim Value Input**: Users can enter the contract and claim values with currency selection.
- **Place Selection**: Users can select a valid city in India for claim proceedings.
- **Language Selection**: Users can choose the language for claim proceedings.
- **File Uploads**: Users can upload statements, agreements, and additional documentation.
- **Validation**: Ensures all required fields are filled before submission.
- **Dynamic File Uploads**: Allows adding multiple files for additional documentation.

## Technologies Used

- **Frontend**: React.js
- **Icons**: FontAwesome
- **Styling**: CSS

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. Clone the repository:

```
git clone https://github.com/shivamkrmnnit/Form_Frontend_Rise11.git
```

2. Navigate to the project directory:

```
cd Rise11
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm start
```

5. Open your browser and go to:

```
http://localhost:3000
```

# Usage

1. Fill Out the Form: Enter the required details in the provided fields.

2. Select Options: Choose the appropriate city and language from the dropdown menus.

3. Upload Files: Add necessary files like statements and agreements.

4. Submit: Ensure all fields are valid, then click the Submit button.

# Project Structure

```
claim-form/
├── public/
├── src/
│   ├── components/
│   │   ├── ClaimForm.js   # Main component for the claim form
│   │   ├── ClaimForm.css  # Styling for the claim form
│   ├── App.js             # Root component
│   ├── index.js           # Entry point
├── package.json           # Dependencies and scripts
├── README.md              # Project documentation


```      

# Validation Logic

1. Contract Value: Ensures the input is not empty.

2. Claim Value: Checks the input is not empty.

3. Place Selection: Validates the selected city is from the predefined list of Indian cities.

4. Language Selection: Ensures the selected language is from the predefined list of valid languages.

5. File Uploads: Requires at least one file to be uploaded for each mandatory section.

# Future Enhancements

1. Add backend integration for form submission.

2. Implement multi-language support for the UI.

3. Add a progress tracker for claim processing.

4. Enhance validation with regex for numerical inputs.



## Responsive Design (Desktop, Tablet, Mobile)
The dashboard has been built with responsiveness in mind, ensuring a smooth experience across different screen sizes.

- Desktop View: The layout adjusts to use larger screens effectively, with form fields and file upload sections arranged for easy navigation.
 ![Screenshot 2024-12-14 165809](https://github.com/user-attachments/assets/d0d311ea-6b85-4d3d-9684-c828eab00e58)

- Tablet View: The layout adjusts to a smaller screen, with elements stacking vertically for better accessibility and usability.
  ![Screenshot 2024-12-14 165939](https://github.com/user-attachments/assets/e46d7952-0a3f-4668-89ac-8161cf62bb9e)
 - iPad pro
- Mobile View: The design is optimized for mobile, with touch-friendly elements, stacked form fields, and file upload buttons.
![Screenshot 2024-12-14 170021](https://github.com/user-attachments/assets/031f0b69-4da1-4680-a949-881ca9230c59)
- iPhone 12 pro
# Responsive Approach
- Media Queries: Used CSS media queries to ensure the layout adapts to different screen sizes.
- Flexbox and Grid Layouts: Used Flexbox for alignment and Grid for complex layouts to ensure elements resize and reposition correctly.
- Viewport Units: Used viewport width (vw) and height (vh) for fluid scaling across devices.
# Approach to Building the Dashboard
The dashboard was built with React.js to leverage its component-based structure, making it easy to maintain and scale. CSS media queries were used to make the layout responsive across desktop, tablet, and mobile views. The application uses controlled components for form inputs, ensuring real-time validation and updates.

# Challenges Faced and Solutions
1. Responsive Design: Ensuring that the layout works seamlessly across all devices was a challenge. I used CSS media queries to adjust the layout and element sizes dynamically based on the screen width.

- Solution: Implemented a mobile-first approach, starting with a mobile layout and progressively enhancing it for tablet and desktop views using media queries.
2. File Uploads: Handling file uploads on different devices, especially mobile, posed some challenges with UI responsiveness and file size limitations.

- Solution: Added a dynamic file upload feature with clear instructions and progress indicators, ensuring compatibility with various devices and browsers.
3. Form Validation: Ensuring all fields are validated before submission, especially when dealing with dynamic content like file uploads, required careful planning.

- Solution: Built custom validation logic for each field and ensured that users are alerted if any field is incomplete or invalid before submission.
  
# Assumptions Made
- The user will have a stable internet connection for uploading files.
- The form fields will be filled in the correct format (e.g., currency values in proper format, city names from the list).
- The application will primarily be used on modern browsers that support CSS Grid and Flexbox.

# Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature/bugfix:
```
git checkout -b feature-name
```
3. Commit your changes:
```
git commit -m "Add new feature"
```
4. Push to your branch:
```
git push origin feature-name
```
5. Create a pull request.



# Contact

For any questions or suggestions, feel free to reach out:

Email: shivamkrmnnit@gmail.com

[@ShivamKumar](https://github.com/shivamkrmnnit)

