function calculateAge() {
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value) - 1; // 0-indexed months
  const year = parseInt(document.getElementById('year').value);

  const birthDate = new Date(year, month, day);
  const today = new Date();

  if (isNaN(birthDate)) {
    document.getElementById('result').textContent = "Please enter a valid date.";
    return;
  }

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  document.getElementById('result').textContent = "Your age is: " + age + " years.";
}
