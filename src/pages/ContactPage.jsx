function ContactPage() {
  return ()
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact Us Form</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            line-height: 1.6;
        }

        .contact-container {
            background-color: white;
            width: 100%;
            max-width: 500px;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .contact-form h2 {
            text-align: center;
            color: #333;
            margin-bottom: 25px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: #555;
            font-weight: bold;
        }

        .form-control {
            width: 100%;
            padding: 10px;
            border: 2px solid #e0e0e0;
            border-radius: 5px;
            transition: border-color 0.3s ease;
        }

        .form-control:focus {
            outline: none;
            border-color: #4a90e2;
            box-shadow: 0 0 5px rgba(74, 144, 226, 0.3);
        }

        textarea.form-control {
            resize: vertical;
            min-height: 100px;
        }

        .submit-btn {
            width: 100%;
            padding: 12px;
            background-color: #4a90e2;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .submit-btn:hover {
            background-color: #357abd;
        }

        .error-input {
            border-color: #ff6b6b;
        }

        .error-message {
            color: #ff6b6b;
            font-size: 0.8em;
            margin-top: 5px;
        }

        @media screen and (max-width: 600px) {
            .contact-container {
                width: 95%;
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="contact-container">
        <form class="contact-form">
            <h2>Contact Us</h2>
            
            <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" class="form-control" required>
            </div>
            
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" class="form-control" required>
            </div>
            
            <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" class="form-control">
            </div>
            
            <div class="form-group">
                <label for="message">Your Message</label>
                <textarea id="message" class="form-control" required></textarea>
            </div>
            
            <button type="submit" class="submit-btn">Send Message</button>
        </form>
    </div>

    <script>
        // Basic client-side validation
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            // Reset previous error states
            [nameInput, emailInput, messageInput].forEach(input => {
                input.classList.remove('error-input');
            });

            // Name validation
            if (nameInput.value.trim() === '') {
                nameInput.classList.add('error-input');
                isValid = false;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailInput.classList.add('error-input');
                isValid = false;
            }

            // Message validation
            if (messageInput.value.trim() === '') {
                messageInput.classList.add('error-input');
                isValid = false;
            }

            if (isValid) {
                alert('Form submitted successfully!');
                // In a real scenario, you'd send this data to a server
            }
        });
     
    </script>
</body>
</html>
    return <h1>This is the contact page.</h1>;
  
  
  export default ContactPage;