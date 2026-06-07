const bookingForm = document.querySelector("#booking-form");
const formStatus = document.querySelector("#form-status");

if (bookingForm && formStatus) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(bookingForm);
    const name = formData.get("name") || "there";
    const vehicle = formData.get("vehicle") || "your vehicle";
    const service = formData.get("service") || "detailing";

    formStatus.textContent = `Thanks, ${name}! Your ${service} request for ${vehicle} is ready. Please call or text (865) 300-2475 to confirm your appointment.`;
    bookingForm.reset();
  });
}
