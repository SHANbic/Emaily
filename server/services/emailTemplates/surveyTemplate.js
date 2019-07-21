module.exports = survey => {
  return `
  <html>
    <body>
      <div style="text-align: center">
        <h3>How bad do you love our products?</h3>
        <p>Your feedback truly matters, please help us getting better</p>
        <p>${survey.body}</p>
        <div>
          <a href="http://localhost:3000">Yes</a>
        </div>
        <div>
          <a href="http://localhost:3000">No</a>
        </div>
      </div>
    </body>
  </html>
  `;
};
