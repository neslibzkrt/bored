const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    console.log("Yes button clicked");
    question.innerHTML = "Understandable, everyone loves Nes ";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmVrOGR2MXF3c2VuYmNncGh6cm4zd3NreWc5MzcyMWhzdHlnMHlmaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bKBM7H63PIykM/giphy.gif";
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript loaded"); // Check if the script is running

    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");

    if (!yesBtn || !noBtn) {
        console.error("Buttons not found");
        return; // Exit if buttons are not found
    }

    yesBtn.addEventListener("click", () => {
        console.log("Yes button clicked");
        // Change text and gif when the Yes button is clicked
        const question = document.querySelector(".question");
        const gif = document.querySelector(".gif");
        question.innerHTML = "Understandable, everyone loves Nes";
        gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmVrOGR2MXF3c2VuYmNncGh6cm4zd3NreWc5MzcyMWhzdHlnMHlmaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bKBM7H63PIykM/giphy.gif";
    });

    noBtn.addEventListener("click", () => {
        console.log("No button clicked");
        // Change text and gif when the No button is clicked
        question.innerHTML = "u arschloch! did u actually tried that hard";
        gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2Rrc2s2NDl2MTY2NGVyeW9jZm1uNnNraGZiM2dweGV2OGtzbjY5dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SbN0WomN4S7Z7tpKOC/giphy.gif"
    });
    // Make the No button move randomly on hover
    noBtn.addEventListener("mouseover", () => {
        console.log("No button hovered");
        const wrapper = document.querySelector(".wrapper");
        const wrapperRect = wrapper.getBoundingClientRect();
        const noBtnRect = noBtn.getBoundingClientRect();

        // Calculate max positions to ensure the button stays within the wrapper
        const maxX = wrapperRect.width - noBtnRect.width;
        const maxY = wrapperRect.height - noBtnRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.position = "absolute"; // Ensure position is absolute for movement
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    });
});
