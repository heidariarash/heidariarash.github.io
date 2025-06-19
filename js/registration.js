document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm")
  const submitButton = document.getElementById("submitButton")
  const formStatus = document.getElementById("formStatus")
  const emailInput = document.getElementById("email")
  const emailError = document.getElementById("emailError")
  const receptionError = document.getElementById("receptionError")

  // IMPORTANT: Replace with YOUR Google Apps Script Web App URL
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwUKYOmJ0vxXe-_B1ylkOzBEyK6WzLJNKJKsxJpob89qyJCSeLImcmgq7vCsL3tfByy/exec"

  form.addEventListener("submit", (e) => {
    e.preventDefault() // Prevent default form submission

    if (!validateForm()) {
      return
    }

    submitButton.disabled = true
    submitButton.textContent = "Submitting..."
    formStatus.textContent = ""
    formStatus.className = "form-status-message"

    const formData = new FormData(form)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      reception: formData.get("reception"),
    }

    // Try POST method first
    submitWithPost(data)
      .catch((error) => {
        console.log("POST failed, trying GET method:", error)
        return submitWithGet(data)
      })
      .catch((error) => {
        console.log("GET failed, trying form submission:", error)
        return submitWithForm(data)
      })
      .catch((error) => {
        console.error("All methods failed:", error)
        formStatus.textContent = "Unable to submit registration. Please try again or contact support."
        formStatus.classList.add("error")
      })
      .finally(() => {
        submitButton.disabled = false
        submitButton.textContent = "Submit Registration"
      })
  })

  // Method 1: POST with JSON
  function submitWithPost(data) {
    return fetch(SCRIPT_URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then((result) => {
        handleSuccess(result)
        return result
      })
  }

  // Method 2: GET with URL parameters
  function submitWithGet(data) {
    const params = new URLSearchParams(data)
    const urlWithParams = `${SCRIPT_URL}?${params.toString()}`

    return fetch(urlWithParams, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then((result) => {
        handleSuccess(result)
        return result
      })
  }

  // Method 3: Hidden form submission (fallback)
  function submitWithForm(data) {
    return new Promise((resolve, reject) => {
      // Create a hidden form
      const hiddenForm = document.createElement("form")
      hiddenForm.method = "POST"
      hiddenForm.action = SCRIPT_URL
      hiddenForm.target = "hidden_iframe"
      hiddenForm.style.display = "none"

      // Add form fields
      Object.keys(data).forEach((key) => {
        const input = document.createElement("input")
        input.type = "hidden"
        input.name = key
        input.value = data[key]
        hiddenForm.appendChild(input)
      })

      // Create hidden iframe
      const iframe = document.createElement("iframe")
      iframe.name = "hidden_iframe"
      iframe.style.display = "none"

      // Handle iframe load
      iframe.onload = () => {
        setTimeout(() => {
          document.body.removeChild(hiddenForm)
          document.body.removeChild(iframe)
          formStatus.textContent = "Registration submitted successfully!"
          formStatus.classList.add("success")
          form.reset()
          resolve({ result: "success" })
        }, 1000)
      }

      iframe.onerror = () => {
        document.body.removeChild(hiddenForm)
        document.body.removeChild(iframe)
        reject(new Error("Form submission failed"))
      }

      // Add to DOM and submit
      document.body.appendChild(iframe)
      document.body.appendChild(hiddenForm)
      hiddenForm.submit()
    })
  }

  function handleSuccess(result) {
    if (result.result === "success") {
      formStatus.textContent = result.message || "Registration successful!"
      formStatus.classList.add("success")
      form.reset()
    } else {
      formStatus.textContent = result.message || "An error occurred. Please try again."
      formStatus.classList.add("error")
    }
  }

  function validateForm() {
    let isValid = true
    emailError.textContent = ""
    receptionError.textContent = ""

    // Email validation
    const emailValue = emailInput.value.trim()
    if (!emailValue || !isValidEmail(emailValue)) {
      emailError.textContent = "Please enter a valid email address."
      isValid = false
    }

    // Reception radio button validation
    const receptionSelected = document.querySelector('input[name="reception"]:checked')
    if (!receptionSelected) {
      receptionError.textContent = "Please select an option for reception attendance."
      isValid = false
    }

    return isValid
  }

  function isValidEmail(email) {
    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Copyright year
  const currentYearSpan = document.getElementById("currentYearRegistration")
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear()
  }
})
